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
baron.core.half = (function baron$core$half(p__10994,p__10995){
var vec__10998 = p__10994;
var cx = cljs.core.nth.call(null,vec__10998,(0),null);
var cy = cljs.core.nth.call(null,vec__10998,(1),null);
var vec__10999 = p__10995;
var x = cljs.core.nth.call(null,vec__10999,(0),null);
var y = cljs.core.nth.call(null,vec__10999,(1),null);
if((Math.atan2((y - cy),(x - cx)) > (0))){
return "south";
} else {
return "north";
}
});
baron.core.ui_country = (function baron$core$ui_country(model,actions){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"#land"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"static/img/shaded-relief.png",new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null));
});
baron.core.ui_cities = (function baron$core$ui_cities(p__11000,actions){
var map__11018 = p__11000;
var map__11018__$1 = ((cljs.core.seq_QMARK_.call(null,map__11018))?cljs.core.apply.call(null,cljs.core.hash_map,map__11018):map__11018);
var cities = cljs.core.get.call(null,map__11018__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__11018,map__11018__$1,cities){
return (function baron$core$ui_cities_$_iter__11019(s__11020){
return (new cljs.core.LazySeq(null,((function (map__11018,map__11018__$1,cities){
return (function (){
var s__11020__$1 = s__11020;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11020__$1);
if(temp__4126__auto__){
var s__11020__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11020__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__11020__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__11022 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__11021 = (0);
while(true){
if((i__11021 < size__4935__auto__)){
var vec__11029 = cljs.core._nth.call(null,c__4934__auto__,i__11021);
var city_key = cljs.core.nth.call(null,vec__11029,(0),null);
var map__11030 = cljs.core.nth.call(null,vec__11029,(1),null);
var map__11030__$1 = ((cljs.core.seq_QMARK_.call(null,map__11030))?cljs.core.apply.call(null,cljs.core.hash_map,map__11030):map__11030);
var lat = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11031 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11031,(0),null);
var y = cljs.core.nth.call(null,vec__11031,(1),null);
cljs.core.chunk_append.call(null,b__11022,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__11021,vec__11031,x,y,vec__11029,city_key,map__11030,map__11030__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__11022,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(i__11021,vec__11031,x,y,vec__11029,city_key,map__11030,map__11030__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__11022,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities))
,new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),((function (i__11021,vec__11031,x,y,vec__11029,city_key,map__11030,map__11030__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__11022,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(i__11021,vec__11031,x,y,vec__11029,city_key,map__11030,map__11030__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__11022,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__11035 = (i__11021 + (1));
i__11021 = G__11035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11022),baron$core$ui_cities_$_iter__11019.call(null,cljs.core.chunk_rest.call(null,s__11020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11022),null);
}
} else {
var vec__11032 = cljs.core.first.call(null,s__11020__$2);
var city_key = cljs.core.nth.call(null,vec__11032,(0),null);
var map__11033 = cljs.core.nth.call(null,vec__11032,(1),null);
var map__11033__$1 = ((cljs.core.seq_QMARK_.call(null,map__11033))?cljs.core.apply.call(null,cljs.core.hash_map,map__11033):map__11033);
var lat = cljs.core.get.call(null,map__11033__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11033__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11034 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11034,(0),null);
var y = cljs.core.nth.call(null,vec__11034,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (vec__11034,x,y,vec__11032,city_key,map__11033,map__11033__$1,lat,lon,city,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(vec__11034,x,y,vec__11032,city_key,map__11033,map__11033__$1,lat,lon,city,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities))
,new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),((function (vec__11034,x,y,vec__11032,city_key,map__11033,map__11033__$1,lat,lon,city,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(vec__11034,x,y,vec__11032,city_key,map__11033,map__11033__$1,lat,lon,city,s__11020__$2,temp__4126__auto__,map__11018,map__11018__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_cities_$_iter__11019.call(null,cljs.core.rest.call(null,s__11020__$2)));
}
} else {
return null;
}
break;
}
});})(map__11018,map__11018__$1,cities))
,null,null));
});})(map__11018,map__11018__$1,cities))
;
return iter__4936__auto__.call(null,cljs.core.seq.call(null,cities));
});
baron.core.ui_connection = (function baron$core$ui_connection(p__11036,actions){
var map__11039 = p__11036;
var map__11039__$1 = ((cljs.core.seq_QMARK_.call(null,map__11039))?cljs.core.apply.call(null,cljs.core.hash_map,map__11039):map__11039);
var selected = cljs.core.get.call(null,map__11039__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__11039__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))){
var vec__11040 = selected;
var a = cljs.core.nth.call(null,vec__11040,(0),null);
var b = cljs.core.nth.call(null,vec__11040,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"connection",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.connection.call(null,cities.call(null,a),cities.call(null,b)))], null)], null);
} else {
return null;
}
});
baron.core.ui_selected_cities = (function baron$core$ui_selected_cities(p__11041,actions){
var map__11055 = p__11041;
var map__11055__$1 = ((cljs.core.seq_QMARK_.call(null,map__11055))?cljs.core.apply.call(null,cljs.core.hash_map,map__11055):map__11055);
var selected = cljs.core.get.call(null,map__11055__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__11055__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__11055,map__11055__$1,selected,cities){
return (function baron$core$ui_selected_cities_$_iter__11056(s__11057){
return (new cljs.core.LazySeq(null,((function (map__11055,map__11055__$1,selected,cities){
return (function (){
var s__11057__$1 = s__11057;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11057__$1);
if(temp__4126__auto__){
var s__11057__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11057__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__11057__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__11059 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__11058 = (0);
while(true){
if((i__11058 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__11058);
var map__11064 = cities.call(null,city_key);
var map__11064__$1 = ((cljs.core.seq_QMARK_.call(null,map__11064))?cljs.core.apply.call(null,cljs.core.hash_map,map__11064):map__11064);
var lat = cljs.core.get.call(null,map__11064__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11064__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11064__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11065 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11065,(0),null);
var y = cljs.core.nth.call(null,vec__11065,(1),null);
cljs.core.chunk_append.call(null,b__11059,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__11058,map__11064,map__11064__$1,lat,lon,city,vec__11065,x,y,city_key,c__4934__auto__,size__4935__auto__,b__11059,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(i__11058,map__11064,map__11064__$1,lat,lon,city,vec__11065,x,y,city_key,c__4934__auto__,size__4935__auto__,b__11059,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities))
,new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),((function (i__11058,map__11064,map__11064__$1,lat,lon,city,vec__11065,x,y,city_key,c__4934__auto__,size__4935__auto__,b__11059,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__11058,map__11064,map__11064__$1,lat,lon,city,vec__11065,x,y,city_key,c__4934__auto__,size__4935__auto__,b__11059,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null));

var G__11068 = (i__11058 + (1));
i__11058 = G__11068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11059),baron$core$ui_selected_cities_$_iter__11056.call(null,cljs.core.chunk_rest.call(null,s__11057__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11059),null);
}
} else {
var city_key = cljs.core.first.call(null,s__11057__$2);
var map__11066 = cities.call(null,city_key);
var map__11066__$1 = ((cljs.core.seq_QMARK_.call(null,map__11066))?cljs.core.apply.call(null,cljs.core.hash_map,map__11066):map__11066);
var lat = cljs.core.get.call(null,map__11066__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11066__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11066__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11067 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11067,(0),null);
var y = cljs.core.nth.call(null,vec__11067,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (map__11066,map__11066__$1,lat,lon,city,vec__11067,x,y,city_key,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(map__11066,map__11066__$1,lat,lon,city,vec__11067,x,y,city_key,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities))
,new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),((function (map__11066,map__11066__$1,lat,lon,city,vec__11067,x,y,city_key,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__11066,map__11066__$1,lat,lon,city,vec__11067,x,y,city_key,s__11057__$2,temp__4126__auto__,map__11055,map__11055__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null),baron$core$ui_selected_cities_$_iter__11056.call(null,cljs.core.rest.call(null,s__11057__$2)));
}
} else {
return null;
}
break;
}
});})(map__11055,map__11055__$1,selected,cities))
,null,null));
});})(map__11055,map__11055__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
});
baron.core.ui_text = (function baron$core$ui_text(p__11069,actions){
var map__11089 = p__11069;
var map__11089__$1 = ((cljs.core.seq_QMARK_.call(null,map__11089))?cljs.core.apply.call(null,cljs.core.hash_map,map__11089):map__11089);
var payoffs = cljs.core.get.call(null,map__11089__$1,new cljs.core.Keyword(null,"payoffs","payoffs",1029670985));
var cities = cljs.core.get.call(null,map__11089__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var vec__11090 = cljs.core.get.call(null,map__11089__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var a = cljs.core.nth.call(null,vec__11090,(0),null);
var b = cljs.core.nth.call(null,vec__11090,(1),null);
var vec__11091 = baron.core.path.centroid(baron.core.connection.call(null,cities.call(null,a),cities.call(null,b)));
var cx = cljs.core.nth.call(null,vec__11091,(0),null);
var cy = cljs.core.nth.call(null,vec__11091,(1),null);
var centroid = vec__11091;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_((function (){var and__4170__auto__ = a;
if(cljs.core.truth_(and__4170__auto__)){
return b;
} else {
return and__4170__auto__;
}
})())?(function (){var payoff = baron.core.format_money.call(null,((1000) * cljs.core.get_in.call(null,payoffs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cx),cljs.core.str(","),cljs.core.str(cy),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),payoff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),payoff], null)], null);
})():null)),(function (){var iter__4936__auto__ = ((function (vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b){
return (function baron$core$ui_text_$_iter__11092(s__11093){
return (new cljs.core.LazySeq(null,((function (vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b){
return (function (){
var s__11093__$1 = s__11093;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11093__$1);
if(temp__4126__auto__){
var s__11093__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11093__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__11093__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__11095 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__11094 = (0);
while(true){
if((i__11094 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__11094);
var map__11102 = cities.call(null,city_key);
var map__11102__$1 = ((cljs.core.seq_QMARK_.call(null,map__11102))?cljs.core.apply.call(null,cljs.core.hash_map,map__11102):map__11102);
var lat = cljs.core.get.call(null,map__11102__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11102__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11103 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11103,(0),null);
var y = cljs.core.nth.call(null,vec__11103,(1),null);
var pos = vec__11103;
cljs.core.chunk_append.call(null,b__11095,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__11104 = baron.core.half.call(null,centroid,pos);
switch (G__11104) {
case "north":
return "translate(0,-25)";

break;
case "south":
return "translate(0,25)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__11094,map__11102,map__11102__$1,lat,lon,city,vec__11103,x,y,pos,city_key,c__4934__auto__,size__4935__auto__,b__11095,s__11093__$2,temp__4126__auto__,vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__11094,map__11102,map__11102__$1,lat,lon,city,vec__11103,x,y,pos,city_key,c__4934__auto__,size__4935__auto__,b__11095,s__11093__$2,temp__4126__auto__,vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null));

var G__11109 = (i__11094 + (1));
i__11094 = G__11109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11095),baron$core$ui_text_$_iter__11092.call(null,cljs.core.chunk_rest.call(null,s__11093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11095),null);
}
} else {
var city_key = cljs.core.first.call(null,s__11093__$2);
var map__11105 = cities.call(null,city_key);
var map__11105__$1 = ((cljs.core.seq_QMARK_.call(null,map__11105))?cljs.core.apply.call(null,cljs.core.hash_map,map__11105):map__11105);
var lat = cljs.core.get.call(null,map__11105__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__11105__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__11105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__11106 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__11106,(0),null);
var y = cljs.core.nth.call(null,vec__11106,(1),null);
var pos = vec__11106;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__11107 = baron.core.half.call(null,centroid,pos);
switch (G__11107) {
case "north":
return "translate(0,-25)";

break;
case "south":
return "translate(0,25)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (map__11105,map__11105__$1,lat,lon,city,vec__11106,x,y,pos,city_key,s__11093__$2,temp__4126__auto__,vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__11105,map__11105__$1,lat,lon,city,vec__11106,x,y,pos,city_key,s__11093__$2,temp__4126__auto__,vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null),baron$core$ui_text_$_iter__11092.call(null,cljs.core.rest.call(null,s__11093__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b))
,null,null));
});})(vec__11091,cx,cy,centroid,map__11089,map__11089__$1,payoffs,cities,vec__11090,a,b))
;
return iter__4936__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
})());
});
baron.core.ui = (function baron$core$ui(actions){
return (function (p__11113){
var map__11114 = p__11113;
var map__11114__$1 = ((cljs.core.seq_QMARK_.call(null,map__11114))?cljs.core.apply.call(null,cljs.core.hash_map,map__11114):map__11114);
var model = map__11114__$1;
var usa = cljs.core.get.call(null,map__11114__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),usa], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.95) translate(60,0)"], null),baron.core.ui_country.call(null,model,actions),baron.core.ui_cities.call(null,model,actions),baron.core.ui_connection.call(null,model,actions),baron.core.ui_selected_cities.call(null,model,actions),baron.core.ui_text.call(null,model,actions)], null)], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.flip = (function baron$core$flip(f){
return (function (p1__11116_SHARP_,p2__11115_SHARP_){
return f.call(null,p2__11115_SHARP_,p1__11116_SHARP_);
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e11127){if((e11127 instanceof Error)){
var e__10199__auto__ = e11127;
if((e__10199__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__11125 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__11125,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11129){if((e11129 instanceof Error)){
var e__10199__auto____$1 = e11129;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__11125 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__11125,new cljs.core.Keyword(null,"deselect","deselect",1562387297))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.flip.call(null,cljs.core.remove),cljs.core.PersistentHashSet.fromArray([city], true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e11130){if((e11130 instanceof Error)){
var e__10199__auto____$2 = e11130;
if((e__10199__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10199__auto____$2;
}
} else {
throw e11130;

}
}} else {
throw e__10199__auto____$1;
}
} else {
throw e11129;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e11128){if((e11128 instanceof Error)){
var e__10199__auto____$1 = e11128;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10199__auto____$1;
}
} else {
throw e11128;

}
}} else {
throw e__10199__auto__;
}
} else {
throw e11127;

}
}});
var c__6473__auto___11169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___11169){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___11169){
return (function (state_11157){
var state_val_11158 = (state_11157[(1)]);
if((state_val_11158 === (4))){
var inst_11137 = (state_11157[(7)]);
var inst_11132 = (state_11157[(8)]);
var inst_11141 = (state_11157[(9)]);
var inst_11143 = (state_11157[(10)]);
var inst_11145 = (state_11157[(2)]);
var inst_11146 = cljs.core.PersistentVector.EMPTY;
var inst_11147 = [inst_11141,inst_11143,inst_11145,inst_11146];
var inst_11148 = cljs.core.PersistentHashMap.fromArrays(inst_11137,inst_11147);
var inst_11149 = vdom.elm.foldp.call(null,baron.core.step,inst_11148,inst_11132);
var inst_11150 = baron.core.ui.call(null,inst_11132);
var inst_11151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11152 = [inst_11149];
var inst_11153 = (new cljs.core.PersistentVector(null,1,(5),inst_11151,inst_11152,null));
var inst_11154 = cljs.core.async.map.call(null,inst_11150,inst_11153);
var inst_11155 = vdom.elm.render_BANG_.call(null,inst_11154,document.body);
var state_11157__$1 = state_11157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11157__$1,inst_11155);
} else {
if((state_val_11158 === (3))){
var inst_11136 = (state_11157[(11)]);
var inst_11143 = (state_11157[(2)]);
var state_11157__$1 = (function (){var statearr_11159 = state_11157;
(statearr_11159[(10)] = inst_11143);

return statearr_11159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11157__$1,(4),inst_11136);
} else {
if((state_val_11158 === (2))){
var inst_11135 = (state_11157[(12)]);
var inst_11139 = (state_11157[(2)]);
var inst_11140 = baron.core.land_border.call(null,inst_11139);
var inst_11141 = baron.core.path.call(null,inst_11140);
var state_11157__$1 = (function (){var statearr_11160 = state_11157;
(statearr_11160[(9)] = inst_11141);

return statearr_11160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11157__$1,(3),inst_11135);
} else {
if((state_val_11158 === (1))){
var inst_11132 = (state_11157[(8)]);
var inst_11132__$1 = cljs.core.async.chan.call(null);
var inst_11133 = (function (){var actions = inst_11132__$1;
return ((function (actions,inst_11132,inst_11132__$1,state_val_11158,c__6473__auto___11169){
return (function (p1__11131_SHARP_){
return JSON.parse(p1__11131_SHARP_);
});
;})(actions,inst_11132,inst_11132__$1,state_val_11158,c__6473__auto___11169))
})();
var inst_11134 = baron.core.fetch.call(null,inst_11133,"static/data/us.json");
var inst_11135 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/cities.edn");
var inst_11136 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/payoffs.edn");
var inst_11137 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_11157__$1 = (function (){var statearr_11161 = state_11157;
(statearr_11161[(7)] = inst_11137);

(statearr_11161[(12)] = inst_11135);

(statearr_11161[(8)] = inst_11132__$1);

(statearr_11161[(11)] = inst_11136);

return statearr_11161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11157__$1,(2),inst_11134);
} else {
return null;
}
}
}
}
});})(c__6473__auto___11169))
;
return ((function (switch__6452__auto__,c__6473__auto___11169){
return (function() {
var baron$core$state_machine__6453__auto__ = null;
var baron$core$state_machine__6453__auto____0 = (function (){
var statearr_11165 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11165[(0)] = baron$core$state_machine__6453__auto__);

(statearr_11165[(1)] = (1));

return statearr_11165;
});
var baron$core$state_machine__6453__auto____1 = (function (state_11157){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_11157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e11166){if((e11166 instanceof Object)){
var ex__6456__auto__ = e11166;
var statearr_11167_11170 = state_11157;
(statearr_11167_11170[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11171 = state_11157;
state_11157 = G__11171;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
baron$core$state_machine__6453__auto__ = function(state_11157){
switch(arguments.length){
case 0:
return baron$core$state_machine__6453__auto____0.call(this);
case 1:
return baron$core$state_machine__6453__auto____1.call(this,state_11157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__6453__auto____0;
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__6453__auto____1;
return baron$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___11169))
})();
var state__6475__auto__ = (function (){var statearr_11168 = f__6474__auto__.call(null);
(statearr_11168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___11169);

return statearr_11168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___11169))
);


//# sourceMappingURL=core.js.map