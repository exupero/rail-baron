// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
vdom.core.diff = VDOM.diff;
vdom.core.patch = VDOM.patch;
vdom.core.create = VDOM.create;
vdom.core.flatten_children = (function vdom$core$flatten_children(p__38520){
var vec__38522 = p__38520;
var head = cljs.core.nth.call(null,vec__38522,(0),null);
var tail = cljs.core.nthnext.call(null,vec__38522,(1));
if(((head == null)) && ((tail == null))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.seq_QMARK_.call(null,head)){
return cljs.core.concat.call(null,head,vdom$core$flatten_children.call(null,tail));
} else {
if((head == null)){
return vdom$core$flatten_children.call(null,tail);
} else {
return cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,head),vdom$core$flatten_children.call(null,tail));

}
}
}
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
vdom.core.html_tree = (function vdom$core$html_tree(p__38523){
var vec__38525 = p__38523;
var tag = cljs.core.nth.call(null,vec__38525,(0),null);
var attrs = cljs.core.nth.call(null,vec__38525,(1),null);
var children = cljs.core.nthnext.call(null,vec__38525,(2));
var arg = vec__38525;
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
vdom.core.svg_tree = (function vdom$core$svg_tree(p__38526){
var vec__38528 = p__38526;
var tag = cljs.core.nth.call(null,vec__38528,(0),null);
var attrs = cljs.core.nth.call(null,vec__38528,(1),null);
var children = cljs.core.nthnext.call(null,vec__38528,(2));
var arg = vec__38528;
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
elem.appendChild(cljs.core.deref.call(null,root));

return ((function (tree,root){
return (function (view){
var new_tree = vdom.core.html_tree.call(null,view);
var patches = vdom.core.diff.call(null,cljs.core.deref.call(null,tree),new_tree);
return window.requestAnimationFrame(((function (new_tree,patches,tree,root){
return (function (){
cljs.core.swap_BANG_.call(null,root,vdom.core.patch,patches);

return cljs.core.reset_BANG_.call(null,tree,new_tree);
});})(new_tree,patches,tree,root))
);
});
;})(tree,root))
});

//# sourceMappingURL=core.js.map