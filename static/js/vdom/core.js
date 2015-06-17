// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
vdom.core.diff = VDOM.diff;
vdom.core.patch = VDOM.patch;
vdom.core.create = VDOM.create;
vdom.core.flatten_children = (function vdom$core$flatten_children(p__34740){
var vec__34742 = p__34740;
var head = cljs.core.nth.call(null,vec__34742,(0),null);
var tail = cljs.core.nthnext.call(null,vec__34742,(1));
if(cljs.core.seq_QMARK_.call(null,head)){
return cljs.core.concat.call(null,head,vdom$core$flatten_children.call(null,tail));
} else {
if((head == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,head),vdom$core$flatten_children.call(null,tail));

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
vdom.core.html_tree = (function vdom$core$html_tree(p__34743){
var vec__34745 = p__34743;
var tag = cljs.core.nth.call(null,vec__34745,(0),null);
var attrs = cljs.core.nth.call(null,vec__34745,(1),null);
var children = cljs.core.nthnext.call(null,vec__34745,(2));
var arg = vec__34745;
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
vdom.core.svg_tree = (function vdom$core$svg_tree(p__34746){
var vec__34748 = p__34746;
var tag = cljs.core.nth.call(null,vec__34748,(0),null);
var attrs = cljs.core.nth.call(null,vec__34748,(1),null);
var children = cljs.core.nthnext.call(null,vec__34748,(2));
var arg = vec__34748;
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
vdom.core.foldp = (function vdom$core$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6473__auto___34803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___34803,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___34803,out){
return (function (state_34789){
var state_val_34790 = (state_34789[(1)]);
if((state_val_34790 === (5))){
var inst_34781 = (state_34789[(7)]);
var inst_34784 = (state_34789[(2)]);
var inst_34778 = inst_34781;
var inst_34779 = inst_34784;
var state_34789__$1 = (function (){var statearr_34791 = state_34789;
(statearr_34791[(8)] = inst_34779);

(statearr_34791[(9)] = inst_34778);

return statearr_34791;
})();
var statearr_34792_34804 = state_34789__$1;
(statearr_34792_34804[(2)] = null);

(statearr_34792_34804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (4))){
var inst_34787 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34789__$1,inst_34787);
} else {
if((state_val_34790 === (3))){
var inst_34779 = (state_34789[(8)]);
var inst_34778 = (state_34789[(9)]);
var inst_34781 = (state_34789[(7)]);
var inst_34781__$1 = f.call(null,inst_34778,inst_34779);
var inst_34782 = cljs.core.async.put_BANG_.call(null,out,inst_34781__$1);
var state_34789__$1 = (function (){var statearr_34793 = state_34789;
(statearr_34793[(10)] = inst_34782);

(statearr_34793[(7)] = inst_34781__$1);

return statearr_34793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34789__$1,(5),in$);
} else {
if((state_val_34790 === (2))){
var inst_34777 = (state_34789[(2)]);
var inst_34778 = init;
var inst_34779 = inst_34777;
var state_34789__$1 = (function (){var statearr_34794 = state_34789;
(statearr_34794[(8)] = inst_34779);

(statearr_34794[(9)] = inst_34778);

return statearr_34794;
})();
var statearr_34795_34805 = state_34789__$1;
(statearr_34795_34805[(2)] = null);

(statearr_34795_34805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (1))){
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34789__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6473__auto___34803,out))
;
return ((function (switch__6452__auto__,c__6473__auto___34803,out){
return (function() {
var vdom$core$foldp_$_state_machine__6453__auto__ = null;
var vdom$core$foldp_$_state_machine__6453__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34799[(0)] = vdom$core$foldp_$_state_machine__6453__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var vdom$core$foldp_$_state_machine__6453__auto____1 = (function (state_34789){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_34789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object)){
var ex__6456__auto__ = e34800;
var statearr_34801_34806 = state_34789;
(statearr_34801_34806[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34807 = state_34789;
state_34789 = G__34807;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$core$foldp_$_state_machine__6453__auto__ = function(state_34789){
switch(arguments.length){
case 0:
return vdom$core$foldp_$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$core$foldp_$_state_machine__6453__auto____1.call(this,state_34789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$core$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$core$foldp_$_state_machine__6453__auto____0;
vdom$core$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$core$foldp_$_state_machine__6453__auto____1;
return vdom$core$foldp_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___34803,out))
})();
var state__6475__auto__ = (function (){var statearr_34802 = f__6474__auto__.call(null);
(statearr_34802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___34803);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___34803,out))
);


return out;
});
vdom.core.render_BANG_ = (function vdom$core$render_BANG_(views,elem){
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__){
return (function (state_34867){
var state_val_34868 = (state_34867[(1)]);
if((state_val_34868 === (6))){
var inst_34862 = (state_34867[(2)]);
var inst_34857 = inst_34862;
var state_34867__$1 = (function (){var statearr_34869 = state_34867;
(statearr_34869[(7)] = inst_34857);

return statearr_34869;
})();
var statearr_34870_34882 = state_34867__$1;
(statearr_34870_34882[(2)] = null);

(statearr_34870_34882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (5))){
var inst_34865 = (state_34867[(2)]);
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34867__$1,inst_34865);
} else {
if((state_val_34868 === (4))){
var inst_34857 = (state_34867[(7)]);
var inst_34848 = (state_34867[(8)]);
var inst_34852 = (state_34867[(9)]);
var inst_34851 = (state_34867[(10)]);
var inst_34859 = (function (){var new_tree = inst_34857;
var update = inst_34852;
var root = inst_34851;
var tree = inst_34848;
return ((function (new_tree,update,root,tree,inst_34857,inst_34848,inst_34852,inst_34851,state_val_34868,c__6473__auto__){
return (function (){
return update.call(null,vdom.core.html_tree.call(null,new_tree));
});
;})(new_tree,update,root,tree,inst_34857,inst_34848,inst_34852,inst_34851,state_val_34868,c__6473__auto__))
})();
var inst_34860 = window.requestAnimationFrame(inst_34859);
var state_34867__$1 = (function (){var statearr_34871 = state_34867;
(statearr_34871[(11)] = inst_34860);

return statearr_34871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34867__$1,(6),views);
} else {
if((state_val_34868 === (3))){
var inst_34856 = (state_34867[(2)]);
var inst_34857 = inst_34856;
var state_34867__$1 = (function (){var statearr_34872 = state_34867;
(statearr_34872[(7)] = inst_34857);

return statearr_34872;
})();
var statearr_34873_34883 = state_34867__$1;
(statearr_34873_34883[(2)] = null);

(statearr_34873_34883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (2))){
var inst_34848 = (state_34867[(8)]);
var inst_34851 = (state_34867[(10)]);
var inst_34846 = (state_34867[(2)]);
var inst_34847 = vdom.core.html_tree.call(null,inst_34846);
var inst_34848__$1 = cljs.core.atom.call(null,inst_34847);
var inst_34849 = cljs.core.deref.call(null,inst_34848__$1);
var inst_34850 = vdom.core.create.call(null,inst_34849);
var inst_34851__$1 = cljs.core.atom.call(null,inst_34850);
var inst_34852 = (function (){var root = inst_34851__$1;
var tree = inst_34848__$1;
return ((function (root,tree,inst_34848,inst_34851,inst_34846,inst_34847,inst_34848__$1,inst_34849,inst_34850,inst_34851__$1,state_val_34868,c__6473__auto__){
return (function (t){
var patches = vdom.core.diff.call(null,cljs.core.deref.call(null,tree),t);
cljs.core.swap_BANG_.call(null,root,vdom.core.patch,patches);

return cljs.core.reset_BANG_.call(null,tree,t);
});
;})(root,tree,inst_34848,inst_34851,inst_34846,inst_34847,inst_34848__$1,inst_34849,inst_34850,inst_34851__$1,state_val_34868,c__6473__auto__))
})();
var inst_34853 = cljs.core.deref.call(null,inst_34851__$1);
var inst_34854 = elem.appendChild(inst_34853);
var state_34867__$1 = (function (){var statearr_34874 = state_34867;
(statearr_34874[(8)] = inst_34848__$1);

(statearr_34874[(9)] = inst_34852);

(statearr_34874[(10)] = inst_34851__$1);

(statearr_34874[(12)] = inst_34854);

return statearr_34874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34867__$1,(3),views);
} else {
if((state_val_34868 === (1))){
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34867__$1,(2),views);
} else {
return null;
}
}
}
}
}
}
});})(c__6473__auto__))
;
return ((function (switch__6452__auto__,c__6473__auto__){
return (function() {
var vdom$core$render_BANG__$_state_machine__6453__auto__ = null;
var vdom$core$render_BANG__$_state_machine__6453__auto____0 = (function (){
var statearr_34878 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34878[(0)] = vdom$core$render_BANG__$_state_machine__6453__auto__);

(statearr_34878[(1)] = (1));

return statearr_34878;
});
var vdom$core$render_BANG__$_state_machine__6453__auto____1 = (function (state_34867){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_34867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e34879){if((e34879 instanceof Object)){
var ex__6456__auto__ = e34879;
var statearr_34880_34884 = state_34867;
(statearr_34880_34884[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34885 = state_34867;
state_34867 = G__34885;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$core$render_BANG__$_state_machine__6453__auto__ = function(state_34867){
switch(arguments.length){
case 0:
return vdom$core$render_BANG__$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$core$render_BANG__$_state_machine__6453__auto____1.call(this,state_34867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$core$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$core$render_BANG__$_state_machine__6453__auto____0;
vdom$core$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$core$render_BANG__$_state_machine__6453__auto____1;
return vdom$core$render_BANG__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__))
})();
var state__6475__auto__ = (function (){var statearr_34881 = f__6474__auto__.call(null);
(statearr_34881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_34881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__))
);

return c__6473__auto__;
});

//# sourceMappingURL=core.js.map