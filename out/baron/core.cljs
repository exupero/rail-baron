(ns baron.core
  (:require [cljs.core.async :as async :refer [chan put! close!]]
            [cljs.core.match :refer-macros  [match]]
            [goog.net.XhrIo :as xhr]
            [clojure.browser.repl :as repl]
            [vdom.core :as vdom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce conn (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

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
    (.scale 960)
    (.translate [33.5 262.5])
    (.rotate [100 -45])
    (.center [-17.6076 -4.7913])
    (.scale 1297)))

(def path (-> js/d3 .-geo .path (.projection projection)))

(defn window-width [] (.-clientWidth js/document.body))
(defn window-height [] (.-clientHeight js/document.body))

(defn main [actions]
  (fn [model]
    [:svg {:width (window-width)
           :height (window-height)}
     [:path #_{:d (path (land-border (:usa model)))}]]))

(defn step [model action]
  (match action
    :no-op model))

(go
  (let [actions (chan)
        initial-model {:usa (<! (fetch #(.parse js/JSON %) "static/data/us.json"))
                       :payoffs {}
                       :cities []
                       :selected []}
        models (vdom/foldp step initial-model actions)]
    (vdom/render! (async/map (main actions) [models]) js/document.body)))
