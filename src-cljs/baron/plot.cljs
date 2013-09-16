(ns baron.plot
  (:require [cljs.core :as core]
            [strokes :refer [d3]]))

(strokes/bootstrap)

(let [strkey #(if (core/keyword? %) (name %) %)]
  (extend-type object
    ILookup
    (-lookup
      ([this k]
       (aget this (strkey k)))
      ([this k not-found]
       (let [s (strkey k)]
         (if (goog.object.containsKey this s)
           (aget this s)
           not-found))))
    IAssociative
    (-contains-key? [this k]
      (goog.object.containsKey this (strkey k)))
    (-assoc [this k v]
      (aset this (strkey k) v)
      this)))

(defn translate [dx dy]
  (str "translate(" dx ", " dy ")"))

(defn scale
  ([sx]
   (str "scale(" sx ")"))
  ([sx sy]
   (str "scale(" sx ", " sy ")")))

(defn svg [sel {:keys [width height]}]
  (append! sel [:svg {:attr {:width width
                             :height height}}]))

(defn zoomable [sel]
  (let [outer sel
        inner (.append outer "g")]
    (.call outer (-> d3 :behavior .zoom
                   (.on "zoom" #(let [[dx dy] (-> d3 :event :translate)]
                                   (.attr inner "transform" (str (translate dx dy)
                                                                 "scale(" (-> d3 :event :scale) ")"))))))
    inner))

(defn margined [sel {:keys [left top]}]
  (append! sel [:g {:attr {:transform (translate left top)}}]))

(defn centered [sel {width :inner-width height :inner-height}]
  (append! sel [:g {:attr {:transform (translate (/ width 2) (/ height 2))}}]))

(defn bordered-text [sel cls data]
  (bind! sel (str "." cls) data
         [:g {:attr {:class cls}}
          [:text {:attr {:class "text-border"}}]])
  (-> sel
    (.selectAll (str "." cls))
    (.append "text"))
  (-> sel
    (.selectAll (str "." cls))))

(defn ticks [sel cls axis tr]
  (let [sel (-> sel
              (.append "g")
              (.attr "class" cls)
              (.call axis))
        tr (.functor d3 tr)]
    (append! (.selectAll sel ".tick.major")
             [:g {:attr {:class "label"}}])
    (configure! (.selectAll sel ".tick.major .label")
                {:attr {:transform #(translate 0 (tr %))}})
    (-> sel
      (.selectAll ".tick.major text")
      (.each (fn [d i]
               (this-as this
                        (let [label (-> d3
                                      (.select (.-parentNode this))
                                      (.select ".label"))
                              {:keys [x y width height]} (.getBBox this)]
                          (-> label
                            (.insert "rect" "text")
                            (configure! {:attr {:x x
                                                :y y
                                                :width width
                                                :height height
                                                :fill "white"}}))
                          (-> label
                            .node
                            (.appendChild this)))))))))

(defn configure! [sel settings]
  (let [fns {:attr #(.attr %1 %2)
             :style #(.style %1 %2)}]
    (if (seq settings)
      (let [[k v] (first settings)
            f (fns k)]
        (recur (if f
                 (f sel (clj->js v))
                 sel)
               (rest settings)))
      sel)))

(defn append-children! [sel children]
  (doseq [child children]
    (append! sel child))
  sel)

(defn append! [sel & elems]
  (loop [sel sel, last-sel sel, elems elems]
    (if (seq elems)
      (let [[el settings & children] (first elems)
            one #(if-let [v (%2 settings)]
                   (%3 %1 v)
                   %1)]
        (recur sel
               (-> sel
                 (one :datum #(.datum %1 (clj->js %2)))
                 (.append (name el))
                 (configure! settings)
                 (one :text #(.text %1 %2))
                 (append-children! children))
               (rest elems)))
      last-sel)))

(defn unify! [sel data dom]
  (-> sel
    (.data (clj->js data))
    .enter
    (append! dom)))

(defn bind! [sel selector data dom]
  (unify! (.selectAll sel selector) data dom))
