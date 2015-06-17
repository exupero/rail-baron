// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12268_12280 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12269_12281 = null;
var count__12270_12282 = (0);
var i__12271_12283 = (0);
while(true){
if((i__12271_12283 < count__12270_12282)){
var f_12284 = cljs.core._nth.call(null,chunk__12269_12281,i__12271_12283);
cljs.core.println.call(null,"  ",f_12284);

var G__12285 = seq__12268_12280;
var G__12286 = chunk__12269_12281;
var G__12287 = count__12270_12282;
var G__12288 = (i__12271_12283 + (1));
seq__12268_12280 = G__12285;
chunk__12269_12281 = G__12286;
count__12270_12282 = G__12287;
i__12271_12283 = G__12288;
continue;
} else {
var temp__4126__auto___12289 = cljs.core.seq.call(null,seq__12268_12280);
if(temp__4126__auto___12289){
var seq__12268_12290__$1 = temp__4126__auto___12289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12268_12290__$1)){
var c__4967__auto___12291 = cljs.core.chunk_first.call(null,seq__12268_12290__$1);
var G__12292 = cljs.core.chunk_rest.call(null,seq__12268_12290__$1);
var G__12293 = c__4967__auto___12291;
var G__12294 = cljs.core.count.call(null,c__4967__auto___12291);
var G__12295 = (0);
seq__12268_12280 = G__12292;
chunk__12269_12281 = G__12293;
count__12270_12282 = G__12294;
i__12271_12283 = G__12295;
continue;
} else {
var f_12296 = cljs.core.first.call(null,seq__12268_12290__$1);
cljs.core.println.call(null,"  ",f_12296);

var G__12297 = cljs.core.next.call(null,seq__12268_12290__$1);
var G__12298 = null;
var G__12299 = (0);
var G__12300 = (0);
seq__12268_12280 = G__12297;
chunk__12269_12281 = G__12298;
count__12270_12282 = G__12299;
i__12271_12283 = G__12300;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4182__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12273 = null;
var count__12274 = (0);
var i__12275 = (0);
while(true){
if((i__12275 < count__12274)){
var vec__12276 = cljs.core._nth.call(null,chunk__12273,i__12275);
var name = cljs.core.nth.call(null,vec__12276,(0),null);
var map__12277 = cljs.core.nth.call(null,vec__12276,(1),null);
var map__12277__$1 = ((cljs.core.seq_QMARK_.call(null,map__12277))?cljs.core.apply.call(null,cljs.core.hash_map,map__12277):map__12277);
var arglists = cljs.core.get.call(null,map__12277__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12277__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12301 = seq__12272;
var G__12302 = chunk__12273;
var G__12303 = count__12274;
var G__12304 = (i__12275 + (1));
seq__12272 = G__12301;
chunk__12273 = G__12302;
count__12274 = G__12303;
i__12275 = G__12304;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12272);
if(temp__4126__auto__){
var seq__12272__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12272__$1)){
var c__4967__auto__ = cljs.core.chunk_first.call(null,seq__12272__$1);
var G__12305 = cljs.core.chunk_rest.call(null,seq__12272__$1);
var G__12306 = c__4967__auto__;
var G__12307 = cljs.core.count.call(null,c__4967__auto__);
var G__12308 = (0);
seq__12272 = G__12305;
chunk__12273 = G__12306;
count__12274 = G__12307;
i__12275 = G__12308;
continue;
} else {
var vec__12278 = cljs.core.first.call(null,seq__12272__$1);
var name = cljs.core.nth.call(null,vec__12278,(0),null);
var map__12279 = cljs.core.nth.call(null,vec__12278,(1),null);
var map__12279__$1 = ((cljs.core.seq_QMARK_.call(null,map__12279))?cljs.core.apply.call(null,cljs.core.hash_map,map__12279):map__12279);
var arglists = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12309 = cljs.core.next.call(null,seq__12272__$1);
var G__12310 = null;
var G__12311 = (0);
var G__12312 = (0);
seq__12272 = G__12309;
chunk__12273 = G__12310;
count__12274 = G__12311;
i__12275 = G__12312;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map