// Compiled by ClojureScript 0.0-3195 {}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__7122__auto___12274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7122__auto___12274,out){
return (function (){
var f__7123__auto__ = (function (){var switch__7101__auto__ = ((function (c__7122__auto___12274,out){
return (function (state_12260){
var state_val_12261 = (state_12260[(1)]);
if((state_val_12261 === (5))){
var inst_12252 = (state_12260[(7)]);
var inst_12255 = (state_12260[(2)]);
var inst_12249 = inst_12252;
var inst_12250 = inst_12255;
var state_12260__$1 = (function (){var statearr_12262 = state_12260;
(statearr_12262[(8)] = inst_12249);

(statearr_12262[(9)] = inst_12250);

return statearr_12262;
})();
var statearr_12263_12275 = state_12260__$1;
(statearr_12263_12275[(2)] = null);

(statearr_12263_12275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (4))){
var inst_12258 = (state_12260[(2)]);
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12260__$1,inst_12258);
} else {
if((state_val_12261 === (3))){
var inst_12249 = (state_12260[(8)]);
var inst_12250 = (state_12260[(9)]);
var inst_12252 = (state_12260[(7)]);
var inst_12252__$1 = f.call(null,inst_12249,inst_12250);
var inst_12253 = cljs.core.async.put_BANG_.call(null,out,inst_12252__$1);
var state_12260__$1 = (function (){var statearr_12264 = state_12260;
(statearr_12264[(10)] = inst_12253);

(statearr_12264[(7)] = inst_12252__$1);

return statearr_12264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12260__$1,(5),in$);
} else {
if((state_val_12261 === (2))){
var inst_12248 = (state_12260[(2)]);
var inst_12249 = init;
var inst_12250 = inst_12248;
var state_12260__$1 = (function (){var statearr_12265 = state_12260;
(statearr_12265[(8)] = inst_12249);

(statearr_12265[(9)] = inst_12250);

return statearr_12265;
})();
var statearr_12266_12276 = state_12260__$1;
(statearr_12266_12276[(2)] = null);

(statearr_12266_12276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12261 === (1))){
var state_12260__$1 = state_12260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12260__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__7122__auto___12274,out))
;
return ((function (switch__7101__auto__,c__7122__auto___12274,out){
return (function() {
var vdom$elm$foldp_$_state_machine__7102__auto__ = null;
var vdom$elm$foldp_$_state_machine__7102__auto____0 = (function (){
var statearr_12270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12270[(0)] = vdom$elm$foldp_$_state_machine__7102__auto__);

(statearr_12270[(1)] = (1));

return statearr_12270;
});
var vdom$elm$foldp_$_state_machine__7102__auto____1 = (function (state_12260){
while(true){
var ret_value__7103__auto__ = (function (){try{while(true){
var result__7104__auto__ = switch__7101__auto__.call(null,state_12260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7104__auto__;
}
break;
}
}catch (e12271){if((e12271 instanceof Object)){
var ex__7105__auto__ = e12271;
var statearr_12272_12277 = state_12260;
(statearr_12272_12277[(5)] = ex__7105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12278 = state_12260;
state_12260 = G__12278;
continue;
} else {
return ret_value__7103__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__7102__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__7102__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__7102__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__7102__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__7102__auto____0;
vdom$elm$foldp_$_state_machine__7102__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__7102__auto____1;
return vdom$elm$foldp_$_state_machine__7102__auto__;
})()
;})(switch__7101__auto__,c__7122__auto___12274,out))
})();
var state__7124__auto__ = (function (){var statearr_12273 = f__7123__auto__.call(null);
(statearr_12273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7122__auto___12274);

return statearr_12273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7124__auto__);
});})(c__7122__auto___12274,out))
);


return out;
});
vdom.elm.render_BANG_ = (function vdom$elm$render_BANG_(views,elem){
var render = vdom.core.renderer.call(null,elem);
var c__7122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7122__auto__,render){
return (function (){
var f__7123__auto__ = (function (){var switch__7101__auto__ = ((function (c__7122__auto__,render){
return (function (state_12307){
var state_val_12308 = (state_12307[(1)]);
if((state_val_12308 === (4))){
var inst_12301 = (state_12307[(2)]);
var inst_12302 = render.call(null,inst_12301);
var state_12307__$1 = (function (){var statearr_12309 = state_12307;
(statearr_12309[(7)] = inst_12302);

return statearr_12309;
})();
var statearr_12310_12319 = state_12307__$1;
(statearr_12310_12319[(2)] = null);

(statearr_12310_12319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12308 === (3))){
var inst_12305 = (state_12307[(2)]);
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12307__$1,inst_12305);
} else {
if((state_val_12308 === (2))){
var state_12307__$1 = state_12307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12307__$1,(4),views);
} else {
if((state_val_12308 === (1))){
var state_12307__$1 = state_12307;
var statearr_12311_12320 = state_12307__$1;
(statearr_12311_12320[(2)] = null);

(statearr_12311_12320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7122__auto__,render))
;
return ((function (switch__7101__auto__,c__7122__auto__,render){
return (function() {
var vdom$elm$render_BANG__$_state_machine__7102__auto__ = null;
var vdom$elm$render_BANG__$_state_machine__7102__auto____0 = (function (){
var statearr_12315 = [null,null,null,null,null,null,null,null];
(statearr_12315[(0)] = vdom$elm$render_BANG__$_state_machine__7102__auto__);

(statearr_12315[(1)] = (1));

return statearr_12315;
});
var vdom$elm$render_BANG__$_state_machine__7102__auto____1 = (function (state_12307){
while(true){
var ret_value__7103__auto__ = (function (){try{while(true){
var result__7104__auto__ = switch__7101__auto__.call(null,state_12307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7104__auto__;
}
break;
}
}catch (e12316){if((e12316 instanceof Object)){
var ex__7105__auto__ = e12316;
var statearr_12317_12321 = state_12307;
(statearr_12317_12321[(5)] = ex__7105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12322 = state_12307;
state_12307 = G__12322;
continue;
} else {
return ret_value__7103__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__7102__auto__ = function(state_12307){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__7102__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__7102__auto____1.call(this,state_12307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__7102__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__7102__auto____0;
vdom$elm$render_BANG__$_state_machine__7102__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__7102__auto____1;
return vdom$elm$render_BANG__$_state_machine__7102__auto__;
})()
;})(switch__7101__auto__,c__7122__auto__,render))
})();
var state__7124__auto__ = (function (){var statearr_12318 = f__7123__auto__.call(null);
(statearr_12318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7122__auto__);

return statearr_12318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7124__auto__);
});})(c__7122__auto__,render))
);

return c__7122__auto__;
});

//# sourceMappingURL=elm.js.map