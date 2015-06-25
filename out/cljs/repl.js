// Compiled by ClojureScript 0.0-3195 {}
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
var seq__11435_11447 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11436_11448 = null;
var count__11437_11449 = (0);
var i__11438_11450 = (0);
while(true){
if((i__11438_11450 < count__11437_11449)){
var f_11451 = cljs.core._nth.call(null,chunk__11436_11448,i__11438_11450);
cljs.core.println.call(null,"  ",f_11451);

var G__11452 = seq__11435_11447;
var G__11453 = chunk__11436_11448;
var G__11454 = count__11437_11449;
var G__11455 = (i__11438_11450 + (1));
seq__11435_11447 = G__11452;
chunk__11436_11448 = G__11453;
count__11437_11449 = G__11454;
i__11438_11450 = G__11455;
continue;
} else {
var temp__4126__auto___11456 = cljs.core.seq.call(null,seq__11435_11447);
if(temp__4126__auto___11456){
var seq__11435_11457__$1 = temp__4126__auto___11456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11435_11457__$1)){
var c__5608__auto___11458 = cljs.core.chunk_first.call(null,seq__11435_11457__$1);
var G__11459 = cljs.core.chunk_rest.call(null,seq__11435_11457__$1);
var G__11460 = c__5608__auto___11458;
var G__11461 = cljs.core.count.call(null,c__5608__auto___11458);
var G__11462 = (0);
seq__11435_11447 = G__11459;
chunk__11436_11448 = G__11460;
count__11437_11449 = G__11461;
i__11438_11450 = G__11462;
continue;
} else {
var f_11463 = cljs.core.first.call(null,seq__11435_11457__$1);
cljs.core.println.call(null,"  ",f_11463);

var G__11464 = cljs.core.next.call(null,seq__11435_11457__$1);
var G__11465 = null;
var G__11466 = (0);
var G__11467 = (0);
seq__11435_11447 = G__11464;
chunk__11436_11448 = G__11465;
count__11437_11449 = G__11466;
i__11438_11450 = G__11467;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4823__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4823__auto__)){
return or__4823__auto__;
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
var seq__11439 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11440 = null;
var count__11441 = (0);
var i__11442 = (0);
while(true){
if((i__11442 < count__11441)){
var vec__11443 = cljs.core._nth.call(null,chunk__11440,i__11442);
var name = cljs.core.nth.call(null,vec__11443,(0),null);
var map__11444 = cljs.core.nth.call(null,vec__11443,(1),null);
var map__11444__$1 = ((cljs.core.seq_QMARK_.call(null,map__11444))?cljs.core.apply.call(null,cljs.core.hash_map,map__11444):map__11444);
var arglists = cljs.core.get.call(null,map__11444__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__11444__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11468 = seq__11439;
var G__11469 = chunk__11440;
var G__11470 = count__11441;
var G__11471 = (i__11442 + (1));
seq__11439 = G__11468;
chunk__11440 = G__11469;
count__11441 = G__11470;
i__11442 = G__11471;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11439);
if(temp__4126__auto__){
var seq__11439__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11439__$1)){
var c__5608__auto__ = cljs.core.chunk_first.call(null,seq__11439__$1);
var G__11472 = cljs.core.chunk_rest.call(null,seq__11439__$1);
var G__11473 = c__5608__auto__;
var G__11474 = cljs.core.count.call(null,c__5608__auto__);
var G__11475 = (0);
seq__11439 = G__11472;
chunk__11440 = G__11473;
count__11441 = G__11474;
i__11442 = G__11475;
continue;
} else {
var vec__11445 = cljs.core.first.call(null,seq__11439__$1);
var name = cljs.core.nth.call(null,vec__11445,(0),null);
var map__11446 = cljs.core.nth.call(null,vec__11445,(1),null);
var map__11446__$1 = ((cljs.core.seq_QMARK_.call(null,map__11446))?cljs.core.apply.call(null,cljs.core.hash_map,map__11446):map__11446);
var arglists = cljs.core.get.call(null,map__11446__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__11446__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11476 = cljs.core.next.call(null,seq__11439__$1);
var G__11477 = null;
var G__11478 = (0);
var G__11479 = (0);
seq__11439 = G__11476;
chunk__11440 = G__11477;
count__11441 = G__11478;
i__11442 = G__11479;
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