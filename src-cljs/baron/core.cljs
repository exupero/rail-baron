(ns baron.core
  (:use [cljs.core.async :only [chan <! put! close!]])
  (:require [strokes :refer [d3]]
            [baron.plot :as plot]
            [cljs.reader :as reader]
            [goog.net.XhrIo :as xhr])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn fetch [parser path]
  (let [ch (chan)]
    (xhr/send path
              (fn [event]
                (put! ch (-> event :target .getResponseText parser))
                (close! ch)))
    ch))

(def projection (-> d3 :geo .azimuthalEqualArea
                  (.scale width)
                  (.translate [33.5 262.5])
                  (.rotate [100 -45])
                  (.center [-17.6076 -4.7913])
                  (.scale 1297)))

(defn draw-usa [graph {:keys [width height]} border]
  (-> graph
    (plot/append!
      [:defs {}
       [:path {:datum (.feature js/topojson border (-> border :objects :land))
               :attr {:id "land"
                      :d (-> d3 :geo .path
                           (.projection projection))}}]]
      [:clipPath {:attr {:id "clip"}}
       [:use {:attr {:xlink:href "#land"}}]]
      [:image {:attr {:clip-path "url(#clip)"
                      :xlink:href "/resources/public/img/shaded-relief.png"
                      :width width
                      :height height}}]
      [:use {:attr {:xlink:href "#land"}}])))

(defn draw-cities [graph cities]
  (plot/bind! graph ".city" (seq cities)
              [:g {:attr {:class "city"
                          :transform #(let [{:keys [lat lon]} (second %)]
                                        (apply plot/translate (projection [lon lat])))}}
               [:circle {:attr {:fill "steelblue"
                                :stroke "white"
                                :stroke-width 2
                                :r 10
                                :cx 0
                                :cy 0
                                :data-name first}}]]))

(defn draggable! [sel]
  (let [drag #(this-as this
                       (plot/configure! (.select d3 this)
                                        {:attr {:transform (plot/translate (-> d3 :event :x)
                                                                           (-> d3 :event :y))}}))]
    (.call sel
           (-> d3 :behavior .drag (.on "drag" drag)))))

(go
  (let [size {:width 960 :height 600}
        graph (-> d3
                (.select "#map")
                (plot/svg size))]
    (draw-usa graph size (<! (fetch #(.parse js/JSON %) "/data/us.json")))
    (draw-cities graph (<! (fetch reader/read-string "/data/cities.edn")))))
