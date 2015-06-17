(ns vdom.core
  (:require [cljs.core.async :refer [chan <! put!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def diff js/VDOM.diff)
(def patch js/VDOM.patch)
(def create js/VDOM.create)

(defn flatten-children [[head & tail]]
  (cond
    (seq? head)    (concat head (flatten-children tail))
    (nil? head)    (list)
    :else          (concat (list head) (flatten-children tail))))

(defn html-node [tag attrs children]
  (new js/VDOM.VHtml (name tag) (clj->js attrs) (clj->js children)))

(defn svg-node [tag attrs children]
  (new js/VDOM.VSvg (name tag) (clj->js attrs) (clj->js children)))

(defn text-node [s]
  (new js/VDOM.VText s))

(declare svg-tree)

(defn html-tree [[tag attrs & children :as arg]]
  (cond
    (string? arg)
    (text-node arg)

    (= :svg tag)
    (svg-tree arg)

    :else
    (html-node tag attrs (map html-tree (flatten-children children)))))

(defn svg-tree [[tag attrs & children :as arg]]
  (cond
    (string? arg)
    (text-node arg)

    (= :foreignObject tag)
    (svg-node tag attrs (map html-tree (flatten-children children)))

    :else
    (svg-node tag attrs (map svg-tree (flatten-children children)))))

(defn foldp [f init in]
  (let [out (chan)]
    (put! out init)
    (go-loop [m init
              v (<! in)]
      (let [m2 (f m v)]
        (put! out m2)
        (recur m2 (<! in))))
    out))

(defn render! [views elem]
  (go
    (let [tree (atom (html-tree (<! views)))
          root (atom (create @tree))
          update (fn [t]
                   (let [patches (diff @tree t)]
                     (swap! root patch patches)
                     (reset! tree t)))]
      (.appendChild elem @root)
      (loop [new-tree (<! views)]
        (.requestAnimationFrame js/window
          #(update (html-tree new-tree)))
        (recur (<! views))))))
