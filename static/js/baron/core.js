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
baron.core.half = (function baron$core$half(p__15603,p__15604){
var vec__15607 = p__15603;
var cx = cljs.core.nth.call(null,vec__15607,(0),null);
var cy = cljs.core.nth.call(null,vec__15607,(1),null);
var vec__15608 = p__15604;
var x = cljs.core.nth.call(null,vec__15608,(0),null);
var y = cljs.core.nth.call(null,vec__15608,(1),null);
if((Math.atan2((y - cy),(x - cx)) > (0))){
return "south";
} else {
return "north";
}
});
baron.core.ui_country = (function baron$core$ui_country(model,actions){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"#land"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"static/img/shaded-relief.png",new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null));
});
baron.core.ui_cities = (function baron$core$ui_cities(p__15609,actions){
var map__15627 = p__15609;
var map__15627__$1 = ((cljs.core.seq_QMARK_.call(null,map__15627))?cljs.core.apply.call(null,cljs.core.hash_map,map__15627):map__15627);
var cities = cljs.core.get.call(null,map__15627__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__15627,map__15627__$1,cities){
return (function baron$core$ui_cities_$_iter__15628(s__15629){
return (new cljs.core.LazySeq(null,((function (map__15627,map__15627__$1,cities){
return (function (){
var s__15629__$1 = s__15629;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15629__$1);
if(temp__4126__auto__){
var s__15629__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15629__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__15629__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__15631 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__15630 = (0);
while(true){
if((i__15630 < size__4935__auto__)){
var vec__15638 = cljs.core._nth.call(null,c__4934__auto__,i__15630);
var city_key = cljs.core.nth.call(null,vec__15638,(0),null);
var map__15639 = cljs.core.nth.call(null,vec__15638,(1),null);
var map__15639__$1 = ((cljs.core.seq_QMARK_.call(null,map__15639))?cljs.core.apply.call(null,cljs.core.hash_map,map__15639):map__15639);
var lat = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__15640 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15640,(0),null);
var y = cljs.core.nth.call(null,vec__15640,(1),null);
cljs.core.chunk_append.call(null,b__15631,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__15644 = (i__15630 + (1));
i__15630 = G__15644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15631),baron$core$ui_cities_$_iter__15628.call(null,cljs.core.chunk_rest.call(null,s__15629__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15631),null);
}
} else {
var vec__15641 = cljs.core.first.call(null,s__15629__$2);
var city_key = cljs.core.nth.call(null,vec__15641,(0),null);
var map__15642 = cljs.core.nth.call(null,vec__15641,(1),null);
var map__15642__$1 = ((cljs.core.seq_QMARK_.call(null,map__15642))?cljs.core.apply.call(null,cljs.core.hash_map,map__15642):map__15642);
var lat = cljs.core.get.call(null,map__15642__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15642__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__15642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__15643 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15643,(0),null);
var y = cljs.core.nth.call(null,vec__15643,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_cities_$_iter__15628.call(null,cljs.core.rest.call(null,s__15629__$2)));
}
} else {
return null;
}
break;
}
});})(map__15627,map__15627__$1,cities))
,null,null));
});})(map__15627,map__15627__$1,cities))
;
return iter__4936__auto__.call(null,cljs.core.seq.call(null,cities));
});
baron.core.ui_connection = (function baron$core$ui_connection(p__15645,actions){
var map__15660 = p__15645;
var map__15660__$1 = ((cljs.core.seq_QMARK_.call(null,map__15660))?cljs.core.apply.call(null,cljs.core.hash_map,map__15660):map__15660);
var selected = cljs.core.get.call(null,map__15660__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__15660__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))){
var vec__15661 = selected;
var a = cljs.core.nth.call(null,vec__15661,(0),null);
var b = cljs.core.nth.call(null,vec__15661,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"connection",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.connection.call(null,cities.call(null,a),cities.call(null,b))),new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#mask-cities-selected)"], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"mask-cities-selected"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var iter__4936__auto__ = ((function (vec__15661,a,b,map__15660,map__15660__$1,selected,cities){
return (function baron$core$ui_connection_$_iter__15662(s__15663){
return (new cljs.core.LazySeq(null,((function (vec__15661,a,b,map__15660,map__15660__$1,selected,cities){
return (function (){
var s__15663__$1 = s__15663;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15663__$1);
if(temp__4126__auto__){
var s__15663__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15663__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__15663__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__15665 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__15664 = (0);
while(true){
if((i__15664 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__15664);
var map__15670 = cities.call(null,city_key);
var map__15670__$1 = ((cljs.core.seq_QMARK_.call(null,map__15670))?cljs.core.apply.call(null,cljs.core.hash_map,map__15670):map__15670);
var lat = cljs.core.get.call(null,map__15670__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15670__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var vec__15671 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15671,(0),null);
var y = cljs.core.nth.call(null,vec__15671,(1),null);
cljs.core.chunk_append.call(null,b__15665,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"r","r",-471384190),16.5], null)], null)], null));

var G__15674 = (i__15664 + (1));
i__15664 = G__15674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15665),baron$core$ui_connection_$_iter__15662.call(null,cljs.core.chunk_rest.call(null,s__15663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15665),null);
}
} else {
var city_key = cljs.core.first.call(null,s__15663__$2);
var map__15672 = cities.call(null,city_key);
var map__15672__$1 = ((cljs.core.seq_QMARK_.call(null,map__15672))?cljs.core.apply.call(null,cljs.core.hash_map,map__15672):map__15672);
var lat = cljs.core.get.call(null,map__15672__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15672__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var vec__15673 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15673,(0),null);
var y = cljs.core.nth.call(null,vec__15673,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"r","r",-471384190),16.5], null)], null)], null),baron$core$ui_connection_$_iter__15662.call(null,cljs.core.rest.call(null,s__15663__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15661,a,b,map__15660,map__15660__$1,selected,cities))
,null,null));
});})(vec__15661,a,b,map__15660,map__15660__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
})()], null));
} else {
return null;
}
});
baron.core.ui_selected_cities = (function baron$core$ui_selected_cities(p__15675,actions){
var map__15689 = p__15675;
var map__15689__$1 = ((cljs.core.seq_QMARK_.call(null,map__15689))?cljs.core.apply.call(null,cljs.core.hash_map,map__15689):map__15689);
var selected = cljs.core.get.call(null,map__15689__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__15689__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__15689,map__15689__$1,selected,cities){
return (function baron$core$ui_selected_cities_$_iter__15690(s__15691){
return (new cljs.core.LazySeq(null,((function (map__15689,map__15689__$1,selected,cities){
return (function (){
var s__15691__$1 = s__15691;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15691__$1);
if(temp__4126__auto__){
var s__15691__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15691__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__15691__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__15693 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__15692 = (0);
while(true){
if((i__15692 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__15692);
var map__15698 = cities.call(null,city_key);
var map__15698__$1 = ((cljs.core.seq_QMARK_.call(null,map__15698))?cljs.core.apply.call(null,cljs.core.hash_map,map__15698):map__15698);
var lat = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__15698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__15699 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15699,(0),null);
var y = cljs.core.nth.call(null,vec__15699,(1),null);
cljs.core.chunk_append.call(null,b__15693,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected-ring",new cljs.core.Keyword(null,"r","r",-471384190),(14)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__15702 = (i__15692 + (1));
i__15692 = G__15702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15693),baron$core$ui_selected_cities_$_iter__15690.call(null,cljs.core.chunk_rest.call(null,s__15691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15693),null);
}
} else {
var city_key = cljs.core.first.call(null,s__15691__$2);
var map__15700 = cities.call(null,city_key);
var map__15700__$1 = ((cljs.core.seq_QMARK_.call(null,map__15700))?cljs.core.apply.call(null,cljs.core.hash_map,map__15700):map__15700);
var lat = cljs.core.get.call(null,map__15700__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15700__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__15700__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__15701 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15701,(0),null);
var y = cljs.core.nth.call(null,vec__15701,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected-ring",new cljs.core.Keyword(null,"r","r",-471384190),(14)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_selected_cities_$_iter__15690.call(null,cljs.core.rest.call(null,s__15691__$2)));
}
} else {
return null;
}
break;
}
});})(map__15689,map__15689__$1,selected,cities))
,null,null));
});})(map__15689,map__15689__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
});
baron.core.ui_text = (function baron$core$ui_text(p__15703,actions){
var map__15723 = p__15703;
var map__15723__$1 = ((cljs.core.seq_QMARK_.call(null,map__15723))?cljs.core.apply.call(null,cljs.core.hash_map,map__15723):map__15723);
var payoffs = cljs.core.get.call(null,map__15723__$1,new cljs.core.Keyword(null,"payoffs","payoffs",1029670985));
var cities = cljs.core.get.call(null,map__15723__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var vec__15724 = cljs.core.get.call(null,map__15723__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var a = cljs.core.nth.call(null,vec__15724,(0),null);
var b = cljs.core.nth.call(null,vec__15724,(1),null);
var vec__15725 = baron.core.path.centroid(baron.core.connection.call(null,cities.call(null,a),cities.call(null,b)));
var cx = cljs.core.nth.call(null,vec__15725,(0),null);
var cy = cljs.core.nth.call(null,vec__15725,(1),null);
var centroid = vec__15725;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_((function (){var and__4170__auto__ = a;
if(cljs.core.truth_(and__4170__auto__)){
return b;
} else {
return and__4170__auto__;
}
})())?(function (){var payoff = baron.core.format_money.call(null,((1000) * cljs.core.get_in.call(null,payoffs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cx),cljs.core.str(","),cljs.core.str(cy),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),payoff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),payoff], null)], null);
})():null)),(function (){var iter__4936__auto__ = ((function (vec__15725,cx,cy,centroid,map__15723,map__15723__$1,payoffs,cities,vec__15724,a,b){
return (function baron$core$ui_text_$_iter__15726(s__15727){
return (new cljs.core.LazySeq(null,((function (vec__15725,cx,cy,centroid,map__15723,map__15723__$1,payoffs,cities,vec__15724,a,b){
return (function (){
var s__15727__$1 = s__15727;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15727__$1);
if(temp__4126__auto__){
var s__15727__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15727__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__15727__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__15729 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__15728 = (0);
while(true){
if((i__15728 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__15728);
var map__15736 = cities.call(null,city_key);
var map__15736__$1 = ((cljs.core.seq_QMARK_.call(null,map__15736))?cljs.core.apply.call(null,cljs.core.hash_map,map__15736):map__15736);
var lat = cljs.core.get.call(null,map__15736__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15736__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__15736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__15737 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15737,(0),null);
var y = cljs.core.nth.call(null,vec__15737,(1),null);
var pos = vec__15737;
cljs.core.chunk_append.call(null,b__15729,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__15738 = baron.core.half.call(null,centroid,pos);
switch (G__15738) {
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

var G__15743 = (i__15728 + (1));
i__15728 = G__15743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15729),baron$core$ui_text_$_iter__15726.call(null,cljs.core.chunk_rest.call(null,s__15727__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15729),null);
}
} else {
var city_key = cljs.core.first.call(null,s__15727__$2);
var map__15739 = cities.call(null,city_key);
var map__15739__$1 = ((cljs.core.seq_QMARK_.call(null,map__15739))?cljs.core.apply.call(null,cljs.core.hash_map,map__15739):map__15739);
var lat = cljs.core.get.call(null,map__15739__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__15739__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__15739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__15740 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__15740,(0),null);
var y = cljs.core.nth.call(null,vec__15740,(1),null);
var pos = vec__15740;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__15741 = baron.core.half.call(null,centroid,pos);
switch (G__15741) {
case "north":
return "translate(0,-25)";

break;
case "south":
return "translate(0,25)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null),baron$core$ui_text_$_iter__15726.call(null,cljs.core.rest.call(null,s__15727__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15725,cx,cy,centroid,map__15723,map__15723__$1,payoffs,cities,vec__15724,a,b))
,null,null));
});})(vec__15725,cx,cy,centroid,map__15723,map__15723__$1,payoffs,cities,vec__15724,a,b))
;
return iter__4936__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
})());
});
baron.core.ui = (function baron$core$ui(actions){
return (function (p__15747){
var map__15748 = p__15747;
var map__15748__$1 = ((cljs.core.seq_QMARK_.call(null,map__15748))?cljs.core.apply.call(null,cljs.core.hash_map,map__15748):map__15748);
var model = map__15748__$1;
var usa = cljs.core.get.call(null,map__15748__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),usa], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.95) translate(60,0)"], null),baron.core.ui_country.call(null,model,actions),baron.core.ui_cities.call(null,model,actions),baron.core.ui_connection.call(null,model,actions),baron.core.ui_selected_cities.call(null,model,actions),baron.core.ui_text.call(null,model,actions)], null)], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.flip = (function baron$core$flip(f){
return (function (p1__15750_SHARP_,p2__15749_SHARP_){
return f.call(null,p2__15749_SHARP_,p1__15750_SHARP_);
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e15761){if((e15761 instanceof Error)){
var e__10199__auto__ = e15761;
if((e__10199__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__15759 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__15759,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e15763){if((e15763 instanceof Error)){
var e__10199__auto____$1 = e15763;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__15759 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__15759,new cljs.core.Keyword(null,"deselect","deselect",1562387297))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.flip.call(null,cljs.core.remove),cljs.core.PersistentHashSet.fromArray([city], true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e15764){if((e15764 instanceof Error)){
var e__10199__auto____$2 = e15764;
if((e__10199__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10199__auto____$2;
}
} else {
throw e15764;

}
}} else {
throw e__10199__auto____$1;
}
} else {
throw e15763;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e15762){if((e15762 instanceof Error)){
var e__10199__auto____$1 = e15762;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10199__auto____$1;
}
} else {
throw e15762;

}
}} else {
throw e__10199__auto__;
}
} else {
throw e15761;

}
}});
var c__6473__auto___15803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___15803){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___15803){
return (function (state_15791){
var state_val_15792 = (state_15791[(1)]);
if((state_val_15792 === (4))){
var inst_15777 = (state_15791[(7)]);
var inst_15771 = (state_15791[(8)]);
var inst_15766 = (state_15791[(9)]);
var inst_15775 = (state_15791[(10)]);
var inst_15779 = (state_15791[(2)]);
var inst_15780 = cljs.core.PersistentVector.EMPTY;
var inst_15781 = [inst_15775,inst_15777,inst_15779,inst_15780];
var inst_15782 = cljs.core.PersistentHashMap.fromArrays(inst_15771,inst_15781);
var inst_15783 = vdom.elm.foldp.call(null,baron.core.step,inst_15782,inst_15766);
var inst_15784 = baron.core.ui.call(null,inst_15766);
var inst_15785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15786 = [inst_15783];
var inst_15787 = (new cljs.core.PersistentVector(null,1,(5),inst_15785,inst_15786,null));
var inst_15788 = cljs.core.async.map.call(null,inst_15784,inst_15787);
var inst_15789 = vdom.elm.render_BANG_.call(null,inst_15788,document.body);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15791__$1,inst_15789);
} else {
if((state_val_15792 === (3))){
var inst_15770 = (state_15791[(11)]);
var inst_15777 = (state_15791[(2)]);
var state_15791__$1 = (function (){var statearr_15793 = state_15791;
(statearr_15793[(7)] = inst_15777);

return statearr_15793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15791__$1,(4),inst_15770);
} else {
if((state_val_15792 === (2))){
var inst_15769 = (state_15791[(12)]);
var inst_15773 = (state_15791[(2)]);
var inst_15774 = baron.core.land_border.call(null,inst_15773);
var inst_15775 = baron.core.path.call(null,inst_15774);
var state_15791__$1 = (function (){var statearr_15794 = state_15791;
(statearr_15794[(10)] = inst_15775);

return statearr_15794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15791__$1,(3),inst_15769);
} else {
if((state_val_15792 === (1))){
var inst_15766 = (state_15791[(9)]);
var inst_15766__$1 = cljs.core.async.chan.call(null);
var inst_15767 = (function (){var actions = inst_15766__$1;
return ((function (actions,inst_15766,inst_15766__$1,state_val_15792,c__6473__auto___15803){
return (function (p1__15765_SHARP_){
return JSON.parse(p1__15765_SHARP_);
});
;})(actions,inst_15766,inst_15766__$1,state_val_15792,c__6473__auto___15803))
})();
var inst_15768 = baron.core.fetch.call(null,inst_15767,"static/data/us.json");
var inst_15769 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/cities.edn");
var inst_15770 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/payoffs.edn");
var inst_15771 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_15791__$1 = (function (){var statearr_15795 = state_15791;
(statearr_15795[(8)] = inst_15771);

(statearr_15795[(9)] = inst_15766__$1);

(statearr_15795[(12)] = inst_15769);

(statearr_15795[(11)] = inst_15770);

return statearr_15795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15791__$1,(2),inst_15768);
} else {
return null;
}
}
}
}
});})(c__6473__auto___15803))
;
return ((function (switch__6452__auto__,c__6473__auto___15803){
return (function() {
var baron$core$state_machine__6453__auto__ = null;
var baron$core$state_machine__6453__auto____0 = (function (){
var statearr_15799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15799[(0)] = baron$core$state_machine__6453__auto__);

(statearr_15799[(1)] = (1));

return statearr_15799;
});
var baron$core$state_machine__6453__auto____1 = (function (state_15791){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_15791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e15800){if((e15800 instanceof Object)){
var ex__6456__auto__ = e15800;
var statearr_15801_15804 = state_15791;
(statearr_15801_15804[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15805 = state_15791;
state_15791 = G__15805;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
baron$core$state_machine__6453__auto__ = function(state_15791){
switch(arguments.length){
case 0:
return baron$core$state_machine__6453__auto____0.call(this);
case 1:
return baron$core$state_machine__6453__auto____1.call(this,state_15791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__6453__auto____0;
baron$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__6453__auto____1;
return baron$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___15803))
})();
var state__6475__auto__ = (function (){var statearr_15802 = f__6474__auto__.call(null);
(statearr_15802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___15803);

return statearr_15802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___15803))
);


//# sourceMappingURL=core.js.map