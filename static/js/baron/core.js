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
return topojson.feature(shape,shape.objects.land);
});
baron.core.projection = d3.geo.azimuthalEqualArea().scale(baron.core.width).translate([33.5,262.5]).rotate([(100),(-45)]).center([-17.6076,-4.7913]).scale((1297));
baron.core.path = d3.geo.path().projection(baron.core.projection);
baron.core.lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));
baron.core.format_money = d3.format("$,");
baron.core.connection = (function baron$core$connection(a,b){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [baron.core.lon_lat.call(null,a),baron.core.lon_lat.call(null,b)], null)], null));
});
baron.core.half = (function baron$core$half(p__24136,p__24137){
var vec__24140 = p__24136;
var cx = cljs.core.nth.call(null,vec__24140,(0),null);
var cy = cljs.core.nth.call(null,vec__24140,(1),null);
var vec__24141 = p__24137;
var x = cljs.core.nth.call(null,vec__24141,(0),null);
var y = cljs.core.nth.call(null,vec__24141,(1),null);
if((Math.atan2((y - cy),(x - cx)) > (0))){
return "south";
} else {
return "north";
}
});
baron.core.ui_country = (function baron$core$ui_country(model,actions){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"#land"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip)",new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),"static/img/shaded-relief.png",new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, ["xlink:href","#land"], null)], null)], null));
});
baron.core.ui_cities = (function baron$core$ui_cities(p__24142,actions){
var map__24160 = p__24142;
var map__24160__$1 = ((cljs.core.seq_QMARK_.call(null,map__24160))?cljs.core.apply.call(null,cljs.core.hash_map,map__24160):map__24160);
var cities = cljs.core.get.call(null,map__24160__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__24160,map__24160__$1,cities){
return (function baron$core$ui_cities_$_iter__24161(s__24162){
return (new cljs.core.LazySeq(null,((function (map__24160,map__24160__$1,cities){
return (function (){
var s__24162__$1 = s__24162;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24162__$1);
if(temp__4126__auto__){
var s__24162__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24162__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__24162__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__24164 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__24163 = (0);
while(true){
if((i__24163 < size__4935__auto__)){
var vec__24171 = cljs.core._nth.call(null,c__4934__auto__,i__24163);
var city_key = cljs.core.nth.call(null,vec__24171,(0),null);
var map__24172 = cljs.core.nth.call(null,vec__24171,(1),null);
var map__24172__$1 = ((cljs.core.seq_QMARK_.call(null,map__24172))?cljs.core.apply.call(null,cljs.core.hash_map,map__24172):map__24172);
var lat = cljs.core.get.call(null,map__24172__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__24172__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__24172__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__24173 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__24173,(0),null);
var y = cljs.core.nth.call(null,vec__24173,(1),null);
cljs.core.chunk_append.call(null,b__24164,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),((function (i__24163,vec__24173,x,y,vec__24171,city_key,map__24172,map__24172__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__24164,s__24162__$2,temp__4126__auto__,map__24160,map__24160__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(i__24163,vec__24173,x,y,vec__24171,city_key,map__24172,map__24172__$1,lat,lon,city,c__4934__auto__,size__4935__auto__,b__24164,s__24162__$2,temp__4126__auto__,map__24160,map__24160__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null));

var G__24177 = (i__24163 + (1));
i__24163 = G__24177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24164),baron$core$ui_cities_$_iter__24161.call(null,cljs.core.chunk_rest.call(null,s__24162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24164),null);
}
} else {
var vec__24174 = cljs.core.first.call(null,s__24162__$2);
var city_key = cljs.core.nth.call(null,vec__24174,(0),null);
var map__24175 = cljs.core.nth.call(null,vec__24174,(1),null);
var map__24175__$1 = ((cljs.core.seq_QMARK_.call(null,map__24175))?cljs.core.apply.call(null,cljs.core.hash_map,map__24175):map__24175);
var lat = cljs.core.get.call(null,map__24175__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__24175__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__24175__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__24176 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__24176,(0),null);
var y = cljs.core.nth.call(null,vec__24176,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),((function (vec__24176,x,y,vec__24174,city_key,map__24175,map__24175__$1,lat,lon,city,s__24162__$2,temp__4126__auto__,map__24160,map__24160__$1,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),city_key], null));
});})(vec__24176,x,y,vec__24174,city_key,map__24175,map__24175__$1,lat,lon,city,s__24162__$2,temp__4126__auto__,map__24160,map__24160__$1,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(10)], null)], null)], null),baron$core$ui_cities_$_iter__24161.call(null,cljs.core.rest.call(null,s__24162__$2)));
}
} else {
return null;
}
break;
}
});})(map__24160,map__24160__$1,cities))
,null,null));
});})(map__24160,map__24160__$1,cities))
;
return iter__4936__auto__.call(null,cljs.core.seq.call(null,cities));
});
baron.core.ui_connection = (function baron$core$ui_connection(p__24178,actions){
var map__24181 = p__24178;
var map__24181__$1 = ((cljs.core.seq_QMARK_.call(null,map__24181))?cljs.core.apply.call(null,cljs.core.hash_map,map__24181):map__24181);
var selected = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,selected))){
var vec__24182 = selected;
var a = cljs.core.nth.call(null,vec__24182,(0),null);
var b = cljs.core.nth.call(null,vec__24182,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"connection",new cljs.core.Keyword(null,"d","d",1972142424),baron.core.path.call(null,baron.core.connection.call(null,cities.call(null,a),cities.call(null,b)))], null)], null);
} else {
return null;
}
});
baron.core.ui_selected_cities = (function baron$core$ui_selected_cities(p__24183,actions){
var map__24197 = p__24183;
var map__24197__$1 = ((cljs.core.seq_QMARK_.call(null,map__24197))?cljs.core.apply.call(null,cljs.core.hash_map,map__24197):map__24197);
var selected = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var cities = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var iter__4936__auto__ = ((function (map__24197,map__24197__$1,selected,cities){
return (function baron$core$ui_selected_cities_$_iter__24198(s__24199){
return (new cljs.core.LazySeq(null,((function (map__24197,map__24197__$1,selected,cities){
return (function (){
var s__24199__$1 = s__24199;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24199__$1);
if(temp__4126__auto__){
var s__24199__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24199__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__24199__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__24201 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__24200 = (0);
while(true){
if((i__24200 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__24200);
var map__24206 = cities.call(null,city_key);
var map__24206__$1 = ((cljs.core.seq_QMARK_.call(null,map__24206))?cljs.core.apply.call(null,cljs.core.hash_map,map__24206):map__24206);
var lat = cljs.core.get.call(null,map__24206__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__24206__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__24206__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__24207 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__24207,(0),null);
var y = cljs.core.nth.call(null,vec__24207,(1),null);
cljs.core.chunk_append.call(null,b__24201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),((function (i__24200,map__24206,map__24206__$1,lat,lon,city,vec__24207,x,y,city_key,c__4934__auto__,size__4935__auto__,b__24201,s__24199__$2,temp__4126__auto__,map__24197,map__24197__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__24200,map__24206,map__24206__$1,lat,lon,city,vec__24207,x,y,city_key,c__4934__auto__,size__4935__auto__,b__24201,s__24199__$2,temp__4126__auto__,map__24197,map__24197__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null));

var G__24210 = (i__24200 + (1));
i__24200 = G__24210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24201),baron$core$ui_selected_cities_$_iter__24198.call(null,cljs.core.chunk_rest.call(null,s__24199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24201),null);
}
} else {
var city_key = cljs.core.first.call(null,s__24199__$2);
var map__24208 = cities.call(null,city_key);
var map__24208__$1 = ((cljs.core.seq_QMARK_.call(null,map__24208))?cljs.core.apply.call(null,cljs.core.hash_map,map__24208):map__24208);
var lat = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__24209 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__24209,(0),null);
var y = cljs.core.nth.call(null,vec__24209,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"city",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),((function (map__24208,map__24208__$1,lat,lon,city,vec__24209,x,y,city_key,s__24199__$2,temp__4126__auto__,map__24197,map__24197__$1,selected,cities){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__24208,map__24208__$1,lat,lon,city,vec__24209,x,y,city_key,s__24199__$2,temp__4126__auto__,map__24197,map__24197__$1,selected,cities))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected",new cljs.core.Keyword(null,"r","r",-471384190),(13)], null)], null)], null),baron$core$ui_selected_cities_$_iter__24198.call(null,cljs.core.rest.call(null,s__24199__$2)));
}
} else {
return null;
}
break;
}
});})(map__24197,map__24197__$1,selected,cities))
,null,null));
});})(map__24197,map__24197__$1,selected,cities))
;
return iter__4936__auto__.call(null,selected);
});
baron.core.ui_text = (function baron$core$ui_text(p__24211,actions){
var map__24231 = p__24211;
var map__24231__$1 = ((cljs.core.seq_QMARK_.call(null,map__24231))?cljs.core.apply.call(null,cljs.core.hash_map,map__24231):map__24231);
var payoffs = cljs.core.get.call(null,map__24231__$1,new cljs.core.Keyword(null,"payoffs","payoffs",1029670985));
var cities = cljs.core.get.call(null,map__24231__$1,new cljs.core.Keyword(null,"cities","cities",-1295356824));
var vec__24232 = cljs.core.get.call(null,map__24231__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var a = cljs.core.nth.call(null,vec__24232,(0),null);
var b = cljs.core.nth.call(null,vec__24232,(1),null);
var vec__24233 = baron.core.path.centroid(baron.core.connection.call(null,cities.call(null,a),cities.call(null,b)));
var cx = cljs.core.nth.call(null,vec__24233,(0),null);
var cy = cljs.core.nth.call(null,vec__24233,(1),null);
var centroid = vec__24233;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_((function (){var and__4170__auto__ = a;
if(cljs.core.truth_(and__4170__auto__)){
return b;
} else {
return and__4170__auto__;
}
})())?(function (){var payoff = baron.core.format_money.call(null,((1000) * cljs.core.get_in.call(null,payoffs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cx),cljs.core.str(","),cljs.core.str(cy),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),payoff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),payoff], null)], null);
})():null)),(function (){var iter__4936__auto__ = ((function (vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b){
return (function baron$core$ui_text_$_iter__24234(s__24235){
return (new cljs.core.LazySeq(null,((function (vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b){
return (function (){
var s__24235__$1 = s__24235;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24235__$1);
if(temp__4126__auto__){
var s__24235__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24235__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__24235__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__24237 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__24236 = (0);
while(true){
if((i__24236 < size__4935__auto__)){
var city_key = cljs.core._nth.call(null,c__4934__auto__,i__24236);
var map__24244 = cities.call(null,city_key);
var map__24244__$1 = ((cljs.core.seq_QMARK_.call(null,map__24244))?cljs.core.apply.call(null,cljs.core.hash_map,map__24244):map__24244);
var lat = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__24245 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__24245,(0),null);
var y = cljs.core.nth.call(null,vec__24245,(1),null);
var pos = vec__24245;
cljs.core.chunk_append.call(null,b__24237,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__24246 = baron.core.half.call(null,centroid,pos);
switch (G__24246) {
case "north":
return "translate(0,-25)";

break;
case "south":
return "translate(0,25)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (i__24236,map__24244,map__24244__$1,lat,lon,city,vec__24245,x,y,pos,city_key,c__4934__auto__,size__4935__auto__,b__24237,s__24235__$2,temp__4126__auto__,vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(i__24236,map__24244,map__24244__$1,lat,lon,city,vec__24245,x,y,pos,city_key,c__4934__auto__,size__4935__auto__,b__24237,s__24235__$2,temp__4126__auto__,vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null));

var G__24251 = (i__24236 + (1));
i__24236 = G__24251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24237),baron$core$ui_text_$_iter__24234.call(null,cljs.core.chunk_rest.call(null,s__24235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24237),null);
}
} else {
var city_key = cljs.core.first.call(null,s__24235__$2);
var map__24247 = cities.call(null,city_key);
var map__24247__$1 = ((cljs.core.seq_QMARK_.call(null,map__24247))?cljs.core.apply.call(null,cljs.core.hash_map,map__24247):map__24247);
var lat = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var city = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var vec__24248 = baron.core.projection.call(null,[lon,lat]);
var x = cljs.core.nth.call(null,vec__24248,(0),null);
var y = cljs.core.nth.call(null,vec__24248,(1),null);
var pos = vec__24248;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")"),cljs.core.str((function (){var G__24249 = baron.core.half.call(null,centroid,pos);
switch (G__24249) {
case "north":
return "translate(0,-25)";

break;
case "south":
return "translate(0,25)";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(baron.core.half.call(null,centroid,pos))].join('')));

}
})())].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (map__24247,map__24247__$1,lat,lon,city,vec__24248,x,y,pos,city_key,s__24235__$2,temp__4126__auto__,vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b){
return (function (){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deselect","deselect",1562387297),city_key], null));
});})(map__24247,map__24247__$1,lat,lon,city,vec__24248,x,y,pos,city_key,s__24235__$2,temp__4126__auto__,vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7),new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),city], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dy","dy",1719547243),(7)], null),city], null)], null),baron$core$ui_text_$_iter__24234.call(null,cljs.core.rest.call(null,s__24235__$2)));
}
} else {
return null;
}
break;
}
});})(vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b))
,null,null));
});})(vec__24233,cx,cy,centroid,map__24231,map__24231__$1,payoffs,cities,vec__24232,a,b))
;
return iter__4936__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
})());
});
baron.core.ui = (function baron$core$ui(actions){
return (function (p__24255){
var map__24256 = p__24255;
var map__24256__$1 = ((cljs.core.seq_QMARK_.call(null,map__24256))?cljs.core.apply.call(null,cljs.core.hash_map,map__24256):map__24256);
var model = map__24256__$1;
var usa = cljs.core.get.call(null,map__24256__$1,new cljs.core.Keyword(null,"usa","usa",-1656079264));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),baron.core.width,new cljs.core.Keyword(null,"height","height",1025178622),baron.core.height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"land",new cljs.core.Keyword(null,"d","d",1972142424),usa], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.95) translate(60,0)"], null),baron.core.ui_country.call(null,model,actions),baron.core.ui_cities.call(null,model,actions),baron.core.ui_connection.call(null,model,actions),baron.core.ui_selected_cities.call(null,model,actions),baron.core.ui_text.call(null,model,actions)], null)], null)], null);
});
});
baron.core.roll = (function baron$core$roll(n){
return (function (xs,x){
return cljs.core.take.call(null,n,cljs.core.cons.call(null,x,xs));
});
});
baron.core.flip = (function baron$core$flip(f){
return (function (p1__24258_SHARP_,p2__24257_SHARP_){
return f.call(null,p2__24257_SHARP_,p1__24258_SHARP_);
});
});
baron.core.step = (function baron$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e24269){if((e24269 instanceof Error)){
var e__10810__auto__ = e24269;
if((e__10810__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__24267 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__24267,new cljs.core.Keyword(null,"select","select",1147833503))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.roll.call(null,(2)),city);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24271){if((e24271 instanceof Error)){
var e__10810__auto____$1 = e24271;
if((e__10810__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__24267 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__24267,new cljs.core.Keyword(null,"deselect","deselect",1562387297))){
var city = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),baron.core.flip.call(null,cljs.core.remove),cljs.core.PersistentHashSet.fromArray([city], true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e24272){if((e24272 instanceof Error)){
var e__10810__auto____$2 = e24272;
if((e__10810__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10810__auto____$2;
}
} else {
throw e24272;

}
}} else {
throw e__10810__auto____$1;
}
} else {
throw e24271;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24270){if((e24270 instanceof Error)){
var e__10810__auto____$1 = e24270;
if((e__10810__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10810__auto____$1;
}
} else {
throw e24270;

}
}} else {
throw e__10810__auto__;
}
} else {
throw e24269;

}
}});
var c__7084__auto___24311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7084__auto___24311){
return (function (){
var f__7085__auto__ = (function (){var switch__7063__auto__ = ((function (c__7084__auto___24311){
return (function (state_24299){
var state_val_24300 = (state_24299[(1)]);
if((state_val_24300 === (4))){
var inst_24285 = (state_24299[(7)]);
var inst_24274 = (state_24299[(8)]);
var inst_24283 = (state_24299[(9)]);
var inst_24279 = (state_24299[(10)]);
var inst_24287 = (state_24299[(2)]);
var inst_24288 = cljs.core.PersistentVector.EMPTY;
var inst_24289 = [inst_24283,inst_24285,inst_24287,inst_24288];
var inst_24290 = cljs.core.PersistentHashMap.fromArrays(inst_24279,inst_24289);
var inst_24291 = vdom.elm.foldp.call(null,baron.core.step,inst_24290,inst_24274);
var inst_24292 = baron.core.ui.call(null,inst_24274);
var inst_24293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24294 = [inst_24291];
var inst_24295 = (new cljs.core.PersistentVector(null,1,(5),inst_24293,inst_24294,null));
var inst_24296 = cljs.core.async.map.call(null,inst_24292,inst_24295);
var inst_24297 = vdom.elm.render_BANG_.call(null,inst_24296,document.body);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24299__$1,inst_24297);
} else {
if((state_val_24300 === (3))){
var inst_24278 = (state_24299[(11)]);
var inst_24285 = (state_24299[(2)]);
var state_24299__$1 = (function (){var statearr_24301 = state_24299;
(statearr_24301[(7)] = inst_24285);

return statearr_24301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24299__$1,(4),inst_24278);
} else {
if((state_val_24300 === (2))){
var inst_24277 = (state_24299[(12)]);
var inst_24281 = (state_24299[(2)]);
var inst_24282 = baron.core.land_border.call(null,inst_24281);
var inst_24283 = baron.core.path.call(null,inst_24282);
var state_24299__$1 = (function (){var statearr_24302 = state_24299;
(statearr_24302[(9)] = inst_24283);

return statearr_24302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24299__$1,(3),inst_24277);
} else {
if((state_val_24300 === (1))){
var inst_24274 = (state_24299[(8)]);
var inst_24274__$1 = cljs.core.async.chan.call(null);
var inst_24275 = (function (){var actions = inst_24274__$1;
return ((function (actions,inst_24274,inst_24274__$1,state_val_24300,c__7084__auto___24311){
return (function (p1__24273_SHARP_){
return JSON.parse(p1__24273_SHARP_);
});
;})(actions,inst_24274,inst_24274__$1,state_val_24300,c__7084__auto___24311))
})();
var inst_24276 = baron.core.fetch.call(null,inst_24275,"static/data/us.json");
var inst_24277 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/cities.edn");
var inst_24278 = baron.core.fetch.call(null,cljs.reader.read_string,"static/data/payoffs.edn");
var inst_24279 = [new cljs.core.Keyword(null,"usa","usa",-1656079264),new cljs.core.Keyword(null,"cities","cities",-1295356824),new cljs.core.Keyword(null,"payoffs","payoffs",1029670985),new cljs.core.Keyword(null,"selected","selected",574897764)];
var state_24299__$1 = (function (){var statearr_24303 = state_24299;
(statearr_24303[(8)] = inst_24274__$1);

(statearr_24303[(11)] = inst_24278);

(statearr_24303[(12)] = inst_24277);

(statearr_24303[(10)] = inst_24279);

return statearr_24303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24299__$1,(2),inst_24276);
} else {
return null;
}
}
}
}
});})(c__7084__auto___24311))
;
return ((function (switch__7063__auto__,c__7084__auto___24311){
return (function() {
var baron$core$state_machine__7064__auto__ = null;
var baron$core$state_machine__7064__auto____0 = (function (){
var statearr_24307 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24307[(0)] = baron$core$state_machine__7064__auto__);

(statearr_24307[(1)] = (1));

return statearr_24307;
});
var baron$core$state_machine__7064__auto____1 = (function (state_24299){
while(true){
var ret_value__7065__auto__ = (function (){try{while(true){
var result__7066__auto__ = switch__7063__auto__.call(null,state_24299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7066__auto__;
}
break;
}
}catch (e24308){if((e24308 instanceof Object)){
var ex__7067__auto__ = e24308;
var statearr_24309_24312 = state_24299;
(statearr_24309_24312[(5)] = ex__7067__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24313 = state_24299;
state_24299 = G__24313;
continue;
} else {
return ret_value__7065__auto__;
}
break;
}
});
baron$core$state_machine__7064__auto__ = function(state_24299){
switch(arguments.length){
case 0:
return baron$core$state_machine__7064__auto____0.call(this);
case 1:
return baron$core$state_machine__7064__auto____1.call(this,state_24299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
baron$core$state_machine__7064__auto__.cljs$core$IFn$_invoke$arity$0 = baron$core$state_machine__7064__auto____0;
baron$core$state_machine__7064__auto__.cljs$core$IFn$_invoke$arity$1 = baron$core$state_machine__7064__auto____1;
return baron$core$state_machine__7064__auto__;
})()
;})(switch__7063__auto__,c__7084__auto___24311))
})();
var state__7086__auto__ = (function (){var statearr_24310 = f__7085__auto__.call(null);
(statearr_24310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7084__auto___24311);

return statearr_24310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7086__auto__);
});})(c__7084__auto___24311))
);


//# sourceMappingURL=core.js.map