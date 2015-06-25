// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6540__auto___13556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13556,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13556,out){
return (function (state_13542){
var state_val_13543 = (state_13542[(1)]);
if((state_val_13543 === (5))){
var inst_13534 = (state_13542[(7)]);
var inst_13537 = (state_13542[(2)]);
var inst_13531 = inst_13534;
var inst_13532 = inst_13537;
var state_13542__$1 = (function (){var statearr_13544 = state_13542;
(statearr_13544[(8)] = inst_13531);

(statearr_13544[(9)] = inst_13532);

return statearr_13544;
})();
var statearr_13545_13557 = state_13542__$1;
(statearr_13545_13557[(2)] = null);

(statearr_13545_13557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (4))){
var inst_13540 = (state_13542[(2)]);
var state_13542__$1 = state_13542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13542__$1,inst_13540);
} else {
if((state_val_13543 === (3))){
var inst_13531 = (state_13542[(8)]);
var inst_13532 = (state_13542[(9)]);
var inst_13534 = (state_13542[(7)]);
var inst_13534__$1 = f.call(null,inst_13531,inst_13532);
var inst_13535 = cljs.core.async.put_BANG_.call(null,out,inst_13534__$1);
var state_13542__$1 = (function (){var statearr_13546 = state_13542;
(statearr_13546[(10)] = inst_13535);

(statearr_13546[(7)] = inst_13534__$1);

return statearr_13546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13542__$1,(5),in$);
} else {
if((state_val_13543 === (2))){
var inst_13530 = (state_13542[(2)]);
var inst_13531 = init;
var inst_13532 = inst_13530;
var state_13542__$1 = (function (){var statearr_13547 = state_13542;
(statearr_13547[(8)] = inst_13531);

(statearr_13547[(9)] = inst_13532);

return statearr_13547;
})();
var statearr_13548_13558 = state_13542__$1;
(statearr_13548_13558[(2)] = null);

(statearr_13548_13558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (1))){
var state_13542__$1 = state_13542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13542__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6540__auto___13556,out))
;
return ((function (switch__6478__auto__,c__6540__auto___13556,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6479__auto__ = null;
var vdom$elm$foldp_$_state_machine__6479__auto____0 = (function (){
var statearr_13552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13552[(0)] = vdom$elm$foldp_$_state_machine__6479__auto__);

(statearr_13552[(1)] = (1));

return statearr_13552;
});
var vdom$elm$foldp_$_state_machine__6479__auto____1 = (function (state_13542){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13553){if((e13553 instanceof Object)){
var ex__6482__auto__ = e13553;
var statearr_13554_13559 = state_13542;
(statearr_13554_13559[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13560 = state_13542;
state_13542 = G__13560;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6479__auto__ = function(state_13542){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6479__auto____1.call(this,state_13542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6479__auto____0;
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6479__auto____1;
return vdom$elm$foldp_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13556,out))
})();
var state__6542__auto__ = (function (){var statearr_13555 = f__6541__auto__.call(null);
(statearr_13555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13556);

return statearr_13555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13556,out))
);


return out;
});
vdom.elm.event = (function vdom$elm$event(ch,x){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,ch,x);
});
});
vdom.elm.render_BANG_ = (function vdom$elm$render_BANG_(views,elem){
var render = vdom.core.renderer.call(null,elem);
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,render){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,render){
return (function (state_13589){
var state_val_13590 = (state_13589[(1)]);
if((state_val_13590 === (4))){
var inst_13583 = (state_13589[(2)]);
var inst_13584 = render.call(null,inst_13583);
var state_13589__$1 = (function (){var statearr_13591 = state_13589;
(statearr_13591[(7)] = inst_13584);

return statearr_13591;
})();
var statearr_13592_13601 = state_13589__$1;
(statearr_13592_13601[(2)] = null);

(statearr_13592_13601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13590 === (3))){
var inst_13587 = (state_13589[(2)]);
var state_13589__$1 = state_13589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13589__$1,inst_13587);
} else {
if((state_val_13590 === (2))){
var state_13589__$1 = state_13589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13589__$1,(4),views);
} else {
if((state_val_13590 === (1))){
var state_13589__$1 = state_13589;
var statearr_13593_13602 = state_13589__$1;
(statearr_13593_13602[(2)] = null);

(statearr_13593_13602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6540__auto__,render))
;
return ((function (switch__6478__auto__,c__6540__auto__,render){
return (function() {
var vdom$elm$render_BANG__$_state_machine__6479__auto__ = null;
var vdom$elm$render_BANG__$_state_machine__6479__auto____0 = (function (){
var statearr_13597 = [null,null,null,null,null,null,null,null];
(statearr_13597[(0)] = vdom$elm$render_BANG__$_state_machine__6479__auto__);

(statearr_13597[(1)] = (1));

return statearr_13597;
});
var vdom$elm$render_BANG__$_state_machine__6479__auto____1 = (function (state_13589){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13598){if((e13598 instanceof Object)){
var ex__6482__auto__ = e13598;
var statearr_13599_13603 = state_13589;
(statearr_13599_13603[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13604 = state_13589;
state_13589 = G__13604;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6479__auto__ = function(state_13589){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6479__auto____1.call(this,state_13589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6479__auto____0;
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6479__auto____1;
return vdom$elm$render_BANG__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,render))
})();
var state__6542__auto__ = (function (){var statearr_13600 = f__6541__auto__.call(null);
(statearr_13600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_13600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__,render))
);

return c__6540__auto__;
});

//# sourceMappingURL=elm.js.map