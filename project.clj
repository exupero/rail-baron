(defproject baron "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1889"]
                 [org.clojure/core.async "0.1.0-SNAPSHOT"]
                 [net.drib/strokes "0.5.0"]
                 [d3c "0.1.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs" "src-clj"]
                        :compiler {:output-to "resources/public/js/baron.js"
                                   :optimizations :simple
                                   :pretty-print true}
                        :notify-command ["growlnotify" "-m"]}]})
