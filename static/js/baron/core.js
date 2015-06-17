// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
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
baron.core.ui_country = (function baron$core$ui_country(p__43984,actions){
var map__43986 = p__43984;
var map__43986__$1 = ((cljs.core.seq_QMARK_.call(null,map__43986))?cljs.core.apply.call(null,cljs.core.hash_map,map__43986):map__43986);
var usa = cljs.core.get.call(null,map__43986__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"#land"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"static/img/shaded-relief.png",new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null));
});
baron.core.ui_cities = (function baron$core$ui_cities(p__43987,actions){
var map__44005 = p__43987;
var map__44005__$1 = ((cljs.core.seq_QMARK_.call(null,map__44005))?cljs.core.apply.call(null,cljs.core.hash_map,map__44005):map__44005);
var cities = cljs.core.get.call(null,map__44005__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__44005,map__44005__$1,cities){
return (function baron$core$ui_cities_$_iter__44006(s__44007){
return (new cljs.core.LazySeq(null,((function (map__44005,map__44005__$1,cities){
return (function (){
var s__44007__$1 = s__44007;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__44007__$1);
if(temp__4126__auto__){
var s__44007__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44007__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__44007__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__44009 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__44008 = (0);
while(true){
if((i__44008 < size__4935__auto__)){
var vec__44016 = cljs.core._nth.call(null,c__4934__auto__,i__44008);
var city_key = cljs.core.nth.call(null,vec__44016,(0),null);
var map__44017 = cljs.core.nth.call(null,vec__44016,(1),null);
var map__44017__$1 = ((cljs.core.seq_QMARK_.call(null,map__44017))?cljs.core.apply.call(null,cljs.core.hash_map,map__44017):map__44017);
var lat = cljs.core.get.call(null,map__44017__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__44017__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__44017__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__44018 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__44018,(0),null);
var y = cljs.core.nth.call(null,vec__44018,(1),null);
cljs.core.chunk_append.call(null,b__44009,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__44008,vec__44018,x,y,vec__44016,city_key,map__44017,map__44017__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__44009,s__44007__$2,temp__4126__auto__,map__44005,map__44005__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(i__44008,vec__44018,x,y,vec__44016,city_key,map__44017,map__44017__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__44009,s__44007__$2,temp__4126__auto__,map__44005,map__44005__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__44022 = (i__44008 + (1));
i__44008 = G__44022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44009),baron$core$ui_cities_$_iter__44006.call(null,cljs.core.chunk_rest.call(null,s__44007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44009),null);
}
} else {
var vec__44019 = cljs.core.first.call(null,s__44007__$2);
var city_key = cljs.core.nth.call(null,vec__44019,(0),null);
var map__44020 = cljs.core.nth.call(null,vec__44019,(1),null);
var map__44020__$1 = ((cljs.core.seq_QMARK_.call(null,map__44020))?cljs.core.apply.call(null,cljs.core.hash_map,map__44020):map__44020);
var lat = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__44021 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__44021,(0),null);
var y = cljs.core.nth.call(null,vec__44021,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (vec__44021,x,y,vec__44019,city_key,map__44020,map__44020__$1,lat,lon,city,s__44007__$2,temp__4126__auto__,map__44005,map__44005__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(vec__44021,x,y,vec__44019,city_key,map__44020,map__44020__$1,lat,lon,city,s__44007__$2,temp__4126__auto__,map__44005,map__44005__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_cities_$_iter__44006.call(null,cljs.core.rest.call(null,s__44007__$2)));
}
} else {
return null;
}
break;
}
});})(map__44005,map__44005__$1,cities))
,null,null));
});})(map__44005,map__44005__$1,cities))
;
return iter__4936__auto__.call(null,cljs.core.seq.call(null,cities));
});
baron.core.ui_selected = (function baron$core$ui_selected(p__44023,actions){
var map__44027 = p__44023;
var map__44027__$1 = ((cljs.core.seq_QMARK_.call(null,map__44027))?cljs.core.apply.call(null,cljs.core.hash_map,map__44027):map__44027);
var selected = cljs.core.get.call(null,map__44027__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var payoffs = cljs.core.get.call(null,map__44027__$1,new cljs.core.Keyword(null,"payoffs","payoffs",1029670985));
var cities = cljs.core.get.call(null,map__44027__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))){
var vec__44028 = selected;
var a = cljs.core.nth.call(null,vec__44028,(0),null);
var b = cljs.core.nth.call(null,vec__44028,(1),null);
var a_coord = baron.core.lon_lat.call(null,cities.call(null,a));
var b_coord = baron.core.lon_lat.call(null,cities.call(null,b));
var connection = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_coord,b_coord], null)], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var payoff = baron.core.format_money.call(null,((1000) * cljs.core.get_in.call(null,payoffs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))));
var vec__44029 = baron.core.path.centroid(connection);
var x = cljs.core.nth.call(null,vec__44029,(0),null);
var y = cljs.core.nth.call(null,vec__44029,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),payoff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),payoff], null)], null);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"connection",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,connection)], null)], null));
} else {
return null;
}
});
baron.core.ui_selected_cities = (function baron$core$ui_selected_cities(p__44030,actions){
var map__44044 = p__44030;
var map__44044__$1 = ((cljs.core.seq_QMARK_.call(null,map__44044))?cljs.core.apply.call(null,cljs.core.hash_map,map__44044):map__44044);
var selected = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__44044__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__44044,map__44044__$1,selected,cities){
return (function baron$core$ui_selected_cities_$_iter__44045(s__44046){
return (new cljs.core.LazySeq(null,((function (map__44044,map__44044__$1,selected,cities){
return (function (){
var s__44046__$1 = s__44046;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__44046__$1);
if(temp__4126__auto__){
var s__44046__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44046__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__44046__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__44048 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__44047 = (0);
while(true){
if((i__44047 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__44047);
var map__44053 = cities.call(null,city_key);
var map__44053__$1 = ((cljs.core.seq_QMARK_.call(null,map__44053))?cljs.core.apply.call(null,cljs.core.hash_map,map__44053):map__44053);
var lat = cljs.core.get.call(null,map__44053__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__44053__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__44053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__44054 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__44054,(0),null);
var y = cljs.core.nth.call(null,vec__44054,(1),null);
cljs.core.chunk_append.call(null,b__44048,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__44047,map__44053,map__44053__$1,lat,lon,city,vec__44054,x,y,city_key,c__4934__auto__,size__4935__auto__,b__44048,s__44046__$2,temp__4126__auto__,map__44044,map__44044__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__44047,map__44053,map__44053__$1,lat,lon,city,vec__44054,x,y,city_key,c__4934__auto__,size__4935__auto__,b__44048,s__44046__$2,temp__4126__auto__,map__44044,map__44044__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null));

var G__44057 = (i__44047 + (1));
i__44047 = G__44057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44048),baron$core$ui_selected_cities_$_iter__44045.call(null,cljs.core.chunk_rest.call(null,s__44046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44048),null);
}
} else {
var city_key = cljs.core.first.call(null,s__44046__$2);
var map__44055 = cities.call(null,city_key);
var map__44055__$1 = ((cljs.core.seq_QMARK_.call(null,map__44055))?cljs.core.apply.call(null,cljs.core.hash_map,map__44055):map__44055);
var lat = cljs.core.get.call(null,map__44055__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__44055__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__44055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__44056 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__44056,(0),null);
var y = cljs.core.nth.call(null,vec__44056,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (map__44055,map__44055__$1,lat,lon,city,vec__44056,x,y,city_key,s__44046__$2,temp__4126__auto__,map__44044,map__44044__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__44055,map__44055__$1,lat,lon,city,vec__44056,x,y,city_key,s__44046__$2,temp__4126__auto__,map__44044,map__44044__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null),baron$core$ui_selected_cities_$_iter__44045.call(null,cljs.core.rest.call(null,s__44046__$2)));
}
} else {
return null;
}
break;
}
});})(map__44044,map__44044__$1,selected,cities))
,null,null));
});})(map__44044,map__44044__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
});
baron.core.ui_text = (function baron$core$ui_text(p__44058,actions){
var map__44072 = p__44058;
var map__44072__$1 = ((cljs.core.seq_QMARK_.call(null,map__44072))?cljs.core.apply.call(null,cljs.core.hash_map,map__44072):map__44072);
var payoff = cljs.core.get.call(null,map__44072__$1,new cljs.core.Keyword(null,"payoff","payoff",77818037));
var selected = cljs.core.get.call(null,map__44072__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__44072__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__44072,map__44072__$1,payoff,selected,cities){
return (function baron$core$ui_text_$_iter__44073(s__44074){
return (new cljs.core.LazySeq(null,((function (map__44072,map__44072__$1,payoff,selected,cities){
return (function (){
var s__44074__$1 = s__44074;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__44074__$1);
if(temp__4126__auto__){
var s__44074__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44074__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__44074__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__44076 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__44075 = (0);
while(true){
if((i__44075 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__44075);
var map__44081 = cities.call(null,city_key);
var map__44081__$1 = ((cljs.core.seq_QMARK_.call(null,map__44081))?cljs.core.apply.call(null,cljs.core.hash_map,map__44081):map__44081);
var lat = cljs.core.get.call(null,map__44081__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__44081__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__44081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__44082 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__44082,(0),null);
var y = cljs.core.nth.call(null,vec__44082,(1),null);
cljs.core.chunk_append.call(null,b__44076,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__44075,map__44081,map__44081__$1,lat,lon,city,vec__44082,x,y,city_key,c__4934__auto__,size__4935__auto__,b__44076,s__44074__$2,temp__4126__auto__,map__44072,map__44072__$1,payoff,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__44075,map__44081,map__44081__$1,lat,lon,city,vec__44082,x,y,city_key,c__4934__auto__,size__4935__auto__,b__44076,s__44074__$2,temp__4126__auto__,map__44072,map__44072__$1,payoff,selected,cities))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null));

var G__44085 = (i__44075 + (1));
i__44075 = G__44085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44076),baron$core$ui_text_$_iter__44073.call(null,cljs.core.chunk_rest.call(null,s__44074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44076),null);
}
} else {
var city_key = cljs.core.first.call(null,s__44074__$2);
var map__44083 = cities.call(null,city_key);
var map__44083__$1 = ((cljs.core.seq_QMARK_.call(null,map__44083))?cljs.core.apply.call(null,cljs.core.hash_map,map__44083):map__44083);
var lat = cljs.core.get.call(null,map__44083__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__44083__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__44083__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__44084 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__44084,(0),null);
var y = cljs.core.nth.call(null,vec__44084,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (map__44083,map__44083__$1,lat,lon,city,vec__44084,x,y,city_key,s__44074__$2,temp__4126__auto__,map__44072,map__44072__$1,payoff,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__44083,map__44083__$1,lat,lon,city,vec__44084,x,y,city_key,s__44074__$2,temp__4126__auto__,map__44072,map__44072__$1,payoff,selected,cities))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null),baron$core$ui_text_$_iter__44073.call(null,cljs.core.rest.call(null,s__44074__$2)));
}
} else {
return null;
}
break;
}
});})(map__44072,map__44072__$1,payoff,selected,cities))
,null,null));
});})(map__44072,map__44072__$1,payoff,selected,cities))
;
return iter__4936__auto__.call(null,selected);
});
baron.core.ui = (function baron$core$ui(actions){
return (function (p__44088){
var map__44089 = p__44088;
var map__44089__$1 = ((cljs.core.seq_QMARK_.call(null,map__44089))?cljs.core.apply.call(null,cljs.core.hash_map,map__44089):map__44089);
var model = map__44089__$1;
var usa = cljs.core.get.call(null,map__44089__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.land_border.call(null,usa))], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.9) translate(40,0)"], null),baron.core.ui_country.call(null,model,actions),baron.core.ui_cities.call(null,model,actions),baron.core.ui_selected.call(null,model,actions),baron.core.ui_selected_cities.call(null,model,actions),baron.core.ui_text.call(null,model,actions)], null)], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.flip = (function baron$core$flip(f){
return (function (p1__44091_SHARP_,p2__44090_SHARP_){
return f.call(null,p2__44090_SHARP_,p1__44091_SHARP_);
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44102){if((e44102 instanceof Error)){
var e__10810__auto__ = e44102;
if((e__10810__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__44100 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__44100,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44104){if((e44104 instanceof Error)){
var e__10810__auto____$1 = e44104;
if((e__10810__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__44100 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__44100,new cljs.core.Keyword(null,"deselect","deselect",1562387297))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.flip.call(null,cljs.core.remove),cljs.core.PersistentHashSet.fromArray([city], true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e44105){if((e44105 instanceof Error)){
var e__10810__auto____$2 = e44105;
if((e__10810__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10810__auto____$2;
}
} else {
throw e44105;

}
}} else {
throw e__10810__auto____$1;
}
} else {
throw e44104;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44103){if((e44103 instanceof Error)){
var e__10810__auto____$1 = e44103;
if((e__10810__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10810__auto____$1;
}
} else {
throw e44103;

}
}} else {
throw e__10810__auto__;
}
} else {
throw e44102;

}
}});
var c__6473__auto___44142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___44142){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___44142){
return (function (state_44130){
var state_val_44131 = (state_44130[(1)]);
if((state_val_44131 === (4))){
var inst_44107 = (state_44130[(7)]);
var inst_44112 = (state_44130[(8)]);
var inst_44114 = (state_44130[(9)]);
var inst_44116 = (state_44130[(10)]);
var inst_44118 = (state_44130[(2)]);
var inst_44119 = cljs.core.PersistentVector.EMPTY;
var inst_44120 = [inst_44114,inst_44116,inst_44118,inst_44119];
var inst_44121 = cljs.core.PersistentHashMap.fromArrays(inst_44112,inst_44120);
var inst_44122 = vdom.elm.foldp.call(null,baron.core.step,inst_44121,inst_44107);
var inst_44123 = baron.core.ui.call(null,inst_44107);
var inst_44124 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44125 = [inst_44122];
var inst_44126 = (new cljs.core.PersistentVector(null,1,(5),inst_44124,inst_44125,null));
var inst_44127 = cljs.core.async.map.call(null,inst_44123,inst_44126);
var inst_44128 = vdom.elm.render_BANG_.call(null,inst_44127,document.body);
var state_44130__$1 = state_44130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44130__$1,inst_44128);
} else {
if((state_val_44131 === (3))){
var inst_44111 = (state_44130[(11)]);
var inst_44116 = (state_44130[(2)]);
var state_44130__$1 = (function (){var statearr_44132 = state_44130;
(statearr_44132[(10)] = inst_44116);

return statearr_44132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44130__$1,(4),inst_44111);
} else {
if((state_val_44131 === (2))){
var inst_44110 = (state_44130[(12)]);
var inst_44114 = (state_44130[(2)]);
var state_44130__$1 = (function (){var statearr_44133 = state_44130;
(statearr_44133[(9)] = inst_44114);

return statearr_44133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44130__$1,(3),inst_44110);
} else {
if((state_val_44131 === (1))){
var inst_44107 = (state_44130[(7)]);
var inst_44107__$1 = cljs.core.async.chan.call(null);
var inst_44108 = (function (){var actions = inst_44107__$1;
return ((function (actions,inst_44107,inst_44107__$1,state_val_44131,c__6473__auto___44142){
return (function (p1__44106_SHARP_){
return JSON.parse(p1__44106_SHARP_);
});
;})(actions,inst_44107,inst_44107__$1,state_val_44131,c__6473__auto___44142))
})();
var inst_44109 = baron.core.fetch.call(null,inst_44108,"static/data/us.json");
var inst_44110 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/cities.edn");
var inst_44111 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/payoffs.edn");
var inst_44112 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_44130__$1 = (function (){var statearr_44134 = state_44130;
(statearr_44134[(7)] = inst_44107__$1);

(statearr_44134[(8)] = inst_44112);

(statearr_44134[(11)] = inst_44111);

(statearr_44134[(12)] = inst_44110);

return statearr_44134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44130__$1,(2),inst_44109);
} else {
return null;
}
}
}
}
});})(c__6473__auto___44142))
;
return ((function (switch__6452__auto__,c__6473__auto___44142){
return (function() {
var baron$core$state_machine__6453__auto__ = null;
var baron$core$state_machine__6453__auto____0 = (function (){
var statearr_44138 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44138[(0)] = baron$core$state_machine__6453__auto__);

(statearr_44138[(1)] = (1));

return statearr_44138;
});
var baron$core$state_machine__6453__auto____1 = (function (state_44130){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_44130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e44139){if((e44139 instanceof Object)){
var ex__6456__auto__ = e44139;
var statearr_44140_44143 = state_44130;
(statearr_44140_44143[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44144 = state_44130;
state_44130 = G__44144;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
baron$core$state_machine__6453__auto__ = function(state_44130){
switch(arguments.length){
case 0:
return baron$core$state_machine__6453__auto____0.call(this);
case 1:
return baron$core$state_machine__6453__auto____1.call(this,state_44130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__6453__auto____0;
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__6453__auto____1;
return baron$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___44142))
})();
var state__6475__auto__ = (function (){var statearr_44141 = f__6474__auto__.call(null);
(statearr_44141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___44142);

return statearr_44141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___44142))
);


//# sourceMappingURL=core.js.map