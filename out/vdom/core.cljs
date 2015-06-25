(ns vdom.core
  (:require [cljs.core.async :refer [chan <! put!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def diff js/VDOM.diff)
(def patch js/VDOM.patch)
(def create js/VDOM.create)
(def VHtml js/VDOM.VHtml)
(def VSvg js/VDOM.VSvg)

(defn flatten-children [[head & tail]]
  (if (nil? head)
    (list)
    (concat
      (if (seq? head) head (list head))
      (if (seq? tail) (flatten-children tail)))))

(defn parse-args [[tag attrs & children]]
  [tag attrs (flatten-children children)])

(declare svg-tree)

(defn html-tree [args]
  (let [[tag attrs children] (parse-args args)]
    (if (= :svg tag)
      (svg-tree args)
      (new VHtml
           (name tag)
           (clj->js attrs)
           (clj->js (map html-tree children))))))

(defn svg-tree [args]
  (let [[tag attrs children] (parse-args args)]
    (new VSvg
         (name tag)
         (clj->js attrs)
         (clj->js (map (if (= :foreignObject tag)
                         html-tree
                         svg-tree)
                       children)))))

(def tree html-tree)

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
    (let [tree (atom (tree (<! views)))
          root (atom (create @tree))
          update (fn [new-tree]
                   (let [patches (diff @tree new-tree)]
                     (swap! root patch patches)
                     (reset! tree new-tree)))]
      (.appendChild elem @root)
      (loop [new-tree (<! views)]
        (.requestAnimationFrame js/window
          #(update (tree new-tree)))
        (recur (<! views))))))
