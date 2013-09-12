(ns baron.core
  (:use [cljs.core.async :only [chan <! put! close!]])
  (:require [strokes :refer [d3]]
            [baron.plot :as plot]
            [goog.net.XhrIo :as xhr])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn get-json [path]
  (let [ch (chan)]
    (xhr/send path
              (fn [event]
                (put! ch (.parse js/JSON (-> event :target .getResponseText)))
                (close! ch)))
    ch))

(go
  (let [width 960
        height 600
        graph (-> d3
                (.select "#map")
                (plot/svg {:width width :height height}))
        us (<! (get-json "/data/us.json"))]
    (-> graph
      (plot/append!
        [:defs {}
         [:path {:datum (.feature js/topojson us (-> us :objects :land))
                 :attr {:id "land"
                        :d (-> d3 :geo .path
                             (.projection (-> d3 :geo .azimuthalEqualArea
                                            (.scale width)
                                            (.translate [33.5 262.5])
                                            (.rotate [100 -45])
                                            (.center [-17.6076 -4.7913])
                                            (.scale 1297))))}}]]
        [:clipPath {:attr {:id "clip"}}
         [:use {:attr {:xlink:href "#land"}}]]
        [:image {:attr {:clip-path "url(#clip)"
                        :xlink:href "/resources/public/img/shaded-relief.png"
                        :width width
                        :height height}}]
        [:use {:attr {:xlink:href "#land"}}]))))
