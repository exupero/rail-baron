(ns baron.core
  (:require [cljs.reader :as reader]
            [cljs.core.async :as async :refer [chan put! close!]]
            [cljs.core.match :refer-macros  [match]]
            [goog.net.XhrIo :as xhr]
            [clojure.browser.repl :as repl]
            [vdom.core :as vdom])
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

(defn spy [x] (println x) x)

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

(defn main [actions]
  (fn [{:keys [usa cities selected]}]
    [:main {}
     (for [city selected]
       (str city))
     [:svg {:width width :height height}
      [:defs {}
       [:path {:id "land"
               :d (-> usa land-border path)}]]
      [:clipPath {:id "clip"}
       [:use {"xlink:href" "#land"}]]
      [:image {:clip-path "url(#clip)"
               "xlink:href" "static/img/shaded-relief.png"
               "width" width
               "height" height}]
      [:use {"xlink:href" "#land"}]
      (for [[city-key {city :name :keys [lat lon]}] (seq cities)
            :let [[x y] (projection #js [lon lat])]]
        [:g {:transform (str "translate(" x "," y ")")
             :onclick #(async/put! actions [:select city-key])}
         [:circle {:r 10
                   :fill (if (some #{city-key} selected) "firebrick" "steelblue")}]])]]))

(defn roll [n]
  (fn [xs x]
    (take n (cons x xs))))

(defn step [model action]
  (match action
    :no-op model
    [:select city] (update-in model [:selected] (roll 2) city)))

(go
  (let [actions (chan)
        usa-c (fetch #(.parse js/JSON %) "static/data/us.json")
        cities-c (fetch reader/read-string "static/data/cities.edn")
        payoffs-c (fetch reader/read-string "static/data/payoffs.edn")
        initial-model {:usa (<! usa-c)
                       :cities (<! cities-c)
                       :payoffs (<! payoffs-c)
                       :selected []}
        models (vdom/foldp step initial-model actions)]
    (vdom/render! (async/map (main actions) [models]) js/document.body)))
