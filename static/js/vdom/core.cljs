(ns vdom.core
  (:require [cljs.core.async :refer [chan <! put!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def diff js/VDOM.diff)
(def patch js/VDOM.patch)
(def create js/VDOM.create)

(defn flatten-children [children]
  (->> children
    (tree-seq seq? seq)
    (remove seq?)
    (remove nil?)))

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

(defn renderer [elem]
  (let [tree (atom (text-node ""))
        root (atom (create @tree))
        update (if (nil? (.-requestAnimationFrame js/window))
                 (fn [f] (f))
                 (fn [f] (.requestAnimationFrame js/window f)))]
    (.appendChild elem @root)
    (fn [view]
      (let [new-tree (html-tree view)
            patches (diff @tree new-tree)]
        (update (fn []
                  (swap! root patch patches)
                  (reset! tree new-tree)))))))
