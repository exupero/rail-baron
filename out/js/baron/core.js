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
baron.core.half = (function baron$core$half(p__16566,p__16567){
var vec__16570 = p__16566;
var cx = cljs.core.nth.call(null,vec__16570,(0),null);
var cy = cljs.core.nth.call(null,vec__16570,(1),null);
var vec__16571 = p__16567;
var x = cljs.core.nth.call(null,vec__16571,(0),null);
var y = cljs.core.nth.call(null,vec__16571,(1),null);
if((Math.atan2((y - cy),(x - cx)) > (0))){
return "south";
} else {
return "north";
}
});
baron.core.ui_country = (function baron$core$ui_country(model,actions){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"#land"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"resources/public/img/shaded-relief.png",new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null));
});
baron.core.ui_cities = (function baron$core$ui_cities(p__16572,actions){
var map__16590 = p__16572;
var map__16590__$1 = ((cljs.core.seq_QMARK_.call(null,map__16590))?cljs.core.apply.call(null,cljs.core.hash_map,map__16590):map__16590);
var cities = cljs.core.get.call(null,map__16590__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__16590,map__16590__$1,cities){
return (function baron$core$ui_cities_$_iter__16591(s__16592){
return (new cljs.core.LazySeq(null,((function (map__16590,map__16590__$1,cities){
return (function (){
var s__16592__$1 = s__16592;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16592__$1);
if(temp__4126__auto__){
var s__16592__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16592__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16592__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16594 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16593 = (0);
while(true){
if((i__16593 < size__4935__auto__)){
var vec__16601 = cljs.core._nth.call(null,c__4934__auto__,i__16593);
var city_key = cljs.core.nth.call(null,vec__16601,(0),null);
var map__16602 = cljs.core.nth.call(null,vec__16601,(1),null);
var map__16602__$1 = ((cljs.core.seq_QMARK_.call(null,map__16602))?cljs.core.apply.call(null,cljs.core.hash_map,map__16602):map__16602);
var lat = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16603 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16603,(0),null);
var y = cljs.core.nth.call(null,vec__16603,(1),null);
cljs.core.chunk_append.call(null,b__16594,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__16607 = (i__16593 + (1));
i__16593 = G__16607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16594),baron$core$ui_cities_$_iter__16591.call(null,cljs.core.chunk_rest.call(null,s__16592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16594),null);
}
} else {
var vec__16604 = cljs.core.first.call(null,s__16592__$2);
var city_key = cljs.core.nth.call(null,vec__16604,(0),null);
var map__16605 = cljs.core.nth.call(null,vec__16604,(1),null);
var map__16605__$1 = ((cljs.core.seq_QMARK_.call(null,map__16605))?cljs.core.apply.call(null,cljs.core.hash_map,map__16605):map__16605);
var lat = cljs.core.get.call(null,map__16605__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16605__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16606 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16606,(0),null);
var y = cljs.core.nth.call(null,vec__16606,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_cities_$_iter__16591.call(null,cljs.core.rest.call(null,s__16592__$2)));
}
} else {
return null;
}
break;
}
});})(map__16590,map__16590__$1,cities))
,null,null));
});})(map__16590,map__16590__$1,cities))
;
return iter__4936__auto__.call(null,cljs.core.seq.call(null,cities));
});
baron.core.ui_connection = (function baron$core$ui_connection(p__16608,actions){
var map__16623 = p__16608;
var map__16623__$1 = ((cljs.core.seq_QMARK_.call(null,map__16623))?cljs.core.apply.call(null,cljs.core.hash_map,map__16623):map__16623);
var selected = cljs.core.get.call(null,map__16623__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__16623__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))){
var vec__16624 = selected;
var a = cljs.core.nth.call(null,vec__16624,(0),null);
var b = cljs.core.nth.call(null,vec__16624,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"connection",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.connection.call(null,cities.call(null,a),cities.call(null,b))),new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#mask-cities-selected)"], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"mask-cities-selected"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var iter__4936__auto__ = ((function (vec__16624,a,b,map__16623,map__16623__$1,selected,cities){
return (function baron$core$ui_connection_$_iter__16625(s__16626){
return (new cljs.core.LazySeq(null,((function (vec__16624,a,b,map__16623,map__16623__$1,selected,cities){
return (function (){
var s__16626__$1 = s__16626;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16626__$1);
if(temp__4126__auto__){
var s__16626__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16626__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16626__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16628 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16627 = (0);
while(true){
if((i__16627 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__16627);
var map__16633 = cities.call(null,city_key);
var map__16633__$1 = ((cljs.core.seq_QMARK_.call(null,map__16633))?cljs.core.apply.call(null,cljs.core.hash_map,map__16633):map__16633);
var lat = cljs.core.get.call(null,map__16633__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16633__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var vec__16634 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16634,(0),null);
var y = cljs.core.nth.call(null,vec__16634,(1),null);
cljs.core.chunk_append.call(null,b__16628,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"r","r",-471384190),16.5], null)], null)], null));

var G__16637 = (i__16627 + (1));
i__16627 = G__16637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16628),baron$core$ui_connection_$_iter__16625.call(null,cljs.core.chunk_rest.call(null,s__16626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16628),null);
}
} else {
var city_key = cljs.core.first.call(null,s__16626__$2);
var map__16635 = cities.call(null,city_key);
var map__16635__$1 = ((cljs.core.seq_QMARK_.call(null,map__16635))?cljs.core.apply.call(null,cljs.core.hash_map,map__16635):map__16635);
var lat = cljs.core.get.call(null,map__16635__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16635__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var vec__16636 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16636,(0),null);
var y = cljs.core.nth.call(null,vec__16636,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"r","r",-471384190),16.5], null)], null)], null),baron$core$ui_connection_$_iter__16625.call(null,cljs.core.rest.call(null,s__16626__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16624,a,b,map__16623,map__16623__$1,selected,cities))
,null,null));
});})(vec__16624,a,b,map__16623,map__16623__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
})()], null));
} else {
return null;
}
});
baron.core.ui_selected_cities = (function baron$core$ui_selected_cities(p__16638,actions){
var map__16652 = p__16638;
var map__16652__$1 = ((cljs.core.seq_QMARK_.call(null,map__16652))?cljs.core.apply.call(null,cljs.core.hash_map,map__16652):map__16652);
var selected = cljs.core.get.call(null,map__16652__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__16652__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__16652,map__16652__$1,selected,cities){
return (function baron$core$ui_selected_cities_$_iter__16653(s__16654){
return (new cljs.core.LazySeq(null,((function (map__16652,map__16652__$1,selected,cities){
return (function (){
var s__16654__$1 = s__16654;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16654__$1);
if(temp__4126__auto__){
var s__16654__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16654__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16654__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16656 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16655 = (0);
while(true){
if((i__16655 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__16655);
var map__16661 = cities.call(null,city_key);
var map__16661__$1 = ((cljs.core.seq_QMARK_.call(null,map__16661))?cljs.core.apply.call(null,cljs.core.hash_map,map__16661):map__16661);
var lat = cljs.core.get.call(null,map__16661__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16661__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16662 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16662,(0),null);
var y = cljs.core.nth.call(null,vec__16662,(1),null);
cljs.core.chunk_append.call(null,b__16656,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected-ring",new cljs.core.Keyword(null,"r","r",-471384190),(14)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__16665 = (i__16655 + (1));
i__16655 = G__16665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16656),baron$core$ui_selected_cities_$_iter__16653.call(null,cljs.core.chunk_rest.call(null,s__16654__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16656),null);
}
} else {
var city_key = cljs.core.first.call(null,s__16654__$2);
var map__16663 = cities.call(null,city_key);
var map__16663__$1 = ((cljs.core.seq_QMARK_.call(null,map__16663))?cljs.core.apply.call(null,cljs.core.hash_map,map__16663):map__16663);
var lat = cljs.core.get.call(null,map__16663__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16663__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16664 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16664,(0),null);
var y = cljs.core.nth.call(null,vec__16664,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null)),new cljs.core.Keyword(null,"ontouchstart","ontouchstart",-1132700948),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected-ring",new cljs.core.Keyword(null,"r","r",-471384190),(14)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_selected_cities_$_iter__16653.call(null,cljs.core.rest.call(null,s__16654__$2)));
}
} else {
return null;
}
break;
}
});})(map__16652,map__16652__$1,selected,cities))
,null,null));
});})(map__16652,map__16652__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
});
baron.core.ui_text = (function baron$core$ui_text(p__16666,actions){
var map__16686 = p__16666;
var map__16686__$1 = ((cljs.core.seq_QMARK_.call(null,map__16686))?cljs.core.apply.call(null,cljs.core.hash_map,map__16686):map__16686);
var payoffs = cljs.core.get.call(null,map__16686__$1,new cljs.core.Keyword(null,"payoffs","payoffs",1029670985));
var cities = cljs.core.get.call(null,map__16686__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var vec__16687 = cljs.core.get.call(null,map__16686__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var a = cljs.core.nth.call(null,vec__16687,(0),null);
var b = cljs.core.nth.call(null,vec__16687,(1),null);
var vec__16688 = baron.core.path.centroid(baron.core.connection.call(null,cities.call(null,a),cities.call(null,b)));
var cx = cljs.core.nth.call(null,vec__16688,(0),null);
var cy = cljs.core.nth.call(null,vec__16688,(1),null);
var centroid = vec__16688;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_((function (){var and__4170__auto__ = a;
if(cljs.core.truth_(and__4170__auto__)){
return b;
} else {
return and__4170__auto__;
}
})())?(function (){var payoff = baron.core.format_money.call(null,((1000) * cljs.core.get_in.call(null,payoffs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cx),cljs.core.str(","),cljs.core.str(cy),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),payoff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),payoff], null)], null);
})():null)),(function (){var iter__4936__auto__ = ((function (vec__16688,cx,cy,centroid,map__16686,map__16686__$1,payoffs,cities,vec__16687,a,b){
return (function baron$core$ui_text_$_iter__16689(s__16690){
return (new cljs.core.LazySeq(null,((function (vec__16688,cx,cy,centroid,map__16686,map__16686__$1,payoffs,cities,vec__16687,a,b){
return (function (){
var s__16690__$1 = s__16690;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16690__$1);
if(temp__4126__auto__){
var s__16690__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16690__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__16690__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__16692 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__16691 = (0);
while(true){
if((i__16691 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__16691);
var map__16699 = cities.call(null,city_key);
var map__16699__$1 = ((cljs.core.seq_QMARK_.call(null,map__16699))?cljs.core.apply.call(null,cljs.core.hash_map,map__16699):map__16699);
var lat = cljs.core.get.call(null,map__16699__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16699__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16700 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16700,(0),null);
var y = cljs.core.nth.call(null,vec__16700,(1),null);
var pos = vec__16700;
cljs.core.chunk_append.call(null,b__16692,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__16701 = baron.core.half.call(null,centroid,pos);
switch (G__16701) {
case "north":
return "translate(0,-28)";

break;
case "south":
return "translate(0,28)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null));

var G__16706 = (i__16691 + (1));
i__16691 = G__16706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16692),baron$core$ui_text_$_iter__16689.call(null,cljs.core.chunk_rest.call(null,s__16690__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16692),null);
}
} else {
var city_key = cljs.core.first.call(null,s__16690__$2);
var map__16702 = cities.call(null,city_key);
var map__16702__$1 = ((cljs.core.seq_QMARK_.call(null,map__16702))?cljs.core.apply.call(null,cljs.core.hash_map,map__16702):map__16702);
var lat = cljs.core.get.call(null,map__16702__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__16702__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__16702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__16703 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__16703,(0),null);
var y = cljs.core.nth.call(null,vec__16703,(1),null);
var pos = vec__16703;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__16704 = baron.core.half.call(null,centroid,pos);
switch (G__16704) {
case "north":
return "translate(0,-28)";

break;
case "south":
return "translate(0,28)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null),baron$core$ui_text_$_iter__16689.call(null,cljs.core.rest.call(null,s__16690__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16688,cx,cy,centroid,map__16686,map__16686__$1,payoffs,cities,vec__16687,a,b))
,null,null));
});})(vec__16688,cx,cy,centroid,map__16686,map__16686__$1,payoffs,cities,vec__16687,a,b))
;
return iter__4936__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
})());
});
baron.core.ui = (function baron$core$ui(actions){
return (function (p__16710){
var map__16711 = p__16710;
var map__16711__$1 = ((cljs.core.seq_QMARK_.call(null,map__16711))?cljs.core.apply.call(null,cljs.core.hash_map,map__16711):map__16711);
var model = map__16711__$1;
var usa = cljs.core.get.call(null,map__16711__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),usa], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.95) translate(60,0)"], null),baron.core.ui_country.call(null,model,actions),baron.core.ui_cities.call(null,model,actions),baron.core.ui_connection.call(null,model,actions),baron.core.ui_selected_cities.call(null,model,actions),baron.core.ui_text.call(null,model,actions)], null)], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.flip = (function baron$core$flip(f){
return (function (p1__16713_SHARP_,p2__16712_SHARP_){
return f.call(null,p2__16712_SHARP_,p1__16713_SHARP_);
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e16724){if((e16724 instanceof Error)){
var e__12500__auto__ = e16724;
if((e__12500__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__16722 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__16722,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e16726){if((e16726 instanceof Error)){
var e__12500__auto____$1 = e16726;
if((e__12500__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__16722 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__16722,new cljs.core.Keyword(null,"deselect","deselect",1562387297))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.flip.call(null,cljs.core.remove),cljs.core.PersistentHashSet.fromArray([city], true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e16727){if((e16727 instanceof Error)){
var e__12500__auto____$2 = e16727;
if((e__12500__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12500__auto____$2;
}
} else {
throw e16727;

}
}} else {
throw e__12500__auto____$1;
}
} else {
throw e16726;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e16725){if((e16725 instanceof Error)){
var e__12500__auto____$1 = e16725;
if((e__12500__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12500__auto____$1;
}
} else {
throw e16725;

}
}} else {
throw e__12500__auto__;
}
} else {
throw e16724;

}
}});
var c__6540__auto___16766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___16766){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___16766){
return (function (state_16754){
var state_val_16755 = (state_16754[(1)]);
if((state_val_16755 === (4))){
var inst_16740 = (state_16754[(7)]);
var inst_16729 = (state_16754[(8)]);
var inst_16734 = (state_16754[(9)]);
var inst_16738 = (state_16754[(10)]);
var inst_16742 = (state_16754[(2)]);
var inst_16743 = cljs.core.PersistentVector.EMPTY;
var inst_16744 = [inst_16738,inst_16740,inst_16742,inst_16743];
var inst_16745 = cljs.core.PersistentHashMap.fromArrays(inst_16734,inst_16744);
var inst_16746 = vdom.elm.foldp.call(null,baron.core.step,inst_16745,inst_16729);
var inst_16747 = baron.core.ui.call(null,inst_16729);
var inst_16748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16749 = [inst_16746];
var inst_16750 = (new cljs.core.PersistentVector(null,1,(5),inst_16748,inst_16749,null));
var inst_16751 = cljs.core.async.map.call(null,inst_16747,inst_16750);
var inst_16752 = vdom.elm.render_BANG_.call(null,inst_16751,document.body);
var state_16754__$1 = state_16754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16754__$1,inst_16752);
} else {
if((state_val_16755 === (3))){
var inst_16733 = (state_16754[(11)]);
var inst_16740 = (state_16754[(2)]);
var state_16754__$1 = (function (){var statearr_16756 = state_16754;
(statearr_16756[(7)] = inst_16740);

return statearr_16756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16754__$1,(4),inst_16733);
} else {
if((state_val_16755 === (2))){
var inst_16732 = (state_16754[(12)]);
var inst_16736 = (state_16754[(2)]);
var inst_16737 = baron.core.land_border.call(null,inst_16736);
var inst_16738 = baron.core.path.call(null,inst_16737);
var state_16754__$1 = (function (){var statearr_16757 = state_16754;
(statearr_16757[(10)] = inst_16738);

return statearr_16757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16754__$1,(3),inst_16732);
} else {
if((state_val_16755 === (1))){
var inst_16729 = (state_16754[(8)]);
var inst_16729__$1 = cljs.core.async.chan.call(null);
var inst_16730 = (function (){var actions = inst_16729__$1;
return ((function (actions,inst_16729,inst_16729__$1,state_val_16755,c__6540__auto___16766){
return (function (p1__16728_SHARP_){
return JSON.parse(p1__16728_SHARP_);
});
;})(actions,inst_16729,inst_16729__$1,state_val_16755,c__6540__auto___16766))
})();
var inst_16731 = baron.core.fetch.call(null,inst_16730,"resources/public/data/us.json");
var inst_16732 = baron.core.fetch.call(null,cljs.reader.read_string,"resources/public/data/cities.edn");
var inst_16733 = baron.core.fetch.call(null,cljs.reader.read_string,"resources/public/data/payoffs.edn");
var inst_16734 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_16754__$1 = (function (){var statearr_16758 = state_16754;
(statearr_16758[(11)] = inst_16733);

(statearr_16758[(8)] = inst_16729__$1);

(statearr_16758[(9)] = inst_16734);

(statearr_16758[(12)] = inst_16732);

return statearr_16758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16754__$1,(2),inst_16731);
} else {
return null;
}
}
}
}
});})(c__6540__auto___16766))
;
return ((function (switch__6478__auto__,c__6540__auto___16766){
return (function() {
var baron$core$state_machine__6479__auto__ = null;
var baron$core$state_machine__6479__auto____0 = (function (){
var statearr_16762 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16762[(0)] = baron$core$state_machine__6479__auto__);

(statearr_16762[(1)] = (1));

return statearr_16762;
});
var baron$core$state_machine__6479__auto____1 = (function (state_16754){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_16754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e16763){if((e16763 instanceof Object)){
var ex__6482__auto__ = e16763;
var statearr_16764_16767 = state_16754;
(statearr_16764_16767[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16768 = state_16754;
state_16754 = G__16768;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
baron$core$state_machine__6479__auto__ = function(state_16754){
switch(arguments.length){
case 0:
return baron$core$state_machine__6479__auto____0.call(this);
case 1:
return baron$core$state_machine__6479__auto____1.call(this,state_16754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__6479__auto____0;
baron$core$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__6479__auto____1;
return baron$core$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___16766))
})();
var state__6542__auto__ = (function (){var statearr_16765 = f__6541__auto__.call(null);
(statearr_16765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___16766);

return statearr_16765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___16766))
);


//# sourceMappingURL=core.js.map