// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
vdom.core.diff = VDOM.diff;
vdom.core.patch = VDOM.patch;
vdom.core.create = VDOM.create;
vdom.core.flatten_children = (function vdom$core$flatten_children(children){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.remove.call(null,cljs.core.seq_QMARK_,cljs.core.tree_seq.call(null,cljs.core.seq_QMARK_,cljs.core.seq,children)));
});
vdom.core.html_node = (function vdom$core$html_node(tag,attrs,children){
return (new VDOM.VHtml(cljs.core.name.call(null,tag),cljs.core.clj__GT_js.call(null,attrs),cljs.core.clj__GT_js.call(null,children)));
});
vdom.core.svg_node = (function vdom$core$svg_node(tag,attrs,children){
return (new VDOM.VSvg(cljs.core.name.call(null,tag),cljs.core.clj__GT_js.call(null,attrs),cljs.core.clj__GT_js.call(null,children)));
});
vdom.core.text_node = (function vdom$core$text_node(s){
return (new VDOM.VText(s));
});
vdom.core.html_tree = (function vdom$core$html_tree(p__15808){
var vec__15810 = p__15808;
var tag = cljs.core.nth.call(null,vec__15810,(0),null);
var attrs = cljs.core.nth.call(null,vec__15810,(1),null);
var children = cljs.core.nthnext.call(null,vec__15810,(2));
var arg = vec__15810;
if(typeof arg === 'string'){
return vdom.core.text_node.call(null,arg);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"svg","svg",856789142),tag)){
return vdom.core.svg_tree.call(null,arg);
} else {
return vdom.core.html_node.call(null,tag,attrs,cljs.core.map.call(null,vdom$core$html_tree,vdom.core.flatten_children.call(null,children)));

}
}
});
vdom.core.svg_tree = (function vdom$core$svg_tree(p__15811){
var vec__15813 = p__15811;
var tag = cljs.core.nth.call(null,vec__15813,(0),null);
var attrs = cljs.core.nth.call(null,vec__15813,(1),null);
var children = cljs.core.nthnext.call(null,vec__15813,(2));
var arg = vec__15813;
if(typeof arg === 'string'){
return vdom.core.text_node.call(null,arg);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"foreignObject","foreignObject",25502111),tag)){
return vdom.core.svg_node.call(null,tag,attrs,cljs.core.map.call(null,vdom.core.html_tree,vdom.core.flatten_children.call(null,children)));
} else {
return vdom.core.svg_node.call(null,tag,attrs,cljs.core.map.call(null,vdom$core$svg_tree,vdom.core.flatten_children.call(null,children)));

}
}
});
vdom.core.renderer = (function vdom$core$renderer(elem){
var tree = cljs.core.atom.call(null,vdom.core.text_node.call(null,""));
var root = cljs.core.atom.call(null,vdom.core.create.call(null,cljs.core.deref.call(null,tree)));
var update = (((window.requestAnimationFrame == null))?((function (tree,root){
return (function (f){
return f.call(null);
});})(tree,root))
:((function (tree,root){
return (function (f){
return window.requestAnimationFrame(f);
});})(tree,root))
);
elem.appendChild(cljs.core.deref.call(null,root));

return ((function (tree,root,update){
return (function (view){
var new_tree = vdom.core.html_tree.call(null,view);
var patches = vdom.core.diff.call(null,cljs.core.deref.call(null,tree),new_tree);
return update.call(null,((function (new_tree,patches,tree,root,update){
return (function (){
cljs.core.swap_BANG_.call(null,root,vdom.core.patch,patches);

return cljs.core.reset_BANG_.call(null,tree,new_tree);
});})(new_tree,patches,tree,root,update))
);
});
;})(tree,root,update))
});

//# sourceMappingURL=core.js.map