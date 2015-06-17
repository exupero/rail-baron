(ns baron.core
  (:require [cljs.reader :as reader]
            [cljs.core.async :as async :refer [chan put! close!]]
            [cljs.core.match :refer-macros  [match]]
            [goog.net.XhrIo :as xhr]
            [clojure.browser.repl :as repl]
            [vdom.elm :refer [foldp render!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce conn (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def width 960)
(def height 600)

(defn fetch [parser path]
  (let [ch (chan)]
    (xhr/send path
              (fn [event]
                (put! ch (-> event .-target .getResponseText parser))
                (close! ch)))
    ch))

(defn land-border [shape]
  (.feature js/topojson shape (-> shape .-objects .-land)))

(def projection
  (-> js/d3 .-geo .azimuthalEqualArea
    (.scale width)
    (.translate #js [33.5 262.5])
    (.rotate #js [100 -45])
    (.center #js [-17.6076 -4.7913])
    (.scale 1297)))

(def path (-> js/d3 .-geo .path (.projection projection)))

(def lon-lat (juxt :lon :lat))

(def format-money (.format js/d3 "$,"))

(defn ui-country [{:keys [usa]} actions]
  (list
    [:clipPath {:id "clip"}
     [:use {"xlink:href" "#land"}]]
    [:image {:clip-path "url(#clip)"
             :xlink:href "static/img/shaded-relief.png"
             :width width
             :height height}]
    [:use {:xlink:href "#land"}]))

(defn ui-cities [{:keys [cities]} actions]
  (for [[city-key {city :name :keys [lon lat]}] (seq cities)
        :let [[x y] (projection #js [lon lat])]]
    [:g {:class "city"
         :transform (str "translate(" x "," y ")")
         :onclick #(async/put! actions [:select city-key])}
     [:circle {:r 10}]]))

(defn ui-selected [{:keys [cities payoffs selected]} actions]
  (if (= 2 (count selected))
    (let [[a b] selected
          a-coord (lon-lat (cities a))
          b-coord (lon-lat (cities b))
          connection (clj->js {:type "LineString" :coordinates [a-coord b-coord]})]
      (list
        [:path {:class "connection" :d (path connection)}]
        (let [payoff (format-money (* 1000 (get-in payoffs [a b])))
              [x y] (.centroid path connection)]
          [:g {:transform (str "translate(" x "," y ")")}
           [:text {:dy 7 :class "stroke"} payoff]
           [:text {:dy 7} payoff]])))))

(defn ui-selected-cities [{:keys [cities selected]} actions]
  (for [city-key selected
        :let [{city :name :keys [lon lat]} (cities city-key)
              [x y] (projection #js [lon lat])]]
    [:g {:class "city"
         :transform (str "translate(" x "," y ")")
         :onclick #(async/put! actions [:deselect city-key])}
     [:circle {:class "selected" :r 13}]]))

(defn ui-text [{:keys [cities selected payoff]} actions]
  (for [city-key selected
        :let [{city :name :keys [lon lat]} (cities city-key)
              [x y] (projection #js [lon lat])]]
    [:g {:transform (str "translate(" x "," y ")")
         :onclick #(async/put! actions [:deselect city-key])}
     [:text {:dy 7 :class "stroke"} city]
     [:text {:dy 7} city]]))

(defn ui [actions]
  (fn [{:keys [usa] :as model}]
    [:main {}
     [:svg {:width width :height height}
      [:defs {}
       [:path {:id "land"
               :d (-> usa land-border path)}]]
      [:g {:transform "scale(0.9) translate(40,0)"}
       (ui-country model actions)
       (ui-cities model actions)
       (ui-selected model actions)
       (ui-selected-cities model actions)
       (ui-text model actions)]]]))

(defn roll [n]
  (fn [xs x]
    (take n (cons x xs))))

(defn flip [f] #(f %2 %1))

(defn step [model action]
  (match action
    :no-op model
    [:select city] (update-in model [:selected] (roll 2) city)
    [:deselect city] (update-in model [:selected] (flip remove) #{city})))

(go
  (let [actions (chan)
        usa-c (fetch #(.parse js/JSON %) "static/data/us.json")
        cities-c (fetch reader/read-string "static/data/cities.edn")
        payoffs-c (fetch reader/read-string "static/data/payoffs.edn")
        initial-model {:usa (<! usa-c)
                       :cities (<! cities-c)
                       :payoffs (<! payoffs-c)
                       :selected []}
        models (foldp step initial-model actions)]
    (render! (async/map (ui actions) [models]) js/document.body)))
