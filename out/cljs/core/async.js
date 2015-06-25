// Compiled by ClojureScript 0.0-3195 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t14029 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14029 = (function (f,fn_handler,meta14030){
this.f = f;
this.fn_handler = fn_handler;
this.meta14030 = meta14030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14031){
var self__ = this;
var _14031__$1 = this;
return self__.meta14030;
});

cljs.core.async.t14029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14031,meta14030__$1){
var self__ = this;
var _14031__$1 = this;
return (new cljs.core.async.t14029(self__.f,self__.fn_handler,meta14030__$1));
});

cljs.core.async.t14029.cljs$lang$type = true;

cljs.core.async.t14029.cljs$lang$ctorStr = "cljs.core.async/t14029";

cljs.core.async.t14029.cljs$lang$ctorPrWriter = (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t14029");
});

cljs.core.async.__GT_t14029 = (function cljs$core$async$fn_handler_$___GT_t14029(f__$1,fn_handler__$1,meta14030){
return (new cljs.core.async.t14029(f__$1,fn_handler__$1,meta14030));
});

}

return (new cljs.core.async.t14029(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__14033 = buff;
if(G__14033){
var bit__5497__auto__ = null;
if(cljs.core.truth_((function (){var or__4823__auto__ = bit__5497__auto__;
if(cljs.core.truth_(or__4823__auto__)){
return or__4823__auto__;
} else {
return G__14033.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14033.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14033);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14033);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__14035 = arguments.length;
switch (G__14035) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__14038 = arguments.length;
switch (G__14038) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14040 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14040);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14040,ret){
return (function (){
return fn1.call(null,val_14040);
});})(val_14040,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__14042 = arguments.length;
switch (G__14042) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5708__auto___14044 = n;
var x_14045 = (0);
while(true){
if((x_14045 < n__5708__auto___14044)){
(a[x_14045] = (0));

var G__14046 = (x_14045 + (1));
x_14045 = G__14046;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14047 = (i + (1));
i = G__14047;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14051 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14051 = (function (flag,alt_flag,meta14052){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14052 = meta14052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14051.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14053){
var self__ = this;
var _14053__$1 = this;
return self__.meta14052;
});})(flag))
;

cljs.core.async.t14051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14053,meta14052__$1){
var self__ = this;
var _14053__$1 = this;
return (new cljs.core.async.t14051(self__.flag,self__.alt_flag,meta14052__$1));
});})(flag))
;

cljs.core.async.t14051.cljs$lang$type = true;

cljs.core.async.t14051.cljs$lang$ctorStr = "cljs.core.async/t14051";

cljs.core.async.t14051.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t14051");
});})(flag))
;

cljs.core.async.__GT_t14051 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t14051(flag__$1,alt_flag__$1,meta14052){
return (new cljs.core.async.t14051(flag__$1,alt_flag__$1,meta14052));
});})(flag))
;

}

return (new cljs.core.async.t14051(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t14057 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14057 = (function (cb,flag,alt_handler,meta14058){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14058 = meta14058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14057.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14059){
var self__ = this;
var _14059__$1 = this;
return self__.meta14058;
});

cljs.core.async.t14057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14059,meta14058__$1){
var self__ = this;
var _14059__$1 = this;
return (new cljs.core.async.t14057(self__.cb,self__.flag,self__.alt_handler,meta14058__$1));
});

cljs.core.async.t14057.cljs$lang$type = true;

cljs.core.async.t14057.cljs$lang$ctorStr = "cljs.core.async/t14057";

cljs.core.async.t14057.cljs$lang$ctorPrWriter = (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t14057");
});

cljs.core.async.__GT_t14057 = (function cljs$core$async$alt_handler_$___GT_t14057(cb__$1,flag__$1,alt_handler__$1,meta14058){
return (new cljs.core.async.t14057(cb__$1,flag__$1,alt_handler__$1,meta14058));
});

}

return (new cljs.core.async.t14057(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14060_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14060_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14061_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14061_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4823__auto__ = wport;
if(cljs.core.truth_(or__4823__auto__)){
return or__4823__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14062 = (i + (1));
i = G__14062;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4823__auto__ = ret;
if(cljs.core.truth_(or__4823__auto__)){
return or__4823__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4811__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4811__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4811__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5863__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5863__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14065){
var map__14066 = p__14065;
var map__14066__$1 = ((cljs.core.seq_QMARK_.call(null,map__14066))?cljs.core.apply.call(null,cljs.core.hash_map,map__14066):map__14066);
var opts = map__14066__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14063){
var G__14064 = cljs.core.first.call(null,seq14063);
var seq14063__$1 = cljs.core.next.call(null,seq14063);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14064,seq14063__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__14068 = arguments.length;
switch (G__14068) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7189__auto___14117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___14117){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___14117){
return (function (state_14092){
var state_val_14093 = (state_14092[(1)]);
if((state_val_14093 === (7))){
var inst_14088 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14094_14118 = state_14092__$1;
(statearr_14094_14118[(2)] = inst_14088);

(statearr_14094_14118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (1))){
var state_14092__$1 = state_14092;
var statearr_14095_14119 = state_14092__$1;
(statearr_14095_14119[(2)] = null);

(statearr_14095_14119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (4))){
var inst_14071 = (state_14092[(7)]);
var inst_14071__$1 = (state_14092[(2)]);
var inst_14072 = (inst_14071__$1 == null);
var state_14092__$1 = (function (){var statearr_14096 = state_14092;
(statearr_14096[(7)] = inst_14071__$1);

return statearr_14096;
})();
if(cljs.core.truth_(inst_14072)){
var statearr_14097_14120 = state_14092__$1;
(statearr_14097_14120[(1)] = (5));

} else {
var statearr_14098_14121 = state_14092__$1;
(statearr_14098_14121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (13))){
var state_14092__$1 = state_14092;
var statearr_14099_14122 = state_14092__$1;
(statearr_14099_14122[(2)] = null);

(statearr_14099_14122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (6))){
var inst_14071 = (state_14092[(7)]);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14092__$1,(11),to,inst_14071);
} else {
if((state_val_14093 === (3))){
var inst_14090 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14092__$1,inst_14090);
} else {
if((state_val_14093 === (12))){
var state_14092__$1 = state_14092;
var statearr_14100_14123 = state_14092__$1;
(statearr_14100_14123[(2)] = null);

(statearr_14100_14123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (2))){
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14092__$1,(4),from);
} else {
if((state_val_14093 === (11))){
var inst_14081 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
if(cljs.core.truth_(inst_14081)){
var statearr_14101_14124 = state_14092__$1;
(statearr_14101_14124[(1)] = (12));

} else {
var statearr_14102_14125 = state_14092__$1;
(statearr_14102_14125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (9))){
var state_14092__$1 = state_14092;
var statearr_14103_14126 = state_14092__$1;
(statearr_14103_14126[(2)] = null);

(statearr_14103_14126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (5))){
var state_14092__$1 = state_14092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14104_14127 = state_14092__$1;
(statearr_14104_14127[(1)] = (8));

} else {
var statearr_14105_14128 = state_14092__$1;
(statearr_14105_14128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (14))){
var inst_14086 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14106_14129 = state_14092__$1;
(statearr_14106_14129[(2)] = inst_14086);

(statearr_14106_14129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (10))){
var inst_14078 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14107_14130 = state_14092__$1;
(statearr_14107_14130[(2)] = inst_14078);

(statearr_14107_14130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (8))){
var inst_14075 = cljs.core.async.close_BANG_.call(null,to);
var state_14092__$1 = state_14092;
var statearr_14108_14131 = state_14092__$1;
(statearr_14108_14131[(2)] = inst_14075);

(statearr_14108_14131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___14117))
;
return ((function (switch__7127__auto__,c__7189__auto___14117){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_14112 = [null,null,null,null,null,null,null,null];
(statearr_14112[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_14112[(1)] = (1));

return statearr_14112;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_14092){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14113){if((e14113 instanceof Object)){
var ex__7131__auto__ = e14113;
var statearr_14114_14132 = state_14092;
(statearr_14114_14132[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14133 = state_14092;
state_14092 = G__14133;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_14092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_14092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___14117))
})();
var state__7191__auto__ = (function (){var statearr_14115 = f__7190__auto__.call(null);
(statearr_14115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___14117);

return statearr_14115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___14117))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14317){
var vec__14318 = p__14317;
var v = cljs.core.nth.call(null,vec__14318,(0),null);
var p = cljs.core.nth.call(null,vec__14318,(1),null);
var job = vec__14318;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7189__auto___14500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___14500,res,vec__14318,v,p,job,jobs,results){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___14500,res,vec__14318,v,p,job,jobs,results){
return (function (state_14323){
var state_val_14324 = (state_14323[(1)]);
if((state_val_14324 === (2))){
var inst_14320 = (state_14323[(2)]);
var inst_14321 = cljs.core.async.close_BANG_.call(null,res);
var state_14323__$1 = (function (){var statearr_14325 = state_14323;
(statearr_14325[(7)] = inst_14320);

return statearr_14325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14323__$1,inst_14321);
} else {
if((state_val_14324 === (1))){
var state_14323__$1 = state_14323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14323__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7189__auto___14500,res,vec__14318,v,p,job,jobs,results))
;
return ((function (switch__7127__auto__,c__7189__auto___14500,res,vec__14318,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0 = (function (){
var statearr_14329 = [null,null,null,null,null,null,null,null];
(statearr_14329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__);

(statearr_14329[(1)] = (1));

return statearr_14329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1 = (function (state_14323){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14330){if((e14330 instanceof Object)){
var ex__7131__auto__ = e14330;
var statearr_14331_14501 = state_14323;
(statearr_14331_14501[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14502 = state_14323;
state_14323 = G__14502;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = function(state_14323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1.call(this,state_14323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___14500,res,vec__14318,v,p,job,jobs,results))
})();
var state__7191__auto__ = (function (){var statearr_14332 = f__7190__auto__.call(null);
(statearr_14332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___14500);

return statearr_14332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___14500,res,vec__14318,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14333){
var vec__14334 = p__14333;
var v = cljs.core.nth.call(null,vec__14334,(0),null);
var p = cljs.core.nth.call(null,vec__14334,(1),null);
var job = vec__14334;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5708__auto___14503 = n;
var __14504 = (0);
while(true){
if((__14504 < n__5708__auto___14503)){
var G__14335_14505 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14335_14505) {
case "async":
var c__7189__auto___14507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14504,c__7189__auto___14507,G__14335_14505,n__5708__auto___14503,jobs,results,process,async){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (__14504,c__7189__auto___14507,G__14335_14505,n__5708__auto___14503,jobs,results,process,async){
return (function (state_14348){
var state_val_14349 = (state_14348[(1)]);
if((state_val_14349 === (7))){
var inst_14344 = (state_14348[(2)]);
var state_14348__$1 = state_14348;
var statearr_14350_14508 = state_14348__$1;
(statearr_14350_14508[(2)] = inst_14344);

(statearr_14350_14508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (6))){
var state_14348__$1 = state_14348;
var statearr_14351_14509 = state_14348__$1;
(statearr_14351_14509[(2)] = null);

(statearr_14351_14509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (5))){
var state_14348__$1 = state_14348;
var statearr_14352_14510 = state_14348__$1;
(statearr_14352_14510[(2)] = null);

(statearr_14352_14510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (4))){
var inst_14338 = (state_14348[(2)]);
var inst_14339 = async.call(null,inst_14338);
var state_14348__$1 = state_14348;
if(cljs.core.truth_(inst_14339)){
var statearr_14353_14511 = state_14348__$1;
(statearr_14353_14511[(1)] = (5));

} else {
var statearr_14354_14512 = state_14348__$1;
(statearr_14354_14512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14349 === (3))){
var inst_14346 = (state_14348[(2)]);
var state_14348__$1 = state_14348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14348__$1,inst_14346);
} else {
if((state_val_14349 === (2))){
var state_14348__$1 = state_14348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14348__$1,(4),jobs);
} else {
if((state_val_14349 === (1))){
var state_14348__$1 = state_14348;
var statearr_14355_14513 = state_14348__$1;
(statearr_14355_14513[(2)] = null);

(statearr_14355_14513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14504,c__7189__auto___14507,G__14335_14505,n__5708__auto___14503,jobs,results,process,async))
;
return ((function (__14504,switch__7127__auto__,c__7189__auto___14507,G__14335_14505,n__5708__auto___14503,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0 = (function (){
var statearr_14359 = [null,null,null,null,null,null,null];
(statearr_14359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__);

(statearr_14359[(1)] = (1));

return statearr_14359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1 = (function (state_14348){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14360){if((e14360 instanceof Object)){
var ex__7131__auto__ = e14360;
var statearr_14361_14514 = state_14348;
(statearr_14361_14514[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14515 = state_14348;
state_14348 = G__14515;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = function(state_14348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1.call(this,state_14348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__;
})()
;})(__14504,switch__7127__auto__,c__7189__auto___14507,G__14335_14505,n__5708__auto___14503,jobs,results,process,async))
})();
var state__7191__auto__ = (function (){var statearr_14362 = f__7190__auto__.call(null);
(statearr_14362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___14507);

return statearr_14362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(__14504,c__7189__auto___14507,G__14335_14505,n__5708__auto___14503,jobs,results,process,async))
);


break;
case "compute":
var c__7189__auto___14516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14504,c__7189__auto___14516,G__14335_14505,n__5708__auto___14503,jobs,results,process,async){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (__14504,c__7189__auto___14516,G__14335_14505,n__5708__auto___14503,jobs,results,process,async){
return (function (state_14375){
var state_val_14376 = (state_14375[(1)]);
if((state_val_14376 === (7))){
var inst_14371 = (state_14375[(2)]);
var state_14375__$1 = state_14375;
var statearr_14377_14517 = state_14375__$1;
(statearr_14377_14517[(2)] = inst_14371);

(statearr_14377_14517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (6))){
var state_14375__$1 = state_14375;
var statearr_14378_14518 = state_14375__$1;
(statearr_14378_14518[(2)] = null);

(statearr_14378_14518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (5))){
var state_14375__$1 = state_14375;
var statearr_14379_14519 = state_14375__$1;
(statearr_14379_14519[(2)] = null);

(statearr_14379_14519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (4))){
var inst_14365 = (state_14375[(2)]);
var inst_14366 = process.call(null,inst_14365);
var state_14375__$1 = state_14375;
if(cljs.core.truth_(inst_14366)){
var statearr_14380_14520 = state_14375__$1;
(statearr_14380_14520[(1)] = (5));

} else {
var statearr_14381_14521 = state_14375__$1;
(statearr_14381_14521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14376 === (3))){
var inst_14373 = (state_14375[(2)]);
var state_14375__$1 = state_14375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14375__$1,inst_14373);
} else {
if((state_val_14376 === (2))){
var state_14375__$1 = state_14375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14375__$1,(4),jobs);
} else {
if((state_val_14376 === (1))){
var state_14375__$1 = state_14375;
var statearr_14382_14522 = state_14375__$1;
(statearr_14382_14522[(2)] = null);

(statearr_14382_14522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14504,c__7189__auto___14516,G__14335_14505,n__5708__auto___14503,jobs,results,process,async))
;
return ((function (__14504,switch__7127__auto__,c__7189__auto___14516,G__14335_14505,n__5708__auto___14503,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0 = (function (){
var statearr_14386 = [null,null,null,null,null,null,null];
(statearr_14386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__);

(statearr_14386[(1)] = (1));

return statearr_14386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1 = (function (state_14375){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14387){if((e14387 instanceof Object)){
var ex__7131__auto__ = e14387;
var statearr_14388_14523 = state_14375;
(statearr_14388_14523[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14524 = state_14375;
state_14375 = G__14524;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = function(state_14375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1.call(this,state_14375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__;
})()
;})(__14504,switch__7127__auto__,c__7189__auto___14516,G__14335_14505,n__5708__auto___14503,jobs,results,process,async))
})();
var state__7191__auto__ = (function (){var statearr_14389 = f__7190__auto__.call(null);
(statearr_14389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___14516);

return statearr_14389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(__14504,c__7189__auto___14516,G__14335_14505,n__5708__auto___14503,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14525 = (__14504 + (1));
__14504 = G__14525;
continue;
} else {
}
break;
}

var c__7189__auto___14526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___14526,jobs,results,process,async){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___14526,jobs,results,process,async){
return (function (state_14411){
var state_val_14412 = (state_14411[(1)]);
if((state_val_14412 === (9))){
var inst_14404 = (state_14411[(2)]);
var state_14411__$1 = (function (){var statearr_14413 = state_14411;
(statearr_14413[(7)] = inst_14404);

return statearr_14413;
})();
var statearr_14414_14527 = state_14411__$1;
(statearr_14414_14527[(2)] = null);

(statearr_14414_14527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (8))){
var inst_14397 = (state_14411[(8)]);
var inst_14402 = (state_14411[(2)]);
var state_14411__$1 = (function (){var statearr_14415 = state_14411;
(statearr_14415[(9)] = inst_14402);

return statearr_14415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14411__$1,(9),results,inst_14397);
} else {
if((state_val_14412 === (7))){
var inst_14407 = (state_14411[(2)]);
var state_14411__$1 = state_14411;
var statearr_14416_14528 = state_14411__$1;
(statearr_14416_14528[(2)] = inst_14407);

(statearr_14416_14528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (6))){
var inst_14392 = (state_14411[(10)]);
var inst_14397 = (state_14411[(8)]);
var inst_14397__$1 = cljs.core.async.chan.call(null,(1));
var inst_14398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14399 = [inst_14392,inst_14397__$1];
var inst_14400 = (new cljs.core.PersistentVector(null,2,(5),inst_14398,inst_14399,null));
var state_14411__$1 = (function (){var statearr_14417 = state_14411;
(statearr_14417[(8)] = inst_14397__$1);

return statearr_14417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14411__$1,(8),jobs,inst_14400);
} else {
if((state_val_14412 === (5))){
var inst_14395 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14411__$1 = state_14411;
var statearr_14418_14529 = state_14411__$1;
(statearr_14418_14529[(2)] = inst_14395);

(statearr_14418_14529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (4))){
var inst_14392 = (state_14411[(10)]);
var inst_14392__$1 = (state_14411[(2)]);
var inst_14393 = (inst_14392__$1 == null);
var state_14411__$1 = (function (){var statearr_14419 = state_14411;
(statearr_14419[(10)] = inst_14392__$1);

return statearr_14419;
})();
if(cljs.core.truth_(inst_14393)){
var statearr_14420_14530 = state_14411__$1;
(statearr_14420_14530[(1)] = (5));

} else {
var statearr_14421_14531 = state_14411__$1;
(statearr_14421_14531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (3))){
var inst_14409 = (state_14411[(2)]);
var state_14411__$1 = state_14411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14411__$1,inst_14409);
} else {
if((state_val_14412 === (2))){
var state_14411__$1 = state_14411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14411__$1,(4),from);
} else {
if((state_val_14412 === (1))){
var state_14411__$1 = state_14411;
var statearr_14422_14532 = state_14411__$1;
(statearr_14422_14532[(2)] = null);

(statearr_14422_14532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___14526,jobs,results,process,async))
;
return ((function (switch__7127__auto__,c__7189__auto___14526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0 = (function (){
var statearr_14426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__);

(statearr_14426[(1)] = (1));

return statearr_14426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1 = (function (state_14411){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14427){if((e14427 instanceof Object)){
var ex__7131__auto__ = e14427;
var statearr_14428_14533 = state_14411;
(statearr_14428_14533[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14534 = state_14411;
state_14411 = G__14534;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = function(state_14411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1.call(this,state_14411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___14526,jobs,results,process,async))
})();
var state__7191__auto__ = (function (){var statearr_14429 = f__7190__auto__.call(null);
(statearr_14429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___14526);

return statearr_14429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___14526,jobs,results,process,async))
);


var c__7189__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto__,jobs,results,process,async){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto__,jobs,results,process,async){
return (function (state_14467){
var state_val_14468 = (state_14467[(1)]);
if((state_val_14468 === (7))){
var inst_14463 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14469_14535 = state_14467__$1;
(statearr_14469_14535[(2)] = inst_14463);

(statearr_14469_14535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (20))){
var state_14467__$1 = state_14467;
var statearr_14470_14536 = state_14467__$1;
(statearr_14470_14536[(2)] = null);

(statearr_14470_14536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (1))){
var state_14467__$1 = state_14467;
var statearr_14471_14537 = state_14467__$1;
(statearr_14471_14537[(2)] = null);

(statearr_14471_14537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (4))){
var inst_14432 = (state_14467[(7)]);
var inst_14432__$1 = (state_14467[(2)]);
var inst_14433 = (inst_14432__$1 == null);
var state_14467__$1 = (function (){var statearr_14472 = state_14467;
(statearr_14472[(7)] = inst_14432__$1);

return statearr_14472;
})();
if(cljs.core.truth_(inst_14433)){
var statearr_14473_14538 = state_14467__$1;
(statearr_14473_14538[(1)] = (5));

} else {
var statearr_14474_14539 = state_14467__$1;
(statearr_14474_14539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (15))){
var inst_14445 = (state_14467[(8)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14467__$1,(18),to,inst_14445);
} else {
if((state_val_14468 === (21))){
var inst_14458 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14475_14540 = state_14467__$1;
(statearr_14475_14540[(2)] = inst_14458);

(statearr_14475_14540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (13))){
var inst_14460 = (state_14467[(2)]);
var state_14467__$1 = (function (){var statearr_14476 = state_14467;
(statearr_14476[(9)] = inst_14460);

return statearr_14476;
})();
var statearr_14477_14541 = state_14467__$1;
(statearr_14477_14541[(2)] = null);

(statearr_14477_14541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (6))){
var inst_14432 = (state_14467[(7)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14467__$1,(11),inst_14432);
} else {
if((state_val_14468 === (17))){
var inst_14453 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
if(cljs.core.truth_(inst_14453)){
var statearr_14478_14542 = state_14467__$1;
(statearr_14478_14542[(1)] = (19));

} else {
var statearr_14479_14543 = state_14467__$1;
(statearr_14479_14543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (3))){
var inst_14465 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14467__$1,inst_14465);
} else {
if((state_val_14468 === (12))){
var inst_14442 = (state_14467[(10)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14467__$1,(14),inst_14442);
} else {
if((state_val_14468 === (2))){
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14467__$1,(4),results);
} else {
if((state_val_14468 === (19))){
var state_14467__$1 = state_14467;
var statearr_14480_14544 = state_14467__$1;
(statearr_14480_14544[(2)] = null);

(statearr_14480_14544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (11))){
var inst_14442 = (state_14467[(2)]);
var state_14467__$1 = (function (){var statearr_14481 = state_14467;
(statearr_14481[(10)] = inst_14442);

return statearr_14481;
})();
var statearr_14482_14545 = state_14467__$1;
(statearr_14482_14545[(2)] = null);

(statearr_14482_14545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (9))){
var state_14467__$1 = state_14467;
var statearr_14483_14546 = state_14467__$1;
(statearr_14483_14546[(2)] = null);

(statearr_14483_14546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (5))){
var state_14467__$1 = state_14467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14484_14547 = state_14467__$1;
(statearr_14484_14547[(1)] = (8));

} else {
var statearr_14485_14548 = state_14467__$1;
(statearr_14485_14548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (14))){
var inst_14445 = (state_14467[(8)]);
var inst_14447 = (state_14467[(11)]);
var inst_14445__$1 = (state_14467[(2)]);
var inst_14446 = (inst_14445__$1 == null);
var inst_14447__$1 = cljs.core.not.call(null,inst_14446);
var state_14467__$1 = (function (){var statearr_14486 = state_14467;
(statearr_14486[(8)] = inst_14445__$1);

(statearr_14486[(11)] = inst_14447__$1);

return statearr_14486;
})();
if(inst_14447__$1){
var statearr_14487_14549 = state_14467__$1;
(statearr_14487_14549[(1)] = (15));

} else {
var statearr_14488_14550 = state_14467__$1;
(statearr_14488_14550[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (16))){
var inst_14447 = (state_14467[(11)]);
var state_14467__$1 = state_14467;
var statearr_14489_14551 = state_14467__$1;
(statearr_14489_14551[(2)] = inst_14447);

(statearr_14489_14551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (10))){
var inst_14439 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14490_14552 = state_14467__$1;
(statearr_14490_14552[(2)] = inst_14439);

(statearr_14490_14552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (18))){
var inst_14450 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14491_14553 = state_14467__$1;
(statearr_14491_14553[(2)] = inst_14450);

(statearr_14491_14553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (8))){
var inst_14436 = cljs.core.async.close_BANG_.call(null,to);
var state_14467__$1 = state_14467;
var statearr_14492_14554 = state_14467__$1;
(statearr_14492_14554[(2)] = inst_14436);

(statearr_14492_14554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto__,jobs,results,process,async))
;
return ((function (switch__7127__auto__,c__7189__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0 = (function (){
var statearr_14496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__);

(statearr_14496[(1)] = (1));

return statearr_14496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1 = (function (state_14467){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14497){if((e14497 instanceof Object)){
var ex__7131__auto__ = e14497;
var statearr_14498_14555 = state_14467;
(statearr_14498_14555[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14556 = state_14467;
state_14467 = G__14556;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__ = function(state_14467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1.call(this,state_14467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto__,jobs,results,process,async))
})();
var state__7191__auto__ = (function (){var statearr_14499 = f__7190__auto__.call(null);
(statearr_14499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto__);

return statearr_14499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto__,jobs,results,process,async))
);

return c__7189__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__14558 = arguments.length;
switch (G__14558) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__14561 = arguments.length;
switch (G__14561) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__14564 = arguments.length;
switch (G__14564) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7189__auto___14616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___14616,tc,fc){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___14616,tc,fc){
return (function (state_14590){
var state_val_14591 = (state_14590[(1)]);
if((state_val_14591 === (7))){
var inst_14586 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14592_14617 = state_14590__$1;
(statearr_14592_14617[(2)] = inst_14586);

(statearr_14592_14617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (1))){
var state_14590__$1 = state_14590;
var statearr_14593_14618 = state_14590__$1;
(statearr_14593_14618[(2)] = null);

(statearr_14593_14618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (4))){
var inst_14567 = (state_14590[(7)]);
var inst_14567__$1 = (state_14590[(2)]);
var inst_14568 = (inst_14567__$1 == null);
var state_14590__$1 = (function (){var statearr_14594 = state_14590;
(statearr_14594[(7)] = inst_14567__$1);

return statearr_14594;
})();
if(cljs.core.truth_(inst_14568)){
var statearr_14595_14619 = state_14590__$1;
(statearr_14595_14619[(1)] = (5));

} else {
var statearr_14596_14620 = state_14590__$1;
(statearr_14596_14620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (13))){
var state_14590__$1 = state_14590;
var statearr_14597_14621 = state_14590__$1;
(statearr_14597_14621[(2)] = null);

(statearr_14597_14621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (6))){
var inst_14567 = (state_14590[(7)]);
var inst_14573 = p.call(null,inst_14567);
var state_14590__$1 = state_14590;
if(cljs.core.truth_(inst_14573)){
var statearr_14598_14622 = state_14590__$1;
(statearr_14598_14622[(1)] = (9));

} else {
var statearr_14599_14623 = state_14590__$1;
(statearr_14599_14623[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (3))){
var inst_14588 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14590__$1,inst_14588);
} else {
if((state_val_14591 === (12))){
var state_14590__$1 = state_14590;
var statearr_14600_14624 = state_14590__$1;
(statearr_14600_14624[(2)] = null);

(statearr_14600_14624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (2))){
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14590__$1,(4),ch);
} else {
if((state_val_14591 === (11))){
var inst_14567 = (state_14590[(7)]);
var inst_14577 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14590__$1,(8),inst_14577,inst_14567);
} else {
if((state_val_14591 === (9))){
var state_14590__$1 = state_14590;
var statearr_14601_14625 = state_14590__$1;
(statearr_14601_14625[(2)] = tc);

(statearr_14601_14625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (5))){
var inst_14570 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14571 = cljs.core.async.close_BANG_.call(null,fc);
var state_14590__$1 = (function (){var statearr_14602 = state_14590;
(statearr_14602[(8)] = inst_14570);

return statearr_14602;
})();
var statearr_14603_14626 = state_14590__$1;
(statearr_14603_14626[(2)] = inst_14571);

(statearr_14603_14626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (14))){
var inst_14584 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14604_14627 = state_14590__$1;
(statearr_14604_14627[(2)] = inst_14584);

(statearr_14604_14627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (10))){
var state_14590__$1 = state_14590;
var statearr_14605_14628 = state_14590__$1;
(statearr_14605_14628[(2)] = fc);

(statearr_14605_14628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (8))){
var inst_14579 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
if(cljs.core.truth_(inst_14579)){
var statearr_14606_14629 = state_14590__$1;
(statearr_14606_14629[(1)] = (12));

} else {
var statearr_14607_14630 = state_14590__$1;
(statearr_14607_14630[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___14616,tc,fc))
;
return ((function (switch__7127__auto__,c__7189__auto___14616,tc,fc){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_14611 = [null,null,null,null,null,null,null,null,null];
(statearr_14611[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_14611[(1)] = (1));

return statearr_14611;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_14590){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14612){if((e14612 instanceof Object)){
var ex__7131__auto__ = e14612;
var statearr_14613_14631 = state_14590;
(statearr_14613_14631[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14632 = state_14590;
state_14590 = G__14632;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___14616,tc,fc))
})();
var state__7191__auto__ = (function (){var statearr_14614 = f__7190__auto__.call(null);
(statearr_14614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___14616);

return statearr_14614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___14616,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7189__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto__){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto__){
return (function (state_14679){
var state_val_14680 = (state_14679[(1)]);
if((state_val_14680 === (7))){
var inst_14675 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
var statearr_14681_14697 = state_14679__$1;
(statearr_14681_14697[(2)] = inst_14675);

(statearr_14681_14697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (6))){
var inst_14668 = (state_14679[(7)]);
var inst_14665 = (state_14679[(8)]);
var inst_14672 = f.call(null,inst_14665,inst_14668);
var inst_14665__$1 = inst_14672;
var state_14679__$1 = (function (){var statearr_14682 = state_14679;
(statearr_14682[(8)] = inst_14665__$1);

return statearr_14682;
})();
var statearr_14683_14698 = state_14679__$1;
(statearr_14683_14698[(2)] = null);

(statearr_14683_14698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (5))){
var inst_14665 = (state_14679[(8)]);
var state_14679__$1 = state_14679;
var statearr_14684_14699 = state_14679__$1;
(statearr_14684_14699[(2)] = inst_14665);

(statearr_14684_14699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (4))){
var inst_14668 = (state_14679[(7)]);
var inst_14668__$1 = (state_14679[(2)]);
var inst_14669 = (inst_14668__$1 == null);
var state_14679__$1 = (function (){var statearr_14685 = state_14679;
(statearr_14685[(7)] = inst_14668__$1);

return statearr_14685;
})();
if(cljs.core.truth_(inst_14669)){
var statearr_14686_14700 = state_14679__$1;
(statearr_14686_14700[(1)] = (5));

} else {
var statearr_14687_14701 = state_14679__$1;
(statearr_14687_14701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14680 === (3))){
var inst_14677 = (state_14679[(2)]);
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14679__$1,inst_14677);
} else {
if((state_val_14680 === (2))){
var state_14679__$1 = state_14679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14679__$1,(4),ch);
} else {
if((state_val_14680 === (1))){
var inst_14665 = init;
var state_14679__$1 = (function (){var statearr_14688 = state_14679;
(statearr_14688[(8)] = inst_14665);

return statearr_14688;
})();
var statearr_14689_14702 = state_14679__$1;
(statearr_14689_14702[(2)] = null);

(statearr_14689_14702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7189__auto__))
;
return ((function (switch__7127__auto__,c__7189__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7128__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7128__auto____0 = (function (){
var statearr_14693 = [null,null,null,null,null,null,null,null,null];
(statearr_14693[(0)] = cljs$core$async$reduce_$_state_machine__7128__auto__);

(statearr_14693[(1)] = (1));

return statearr_14693;
});
var cljs$core$async$reduce_$_state_machine__7128__auto____1 = (function (state_14679){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14694){if((e14694 instanceof Object)){
var ex__7131__auto__ = e14694;
var statearr_14695_14703 = state_14679;
(statearr_14695_14703[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14704 = state_14679;
state_14679 = G__14704;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7128__auto__ = function(state_14679){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7128__auto____1.call(this,state_14679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7128__auto____0;
cljs$core$async$reduce_$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7128__auto____1;
return cljs$core$async$reduce_$_state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto__))
})();
var state__7191__auto__ = (function (){var statearr_14696 = f__7190__auto__.call(null);
(statearr_14696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto__);

return statearr_14696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto__))
);

return c__7189__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__14706 = arguments.length;
switch (G__14706) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7189__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto__){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto__){
return (function (state_14731){
var state_val_14732 = (state_14731[(1)]);
if((state_val_14732 === (7))){
var inst_14713 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14733_14757 = state_14731__$1;
(statearr_14733_14757[(2)] = inst_14713);

(statearr_14733_14757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (1))){
var inst_14707 = cljs.core.seq.call(null,coll);
var inst_14708 = inst_14707;
var state_14731__$1 = (function (){var statearr_14734 = state_14731;
(statearr_14734[(7)] = inst_14708);

return statearr_14734;
})();
var statearr_14735_14758 = state_14731__$1;
(statearr_14735_14758[(2)] = null);

(statearr_14735_14758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (4))){
var inst_14708 = (state_14731[(7)]);
var inst_14711 = cljs.core.first.call(null,inst_14708);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14731__$1,(7),ch,inst_14711);
} else {
if((state_val_14732 === (13))){
var inst_14725 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14736_14759 = state_14731__$1;
(statearr_14736_14759[(2)] = inst_14725);

(statearr_14736_14759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (6))){
var inst_14716 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
if(cljs.core.truth_(inst_14716)){
var statearr_14737_14760 = state_14731__$1;
(statearr_14737_14760[(1)] = (8));

} else {
var statearr_14738_14761 = state_14731__$1;
(statearr_14738_14761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (3))){
var inst_14729 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14731__$1,inst_14729);
} else {
if((state_val_14732 === (12))){
var state_14731__$1 = state_14731;
var statearr_14739_14762 = state_14731__$1;
(statearr_14739_14762[(2)] = null);

(statearr_14739_14762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (2))){
var inst_14708 = (state_14731[(7)]);
var state_14731__$1 = state_14731;
if(cljs.core.truth_(inst_14708)){
var statearr_14740_14763 = state_14731__$1;
(statearr_14740_14763[(1)] = (4));

} else {
var statearr_14741_14764 = state_14731__$1;
(statearr_14741_14764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (11))){
var inst_14722 = cljs.core.async.close_BANG_.call(null,ch);
var state_14731__$1 = state_14731;
var statearr_14742_14765 = state_14731__$1;
(statearr_14742_14765[(2)] = inst_14722);

(statearr_14742_14765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (9))){
var state_14731__$1 = state_14731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14743_14766 = state_14731__$1;
(statearr_14743_14766[(1)] = (11));

} else {
var statearr_14744_14767 = state_14731__$1;
(statearr_14744_14767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (5))){
var inst_14708 = (state_14731[(7)]);
var state_14731__$1 = state_14731;
var statearr_14745_14768 = state_14731__$1;
(statearr_14745_14768[(2)] = inst_14708);

(statearr_14745_14768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (10))){
var inst_14727 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14746_14769 = state_14731__$1;
(statearr_14746_14769[(2)] = inst_14727);

(statearr_14746_14769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (8))){
var inst_14708 = (state_14731[(7)]);
var inst_14718 = cljs.core.next.call(null,inst_14708);
var inst_14708__$1 = inst_14718;
var state_14731__$1 = (function (){var statearr_14747 = state_14731;
(statearr_14747[(7)] = inst_14708__$1);

return statearr_14747;
})();
var statearr_14748_14770 = state_14731__$1;
(statearr_14748_14770[(2)] = null);

(statearr_14748_14770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto__))
;
return ((function (switch__7127__auto__,c__7189__auto__){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_14752 = [null,null,null,null,null,null,null,null];
(statearr_14752[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_14752[(1)] = (1));

return statearr_14752;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_14731){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_14731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e14753){if((e14753 instanceof Object)){
var ex__7131__auto__ = e14753;
var statearr_14754_14771 = state_14731;
(statearr_14754_14771[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14772 = state_14731;
state_14731 = G__14772;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_14731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_14731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto__))
})();
var state__7191__auto__ = (function (){var statearr_14755 = f__7190__auto__.call(null);
(statearr_14755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto__);

return statearr_14755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto__))
);

return c__7189__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj14774 = {};
return obj14774;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4811__auto__ = _;
if(and__4811__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4811__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5459__auto__ = (((_ == null))?null:_);
return (function (){var or__4823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj14776 = {};
return obj14776;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t14998 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14998 = (function (cs,ch,mult,meta14999){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14999 = meta14999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14998.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14998.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14998.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14998.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14998.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15000){
var self__ = this;
var _15000__$1 = this;
return self__.meta14999;
});})(cs))
;

cljs.core.async.t14998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15000,meta14999__$1){
var self__ = this;
var _15000__$1 = this;
return (new cljs.core.async.t14998(self__.cs,self__.ch,self__.mult,meta14999__$1));
});})(cs))
;

cljs.core.async.t14998.cljs$lang$type = true;

cljs.core.async.t14998.cljs$lang$ctorStr = "cljs.core.async/t14998";

cljs.core.async.t14998.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t14998");
});})(cs))
;

cljs.core.async.__GT_t14998 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14998(cs__$1,ch__$1,mult__$1,meta14999){
return (new cljs.core.async.t14998(cs__$1,ch__$1,mult__$1,meta14999));
});})(cs))
;

}

return (new cljs.core.async.t14998(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7189__auto___15219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___15219,cs,m,dchan,dctr,done){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___15219,cs,m,dchan,dctr,done){
return (function (state_15131){
var state_val_15132 = (state_15131[(1)]);
if((state_val_15132 === (7))){
var inst_15127 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15133_15220 = state_15131__$1;
(statearr_15133_15220[(2)] = inst_15127);

(statearr_15133_15220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (20))){
var inst_15032 = (state_15131[(7)]);
var inst_15042 = cljs.core.first.call(null,inst_15032);
var inst_15043 = cljs.core.nth.call(null,inst_15042,(0),null);
var inst_15044 = cljs.core.nth.call(null,inst_15042,(1),null);
var state_15131__$1 = (function (){var statearr_15134 = state_15131;
(statearr_15134[(8)] = inst_15043);

return statearr_15134;
})();
if(cljs.core.truth_(inst_15044)){
var statearr_15135_15221 = state_15131__$1;
(statearr_15135_15221[(1)] = (22));

} else {
var statearr_15136_15222 = state_15131__$1;
(statearr_15136_15222[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (27))){
var inst_15072 = (state_15131[(9)]);
var inst_15003 = (state_15131[(10)]);
var inst_15079 = (state_15131[(11)]);
var inst_15074 = (state_15131[(12)]);
var inst_15079__$1 = cljs.core._nth.call(null,inst_15072,inst_15074);
var inst_15080 = cljs.core.async.put_BANG_.call(null,inst_15079__$1,inst_15003,done);
var state_15131__$1 = (function (){var statearr_15137 = state_15131;
(statearr_15137[(11)] = inst_15079__$1);

return statearr_15137;
})();
if(cljs.core.truth_(inst_15080)){
var statearr_15138_15223 = state_15131__$1;
(statearr_15138_15223[(1)] = (30));

} else {
var statearr_15139_15224 = state_15131__$1;
(statearr_15139_15224[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (1))){
var state_15131__$1 = state_15131;
var statearr_15140_15225 = state_15131__$1;
(statearr_15140_15225[(2)] = null);

(statearr_15140_15225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (24))){
var inst_15032 = (state_15131[(7)]);
var inst_15049 = (state_15131[(2)]);
var inst_15050 = cljs.core.next.call(null,inst_15032);
var inst_15012 = inst_15050;
var inst_15013 = null;
var inst_15014 = (0);
var inst_15015 = (0);
var state_15131__$1 = (function (){var statearr_15141 = state_15131;
(statearr_15141[(13)] = inst_15014);

(statearr_15141[(14)] = inst_15049);

(statearr_15141[(15)] = inst_15015);

(statearr_15141[(16)] = inst_15013);

(statearr_15141[(17)] = inst_15012);

return statearr_15141;
})();
var statearr_15142_15226 = state_15131__$1;
(statearr_15142_15226[(2)] = null);

(statearr_15142_15226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (39))){
var state_15131__$1 = state_15131;
var statearr_15146_15227 = state_15131__$1;
(statearr_15146_15227[(2)] = null);

(statearr_15146_15227[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (4))){
var inst_15003 = (state_15131[(10)]);
var inst_15003__$1 = (state_15131[(2)]);
var inst_15004 = (inst_15003__$1 == null);
var state_15131__$1 = (function (){var statearr_15147 = state_15131;
(statearr_15147[(10)] = inst_15003__$1);

return statearr_15147;
})();
if(cljs.core.truth_(inst_15004)){
var statearr_15148_15228 = state_15131__$1;
(statearr_15148_15228[(1)] = (5));

} else {
var statearr_15149_15229 = state_15131__$1;
(statearr_15149_15229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (15))){
var inst_15014 = (state_15131[(13)]);
var inst_15015 = (state_15131[(15)]);
var inst_15013 = (state_15131[(16)]);
var inst_15012 = (state_15131[(17)]);
var inst_15028 = (state_15131[(2)]);
var inst_15029 = (inst_15015 + (1));
var tmp15143 = inst_15014;
var tmp15144 = inst_15013;
var tmp15145 = inst_15012;
var inst_15012__$1 = tmp15145;
var inst_15013__$1 = tmp15144;
var inst_15014__$1 = tmp15143;
var inst_15015__$1 = inst_15029;
var state_15131__$1 = (function (){var statearr_15150 = state_15131;
(statearr_15150[(13)] = inst_15014__$1);

(statearr_15150[(15)] = inst_15015__$1);

(statearr_15150[(18)] = inst_15028);

(statearr_15150[(16)] = inst_15013__$1);

(statearr_15150[(17)] = inst_15012__$1);

return statearr_15150;
})();
var statearr_15151_15230 = state_15131__$1;
(statearr_15151_15230[(2)] = null);

(statearr_15151_15230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (21))){
var inst_15053 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15155_15231 = state_15131__$1;
(statearr_15155_15231[(2)] = inst_15053);

(statearr_15155_15231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (31))){
var inst_15079 = (state_15131[(11)]);
var inst_15083 = done.call(null,null);
var inst_15084 = cljs.core.async.untap_STAR_.call(null,m,inst_15079);
var state_15131__$1 = (function (){var statearr_15156 = state_15131;
(statearr_15156[(19)] = inst_15083);

return statearr_15156;
})();
var statearr_15157_15232 = state_15131__$1;
(statearr_15157_15232[(2)] = inst_15084);

(statearr_15157_15232[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (32))){
var inst_15072 = (state_15131[(9)]);
var inst_15071 = (state_15131[(20)]);
var inst_15073 = (state_15131[(21)]);
var inst_15074 = (state_15131[(12)]);
var inst_15086 = (state_15131[(2)]);
var inst_15087 = (inst_15074 + (1));
var tmp15152 = inst_15072;
var tmp15153 = inst_15071;
var tmp15154 = inst_15073;
var inst_15071__$1 = tmp15153;
var inst_15072__$1 = tmp15152;
var inst_15073__$1 = tmp15154;
var inst_15074__$1 = inst_15087;
var state_15131__$1 = (function (){var statearr_15158 = state_15131;
(statearr_15158[(9)] = inst_15072__$1);

(statearr_15158[(20)] = inst_15071__$1);

(statearr_15158[(22)] = inst_15086);

(statearr_15158[(21)] = inst_15073__$1);

(statearr_15158[(12)] = inst_15074__$1);

return statearr_15158;
})();
var statearr_15159_15233 = state_15131__$1;
(statearr_15159_15233[(2)] = null);

(statearr_15159_15233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (40))){
var inst_15099 = (state_15131[(23)]);
var inst_15103 = done.call(null,null);
var inst_15104 = cljs.core.async.untap_STAR_.call(null,m,inst_15099);
var state_15131__$1 = (function (){var statearr_15160 = state_15131;
(statearr_15160[(24)] = inst_15103);

return statearr_15160;
})();
var statearr_15161_15234 = state_15131__$1;
(statearr_15161_15234[(2)] = inst_15104);

(statearr_15161_15234[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (33))){
var inst_15090 = (state_15131[(25)]);
var inst_15092 = cljs.core.chunked_seq_QMARK_.call(null,inst_15090);
var state_15131__$1 = state_15131;
if(inst_15092){
var statearr_15162_15235 = state_15131__$1;
(statearr_15162_15235[(1)] = (36));

} else {
var statearr_15163_15236 = state_15131__$1;
(statearr_15163_15236[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (13))){
var inst_15022 = (state_15131[(26)]);
var inst_15025 = cljs.core.async.close_BANG_.call(null,inst_15022);
var state_15131__$1 = state_15131;
var statearr_15164_15237 = state_15131__$1;
(statearr_15164_15237[(2)] = inst_15025);

(statearr_15164_15237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (22))){
var inst_15043 = (state_15131[(8)]);
var inst_15046 = cljs.core.async.close_BANG_.call(null,inst_15043);
var state_15131__$1 = state_15131;
var statearr_15165_15238 = state_15131__$1;
(statearr_15165_15238[(2)] = inst_15046);

(statearr_15165_15238[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (36))){
var inst_15090 = (state_15131[(25)]);
var inst_15094 = cljs.core.chunk_first.call(null,inst_15090);
var inst_15095 = cljs.core.chunk_rest.call(null,inst_15090);
var inst_15096 = cljs.core.count.call(null,inst_15094);
var inst_15071 = inst_15095;
var inst_15072 = inst_15094;
var inst_15073 = inst_15096;
var inst_15074 = (0);
var state_15131__$1 = (function (){var statearr_15166 = state_15131;
(statearr_15166[(9)] = inst_15072);

(statearr_15166[(20)] = inst_15071);

(statearr_15166[(21)] = inst_15073);

(statearr_15166[(12)] = inst_15074);

return statearr_15166;
})();
var statearr_15167_15239 = state_15131__$1;
(statearr_15167_15239[(2)] = null);

(statearr_15167_15239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (41))){
var inst_15090 = (state_15131[(25)]);
var inst_15106 = (state_15131[(2)]);
var inst_15107 = cljs.core.next.call(null,inst_15090);
var inst_15071 = inst_15107;
var inst_15072 = null;
var inst_15073 = (0);
var inst_15074 = (0);
var state_15131__$1 = (function (){var statearr_15168 = state_15131;
(statearr_15168[(9)] = inst_15072);

(statearr_15168[(20)] = inst_15071);

(statearr_15168[(27)] = inst_15106);

(statearr_15168[(21)] = inst_15073);

(statearr_15168[(12)] = inst_15074);

return statearr_15168;
})();
var statearr_15169_15240 = state_15131__$1;
(statearr_15169_15240[(2)] = null);

(statearr_15169_15240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (43))){
var state_15131__$1 = state_15131;
var statearr_15170_15241 = state_15131__$1;
(statearr_15170_15241[(2)] = null);

(statearr_15170_15241[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (29))){
var inst_15115 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15171_15242 = state_15131__$1;
(statearr_15171_15242[(2)] = inst_15115);

(statearr_15171_15242[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (44))){
var inst_15124 = (state_15131[(2)]);
var state_15131__$1 = (function (){var statearr_15172 = state_15131;
(statearr_15172[(28)] = inst_15124);

return statearr_15172;
})();
var statearr_15173_15243 = state_15131__$1;
(statearr_15173_15243[(2)] = null);

(statearr_15173_15243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (6))){
var inst_15063 = (state_15131[(29)]);
var inst_15062 = cljs.core.deref.call(null,cs);
var inst_15063__$1 = cljs.core.keys.call(null,inst_15062);
var inst_15064 = cljs.core.count.call(null,inst_15063__$1);
var inst_15065 = cljs.core.reset_BANG_.call(null,dctr,inst_15064);
var inst_15070 = cljs.core.seq.call(null,inst_15063__$1);
var inst_15071 = inst_15070;
var inst_15072 = null;
var inst_15073 = (0);
var inst_15074 = (0);
var state_15131__$1 = (function (){var statearr_15174 = state_15131;
(statearr_15174[(9)] = inst_15072);

(statearr_15174[(20)] = inst_15071);

(statearr_15174[(29)] = inst_15063__$1);

(statearr_15174[(21)] = inst_15073);

(statearr_15174[(30)] = inst_15065);

(statearr_15174[(12)] = inst_15074);

return statearr_15174;
})();
var statearr_15175_15244 = state_15131__$1;
(statearr_15175_15244[(2)] = null);

(statearr_15175_15244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (28))){
var inst_15071 = (state_15131[(20)]);
var inst_15090 = (state_15131[(25)]);
var inst_15090__$1 = cljs.core.seq.call(null,inst_15071);
var state_15131__$1 = (function (){var statearr_15176 = state_15131;
(statearr_15176[(25)] = inst_15090__$1);

return statearr_15176;
})();
if(inst_15090__$1){
var statearr_15177_15245 = state_15131__$1;
(statearr_15177_15245[(1)] = (33));

} else {
var statearr_15178_15246 = state_15131__$1;
(statearr_15178_15246[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (25))){
var inst_15073 = (state_15131[(21)]);
var inst_15074 = (state_15131[(12)]);
var inst_15076 = (inst_15074 < inst_15073);
var inst_15077 = inst_15076;
var state_15131__$1 = state_15131;
if(cljs.core.truth_(inst_15077)){
var statearr_15179_15247 = state_15131__$1;
(statearr_15179_15247[(1)] = (27));

} else {
var statearr_15180_15248 = state_15131__$1;
(statearr_15180_15248[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (34))){
var state_15131__$1 = state_15131;
var statearr_15181_15249 = state_15131__$1;
(statearr_15181_15249[(2)] = null);

(statearr_15181_15249[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (17))){
var state_15131__$1 = state_15131;
var statearr_15182_15250 = state_15131__$1;
(statearr_15182_15250[(2)] = null);

(statearr_15182_15250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (3))){
var inst_15129 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15131__$1,inst_15129);
} else {
if((state_val_15132 === (12))){
var inst_15058 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15183_15251 = state_15131__$1;
(statearr_15183_15251[(2)] = inst_15058);

(statearr_15183_15251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (2))){
var state_15131__$1 = state_15131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15131__$1,(4),ch);
} else {
if((state_val_15132 === (23))){
var state_15131__$1 = state_15131;
var statearr_15184_15252 = state_15131__$1;
(statearr_15184_15252[(2)] = null);

(statearr_15184_15252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (35))){
var inst_15113 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15185_15253 = state_15131__$1;
(statearr_15185_15253[(2)] = inst_15113);

(statearr_15185_15253[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (19))){
var inst_15032 = (state_15131[(7)]);
var inst_15036 = cljs.core.chunk_first.call(null,inst_15032);
var inst_15037 = cljs.core.chunk_rest.call(null,inst_15032);
var inst_15038 = cljs.core.count.call(null,inst_15036);
var inst_15012 = inst_15037;
var inst_15013 = inst_15036;
var inst_15014 = inst_15038;
var inst_15015 = (0);
var state_15131__$1 = (function (){var statearr_15186 = state_15131;
(statearr_15186[(13)] = inst_15014);

(statearr_15186[(15)] = inst_15015);

(statearr_15186[(16)] = inst_15013);

(statearr_15186[(17)] = inst_15012);

return statearr_15186;
})();
var statearr_15187_15254 = state_15131__$1;
(statearr_15187_15254[(2)] = null);

(statearr_15187_15254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (11))){
var inst_15012 = (state_15131[(17)]);
var inst_15032 = (state_15131[(7)]);
var inst_15032__$1 = cljs.core.seq.call(null,inst_15012);
var state_15131__$1 = (function (){var statearr_15188 = state_15131;
(statearr_15188[(7)] = inst_15032__$1);

return statearr_15188;
})();
if(inst_15032__$1){
var statearr_15189_15255 = state_15131__$1;
(statearr_15189_15255[(1)] = (16));

} else {
var statearr_15190_15256 = state_15131__$1;
(statearr_15190_15256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (9))){
var inst_15060 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15191_15257 = state_15131__$1;
(statearr_15191_15257[(2)] = inst_15060);

(statearr_15191_15257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (5))){
var inst_15010 = cljs.core.deref.call(null,cs);
var inst_15011 = cljs.core.seq.call(null,inst_15010);
var inst_15012 = inst_15011;
var inst_15013 = null;
var inst_15014 = (0);
var inst_15015 = (0);
var state_15131__$1 = (function (){var statearr_15192 = state_15131;
(statearr_15192[(13)] = inst_15014);

(statearr_15192[(15)] = inst_15015);

(statearr_15192[(16)] = inst_15013);

(statearr_15192[(17)] = inst_15012);

return statearr_15192;
})();
var statearr_15193_15258 = state_15131__$1;
(statearr_15193_15258[(2)] = null);

(statearr_15193_15258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (14))){
var state_15131__$1 = state_15131;
var statearr_15194_15259 = state_15131__$1;
(statearr_15194_15259[(2)] = null);

(statearr_15194_15259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (45))){
var inst_15121 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15195_15260 = state_15131__$1;
(statearr_15195_15260[(2)] = inst_15121);

(statearr_15195_15260[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (26))){
var inst_15063 = (state_15131[(29)]);
var inst_15117 = (state_15131[(2)]);
var inst_15118 = cljs.core.seq.call(null,inst_15063);
var state_15131__$1 = (function (){var statearr_15196 = state_15131;
(statearr_15196[(31)] = inst_15117);

return statearr_15196;
})();
if(inst_15118){
var statearr_15197_15261 = state_15131__$1;
(statearr_15197_15261[(1)] = (42));

} else {
var statearr_15198_15262 = state_15131__$1;
(statearr_15198_15262[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (16))){
var inst_15032 = (state_15131[(7)]);
var inst_15034 = cljs.core.chunked_seq_QMARK_.call(null,inst_15032);
var state_15131__$1 = state_15131;
if(inst_15034){
var statearr_15199_15263 = state_15131__$1;
(statearr_15199_15263[(1)] = (19));

} else {
var statearr_15200_15264 = state_15131__$1;
(statearr_15200_15264[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (38))){
var inst_15110 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15201_15265 = state_15131__$1;
(statearr_15201_15265[(2)] = inst_15110);

(statearr_15201_15265[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (30))){
var state_15131__$1 = state_15131;
var statearr_15202_15266 = state_15131__$1;
(statearr_15202_15266[(2)] = null);

(statearr_15202_15266[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (10))){
var inst_15015 = (state_15131[(15)]);
var inst_15013 = (state_15131[(16)]);
var inst_15021 = cljs.core._nth.call(null,inst_15013,inst_15015);
var inst_15022 = cljs.core.nth.call(null,inst_15021,(0),null);
var inst_15023 = cljs.core.nth.call(null,inst_15021,(1),null);
var state_15131__$1 = (function (){var statearr_15203 = state_15131;
(statearr_15203[(26)] = inst_15022);

return statearr_15203;
})();
if(cljs.core.truth_(inst_15023)){
var statearr_15204_15267 = state_15131__$1;
(statearr_15204_15267[(1)] = (13));

} else {
var statearr_15205_15268 = state_15131__$1;
(statearr_15205_15268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (18))){
var inst_15056 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15206_15269 = state_15131__$1;
(statearr_15206_15269[(2)] = inst_15056);

(statearr_15206_15269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (42))){
var state_15131__$1 = state_15131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15131__$1,(45),dchan);
} else {
if((state_val_15132 === (37))){
var inst_15003 = (state_15131[(10)]);
var inst_15099 = (state_15131[(23)]);
var inst_15090 = (state_15131[(25)]);
var inst_15099__$1 = cljs.core.first.call(null,inst_15090);
var inst_15100 = cljs.core.async.put_BANG_.call(null,inst_15099__$1,inst_15003,done);
var state_15131__$1 = (function (){var statearr_15207 = state_15131;
(statearr_15207[(23)] = inst_15099__$1);

return statearr_15207;
})();
if(cljs.core.truth_(inst_15100)){
var statearr_15208_15270 = state_15131__$1;
(statearr_15208_15270[(1)] = (39));

} else {
var statearr_15209_15271 = state_15131__$1;
(statearr_15209_15271[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (8))){
var inst_15014 = (state_15131[(13)]);
var inst_15015 = (state_15131[(15)]);
var inst_15017 = (inst_15015 < inst_15014);
var inst_15018 = inst_15017;
var state_15131__$1 = state_15131;
if(cljs.core.truth_(inst_15018)){
var statearr_15210_15272 = state_15131__$1;
(statearr_15210_15272[(1)] = (10));

} else {
var statearr_15211_15273 = state_15131__$1;
(statearr_15211_15273[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___15219,cs,m,dchan,dctr,done))
;
return ((function (switch__7127__auto__,c__7189__auto___15219,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7128__auto__ = null;
var cljs$core$async$mult_$_state_machine__7128__auto____0 = (function (){
var statearr_15215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15215[(0)] = cljs$core$async$mult_$_state_machine__7128__auto__);

(statearr_15215[(1)] = (1));

return statearr_15215;
});
var cljs$core$async$mult_$_state_machine__7128__auto____1 = (function (state_15131){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_15131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e15216){if((e15216 instanceof Object)){
var ex__7131__auto__ = e15216;
var statearr_15217_15274 = state_15131;
(statearr_15217_15274[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15275 = state_15131;
state_15131 = G__15275;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7128__auto__ = function(state_15131){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7128__auto____1.call(this,state_15131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7128__auto____0;
cljs$core$async$mult_$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7128__auto____1;
return cljs$core$async$mult_$_state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___15219,cs,m,dchan,dctr,done))
})();
var state__7191__auto__ = (function (){var statearr_15218 = f__7190__auto__.call(null);
(statearr_15218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___15219);

return statearr_15218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___15219,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__15277 = arguments.length;
switch (G__15277) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj15280 = {};
return obj15280;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4811__auto__ = m;
if(and__4811__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4811__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5459__auto__ = (((m == null))?null:m);
return (function (){var or__4823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5863__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5863__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15285){
var map__15286 = p__15285;
var map__15286__$1 = ((cljs.core.seq_QMARK_.call(null,map__15286))?cljs.core.apply.call(null,cljs.core.hash_map,map__15286):map__15286);
var opts = map__15286__$1;
var statearr_15287_15290 = state;
(statearr_15287_15290[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__15286,map__15286__$1,opts){
return (function (val){
var statearr_15288_15291 = state;
(statearr_15288_15291[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15286,map__15286__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_15289_15292 = state;
(statearr_15289_15292[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15281){
var G__15282 = cljs.core.first.call(null,seq15281);
var seq15281__$1 = cljs.core.next.call(null,seq15281);
var G__15283 = cljs.core.first.call(null,seq15281__$1);
var seq15281__$2 = cljs.core.next.call(null,seq15281__$1);
var G__15284 = cljs.core.first.call(null,seq15281__$2);
var seq15281__$3 = cljs.core.next.call(null,seq15281__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15282,G__15283,G__15284,seq15281__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t15412 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15412 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15413){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15413 = meta15413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15412.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t15412.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15414){
var self__ = this;
var _15414__$1 = this;
return self__.meta15413;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15414,meta15413__$1){
var self__ = this;
var _15414__$1 = this;
return (new cljs.core.async.t15412(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15413__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15412.cljs$lang$type = true;

cljs.core.async.t15412.cljs$lang$ctorStr = "cljs.core.async/t15412";

cljs.core.async.t15412.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t15412");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t15412 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t15412(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15413){
return (new cljs.core.async.t15412(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15413));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t15412(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7189__auto___15531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___15531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___15531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15484){
var state_val_15485 = (state_15484[(1)]);
if((state_val_15485 === (7))){
var inst_15428 = (state_15484[(7)]);
var inst_15433 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15428);
var state_15484__$1 = state_15484;
var statearr_15486_15532 = state_15484__$1;
(statearr_15486_15532[(2)] = inst_15433);

(statearr_15486_15532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (20))){
var inst_15443 = (state_15484[(8)]);
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15484__$1,(23),out,inst_15443);
} else {
if((state_val_15485 === (1))){
var inst_15418 = (state_15484[(9)]);
var inst_15418__$1 = calc_state.call(null);
var inst_15419 = cljs.core.seq_QMARK_.call(null,inst_15418__$1);
var state_15484__$1 = (function (){var statearr_15487 = state_15484;
(statearr_15487[(9)] = inst_15418__$1);

return statearr_15487;
})();
if(inst_15419){
var statearr_15488_15533 = state_15484__$1;
(statearr_15488_15533[(1)] = (2));

} else {
var statearr_15489_15534 = state_15484__$1;
(statearr_15489_15534[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (24))){
var inst_15436 = (state_15484[(10)]);
var inst_15428 = inst_15436;
var state_15484__$1 = (function (){var statearr_15490 = state_15484;
(statearr_15490[(7)] = inst_15428);

return statearr_15490;
})();
var statearr_15491_15535 = state_15484__$1;
(statearr_15491_15535[(2)] = null);

(statearr_15491_15535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (4))){
var inst_15418 = (state_15484[(9)]);
var inst_15424 = (state_15484[(2)]);
var inst_15425 = cljs.core.get.call(null,inst_15424,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15426 = cljs.core.get.call(null,inst_15424,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15427 = cljs.core.get.call(null,inst_15424,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15428 = inst_15418;
var state_15484__$1 = (function (){var statearr_15492 = state_15484;
(statearr_15492[(11)] = inst_15427);

(statearr_15492[(12)] = inst_15426);

(statearr_15492[(13)] = inst_15425);

(statearr_15492[(7)] = inst_15428);

return statearr_15492;
})();
var statearr_15493_15536 = state_15484__$1;
(statearr_15493_15536[(2)] = null);

(statearr_15493_15536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (15))){
var state_15484__$1 = state_15484;
var statearr_15494_15537 = state_15484__$1;
(statearr_15494_15537[(2)] = null);

(statearr_15494_15537[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (21))){
var inst_15436 = (state_15484[(10)]);
var inst_15428 = inst_15436;
var state_15484__$1 = (function (){var statearr_15495 = state_15484;
(statearr_15495[(7)] = inst_15428);

return statearr_15495;
})();
var statearr_15496_15538 = state_15484__$1;
(statearr_15496_15538[(2)] = null);

(statearr_15496_15538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (13))){
var inst_15480 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
var statearr_15497_15539 = state_15484__$1;
(statearr_15497_15539[(2)] = inst_15480);

(statearr_15497_15539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (22))){
var inst_15478 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
var statearr_15498_15540 = state_15484__$1;
(statearr_15498_15540[(2)] = inst_15478);

(statearr_15498_15540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (6))){
var inst_15482 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15484__$1,inst_15482);
} else {
if((state_val_15485 === (25))){
var state_15484__$1 = state_15484;
var statearr_15499_15541 = state_15484__$1;
(statearr_15499_15541[(2)] = null);

(statearr_15499_15541[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (17))){
var inst_15458 = (state_15484[(14)]);
var state_15484__$1 = state_15484;
var statearr_15500_15542 = state_15484__$1;
(statearr_15500_15542[(2)] = inst_15458);

(statearr_15500_15542[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (3))){
var inst_15418 = (state_15484[(9)]);
var state_15484__$1 = state_15484;
var statearr_15501_15543 = state_15484__$1;
(statearr_15501_15543[(2)] = inst_15418);

(statearr_15501_15543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (12))){
var inst_15439 = (state_15484[(15)]);
var inst_15444 = (state_15484[(16)]);
var inst_15458 = (state_15484[(14)]);
var inst_15458__$1 = inst_15439.call(null,inst_15444);
var state_15484__$1 = (function (){var statearr_15502 = state_15484;
(statearr_15502[(14)] = inst_15458__$1);

return statearr_15502;
})();
if(cljs.core.truth_(inst_15458__$1)){
var statearr_15503_15544 = state_15484__$1;
(statearr_15503_15544[(1)] = (17));

} else {
var statearr_15504_15545 = state_15484__$1;
(statearr_15504_15545[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (2))){
var inst_15418 = (state_15484[(9)]);
var inst_15421 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15418);
var state_15484__$1 = state_15484;
var statearr_15505_15546 = state_15484__$1;
(statearr_15505_15546[(2)] = inst_15421);

(statearr_15505_15546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (23))){
var inst_15469 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
if(cljs.core.truth_(inst_15469)){
var statearr_15506_15547 = state_15484__$1;
(statearr_15506_15547[(1)] = (24));

} else {
var statearr_15507_15548 = state_15484__$1;
(statearr_15507_15548[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (19))){
var inst_15466 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
if(cljs.core.truth_(inst_15466)){
var statearr_15508_15549 = state_15484__$1;
(statearr_15508_15549[(1)] = (20));

} else {
var statearr_15509_15550 = state_15484__$1;
(statearr_15509_15550[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (11))){
var inst_15443 = (state_15484[(8)]);
var inst_15449 = (inst_15443 == null);
var state_15484__$1 = state_15484;
if(cljs.core.truth_(inst_15449)){
var statearr_15510_15551 = state_15484__$1;
(statearr_15510_15551[(1)] = (14));

} else {
var statearr_15511_15552 = state_15484__$1;
(statearr_15511_15552[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (9))){
var inst_15436 = (state_15484[(10)]);
var inst_15436__$1 = (state_15484[(2)]);
var inst_15437 = cljs.core.get.call(null,inst_15436__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15438 = cljs.core.get.call(null,inst_15436__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15439 = cljs.core.get.call(null,inst_15436__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_15484__$1 = (function (){var statearr_15512 = state_15484;
(statearr_15512[(15)] = inst_15439);

(statearr_15512[(17)] = inst_15438);

(statearr_15512[(10)] = inst_15436__$1);

return statearr_15512;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15484__$1,(10),inst_15437);
} else {
if((state_val_15485 === (5))){
var inst_15428 = (state_15484[(7)]);
var inst_15431 = cljs.core.seq_QMARK_.call(null,inst_15428);
var state_15484__$1 = state_15484;
if(inst_15431){
var statearr_15513_15553 = state_15484__$1;
(statearr_15513_15553[(1)] = (7));

} else {
var statearr_15514_15554 = state_15484__$1;
(statearr_15514_15554[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (14))){
var inst_15444 = (state_15484[(16)]);
var inst_15451 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15444);
var state_15484__$1 = state_15484;
var statearr_15515_15555 = state_15484__$1;
(statearr_15515_15555[(2)] = inst_15451);

(statearr_15515_15555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (26))){
var inst_15474 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
var statearr_15516_15556 = state_15484__$1;
(statearr_15516_15556[(2)] = inst_15474);

(statearr_15516_15556[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (16))){
var inst_15454 = (state_15484[(2)]);
var inst_15455 = calc_state.call(null);
var inst_15428 = inst_15455;
var state_15484__$1 = (function (){var statearr_15517 = state_15484;
(statearr_15517[(18)] = inst_15454);

(statearr_15517[(7)] = inst_15428);

return statearr_15517;
})();
var statearr_15518_15557 = state_15484__$1;
(statearr_15518_15557[(2)] = null);

(statearr_15518_15557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (10))){
var inst_15444 = (state_15484[(16)]);
var inst_15443 = (state_15484[(8)]);
var inst_15442 = (state_15484[(2)]);
var inst_15443__$1 = cljs.core.nth.call(null,inst_15442,(0),null);
var inst_15444__$1 = cljs.core.nth.call(null,inst_15442,(1),null);
var inst_15445 = (inst_15443__$1 == null);
var inst_15446 = cljs.core._EQ_.call(null,inst_15444__$1,change);
var inst_15447 = (inst_15445) || (inst_15446);
var state_15484__$1 = (function (){var statearr_15519 = state_15484;
(statearr_15519[(16)] = inst_15444__$1);

(statearr_15519[(8)] = inst_15443__$1);

return statearr_15519;
})();
if(cljs.core.truth_(inst_15447)){
var statearr_15520_15558 = state_15484__$1;
(statearr_15520_15558[(1)] = (11));

} else {
var statearr_15521_15559 = state_15484__$1;
(statearr_15521_15559[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (18))){
var inst_15439 = (state_15484[(15)]);
var inst_15444 = (state_15484[(16)]);
var inst_15438 = (state_15484[(17)]);
var inst_15461 = cljs.core.empty_QMARK_.call(null,inst_15439);
var inst_15462 = inst_15438.call(null,inst_15444);
var inst_15463 = cljs.core.not.call(null,inst_15462);
var inst_15464 = (inst_15461) && (inst_15463);
var state_15484__$1 = state_15484;
var statearr_15522_15560 = state_15484__$1;
(statearr_15522_15560[(2)] = inst_15464);

(statearr_15522_15560[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (8))){
var inst_15428 = (state_15484[(7)]);
var state_15484__$1 = state_15484;
var statearr_15523_15561 = state_15484__$1;
(statearr_15523_15561[(2)] = inst_15428);

(statearr_15523_15561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___15531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7127__auto__,c__7189__auto___15531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7128__auto__ = null;
var cljs$core$async$mix_$_state_machine__7128__auto____0 = (function (){
var statearr_15527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15527[(0)] = cljs$core$async$mix_$_state_machine__7128__auto__);

(statearr_15527[(1)] = (1));

return statearr_15527;
});
var cljs$core$async$mix_$_state_machine__7128__auto____1 = (function (state_15484){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_15484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e15528){if((e15528 instanceof Object)){
var ex__7131__auto__ = e15528;
var statearr_15529_15562 = state_15484;
(statearr_15529_15562[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15563 = state_15484;
state_15484 = G__15563;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7128__auto__ = function(state_15484){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7128__auto____1.call(this,state_15484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7128__auto____0;
cljs$core$async$mix_$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7128__auto____1;
return cljs$core$async$mix_$_state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___15531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7191__auto__ = (function (){var statearr_15530 = f__7190__auto__.call(null);
(statearr_15530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___15531);

return statearr_15530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___15531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj15565 = {};
return obj15565;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4811__auto__ = p;
if(and__4811__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4811__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5459__auto__ = (((p == null))?null:p);
return (function (){var or__4823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4811__auto__ = p;
if(and__4811__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4811__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5459__auto__ = (((p == null))?null:p);
return (function (){var or__4823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__15567 = arguments.length;
switch (G__15567) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4811__auto__ = p;
if(and__4811__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4811__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5459__auto__ = (((p == null))?null:p);
return (function (){var or__4823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4811__auto__ = p;
if(and__4811__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4811__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5459__auto__ = (((p == null))?null:p);
return (function (){var or__4823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5459__auto__)]);
if(or__4823__auto__){
return or__4823__auto__;
} else {
var or__4823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4823__auto____$1){
return or__4823__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__15571 = arguments.length;
switch (G__15571) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4823__auto__)){
return or__4823__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4823__auto__,mults){
return (function (p1__15569_SHARP_){
if(cljs.core.truth_(p1__15569_SHARP_.call(null,topic))){
return p1__15569_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15569_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4823__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15572 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15572 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta15573){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta15573 = meta15573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15572.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15572.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15572.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t15572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15572.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15574){
var self__ = this;
var _15574__$1 = this;
return self__.meta15573;
});})(mults,ensure_mult))
;

cljs.core.async.t15572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15574,meta15573__$1){
var self__ = this;
var _15574__$1 = this;
return (new cljs.core.async.t15572(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta15573__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15572.cljs$lang$type = true;

cljs.core.async.t15572.cljs$lang$ctorStr = "cljs.core.async/t15572";

cljs.core.async.t15572.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t15572");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15572 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t15572(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15573){
return (new cljs.core.async.t15572(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15573));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15572(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7189__auto___15695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___15695,mults,ensure_mult,p){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___15695,mults,ensure_mult,p){
return (function (state_15646){
var state_val_15647 = (state_15646[(1)]);
if((state_val_15647 === (7))){
var inst_15642 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15648_15696 = state_15646__$1;
(statearr_15648_15696[(2)] = inst_15642);

(statearr_15648_15696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (20))){
var state_15646__$1 = state_15646;
var statearr_15649_15697 = state_15646__$1;
(statearr_15649_15697[(2)] = null);

(statearr_15649_15697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (1))){
var state_15646__$1 = state_15646;
var statearr_15650_15698 = state_15646__$1;
(statearr_15650_15698[(2)] = null);

(statearr_15650_15698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (24))){
var inst_15625 = (state_15646[(7)]);
var inst_15634 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15625);
var state_15646__$1 = state_15646;
var statearr_15651_15699 = state_15646__$1;
(statearr_15651_15699[(2)] = inst_15634);

(statearr_15651_15699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (4))){
var inst_15577 = (state_15646[(8)]);
var inst_15577__$1 = (state_15646[(2)]);
var inst_15578 = (inst_15577__$1 == null);
var state_15646__$1 = (function (){var statearr_15652 = state_15646;
(statearr_15652[(8)] = inst_15577__$1);

return statearr_15652;
})();
if(cljs.core.truth_(inst_15578)){
var statearr_15653_15700 = state_15646__$1;
(statearr_15653_15700[(1)] = (5));

} else {
var statearr_15654_15701 = state_15646__$1;
(statearr_15654_15701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (15))){
var inst_15619 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15655_15702 = state_15646__$1;
(statearr_15655_15702[(2)] = inst_15619);

(statearr_15655_15702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (21))){
var inst_15639 = (state_15646[(2)]);
var state_15646__$1 = (function (){var statearr_15656 = state_15646;
(statearr_15656[(9)] = inst_15639);

return statearr_15656;
})();
var statearr_15657_15703 = state_15646__$1;
(statearr_15657_15703[(2)] = null);

(statearr_15657_15703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (13))){
var inst_15601 = (state_15646[(10)]);
var inst_15603 = cljs.core.chunked_seq_QMARK_.call(null,inst_15601);
var state_15646__$1 = state_15646;
if(inst_15603){
var statearr_15658_15704 = state_15646__$1;
(statearr_15658_15704[(1)] = (16));

} else {
var statearr_15659_15705 = state_15646__$1;
(statearr_15659_15705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (22))){
var inst_15631 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
if(cljs.core.truth_(inst_15631)){
var statearr_15660_15706 = state_15646__$1;
(statearr_15660_15706[(1)] = (23));

} else {
var statearr_15661_15707 = state_15646__$1;
(statearr_15661_15707[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (6))){
var inst_15577 = (state_15646[(8)]);
var inst_15625 = (state_15646[(7)]);
var inst_15627 = (state_15646[(11)]);
var inst_15625__$1 = topic_fn.call(null,inst_15577);
var inst_15626 = cljs.core.deref.call(null,mults);
var inst_15627__$1 = cljs.core.get.call(null,inst_15626,inst_15625__$1);
var state_15646__$1 = (function (){var statearr_15662 = state_15646;
(statearr_15662[(7)] = inst_15625__$1);

(statearr_15662[(11)] = inst_15627__$1);

return statearr_15662;
})();
if(cljs.core.truth_(inst_15627__$1)){
var statearr_15663_15708 = state_15646__$1;
(statearr_15663_15708[(1)] = (19));

} else {
var statearr_15664_15709 = state_15646__$1;
(statearr_15664_15709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (25))){
var inst_15636 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15665_15710 = state_15646__$1;
(statearr_15665_15710[(2)] = inst_15636);

(statearr_15665_15710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (17))){
var inst_15601 = (state_15646[(10)]);
var inst_15610 = cljs.core.first.call(null,inst_15601);
var inst_15611 = cljs.core.async.muxch_STAR_.call(null,inst_15610);
var inst_15612 = cljs.core.async.close_BANG_.call(null,inst_15611);
var inst_15613 = cljs.core.next.call(null,inst_15601);
var inst_15587 = inst_15613;
var inst_15588 = null;
var inst_15589 = (0);
var inst_15590 = (0);
var state_15646__$1 = (function (){var statearr_15666 = state_15646;
(statearr_15666[(12)] = inst_15588);

(statearr_15666[(13)] = inst_15587);

(statearr_15666[(14)] = inst_15612);

(statearr_15666[(15)] = inst_15590);

(statearr_15666[(16)] = inst_15589);

return statearr_15666;
})();
var statearr_15667_15711 = state_15646__$1;
(statearr_15667_15711[(2)] = null);

(statearr_15667_15711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (3))){
var inst_15644 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15646__$1,inst_15644);
} else {
if((state_val_15647 === (12))){
var inst_15621 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15668_15712 = state_15646__$1;
(statearr_15668_15712[(2)] = inst_15621);

(statearr_15668_15712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (2))){
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15646__$1,(4),ch);
} else {
if((state_val_15647 === (23))){
var state_15646__$1 = state_15646;
var statearr_15669_15713 = state_15646__$1;
(statearr_15669_15713[(2)] = null);

(statearr_15669_15713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (19))){
var inst_15577 = (state_15646[(8)]);
var inst_15627 = (state_15646[(11)]);
var inst_15629 = cljs.core.async.muxch_STAR_.call(null,inst_15627);
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15646__$1,(22),inst_15629,inst_15577);
} else {
if((state_val_15647 === (11))){
var inst_15587 = (state_15646[(13)]);
var inst_15601 = (state_15646[(10)]);
var inst_15601__$1 = cljs.core.seq.call(null,inst_15587);
var state_15646__$1 = (function (){var statearr_15670 = state_15646;
(statearr_15670[(10)] = inst_15601__$1);

return statearr_15670;
})();
if(inst_15601__$1){
var statearr_15671_15714 = state_15646__$1;
(statearr_15671_15714[(1)] = (13));

} else {
var statearr_15672_15715 = state_15646__$1;
(statearr_15672_15715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (9))){
var inst_15623 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15673_15716 = state_15646__$1;
(statearr_15673_15716[(2)] = inst_15623);

(statearr_15673_15716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (5))){
var inst_15584 = cljs.core.deref.call(null,mults);
var inst_15585 = cljs.core.vals.call(null,inst_15584);
var inst_15586 = cljs.core.seq.call(null,inst_15585);
var inst_15587 = inst_15586;
var inst_15588 = null;
var inst_15589 = (0);
var inst_15590 = (0);
var state_15646__$1 = (function (){var statearr_15674 = state_15646;
(statearr_15674[(12)] = inst_15588);

(statearr_15674[(13)] = inst_15587);

(statearr_15674[(15)] = inst_15590);

(statearr_15674[(16)] = inst_15589);

return statearr_15674;
})();
var statearr_15675_15717 = state_15646__$1;
(statearr_15675_15717[(2)] = null);

(statearr_15675_15717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (14))){
var state_15646__$1 = state_15646;
var statearr_15679_15718 = state_15646__$1;
(statearr_15679_15718[(2)] = null);

(statearr_15679_15718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (16))){
var inst_15601 = (state_15646[(10)]);
var inst_15605 = cljs.core.chunk_first.call(null,inst_15601);
var inst_15606 = cljs.core.chunk_rest.call(null,inst_15601);
var inst_15607 = cljs.core.count.call(null,inst_15605);
var inst_15587 = inst_15606;
var inst_15588 = inst_15605;
var inst_15589 = inst_15607;
var inst_15590 = (0);
var state_15646__$1 = (function (){var statearr_15680 = state_15646;
(statearr_15680[(12)] = inst_15588);

(statearr_15680[(13)] = inst_15587);

(statearr_15680[(15)] = inst_15590);

(statearr_15680[(16)] = inst_15589);

return statearr_15680;
})();
var statearr_15681_15719 = state_15646__$1;
(statearr_15681_15719[(2)] = null);

(statearr_15681_15719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (10))){
var inst_15588 = (state_15646[(12)]);
var inst_15587 = (state_15646[(13)]);
var inst_15590 = (state_15646[(15)]);
var inst_15589 = (state_15646[(16)]);
var inst_15595 = cljs.core._nth.call(null,inst_15588,inst_15590);
var inst_15596 = cljs.core.async.muxch_STAR_.call(null,inst_15595);
var inst_15597 = cljs.core.async.close_BANG_.call(null,inst_15596);
var inst_15598 = (inst_15590 + (1));
var tmp15676 = inst_15588;
var tmp15677 = inst_15587;
var tmp15678 = inst_15589;
var inst_15587__$1 = tmp15677;
var inst_15588__$1 = tmp15676;
var inst_15589__$1 = tmp15678;
var inst_15590__$1 = inst_15598;
var state_15646__$1 = (function (){var statearr_15682 = state_15646;
(statearr_15682[(12)] = inst_15588__$1);

(statearr_15682[(13)] = inst_15587__$1);

(statearr_15682[(17)] = inst_15597);

(statearr_15682[(15)] = inst_15590__$1);

(statearr_15682[(16)] = inst_15589__$1);

return statearr_15682;
})();
var statearr_15683_15720 = state_15646__$1;
(statearr_15683_15720[(2)] = null);

(statearr_15683_15720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (18))){
var inst_15616 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15684_15721 = state_15646__$1;
(statearr_15684_15721[(2)] = inst_15616);

(statearr_15684_15721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (8))){
var inst_15590 = (state_15646[(15)]);
var inst_15589 = (state_15646[(16)]);
var inst_15592 = (inst_15590 < inst_15589);
var inst_15593 = inst_15592;
var state_15646__$1 = state_15646;
if(cljs.core.truth_(inst_15593)){
var statearr_15685_15722 = state_15646__$1;
(statearr_15685_15722[(1)] = (10));

} else {
var statearr_15686_15723 = state_15646__$1;
(statearr_15686_15723[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___15695,mults,ensure_mult,p))
;
return ((function (switch__7127__auto__,c__7189__auto___15695,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_15690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15690[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_15690[(1)] = (1));

return statearr_15690;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_15646){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_15646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e15691){if((e15691 instanceof Object)){
var ex__7131__auto__ = e15691;
var statearr_15692_15724 = state_15646;
(statearr_15692_15724[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15725 = state_15646;
state_15646 = G__15725;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_15646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_15646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___15695,mults,ensure_mult,p))
})();
var state__7191__auto__ = (function (){var statearr_15693 = f__7190__auto__.call(null);
(statearr_15693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___15695);

return statearr_15693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___15695,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__15727 = arguments.length;
switch (G__15727) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__15730 = arguments.length;
switch (G__15730) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__15733 = arguments.length;
switch (G__15733) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7189__auto___15803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___15803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___15803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15772){
var state_val_15773 = (state_15772[(1)]);
if((state_val_15773 === (7))){
var state_15772__$1 = state_15772;
var statearr_15774_15804 = state_15772__$1;
(statearr_15774_15804[(2)] = null);

(statearr_15774_15804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (1))){
var state_15772__$1 = state_15772;
var statearr_15775_15805 = state_15772__$1;
(statearr_15775_15805[(2)] = null);

(statearr_15775_15805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (4))){
var inst_15736 = (state_15772[(7)]);
var inst_15738 = (inst_15736 < cnt);
var state_15772__$1 = state_15772;
if(cljs.core.truth_(inst_15738)){
var statearr_15776_15806 = state_15772__$1;
(statearr_15776_15806[(1)] = (6));

} else {
var statearr_15777_15807 = state_15772__$1;
(statearr_15777_15807[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (15))){
var inst_15768 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
var statearr_15778_15808 = state_15772__$1;
(statearr_15778_15808[(2)] = inst_15768);

(statearr_15778_15808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (13))){
var inst_15761 = cljs.core.async.close_BANG_.call(null,out);
var state_15772__$1 = state_15772;
var statearr_15779_15809 = state_15772__$1;
(statearr_15779_15809[(2)] = inst_15761);

(statearr_15779_15809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (6))){
var state_15772__$1 = state_15772;
var statearr_15780_15810 = state_15772__$1;
(statearr_15780_15810[(2)] = null);

(statearr_15780_15810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (3))){
var inst_15770 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15772__$1,inst_15770);
} else {
if((state_val_15773 === (12))){
var inst_15758 = (state_15772[(8)]);
var inst_15758__$1 = (state_15772[(2)]);
var inst_15759 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15758__$1);
var state_15772__$1 = (function (){var statearr_15781 = state_15772;
(statearr_15781[(8)] = inst_15758__$1);

return statearr_15781;
})();
if(cljs.core.truth_(inst_15759)){
var statearr_15782_15811 = state_15772__$1;
(statearr_15782_15811[(1)] = (13));

} else {
var statearr_15783_15812 = state_15772__$1;
(statearr_15783_15812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (2))){
var inst_15735 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15736 = (0);
var state_15772__$1 = (function (){var statearr_15784 = state_15772;
(statearr_15784[(7)] = inst_15736);

(statearr_15784[(9)] = inst_15735);

return statearr_15784;
})();
var statearr_15785_15813 = state_15772__$1;
(statearr_15785_15813[(2)] = null);

(statearr_15785_15813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (11))){
var inst_15736 = (state_15772[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15772,(10),Object,null,(9));
var inst_15745 = chs__$1.call(null,inst_15736);
var inst_15746 = done.call(null,inst_15736);
var inst_15747 = cljs.core.async.take_BANG_.call(null,inst_15745,inst_15746);
var state_15772__$1 = state_15772;
var statearr_15786_15814 = state_15772__$1;
(statearr_15786_15814[(2)] = inst_15747);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15772__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (9))){
var inst_15736 = (state_15772[(7)]);
var inst_15749 = (state_15772[(2)]);
var inst_15750 = (inst_15736 + (1));
var inst_15736__$1 = inst_15750;
var state_15772__$1 = (function (){var statearr_15787 = state_15772;
(statearr_15787[(7)] = inst_15736__$1);

(statearr_15787[(10)] = inst_15749);

return statearr_15787;
})();
var statearr_15788_15815 = state_15772__$1;
(statearr_15788_15815[(2)] = null);

(statearr_15788_15815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (5))){
var inst_15756 = (state_15772[(2)]);
var state_15772__$1 = (function (){var statearr_15789 = state_15772;
(statearr_15789[(11)] = inst_15756);

return statearr_15789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15772__$1,(12),dchan);
} else {
if((state_val_15773 === (14))){
var inst_15758 = (state_15772[(8)]);
var inst_15763 = cljs.core.apply.call(null,f,inst_15758);
var state_15772__$1 = state_15772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15772__$1,(16),out,inst_15763);
} else {
if((state_val_15773 === (16))){
var inst_15765 = (state_15772[(2)]);
var state_15772__$1 = (function (){var statearr_15790 = state_15772;
(statearr_15790[(12)] = inst_15765);

return statearr_15790;
})();
var statearr_15791_15816 = state_15772__$1;
(statearr_15791_15816[(2)] = null);

(statearr_15791_15816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (10))){
var inst_15740 = (state_15772[(2)]);
var inst_15741 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15772__$1 = (function (){var statearr_15792 = state_15772;
(statearr_15792[(13)] = inst_15740);

return statearr_15792;
})();
var statearr_15793_15817 = state_15772__$1;
(statearr_15793_15817[(2)] = inst_15741);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15772__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15773 === (8))){
var inst_15754 = (state_15772[(2)]);
var state_15772__$1 = state_15772;
var statearr_15794_15818 = state_15772__$1;
(statearr_15794_15818[(2)] = inst_15754);

(statearr_15794_15818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___15803,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7127__auto__,c__7189__auto___15803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_15798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15798[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_15798[(1)] = (1));

return statearr_15798;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_15772){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_15772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e15799){if((e15799 instanceof Object)){
var ex__7131__auto__ = e15799;
var statearr_15800_15819 = state_15772;
(statearr_15800_15819[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15820 = state_15772;
state_15772 = G__15820;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_15772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_15772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___15803,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7191__auto__ = (function (){var statearr_15801 = f__7190__auto__.call(null);
(statearr_15801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___15803);

return statearr_15801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___15803,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__15823 = arguments.length;
switch (G__15823) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7189__auto___15878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___15878,out){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___15878,out){
return (function (state_15853){
var state_val_15854 = (state_15853[(1)]);
if((state_val_15854 === (7))){
var inst_15833 = (state_15853[(7)]);
var inst_15832 = (state_15853[(8)]);
var inst_15832__$1 = (state_15853[(2)]);
var inst_15833__$1 = cljs.core.nth.call(null,inst_15832__$1,(0),null);
var inst_15834 = cljs.core.nth.call(null,inst_15832__$1,(1),null);
var inst_15835 = (inst_15833__$1 == null);
var state_15853__$1 = (function (){var statearr_15855 = state_15853;
(statearr_15855[(9)] = inst_15834);

(statearr_15855[(7)] = inst_15833__$1);

(statearr_15855[(8)] = inst_15832__$1);

return statearr_15855;
})();
if(cljs.core.truth_(inst_15835)){
var statearr_15856_15879 = state_15853__$1;
(statearr_15856_15879[(1)] = (8));

} else {
var statearr_15857_15880 = state_15853__$1;
(statearr_15857_15880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (1))){
var inst_15824 = cljs.core.vec.call(null,chs);
var inst_15825 = inst_15824;
var state_15853__$1 = (function (){var statearr_15858 = state_15853;
(statearr_15858[(10)] = inst_15825);

return statearr_15858;
})();
var statearr_15859_15881 = state_15853__$1;
(statearr_15859_15881[(2)] = null);

(statearr_15859_15881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (4))){
var inst_15825 = (state_15853[(10)]);
var state_15853__$1 = state_15853;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15853__$1,(7),inst_15825);
} else {
if((state_val_15854 === (6))){
var inst_15849 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
var statearr_15860_15882 = state_15853__$1;
(statearr_15860_15882[(2)] = inst_15849);

(statearr_15860_15882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (3))){
var inst_15851 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15853__$1,inst_15851);
} else {
if((state_val_15854 === (2))){
var inst_15825 = (state_15853[(10)]);
var inst_15827 = cljs.core.count.call(null,inst_15825);
var inst_15828 = (inst_15827 > (0));
var state_15853__$1 = state_15853;
if(cljs.core.truth_(inst_15828)){
var statearr_15862_15883 = state_15853__$1;
(statearr_15862_15883[(1)] = (4));

} else {
var statearr_15863_15884 = state_15853__$1;
(statearr_15863_15884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (11))){
var inst_15825 = (state_15853[(10)]);
var inst_15842 = (state_15853[(2)]);
var tmp15861 = inst_15825;
var inst_15825__$1 = tmp15861;
var state_15853__$1 = (function (){var statearr_15864 = state_15853;
(statearr_15864[(11)] = inst_15842);

(statearr_15864[(10)] = inst_15825__$1);

return statearr_15864;
})();
var statearr_15865_15885 = state_15853__$1;
(statearr_15865_15885[(2)] = null);

(statearr_15865_15885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (9))){
var inst_15833 = (state_15853[(7)]);
var state_15853__$1 = state_15853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15853__$1,(11),out,inst_15833);
} else {
if((state_val_15854 === (5))){
var inst_15847 = cljs.core.async.close_BANG_.call(null,out);
var state_15853__$1 = state_15853;
var statearr_15866_15886 = state_15853__$1;
(statearr_15866_15886[(2)] = inst_15847);

(statearr_15866_15886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (10))){
var inst_15845 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
var statearr_15867_15887 = state_15853__$1;
(statearr_15867_15887[(2)] = inst_15845);

(statearr_15867_15887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (8))){
var inst_15834 = (state_15853[(9)]);
var inst_15833 = (state_15853[(7)]);
var inst_15825 = (state_15853[(10)]);
var inst_15832 = (state_15853[(8)]);
var inst_15837 = (function (){var c = inst_15834;
var v = inst_15833;
var vec__15830 = inst_15832;
var cs = inst_15825;
return ((function (c,v,vec__15830,cs,inst_15834,inst_15833,inst_15825,inst_15832,state_val_15854,c__7189__auto___15878,out){
return (function (p1__15821_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15821_SHARP_);
});
;})(c,v,vec__15830,cs,inst_15834,inst_15833,inst_15825,inst_15832,state_val_15854,c__7189__auto___15878,out))
})();
var inst_15838 = cljs.core.filterv.call(null,inst_15837,inst_15825);
var inst_15825__$1 = inst_15838;
var state_15853__$1 = (function (){var statearr_15868 = state_15853;
(statearr_15868[(10)] = inst_15825__$1);

return statearr_15868;
})();
var statearr_15869_15888 = state_15853__$1;
(statearr_15869_15888[(2)] = null);

(statearr_15869_15888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___15878,out))
;
return ((function (switch__7127__auto__,c__7189__auto___15878,out){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_15873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15873[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_15873[(1)] = (1));

return statearr_15873;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_15853){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_15853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e15874){if((e15874 instanceof Object)){
var ex__7131__auto__ = e15874;
var statearr_15875_15889 = state_15853;
(statearr_15875_15889[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15890 = state_15853;
state_15853 = G__15890;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_15853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_15853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___15878,out))
})();
var state__7191__auto__ = (function (){var statearr_15876 = f__7190__auto__.call(null);
(statearr_15876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___15878);

return statearr_15876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___15878,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__15892 = arguments.length;
switch (G__15892) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7189__auto___15940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___15940,out){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___15940,out){
return (function (state_15916){
var state_val_15917 = (state_15916[(1)]);
if((state_val_15917 === (7))){
var inst_15898 = (state_15916[(7)]);
var inst_15898__$1 = (state_15916[(2)]);
var inst_15899 = (inst_15898__$1 == null);
var inst_15900 = cljs.core.not.call(null,inst_15899);
var state_15916__$1 = (function (){var statearr_15918 = state_15916;
(statearr_15918[(7)] = inst_15898__$1);

return statearr_15918;
})();
if(inst_15900){
var statearr_15919_15941 = state_15916__$1;
(statearr_15919_15941[(1)] = (8));

} else {
var statearr_15920_15942 = state_15916__$1;
(statearr_15920_15942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (1))){
var inst_15893 = (0);
var state_15916__$1 = (function (){var statearr_15921 = state_15916;
(statearr_15921[(8)] = inst_15893);

return statearr_15921;
})();
var statearr_15922_15943 = state_15916__$1;
(statearr_15922_15943[(2)] = null);

(statearr_15922_15943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (4))){
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15916__$1,(7),ch);
} else {
if((state_val_15917 === (6))){
var inst_15911 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15923_15944 = state_15916__$1;
(statearr_15923_15944[(2)] = inst_15911);

(statearr_15923_15944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (3))){
var inst_15913 = (state_15916[(2)]);
var inst_15914 = cljs.core.async.close_BANG_.call(null,out);
var state_15916__$1 = (function (){var statearr_15924 = state_15916;
(statearr_15924[(9)] = inst_15913);

return statearr_15924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15916__$1,inst_15914);
} else {
if((state_val_15917 === (2))){
var inst_15893 = (state_15916[(8)]);
var inst_15895 = (inst_15893 < n);
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15895)){
var statearr_15925_15945 = state_15916__$1;
(statearr_15925_15945[(1)] = (4));

} else {
var statearr_15926_15946 = state_15916__$1;
(statearr_15926_15946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (11))){
var inst_15893 = (state_15916[(8)]);
var inst_15903 = (state_15916[(2)]);
var inst_15904 = (inst_15893 + (1));
var inst_15893__$1 = inst_15904;
var state_15916__$1 = (function (){var statearr_15927 = state_15916;
(statearr_15927[(8)] = inst_15893__$1);

(statearr_15927[(10)] = inst_15903);

return statearr_15927;
})();
var statearr_15928_15947 = state_15916__$1;
(statearr_15928_15947[(2)] = null);

(statearr_15928_15947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (9))){
var state_15916__$1 = state_15916;
var statearr_15929_15948 = state_15916__$1;
(statearr_15929_15948[(2)] = null);

(statearr_15929_15948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (5))){
var state_15916__$1 = state_15916;
var statearr_15930_15949 = state_15916__$1;
(statearr_15930_15949[(2)] = null);

(statearr_15930_15949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (10))){
var inst_15908 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15931_15950 = state_15916__$1;
(statearr_15931_15950[(2)] = inst_15908);

(statearr_15931_15950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (8))){
var inst_15898 = (state_15916[(7)]);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15916__$1,(11),out,inst_15898);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___15940,out))
;
return ((function (switch__7127__auto__,c__7189__auto___15940,out){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_15935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15935[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_15935[(1)] = (1));

return statearr_15935;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_15916){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_15916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e15936){if((e15936 instanceof Object)){
var ex__7131__auto__ = e15936;
var statearr_15937_15951 = state_15916;
(statearr_15937_15951[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15952 = state_15916;
state_15916 = G__15952;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_15916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_15916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___15940,out))
})();
var state__7191__auto__ = (function (){var statearr_15938 = f__7190__auto__.call(null);
(statearr_15938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___15940);

return statearr_15938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___15940,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15960 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15960 = (function (ch,f,map_LT_,meta15961){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15961 = meta15961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15963 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15963 = (function (fn1,_,meta15961,map_LT_,f,ch,meta15964){
this.fn1 = fn1;
this._ = _;
this.meta15961 = meta15961;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15964 = meta15964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15963.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15953_SHARP_){
return f1.call(null,(((p1__15953_SHARP_ == null))?null:self__.f.call(null,p1__15953_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15965){
var self__ = this;
var _15965__$1 = this;
return self__.meta15964;
});})(___$1))
;

cljs.core.async.t15963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15965,meta15964__$1){
var self__ = this;
var _15965__$1 = this;
return (new cljs.core.async.t15963(self__.fn1,self__._,self__.meta15961,self__.map_LT_,self__.f,self__.ch,meta15964__$1));
});})(___$1))
;

cljs.core.async.t15963.cljs$lang$type = true;

cljs.core.async.t15963.cljs$lang$ctorStr = "cljs.core.async/t15963";

cljs.core.async.t15963.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t15963");
});})(___$1))
;

cljs.core.async.__GT_t15963 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15963(fn1__$1,___$2,meta15961__$1,map_LT___$1,f__$1,ch__$1,meta15964){
return (new cljs.core.async.t15963(fn1__$1,___$2,meta15961__$1,map_LT___$1,f__$1,ch__$1,meta15964));
});})(___$1))
;

}

return (new cljs.core.async.t15963(fn1,___$1,self__.meta15961,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4811__auto__ = ret;
if(cljs.core.truth_(and__4811__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4811__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15960.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15962){
var self__ = this;
var _15962__$1 = this;
return self__.meta15961;
});

cljs.core.async.t15960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15962,meta15961__$1){
var self__ = this;
var _15962__$1 = this;
return (new cljs.core.async.t15960(self__.ch,self__.f,self__.map_LT_,meta15961__$1));
});

cljs.core.async.t15960.cljs$lang$type = true;

cljs.core.async.t15960.cljs$lang$ctorStr = "cljs.core.async/t15960";

cljs.core.async.t15960.cljs$lang$ctorPrWriter = (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t15960");
});

cljs.core.async.__GT_t15960 = (function cljs$core$async$map_LT__$___GT_t15960(ch__$1,f__$1,map_LT___$1,meta15961){
return (new cljs.core.async.t15960(ch__$1,f__$1,map_LT___$1,meta15961));
});

}

return (new cljs.core.async.t15960(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15969 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15969 = (function (ch,f,map_GT_,meta15970){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15970 = meta15970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15969.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15971){
var self__ = this;
var _15971__$1 = this;
return self__.meta15970;
});

cljs.core.async.t15969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15971,meta15970__$1){
var self__ = this;
var _15971__$1 = this;
return (new cljs.core.async.t15969(self__.ch,self__.f,self__.map_GT_,meta15970__$1));
});

cljs.core.async.t15969.cljs$lang$type = true;

cljs.core.async.t15969.cljs$lang$ctorStr = "cljs.core.async/t15969";

cljs.core.async.t15969.cljs$lang$ctorPrWriter = (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t15969");
});

cljs.core.async.__GT_t15969 = (function cljs$core$async$map_GT__$___GT_t15969(ch__$1,f__$1,map_GT___$1,meta15970){
return (new cljs.core.async.t15969(ch__$1,f__$1,map_GT___$1,meta15970));
});

}

return (new cljs.core.async.t15969(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15975 = (function (ch,p,filter_GT_,meta15976){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15976 = meta15976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15975.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15975.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15975.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15975.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15977){
var self__ = this;
var _15977__$1 = this;
return self__.meta15976;
});

cljs.core.async.t15975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15977,meta15976__$1){
var self__ = this;
var _15977__$1 = this;
return (new cljs.core.async.t15975(self__.ch,self__.p,self__.filter_GT_,meta15976__$1));
});

cljs.core.async.t15975.cljs$lang$type = true;

cljs.core.async.t15975.cljs$lang$ctorStr = "cljs.core.async/t15975";

cljs.core.async.t15975.cljs$lang$ctorPrWriter = (function (this__5402__auto__,writer__5403__auto__,opt__5404__auto__){
return cljs.core._write.call(null,writer__5403__auto__,"cljs.core.async/t15975");
});

cljs.core.async.__GT_t15975 = (function cljs$core$async$filter_GT__$___GT_t15975(ch__$1,p__$1,filter_GT___$1,meta15976){
return (new cljs.core.async.t15975(ch__$1,p__$1,filter_GT___$1,meta15976));
});

}

return (new cljs.core.async.t15975(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__15979 = arguments.length;
switch (G__15979) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7189__auto___16022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___16022,out){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___16022,out){
return (function (state_16000){
var state_val_16001 = (state_16000[(1)]);
if((state_val_16001 === (7))){
var inst_15996 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16002_16023 = state_16000__$1;
(statearr_16002_16023[(2)] = inst_15996);

(statearr_16002_16023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (1))){
var state_16000__$1 = state_16000;
var statearr_16003_16024 = state_16000__$1;
(statearr_16003_16024[(2)] = null);

(statearr_16003_16024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (4))){
var inst_15982 = (state_16000[(7)]);
var inst_15982__$1 = (state_16000[(2)]);
var inst_15983 = (inst_15982__$1 == null);
var state_16000__$1 = (function (){var statearr_16004 = state_16000;
(statearr_16004[(7)] = inst_15982__$1);

return statearr_16004;
})();
if(cljs.core.truth_(inst_15983)){
var statearr_16005_16025 = state_16000__$1;
(statearr_16005_16025[(1)] = (5));

} else {
var statearr_16006_16026 = state_16000__$1;
(statearr_16006_16026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (6))){
var inst_15982 = (state_16000[(7)]);
var inst_15987 = p.call(null,inst_15982);
var state_16000__$1 = state_16000;
if(cljs.core.truth_(inst_15987)){
var statearr_16007_16027 = state_16000__$1;
(statearr_16007_16027[(1)] = (8));

} else {
var statearr_16008_16028 = state_16000__$1;
(statearr_16008_16028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (3))){
var inst_15998 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16000__$1,inst_15998);
} else {
if((state_val_16001 === (2))){
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16000__$1,(4),ch);
} else {
if((state_val_16001 === (11))){
var inst_15990 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16009_16029 = state_16000__$1;
(statearr_16009_16029[(2)] = inst_15990);

(statearr_16009_16029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (9))){
var state_16000__$1 = state_16000;
var statearr_16010_16030 = state_16000__$1;
(statearr_16010_16030[(2)] = null);

(statearr_16010_16030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (5))){
var inst_15985 = cljs.core.async.close_BANG_.call(null,out);
var state_16000__$1 = state_16000;
var statearr_16011_16031 = state_16000__$1;
(statearr_16011_16031[(2)] = inst_15985);

(statearr_16011_16031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (10))){
var inst_15993 = (state_16000[(2)]);
var state_16000__$1 = (function (){var statearr_16012 = state_16000;
(statearr_16012[(8)] = inst_15993);

return statearr_16012;
})();
var statearr_16013_16032 = state_16000__$1;
(statearr_16013_16032[(2)] = null);

(statearr_16013_16032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (8))){
var inst_15982 = (state_16000[(7)]);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16000__$1,(11),out,inst_15982);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___16022,out))
;
return ((function (switch__7127__auto__,c__7189__auto___16022,out){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_16017 = [null,null,null,null,null,null,null,null,null];
(statearr_16017[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_16017[(1)] = (1));

return statearr_16017;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_16000){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_16000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e16018){if((e16018 instanceof Object)){
var ex__7131__auto__ = e16018;
var statearr_16019_16033 = state_16000;
(statearr_16019_16033[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16034 = state_16000;
state_16000 = G__16034;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_16000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_16000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___16022,out))
})();
var state__7191__auto__ = (function (){var statearr_16020 = f__7190__auto__.call(null);
(statearr_16020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___16022);

return statearr_16020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___16022,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__16036 = arguments.length;
switch (G__16036) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7189__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto__){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto__){
return (function (state_16203){
var state_val_16204 = (state_16203[(1)]);
if((state_val_16204 === (7))){
var inst_16199 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16205_16246 = state_16203__$1;
(statearr_16205_16246[(2)] = inst_16199);

(statearr_16205_16246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (20))){
var inst_16169 = (state_16203[(7)]);
var inst_16180 = (state_16203[(2)]);
var inst_16181 = cljs.core.next.call(null,inst_16169);
var inst_16155 = inst_16181;
var inst_16156 = null;
var inst_16157 = (0);
var inst_16158 = (0);
var state_16203__$1 = (function (){var statearr_16206 = state_16203;
(statearr_16206[(8)] = inst_16155);

(statearr_16206[(9)] = inst_16156);

(statearr_16206[(10)] = inst_16180);

(statearr_16206[(11)] = inst_16158);

(statearr_16206[(12)] = inst_16157);

return statearr_16206;
})();
var statearr_16207_16247 = state_16203__$1;
(statearr_16207_16247[(2)] = null);

(statearr_16207_16247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (1))){
var state_16203__$1 = state_16203;
var statearr_16208_16248 = state_16203__$1;
(statearr_16208_16248[(2)] = null);

(statearr_16208_16248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (4))){
var inst_16144 = (state_16203[(13)]);
var inst_16144__$1 = (state_16203[(2)]);
var inst_16145 = (inst_16144__$1 == null);
var state_16203__$1 = (function (){var statearr_16209 = state_16203;
(statearr_16209[(13)] = inst_16144__$1);

return statearr_16209;
})();
if(cljs.core.truth_(inst_16145)){
var statearr_16210_16249 = state_16203__$1;
(statearr_16210_16249[(1)] = (5));

} else {
var statearr_16211_16250 = state_16203__$1;
(statearr_16211_16250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (15))){
var state_16203__$1 = state_16203;
var statearr_16215_16251 = state_16203__$1;
(statearr_16215_16251[(2)] = null);

(statearr_16215_16251[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (21))){
var state_16203__$1 = state_16203;
var statearr_16216_16252 = state_16203__$1;
(statearr_16216_16252[(2)] = null);

(statearr_16216_16252[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (13))){
var inst_16155 = (state_16203[(8)]);
var inst_16156 = (state_16203[(9)]);
var inst_16158 = (state_16203[(11)]);
var inst_16157 = (state_16203[(12)]);
var inst_16165 = (state_16203[(2)]);
var inst_16166 = (inst_16158 + (1));
var tmp16212 = inst_16155;
var tmp16213 = inst_16156;
var tmp16214 = inst_16157;
var inst_16155__$1 = tmp16212;
var inst_16156__$1 = tmp16213;
var inst_16157__$1 = tmp16214;
var inst_16158__$1 = inst_16166;
var state_16203__$1 = (function (){var statearr_16217 = state_16203;
(statearr_16217[(8)] = inst_16155__$1);

(statearr_16217[(9)] = inst_16156__$1);

(statearr_16217[(11)] = inst_16158__$1);

(statearr_16217[(12)] = inst_16157__$1);

(statearr_16217[(14)] = inst_16165);

return statearr_16217;
})();
var statearr_16218_16253 = state_16203__$1;
(statearr_16218_16253[(2)] = null);

(statearr_16218_16253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (22))){
var state_16203__$1 = state_16203;
var statearr_16219_16254 = state_16203__$1;
(statearr_16219_16254[(2)] = null);

(statearr_16219_16254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (6))){
var inst_16144 = (state_16203[(13)]);
var inst_16153 = f.call(null,inst_16144);
var inst_16154 = cljs.core.seq.call(null,inst_16153);
var inst_16155 = inst_16154;
var inst_16156 = null;
var inst_16157 = (0);
var inst_16158 = (0);
var state_16203__$1 = (function (){var statearr_16220 = state_16203;
(statearr_16220[(8)] = inst_16155);

(statearr_16220[(9)] = inst_16156);

(statearr_16220[(11)] = inst_16158);

(statearr_16220[(12)] = inst_16157);

return statearr_16220;
})();
var statearr_16221_16255 = state_16203__$1;
(statearr_16221_16255[(2)] = null);

(statearr_16221_16255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (17))){
var inst_16169 = (state_16203[(7)]);
var inst_16173 = cljs.core.chunk_first.call(null,inst_16169);
var inst_16174 = cljs.core.chunk_rest.call(null,inst_16169);
var inst_16175 = cljs.core.count.call(null,inst_16173);
var inst_16155 = inst_16174;
var inst_16156 = inst_16173;
var inst_16157 = inst_16175;
var inst_16158 = (0);
var state_16203__$1 = (function (){var statearr_16222 = state_16203;
(statearr_16222[(8)] = inst_16155);

(statearr_16222[(9)] = inst_16156);

(statearr_16222[(11)] = inst_16158);

(statearr_16222[(12)] = inst_16157);

return statearr_16222;
})();
var statearr_16223_16256 = state_16203__$1;
(statearr_16223_16256[(2)] = null);

(statearr_16223_16256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (3))){
var inst_16201 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16203__$1,inst_16201);
} else {
if((state_val_16204 === (12))){
var inst_16189 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16224_16257 = state_16203__$1;
(statearr_16224_16257[(2)] = inst_16189);

(statearr_16224_16257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (2))){
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16203__$1,(4),in$);
} else {
if((state_val_16204 === (23))){
var inst_16197 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16225_16258 = state_16203__$1;
(statearr_16225_16258[(2)] = inst_16197);

(statearr_16225_16258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (19))){
var inst_16184 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16226_16259 = state_16203__$1;
(statearr_16226_16259[(2)] = inst_16184);

(statearr_16226_16259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (11))){
var inst_16155 = (state_16203[(8)]);
var inst_16169 = (state_16203[(7)]);
var inst_16169__$1 = cljs.core.seq.call(null,inst_16155);
var state_16203__$1 = (function (){var statearr_16227 = state_16203;
(statearr_16227[(7)] = inst_16169__$1);

return statearr_16227;
})();
if(inst_16169__$1){
var statearr_16228_16260 = state_16203__$1;
(statearr_16228_16260[(1)] = (14));

} else {
var statearr_16229_16261 = state_16203__$1;
(statearr_16229_16261[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (9))){
var inst_16191 = (state_16203[(2)]);
var inst_16192 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16203__$1 = (function (){var statearr_16230 = state_16203;
(statearr_16230[(15)] = inst_16191);

return statearr_16230;
})();
if(cljs.core.truth_(inst_16192)){
var statearr_16231_16262 = state_16203__$1;
(statearr_16231_16262[(1)] = (21));

} else {
var statearr_16232_16263 = state_16203__$1;
(statearr_16232_16263[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (5))){
var inst_16147 = cljs.core.async.close_BANG_.call(null,out);
var state_16203__$1 = state_16203;
var statearr_16233_16264 = state_16203__$1;
(statearr_16233_16264[(2)] = inst_16147);

(statearr_16233_16264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (14))){
var inst_16169 = (state_16203[(7)]);
var inst_16171 = cljs.core.chunked_seq_QMARK_.call(null,inst_16169);
var state_16203__$1 = state_16203;
if(inst_16171){
var statearr_16234_16265 = state_16203__$1;
(statearr_16234_16265[(1)] = (17));

} else {
var statearr_16235_16266 = state_16203__$1;
(statearr_16235_16266[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (16))){
var inst_16187 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16236_16267 = state_16203__$1;
(statearr_16236_16267[(2)] = inst_16187);

(statearr_16236_16267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (10))){
var inst_16156 = (state_16203[(9)]);
var inst_16158 = (state_16203[(11)]);
var inst_16163 = cljs.core._nth.call(null,inst_16156,inst_16158);
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16203__$1,(13),out,inst_16163);
} else {
if((state_val_16204 === (18))){
var inst_16169 = (state_16203[(7)]);
var inst_16178 = cljs.core.first.call(null,inst_16169);
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16203__$1,(20),out,inst_16178);
} else {
if((state_val_16204 === (8))){
var inst_16158 = (state_16203[(11)]);
var inst_16157 = (state_16203[(12)]);
var inst_16160 = (inst_16158 < inst_16157);
var inst_16161 = inst_16160;
var state_16203__$1 = state_16203;
if(cljs.core.truth_(inst_16161)){
var statearr_16237_16268 = state_16203__$1;
(statearr_16237_16268[(1)] = (10));

} else {
var statearr_16238_16269 = state_16203__$1;
(statearr_16238_16269[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto__))
;
return ((function (switch__7127__auto__,c__7189__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7128__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7128__auto____0 = (function (){
var statearr_16242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16242[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7128__auto__);

(statearr_16242[(1)] = (1));

return statearr_16242;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7128__auto____1 = (function (state_16203){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_16203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e16243){if((e16243 instanceof Object)){
var ex__7131__auto__ = e16243;
var statearr_16244_16270 = state_16203;
(statearr_16244_16270[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16271 = state_16203;
state_16203 = G__16271;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7128__auto__ = function(state_16203){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7128__auto____1.call(this,state_16203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7128__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7128__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto__))
})();
var state__7191__auto__ = (function (){var statearr_16245 = f__7190__auto__.call(null);
(statearr_16245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto__);

return statearr_16245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto__))
);

return c__7189__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__16273 = arguments.length;
switch (G__16273) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__16276 = arguments.length;
switch (G__16276) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__16279 = arguments.length;
switch (G__16279) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7189__auto___16329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___16329,out){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___16329,out){
return (function (state_16303){
var state_val_16304 = (state_16303[(1)]);
if((state_val_16304 === (7))){
var inst_16298 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16305_16330 = state_16303__$1;
(statearr_16305_16330[(2)] = inst_16298);

(statearr_16305_16330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (1))){
var inst_16280 = null;
var state_16303__$1 = (function (){var statearr_16306 = state_16303;
(statearr_16306[(7)] = inst_16280);

return statearr_16306;
})();
var statearr_16307_16331 = state_16303__$1;
(statearr_16307_16331[(2)] = null);

(statearr_16307_16331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (4))){
var inst_16283 = (state_16303[(8)]);
var inst_16283__$1 = (state_16303[(2)]);
var inst_16284 = (inst_16283__$1 == null);
var inst_16285 = cljs.core.not.call(null,inst_16284);
var state_16303__$1 = (function (){var statearr_16308 = state_16303;
(statearr_16308[(8)] = inst_16283__$1);

return statearr_16308;
})();
if(inst_16285){
var statearr_16309_16332 = state_16303__$1;
(statearr_16309_16332[(1)] = (5));

} else {
var statearr_16310_16333 = state_16303__$1;
(statearr_16310_16333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (6))){
var state_16303__$1 = state_16303;
var statearr_16311_16334 = state_16303__$1;
(statearr_16311_16334[(2)] = null);

(statearr_16311_16334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (3))){
var inst_16300 = (state_16303[(2)]);
var inst_16301 = cljs.core.async.close_BANG_.call(null,out);
var state_16303__$1 = (function (){var statearr_16312 = state_16303;
(statearr_16312[(9)] = inst_16300);

return statearr_16312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16303__$1,inst_16301);
} else {
if((state_val_16304 === (2))){
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16303__$1,(4),ch);
} else {
if((state_val_16304 === (11))){
var inst_16283 = (state_16303[(8)]);
var inst_16292 = (state_16303[(2)]);
var inst_16280 = inst_16283;
var state_16303__$1 = (function (){var statearr_16313 = state_16303;
(statearr_16313[(7)] = inst_16280);

(statearr_16313[(10)] = inst_16292);

return statearr_16313;
})();
var statearr_16314_16335 = state_16303__$1;
(statearr_16314_16335[(2)] = null);

(statearr_16314_16335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (9))){
var inst_16283 = (state_16303[(8)]);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16303__$1,(11),out,inst_16283);
} else {
if((state_val_16304 === (5))){
var inst_16283 = (state_16303[(8)]);
var inst_16280 = (state_16303[(7)]);
var inst_16287 = cljs.core._EQ_.call(null,inst_16283,inst_16280);
var state_16303__$1 = state_16303;
if(inst_16287){
var statearr_16316_16336 = state_16303__$1;
(statearr_16316_16336[(1)] = (8));

} else {
var statearr_16317_16337 = state_16303__$1;
(statearr_16317_16337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (10))){
var inst_16295 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16318_16338 = state_16303__$1;
(statearr_16318_16338[(2)] = inst_16295);

(statearr_16318_16338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (8))){
var inst_16280 = (state_16303[(7)]);
var tmp16315 = inst_16280;
var inst_16280__$1 = tmp16315;
var state_16303__$1 = (function (){var statearr_16319 = state_16303;
(statearr_16319[(7)] = inst_16280__$1);

return statearr_16319;
})();
var statearr_16320_16339 = state_16303__$1;
(statearr_16320_16339[(2)] = null);

(statearr_16320_16339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___16329,out))
;
return ((function (switch__7127__auto__,c__7189__auto___16329,out){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_16324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16324[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_16324[(1)] = (1));

return statearr_16324;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_16303){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_16303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e16325){if((e16325 instanceof Object)){
var ex__7131__auto__ = e16325;
var statearr_16326_16340 = state_16303;
(statearr_16326_16340[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16341 = state_16303;
state_16303 = G__16341;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_16303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_16303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___16329,out))
})();
var state__7191__auto__ = (function (){var statearr_16327 = f__7190__auto__.call(null);
(statearr_16327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___16329);

return statearr_16327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___16329,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__16343 = arguments.length;
switch (G__16343) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7189__auto___16412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___16412,out){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___16412,out){
return (function (state_16381){
var state_val_16382 = (state_16381[(1)]);
if((state_val_16382 === (7))){
var inst_16377 = (state_16381[(2)]);
var state_16381__$1 = state_16381;
var statearr_16383_16413 = state_16381__$1;
(statearr_16383_16413[(2)] = inst_16377);

(statearr_16383_16413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (1))){
var inst_16344 = (new Array(n));
var inst_16345 = inst_16344;
var inst_16346 = (0);
var state_16381__$1 = (function (){var statearr_16384 = state_16381;
(statearr_16384[(7)] = inst_16345);

(statearr_16384[(8)] = inst_16346);

return statearr_16384;
})();
var statearr_16385_16414 = state_16381__$1;
(statearr_16385_16414[(2)] = null);

(statearr_16385_16414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (4))){
var inst_16349 = (state_16381[(9)]);
var inst_16349__$1 = (state_16381[(2)]);
var inst_16350 = (inst_16349__$1 == null);
var inst_16351 = cljs.core.not.call(null,inst_16350);
var state_16381__$1 = (function (){var statearr_16386 = state_16381;
(statearr_16386[(9)] = inst_16349__$1);

return statearr_16386;
})();
if(inst_16351){
var statearr_16387_16415 = state_16381__$1;
(statearr_16387_16415[(1)] = (5));

} else {
var statearr_16388_16416 = state_16381__$1;
(statearr_16388_16416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (15))){
var inst_16371 = (state_16381[(2)]);
var state_16381__$1 = state_16381;
var statearr_16389_16417 = state_16381__$1;
(statearr_16389_16417[(2)] = inst_16371);

(statearr_16389_16417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (13))){
var state_16381__$1 = state_16381;
var statearr_16390_16418 = state_16381__$1;
(statearr_16390_16418[(2)] = null);

(statearr_16390_16418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (6))){
var inst_16346 = (state_16381[(8)]);
var inst_16367 = (inst_16346 > (0));
var state_16381__$1 = state_16381;
if(cljs.core.truth_(inst_16367)){
var statearr_16391_16419 = state_16381__$1;
(statearr_16391_16419[(1)] = (12));

} else {
var statearr_16392_16420 = state_16381__$1;
(statearr_16392_16420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (3))){
var inst_16379 = (state_16381[(2)]);
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16381__$1,inst_16379);
} else {
if((state_val_16382 === (12))){
var inst_16345 = (state_16381[(7)]);
var inst_16369 = cljs.core.vec.call(null,inst_16345);
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16381__$1,(15),out,inst_16369);
} else {
if((state_val_16382 === (2))){
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16381__$1,(4),ch);
} else {
if((state_val_16382 === (11))){
var inst_16361 = (state_16381[(2)]);
var inst_16362 = (new Array(n));
var inst_16345 = inst_16362;
var inst_16346 = (0);
var state_16381__$1 = (function (){var statearr_16393 = state_16381;
(statearr_16393[(7)] = inst_16345);

(statearr_16393[(10)] = inst_16361);

(statearr_16393[(8)] = inst_16346);

return statearr_16393;
})();
var statearr_16394_16421 = state_16381__$1;
(statearr_16394_16421[(2)] = null);

(statearr_16394_16421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (9))){
var inst_16345 = (state_16381[(7)]);
var inst_16359 = cljs.core.vec.call(null,inst_16345);
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16381__$1,(11),out,inst_16359);
} else {
if((state_val_16382 === (5))){
var inst_16354 = (state_16381[(11)]);
var inst_16345 = (state_16381[(7)]);
var inst_16349 = (state_16381[(9)]);
var inst_16346 = (state_16381[(8)]);
var inst_16353 = (inst_16345[inst_16346] = inst_16349);
var inst_16354__$1 = (inst_16346 + (1));
var inst_16355 = (inst_16354__$1 < n);
var state_16381__$1 = (function (){var statearr_16395 = state_16381;
(statearr_16395[(11)] = inst_16354__$1);

(statearr_16395[(12)] = inst_16353);

return statearr_16395;
})();
if(cljs.core.truth_(inst_16355)){
var statearr_16396_16422 = state_16381__$1;
(statearr_16396_16422[(1)] = (8));

} else {
var statearr_16397_16423 = state_16381__$1;
(statearr_16397_16423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (14))){
var inst_16374 = (state_16381[(2)]);
var inst_16375 = cljs.core.async.close_BANG_.call(null,out);
var state_16381__$1 = (function (){var statearr_16399 = state_16381;
(statearr_16399[(13)] = inst_16374);

return statearr_16399;
})();
var statearr_16400_16424 = state_16381__$1;
(statearr_16400_16424[(2)] = inst_16375);

(statearr_16400_16424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (10))){
var inst_16365 = (state_16381[(2)]);
var state_16381__$1 = state_16381;
var statearr_16401_16425 = state_16381__$1;
(statearr_16401_16425[(2)] = inst_16365);

(statearr_16401_16425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (8))){
var inst_16354 = (state_16381[(11)]);
var inst_16345 = (state_16381[(7)]);
var tmp16398 = inst_16345;
var inst_16345__$1 = tmp16398;
var inst_16346 = inst_16354;
var state_16381__$1 = (function (){var statearr_16402 = state_16381;
(statearr_16402[(7)] = inst_16345__$1);

(statearr_16402[(8)] = inst_16346);

return statearr_16402;
})();
var statearr_16403_16426 = state_16381__$1;
(statearr_16403_16426[(2)] = null);

(statearr_16403_16426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___16412,out))
;
return ((function (switch__7127__auto__,c__7189__auto___16412,out){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_16407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16407[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_16407[(1)] = (1));

return statearr_16407;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_16381){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_16381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e16408){if((e16408 instanceof Object)){
var ex__7131__auto__ = e16408;
var statearr_16409_16427 = state_16381;
(statearr_16409_16427[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16428 = state_16381;
state_16381 = G__16428;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_16381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_16381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___16412,out))
})();
var state__7191__auto__ = (function (){var statearr_16410 = f__7190__auto__.call(null);
(statearr_16410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___16412);

return statearr_16410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___16412,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__16430 = arguments.length;
switch (G__16430) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7189__auto___16503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7189__auto___16503,out){
return (function (){
var f__7190__auto__ = (function (){var switch__7127__auto__ = ((function (c__7189__auto___16503,out){
return (function (state_16472){
var state_val_16473 = (state_16472[(1)]);
if((state_val_16473 === (7))){
var inst_16468 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16474_16504 = state_16472__$1;
(statearr_16474_16504[(2)] = inst_16468);

(statearr_16474_16504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (1))){
var inst_16431 = [];
var inst_16432 = inst_16431;
var inst_16433 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16472__$1 = (function (){var statearr_16475 = state_16472;
(statearr_16475[(7)] = inst_16433);

(statearr_16475[(8)] = inst_16432);

return statearr_16475;
})();
var statearr_16476_16505 = state_16472__$1;
(statearr_16476_16505[(2)] = null);

(statearr_16476_16505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (4))){
var inst_16436 = (state_16472[(9)]);
var inst_16436__$1 = (state_16472[(2)]);
var inst_16437 = (inst_16436__$1 == null);
var inst_16438 = cljs.core.not.call(null,inst_16437);
var state_16472__$1 = (function (){var statearr_16477 = state_16472;
(statearr_16477[(9)] = inst_16436__$1);

return statearr_16477;
})();
if(inst_16438){
var statearr_16478_16506 = state_16472__$1;
(statearr_16478_16506[(1)] = (5));

} else {
var statearr_16479_16507 = state_16472__$1;
(statearr_16479_16507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (15))){
var inst_16462 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16480_16508 = state_16472__$1;
(statearr_16480_16508[(2)] = inst_16462);

(statearr_16480_16508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (13))){
var state_16472__$1 = state_16472;
var statearr_16481_16509 = state_16472__$1;
(statearr_16481_16509[(2)] = null);

(statearr_16481_16509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (6))){
var inst_16432 = (state_16472[(8)]);
var inst_16457 = inst_16432.length;
var inst_16458 = (inst_16457 > (0));
var state_16472__$1 = state_16472;
if(cljs.core.truth_(inst_16458)){
var statearr_16482_16510 = state_16472__$1;
(statearr_16482_16510[(1)] = (12));

} else {
var statearr_16483_16511 = state_16472__$1;
(statearr_16483_16511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (3))){
var inst_16470 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16472__$1,inst_16470);
} else {
if((state_val_16473 === (12))){
var inst_16432 = (state_16472[(8)]);
var inst_16460 = cljs.core.vec.call(null,inst_16432);
var state_16472__$1 = state_16472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16472__$1,(15),out,inst_16460);
} else {
if((state_val_16473 === (2))){
var state_16472__$1 = state_16472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16472__$1,(4),ch);
} else {
if((state_val_16473 === (11))){
var inst_16440 = (state_16472[(10)]);
var inst_16436 = (state_16472[(9)]);
var inst_16450 = (state_16472[(2)]);
var inst_16451 = [];
var inst_16452 = inst_16451.push(inst_16436);
var inst_16432 = inst_16451;
var inst_16433 = inst_16440;
var state_16472__$1 = (function (){var statearr_16484 = state_16472;
(statearr_16484[(11)] = inst_16452);

(statearr_16484[(7)] = inst_16433);

(statearr_16484[(12)] = inst_16450);

(statearr_16484[(8)] = inst_16432);

return statearr_16484;
})();
var statearr_16485_16512 = state_16472__$1;
(statearr_16485_16512[(2)] = null);

(statearr_16485_16512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (9))){
var inst_16432 = (state_16472[(8)]);
var inst_16448 = cljs.core.vec.call(null,inst_16432);
var state_16472__$1 = state_16472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16472__$1,(11),out,inst_16448);
} else {
if((state_val_16473 === (5))){
var inst_16433 = (state_16472[(7)]);
var inst_16440 = (state_16472[(10)]);
var inst_16436 = (state_16472[(9)]);
var inst_16440__$1 = f.call(null,inst_16436);
var inst_16441 = cljs.core._EQ_.call(null,inst_16440__$1,inst_16433);
var inst_16442 = cljs.core.keyword_identical_QMARK_.call(null,inst_16433,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16443 = (inst_16441) || (inst_16442);
var state_16472__$1 = (function (){var statearr_16486 = state_16472;
(statearr_16486[(10)] = inst_16440__$1);

return statearr_16486;
})();
if(cljs.core.truth_(inst_16443)){
var statearr_16487_16513 = state_16472__$1;
(statearr_16487_16513[(1)] = (8));

} else {
var statearr_16488_16514 = state_16472__$1;
(statearr_16488_16514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (14))){
var inst_16465 = (state_16472[(2)]);
var inst_16466 = cljs.core.async.close_BANG_.call(null,out);
var state_16472__$1 = (function (){var statearr_16490 = state_16472;
(statearr_16490[(13)] = inst_16465);

return statearr_16490;
})();
var statearr_16491_16515 = state_16472__$1;
(statearr_16491_16515[(2)] = inst_16466);

(statearr_16491_16515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (10))){
var inst_16455 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16492_16516 = state_16472__$1;
(statearr_16492_16516[(2)] = inst_16455);

(statearr_16492_16516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16473 === (8))){
var inst_16440 = (state_16472[(10)]);
var inst_16432 = (state_16472[(8)]);
var inst_16436 = (state_16472[(9)]);
var inst_16445 = inst_16432.push(inst_16436);
var tmp16489 = inst_16432;
var inst_16432__$1 = tmp16489;
var inst_16433 = inst_16440;
var state_16472__$1 = (function (){var statearr_16493 = state_16472;
(statearr_16493[(7)] = inst_16433);

(statearr_16493[(14)] = inst_16445);

(statearr_16493[(8)] = inst_16432__$1);

return statearr_16493;
})();
var statearr_16494_16517 = state_16472__$1;
(statearr_16494_16517[(2)] = null);

(statearr_16494_16517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7189__auto___16503,out))
;
return ((function (switch__7127__auto__,c__7189__auto___16503,out){
return (function() {
var cljs$core$async$state_machine__7128__auto__ = null;
var cljs$core$async$state_machine__7128__auto____0 = (function (){
var statearr_16498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16498[(0)] = cljs$core$async$state_machine__7128__auto__);

(statearr_16498[(1)] = (1));

return statearr_16498;
});
var cljs$core$async$state_machine__7128__auto____1 = (function (state_16472){
while(true){
var ret_value__7129__auto__ = (function (){try{while(true){
var result__7130__auto__ = switch__7127__auto__.call(null,state_16472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7130__auto__;
}
break;
}
}catch (e16499){if((e16499 instanceof Object)){
var ex__7131__auto__ = e16499;
var statearr_16500_16518 = state_16472;
(statearr_16500_16518[(5)] = ex__7131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16519 = state_16472;
state_16472 = G__16519;
continue;
} else {
return ret_value__7129__auto__;
}
break;
}
});
cljs$core$async$state_machine__7128__auto__ = function(state_16472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7128__auto____1.call(this,state_16472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7128__auto____0;
cljs$core$async$state_machine__7128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7128__auto____1;
return cljs$core$async$state_machine__7128__auto__;
})()
;})(switch__7127__auto__,c__7189__auto___16503,out))
})();
var state__7191__auto__ = (function (){var statearr_16501 = f__7190__auto__.call(null);
(statearr_16501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7189__auto___16503);

return statearr_16501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7191__auto__);
});})(c__7189__auto___16503,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map