// Compiled by ClojureScript 0.0-3195 {}
goog.provide('baron.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('vdom.elm');
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
baron.core.land_border = (function baron$core$land_border(shape){
return topojson.feature(shape,shape.objects.land);
});
baron.core.projection = d3.geo.azimuthalEqualArea().scale(baron.core.width).translate([33.5,262.5]).rotate([(100),(-45)]).center([-17.6076,-4.7913]).scale((1297));
baron.core.path = d3.geo.path().projection(baron.core.projection);
baron.core.lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));
baron.core.format_money = d3.format("$,");
baron.core.ui_country = (function baron$core$ui_country(p__11943,actions){
var map__11945 = p__11943;
var map__11945__$1 = ((cljs.core.seq_QMARK_.call(null,map__11945))?cljs.core.apply.call(null,cljs.core.hash_map,map__11945):map__11945);
var usa = cljs.core.get.call(null,map__11945__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"#land"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"static/img/shaded-relief.png",new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null));
});
baron.core.ui_cities = (function baron$core$ui_cities(p__11946,actions){
var map__11964 = p__11946;
var map__11964__$1 = ((cljs.core.seq_QMARK_.call(null,map__11964))?cljs.core.apply.call(null,cljs.core.hash_map,map__11964):map__11964);
var cities = cljs.core.get.call(null,map__11964__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__5577__auto__ = ((function (map__11964,map__11964__$1,cities){
return (function baron$core$ui_cities_$_iter__11965(s__11966){
return (new cljs.core.LazySeq(null,((function (map__11964,map__11964__$1,cities){
return (function (){
var s__11966__$1 = s__11966;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11966__$1);
if(temp__4126__auto__){
var s__11966__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11966__$2)){
var c__5575__auto__ = cljs.core.chunk_first.call(null,s__11966__$2);
var size__5576__auto__ = cljs.core.count.call(null,c__5575__auto__);
var b__11968 = cljs.core.chunk_buffer.call(null,size__5576__auto__);
if((function (){var i__11967 = (0);
while(true){
if((i__11967 < size__5576__auto__)){
var vec__11975 = cljs.core._nth.call(null,c__5575__auto__,i__11967);
var city_key = cljs.core.nth.call(null,vec__11975,(0),null);
var map__11976 = cljs.core.nth.call(null,vec__11975,(1),null);
var map__11976__$1 = ((cljs.core.seq_QMARK_.call(null,map__11976))?cljs.core.apply.call(null,cljs.core.hash_map,map__11976):map__11976);
var lat = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11977 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11977,(0),null);
var y = cljs.core.nth.call(null,vec__11977,(1),null);
cljs.core.chunk_append.call(null,b__11968,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__11967,vec__11977,x,y,vec__11975,city_key,map__11976,map__11976__$1,lat,lon,city,c__5575__auto__,size__5576__auto__,b__11968,s__11966__$2,temp__4126__auto__,map__11964,map__11964__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(i__11967,vec__11977,x,y,vec__11975,city_key,map__11976,map__11976__$1,lat,lon,city,c__5575__auto__,size__5576__auto__,b__11968,s__11966__$2,temp__4126__auto__,map__11964,map__11964__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__11981 = (i__11967 + (1));
i__11967 = G__11981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11968),baron$core$ui_cities_$_iter__11965.call(null,cljs.core.chunk_rest.call(null,s__11966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11968),null);
}
} else {
var vec__11978 = cljs.core.first.call(null,s__11966__$2);
var city_key = cljs.core.nth.call(null,vec__11978,(0),null);
var map__11979 = cljs.core.nth.call(null,vec__11978,(1),null);
var map__11979__$1 = ((cljs.core.seq_QMARK_.call(null,map__11979))?cljs.core.apply.call(null,cljs.core.hash_map,map__11979):map__11979);
var lat = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11980 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11980,(0),null);
var y = cljs.core.nth.call(null,vec__11980,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (vec__11980,x,y,vec__11978,city_key,map__11979,map__11979__$1,lat,lon,city,s__11966__$2,temp__4126__auto__,map__11964,map__11964__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(vec__11980,x,y,vec__11978,city_key,map__11979,map__11979__$1,lat,lon,city,s__11966__$2,temp__4126__auto__,map__11964,map__11964__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_cities_$_iter__11965.call(null,cljs.core.rest.call(null,s__11966__$2)));
}
} else {
return null;
}
break;
}
});})(map__11964,map__11964__$1,cities))
,null,null));
});})(map__11964,map__11964__$1,cities))
;
return iter__5577__auto__.call(null,cljs.core.seq.call(null,cities));
});
baron.core.ui_selected = (function baron$core$ui_selected(p__11982,actions){
var map__11986 = p__11982;
var map__11986__$1 = ((cljs.core.seq_QMARK_.call(null,map__11986))?cljs.core.apply.call(null,cljs.core.hash_map,map__11986):map__11986);
var selected = cljs.core.get.call(null,map__11986__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var payoffs = cljs.core.get.call(null,map__11986__$1,new cljs.core.Keyword(null,"payoffs","payoffs",1029670985));
var cities = cljs.core.get.call(null,map__11986__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))){
var vec__11987 = selected;
var a = cljs.core.nth.call(null,vec__11987,(0),null);
var b = cljs.core.nth.call(null,vec__11987,(1),null);
var a_coord = baron.core.lon_lat.call(null,cities.call(null,a));
var b_coord = baron.core.lon_lat.call(null,cities.call(null,b));
var connection = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_coord,b_coord], null)], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var payoff = baron.core.format_money.call(null,((1000) * cljs.core.get_in.call(null,payoffs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))));
var vec__11988 = baron.core.path.centroid(connection);
var x = cljs.core.nth.call(null,vec__11988,(0),null);
var y = cljs.core.nth.call(null,vec__11988,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),payoff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),payoff], null)], null);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"connection",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,connection)], null)], null));
} else {
return null;
}
});
baron.core.ui_selected_cities = (function baron$core$ui_selected_cities(p__11989,actions){
var map__12003 = p__11989;
var map__12003__$1 = ((cljs.core.seq_QMARK_.call(null,map__12003))?cljs.core.apply.call(null,cljs.core.hash_map,map__12003):map__12003);
var selected = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__12003__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__5577__auto__ = ((function (map__12003,map__12003__$1,selected,cities){
return (function baron$core$ui_selected_cities_$_iter__12004(s__12005){
return (new cljs.core.LazySeq(null,((function (map__12003,map__12003__$1,selected,cities){
return (function (){
var s__12005__$1 = s__12005;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12005__$1);
if(temp__4126__auto__){
var s__12005__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12005__$2)){
var c__5575__auto__ = cljs.core.chunk_first.call(null,s__12005__$2);
var size__5576__auto__ = cljs.core.count.call(null,c__5575__auto__);
var b__12007 = cljs.core.chunk_buffer.call(null,size__5576__auto__);
if((function (){var i__12006 = (0);
while(true){
if((i__12006 < size__5576__auto__)){
var city_key = cljs.core._nth.call(null,c__5575__auto__,i__12006);
var map__12012 = cities.call(null,city_key);
var map__12012__$1 = ((cljs.core.seq_QMARK_.call(null,map__12012))?cljs.core.apply.call(null,cljs.core.hash_map,map__12012):map__12012);
var lat = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__12012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__12013 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__12013,(0),null);
var y = cljs.core.nth.call(null,vec__12013,(1),null);
cljs.core.chunk_append.call(null,b__12007,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__12006,map__12012,map__12012__$1,lat,lon,city,vec__12013,x,y,city_key,c__5575__auto__,size__5576__auto__,b__12007,s__12005__$2,temp__4126__auto__,map__12003,map__12003__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__12006,map__12012,map__12012__$1,lat,lon,city,vec__12013,x,y,city_key,c__5575__auto__,size__5576__auto__,b__12007,s__12005__$2,temp__4126__auto__,map__12003,map__12003__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null));

var G__12016 = (i__12006 + (1));
i__12006 = G__12016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12007),baron$core$ui_selected_cities_$_iter__12004.call(null,cljs.core.chunk_rest.call(null,s__12005__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12007),null);
}
} else {
var city_key = cljs.core.first.call(null,s__12005__$2);
var map__12014 = cities.call(null,city_key);
var map__12014__$1 = ((cljs.core.seq_QMARK_.call(null,map__12014))?cljs.core.apply.call(null,cljs.core.hash_map,map__12014):map__12014);
var lat = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__12014__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__12015 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__12015,(0),null);
var y = cljs.core.nth.call(null,vec__12015,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (map__12014,map__12014__$1,lat,lon,city,vec__12015,x,y,city_key,s__12005__$2,temp__4126__auto__,map__12003,map__12003__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__12014,map__12014__$1,lat,lon,city,vec__12015,x,y,city_key,s__12005__$2,temp__4126__auto__,map__12003,map__12003__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null),baron$core$ui_selected_cities_$_iter__12004.call(null,cljs.core.rest.call(null,s__12005__$2)));
}
} else {
return null;
}
break;
}
});})(map__12003,map__12003__$1,selected,cities))
,null,null));
});})(map__12003,map__12003__$1,selected,cities))
;
return iter__5577__auto__.call(null,selected);
});
baron.core.ui_text = (function baron$core$ui_text(p__12017,actions){
var map__12031 = p__12017;
var map__12031__$1 = ((cljs.core.seq_QMARK_.call(null,map__12031))?cljs.core.apply.call(null,cljs.core.hash_map,map__12031):map__12031);
var payoff = cljs.core.get.call(null,map__12031__$1,new cljs.core.Keyword(null,"payoff","payoff",77818037));
var selected = cljs.core.get.call(null,map__12031__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__12031__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__5577__auto__ = ((function (map__12031,map__12031__$1,payoff,selected,cities){
return (function baron$core$ui_text_$_iter__12032(s__12033){
return (new cljs.core.LazySeq(null,((function (map__12031,map__12031__$1,payoff,selected,cities){
return (function (){
var s__12033__$1 = s__12033;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12033__$1);
if(temp__4126__auto__){
var s__12033__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12033__$2)){
var c__5575__auto__ = cljs.core.chunk_first.call(null,s__12033__$2);
var size__5576__auto__ = cljs.core.count.call(null,c__5575__auto__);
var b__12035 = cljs.core.chunk_buffer.call(null,size__5576__auto__);
if((function (){var i__12034 = (0);
while(true){
if((i__12034 < size__5576__auto__)){
var city_key = cljs.core._nth.call(null,c__5575__auto__,i__12034);
var map__12040 = cities.call(null,city_key);
var map__12040__$1 = ((cljs.core.seq_QMARK_.call(null,map__12040))?cljs.core.apply.call(null,cljs.core.hash_map,map__12040):map__12040);
var lat = cljs.core.get.call(null,map__12040__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__12040__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__12040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__12041 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__12041,(0),null);
var y = cljs.core.nth.call(null,vec__12041,(1),null);
cljs.core.chunk_append.call(null,b__12035,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__12034,map__12040,map__12040__$1,lat,lon,city,vec__12041,x,y,city_key,c__5575__auto__,size__5576__auto__,b__12035,s__12033__$2,temp__4126__auto__,map__12031,map__12031__$1,payoff,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__12034,map__12040,map__12040__$1,lat,lon,city,vec__12041,x,y,city_key,c__5575__auto__,size__5576__auto__,b__12035,s__12033__$2,temp__4126__auto__,map__12031,map__12031__$1,payoff,selected,cities))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null));

var G__12044 = (i__12034 + (1));
i__12034 = G__12044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12035),baron$core$ui_text_$_iter__12032.call(null,cljs.core.chunk_rest.call(null,s__12033__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12035),null);
}
} else {
var city_key = cljs.core.first.call(null,s__12033__$2);
var map__12042 = cities.call(null,city_key);
var map__12042__$1 = ((cljs.core.seq_QMARK_.call(null,map__12042))?cljs.core.apply.call(null,cljs.core.hash_map,map__12042):map__12042);
var lat = cljs.core.get.call(null,map__12042__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__12042__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__12042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__12043 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__12043,(0),null);
var y = cljs.core.nth.call(null,vec__12043,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (map__12042,map__12042__$1,lat,lon,city,vec__12043,x,y,city_key,s__12033__$2,temp__4126__auto__,map__12031,map__12031__$1,payoff,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__12042,map__12042__$1,lat,lon,city,vec__12043,x,y,city_key,s__12033__$2,temp__4126__auto__,map__12031,map__12031__$1,payoff,selected,cities))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null),baron$core$ui_text_$_iter__12032.call(null,cljs.core.rest.call(null,s__12033__$2)));
}
} else {
return null;
}
break;
}
});})(map__12031,map__12031__$1,payoff,selected,cities))
,null,null));
});})(map__12031,map__12031__$1,payoff,selected,cities))
;
return iter__5577__auto__.call(null,selected);
})());
});
baron.core.ui = (function baron$core$ui(actions){
return (function (p__12047){
var map__12048 = p__12047;
var map__12048__$1 = ((cljs.core.seq_QMARK_.call(null,map__12048))?cljs.core.apply.call(null,cljs.core.hash_map,map__12048):map__12048);
var model = map__12048__$1;
var usa = cljs.core.get.call(null,map__12048__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.land_border.call(null,usa))], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.9) translate(40,0)"], null),baron.core.ui_country.call(null,model,actions),baron.core.ui_cities.call(null,model,actions),baron.core.ui_selected.call(null,model,actions),baron.core.ui_selected_cities.call(null,model,actions),baron.core.ui_text.call(null,model,actions)], null)], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.flip = (function baron$core$flip(f){
return (function (p1__12050_SHARP_,p2__12049_SHARP_){
return f.call(null,p2__12049_SHARP_,p1__12050_SHARP_);
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e12061){if((e12061 instanceof Error)){
var e__10986__auto__ = e12061;
if((e__10986__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__12059 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__12059,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e12063){if((e12063 instanceof Error)){
var e__10986__auto____$1 = e12063;
if((e__10986__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__12059 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__12059,new cljs.core.Keyword(null,"deselect","deselect",1562387297))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.flip.call(null,cljs.core.remove),cljs.core.PersistentHashSet.fromArray([city], true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e12064){if((e12064 instanceof Error)){
var e__10986__auto____$2 = e12064;
if((e__10986__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10986__auto____$2;
}
} else {
throw e12064;

}
}} else {
throw e__10986__auto____$1;
}
} else {
throw e12063;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e12062){if((e12062 instanceof Error)){
var e__10986__auto____$1 = e12062;
if((e__10986__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10986__auto____$1;
}
} else {
throw e12062;

}
}} else {
throw e__10986__auto__;
}
} else {
throw e12061;

}
}});
var c__7122__auto___12101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7122__auto___12101){
return (function (){
var f__7123__auto__ = (function (){var switch__7101__auto__ = ((function (c__7122__auto___12101){
return (function (state_12089){
var state_val_12090 = (state_12089[(1)]);
if((state_val_12090 === (4))){
var inst_12075 = (state_12089[(7)]);
var inst_12073 = (state_12089[(8)]);
var inst_12066 = (state_12089[(9)]);
var inst_12071 = (state_12089[(10)]);
var inst_12077 = (state_12089[(2)]);
var inst_12078 = cljs.core.PersistentVector.EMPTY;
var inst_12079 = [inst_12073,inst_12075,inst_12077,inst_12078];
var inst_12080 = cljs.core.PersistentHashMap.fromArrays(inst_12071,inst_12079);
var inst_12081 = vdom.elm.foldp.call(null,baron.core.step,inst_12080,inst_12066);
var inst_12082 = baron.core.ui.call(null,inst_12066);
var inst_12083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12084 = [inst_12081];
var inst_12085 = (new cljs.core.PersistentVector(null,1,(5),inst_12083,inst_12084,null));
var inst_12086 = cljs.core.async.map.call(null,inst_12082,inst_12085);
var inst_12087 = vdom.elm.render_BANG_.call(null,inst_12086,document.body);
var state_12089__$1 = state_12089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12089__$1,inst_12087);
} else {
if((state_val_12090 === (3))){
var inst_12070 = (state_12089[(11)]);
var inst_12075 = (state_12089[(2)]);
var state_12089__$1 = (function (){var statearr_12091 = state_12089;
(statearr_12091[(7)] = inst_12075);

return statearr_12091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12089__$1,(4),inst_12070);
} else {
if((state_val_12090 === (2))){
var inst_12069 = (state_12089[(12)]);
var inst_12073 = (state_12089[(2)]);
var state_12089__$1 = (function (){var statearr_12092 = state_12089;
(statearr_12092[(8)] = inst_12073);

return statearr_12092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12089__$1,(3),inst_12069);
} else {
if((state_val_12090 === (1))){
var inst_12066 = (state_12089[(9)]);
var inst_12066__$1 = cljs.core.async.chan.call(null);
var inst_12067 = (function (){var actions = inst_12066__$1;
return ((function (actions,inst_12066,inst_12066__$1,state_val_12090,c__7122__auto___12101){
return (function (p1__12065_SHARP_){
return JSON.parse(p1__12065_SHARP_);
});
;})(actions,inst_12066,inst_12066__$1,state_val_12090,c__7122__auto___12101))
})();
var inst_12068 = baron.core.fetch.call(null,inst_12067,"static/data/us.json");
var inst_12069 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/cities.edn");
var inst_12070 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/payoffs.edn");
var inst_12071 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_12089__$1 = (function (){var statearr_12093 = state_12089;
(statearr_12093[(11)] = inst_12070);

(statearr_12093[(9)] = inst_12066__$1);

(statearr_12093[(10)] = inst_12071);

(statearr_12093[(12)] = inst_12069);

return statearr_12093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12089__$1,(2),inst_12068);
} else {
return null;
}
}
}
}
});})(c__7122__auto___12101))
;
return ((function (switch__7101__auto__,c__7122__auto___12101){
return (function() {
var baron$core$state_machine__7102__auto__ = null;
var baron$core$state_machine__7102__auto____0 = (function (){
var statearr_12097 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12097[(0)] = baron$core$state_machine__7102__auto__);

(statearr_12097[(1)] = (1));

return statearr_12097;
});
var baron$core$state_machine__7102__auto____1 = (function (state_12089){
while(true){
var ret_value__7103__auto__ = (function (){try{while(true){
var result__7104__auto__ = switch__7101__auto__.call(null,state_12089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7104__auto__;
}
break;
}
}catch (e12098){if((e12098 instanceof Object)){
var ex__7105__auto__ = e12098;
var statearr_12099_12102 = state_12089;
(statearr_12099_12102[(5)] = ex__7105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12103 = state_12089;
state_12089 = G__12103;
continue;
} else {
return ret_value__7103__auto__;
}
break;
}
});
baron$core$state_machine__7102__auto__ = function(state_12089){
switch(arguments.length){
case 0:
return baron$core$state_machine__7102__auto____0.call(this);
case 1:
return baron$core$state_machine__7102__auto____1.call(this,state_12089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__7102__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__7102__auto____0;
baron$core$state_machine__7102__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__7102__auto____1;
return baron$core$state_machine__7102__auto__;
})()
;})(switch__7101__auto__,c__7122__auto___12101))
})();
var state__7124__auto__ = (function (){var statearr_12100 = f__7123__auto__.call(null);
(statearr_12100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7122__auto___12101);

return statearr_12100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7124__auto__);
});})(c__7122__auto___12101))
);


//# sourceMappingURL=core.js.map