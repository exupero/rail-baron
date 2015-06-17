// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6473__auto___36563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___36563,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___36563,out){
return (function (state_36549){
var state_val_36550 = (state_36549[(1)]);
if((state_val_36550 === (5))){
var inst_36541 = (state_36549[(7)]);
var inst_36544 = (state_36549[(2)]);
var inst_36538 = inst_36541;
var inst_36539 = inst_36544;
var state_36549__$1 = (function (){var statearr_36551 = state_36549;
(statearr_36551[(8)] = inst_36539);

(statearr_36551[(9)] = inst_36538);

return statearr_36551;
})();
var statearr_36552_36564 = state_36549__$1;
(statearr_36552_36564[(2)] = null);

(statearr_36552_36564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (4))){
var inst_36547 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36549__$1,inst_36547);
} else {
if((state_val_36550 === (3))){
var inst_36539 = (state_36549[(8)]);
var inst_36541 = (state_36549[(7)]);
var inst_36538 = (state_36549[(9)]);
var inst_36541__$1 = f.call(null,inst_36538,inst_36539);
var inst_36542 = cljs.core.async.put_BANG_.call(null,out,inst_36541__$1);
var state_36549__$1 = (function (){var statearr_36553 = state_36549;
(statearr_36553[(10)] = inst_36542);

(statearr_36553[(7)] = inst_36541__$1);

return statearr_36553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36549__$1,(5),in$);
} else {
if((state_val_36550 === (2))){
var inst_36537 = (state_36549[(2)]);
var inst_36538 = init;
var inst_36539 = inst_36537;
var state_36549__$1 = (function (){var statearr_36554 = state_36549;
(statearr_36554[(8)] = inst_36539);

(statearr_36554[(9)] = inst_36538);

return statearr_36554;
})();
var statearr_36555_36565 = state_36549__$1;
(statearr_36555_36565[(2)] = null);

(statearr_36555_36565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (1))){
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36549__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6473__auto___36563,out))
;
return ((function (switch__6452__auto__,c__6473__auto___36563,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6453__auto__ = null;
var vdom$elm$foldp_$_state_machine__6453__auto____0 = (function (){
var statearr_36559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36559[(0)] = vdom$elm$foldp_$_state_machine__6453__auto__);

(statearr_36559[(1)] = (1));

return statearr_36559;
});
var vdom$elm$foldp_$_state_machine__6453__auto____1 = (function (state_36549){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_36549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e36560){if((e36560 instanceof Object)){
var ex__6456__auto__ = e36560;
var statearr_36561_36566 = state_36549;
(statearr_36561_36566[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36567 = state_36549;
state_36549 = G__36567;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6453__auto__ = function(state_36549){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6453__auto____1.call(this,state_36549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6453__auto____0;
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6453__auto____1;
return vdom$elm$foldp_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___36563,out))
})();
var state__6475__auto__ = (function (){var statearr_36562 = f__6474__auto__.call(null);
(statearr_36562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___36563);

return statearr_36562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___36563,out))
);


return out;
});
vdom.elm.render_BANG_ = (function vdom$elm$render_BANG_(views,elem){
var render = vdom.core.renderer.call(null,elem);
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__,render){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__,render){
return (function (state_36596){
var state_val_36597 = (state_36596[(1)]);
if((state_val_36597 === (4))){
var inst_36590 = (state_36596[(2)]);
var inst_36591 = render.call(null,inst_36590);
var state_36596__$1 = (function (){var statearr_36598 = state_36596;
(statearr_36598[(7)] = inst_36591);

return statearr_36598;
})();
var statearr_36599_36608 = state_36596__$1;
(statearr_36599_36608[(2)] = null);

(statearr_36599_36608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36597 === (3))){
var inst_36594 = (state_36596[(2)]);
var state_36596__$1 = state_36596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36596__$1,inst_36594);
} else {
if((state_val_36597 === (2))){
var state_36596__$1 = state_36596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36596__$1,(4),views);
} else {
if((state_val_36597 === (1))){
var state_36596__$1 = state_36596;
var statearr_36600_36609 = state_36596__$1;
(statearr_36600_36609[(2)] = null);

(statearr_36600_36609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6473__auto__,render))
;
return ((function (switch__6452__auto__,c__6473__auto__,render){
return (function() {
var vdom$elm$render_BANG__$_state_machine__6453__auto__ = null;
var vdom$elm$render_BANG__$_state_machine__6453__auto____0 = (function (){
var statearr_36604 = [null,null,null,null,null,null,null,null];
(statearr_36604[(0)] = vdom$elm$render_BANG__$_state_machine__6453__auto__);

(statearr_36604[(1)] = (1));

return statearr_36604;
});
var vdom$elm$render_BANG__$_state_machine__6453__auto____1 = (function (state_36596){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_36596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e36605){if((e36605 instanceof Object)){
var ex__6456__auto__ = e36605;
var statearr_36606_36610 = state_36596;
(statearr_36606_36610[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36611 = state_36596;
state_36596 = G__36611;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6453__auto__ = function(state_36596){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6453__auto____1.call(this,state_36596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6453__auto____0;
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6453__auto____1;
return vdom$elm$render_BANG__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__,render))
})();
var state__6475__auto__ = (function (){var statearr_36607 = f__6474__auto__.call(null);
(statearr_36607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_36607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__,render))
);

return c__6473__auto__;
});

//# sourceMappingURL=elm.js.map