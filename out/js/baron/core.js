// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('baron.core');
goog.require('cljs.core');
goog.require('vdom.elm');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('cljs.reader');
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
return topojson.feature(shape,((shape["objects"])["land"]));
});
baron.core.projection = d3.geo.azimuthalEqualArea().scale(baron.core.width).translate([33.5,262.5]).rotate([(100),(-45)]).center([-17.6076,-4.7913]).scale((1297));
baron.core.path = d3.geo.path().projection(baron.core.projection);
baron.core.lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));
baron.core.format_money = d3.format("$,");
baron.core.connection = (function baron$core$connection(a,b){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [baron.core.lon_lat.call(null,a),baron.core.lon_lat.call(null,b)], null)], null));
});
baron.core.half = (function baron$core$half(p__16361,p__16362){
var vec__16365 = p__16361;
var cx = cljs.core.nth.call(null,vec__16365,(0),null);
var cy = cljs.core.nth.call(null,vec__16365,(1),null);
var vec__16366 = p__16362;
var x = cljs.core.nth.call(null,vec__16366,(0),null);
var y = cljs.core.nth.call(null,vec__16366,(1),null);
if((Math.atan2((y - cy),(x - cx)) > (0))){
return "south";
} else {
return "north";
}
});
baron.core.ui_country = (function baron$core$ui_country(model,actions){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"#land"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"resources/public/img/shaded-relief.png",new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null));
});
baron.core.ui_cities = (function baron$core$ui_cities(p__16367,actions){
var map__16385 = p__16367;
var map__16385__$1 = ((cljs.core.seq_QMARK_.call(null,map__16385))?cljs.core.apply.call(null,cljs.core.hash_map,map__16385):map__16385);
var cities = cljs.core.get.call(null,map__16385__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__16385,map__16385__$1,cities){
return (function baron$core$ui_cities_$_iter__16386(s__16387){
return (new cljs.core.LazySeq(null,((function (map__16385,map__16385__$1,cities){
return (function (){
var s__16387__$1 = s__16387;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16387__$1);
if(temp__4126__auto__){
var s__16387__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16387__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16387__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16389 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16388 = (0);
while(true){
if((i__16388 < size__4935__auto__)){
var vec__16396 = cljs.core._nth.call(null,c__4934__auto__,i__16388);
var city_key = cljs.core.nth.call(null,vec__16396,(0),null);
var map__16397 = cljs.core.nth.call(null,vec__16396,(1),null);
var map__16397__$1 = ((cljs.core.seq_QMARK_.call(null,map__16397))?cljs.core.apply.call(null,cljs.core.hash_map,map__16397):map__16397);
var lat = cljs.core.get.call(null,map__16397__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16397__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16398 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16398,(0),null);
var y = cljs.core.nth.call(null,vec__16398,(1),null);
cljs.core.chunk_append.call(null,b__16389,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__16402 = (i__16388 + (1));
i__16388 = G__16402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16389),baron$core$ui_cities_$_iter__16386.call(null,cljs.core.chunk_rest.call(null,s__16387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16389),null);
}
} else {
var vec__16399 = cljs.core.first.call(null,s__16387__$2);
var city_key = cljs.core.nth.call(null,vec__16399,(0),null);
var map__16400 = cljs.core.nth.call(null,vec__16399,(1),null);
var map__16400__$1 = ((cljs.core.seq_QMARK_.call(null,map__16400))?cljs.core.apply.call(null,cljs.core.hash_map,map__16400):map__16400);
var lat = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16401 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16401,(0),null);
var y = cljs.core.nth.call(null,vec__16401,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_cities_$_iter__16386.call(null,cljs.core.rest.call(null,s__16387__$2)));
}
} else {
return null;
}
break;
}
});})(map__16385,map__16385__$1,cities))
,null,null));
});})(map__16385,map__16385__$1,cities))
;
return iter__4936__auto__.call(null,cljs.core.seq.call(null,cities));
});
baron.core.ui_connection = (function baron$core$ui_connection(p__16403,actions){
var map__16418 = p__16403;
var map__16418__$1 = ((cljs.core.seq_QMARK_.call(null,map__16418))?cljs.core.apply.call(null,cljs.core.hash_map,map__16418):map__16418);
var selected = cljs.core.get.call(null,map__16418__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__16418__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))){
var vec__16419 = selected;
var a = cljs.core.nth.call(null,vec__16419,(0),null);
var b = cljs.core.nth.call(null,vec__16419,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"connection",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.connection.call(null,cities.call(null,a),cities.call(null,b))),new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#mask-cities-selected)"], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"mask-cities-selected"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var iter__4936__auto__ = ((function (vec__16419,a,b,map__16418,map__16418__$1,selected,cities){
return (function baron$core$ui_connection_$_iter__16420(s__16421){
return (new cljs.core.LazySeq(null,((function (vec__16419,a,b,map__16418,map__16418__$1,selected,cities){
return (function (){
var s__16421__$1 = s__16421;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16421__$1);
if(temp__4126__auto__){
var s__16421__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16421__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16421__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16423 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16422 = (0);
while(true){
if((i__16422 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__16422);
var map__16428 = cities.call(null,city_key);
var map__16428__$1 = ((cljs.core.seq_QMARK_.call(null,map__16428))?cljs.core.apply.call(null,cljs.core.hash_map,map__16428):map__16428);
var lat = cljs.core.get.call(null,map__16428__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16428__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var vec__16429 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16429,(0),null);
var y = cljs.core.nth.call(null,vec__16429,(1),null);
cljs.core.chunk_append.call(null,b__16423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"r","r",-471384190),16.5], null)], null)], null));

var G__16432 = (i__16422 + (1));
i__16422 = G__16432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16423),baron$core$ui_connection_$_iter__16420.call(null,cljs.core.chunk_rest.call(null,s__16421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16423),null);
}
} else {
var city_key = cljs.core.first.call(null,s__16421__$2);
var map__16430 = cities.call(null,city_key);
var map__16430__$1 = ((cljs.core.seq_QMARK_.call(null,map__16430))?cljs.core.apply.call(null,cljs.core.hash_map,map__16430):map__16430);
var lat = cljs.core.get.call(null,map__16430__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16430__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var vec__16431 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16431,(0),null);
var y = cljs.core.nth.call(null,vec__16431,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"r","r",-471384190),16.5], null)], null)], null),baron$core$ui_connection_$_iter__16420.call(null,cljs.core.rest.call(null,s__16421__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16419,a,b,map__16418,map__16418__$1,selected,cities))
,null,null));
});})(vec__16419,a,b,map__16418,map__16418__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
})()], null));
} else {
return null;
}
});
baron.core.ui_selected_cities = (function baron$core$ui_selected_cities(p__16433,actions){
var map__16447 = p__16433;
var map__16447__$1 = ((cljs.core.seq_QMARK_.call(null,map__16447))?cljs.core.apply.call(null,cljs.core.hash_map,map__16447):map__16447);
var selected = cljs.core.get.call(null,map__16447__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__16447__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__16447,map__16447__$1,selected,cities){
return (function baron$core$ui_selected_cities_$_iter__16448(s__16449){
return (new cljs.core.LazySeq(null,((function (map__16447,map__16447__$1,selected,cities){
return (function (){
var s__16449__$1 = s__16449;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16449__$1);
if(temp__4126__auto__){
var s__16449__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16449__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16449__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16451 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16450 = (0);
while(true){
if((i__16450 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__16450);
var map__16456 = cities.call(null,city_key);
var map__16456__$1 = ((cljs.core.seq_QMARK_.call(null,map__16456))?cljs.core.apply.call(null,cljs.core.hash_map,map__16456):map__16456);
var lat = cljs.core.get.call(null,map__16456__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16456__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16456__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16457 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16457,(0),null);
var y = cljs.core.nth.call(null,vec__16457,(1),null);
cljs.core.chunk_append.call(null,b__16451,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected-ring",new cljs.core.Keyword(null,"r","r",-471384190),(14)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__16460 = (i__16450 + (1));
i__16450 = G__16460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16451),baron$core$ui_selected_cities_$_iter__16448.call(null,cljs.core.chunk_rest.call(null,s__16449__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16451),null);
}
} else {
var city_key = cljs.core.first.call(null,s__16449__$2);
var map__16458 = cities.call(null,city_key);
var map__16458__$1 = ((cljs.core.seq_QMARK_.call(null,map__16458))?cljs.core.apply.call(null,cljs.core.hash_map,map__16458):map__16458);
var lat = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16459 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16459,(0),null);
var y = cljs.core.nth.call(null,vec__16459,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected-ring",new cljs.core.Keyword(null,"r","r",-471384190),(14)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_selected_cities_$_iter__16448.call(null,cljs.core.rest.call(null,s__16449__$2)));
}
} else {
return null;
}
break;
}
});})(map__16447,map__16447__$1,selected,cities))
,null,null));
});})(map__16447,map__16447__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
});
baron.core.ui_text = (function baron$core$ui_text(p__16461,actions){
var map__16481 = p__16461;
var map__16481__$1 = ((cljs.core.seq_QMARK_.call(null,map__16481))?cljs.core.apply.call(null,cljs.core.hash_map,map__16481):map__16481);
var payoffs = cljs.core.get.call(null,map__16481__$1,new cljs.core.Keyword(null,"payoffs","payoffs",1029670985));
var cities = cljs.core.get.call(null,map__16481__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var vec__16482 = cljs.core.get.call(null,map__16481__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var a = cljs.core.nth.call(null,vec__16482,(0),null);
var b = cljs.core.nth.call(null,vec__16482,(1),null);
var vec__16483 = baron.core.path.centroid(baron.core.connection.call(null,cities.call(null,a),cities.call(null,b)));
var cx = cljs.core.nth.call(null,vec__16483,(0),null);
var cy = cljs.core.nth.call(null,vec__16483,(1),null);
var centroid = vec__16483;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_((function (){var and__4170__auto__ = a;
if(cljs.core.truth_(and__4170__auto__)){
return b;
} else {
return and__4170__auto__;
}
})())?(function (){var payoff = baron.core.format_money.call(null,((1000) * cljs.core.get_in.call(null,payoffs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cx),cljs.core.str(","),cljs.core.str(cy),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),payoff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),payoff], null)], null);
})():null)),(function (){var iter__4936__auto__ = ((function (vec__16483,cx,cy,centroid,map__16481,map__16481__$1,payoffs,cities,vec__16482,a,b){
return (function baron$core$ui_text_$_iter__16484(s__16485){
return (new cljs.core.LazySeq(null,((function (vec__16483,cx,cy,centroid,map__16481,map__16481__$1,payoffs,cities,vec__16482,a,b){
return (function (){
var s__16485__$1 = s__16485;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16485__$1);
if(temp__4126__auto__){
var s__16485__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16485__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16485__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16487 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16486 = (0);
while(true){
if((i__16486 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__16486);
var map__16494 = cities.call(null,city_key);
var map__16494__$1 = ((cljs.core.seq_QMARK_.call(null,map__16494))?cljs.core.apply.call(null,cljs.core.hash_map,map__16494):map__16494);
var lat = cljs.core.get.call(null,map__16494__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16494__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16495 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16495,(0),null);
var y = cljs.core.nth.call(null,vec__16495,(1),null);
var pos = vec__16495;
cljs.core.chunk_append.call(null,b__16487,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__16496 = baron.core.half.call(null,centroid,pos);
switch (G__16496) {
case "north":
return "translate(0,-25)";

break;
case "south":
return "translate(0,25)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null));

var G__16501 = (i__16486 + (1));
i__16486 = G__16501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16487),baron$core$ui_text_$_iter__16484.call(null,cljs.core.chunk_rest.call(null,s__16485__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16487),null);
}
} else {
var city_key = cljs.core.first.call(null,s__16485__$2);
var map__16497 = cities.call(null,city_key);
var map__16497__$1 = ((cljs.core.seq_QMARK_.call(null,map__16497))?cljs.core.apply.call(null,cljs.core.hash_map,map__16497):map__16497);
var lat = cljs.core.get.call(null,map__16497__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16497__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16497__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16498 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16498,(0),null);
var y = cljs.core.nth.call(null,vec__16498,(1),null);
var pos = vec__16498;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__16499 = baron.core.half.call(null,centroid,pos);
switch (G__16499) {
case "north":
return "translate(0,-25)";

break;
case "south":
return "translate(0,25)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null),baron$core$ui_text_$_iter__16484.call(null,cljs.core.rest.call(null,s__16485__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16483,cx,cy,centroid,map__16481,map__16481__$1,payoffs,cities,vec__16482,a,b))
,null,null));
});})(vec__16483,cx,cy,centroid,map__16481,map__16481__$1,payoffs,cities,vec__16482,a,b))
;
return iter__4936__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
})());
});
baron.core.ui = (function baron$core$ui(actions){
return (function (p__16505){
var map__16506 = p__16505;
var map__16506__$1 = ((cljs.core.seq_QMARK_.call(null,map__16506))?cljs.core.apply.call(null,cljs.core.hash_map,map__16506):map__16506);
var model = map__16506__$1;
var usa = cljs.core.get.call(null,map__16506__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),usa], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.95) translate(60,0)"], null),baron.core.ui_country.call(null,model,actions),baron.core.ui_cities.call(null,model,actions),baron.core.ui_connection.call(null,model,actions),baron.core.ui_selected_cities.call(null,model,actions),baron.core.ui_text.call(null,model,actions)], null)], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.flip = (function baron$core$flip(f){
return (function (p1__16508_SHARP_,p2__16507_SHARP_){
return f.call(null,p2__16507_SHARP_,p1__16508_SHARP_);
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e16519){if((e16519 instanceof Error)){
var e__12500__auto__ = e16519;
if((e__12500__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__16517 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__16517,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e16521){if((e16521 instanceof Error)){
var e__12500__auto____$1 = e16521;
if((e__12500__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__16517 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__16517,new cljs.core.Keyword(null,"deselect","deselect",1562387297))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.flip.call(null,cljs.core.remove),cljs.core.PersistentHashSet.fromArray([city], true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e16522){if((e16522 instanceof Error)){
var e__12500__auto____$2 = e16522;
if((e__12500__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12500__auto____$2;
}
} else {
throw e16522;

}
}} else {
throw e__12500__auto____$1;
}
} else {
throw e16521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e16520){if((e16520 instanceof Error)){
var e__12500__auto____$1 = e16520;
if((e__12500__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12500__auto____$1;
}
} else {
throw e16520;

}
}} else {
throw e__12500__auto__;
}
} else {
throw e16519;

}
}});
var c__6540__auto___16561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___16561){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___16561){
return (function (state_16549){
var state_val_16550 = (state_16549[(1)]);
if((state_val_16550 === (4))){
var inst_16529 = (state_16549[(7)]);
var inst_16533 = (state_16549[(8)]);
var inst_16535 = (state_16549[(9)]);
var inst_16524 = (state_16549[(10)]);
var inst_16537 = (state_16549[(2)]);
var inst_16538 = cljs.core.PersistentVector.EMPTY;
var inst_16539 = [inst_16533,inst_16535,inst_16537,inst_16538];
var inst_16540 = cljs.core.PersistentHashMap.fromArrays(inst_16529,inst_16539);
var inst_16541 = vdom.elm.foldp.call(null,baron.core.step,inst_16540,inst_16524);
var inst_16542 = baron.core.ui.call(null,inst_16524);
var inst_16543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16544 = [inst_16541];
var inst_16545 = (new cljs.core.PersistentVector(null,1,(5),inst_16543,inst_16544,null));
var inst_16546 = cljs.core.async.map.call(null,inst_16542,inst_16545);
var inst_16547 = vdom.elm.render_BANG_.call(null,inst_16546,document.body);
var state_16549__$1 = state_16549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16549__$1,inst_16547);
} else {
if((state_val_16550 === (3))){
var inst_16528 = (state_16549[(11)]);
var inst_16535 = (state_16549[(2)]);
var state_16549__$1 = (function (){var statearr_16551 = state_16549;
(statearr_16551[(9)] = inst_16535);

return statearr_16551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16549__$1,(4),inst_16528);
} else {
if((state_val_16550 === (2))){
var inst_16527 = (state_16549[(12)]);
var inst_16531 = (state_16549[(2)]);
var inst_16532 = baron.core.land_border.call(null,inst_16531);
var inst_16533 = baron.core.path.call(null,inst_16532);
var state_16549__$1 = (function (){var statearr_16552 = state_16549;
(statearr_16552[(8)] = inst_16533);

return statearr_16552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16549__$1,(3),inst_16527);
} else {
if((state_val_16550 === (1))){
var inst_16524 = (state_16549[(10)]);
var inst_16524__$1 = cljs.core.async.chan.call(null);
var inst_16525 = (function (){var actions = inst_16524__$1;
return ((function (actions,inst_16524,inst_16524__$1,state_val_16550,c__6540__auto___16561){
return (function (p1__16523_SHARP_){
return JSON.parse(p1__16523_SHARP_);
});
;})(actions,inst_16524,inst_16524__$1,state_val_16550,c__6540__auto___16561))
})();
var inst_16526 = baron.core.fetch.call(null,inst_16525,"resources/public/data/us.json");
var inst_16527 = baron.core.fetch.call(null,cljs.reader.read_string,"resources/public/data/cities.edn");
var inst_16528 = baron.core.fetch.call(null,cljs.reader.read_string,"resources/public/data/payoffs.edn");
var inst_16529 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_16549__$1 = (function (){var statearr_16553 = state_16549;
(statearr_16553[(7)] = inst_16529);

(statearr_16553[(11)] = inst_16528);

(statearr_16553[(12)] = inst_16527);

(statearr_16553[(10)] = inst_16524__$1);

return statearr_16553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16549__$1,(2),inst_16526);
} else {
return null;
}
}
}
}
});})(c__6540__auto___16561))
;
return ((function (switch__6478__auto__,c__6540__auto___16561){
return (function() {
var baron$core$state_machine__6479__auto__ = null;
var baron$core$state_machine__6479__auto____0 = (function (){
var statearr_16557 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16557[(0)] = baron$core$state_machine__6479__auto__);

(statearr_16557[(1)] = (1));

return statearr_16557;
});
var baron$core$state_machine__6479__auto____1 = (function (state_16549){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_16549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e16558){if((e16558 instanceof Object)){
var ex__6482__auto__ = e16558;
var statearr_16559_16562 = state_16549;
(statearr_16559_16562[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16563 = state_16549;
state_16549 = G__16563;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
baron$core$state_machine__6479__auto__ = function(state_16549){
switch(arguments.length){
case 0:
return baron$core$state_machine__6479__auto____0.call(this);
case 1:
return baron$core$state_machine__6479__auto____1.call(this,state_16549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__6479__auto____0;
baron$core$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__6479__auto____1;
return baron$core$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___16561))
})();
var state__6542__auto__ = (function (){var statearr_16560 = f__6541__auto__.call(null);
(statearr_16560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___16561);

return statearr_16560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___16561))
);


//# sourceMappingURL=core.js.map