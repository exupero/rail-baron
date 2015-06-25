// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6473__auto___15546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___15546,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___15546,out){
return (function (state_15532){
var state_val_15533 = (state_15532[(1)]);
if((state_val_15533 === (5))){
var inst_15524 = (state_15532[(7)]);
var inst_15527 = (state_15532[(2)]);
var inst_15521 = inst_15524;
var inst_15522 = inst_15527;
var state_15532__$1 = (function (){var statearr_15534 = state_15532;
(statearr_15534[(8)] = inst_15522);

(statearr_15534[(9)] = inst_15521);

return statearr_15534;
})();
var statearr_15535_15547 = state_15532__$1;
(statearr_15535_15547[(2)] = null);

(statearr_15535_15547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15533 === (4))){
var inst_15530 = (state_15532[(2)]);
var state_15532__$1 = state_15532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15532__$1,inst_15530);
} else {
if((state_val_15533 === (3))){
var inst_15522 = (state_15532[(8)]);
var inst_15524 = (state_15532[(7)]);
var inst_15521 = (state_15532[(9)]);
var inst_15524__$1 = f.call(null,inst_15521,inst_15522);
var inst_15525 = cljs.core.async.put_BANG_.call(null,out,inst_15524__$1);
var state_15532__$1 = (function (){var statearr_15536 = state_15532;
(statearr_15536[(7)] = inst_15524__$1);

(statearr_15536[(10)] = inst_15525);

return statearr_15536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15532__$1,(5),in$);
} else {
if((state_val_15533 === (2))){
var inst_15520 = (state_15532[(2)]);
var inst_15521 = init;
var inst_15522 = inst_15520;
var state_15532__$1 = (function (){var statearr_15537 = state_15532;
(statearr_15537[(8)] = inst_15522);

(statearr_15537[(9)] = inst_15521);

return statearr_15537;
})();
var statearr_15538_15548 = state_15532__$1;
(statearr_15538_15548[(2)] = null);

(statearr_15538_15548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15533 === (1))){
var state_15532__$1 = state_15532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15532__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6473__auto___15546,out))
;
return ((function (switch__6452__auto__,c__6473__auto___15546,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6453__auto__ = null;
var vdom$elm$foldp_$_state_machine__6453__auto____0 = (function (){
var statearr_15542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15542[(0)] = vdom$elm$foldp_$_state_machine__6453__auto__);

(statearr_15542[(1)] = (1));

return statearr_15542;
});
var vdom$elm$foldp_$_state_machine__6453__auto____1 = (function (state_15532){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_15532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e15543){if((e15543 instanceof Object)){
var ex__6456__auto__ = e15543;
var statearr_15544_15549 = state_15532;
(statearr_15544_15549[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15550 = state_15532;
state_15532 = G__15550;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6453__auto__ = function(state_15532){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6453__auto____1.call(this,state_15532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6453__auto____0;
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6453__auto____1;
return vdom$elm$foldp_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___15546,out))
})();
var state__6475__auto__ = (function (){var statearr_15545 = f__6474__auto__.call(null);
(statearr_15545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___15546);

return statearr_15545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___15546,out))
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
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__,render){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__,render){
return (function (state_15579){
var state_val_15580 = (state_15579[(1)]);
if((state_val_15580 === (4))){
var inst_15573 = (state_15579[(2)]);
var inst_15574 = render.call(null,inst_15573);
var state_15579__$1 = (function (){var statearr_15581 = state_15579;
(statearr_15581[(7)] = inst_15574);

return statearr_15581;
})();
var statearr_15582_15591 = state_15579__$1;
(statearr_15582_15591[(2)] = null);

(statearr_15582_15591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (3))){
var inst_15577 = (state_15579[(2)]);
var state_15579__$1 = state_15579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15579__$1,inst_15577);
} else {
if((state_val_15580 === (2))){
var state_15579__$1 = state_15579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15579__$1,(4),views);
} else {
if((state_val_15580 === (1))){
var state_15579__$1 = state_15579;
var statearr_15583_15592 = state_15579__$1;
(statearr_15583_15592[(2)] = null);

(statearr_15583_15592[(1)] = (2));


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
var statearr_15587 = [null,null,null,null,null,null,null,null];
(statearr_15587[(0)] = vdom$elm$render_BANG__$_state_machine__6453__auto__);

(statearr_15587[(1)] = (1));

return statearr_15587;
});
var vdom$elm$render_BANG__$_state_machine__6453__auto____1 = (function (state_15579){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_15579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e15588){if((e15588 instanceof Object)){
var ex__6456__auto__ = e15588;
var statearr_15589_15593 = state_15579;
(statearr_15589_15593[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15594 = state_15579;
state_15579 = G__15594;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6453__auto__ = function(state_15579){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6453__auto____1.call(this,state_15579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6453__auto____0;
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6453__auto____1;
return vdom$elm$render_BANG__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__,render))
})();
var state__6475__auto__ = (function (){var statearr_15590 = f__6474__auto__.call(null);
(statearr_15590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_15590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__,render))
);

return c__6473__auto__;
});

//# sourceMappingURL=elm.js.map