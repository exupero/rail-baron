// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('baron.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('vdom.core');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('cljs.reader');
goog.require('cljs.core.match');
if(typeof baron.core.conn !== 'undefined'){
} else {
baron.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
baron.core.width = (960);
baron.core.height = (600);
baron.core.fetch = (function baron$core$fetch(parser,path){
var ch = cljs.core.async.chan.call(null);
goog.net.XhrIo.send(path,((function (ch){
return (function (event){
cljs.core.async.put_BANG_.call(null,ch,parser.call(null,event.target.getResponseText()));

return cljs.core.async.close_BANG_.call(null,ch);
});})(ch))
);

return ch;
});
baron.core.spy = (function baron$core$spy(x){
cljs.core.println.call(null,x);

return x;
});
baron.core.land_border = (function baron$core$land_border(shape){
return topojson.feature(shape,shape.objects.land);
});
baron.core.projection = d3.geo.azimuthalEqualArea().scale(baron.core.width).translate([33.5,262.5]).rotate([(100),(-45)]).center([-17.6076,-4.7913]).scale((1297));
baron.core.path = d3.geo.path().projection(baron.core.projection);
baron.core.main = (function baron$core$main(actions){
return (function (p__35405){
var map__35406 = p__35405;
var map__35406__$1 = ((cljs.core.seq_QMARK_.call(null,map__35406))?cljs.core.apply.call(null,cljs.core.hash_map,map__35406):map__35406);
var selected = cljs.core.get.call(null,map__35406__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__35406__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var usa = cljs.core.get.call(null,map__35406__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4936__auto__ = ((function (map__35406,map__35406__$1,selected,cities,usa){
return (function baron$core$main_$_iter__35407(s__35408){
return (new cljs.core.LazySeq(null,((function (map__35406,map__35406__$1,selected,cities,usa){
return (function (){
var s__35408__$1 = s__35408;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35408__$1);
if(temp__4126__auto__){
var s__35408__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35408__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__35408__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__35410 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__35409 = (0);
while(true){
if((i__35409 < size__4935__auto__)){
var city = cljs.core._nth.call(null,c__4934__auto__,i__35409);
cljs.core.chunk_append.call(null,b__35410,[cljs.core.str(city)].join(''));

var G__35427 = (i__35409 + (1));
i__35409 = G__35427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35410),baron$core$main_$_iter__35407.call(null,cljs.core.chunk_rest.call(null,s__35408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35410),null);
}
} else {
var city = cljs.core.first.call(null,s__35408__$2);
return cljs.core.cons.call(null,[cljs.core.str(city)].join(''),baron$core$main_$_iter__35407.call(null,cljs.core.rest.call(null,s__35408__$2)));
}
} else {
return null;
}
break;
}
});})(map__35406,map__35406__$1,selected,cities,usa))
,null,null));
});})(map__35406,map__35406__$1,selected,cities,usa))
;
return iter__4936__auto__.call(null,selected);
})(),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.land_border.call(null,usa))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)","xlink:href","static/img/shaded-relief.png","width",baron.core.width,"height",baron.core.height], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null),(function (){var iter__4936__auto__ = ((function (map__35406,map__35406__$1,selected,cities,usa){
return (function baron$core$main_$_iter__35411(s__35412){
return (new cljs.core.LazySeq(null,((function (map__35406,map__35406__$1,selected,cities,usa){
return (function (){
var s__35412__$1 = s__35412;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35412__$1);
if(temp__4126__auto__){
var s__35412__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35412__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__35412__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__35414 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__35413 = (0);
while(true){
if((i__35413 < size__4935__auto__)){
var vec__35421 = cljs.core._nth.call(null,c__4934__auto__,i__35413);
var city_key = cljs.core.nth.call(null,vec__35421,(0),null);
var map__35422 = cljs.core.nth.call(null,vec__35421,(1),null);
var map__35422__$1 = ((cljs.core.seq_QMARK_.call(null,map__35422))?cljs.core.apply.call(null,cljs.core.hash_map,map__35422):map__35422);
var lon = cljs.core.get.call(null,map__35422__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var lat = cljs.core.get.call(null,map__35422__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var city = cljs.core.get.call(null,map__35422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__35423 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__35423,(0),null);
var y = cljs.core.nth.call(null,vec__35423,(1),null);
cljs.core.chunk_append.call(null,b__35414,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__35413,vec__35423,x,y,vec__35421,city_key,map__35422,map__35422__$1,lon,lat,city,c__4934__auto__,size__4935__auto__,b__35414,s__35412__$2,temp__4126__auto__,map__35406,map__35406__$1,selected,cities,usa){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(i__35413,vec__35423,x,y,vec__35421,city_key,map__35422,map__35422__$1,lon,lat,city,c__4934__auto__,size__4935__auto__,b__35414,s__35412__$2,temp__4126__auto__,map__35406,map__35406__$1,selected,cities,usa))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([city_key], true),selected))?"firebrick":"steelblue")], null)], null)], null));

var G__35428 = (i__35413 + (1));
i__35413 = G__35428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35414),baron$core$main_$_iter__35411.call(null,cljs.core.chunk_rest.call(null,s__35412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35414),null);
}
} else {
var vec__35424 = cljs.core.first.call(null,s__35412__$2);
var city_key = cljs.core.nth.call(null,vec__35424,(0),null);
var map__35425 = cljs.core.nth.call(null,vec__35424,(1),null);
var map__35425__$1 = ((cljs.core.seq_QMARK_.call(null,map__35425))?cljs.core.apply.call(null,cljs.core.hash_map,map__35425):map__35425);
var lon = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var lat = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var city = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__35426 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__35426,(0),null);
var y = cljs.core.nth.call(null,vec__35426,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (vec__35426,x,y,vec__35424,city_key,map__35425,map__35425__$1,lon,lat,city,s__35412__$2,temp__4126__auto__,map__35406,map__35406__$1,selected,cities,usa){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(vec__35426,x,y,vec__35424,city_key,map__35425,map__35425__$1,lon,lat,city,s__35412__$2,temp__4126__auto__,map__35406,map__35406__$1,selected,cities,usa))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([city_key], true),selected))?"firebrick":"steelblue")], null)], null)], null),baron$core$main_$_iter__35411.call(null,cljs.core.rest.call(null,s__35412__$2)));
}
} else {
return null;
}
break;
}
});})(map__35406,map__35406__$1,selected,cities,usa))
,null,null));
});})(map__35406,map__35406__$1,selected,cities,usa))
;
return iter__4936__auto__.call(null,cljs.core.seq.call(null,cities));
})()], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e35438){if((e35438 instanceof Error)){
var e__10810__auto__ = e35438;
if((e__10810__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__35436 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__35436,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35440){if((e35440 instanceof Error)){
var e__10810__auto____$1 = e35440;
if((e__10810__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10810__auto____$1;
}
} else {
throw e35440;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35439){if((e35439 instanceof Error)){
var e__10810__auto____$1 = e35439;
if((e__10810__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10810__auto____$1;
}
} else {
throw e35439;

}
}} else {
throw e__10810__auto__;
}
} else {
throw e35438;

}
}});
var c__6473__auto___35477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___35477){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___35477){
return (function (state_35465){
var state_val_35466 = (state_35465[(1)]);
if((state_val_35466 === (4))){
var inst_35442 = (state_35465[(7)]);
var inst_35451 = (state_35465[(8)]);
var inst_35447 = (state_35465[(9)]);
var inst_35449 = (state_35465[(10)]);
var inst_35453 = (state_35465[(2)]);
var inst_35454 = cljs.core.PersistentVector.EMPTY;
var inst_35455 = [inst_35449,inst_35451,inst_35453,inst_35454];
var inst_35456 = cljs.core.PersistentHashMap.fromArrays(inst_35447,inst_35455);
var inst_35457 = vdom.core.foldp.call(null,baron.core.step,inst_35456,inst_35442);
var inst_35458 = baron.core.main.call(null,inst_35442);
var inst_35459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35460 = [inst_35457];
var inst_35461 = (new cljs.core.PersistentVector(null,1,(5),inst_35459,inst_35460,null));
var inst_35462 = cljs.core.async.map.call(null,inst_35458,inst_35461);
var inst_35463 = vdom.core.render_BANG_.call(null,inst_35462,document.body);
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35465__$1,inst_35463);
} else {
if((state_val_35466 === (3))){
var inst_35446 = (state_35465[(11)]);
var inst_35451 = (state_35465[(2)]);
var state_35465__$1 = (function (){var statearr_35467 = state_35465;
(statearr_35467[(8)] = inst_35451);

return statearr_35467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35465__$1,(4),inst_35446);
} else {
if((state_val_35466 === (2))){
var inst_35445 = (state_35465[(12)]);
var inst_35449 = (state_35465[(2)]);
var state_35465__$1 = (function (){var statearr_35468 = state_35465;
(statearr_35468[(10)] = inst_35449);

return statearr_35468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35465__$1,(3),inst_35445);
} else {
if((state_val_35466 === (1))){
var inst_35442 = (state_35465[(7)]);
var inst_35442__$1 = cljs.core.async.chan.call(null);
var inst_35443 = (function (){var actions = inst_35442__$1;
return ((function (actions,inst_35442,inst_35442__$1,state_val_35466,c__6473__auto___35477){
return (function (p1__35441_SHARP_){
return JSON.parse(p1__35441_SHARP_);
});
;})(actions,inst_35442,inst_35442__$1,state_val_35466,c__6473__auto___35477))
})();
var inst_35444 = baron.core.fetch.call(null,inst_35443,"static/data/us.json");
var inst_35445 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/cities.edn");
var inst_35446 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/payoffs.edn");
var inst_35447 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_35465__$1 = (function (){var statearr_35469 = state_35465;
(statearr_35469[(12)] = inst_35445);

(statearr_35469[(11)] = inst_35446);

(statearr_35469[(7)] = inst_35442__$1);

(statearr_35469[(9)] = inst_35447);

return statearr_35469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35465__$1,(2),inst_35444);
} else {
return null;
}
}
}
}
});})(c__6473__auto___35477))
;
return ((function (switch__6452__auto__,c__6473__auto___35477){
return (function() {
var baron$core$state_machine__6453__auto__ = null;
var baron$core$state_machine__6453__auto____0 = (function (){
var statearr_35473 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35473[(0)] = baron$core$state_machine__6453__auto__);

(statearr_35473[(1)] = (1));

return statearr_35473;
});
var baron$core$state_machine__6453__auto____1 = (function (state_35465){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_35465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e35474){if((e35474 instanceof Object)){
var ex__6456__auto__ = e35474;
var statearr_35475_35478 = state_35465;
(statearr_35475_35478[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35479 = state_35465;
state_35465 = G__35479;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
baron$core$state_machine__6453__auto__ = function(state_35465){
switch(arguments.length){
case 0:
return baron$core$state_machine__6453__auto____0.call(this);
case 1:
return baron$core$state_machine__6453__auto____1.call(this,state_35465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__6453__auto____0;
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__6453__auto____1;
return baron$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___35477))
})();
var state__6475__auto__ = (function (){var statearr_35476 = f__6474__auto__.call(null);
(statearr_35476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___35477);

return statearr_35476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___35477))
);


//# sourceMappingURL=core.js.map