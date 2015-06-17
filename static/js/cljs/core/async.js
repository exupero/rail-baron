// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t9012 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9012 = (function (f,fn_handler,meta9013){
this.f = f;
this.fn_handler = fn_handler;
this.meta9013 = meta9013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9012.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9014){
var self__ = this;
var _9014__$1 = this;
return self__.meta9013;
});

cljs.core.async.t9012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9014,meta9013__$1){
var self__ = this;
var _9014__$1 = this;
return (new cljs.core.async.t9012(self__.f,self__.fn_handler,meta9013__$1));
});

cljs.core.async.t9012.cljs$lang$type = true;

cljs.core.async.t9012.cljs$lang$ctorStr = "cljs.core.async/t9012";

cljs.core.async.t9012.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t9012");
});

cljs.core.async.__GT_t9012 = (function cljs$core$async$fn_handler_$___GT_t9012(f__$1,fn_handler__$1,meta9013){
return (new cljs.core.async.t9012(f__$1,fn_handler__$1,meta9013));
});

}

return (new cljs.core.async.t9012(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9016 = buff;
if(G__9016){
var bit__4856__auto__ = null;
if(cljs.core.truth_((function (){var or__4182__auto__ = bit__4856__auto__;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return G__9016.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9016.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9016);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9016);
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
var G__9018 = arguments.length;
switch (G__9018) {
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
var G__9021 = arguments.length;
switch (G__9021) {
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
var val_9023 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9023);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9023,ret){
return (function (){
return fn1.call(null,val_9023);
});})(val_9023,ret))
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
var G__9025 = arguments.length;
switch (G__9025) {
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
var n__5067__auto___9027 = n;
var x_9028 = (0);
while(true){
if((x_9028 < n__5067__auto___9027)){
(a[x_9028] = (0));

var G__9029 = (x_9028 + (1));
x_9028 = G__9029;
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

var G__9030 = (i + (1));
i = G__9030;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9034 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9034 = (function (flag,alt_flag,meta9035){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9035 = meta9035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9034.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9036){
var self__ = this;
var _9036__$1 = this;
return self__.meta9035;
});})(flag))
;

cljs.core.async.t9034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9036,meta9035__$1){
var self__ = this;
var _9036__$1 = this;
return (new cljs.core.async.t9034(self__.flag,self__.alt_flag,meta9035__$1));
});})(flag))
;

cljs.core.async.t9034.cljs$lang$type = true;

cljs.core.async.t9034.cljs$lang$ctorStr = "cljs.core.async/t9034";

cljs.core.async.t9034.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t9034");
});})(flag))
;

cljs.core.async.__GT_t9034 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t9034(flag__$1,alt_flag__$1,meta9035){
return (new cljs.core.async.t9034(flag__$1,alt_flag__$1,meta9035));
});})(flag))
;

}

return (new cljs.core.async.t9034(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t9040 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9040 = (function (cb,flag,alt_handler,meta9041){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9041 = meta9041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9040.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9042){
var self__ = this;
var _9042__$1 = this;
return self__.meta9041;
});

cljs.core.async.t9040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9042,meta9041__$1){
var self__ = this;
var _9042__$1 = this;
return (new cljs.core.async.t9040(self__.cb,self__.flag,self__.alt_handler,meta9041__$1));
});

cljs.core.async.t9040.cljs$lang$type = true;

cljs.core.async.t9040.cljs$lang$ctorStr = "cljs.core.async/t9040";

cljs.core.async.t9040.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t9040");
});

cljs.core.async.__GT_t9040 = (function cljs$core$async$alt_handler_$___GT_t9040(cb__$1,flag__$1,alt_handler__$1,meta9041){
return (new cljs.core.async.t9040(cb__$1,flag__$1,alt_handler__$1,meta9041));
});

}

return (new cljs.core.async.t9040(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9043_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9043_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9044_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9044_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4182__auto__ = wport;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9045 = (i + (1));
i = G__9045;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4182__auto__ = ret;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4170__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4170__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4170__auto__;
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
var argseq__5218__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5218__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9048){
var map__9049 = p__9048;
var map__9049__$1 = ((cljs.core.seq_QMARK_.call(null,map__9049))?cljs.core.apply.call(null,cljs.core.hash_map,map__9049):map__9049);
var opts = map__9049__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9046){
var G__9047 = cljs.core.first.call(null,seq9046);
var seq9046__$1 = cljs.core.next.call(null,seq9046);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9047,seq9046__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__9051 = arguments.length;
switch (G__9051) {
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
var c__6540__auto___9100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___9100){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___9100){
return (function (state_9075){
var state_val_9076 = (state_9075[(1)]);
if((state_val_9076 === (7))){
var inst_9071 = (state_9075[(2)]);
var state_9075__$1 = state_9075;
var statearr_9077_9101 = state_9075__$1;
(statearr_9077_9101[(2)] = inst_9071);

(statearr_9077_9101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (1))){
var state_9075__$1 = state_9075;
var statearr_9078_9102 = state_9075__$1;
(statearr_9078_9102[(2)] = null);

(statearr_9078_9102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (4))){
var inst_9054 = (state_9075[(7)]);
var inst_9054__$1 = (state_9075[(2)]);
var inst_9055 = (inst_9054__$1 == null);
var state_9075__$1 = (function (){var statearr_9079 = state_9075;
(statearr_9079[(7)] = inst_9054__$1);

return statearr_9079;
})();
if(cljs.core.truth_(inst_9055)){
var statearr_9080_9103 = state_9075__$1;
(statearr_9080_9103[(1)] = (5));

} else {
var statearr_9081_9104 = state_9075__$1;
(statearr_9081_9104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (13))){
var state_9075__$1 = state_9075;
var statearr_9082_9105 = state_9075__$1;
(statearr_9082_9105[(2)] = null);

(statearr_9082_9105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (6))){
var inst_9054 = (state_9075[(7)]);
var state_9075__$1 = state_9075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9075__$1,(11),to,inst_9054);
} else {
if((state_val_9076 === (3))){
var inst_9073 = (state_9075[(2)]);
var state_9075__$1 = state_9075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9075__$1,inst_9073);
} else {
if((state_val_9076 === (12))){
var state_9075__$1 = state_9075;
var statearr_9083_9106 = state_9075__$1;
(statearr_9083_9106[(2)] = null);

(statearr_9083_9106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (2))){
var state_9075__$1 = state_9075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9075__$1,(4),from);
} else {
if((state_val_9076 === (11))){
var inst_9064 = (state_9075[(2)]);
var state_9075__$1 = state_9075;
if(cljs.core.truth_(inst_9064)){
var statearr_9084_9107 = state_9075__$1;
(statearr_9084_9107[(1)] = (12));

} else {
var statearr_9085_9108 = state_9075__$1;
(statearr_9085_9108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (9))){
var state_9075__$1 = state_9075;
var statearr_9086_9109 = state_9075__$1;
(statearr_9086_9109[(2)] = null);

(statearr_9086_9109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (5))){
var state_9075__$1 = state_9075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9087_9110 = state_9075__$1;
(statearr_9087_9110[(1)] = (8));

} else {
var statearr_9088_9111 = state_9075__$1;
(statearr_9088_9111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (14))){
var inst_9069 = (state_9075[(2)]);
var state_9075__$1 = state_9075;
var statearr_9089_9112 = state_9075__$1;
(statearr_9089_9112[(2)] = inst_9069);

(statearr_9089_9112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (10))){
var inst_9061 = (state_9075[(2)]);
var state_9075__$1 = state_9075;
var statearr_9090_9113 = state_9075__$1;
(statearr_9090_9113[(2)] = inst_9061);

(statearr_9090_9113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9076 === (8))){
var inst_9058 = cljs.core.async.close_BANG_.call(null,to);
var state_9075__$1 = state_9075;
var statearr_9091_9114 = state_9075__$1;
(statearr_9091_9114[(2)] = inst_9058);

(statearr_9091_9114[(1)] = (10));


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
});})(c__6540__auto___9100))
;
return ((function (switch__6478__auto__,c__6540__auto___9100){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_9095 = [null,null,null,null,null,null,null,null];
(statearr_9095[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_9095[(1)] = (1));

return statearr_9095;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_9075){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9096){if((e9096 instanceof Object)){
var ex__6482__auto__ = e9096;
var statearr_9097_9115 = state_9075;
(statearr_9097_9115[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9116 = state_9075;
state_9075 = G__9116;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_9075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_9075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___9100))
})();
var state__6542__auto__ = (function (){var statearr_9098 = f__6541__auto__.call(null);
(statearr_9098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___9100);

return statearr_9098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___9100))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9300){
var vec__9301 = p__9300;
var v = cljs.core.nth.call(null,vec__9301,(0),null);
var p = cljs.core.nth.call(null,vec__9301,(1),null);
var job = vec__9301;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6540__auto___9483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___9483,res,vec__9301,v,p,job,jobs,results){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___9483,res,vec__9301,v,p,job,jobs,results){
return (function (state_9306){
var state_val_9307 = (state_9306[(1)]);
if((state_val_9307 === (2))){
var inst_9303 = (state_9306[(2)]);
var inst_9304 = cljs.core.async.close_BANG_.call(null,res);
var state_9306__$1 = (function (){var statearr_9308 = state_9306;
(statearr_9308[(7)] = inst_9303);

return statearr_9308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9306__$1,inst_9304);
} else {
if((state_val_9307 === (1))){
var state_9306__$1 = state_9306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9306__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6540__auto___9483,res,vec__9301,v,p,job,jobs,results))
;
return ((function (switch__6478__auto__,c__6540__auto___9483,res,vec__9301,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_9312 = [null,null,null,null,null,null,null,null];
(statearr_9312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_9312[(1)] = (1));

return statearr_9312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_9306){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9313){if((e9313 instanceof Object)){
var ex__6482__auto__ = e9313;
var statearr_9314_9484 = state_9306;
(statearr_9314_9484[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9485 = state_9306;
state_9306 = G__9485;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_9306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_9306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___9483,res,vec__9301,v,p,job,jobs,results))
})();
var state__6542__auto__ = (function (){var statearr_9315 = f__6541__auto__.call(null);
(statearr_9315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___9483);

return statearr_9315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___9483,res,vec__9301,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9316){
var vec__9317 = p__9316;
var v = cljs.core.nth.call(null,vec__9317,(0),null);
var p = cljs.core.nth.call(null,vec__9317,(1),null);
var job = vec__9317;
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
var n__5067__auto___9486 = n;
var __9487 = (0);
while(true){
if((__9487 < n__5067__auto___9486)){
var G__9318_9488 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9318_9488) {
case "async":
var c__6540__auto___9490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9487,c__6540__auto___9490,G__9318_9488,n__5067__auto___9486,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__9487,c__6540__auto___9490,G__9318_9488,n__5067__auto___9486,jobs,results,process,async){
return (function (state_9331){
var state_val_9332 = (state_9331[(1)]);
if((state_val_9332 === (7))){
var inst_9327 = (state_9331[(2)]);
var state_9331__$1 = state_9331;
var statearr_9333_9491 = state_9331__$1;
(statearr_9333_9491[(2)] = inst_9327);

(statearr_9333_9491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (6))){
var state_9331__$1 = state_9331;
var statearr_9334_9492 = state_9331__$1;
(statearr_9334_9492[(2)] = null);

(statearr_9334_9492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (5))){
var state_9331__$1 = state_9331;
var statearr_9335_9493 = state_9331__$1;
(statearr_9335_9493[(2)] = null);

(statearr_9335_9493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (4))){
var inst_9321 = (state_9331[(2)]);
var inst_9322 = async.call(null,inst_9321);
var state_9331__$1 = state_9331;
if(cljs.core.truth_(inst_9322)){
var statearr_9336_9494 = state_9331__$1;
(statearr_9336_9494[(1)] = (5));

} else {
var statearr_9337_9495 = state_9331__$1;
(statearr_9337_9495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9332 === (3))){
var inst_9329 = (state_9331[(2)]);
var state_9331__$1 = state_9331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9331__$1,inst_9329);
} else {
if((state_val_9332 === (2))){
var state_9331__$1 = state_9331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9331__$1,(4),jobs);
} else {
if((state_val_9332 === (1))){
var state_9331__$1 = state_9331;
var statearr_9338_9496 = state_9331__$1;
(statearr_9338_9496[(2)] = null);

(statearr_9338_9496[(1)] = (2));


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
});})(__9487,c__6540__auto___9490,G__9318_9488,n__5067__auto___9486,jobs,results,process,async))
;
return ((function (__9487,switch__6478__auto__,c__6540__auto___9490,G__9318_9488,n__5067__auto___9486,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_9342 = [null,null,null,null,null,null,null];
(statearr_9342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_9342[(1)] = (1));

return statearr_9342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_9331){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9343){if((e9343 instanceof Object)){
var ex__6482__auto__ = e9343;
var statearr_9344_9497 = state_9331;
(statearr_9344_9497[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9498 = state_9331;
state_9331 = G__9498;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_9331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_9331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__9487,switch__6478__auto__,c__6540__auto___9490,G__9318_9488,n__5067__auto___9486,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_9345 = f__6541__auto__.call(null);
(statearr_9345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___9490);

return statearr_9345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__9487,c__6540__auto___9490,G__9318_9488,n__5067__auto___9486,jobs,results,process,async))
);


break;
case "compute":
var c__6540__auto___9499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9487,c__6540__auto___9499,G__9318_9488,n__5067__auto___9486,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__9487,c__6540__auto___9499,G__9318_9488,n__5067__auto___9486,jobs,results,process,async){
return (function (state_9358){
var state_val_9359 = (state_9358[(1)]);
if((state_val_9359 === (7))){
var inst_9354 = (state_9358[(2)]);
var state_9358__$1 = state_9358;
var statearr_9360_9500 = state_9358__$1;
(statearr_9360_9500[(2)] = inst_9354);

(statearr_9360_9500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9359 === (6))){
var state_9358__$1 = state_9358;
var statearr_9361_9501 = state_9358__$1;
(statearr_9361_9501[(2)] = null);

(statearr_9361_9501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9359 === (5))){
var state_9358__$1 = state_9358;
var statearr_9362_9502 = state_9358__$1;
(statearr_9362_9502[(2)] = null);

(statearr_9362_9502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9359 === (4))){
var inst_9348 = (state_9358[(2)]);
var inst_9349 = process.call(null,inst_9348);
var state_9358__$1 = state_9358;
if(cljs.core.truth_(inst_9349)){
var statearr_9363_9503 = state_9358__$1;
(statearr_9363_9503[(1)] = (5));

} else {
var statearr_9364_9504 = state_9358__$1;
(statearr_9364_9504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9359 === (3))){
var inst_9356 = (state_9358[(2)]);
var state_9358__$1 = state_9358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9358__$1,inst_9356);
} else {
if((state_val_9359 === (2))){
var state_9358__$1 = state_9358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9358__$1,(4),jobs);
} else {
if((state_val_9359 === (1))){
var state_9358__$1 = state_9358;
var statearr_9365_9505 = state_9358__$1;
(statearr_9365_9505[(2)] = null);

(statearr_9365_9505[(1)] = (2));


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
});})(__9487,c__6540__auto___9499,G__9318_9488,n__5067__auto___9486,jobs,results,process,async))
;
return ((function (__9487,switch__6478__auto__,c__6540__auto___9499,G__9318_9488,n__5067__auto___9486,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_9369 = [null,null,null,null,null,null,null];
(statearr_9369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_9369[(1)] = (1));

return statearr_9369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_9358){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9370){if((e9370 instanceof Object)){
var ex__6482__auto__ = e9370;
var statearr_9371_9506 = state_9358;
(statearr_9371_9506[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9507 = state_9358;
state_9358 = G__9507;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_9358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_9358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__9487,switch__6478__auto__,c__6540__auto___9499,G__9318_9488,n__5067__auto___9486,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_9372 = f__6541__auto__.call(null);
(statearr_9372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___9499);

return statearr_9372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__9487,c__6540__auto___9499,G__9318_9488,n__5067__auto___9486,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9508 = (__9487 + (1));
__9487 = G__9508;
continue;
} else {
}
break;
}

var c__6540__auto___9509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___9509,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___9509,jobs,results,process,async){
return (function (state_9394){
var state_val_9395 = (state_9394[(1)]);
if((state_val_9395 === (9))){
var inst_9387 = (state_9394[(2)]);
var state_9394__$1 = (function (){var statearr_9396 = state_9394;
(statearr_9396[(7)] = inst_9387);

return statearr_9396;
})();
var statearr_9397_9510 = state_9394__$1;
(statearr_9397_9510[(2)] = null);

(statearr_9397_9510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9395 === (8))){
var inst_9380 = (state_9394[(8)]);
var inst_9385 = (state_9394[(2)]);
var state_9394__$1 = (function (){var statearr_9398 = state_9394;
(statearr_9398[(9)] = inst_9385);

return statearr_9398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9394__$1,(9),results,inst_9380);
} else {
if((state_val_9395 === (7))){
var inst_9390 = (state_9394[(2)]);
var state_9394__$1 = state_9394;
var statearr_9399_9511 = state_9394__$1;
(statearr_9399_9511[(2)] = inst_9390);

(statearr_9399_9511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9395 === (6))){
var inst_9375 = (state_9394[(10)]);
var inst_9380 = (state_9394[(8)]);
var inst_9380__$1 = cljs.core.async.chan.call(null,(1));
var inst_9381 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9382 = [inst_9375,inst_9380__$1];
var inst_9383 = (new cljs.core.PersistentVector(null,2,(5),inst_9381,inst_9382,null));
var state_9394__$1 = (function (){var statearr_9400 = state_9394;
(statearr_9400[(8)] = inst_9380__$1);

return statearr_9400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9394__$1,(8),jobs,inst_9383);
} else {
if((state_val_9395 === (5))){
var inst_9378 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9394__$1 = state_9394;
var statearr_9401_9512 = state_9394__$1;
(statearr_9401_9512[(2)] = inst_9378);

(statearr_9401_9512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9395 === (4))){
var inst_9375 = (state_9394[(10)]);
var inst_9375__$1 = (state_9394[(2)]);
var inst_9376 = (inst_9375__$1 == null);
var state_9394__$1 = (function (){var statearr_9402 = state_9394;
(statearr_9402[(10)] = inst_9375__$1);

return statearr_9402;
})();
if(cljs.core.truth_(inst_9376)){
var statearr_9403_9513 = state_9394__$1;
(statearr_9403_9513[(1)] = (5));

} else {
var statearr_9404_9514 = state_9394__$1;
(statearr_9404_9514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9395 === (3))){
var inst_9392 = (state_9394[(2)]);
var state_9394__$1 = state_9394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9394__$1,inst_9392);
} else {
if((state_val_9395 === (2))){
var state_9394__$1 = state_9394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9394__$1,(4),from);
} else {
if((state_val_9395 === (1))){
var state_9394__$1 = state_9394;
var statearr_9405_9515 = state_9394__$1;
(statearr_9405_9515[(2)] = null);

(statearr_9405_9515[(1)] = (2));


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
});})(c__6540__auto___9509,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto___9509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_9409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_9409[(1)] = (1));

return statearr_9409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_9394){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9410){if((e9410 instanceof Object)){
var ex__6482__auto__ = e9410;
var statearr_9411_9516 = state_9394;
(statearr_9411_9516[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9517 = state_9394;
state_9394 = G__9517;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_9394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_9394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___9509,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_9412 = f__6541__auto__.call(null);
(statearr_9412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___9509);

return statearr_9412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___9509,jobs,results,process,async))
);


var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,jobs,results,process,async){
return (function (state_9450){
var state_val_9451 = (state_9450[(1)]);
if((state_val_9451 === (7))){
var inst_9446 = (state_9450[(2)]);
var state_9450__$1 = state_9450;
var statearr_9452_9518 = state_9450__$1;
(statearr_9452_9518[(2)] = inst_9446);

(statearr_9452_9518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (20))){
var state_9450__$1 = state_9450;
var statearr_9453_9519 = state_9450__$1;
(statearr_9453_9519[(2)] = null);

(statearr_9453_9519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (1))){
var state_9450__$1 = state_9450;
var statearr_9454_9520 = state_9450__$1;
(statearr_9454_9520[(2)] = null);

(statearr_9454_9520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (4))){
var inst_9415 = (state_9450[(7)]);
var inst_9415__$1 = (state_9450[(2)]);
var inst_9416 = (inst_9415__$1 == null);
var state_9450__$1 = (function (){var statearr_9455 = state_9450;
(statearr_9455[(7)] = inst_9415__$1);

return statearr_9455;
})();
if(cljs.core.truth_(inst_9416)){
var statearr_9456_9521 = state_9450__$1;
(statearr_9456_9521[(1)] = (5));

} else {
var statearr_9457_9522 = state_9450__$1;
(statearr_9457_9522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (15))){
var inst_9428 = (state_9450[(8)]);
var state_9450__$1 = state_9450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9450__$1,(18),to,inst_9428);
} else {
if((state_val_9451 === (21))){
var inst_9441 = (state_9450[(2)]);
var state_9450__$1 = state_9450;
var statearr_9458_9523 = state_9450__$1;
(statearr_9458_9523[(2)] = inst_9441);

(statearr_9458_9523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (13))){
var inst_9443 = (state_9450[(2)]);
var state_9450__$1 = (function (){var statearr_9459 = state_9450;
(statearr_9459[(9)] = inst_9443);

return statearr_9459;
})();
var statearr_9460_9524 = state_9450__$1;
(statearr_9460_9524[(2)] = null);

(statearr_9460_9524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (6))){
var inst_9415 = (state_9450[(7)]);
var state_9450__$1 = state_9450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9450__$1,(11),inst_9415);
} else {
if((state_val_9451 === (17))){
var inst_9436 = (state_9450[(2)]);
var state_9450__$1 = state_9450;
if(cljs.core.truth_(inst_9436)){
var statearr_9461_9525 = state_9450__$1;
(statearr_9461_9525[(1)] = (19));

} else {
var statearr_9462_9526 = state_9450__$1;
(statearr_9462_9526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (3))){
var inst_9448 = (state_9450[(2)]);
var state_9450__$1 = state_9450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9450__$1,inst_9448);
} else {
if((state_val_9451 === (12))){
var inst_9425 = (state_9450[(10)]);
var state_9450__$1 = state_9450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9450__$1,(14),inst_9425);
} else {
if((state_val_9451 === (2))){
var state_9450__$1 = state_9450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9450__$1,(4),results);
} else {
if((state_val_9451 === (19))){
var state_9450__$1 = state_9450;
var statearr_9463_9527 = state_9450__$1;
(statearr_9463_9527[(2)] = null);

(statearr_9463_9527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (11))){
var inst_9425 = (state_9450[(2)]);
var state_9450__$1 = (function (){var statearr_9464 = state_9450;
(statearr_9464[(10)] = inst_9425);

return statearr_9464;
})();
var statearr_9465_9528 = state_9450__$1;
(statearr_9465_9528[(2)] = null);

(statearr_9465_9528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (9))){
var state_9450__$1 = state_9450;
var statearr_9466_9529 = state_9450__$1;
(statearr_9466_9529[(2)] = null);

(statearr_9466_9529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (5))){
var state_9450__$1 = state_9450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9467_9530 = state_9450__$1;
(statearr_9467_9530[(1)] = (8));

} else {
var statearr_9468_9531 = state_9450__$1;
(statearr_9468_9531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (14))){
var inst_9430 = (state_9450[(11)]);
var inst_9428 = (state_9450[(8)]);
var inst_9428__$1 = (state_9450[(2)]);
var inst_9429 = (inst_9428__$1 == null);
var inst_9430__$1 = cljs.core.not.call(null,inst_9429);
var state_9450__$1 = (function (){var statearr_9469 = state_9450;
(statearr_9469[(11)] = inst_9430__$1);

(statearr_9469[(8)] = inst_9428__$1);

return statearr_9469;
})();
if(inst_9430__$1){
var statearr_9470_9532 = state_9450__$1;
(statearr_9470_9532[(1)] = (15));

} else {
var statearr_9471_9533 = state_9450__$1;
(statearr_9471_9533[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (16))){
var inst_9430 = (state_9450[(11)]);
var state_9450__$1 = state_9450;
var statearr_9472_9534 = state_9450__$1;
(statearr_9472_9534[(2)] = inst_9430);

(statearr_9472_9534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (10))){
var inst_9422 = (state_9450[(2)]);
var state_9450__$1 = state_9450;
var statearr_9473_9535 = state_9450__$1;
(statearr_9473_9535[(2)] = inst_9422);

(statearr_9473_9535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (18))){
var inst_9433 = (state_9450[(2)]);
var state_9450__$1 = state_9450;
var statearr_9474_9536 = state_9450__$1;
(statearr_9474_9536[(2)] = inst_9433);

(statearr_9474_9536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9451 === (8))){
var inst_9419 = cljs.core.async.close_BANG_.call(null,to);
var state_9450__$1 = state_9450;
var statearr_9475_9537 = state_9450__$1;
(statearr_9475_9537[(2)] = inst_9419);

(statearr_9475_9537[(1)] = (10));


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
});})(c__6540__auto__,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_9479 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_9479[(1)] = (1));

return statearr_9479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_9450){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9480){if((e9480 instanceof Object)){
var ex__6482__auto__ = e9480;
var statearr_9481_9538 = state_9450;
(statearr_9481_9538[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9539 = state_9450;
state_9450 = G__9539;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_9450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_9450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_9482 = f__6541__auto__.call(null);
(statearr_9482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_9482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__,jobs,results,process,async))
);

return c__6540__auto__;
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
var G__9541 = arguments.length;
switch (G__9541) {
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
var G__9544 = arguments.length;
switch (G__9544) {
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
var G__9547 = arguments.length;
switch (G__9547) {
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
var c__6540__auto___9599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___9599,tc,fc){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___9599,tc,fc){
return (function (state_9573){
var state_val_9574 = (state_9573[(1)]);
if((state_val_9574 === (7))){
var inst_9569 = (state_9573[(2)]);
var state_9573__$1 = state_9573;
var statearr_9575_9600 = state_9573__$1;
(statearr_9575_9600[(2)] = inst_9569);

(statearr_9575_9600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (1))){
var state_9573__$1 = state_9573;
var statearr_9576_9601 = state_9573__$1;
(statearr_9576_9601[(2)] = null);

(statearr_9576_9601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (4))){
var inst_9550 = (state_9573[(7)]);
var inst_9550__$1 = (state_9573[(2)]);
var inst_9551 = (inst_9550__$1 == null);
var state_9573__$1 = (function (){var statearr_9577 = state_9573;
(statearr_9577[(7)] = inst_9550__$1);

return statearr_9577;
})();
if(cljs.core.truth_(inst_9551)){
var statearr_9578_9602 = state_9573__$1;
(statearr_9578_9602[(1)] = (5));

} else {
var statearr_9579_9603 = state_9573__$1;
(statearr_9579_9603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (13))){
var state_9573__$1 = state_9573;
var statearr_9580_9604 = state_9573__$1;
(statearr_9580_9604[(2)] = null);

(statearr_9580_9604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (6))){
var inst_9550 = (state_9573[(7)]);
var inst_9556 = p.call(null,inst_9550);
var state_9573__$1 = state_9573;
if(cljs.core.truth_(inst_9556)){
var statearr_9581_9605 = state_9573__$1;
(statearr_9581_9605[(1)] = (9));

} else {
var statearr_9582_9606 = state_9573__$1;
(statearr_9582_9606[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (3))){
var inst_9571 = (state_9573[(2)]);
var state_9573__$1 = state_9573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9573__$1,inst_9571);
} else {
if((state_val_9574 === (12))){
var state_9573__$1 = state_9573;
var statearr_9583_9607 = state_9573__$1;
(statearr_9583_9607[(2)] = null);

(statearr_9583_9607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (2))){
var state_9573__$1 = state_9573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9573__$1,(4),ch);
} else {
if((state_val_9574 === (11))){
var inst_9550 = (state_9573[(7)]);
var inst_9560 = (state_9573[(2)]);
var state_9573__$1 = state_9573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9573__$1,(8),inst_9560,inst_9550);
} else {
if((state_val_9574 === (9))){
var state_9573__$1 = state_9573;
var statearr_9584_9608 = state_9573__$1;
(statearr_9584_9608[(2)] = tc);

(statearr_9584_9608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (5))){
var inst_9553 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9554 = cljs.core.async.close_BANG_.call(null,fc);
var state_9573__$1 = (function (){var statearr_9585 = state_9573;
(statearr_9585[(8)] = inst_9553);

return statearr_9585;
})();
var statearr_9586_9609 = state_9573__$1;
(statearr_9586_9609[(2)] = inst_9554);

(statearr_9586_9609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (14))){
var inst_9567 = (state_9573[(2)]);
var state_9573__$1 = state_9573;
var statearr_9587_9610 = state_9573__$1;
(statearr_9587_9610[(2)] = inst_9567);

(statearr_9587_9610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (10))){
var state_9573__$1 = state_9573;
var statearr_9588_9611 = state_9573__$1;
(statearr_9588_9611[(2)] = fc);

(statearr_9588_9611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9574 === (8))){
var inst_9562 = (state_9573[(2)]);
var state_9573__$1 = state_9573;
if(cljs.core.truth_(inst_9562)){
var statearr_9589_9612 = state_9573__$1;
(statearr_9589_9612[(1)] = (12));

} else {
var statearr_9590_9613 = state_9573__$1;
(statearr_9590_9613[(1)] = (13));

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
});})(c__6540__auto___9599,tc,fc))
;
return ((function (switch__6478__auto__,c__6540__auto___9599,tc,fc){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_9594 = [null,null,null,null,null,null,null,null,null];
(statearr_9594[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_9594[(1)] = (1));

return statearr_9594;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_9573){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9595){if((e9595 instanceof Object)){
var ex__6482__auto__ = e9595;
var statearr_9596_9614 = state_9573;
(statearr_9596_9614[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9615 = state_9573;
state_9573 = G__9615;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_9573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_9573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___9599,tc,fc))
})();
var state__6542__auto__ = (function (){var statearr_9597 = f__6541__auto__.call(null);
(statearr_9597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___9599);

return statearr_9597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___9599,tc,fc))
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
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_9662){
var state_val_9663 = (state_9662[(1)]);
if((state_val_9663 === (7))){
var inst_9658 = (state_9662[(2)]);
var state_9662__$1 = state_9662;
var statearr_9664_9680 = state_9662__$1;
(statearr_9664_9680[(2)] = inst_9658);

(statearr_9664_9680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9663 === (6))){
var inst_9648 = (state_9662[(7)]);
var inst_9651 = (state_9662[(8)]);
var inst_9655 = f.call(null,inst_9648,inst_9651);
var inst_9648__$1 = inst_9655;
var state_9662__$1 = (function (){var statearr_9665 = state_9662;
(statearr_9665[(7)] = inst_9648__$1);

return statearr_9665;
})();
var statearr_9666_9681 = state_9662__$1;
(statearr_9666_9681[(2)] = null);

(statearr_9666_9681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9663 === (5))){
var inst_9648 = (state_9662[(7)]);
var state_9662__$1 = state_9662;
var statearr_9667_9682 = state_9662__$1;
(statearr_9667_9682[(2)] = inst_9648);

(statearr_9667_9682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9663 === (4))){
var inst_9651 = (state_9662[(8)]);
var inst_9651__$1 = (state_9662[(2)]);
var inst_9652 = (inst_9651__$1 == null);
var state_9662__$1 = (function (){var statearr_9668 = state_9662;
(statearr_9668[(8)] = inst_9651__$1);

return statearr_9668;
})();
if(cljs.core.truth_(inst_9652)){
var statearr_9669_9683 = state_9662__$1;
(statearr_9669_9683[(1)] = (5));

} else {
var statearr_9670_9684 = state_9662__$1;
(statearr_9670_9684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9663 === (3))){
var inst_9660 = (state_9662[(2)]);
var state_9662__$1 = state_9662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9662__$1,inst_9660);
} else {
if((state_val_9663 === (2))){
var state_9662__$1 = state_9662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9662__$1,(4),ch);
} else {
if((state_val_9663 === (1))){
var inst_9648 = init;
var state_9662__$1 = (function (){var statearr_9671 = state_9662;
(statearr_9671[(7)] = inst_9648);

return statearr_9671;
})();
var statearr_9672_9685 = state_9662__$1;
(statearr_9672_9685[(2)] = null);

(statearr_9672_9685[(1)] = (2));


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
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6479__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6479__auto____0 = (function (){
var statearr_9676 = [null,null,null,null,null,null,null,null,null];
(statearr_9676[(0)] = cljs$core$async$reduce_$_state_machine__6479__auto__);

(statearr_9676[(1)] = (1));

return statearr_9676;
});
var cljs$core$async$reduce_$_state_machine__6479__auto____1 = (function (state_9662){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9677){if((e9677 instanceof Object)){
var ex__6482__auto__ = e9677;
var statearr_9678_9686 = state_9662;
(statearr_9678_9686[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9687 = state_9662;
state_9662 = G__9687;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6479__auto__ = function(state_9662){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6479__auto____1.call(this,state_9662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6479__auto____0;
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6479__auto____1;
return cljs$core$async$reduce_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_9679 = f__6541__auto__.call(null);
(statearr_9679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_9679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
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
var G__9689 = arguments.length;
switch (G__9689) {
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
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_9714){
var state_val_9715 = (state_9714[(1)]);
if((state_val_9715 === (7))){
var inst_9696 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
var statearr_9716_9740 = state_9714__$1;
(statearr_9716_9740[(2)] = inst_9696);

(statearr_9716_9740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (1))){
var inst_9690 = cljs.core.seq.call(null,coll);
var inst_9691 = inst_9690;
var state_9714__$1 = (function (){var statearr_9717 = state_9714;
(statearr_9717[(7)] = inst_9691);

return statearr_9717;
})();
var statearr_9718_9741 = state_9714__$1;
(statearr_9718_9741[(2)] = null);

(statearr_9718_9741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (4))){
var inst_9691 = (state_9714[(7)]);
var inst_9694 = cljs.core.first.call(null,inst_9691);
var state_9714__$1 = state_9714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9714__$1,(7),ch,inst_9694);
} else {
if((state_val_9715 === (13))){
var inst_9708 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
var statearr_9719_9742 = state_9714__$1;
(statearr_9719_9742[(2)] = inst_9708);

(statearr_9719_9742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (6))){
var inst_9699 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
if(cljs.core.truth_(inst_9699)){
var statearr_9720_9743 = state_9714__$1;
(statearr_9720_9743[(1)] = (8));

} else {
var statearr_9721_9744 = state_9714__$1;
(statearr_9721_9744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (3))){
var inst_9712 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9714__$1,inst_9712);
} else {
if((state_val_9715 === (12))){
var state_9714__$1 = state_9714;
var statearr_9722_9745 = state_9714__$1;
(statearr_9722_9745[(2)] = null);

(statearr_9722_9745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (2))){
var inst_9691 = (state_9714[(7)]);
var state_9714__$1 = state_9714;
if(cljs.core.truth_(inst_9691)){
var statearr_9723_9746 = state_9714__$1;
(statearr_9723_9746[(1)] = (4));

} else {
var statearr_9724_9747 = state_9714__$1;
(statearr_9724_9747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (11))){
var inst_9705 = cljs.core.async.close_BANG_.call(null,ch);
var state_9714__$1 = state_9714;
var statearr_9725_9748 = state_9714__$1;
(statearr_9725_9748[(2)] = inst_9705);

(statearr_9725_9748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (9))){
var state_9714__$1 = state_9714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9726_9749 = state_9714__$1;
(statearr_9726_9749[(1)] = (11));

} else {
var statearr_9727_9750 = state_9714__$1;
(statearr_9727_9750[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (5))){
var inst_9691 = (state_9714[(7)]);
var state_9714__$1 = state_9714;
var statearr_9728_9751 = state_9714__$1;
(statearr_9728_9751[(2)] = inst_9691);

(statearr_9728_9751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (10))){
var inst_9710 = (state_9714[(2)]);
var state_9714__$1 = state_9714;
var statearr_9729_9752 = state_9714__$1;
(statearr_9729_9752[(2)] = inst_9710);

(statearr_9729_9752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9715 === (8))){
var inst_9691 = (state_9714[(7)]);
var inst_9701 = cljs.core.next.call(null,inst_9691);
var inst_9691__$1 = inst_9701;
var state_9714__$1 = (function (){var statearr_9730 = state_9714;
(statearr_9730[(7)] = inst_9691__$1);

return statearr_9730;
})();
var statearr_9731_9753 = state_9714__$1;
(statearr_9731_9753[(2)] = null);

(statearr_9731_9753[(1)] = (2));


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
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_9735 = [null,null,null,null,null,null,null,null];
(statearr_9735[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_9735[(1)] = (1));

return statearr_9735;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_9714){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_9714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e9736){if((e9736 instanceof Object)){
var ex__6482__auto__ = e9736;
var statearr_9737_9754 = state_9714;
(statearr_9737_9754[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9755 = state_9714;
state_9714 = G__9755;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_9714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_9714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_9738 = f__6541__auto__.call(null);
(statearr_9738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_9738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
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

cljs.core.async.Mux = (function (){var obj9757 = {};
return obj9757;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4170__auto__ = _;
if(and__4170__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4818__auto__ = (((_ == null))?null:_);
return (function (){var or__4182__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj9759 = {};
return obj9759;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
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
if(typeof cljs.core.async.t9981 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9981 = (function (cs,ch,mult,meta9982){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9982 = meta9982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9981.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t9981.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t9981.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t9981.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t9981.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t9981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t9981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9983){
var self__ = this;
var _9983__$1 = this;
return self__.meta9982;
});})(cs))
;

cljs.core.async.t9981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9983,meta9982__$1){
var self__ = this;
var _9983__$1 = this;
return (new cljs.core.async.t9981(self__.cs,self__.ch,self__.mult,meta9982__$1));
});})(cs))
;

cljs.core.async.t9981.cljs$lang$type = true;

cljs.core.async.t9981.cljs$lang$ctorStr = "cljs.core.async/t9981";

cljs.core.async.t9981.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t9981");
});})(cs))
;

cljs.core.async.__GT_t9981 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t9981(cs__$1,ch__$1,mult__$1,meta9982){
return (new cljs.core.async.t9981(cs__$1,ch__$1,mult__$1,meta9982));
});})(cs))
;

}

return (new cljs.core.async.t9981(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6540__auto___10202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___10202,cs,m,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___10202,cs,m,dchan,dctr,done){
return (function (state_10114){
var state_val_10115 = (state_10114[(1)]);
if((state_val_10115 === (7))){
var inst_10110 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10116_10203 = state_10114__$1;
(statearr_10116_10203[(2)] = inst_10110);

(statearr_10116_10203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (20))){
var inst_10015 = (state_10114[(7)]);
var inst_10025 = cljs.core.first.call(null,inst_10015);
var inst_10026 = cljs.core.nth.call(null,inst_10025,(0),null);
var inst_10027 = cljs.core.nth.call(null,inst_10025,(1),null);
var state_10114__$1 = (function (){var statearr_10117 = state_10114;
(statearr_10117[(8)] = inst_10026);

return statearr_10117;
})();
if(cljs.core.truth_(inst_10027)){
var statearr_10118_10204 = state_10114__$1;
(statearr_10118_10204[(1)] = (22));

} else {
var statearr_10119_10205 = state_10114__$1;
(statearr_10119_10205[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (27))){
var inst_10057 = (state_10114[(9)]);
var inst_9986 = (state_10114[(10)]);
var inst_10062 = (state_10114[(11)]);
var inst_10055 = (state_10114[(12)]);
var inst_10062__$1 = cljs.core._nth.call(null,inst_10055,inst_10057);
var inst_10063 = cljs.core.async.put_BANG_.call(null,inst_10062__$1,inst_9986,done);
var state_10114__$1 = (function (){var statearr_10120 = state_10114;
(statearr_10120[(11)] = inst_10062__$1);

return statearr_10120;
})();
if(cljs.core.truth_(inst_10063)){
var statearr_10121_10206 = state_10114__$1;
(statearr_10121_10206[(1)] = (30));

} else {
var statearr_10122_10207 = state_10114__$1;
(statearr_10122_10207[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (1))){
var state_10114__$1 = state_10114;
var statearr_10123_10208 = state_10114__$1;
(statearr_10123_10208[(2)] = null);

(statearr_10123_10208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (24))){
var inst_10015 = (state_10114[(7)]);
var inst_10032 = (state_10114[(2)]);
var inst_10033 = cljs.core.next.call(null,inst_10015);
var inst_9995 = inst_10033;
var inst_9996 = null;
var inst_9997 = (0);
var inst_9998 = (0);
var state_10114__$1 = (function (){var statearr_10124 = state_10114;
(statearr_10124[(13)] = inst_10032);

(statearr_10124[(14)] = inst_9997);

(statearr_10124[(15)] = inst_9998);

(statearr_10124[(16)] = inst_9996);

(statearr_10124[(17)] = inst_9995);

return statearr_10124;
})();
var statearr_10125_10209 = state_10114__$1;
(statearr_10125_10209[(2)] = null);

(statearr_10125_10209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (39))){
var state_10114__$1 = state_10114;
var statearr_10129_10210 = state_10114__$1;
(statearr_10129_10210[(2)] = null);

(statearr_10129_10210[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (4))){
var inst_9986 = (state_10114[(10)]);
var inst_9986__$1 = (state_10114[(2)]);
var inst_9987 = (inst_9986__$1 == null);
var state_10114__$1 = (function (){var statearr_10130 = state_10114;
(statearr_10130[(10)] = inst_9986__$1);

return statearr_10130;
})();
if(cljs.core.truth_(inst_9987)){
var statearr_10131_10211 = state_10114__$1;
(statearr_10131_10211[(1)] = (5));

} else {
var statearr_10132_10212 = state_10114__$1;
(statearr_10132_10212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (15))){
var inst_9997 = (state_10114[(14)]);
var inst_9998 = (state_10114[(15)]);
var inst_9996 = (state_10114[(16)]);
var inst_9995 = (state_10114[(17)]);
var inst_10011 = (state_10114[(2)]);
var inst_10012 = (inst_9998 + (1));
var tmp10126 = inst_9997;
var tmp10127 = inst_9996;
var tmp10128 = inst_9995;
var inst_9995__$1 = tmp10128;
var inst_9996__$1 = tmp10127;
var inst_9997__$1 = tmp10126;
var inst_9998__$1 = inst_10012;
var state_10114__$1 = (function (){var statearr_10133 = state_10114;
(statearr_10133[(14)] = inst_9997__$1);

(statearr_10133[(18)] = inst_10011);

(statearr_10133[(15)] = inst_9998__$1);

(statearr_10133[(16)] = inst_9996__$1);

(statearr_10133[(17)] = inst_9995__$1);

return statearr_10133;
})();
var statearr_10134_10213 = state_10114__$1;
(statearr_10134_10213[(2)] = null);

(statearr_10134_10213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (21))){
var inst_10036 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10138_10214 = state_10114__$1;
(statearr_10138_10214[(2)] = inst_10036);

(statearr_10138_10214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (31))){
var inst_10062 = (state_10114[(11)]);
var inst_10066 = done.call(null,null);
var inst_10067 = cljs.core.async.untap_STAR_.call(null,m,inst_10062);
var state_10114__$1 = (function (){var statearr_10139 = state_10114;
(statearr_10139[(19)] = inst_10066);

return statearr_10139;
})();
var statearr_10140_10215 = state_10114__$1;
(statearr_10140_10215[(2)] = inst_10067);

(statearr_10140_10215[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (32))){
var inst_10054 = (state_10114[(20)]);
var inst_10057 = (state_10114[(9)]);
var inst_10055 = (state_10114[(12)]);
var inst_10056 = (state_10114[(21)]);
var inst_10069 = (state_10114[(2)]);
var inst_10070 = (inst_10057 + (1));
var tmp10135 = inst_10054;
var tmp10136 = inst_10055;
var tmp10137 = inst_10056;
var inst_10054__$1 = tmp10135;
var inst_10055__$1 = tmp10136;
var inst_10056__$1 = tmp10137;
var inst_10057__$1 = inst_10070;
var state_10114__$1 = (function (){var statearr_10141 = state_10114;
(statearr_10141[(20)] = inst_10054__$1);

(statearr_10141[(9)] = inst_10057__$1);

(statearr_10141[(22)] = inst_10069);

(statearr_10141[(12)] = inst_10055__$1);

(statearr_10141[(21)] = inst_10056__$1);

return statearr_10141;
})();
var statearr_10142_10216 = state_10114__$1;
(statearr_10142_10216[(2)] = null);

(statearr_10142_10216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (40))){
var inst_10082 = (state_10114[(23)]);
var inst_10086 = done.call(null,null);
var inst_10087 = cljs.core.async.untap_STAR_.call(null,m,inst_10082);
var state_10114__$1 = (function (){var statearr_10143 = state_10114;
(statearr_10143[(24)] = inst_10086);

return statearr_10143;
})();
var statearr_10144_10217 = state_10114__$1;
(statearr_10144_10217[(2)] = inst_10087);

(statearr_10144_10217[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (33))){
var inst_10073 = (state_10114[(25)]);
var inst_10075 = cljs.core.chunked_seq_QMARK_.call(null,inst_10073);
var state_10114__$1 = state_10114;
if(inst_10075){
var statearr_10145_10218 = state_10114__$1;
(statearr_10145_10218[(1)] = (36));

} else {
var statearr_10146_10219 = state_10114__$1;
(statearr_10146_10219[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (13))){
var inst_10005 = (state_10114[(26)]);
var inst_10008 = cljs.core.async.close_BANG_.call(null,inst_10005);
var state_10114__$1 = state_10114;
var statearr_10147_10220 = state_10114__$1;
(statearr_10147_10220[(2)] = inst_10008);

(statearr_10147_10220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (22))){
var inst_10026 = (state_10114[(8)]);
var inst_10029 = cljs.core.async.close_BANG_.call(null,inst_10026);
var state_10114__$1 = state_10114;
var statearr_10148_10221 = state_10114__$1;
(statearr_10148_10221[(2)] = inst_10029);

(statearr_10148_10221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (36))){
var inst_10073 = (state_10114[(25)]);
var inst_10077 = cljs.core.chunk_first.call(null,inst_10073);
var inst_10078 = cljs.core.chunk_rest.call(null,inst_10073);
var inst_10079 = cljs.core.count.call(null,inst_10077);
var inst_10054 = inst_10078;
var inst_10055 = inst_10077;
var inst_10056 = inst_10079;
var inst_10057 = (0);
var state_10114__$1 = (function (){var statearr_10149 = state_10114;
(statearr_10149[(20)] = inst_10054);

(statearr_10149[(9)] = inst_10057);

(statearr_10149[(12)] = inst_10055);

(statearr_10149[(21)] = inst_10056);

return statearr_10149;
})();
var statearr_10150_10222 = state_10114__$1;
(statearr_10150_10222[(2)] = null);

(statearr_10150_10222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (41))){
var inst_10073 = (state_10114[(25)]);
var inst_10089 = (state_10114[(2)]);
var inst_10090 = cljs.core.next.call(null,inst_10073);
var inst_10054 = inst_10090;
var inst_10055 = null;
var inst_10056 = (0);
var inst_10057 = (0);
var state_10114__$1 = (function (){var statearr_10151 = state_10114;
(statearr_10151[(20)] = inst_10054);

(statearr_10151[(9)] = inst_10057);

(statearr_10151[(12)] = inst_10055);

(statearr_10151[(27)] = inst_10089);

(statearr_10151[(21)] = inst_10056);

return statearr_10151;
})();
var statearr_10152_10223 = state_10114__$1;
(statearr_10152_10223[(2)] = null);

(statearr_10152_10223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (43))){
var state_10114__$1 = state_10114;
var statearr_10153_10224 = state_10114__$1;
(statearr_10153_10224[(2)] = null);

(statearr_10153_10224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (29))){
var inst_10098 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10154_10225 = state_10114__$1;
(statearr_10154_10225[(2)] = inst_10098);

(statearr_10154_10225[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (44))){
var inst_10107 = (state_10114[(2)]);
var state_10114__$1 = (function (){var statearr_10155 = state_10114;
(statearr_10155[(28)] = inst_10107);

return statearr_10155;
})();
var statearr_10156_10226 = state_10114__$1;
(statearr_10156_10226[(2)] = null);

(statearr_10156_10226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (6))){
var inst_10046 = (state_10114[(29)]);
var inst_10045 = cljs.core.deref.call(null,cs);
var inst_10046__$1 = cljs.core.keys.call(null,inst_10045);
var inst_10047 = cljs.core.count.call(null,inst_10046__$1);
var inst_10048 = cljs.core.reset_BANG_.call(null,dctr,inst_10047);
var inst_10053 = cljs.core.seq.call(null,inst_10046__$1);
var inst_10054 = inst_10053;
var inst_10055 = null;
var inst_10056 = (0);
var inst_10057 = (0);
var state_10114__$1 = (function (){var statearr_10157 = state_10114;
(statearr_10157[(20)] = inst_10054);

(statearr_10157[(30)] = inst_10048);

(statearr_10157[(9)] = inst_10057);

(statearr_10157[(29)] = inst_10046__$1);

(statearr_10157[(12)] = inst_10055);

(statearr_10157[(21)] = inst_10056);

return statearr_10157;
})();
var statearr_10158_10227 = state_10114__$1;
(statearr_10158_10227[(2)] = null);

(statearr_10158_10227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (28))){
var inst_10054 = (state_10114[(20)]);
var inst_10073 = (state_10114[(25)]);
var inst_10073__$1 = cljs.core.seq.call(null,inst_10054);
var state_10114__$1 = (function (){var statearr_10159 = state_10114;
(statearr_10159[(25)] = inst_10073__$1);

return statearr_10159;
})();
if(inst_10073__$1){
var statearr_10160_10228 = state_10114__$1;
(statearr_10160_10228[(1)] = (33));

} else {
var statearr_10161_10229 = state_10114__$1;
(statearr_10161_10229[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (25))){
var inst_10057 = (state_10114[(9)]);
var inst_10056 = (state_10114[(21)]);
var inst_10059 = (inst_10057 < inst_10056);
var inst_10060 = inst_10059;
var state_10114__$1 = state_10114;
if(cljs.core.truth_(inst_10060)){
var statearr_10162_10230 = state_10114__$1;
(statearr_10162_10230[(1)] = (27));

} else {
var statearr_10163_10231 = state_10114__$1;
(statearr_10163_10231[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (34))){
var state_10114__$1 = state_10114;
var statearr_10164_10232 = state_10114__$1;
(statearr_10164_10232[(2)] = null);

(statearr_10164_10232[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (17))){
var state_10114__$1 = state_10114;
var statearr_10165_10233 = state_10114__$1;
(statearr_10165_10233[(2)] = null);

(statearr_10165_10233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (3))){
var inst_10112 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10114__$1,inst_10112);
} else {
if((state_val_10115 === (12))){
var inst_10041 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10166_10234 = state_10114__$1;
(statearr_10166_10234[(2)] = inst_10041);

(statearr_10166_10234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (2))){
var state_10114__$1 = state_10114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10114__$1,(4),ch);
} else {
if((state_val_10115 === (23))){
var state_10114__$1 = state_10114;
var statearr_10167_10235 = state_10114__$1;
(statearr_10167_10235[(2)] = null);

(statearr_10167_10235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (35))){
var inst_10096 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10168_10236 = state_10114__$1;
(statearr_10168_10236[(2)] = inst_10096);

(statearr_10168_10236[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (19))){
var inst_10015 = (state_10114[(7)]);
var inst_10019 = cljs.core.chunk_first.call(null,inst_10015);
var inst_10020 = cljs.core.chunk_rest.call(null,inst_10015);
var inst_10021 = cljs.core.count.call(null,inst_10019);
var inst_9995 = inst_10020;
var inst_9996 = inst_10019;
var inst_9997 = inst_10021;
var inst_9998 = (0);
var state_10114__$1 = (function (){var statearr_10169 = state_10114;
(statearr_10169[(14)] = inst_9997);

(statearr_10169[(15)] = inst_9998);

(statearr_10169[(16)] = inst_9996);

(statearr_10169[(17)] = inst_9995);

return statearr_10169;
})();
var statearr_10170_10237 = state_10114__$1;
(statearr_10170_10237[(2)] = null);

(statearr_10170_10237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (11))){
var inst_10015 = (state_10114[(7)]);
var inst_9995 = (state_10114[(17)]);
var inst_10015__$1 = cljs.core.seq.call(null,inst_9995);
var state_10114__$1 = (function (){var statearr_10171 = state_10114;
(statearr_10171[(7)] = inst_10015__$1);

return statearr_10171;
})();
if(inst_10015__$1){
var statearr_10172_10238 = state_10114__$1;
(statearr_10172_10238[(1)] = (16));

} else {
var statearr_10173_10239 = state_10114__$1;
(statearr_10173_10239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (9))){
var inst_10043 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10174_10240 = state_10114__$1;
(statearr_10174_10240[(2)] = inst_10043);

(statearr_10174_10240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (5))){
var inst_9993 = cljs.core.deref.call(null,cs);
var inst_9994 = cljs.core.seq.call(null,inst_9993);
var inst_9995 = inst_9994;
var inst_9996 = null;
var inst_9997 = (0);
var inst_9998 = (0);
var state_10114__$1 = (function (){var statearr_10175 = state_10114;
(statearr_10175[(14)] = inst_9997);

(statearr_10175[(15)] = inst_9998);

(statearr_10175[(16)] = inst_9996);

(statearr_10175[(17)] = inst_9995);

return statearr_10175;
})();
var statearr_10176_10241 = state_10114__$1;
(statearr_10176_10241[(2)] = null);

(statearr_10176_10241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (14))){
var state_10114__$1 = state_10114;
var statearr_10177_10242 = state_10114__$1;
(statearr_10177_10242[(2)] = null);

(statearr_10177_10242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (45))){
var inst_10104 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10178_10243 = state_10114__$1;
(statearr_10178_10243[(2)] = inst_10104);

(statearr_10178_10243[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (26))){
var inst_10046 = (state_10114[(29)]);
var inst_10100 = (state_10114[(2)]);
var inst_10101 = cljs.core.seq.call(null,inst_10046);
var state_10114__$1 = (function (){var statearr_10179 = state_10114;
(statearr_10179[(31)] = inst_10100);

return statearr_10179;
})();
if(inst_10101){
var statearr_10180_10244 = state_10114__$1;
(statearr_10180_10244[(1)] = (42));

} else {
var statearr_10181_10245 = state_10114__$1;
(statearr_10181_10245[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (16))){
var inst_10015 = (state_10114[(7)]);
var inst_10017 = cljs.core.chunked_seq_QMARK_.call(null,inst_10015);
var state_10114__$1 = state_10114;
if(inst_10017){
var statearr_10182_10246 = state_10114__$1;
(statearr_10182_10246[(1)] = (19));

} else {
var statearr_10183_10247 = state_10114__$1;
(statearr_10183_10247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (38))){
var inst_10093 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10184_10248 = state_10114__$1;
(statearr_10184_10248[(2)] = inst_10093);

(statearr_10184_10248[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (30))){
var state_10114__$1 = state_10114;
var statearr_10185_10249 = state_10114__$1;
(statearr_10185_10249[(2)] = null);

(statearr_10185_10249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (10))){
var inst_9998 = (state_10114[(15)]);
var inst_9996 = (state_10114[(16)]);
var inst_10004 = cljs.core._nth.call(null,inst_9996,inst_9998);
var inst_10005 = cljs.core.nth.call(null,inst_10004,(0),null);
var inst_10006 = cljs.core.nth.call(null,inst_10004,(1),null);
var state_10114__$1 = (function (){var statearr_10186 = state_10114;
(statearr_10186[(26)] = inst_10005);

return statearr_10186;
})();
if(cljs.core.truth_(inst_10006)){
var statearr_10187_10250 = state_10114__$1;
(statearr_10187_10250[(1)] = (13));

} else {
var statearr_10188_10251 = state_10114__$1;
(statearr_10188_10251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (18))){
var inst_10039 = (state_10114[(2)]);
var state_10114__$1 = state_10114;
var statearr_10189_10252 = state_10114__$1;
(statearr_10189_10252[(2)] = inst_10039);

(statearr_10189_10252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (42))){
var state_10114__$1 = state_10114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10114__$1,(45),dchan);
} else {
if((state_val_10115 === (37))){
var inst_9986 = (state_10114[(10)]);
var inst_10073 = (state_10114[(25)]);
var inst_10082 = (state_10114[(23)]);
var inst_10082__$1 = cljs.core.first.call(null,inst_10073);
var inst_10083 = cljs.core.async.put_BANG_.call(null,inst_10082__$1,inst_9986,done);
var state_10114__$1 = (function (){var statearr_10190 = state_10114;
(statearr_10190[(23)] = inst_10082__$1);

return statearr_10190;
})();
if(cljs.core.truth_(inst_10083)){
var statearr_10191_10253 = state_10114__$1;
(statearr_10191_10253[(1)] = (39));

} else {
var statearr_10192_10254 = state_10114__$1;
(statearr_10192_10254[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10115 === (8))){
var inst_9997 = (state_10114[(14)]);
var inst_9998 = (state_10114[(15)]);
var inst_10000 = (inst_9998 < inst_9997);
var inst_10001 = inst_10000;
var state_10114__$1 = state_10114;
if(cljs.core.truth_(inst_10001)){
var statearr_10193_10255 = state_10114__$1;
(statearr_10193_10255[(1)] = (10));

} else {
var statearr_10194_10256 = state_10114__$1;
(statearr_10194_10256[(1)] = (11));

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
});})(c__6540__auto___10202,cs,m,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___10202,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6479__auto__ = null;
var cljs$core$async$mult_$_state_machine__6479__auto____0 = (function (){
var statearr_10198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10198[(0)] = cljs$core$async$mult_$_state_machine__6479__auto__);

(statearr_10198[(1)] = (1));

return statearr_10198;
});
var cljs$core$async$mult_$_state_machine__6479__auto____1 = (function (state_10114){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_10114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e10199){if((e10199 instanceof Object)){
var ex__6482__auto__ = e10199;
var statearr_10200_10257 = state_10114;
(statearr_10200_10257[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10258 = state_10114;
state_10114 = G__10258;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6479__auto__ = function(state_10114){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6479__auto____1.call(this,state_10114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6479__auto____0;
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6479__auto____1;
return cljs$core$async$mult_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___10202,cs,m,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_10201 = f__6541__auto__.call(null);
(statearr_10201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___10202);

return statearr_10201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___10202,cs,m,dchan,dctr,done))
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
var G__10260 = arguments.length;
switch (G__10260) {
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

cljs.core.async.Mix = (function (){var obj10263 = {};
return obj10263;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5218__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5218__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10268){
var map__10269 = p__10268;
var map__10269__$1 = ((cljs.core.seq_QMARK_.call(null,map__10269))?cljs.core.apply.call(null,cljs.core.hash_map,map__10269):map__10269);
var opts = map__10269__$1;
var statearr_10270_10273 = state;
(statearr_10270_10273[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__10269,map__10269__$1,opts){
return (function (val){
var statearr_10271_10274 = state;
(statearr_10271_10274[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10269,map__10269__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_10272_10275 = state;
(statearr_10272_10275[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10264){
var G__10265 = cljs.core.first.call(null,seq10264);
var seq10264__$1 = cljs.core.next.call(null,seq10264);
var G__10266 = cljs.core.first.call(null,seq10264__$1);
var seq10264__$2 = cljs.core.next.call(null,seq10264__$1);
var G__10267 = cljs.core.first.call(null,seq10264__$2);
var seq10264__$3 = cljs.core.next.call(null,seq10264__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10265,G__10266,G__10267,seq10264__$3);
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
if(typeof cljs.core.async.t10395 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10395 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10396){
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
this.meta10396 = meta10396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10395.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10397){
var self__ = this;
var _10397__$1 = this;
return self__.meta10396;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10397,meta10396__$1){
var self__ = this;
var _10397__$1 = this;
return (new cljs.core.async.t10395(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10396__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10395.cljs$lang$type = true;

cljs.core.async.t10395.cljs$lang$ctorStr = "cljs.core.async/t10395";

cljs.core.async.t10395.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t10395");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10395 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t10395(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10396){
return (new cljs.core.async.t10395(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10396));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10395(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___10514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___10514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___10514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10467){
var state_val_10468 = (state_10467[(1)]);
if((state_val_10468 === (7))){
var inst_10411 = (state_10467[(7)]);
var inst_10416 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10411);
var state_10467__$1 = state_10467;
var statearr_10469_10515 = state_10467__$1;
(statearr_10469_10515[(2)] = inst_10416);

(statearr_10469_10515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (20))){
var inst_10426 = (state_10467[(8)]);
var state_10467__$1 = state_10467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10467__$1,(23),out,inst_10426);
} else {
if((state_val_10468 === (1))){
var inst_10401 = (state_10467[(9)]);
var inst_10401__$1 = calc_state.call(null);
var inst_10402 = cljs.core.seq_QMARK_.call(null,inst_10401__$1);
var state_10467__$1 = (function (){var statearr_10470 = state_10467;
(statearr_10470[(9)] = inst_10401__$1);

return statearr_10470;
})();
if(inst_10402){
var statearr_10471_10516 = state_10467__$1;
(statearr_10471_10516[(1)] = (2));

} else {
var statearr_10472_10517 = state_10467__$1;
(statearr_10472_10517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (24))){
var inst_10419 = (state_10467[(10)]);
var inst_10411 = inst_10419;
var state_10467__$1 = (function (){var statearr_10473 = state_10467;
(statearr_10473[(7)] = inst_10411);

return statearr_10473;
})();
var statearr_10474_10518 = state_10467__$1;
(statearr_10474_10518[(2)] = null);

(statearr_10474_10518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (4))){
var inst_10401 = (state_10467[(9)]);
var inst_10407 = (state_10467[(2)]);
var inst_10408 = cljs.core.get.call(null,inst_10407,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10409 = cljs.core.get.call(null,inst_10407,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10410 = cljs.core.get.call(null,inst_10407,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10411 = inst_10401;
var state_10467__$1 = (function (){var statearr_10475 = state_10467;
(statearr_10475[(11)] = inst_10408);

(statearr_10475[(7)] = inst_10411);

(statearr_10475[(12)] = inst_10409);

(statearr_10475[(13)] = inst_10410);

return statearr_10475;
})();
var statearr_10476_10519 = state_10467__$1;
(statearr_10476_10519[(2)] = null);

(statearr_10476_10519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (15))){
var state_10467__$1 = state_10467;
var statearr_10477_10520 = state_10467__$1;
(statearr_10477_10520[(2)] = null);

(statearr_10477_10520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (21))){
var inst_10419 = (state_10467[(10)]);
var inst_10411 = inst_10419;
var state_10467__$1 = (function (){var statearr_10478 = state_10467;
(statearr_10478[(7)] = inst_10411);

return statearr_10478;
})();
var statearr_10479_10521 = state_10467__$1;
(statearr_10479_10521[(2)] = null);

(statearr_10479_10521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (13))){
var inst_10463 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
var statearr_10480_10522 = state_10467__$1;
(statearr_10480_10522[(2)] = inst_10463);

(statearr_10480_10522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (22))){
var inst_10461 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
var statearr_10481_10523 = state_10467__$1;
(statearr_10481_10523[(2)] = inst_10461);

(statearr_10481_10523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (6))){
var inst_10465 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10467__$1,inst_10465);
} else {
if((state_val_10468 === (25))){
var state_10467__$1 = state_10467;
var statearr_10482_10524 = state_10467__$1;
(statearr_10482_10524[(2)] = null);

(statearr_10482_10524[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (17))){
var inst_10441 = (state_10467[(14)]);
var state_10467__$1 = state_10467;
var statearr_10483_10525 = state_10467__$1;
(statearr_10483_10525[(2)] = inst_10441);

(statearr_10483_10525[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (3))){
var inst_10401 = (state_10467[(9)]);
var state_10467__$1 = state_10467;
var statearr_10484_10526 = state_10467__$1;
(statearr_10484_10526[(2)] = inst_10401);

(statearr_10484_10526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (12))){
var inst_10441 = (state_10467[(14)]);
var inst_10427 = (state_10467[(15)]);
var inst_10422 = (state_10467[(16)]);
var inst_10441__$1 = inst_10422.call(null,inst_10427);
var state_10467__$1 = (function (){var statearr_10485 = state_10467;
(statearr_10485[(14)] = inst_10441__$1);

return statearr_10485;
})();
if(cljs.core.truth_(inst_10441__$1)){
var statearr_10486_10527 = state_10467__$1;
(statearr_10486_10527[(1)] = (17));

} else {
var statearr_10487_10528 = state_10467__$1;
(statearr_10487_10528[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (2))){
var inst_10401 = (state_10467[(9)]);
var inst_10404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10401);
var state_10467__$1 = state_10467;
var statearr_10488_10529 = state_10467__$1;
(statearr_10488_10529[(2)] = inst_10404);

(statearr_10488_10529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (23))){
var inst_10452 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
if(cljs.core.truth_(inst_10452)){
var statearr_10489_10530 = state_10467__$1;
(statearr_10489_10530[(1)] = (24));

} else {
var statearr_10490_10531 = state_10467__$1;
(statearr_10490_10531[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (19))){
var inst_10449 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
if(cljs.core.truth_(inst_10449)){
var statearr_10491_10532 = state_10467__$1;
(statearr_10491_10532[(1)] = (20));

} else {
var statearr_10492_10533 = state_10467__$1;
(statearr_10492_10533[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (11))){
var inst_10426 = (state_10467[(8)]);
var inst_10432 = (inst_10426 == null);
var state_10467__$1 = state_10467;
if(cljs.core.truth_(inst_10432)){
var statearr_10493_10534 = state_10467__$1;
(statearr_10493_10534[(1)] = (14));

} else {
var statearr_10494_10535 = state_10467__$1;
(statearr_10494_10535[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (9))){
var inst_10419 = (state_10467[(10)]);
var inst_10419__$1 = (state_10467[(2)]);
var inst_10420 = cljs.core.get.call(null,inst_10419__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10421 = cljs.core.get.call(null,inst_10419__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10422 = cljs.core.get.call(null,inst_10419__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_10467__$1 = (function (){var statearr_10495 = state_10467;
(statearr_10495[(17)] = inst_10421);

(statearr_10495[(10)] = inst_10419__$1);

(statearr_10495[(16)] = inst_10422);

return statearr_10495;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10467__$1,(10),inst_10420);
} else {
if((state_val_10468 === (5))){
var inst_10411 = (state_10467[(7)]);
var inst_10414 = cljs.core.seq_QMARK_.call(null,inst_10411);
var state_10467__$1 = state_10467;
if(inst_10414){
var statearr_10496_10536 = state_10467__$1;
(statearr_10496_10536[(1)] = (7));

} else {
var statearr_10497_10537 = state_10467__$1;
(statearr_10497_10537[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (14))){
var inst_10427 = (state_10467[(15)]);
var inst_10434 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10427);
var state_10467__$1 = state_10467;
var statearr_10498_10538 = state_10467__$1;
(statearr_10498_10538[(2)] = inst_10434);

(statearr_10498_10538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (26))){
var inst_10457 = (state_10467[(2)]);
var state_10467__$1 = state_10467;
var statearr_10499_10539 = state_10467__$1;
(statearr_10499_10539[(2)] = inst_10457);

(statearr_10499_10539[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (16))){
var inst_10437 = (state_10467[(2)]);
var inst_10438 = calc_state.call(null);
var inst_10411 = inst_10438;
var state_10467__$1 = (function (){var statearr_10500 = state_10467;
(statearr_10500[(7)] = inst_10411);

(statearr_10500[(18)] = inst_10437);

return statearr_10500;
})();
var statearr_10501_10540 = state_10467__$1;
(statearr_10501_10540[(2)] = null);

(statearr_10501_10540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (10))){
var inst_10427 = (state_10467[(15)]);
var inst_10426 = (state_10467[(8)]);
var inst_10425 = (state_10467[(2)]);
var inst_10426__$1 = cljs.core.nth.call(null,inst_10425,(0),null);
var inst_10427__$1 = cljs.core.nth.call(null,inst_10425,(1),null);
var inst_10428 = (inst_10426__$1 == null);
var inst_10429 = cljs.core._EQ_.call(null,inst_10427__$1,change);
var inst_10430 = (inst_10428) || (inst_10429);
var state_10467__$1 = (function (){var statearr_10502 = state_10467;
(statearr_10502[(15)] = inst_10427__$1);

(statearr_10502[(8)] = inst_10426__$1);

return statearr_10502;
})();
if(cljs.core.truth_(inst_10430)){
var statearr_10503_10541 = state_10467__$1;
(statearr_10503_10541[(1)] = (11));

} else {
var statearr_10504_10542 = state_10467__$1;
(statearr_10504_10542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (18))){
var inst_10427 = (state_10467[(15)]);
var inst_10421 = (state_10467[(17)]);
var inst_10422 = (state_10467[(16)]);
var inst_10444 = cljs.core.empty_QMARK_.call(null,inst_10422);
var inst_10445 = inst_10421.call(null,inst_10427);
var inst_10446 = cljs.core.not.call(null,inst_10445);
var inst_10447 = (inst_10444) && (inst_10446);
var state_10467__$1 = state_10467;
var statearr_10505_10543 = state_10467__$1;
(statearr_10505_10543[(2)] = inst_10447);

(statearr_10505_10543[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10468 === (8))){
var inst_10411 = (state_10467[(7)]);
var state_10467__$1 = state_10467;
var statearr_10506_10544 = state_10467__$1;
(statearr_10506_10544[(2)] = inst_10411);

(statearr_10506_10544[(1)] = (9));


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
});})(c__6540__auto___10514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6478__auto__,c__6540__auto___10514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6479__auto__ = null;
var cljs$core$async$mix_$_state_machine__6479__auto____0 = (function (){
var statearr_10510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10510[(0)] = cljs$core$async$mix_$_state_machine__6479__auto__);

(statearr_10510[(1)] = (1));

return statearr_10510;
});
var cljs$core$async$mix_$_state_machine__6479__auto____1 = (function (state_10467){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_10467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e10511){if((e10511 instanceof Object)){
var ex__6482__auto__ = e10511;
var statearr_10512_10545 = state_10467;
(statearr_10512_10545[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10546 = state_10467;
state_10467 = G__10546;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6479__auto__ = function(state_10467){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6479__auto____1.call(this,state_10467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6479__auto____0;
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6479__auto____1;
return cljs$core$async$mix_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___10514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6542__auto__ = (function (){var statearr_10513 = f__6541__auto__.call(null);
(statearr_10513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___10514);

return statearr_10513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___10514,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj10548 = {};
return obj10548;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__10550 = arguments.length;
switch (G__10550) {
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
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
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
var G__10554 = arguments.length;
switch (G__10554) {
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
var or__4182__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4182__auto__,mults){
return (function (p1__10552_SHARP_){
if(cljs.core.truth_(p1__10552_SHARP_.call(null,topic))){
return p1__10552_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10552_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t10555 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10555 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta10556){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta10556 = meta10556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10555.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t10555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t10555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t10555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t10555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t10555.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t10555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10557){
var self__ = this;
var _10557__$1 = this;
return self__.meta10556;
});})(mults,ensure_mult))
;

cljs.core.async.t10555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10557,meta10556__$1){
var self__ = this;
var _10557__$1 = this;
return (new cljs.core.async.t10555(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta10556__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t10555.cljs$lang$type = true;

cljs.core.async.t10555.cljs$lang$ctorStr = "cljs.core.async/t10555";

cljs.core.async.t10555.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t10555");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t10555 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t10555(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta10556){
return (new cljs.core.async.t10555(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta10556));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t10555(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___10678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___10678,mults,ensure_mult,p){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___10678,mults,ensure_mult,p){
return (function (state_10629){
var state_val_10630 = (state_10629[(1)]);
if((state_val_10630 === (7))){
var inst_10625 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
var statearr_10631_10679 = state_10629__$1;
(statearr_10631_10679[(2)] = inst_10625);

(statearr_10631_10679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (20))){
var state_10629__$1 = state_10629;
var statearr_10632_10680 = state_10629__$1;
(statearr_10632_10680[(2)] = null);

(statearr_10632_10680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (1))){
var state_10629__$1 = state_10629;
var statearr_10633_10681 = state_10629__$1;
(statearr_10633_10681[(2)] = null);

(statearr_10633_10681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (24))){
var inst_10608 = (state_10629[(7)]);
var inst_10617 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10608);
var state_10629__$1 = state_10629;
var statearr_10634_10682 = state_10629__$1;
(statearr_10634_10682[(2)] = inst_10617);

(statearr_10634_10682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (4))){
var inst_10560 = (state_10629[(8)]);
var inst_10560__$1 = (state_10629[(2)]);
var inst_10561 = (inst_10560__$1 == null);
var state_10629__$1 = (function (){var statearr_10635 = state_10629;
(statearr_10635[(8)] = inst_10560__$1);

return statearr_10635;
})();
if(cljs.core.truth_(inst_10561)){
var statearr_10636_10683 = state_10629__$1;
(statearr_10636_10683[(1)] = (5));

} else {
var statearr_10637_10684 = state_10629__$1;
(statearr_10637_10684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (15))){
var inst_10602 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
var statearr_10638_10685 = state_10629__$1;
(statearr_10638_10685[(2)] = inst_10602);

(statearr_10638_10685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (21))){
var inst_10622 = (state_10629[(2)]);
var state_10629__$1 = (function (){var statearr_10639 = state_10629;
(statearr_10639[(9)] = inst_10622);

return statearr_10639;
})();
var statearr_10640_10686 = state_10629__$1;
(statearr_10640_10686[(2)] = null);

(statearr_10640_10686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (13))){
var inst_10584 = (state_10629[(10)]);
var inst_10586 = cljs.core.chunked_seq_QMARK_.call(null,inst_10584);
var state_10629__$1 = state_10629;
if(inst_10586){
var statearr_10641_10687 = state_10629__$1;
(statearr_10641_10687[(1)] = (16));

} else {
var statearr_10642_10688 = state_10629__$1;
(statearr_10642_10688[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (22))){
var inst_10614 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
if(cljs.core.truth_(inst_10614)){
var statearr_10643_10689 = state_10629__$1;
(statearr_10643_10689[(1)] = (23));

} else {
var statearr_10644_10690 = state_10629__$1;
(statearr_10644_10690[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (6))){
var inst_10610 = (state_10629[(11)]);
var inst_10560 = (state_10629[(8)]);
var inst_10608 = (state_10629[(7)]);
var inst_10608__$1 = topic_fn.call(null,inst_10560);
var inst_10609 = cljs.core.deref.call(null,mults);
var inst_10610__$1 = cljs.core.get.call(null,inst_10609,inst_10608__$1);
var state_10629__$1 = (function (){var statearr_10645 = state_10629;
(statearr_10645[(11)] = inst_10610__$1);

(statearr_10645[(7)] = inst_10608__$1);

return statearr_10645;
})();
if(cljs.core.truth_(inst_10610__$1)){
var statearr_10646_10691 = state_10629__$1;
(statearr_10646_10691[(1)] = (19));

} else {
var statearr_10647_10692 = state_10629__$1;
(statearr_10647_10692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (25))){
var inst_10619 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
var statearr_10648_10693 = state_10629__$1;
(statearr_10648_10693[(2)] = inst_10619);

(statearr_10648_10693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (17))){
var inst_10584 = (state_10629[(10)]);
var inst_10593 = cljs.core.first.call(null,inst_10584);
var inst_10594 = cljs.core.async.muxch_STAR_.call(null,inst_10593);
var inst_10595 = cljs.core.async.close_BANG_.call(null,inst_10594);
var inst_10596 = cljs.core.next.call(null,inst_10584);
var inst_10570 = inst_10596;
var inst_10571 = null;
var inst_10572 = (0);
var inst_10573 = (0);
var state_10629__$1 = (function (){var statearr_10649 = state_10629;
(statearr_10649[(12)] = inst_10573);

(statearr_10649[(13)] = inst_10570);

(statearr_10649[(14)] = inst_10571);

(statearr_10649[(15)] = inst_10572);

(statearr_10649[(16)] = inst_10595);

return statearr_10649;
})();
var statearr_10650_10694 = state_10629__$1;
(statearr_10650_10694[(2)] = null);

(statearr_10650_10694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (3))){
var inst_10627 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10629__$1,inst_10627);
} else {
if((state_val_10630 === (12))){
var inst_10604 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
var statearr_10651_10695 = state_10629__$1;
(statearr_10651_10695[(2)] = inst_10604);

(statearr_10651_10695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (2))){
var state_10629__$1 = state_10629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10629__$1,(4),ch);
} else {
if((state_val_10630 === (23))){
var state_10629__$1 = state_10629;
var statearr_10652_10696 = state_10629__$1;
(statearr_10652_10696[(2)] = null);

(statearr_10652_10696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (19))){
var inst_10610 = (state_10629[(11)]);
var inst_10560 = (state_10629[(8)]);
var inst_10612 = cljs.core.async.muxch_STAR_.call(null,inst_10610);
var state_10629__$1 = state_10629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10629__$1,(22),inst_10612,inst_10560);
} else {
if((state_val_10630 === (11))){
var inst_10570 = (state_10629[(13)]);
var inst_10584 = (state_10629[(10)]);
var inst_10584__$1 = cljs.core.seq.call(null,inst_10570);
var state_10629__$1 = (function (){var statearr_10653 = state_10629;
(statearr_10653[(10)] = inst_10584__$1);

return statearr_10653;
})();
if(inst_10584__$1){
var statearr_10654_10697 = state_10629__$1;
(statearr_10654_10697[(1)] = (13));

} else {
var statearr_10655_10698 = state_10629__$1;
(statearr_10655_10698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (9))){
var inst_10606 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
var statearr_10656_10699 = state_10629__$1;
(statearr_10656_10699[(2)] = inst_10606);

(statearr_10656_10699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (5))){
var inst_10567 = cljs.core.deref.call(null,mults);
var inst_10568 = cljs.core.vals.call(null,inst_10567);
var inst_10569 = cljs.core.seq.call(null,inst_10568);
var inst_10570 = inst_10569;
var inst_10571 = null;
var inst_10572 = (0);
var inst_10573 = (0);
var state_10629__$1 = (function (){var statearr_10657 = state_10629;
(statearr_10657[(12)] = inst_10573);

(statearr_10657[(13)] = inst_10570);

(statearr_10657[(14)] = inst_10571);

(statearr_10657[(15)] = inst_10572);

return statearr_10657;
})();
var statearr_10658_10700 = state_10629__$1;
(statearr_10658_10700[(2)] = null);

(statearr_10658_10700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (14))){
var state_10629__$1 = state_10629;
var statearr_10662_10701 = state_10629__$1;
(statearr_10662_10701[(2)] = null);

(statearr_10662_10701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (16))){
var inst_10584 = (state_10629[(10)]);
var inst_10588 = cljs.core.chunk_first.call(null,inst_10584);
var inst_10589 = cljs.core.chunk_rest.call(null,inst_10584);
var inst_10590 = cljs.core.count.call(null,inst_10588);
var inst_10570 = inst_10589;
var inst_10571 = inst_10588;
var inst_10572 = inst_10590;
var inst_10573 = (0);
var state_10629__$1 = (function (){var statearr_10663 = state_10629;
(statearr_10663[(12)] = inst_10573);

(statearr_10663[(13)] = inst_10570);

(statearr_10663[(14)] = inst_10571);

(statearr_10663[(15)] = inst_10572);

return statearr_10663;
})();
var statearr_10664_10702 = state_10629__$1;
(statearr_10664_10702[(2)] = null);

(statearr_10664_10702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (10))){
var inst_10573 = (state_10629[(12)]);
var inst_10570 = (state_10629[(13)]);
var inst_10571 = (state_10629[(14)]);
var inst_10572 = (state_10629[(15)]);
var inst_10578 = cljs.core._nth.call(null,inst_10571,inst_10573);
var inst_10579 = cljs.core.async.muxch_STAR_.call(null,inst_10578);
var inst_10580 = cljs.core.async.close_BANG_.call(null,inst_10579);
var inst_10581 = (inst_10573 + (1));
var tmp10659 = inst_10570;
var tmp10660 = inst_10571;
var tmp10661 = inst_10572;
var inst_10570__$1 = tmp10659;
var inst_10571__$1 = tmp10660;
var inst_10572__$1 = tmp10661;
var inst_10573__$1 = inst_10581;
var state_10629__$1 = (function (){var statearr_10665 = state_10629;
(statearr_10665[(12)] = inst_10573__$1);

(statearr_10665[(13)] = inst_10570__$1);

(statearr_10665[(14)] = inst_10571__$1);

(statearr_10665[(15)] = inst_10572__$1);

(statearr_10665[(17)] = inst_10580);

return statearr_10665;
})();
var statearr_10666_10703 = state_10629__$1;
(statearr_10666_10703[(2)] = null);

(statearr_10666_10703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (18))){
var inst_10599 = (state_10629[(2)]);
var state_10629__$1 = state_10629;
var statearr_10667_10704 = state_10629__$1;
(statearr_10667_10704[(2)] = inst_10599);

(statearr_10667_10704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10630 === (8))){
var inst_10573 = (state_10629[(12)]);
var inst_10572 = (state_10629[(15)]);
var inst_10575 = (inst_10573 < inst_10572);
var inst_10576 = inst_10575;
var state_10629__$1 = state_10629;
if(cljs.core.truth_(inst_10576)){
var statearr_10668_10705 = state_10629__$1;
(statearr_10668_10705[(1)] = (10));

} else {
var statearr_10669_10706 = state_10629__$1;
(statearr_10669_10706[(1)] = (11));

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
});})(c__6540__auto___10678,mults,ensure_mult,p))
;
return ((function (switch__6478__auto__,c__6540__auto___10678,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_10673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10673[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_10673[(1)] = (1));

return statearr_10673;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_10629){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_10629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e10674){if((e10674 instanceof Object)){
var ex__6482__auto__ = e10674;
var statearr_10675_10707 = state_10629;
(statearr_10675_10707[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10708 = state_10629;
state_10629 = G__10708;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_10629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_10629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___10678,mults,ensure_mult,p))
})();
var state__6542__auto__ = (function (){var statearr_10676 = f__6541__auto__.call(null);
(statearr_10676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___10678);

return statearr_10676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___10678,mults,ensure_mult,p))
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
var G__10710 = arguments.length;
switch (G__10710) {
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
var G__10713 = arguments.length;
switch (G__10713) {
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
var G__10716 = arguments.length;
switch (G__10716) {
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
var c__6540__auto___10786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___10786,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___10786,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10755){
var state_val_10756 = (state_10755[(1)]);
if((state_val_10756 === (7))){
var state_10755__$1 = state_10755;
var statearr_10757_10787 = state_10755__$1;
(statearr_10757_10787[(2)] = null);

(statearr_10757_10787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (1))){
var state_10755__$1 = state_10755;
var statearr_10758_10788 = state_10755__$1;
(statearr_10758_10788[(2)] = null);

(statearr_10758_10788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (4))){
var inst_10719 = (state_10755[(7)]);
var inst_10721 = (inst_10719 < cnt);
var state_10755__$1 = state_10755;
if(cljs.core.truth_(inst_10721)){
var statearr_10759_10789 = state_10755__$1;
(statearr_10759_10789[(1)] = (6));

} else {
var statearr_10760_10790 = state_10755__$1;
(statearr_10760_10790[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (15))){
var inst_10751 = (state_10755[(2)]);
var state_10755__$1 = state_10755;
var statearr_10761_10791 = state_10755__$1;
(statearr_10761_10791[(2)] = inst_10751);

(statearr_10761_10791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (13))){
var inst_10744 = cljs.core.async.close_BANG_.call(null,out);
var state_10755__$1 = state_10755;
var statearr_10762_10792 = state_10755__$1;
(statearr_10762_10792[(2)] = inst_10744);

(statearr_10762_10792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (6))){
var state_10755__$1 = state_10755;
var statearr_10763_10793 = state_10755__$1;
(statearr_10763_10793[(2)] = null);

(statearr_10763_10793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (3))){
var inst_10753 = (state_10755[(2)]);
var state_10755__$1 = state_10755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10755__$1,inst_10753);
} else {
if((state_val_10756 === (12))){
var inst_10741 = (state_10755[(8)]);
var inst_10741__$1 = (state_10755[(2)]);
var inst_10742 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10741__$1);
var state_10755__$1 = (function (){var statearr_10764 = state_10755;
(statearr_10764[(8)] = inst_10741__$1);

return statearr_10764;
})();
if(cljs.core.truth_(inst_10742)){
var statearr_10765_10794 = state_10755__$1;
(statearr_10765_10794[(1)] = (13));

} else {
var statearr_10766_10795 = state_10755__$1;
(statearr_10766_10795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (2))){
var inst_10718 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10719 = (0);
var state_10755__$1 = (function (){var statearr_10767 = state_10755;
(statearr_10767[(7)] = inst_10719);

(statearr_10767[(9)] = inst_10718);

return statearr_10767;
})();
var statearr_10768_10796 = state_10755__$1;
(statearr_10768_10796[(2)] = null);

(statearr_10768_10796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (11))){
var inst_10719 = (state_10755[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10755,(10),Object,null,(9));
var inst_10728 = chs__$1.call(null,inst_10719);
var inst_10729 = done.call(null,inst_10719);
var inst_10730 = cljs.core.async.take_BANG_.call(null,inst_10728,inst_10729);
var state_10755__$1 = state_10755;
var statearr_10769_10797 = state_10755__$1;
(statearr_10769_10797[(2)] = inst_10730);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10755__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (9))){
var inst_10719 = (state_10755[(7)]);
var inst_10732 = (state_10755[(2)]);
var inst_10733 = (inst_10719 + (1));
var inst_10719__$1 = inst_10733;
var state_10755__$1 = (function (){var statearr_10770 = state_10755;
(statearr_10770[(7)] = inst_10719__$1);

(statearr_10770[(10)] = inst_10732);

return statearr_10770;
})();
var statearr_10771_10798 = state_10755__$1;
(statearr_10771_10798[(2)] = null);

(statearr_10771_10798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (5))){
var inst_10739 = (state_10755[(2)]);
var state_10755__$1 = (function (){var statearr_10772 = state_10755;
(statearr_10772[(11)] = inst_10739);

return statearr_10772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10755__$1,(12),dchan);
} else {
if((state_val_10756 === (14))){
var inst_10741 = (state_10755[(8)]);
var inst_10746 = cljs.core.apply.call(null,f,inst_10741);
var state_10755__$1 = state_10755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10755__$1,(16),out,inst_10746);
} else {
if((state_val_10756 === (16))){
var inst_10748 = (state_10755[(2)]);
var state_10755__$1 = (function (){var statearr_10773 = state_10755;
(statearr_10773[(12)] = inst_10748);

return statearr_10773;
})();
var statearr_10774_10799 = state_10755__$1;
(statearr_10774_10799[(2)] = null);

(statearr_10774_10799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (10))){
var inst_10723 = (state_10755[(2)]);
var inst_10724 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10755__$1 = (function (){var statearr_10775 = state_10755;
(statearr_10775[(13)] = inst_10723);

return statearr_10775;
})();
var statearr_10776_10800 = state_10755__$1;
(statearr_10776_10800[(2)] = inst_10724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10755__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (8))){
var inst_10737 = (state_10755[(2)]);
var state_10755__$1 = state_10755;
var statearr_10777_10801 = state_10755__$1;
(statearr_10777_10801[(2)] = inst_10737);

(statearr_10777_10801[(1)] = (5));


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
});})(c__6540__auto___10786,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___10786,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_10781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10781[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_10781[(1)] = (1));

return statearr_10781;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_10755){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_10755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e10782){if((e10782 instanceof Object)){
var ex__6482__auto__ = e10782;
var statearr_10783_10802 = state_10755;
(statearr_10783_10802[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10803 = state_10755;
state_10755 = G__10803;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_10755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_10755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___10786,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_10784 = f__6541__auto__.call(null);
(statearr_10784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___10786);

return statearr_10784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___10786,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__10806 = arguments.length;
switch (G__10806) {
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
var c__6540__auto___10861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___10861,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___10861,out){
return (function (state_10836){
var state_val_10837 = (state_10836[(1)]);
if((state_val_10837 === (7))){
var inst_10815 = (state_10836[(7)]);
var inst_10816 = (state_10836[(8)]);
var inst_10815__$1 = (state_10836[(2)]);
var inst_10816__$1 = cljs.core.nth.call(null,inst_10815__$1,(0),null);
var inst_10817 = cljs.core.nth.call(null,inst_10815__$1,(1),null);
var inst_10818 = (inst_10816__$1 == null);
var state_10836__$1 = (function (){var statearr_10838 = state_10836;
(statearr_10838[(9)] = inst_10817);

(statearr_10838[(7)] = inst_10815__$1);

(statearr_10838[(8)] = inst_10816__$1);

return statearr_10838;
})();
if(cljs.core.truth_(inst_10818)){
var statearr_10839_10862 = state_10836__$1;
(statearr_10839_10862[(1)] = (8));

} else {
var statearr_10840_10863 = state_10836__$1;
(statearr_10840_10863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10837 === (1))){
var inst_10807 = cljs.core.vec.call(null,chs);
var inst_10808 = inst_10807;
var state_10836__$1 = (function (){var statearr_10841 = state_10836;
(statearr_10841[(10)] = inst_10808);

return statearr_10841;
})();
var statearr_10842_10864 = state_10836__$1;
(statearr_10842_10864[(2)] = null);

(statearr_10842_10864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10837 === (4))){
var inst_10808 = (state_10836[(10)]);
var state_10836__$1 = state_10836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10836__$1,(7),inst_10808);
} else {
if((state_val_10837 === (6))){
var inst_10832 = (state_10836[(2)]);
var state_10836__$1 = state_10836;
var statearr_10843_10865 = state_10836__$1;
(statearr_10843_10865[(2)] = inst_10832);

(statearr_10843_10865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10837 === (3))){
var inst_10834 = (state_10836[(2)]);
var state_10836__$1 = state_10836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10836__$1,inst_10834);
} else {
if((state_val_10837 === (2))){
var inst_10808 = (state_10836[(10)]);
var inst_10810 = cljs.core.count.call(null,inst_10808);
var inst_10811 = (inst_10810 > (0));
var state_10836__$1 = state_10836;
if(cljs.core.truth_(inst_10811)){
var statearr_10845_10866 = state_10836__$1;
(statearr_10845_10866[(1)] = (4));

} else {
var statearr_10846_10867 = state_10836__$1;
(statearr_10846_10867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10837 === (11))){
var inst_10808 = (state_10836[(10)]);
var inst_10825 = (state_10836[(2)]);
var tmp10844 = inst_10808;
var inst_10808__$1 = tmp10844;
var state_10836__$1 = (function (){var statearr_10847 = state_10836;
(statearr_10847[(11)] = inst_10825);

(statearr_10847[(10)] = inst_10808__$1);

return statearr_10847;
})();
var statearr_10848_10868 = state_10836__$1;
(statearr_10848_10868[(2)] = null);

(statearr_10848_10868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10837 === (9))){
var inst_10816 = (state_10836[(8)]);
var state_10836__$1 = state_10836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10836__$1,(11),out,inst_10816);
} else {
if((state_val_10837 === (5))){
var inst_10830 = cljs.core.async.close_BANG_.call(null,out);
var state_10836__$1 = state_10836;
var statearr_10849_10869 = state_10836__$1;
(statearr_10849_10869[(2)] = inst_10830);

(statearr_10849_10869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10837 === (10))){
var inst_10828 = (state_10836[(2)]);
var state_10836__$1 = state_10836;
var statearr_10850_10870 = state_10836__$1;
(statearr_10850_10870[(2)] = inst_10828);

(statearr_10850_10870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10837 === (8))){
var inst_10817 = (state_10836[(9)]);
var inst_10815 = (state_10836[(7)]);
var inst_10816 = (state_10836[(8)]);
var inst_10808 = (state_10836[(10)]);
var inst_10820 = (function (){var c = inst_10817;
var v = inst_10816;
var vec__10813 = inst_10815;
var cs = inst_10808;
return ((function (c,v,vec__10813,cs,inst_10817,inst_10815,inst_10816,inst_10808,state_val_10837,c__6540__auto___10861,out){
return (function (p1__10804_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10804_SHARP_);
});
;})(c,v,vec__10813,cs,inst_10817,inst_10815,inst_10816,inst_10808,state_val_10837,c__6540__auto___10861,out))
})();
var inst_10821 = cljs.core.filterv.call(null,inst_10820,inst_10808);
var inst_10808__$1 = inst_10821;
var state_10836__$1 = (function (){var statearr_10851 = state_10836;
(statearr_10851[(10)] = inst_10808__$1);

return statearr_10851;
})();
var statearr_10852_10871 = state_10836__$1;
(statearr_10852_10871[(2)] = null);

(statearr_10852_10871[(1)] = (2));


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
});})(c__6540__auto___10861,out))
;
return ((function (switch__6478__auto__,c__6540__auto___10861,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_10856 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10856[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_10856[(1)] = (1));

return statearr_10856;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_10836){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_10836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e10857){if((e10857 instanceof Object)){
var ex__6482__auto__ = e10857;
var statearr_10858_10872 = state_10836;
(statearr_10858_10872[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10873 = state_10836;
state_10836 = G__10873;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_10836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_10836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___10861,out))
})();
var state__6542__auto__ = (function (){var statearr_10859 = f__6541__auto__.call(null);
(statearr_10859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___10861);

return statearr_10859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___10861,out))
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
var G__10875 = arguments.length;
switch (G__10875) {
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
var c__6540__auto___10923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___10923,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___10923,out){
return (function (state_10899){
var state_val_10900 = (state_10899[(1)]);
if((state_val_10900 === (7))){
var inst_10881 = (state_10899[(7)]);
var inst_10881__$1 = (state_10899[(2)]);
var inst_10882 = (inst_10881__$1 == null);
var inst_10883 = cljs.core.not.call(null,inst_10882);
var state_10899__$1 = (function (){var statearr_10901 = state_10899;
(statearr_10901[(7)] = inst_10881__$1);

return statearr_10901;
})();
if(inst_10883){
var statearr_10902_10924 = state_10899__$1;
(statearr_10902_10924[(1)] = (8));

} else {
var statearr_10903_10925 = state_10899__$1;
(statearr_10903_10925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (1))){
var inst_10876 = (0);
var state_10899__$1 = (function (){var statearr_10904 = state_10899;
(statearr_10904[(8)] = inst_10876);

return statearr_10904;
})();
var statearr_10905_10926 = state_10899__$1;
(statearr_10905_10926[(2)] = null);

(statearr_10905_10926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (4))){
var state_10899__$1 = state_10899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10899__$1,(7),ch);
} else {
if((state_val_10900 === (6))){
var inst_10894 = (state_10899[(2)]);
var state_10899__$1 = state_10899;
var statearr_10906_10927 = state_10899__$1;
(statearr_10906_10927[(2)] = inst_10894);

(statearr_10906_10927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (3))){
var inst_10896 = (state_10899[(2)]);
var inst_10897 = cljs.core.async.close_BANG_.call(null,out);
var state_10899__$1 = (function (){var statearr_10907 = state_10899;
(statearr_10907[(9)] = inst_10896);

return statearr_10907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10899__$1,inst_10897);
} else {
if((state_val_10900 === (2))){
var inst_10876 = (state_10899[(8)]);
var inst_10878 = (inst_10876 < n);
var state_10899__$1 = state_10899;
if(cljs.core.truth_(inst_10878)){
var statearr_10908_10928 = state_10899__$1;
(statearr_10908_10928[(1)] = (4));

} else {
var statearr_10909_10929 = state_10899__$1;
(statearr_10909_10929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (11))){
var inst_10876 = (state_10899[(8)]);
var inst_10886 = (state_10899[(2)]);
var inst_10887 = (inst_10876 + (1));
var inst_10876__$1 = inst_10887;
var state_10899__$1 = (function (){var statearr_10910 = state_10899;
(statearr_10910[(10)] = inst_10886);

(statearr_10910[(8)] = inst_10876__$1);

return statearr_10910;
})();
var statearr_10911_10930 = state_10899__$1;
(statearr_10911_10930[(2)] = null);

(statearr_10911_10930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (9))){
var state_10899__$1 = state_10899;
var statearr_10912_10931 = state_10899__$1;
(statearr_10912_10931[(2)] = null);

(statearr_10912_10931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (5))){
var state_10899__$1 = state_10899;
var statearr_10913_10932 = state_10899__$1;
(statearr_10913_10932[(2)] = null);

(statearr_10913_10932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (10))){
var inst_10891 = (state_10899[(2)]);
var state_10899__$1 = state_10899;
var statearr_10914_10933 = state_10899__$1;
(statearr_10914_10933[(2)] = inst_10891);

(statearr_10914_10933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10900 === (8))){
var inst_10881 = (state_10899[(7)]);
var state_10899__$1 = state_10899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10899__$1,(11),out,inst_10881);
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
});})(c__6540__auto___10923,out))
;
return ((function (switch__6478__auto__,c__6540__auto___10923,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_10918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10918[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_10918[(1)] = (1));

return statearr_10918;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_10899){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_10899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e10919){if((e10919 instanceof Object)){
var ex__6482__auto__ = e10919;
var statearr_10920_10934 = state_10899;
(statearr_10920_10934[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10935 = state_10899;
state_10899 = G__10935;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_10899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_10899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___10923,out))
})();
var state__6542__auto__ = (function (){var statearr_10921 = f__6541__auto__.call(null);
(statearr_10921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___10923);

return statearr_10921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___10923,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t10943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10943 = (function (ch,f,map_LT_,meta10944){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10944 = meta10944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t10946 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10946 = (function (fn1,_,meta10944,map_LT_,f,ch,meta10947){
this.fn1 = fn1;
this._ = _;
this.meta10944 = meta10944;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10947 = meta10947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10946.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t10946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10936_SHARP_){
return f1.call(null,(((p1__10936_SHARP_ == null))?null:self__.f.call(null,p1__10936_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t10946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10948){
var self__ = this;
var _10948__$1 = this;
return self__.meta10947;
});})(___$1))
;

cljs.core.async.t10946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10948,meta10947__$1){
var self__ = this;
var _10948__$1 = this;
return (new cljs.core.async.t10946(self__.fn1,self__._,self__.meta10944,self__.map_LT_,self__.f,self__.ch,meta10947__$1));
});})(___$1))
;

cljs.core.async.t10946.cljs$lang$type = true;

cljs.core.async.t10946.cljs$lang$ctorStr = "cljs.core.async/t10946";

cljs.core.async.t10946.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t10946");
});})(___$1))
;

cljs.core.async.__GT_t10946 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t10946(fn1__$1,___$2,meta10944__$1,map_LT___$1,f__$1,ch__$1,meta10947){
return (new cljs.core.async.t10946(fn1__$1,___$2,meta10944__$1,map_LT___$1,f__$1,ch__$1,meta10947));
});})(___$1))
;

}

return (new cljs.core.async.t10946(fn1,___$1,self__.meta10944,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4170__auto__ = ret;
if(cljs.core.truth_(and__4170__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4170__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10945){
var self__ = this;
var _10945__$1 = this;
return self__.meta10944;
});

cljs.core.async.t10943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10945,meta10944__$1){
var self__ = this;
var _10945__$1 = this;
return (new cljs.core.async.t10943(self__.ch,self__.f,self__.map_LT_,meta10944__$1));
});

cljs.core.async.t10943.cljs$lang$type = true;

cljs.core.async.t10943.cljs$lang$ctorStr = "cljs.core.async/t10943";

cljs.core.async.t10943.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t10943");
});

cljs.core.async.__GT_t10943 = (function cljs$core$async$map_LT__$___GT_t10943(ch__$1,f__$1,map_LT___$1,meta10944){
return (new cljs.core.async.t10943(ch__$1,f__$1,map_LT___$1,meta10944));
});

}

return (new cljs.core.async.t10943(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t10952 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10952 = (function (ch,f,map_GT_,meta10953){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10953 = meta10953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10952.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t10952.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10952.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10954){
var self__ = this;
var _10954__$1 = this;
return self__.meta10953;
});

cljs.core.async.t10952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10954,meta10953__$1){
var self__ = this;
var _10954__$1 = this;
return (new cljs.core.async.t10952(self__.ch,self__.f,self__.map_GT_,meta10953__$1));
});

cljs.core.async.t10952.cljs$lang$type = true;

cljs.core.async.t10952.cljs$lang$ctorStr = "cljs.core.async/t10952";

cljs.core.async.t10952.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t10952");
});

cljs.core.async.__GT_t10952 = (function cljs$core$async$map_GT__$___GT_t10952(ch__$1,f__$1,map_GT___$1,meta10953){
return (new cljs.core.async.t10952(ch__$1,f__$1,map_GT___$1,meta10953));
});

}

return (new cljs.core.async.t10952(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t10958 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10958 = (function (ch,p,filter_GT_,meta10959){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10959 = meta10959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10958.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t10958.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10958.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10960){
var self__ = this;
var _10960__$1 = this;
return self__.meta10959;
});

cljs.core.async.t10958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10960,meta10959__$1){
var self__ = this;
var _10960__$1 = this;
return (new cljs.core.async.t10958(self__.ch,self__.p,self__.filter_GT_,meta10959__$1));
});

cljs.core.async.t10958.cljs$lang$type = true;

cljs.core.async.t10958.cljs$lang$ctorStr = "cljs.core.async/t10958";

cljs.core.async.t10958.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t10958");
});

cljs.core.async.__GT_t10958 = (function cljs$core$async$filter_GT__$___GT_t10958(ch__$1,p__$1,filter_GT___$1,meta10959){
return (new cljs.core.async.t10958(ch__$1,p__$1,filter_GT___$1,meta10959));
});

}

return (new cljs.core.async.t10958(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10962 = arguments.length;
switch (G__10962) {
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
var c__6540__auto___11005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___11005,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___11005,out){
return (function (state_10983){
var state_val_10984 = (state_10983[(1)]);
if((state_val_10984 === (7))){
var inst_10979 = (state_10983[(2)]);
var state_10983__$1 = state_10983;
var statearr_10985_11006 = state_10983__$1;
(statearr_10985_11006[(2)] = inst_10979);

(statearr_10985_11006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (1))){
var state_10983__$1 = state_10983;
var statearr_10986_11007 = state_10983__$1;
(statearr_10986_11007[(2)] = null);

(statearr_10986_11007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (4))){
var inst_10965 = (state_10983[(7)]);
var inst_10965__$1 = (state_10983[(2)]);
var inst_10966 = (inst_10965__$1 == null);
var state_10983__$1 = (function (){var statearr_10987 = state_10983;
(statearr_10987[(7)] = inst_10965__$1);

return statearr_10987;
})();
if(cljs.core.truth_(inst_10966)){
var statearr_10988_11008 = state_10983__$1;
(statearr_10988_11008[(1)] = (5));

} else {
var statearr_10989_11009 = state_10983__$1;
(statearr_10989_11009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (6))){
var inst_10965 = (state_10983[(7)]);
var inst_10970 = p.call(null,inst_10965);
var state_10983__$1 = state_10983;
if(cljs.core.truth_(inst_10970)){
var statearr_10990_11010 = state_10983__$1;
(statearr_10990_11010[(1)] = (8));

} else {
var statearr_10991_11011 = state_10983__$1;
(statearr_10991_11011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (3))){
var inst_10981 = (state_10983[(2)]);
var state_10983__$1 = state_10983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10983__$1,inst_10981);
} else {
if((state_val_10984 === (2))){
var state_10983__$1 = state_10983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10983__$1,(4),ch);
} else {
if((state_val_10984 === (11))){
var inst_10973 = (state_10983[(2)]);
var state_10983__$1 = state_10983;
var statearr_10992_11012 = state_10983__$1;
(statearr_10992_11012[(2)] = inst_10973);

(statearr_10992_11012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (9))){
var state_10983__$1 = state_10983;
var statearr_10993_11013 = state_10983__$1;
(statearr_10993_11013[(2)] = null);

(statearr_10993_11013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (5))){
var inst_10968 = cljs.core.async.close_BANG_.call(null,out);
var state_10983__$1 = state_10983;
var statearr_10994_11014 = state_10983__$1;
(statearr_10994_11014[(2)] = inst_10968);

(statearr_10994_11014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (10))){
var inst_10976 = (state_10983[(2)]);
var state_10983__$1 = (function (){var statearr_10995 = state_10983;
(statearr_10995[(8)] = inst_10976);

return statearr_10995;
})();
var statearr_10996_11015 = state_10983__$1;
(statearr_10996_11015[(2)] = null);

(statearr_10996_11015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10984 === (8))){
var inst_10965 = (state_10983[(7)]);
var state_10983__$1 = state_10983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10983__$1,(11),out,inst_10965);
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
});})(c__6540__auto___11005,out))
;
return ((function (switch__6478__auto__,c__6540__auto___11005,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_11000 = [null,null,null,null,null,null,null,null,null];
(statearr_11000[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_11000[(1)] = (1));

return statearr_11000;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_10983){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_10983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e11001){if((e11001 instanceof Object)){
var ex__6482__auto__ = e11001;
var statearr_11002_11016 = state_10983;
(statearr_11002_11016[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11017 = state_10983;
state_10983 = G__11017;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_10983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_10983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___11005,out))
})();
var state__6542__auto__ = (function (){var statearr_11003 = f__6541__auto__.call(null);
(statearr_11003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___11005);

return statearr_11003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___11005,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__11019 = arguments.length;
switch (G__11019) {
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
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_11186){
var state_val_11187 = (state_11186[(1)]);
if((state_val_11187 === (7))){
var inst_11182 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11188_11229 = state_11186__$1;
(statearr_11188_11229[(2)] = inst_11182);

(statearr_11188_11229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (20))){
var inst_11152 = (state_11186[(7)]);
var inst_11163 = (state_11186[(2)]);
var inst_11164 = cljs.core.next.call(null,inst_11152);
var inst_11138 = inst_11164;
var inst_11139 = null;
var inst_11140 = (0);
var inst_11141 = (0);
var state_11186__$1 = (function (){var statearr_11189 = state_11186;
(statearr_11189[(8)] = inst_11139);

(statearr_11189[(9)] = inst_11138);

(statearr_11189[(10)] = inst_11163);

(statearr_11189[(11)] = inst_11140);

(statearr_11189[(12)] = inst_11141);

return statearr_11189;
})();
var statearr_11190_11230 = state_11186__$1;
(statearr_11190_11230[(2)] = null);

(statearr_11190_11230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (1))){
var state_11186__$1 = state_11186;
var statearr_11191_11231 = state_11186__$1;
(statearr_11191_11231[(2)] = null);

(statearr_11191_11231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (4))){
var inst_11127 = (state_11186[(13)]);
var inst_11127__$1 = (state_11186[(2)]);
var inst_11128 = (inst_11127__$1 == null);
var state_11186__$1 = (function (){var statearr_11192 = state_11186;
(statearr_11192[(13)] = inst_11127__$1);

return statearr_11192;
})();
if(cljs.core.truth_(inst_11128)){
var statearr_11193_11232 = state_11186__$1;
(statearr_11193_11232[(1)] = (5));

} else {
var statearr_11194_11233 = state_11186__$1;
(statearr_11194_11233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (15))){
var state_11186__$1 = state_11186;
var statearr_11198_11234 = state_11186__$1;
(statearr_11198_11234[(2)] = null);

(statearr_11198_11234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (21))){
var state_11186__$1 = state_11186;
var statearr_11199_11235 = state_11186__$1;
(statearr_11199_11235[(2)] = null);

(statearr_11199_11235[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (13))){
var inst_11139 = (state_11186[(8)]);
var inst_11138 = (state_11186[(9)]);
var inst_11140 = (state_11186[(11)]);
var inst_11141 = (state_11186[(12)]);
var inst_11148 = (state_11186[(2)]);
var inst_11149 = (inst_11141 + (1));
var tmp11195 = inst_11139;
var tmp11196 = inst_11138;
var tmp11197 = inst_11140;
var inst_11138__$1 = tmp11196;
var inst_11139__$1 = tmp11195;
var inst_11140__$1 = tmp11197;
var inst_11141__$1 = inst_11149;
var state_11186__$1 = (function (){var statearr_11200 = state_11186;
(statearr_11200[(8)] = inst_11139__$1);

(statearr_11200[(9)] = inst_11138__$1);

(statearr_11200[(14)] = inst_11148);

(statearr_11200[(11)] = inst_11140__$1);

(statearr_11200[(12)] = inst_11141__$1);

return statearr_11200;
})();
var statearr_11201_11236 = state_11186__$1;
(statearr_11201_11236[(2)] = null);

(statearr_11201_11236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (22))){
var state_11186__$1 = state_11186;
var statearr_11202_11237 = state_11186__$1;
(statearr_11202_11237[(2)] = null);

(statearr_11202_11237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (6))){
var inst_11127 = (state_11186[(13)]);
var inst_11136 = f.call(null,inst_11127);
var inst_11137 = cljs.core.seq.call(null,inst_11136);
var inst_11138 = inst_11137;
var inst_11139 = null;
var inst_11140 = (0);
var inst_11141 = (0);
var state_11186__$1 = (function (){var statearr_11203 = state_11186;
(statearr_11203[(8)] = inst_11139);

(statearr_11203[(9)] = inst_11138);

(statearr_11203[(11)] = inst_11140);

(statearr_11203[(12)] = inst_11141);

return statearr_11203;
})();
var statearr_11204_11238 = state_11186__$1;
(statearr_11204_11238[(2)] = null);

(statearr_11204_11238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (17))){
var inst_11152 = (state_11186[(7)]);
var inst_11156 = cljs.core.chunk_first.call(null,inst_11152);
var inst_11157 = cljs.core.chunk_rest.call(null,inst_11152);
var inst_11158 = cljs.core.count.call(null,inst_11156);
var inst_11138 = inst_11157;
var inst_11139 = inst_11156;
var inst_11140 = inst_11158;
var inst_11141 = (0);
var state_11186__$1 = (function (){var statearr_11205 = state_11186;
(statearr_11205[(8)] = inst_11139);

(statearr_11205[(9)] = inst_11138);

(statearr_11205[(11)] = inst_11140);

(statearr_11205[(12)] = inst_11141);

return statearr_11205;
})();
var statearr_11206_11239 = state_11186__$1;
(statearr_11206_11239[(2)] = null);

(statearr_11206_11239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (3))){
var inst_11184 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11186__$1,inst_11184);
} else {
if((state_val_11187 === (12))){
var inst_11172 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11207_11240 = state_11186__$1;
(statearr_11207_11240[(2)] = inst_11172);

(statearr_11207_11240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (2))){
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11186__$1,(4),in$);
} else {
if((state_val_11187 === (23))){
var inst_11180 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11208_11241 = state_11186__$1;
(statearr_11208_11241[(2)] = inst_11180);

(statearr_11208_11241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (19))){
var inst_11167 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11209_11242 = state_11186__$1;
(statearr_11209_11242[(2)] = inst_11167);

(statearr_11209_11242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (11))){
var inst_11152 = (state_11186[(7)]);
var inst_11138 = (state_11186[(9)]);
var inst_11152__$1 = cljs.core.seq.call(null,inst_11138);
var state_11186__$1 = (function (){var statearr_11210 = state_11186;
(statearr_11210[(7)] = inst_11152__$1);

return statearr_11210;
})();
if(inst_11152__$1){
var statearr_11211_11243 = state_11186__$1;
(statearr_11211_11243[(1)] = (14));

} else {
var statearr_11212_11244 = state_11186__$1;
(statearr_11212_11244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (9))){
var inst_11174 = (state_11186[(2)]);
var inst_11175 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11186__$1 = (function (){var statearr_11213 = state_11186;
(statearr_11213[(15)] = inst_11174);

return statearr_11213;
})();
if(cljs.core.truth_(inst_11175)){
var statearr_11214_11245 = state_11186__$1;
(statearr_11214_11245[(1)] = (21));

} else {
var statearr_11215_11246 = state_11186__$1;
(statearr_11215_11246[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (5))){
var inst_11130 = cljs.core.async.close_BANG_.call(null,out);
var state_11186__$1 = state_11186;
var statearr_11216_11247 = state_11186__$1;
(statearr_11216_11247[(2)] = inst_11130);

(statearr_11216_11247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (14))){
var inst_11152 = (state_11186[(7)]);
var inst_11154 = cljs.core.chunked_seq_QMARK_.call(null,inst_11152);
var state_11186__$1 = state_11186;
if(inst_11154){
var statearr_11217_11248 = state_11186__$1;
(statearr_11217_11248[(1)] = (17));

} else {
var statearr_11218_11249 = state_11186__$1;
(statearr_11218_11249[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (16))){
var inst_11170 = (state_11186[(2)]);
var state_11186__$1 = state_11186;
var statearr_11219_11250 = state_11186__$1;
(statearr_11219_11250[(2)] = inst_11170);

(statearr_11219_11250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11187 === (10))){
var inst_11139 = (state_11186[(8)]);
var inst_11141 = (state_11186[(12)]);
var inst_11146 = cljs.core._nth.call(null,inst_11139,inst_11141);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11186__$1,(13),out,inst_11146);
} else {
if((state_val_11187 === (18))){
var inst_11152 = (state_11186[(7)]);
var inst_11161 = cljs.core.first.call(null,inst_11152);
var state_11186__$1 = state_11186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11186__$1,(20),out,inst_11161);
} else {
if((state_val_11187 === (8))){
var inst_11140 = (state_11186[(11)]);
var inst_11141 = (state_11186[(12)]);
var inst_11143 = (inst_11141 < inst_11140);
var inst_11144 = inst_11143;
var state_11186__$1 = state_11186;
if(cljs.core.truth_(inst_11144)){
var statearr_11220_11251 = state_11186__$1;
(statearr_11220_11251[(1)] = (10));

} else {
var statearr_11221_11252 = state_11186__$1;
(statearr_11221_11252[(1)] = (11));

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
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_11225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11225[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__);

(statearr_11225[(1)] = (1));

return statearr_11225;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1 = (function (state_11186){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_11186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e11226){if((e11226 instanceof Object)){
var ex__6482__auto__ = e11226;
var statearr_11227_11253 = state_11186;
(statearr_11227_11253[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11254 = state_11186;
state_11186 = G__11254;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = function(state_11186){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1.call(this,state_11186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_11228 = f__6541__auto__.call(null);
(statearr_11228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_11228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__11256 = arguments.length;
switch (G__11256) {
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
var G__11259 = arguments.length;
switch (G__11259) {
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
var G__11262 = arguments.length;
switch (G__11262) {
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
var c__6540__auto___11312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___11312,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___11312,out){
return (function (state_11286){
var state_val_11287 = (state_11286[(1)]);
if((state_val_11287 === (7))){
var inst_11281 = (state_11286[(2)]);
var state_11286__$1 = state_11286;
var statearr_11288_11313 = state_11286__$1;
(statearr_11288_11313[(2)] = inst_11281);

(statearr_11288_11313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (1))){
var inst_11263 = null;
var state_11286__$1 = (function (){var statearr_11289 = state_11286;
(statearr_11289[(7)] = inst_11263);

return statearr_11289;
})();
var statearr_11290_11314 = state_11286__$1;
(statearr_11290_11314[(2)] = null);

(statearr_11290_11314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (4))){
var inst_11266 = (state_11286[(8)]);
var inst_11266__$1 = (state_11286[(2)]);
var inst_11267 = (inst_11266__$1 == null);
var inst_11268 = cljs.core.not.call(null,inst_11267);
var state_11286__$1 = (function (){var statearr_11291 = state_11286;
(statearr_11291[(8)] = inst_11266__$1);

return statearr_11291;
})();
if(inst_11268){
var statearr_11292_11315 = state_11286__$1;
(statearr_11292_11315[(1)] = (5));

} else {
var statearr_11293_11316 = state_11286__$1;
(statearr_11293_11316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (6))){
var state_11286__$1 = state_11286;
var statearr_11294_11317 = state_11286__$1;
(statearr_11294_11317[(2)] = null);

(statearr_11294_11317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (3))){
var inst_11283 = (state_11286[(2)]);
var inst_11284 = cljs.core.async.close_BANG_.call(null,out);
var state_11286__$1 = (function (){var statearr_11295 = state_11286;
(statearr_11295[(9)] = inst_11283);

return statearr_11295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11286__$1,inst_11284);
} else {
if((state_val_11287 === (2))){
var state_11286__$1 = state_11286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11286__$1,(4),ch);
} else {
if((state_val_11287 === (11))){
var inst_11266 = (state_11286[(8)]);
var inst_11275 = (state_11286[(2)]);
var inst_11263 = inst_11266;
var state_11286__$1 = (function (){var statearr_11296 = state_11286;
(statearr_11296[(10)] = inst_11275);

(statearr_11296[(7)] = inst_11263);

return statearr_11296;
})();
var statearr_11297_11318 = state_11286__$1;
(statearr_11297_11318[(2)] = null);

(statearr_11297_11318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (9))){
var inst_11266 = (state_11286[(8)]);
var state_11286__$1 = state_11286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11286__$1,(11),out,inst_11266);
} else {
if((state_val_11287 === (5))){
var inst_11266 = (state_11286[(8)]);
var inst_11263 = (state_11286[(7)]);
var inst_11270 = cljs.core._EQ_.call(null,inst_11266,inst_11263);
var state_11286__$1 = state_11286;
if(inst_11270){
var statearr_11299_11319 = state_11286__$1;
(statearr_11299_11319[(1)] = (8));

} else {
var statearr_11300_11320 = state_11286__$1;
(statearr_11300_11320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (10))){
var inst_11278 = (state_11286[(2)]);
var state_11286__$1 = state_11286;
var statearr_11301_11321 = state_11286__$1;
(statearr_11301_11321[(2)] = inst_11278);

(statearr_11301_11321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11287 === (8))){
var inst_11263 = (state_11286[(7)]);
var tmp11298 = inst_11263;
var inst_11263__$1 = tmp11298;
var state_11286__$1 = (function (){var statearr_11302 = state_11286;
(statearr_11302[(7)] = inst_11263__$1);

return statearr_11302;
})();
var statearr_11303_11322 = state_11286__$1;
(statearr_11303_11322[(2)] = null);

(statearr_11303_11322[(1)] = (2));


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
});})(c__6540__auto___11312,out))
;
return ((function (switch__6478__auto__,c__6540__auto___11312,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_11307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11307[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_11307[(1)] = (1));

return statearr_11307;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_11286){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_11286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e11308){if((e11308 instanceof Object)){
var ex__6482__auto__ = e11308;
var statearr_11309_11323 = state_11286;
(statearr_11309_11323[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11324 = state_11286;
state_11286 = G__11324;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_11286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_11286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___11312,out))
})();
var state__6542__auto__ = (function (){var statearr_11310 = f__6541__auto__.call(null);
(statearr_11310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___11312);

return statearr_11310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___11312,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__11326 = arguments.length;
switch (G__11326) {
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
var c__6540__auto___11395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___11395,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___11395,out){
return (function (state_11364){
var state_val_11365 = (state_11364[(1)]);
if((state_val_11365 === (7))){
var inst_11360 = (state_11364[(2)]);
var state_11364__$1 = state_11364;
var statearr_11366_11396 = state_11364__$1;
(statearr_11366_11396[(2)] = inst_11360);

(statearr_11366_11396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (1))){
var inst_11327 = (new Array(n));
var inst_11328 = inst_11327;
var inst_11329 = (0);
var state_11364__$1 = (function (){var statearr_11367 = state_11364;
(statearr_11367[(7)] = inst_11328);

(statearr_11367[(8)] = inst_11329);

return statearr_11367;
})();
var statearr_11368_11397 = state_11364__$1;
(statearr_11368_11397[(2)] = null);

(statearr_11368_11397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (4))){
var inst_11332 = (state_11364[(9)]);
var inst_11332__$1 = (state_11364[(2)]);
var inst_11333 = (inst_11332__$1 == null);
var inst_11334 = cljs.core.not.call(null,inst_11333);
var state_11364__$1 = (function (){var statearr_11369 = state_11364;
(statearr_11369[(9)] = inst_11332__$1);

return statearr_11369;
})();
if(inst_11334){
var statearr_11370_11398 = state_11364__$1;
(statearr_11370_11398[(1)] = (5));

} else {
var statearr_11371_11399 = state_11364__$1;
(statearr_11371_11399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (15))){
var inst_11354 = (state_11364[(2)]);
var state_11364__$1 = state_11364;
var statearr_11372_11400 = state_11364__$1;
(statearr_11372_11400[(2)] = inst_11354);

(statearr_11372_11400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (13))){
var state_11364__$1 = state_11364;
var statearr_11373_11401 = state_11364__$1;
(statearr_11373_11401[(2)] = null);

(statearr_11373_11401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (6))){
var inst_11329 = (state_11364[(8)]);
var inst_11350 = (inst_11329 > (0));
var state_11364__$1 = state_11364;
if(cljs.core.truth_(inst_11350)){
var statearr_11374_11402 = state_11364__$1;
(statearr_11374_11402[(1)] = (12));

} else {
var statearr_11375_11403 = state_11364__$1;
(statearr_11375_11403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (3))){
var inst_11362 = (state_11364[(2)]);
var state_11364__$1 = state_11364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11364__$1,inst_11362);
} else {
if((state_val_11365 === (12))){
var inst_11328 = (state_11364[(7)]);
var inst_11352 = cljs.core.vec.call(null,inst_11328);
var state_11364__$1 = state_11364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11364__$1,(15),out,inst_11352);
} else {
if((state_val_11365 === (2))){
var state_11364__$1 = state_11364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11364__$1,(4),ch);
} else {
if((state_val_11365 === (11))){
var inst_11344 = (state_11364[(2)]);
var inst_11345 = (new Array(n));
var inst_11328 = inst_11345;
var inst_11329 = (0);
var state_11364__$1 = (function (){var statearr_11376 = state_11364;
(statearr_11376[(7)] = inst_11328);

(statearr_11376[(10)] = inst_11344);

(statearr_11376[(8)] = inst_11329);

return statearr_11376;
})();
var statearr_11377_11404 = state_11364__$1;
(statearr_11377_11404[(2)] = null);

(statearr_11377_11404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (9))){
var inst_11328 = (state_11364[(7)]);
var inst_11342 = cljs.core.vec.call(null,inst_11328);
var state_11364__$1 = state_11364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11364__$1,(11),out,inst_11342);
} else {
if((state_val_11365 === (5))){
var inst_11328 = (state_11364[(7)]);
var inst_11337 = (state_11364[(11)]);
var inst_11332 = (state_11364[(9)]);
var inst_11329 = (state_11364[(8)]);
var inst_11336 = (inst_11328[inst_11329] = inst_11332);
var inst_11337__$1 = (inst_11329 + (1));
var inst_11338 = (inst_11337__$1 < n);
var state_11364__$1 = (function (){var statearr_11378 = state_11364;
(statearr_11378[(11)] = inst_11337__$1);

(statearr_11378[(12)] = inst_11336);

return statearr_11378;
})();
if(cljs.core.truth_(inst_11338)){
var statearr_11379_11405 = state_11364__$1;
(statearr_11379_11405[(1)] = (8));

} else {
var statearr_11380_11406 = state_11364__$1;
(statearr_11380_11406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (14))){
var inst_11357 = (state_11364[(2)]);
var inst_11358 = cljs.core.async.close_BANG_.call(null,out);
var state_11364__$1 = (function (){var statearr_11382 = state_11364;
(statearr_11382[(13)] = inst_11357);

return statearr_11382;
})();
var statearr_11383_11407 = state_11364__$1;
(statearr_11383_11407[(2)] = inst_11358);

(statearr_11383_11407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (10))){
var inst_11348 = (state_11364[(2)]);
var state_11364__$1 = state_11364;
var statearr_11384_11408 = state_11364__$1;
(statearr_11384_11408[(2)] = inst_11348);

(statearr_11384_11408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11365 === (8))){
var inst_11328 = (state_11364[(7)]);
var inst_11337 = (state_11364[(11)]);
var tmp11381 = inst_11328;
var inst_11328__$1 = tmp11381;
var inst_11329 = inst_11337;
var state_11364__$1 = (function (){var statearr_11385 = state_11364;
(statearr_11385[(7)] = inst_11328__$1);

(statearr_11385[(8)] = inst_11329);

return statearr_11385;
})();
var statearr_11386_11409 = state_11364__$1;
(statearr_11386_11409[(2)] = null);

(statearr_11386_11409[(1)] = (2));


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
});})(c__6540__auto___11395,out))
;
return ((function (switch__6478__auto__,c__6540__auto___11395,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_11390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11390[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_11390[(1)] = (1));

return statearr_11390;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_11364){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_11364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e11391){if((e11391 instanceof Object)){
var ex__6482__auto__ = e11391;
var statearr_11392_11410 = state_11364;
(statearr_11392_11410[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11411 = state_11364;
state_11364 = G__11411;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_11364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_11364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___11395,out))
})();
var state__6542__auto__ = (function (){var statearr_11393 = f__6541__auto__.call(null);
(statearr_11393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___11395);

return statearr_11393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___11395,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__11413 = arguments.length;
switch (G__11413) {
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
var c__6540__auto___11486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___11486,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___11486,out){
return (function (state_11455){
var state_val_11456 = (state_11455[(1)]);
if((state_val_11456 === (7))){
var inst_11451 = (state_11455[(2)]);
var state_11455__$1 = state_11455;
var statearr_11457_11487 = state_11455__$1;
(statearr_11457_11487[(2)] = inst_11451);

(statearr_11457_11487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (1))){
var inst_11414 = [];
var inst_11415 = inst_11414;
var inst_11416 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11455__$1 = (function (){var statearr_11458 = state_11455;
(statearr_11458[(7)] = inst_11416);

(statearr_11458[(8)] = inst_11415);

return statearr_11458;
})();
var statearr_11459_11488 = state_11455__$1;
(statearr_11459_11488[(2)] = null);

(statearr_11459_11488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (4))){
var inst_11419 = (state_11455[(9)]);
var inst_11419__$1 = (state_11455[(2)]);
var inst_11420 = (inst_11419__$1 == null);
var inst_11421 = cljs.core.not.call(null,inst_11420);
var state_11455__$1 = (function (){var statearr_11460 = state_11455;
(statearr_11460[(9)] = inst_11419__$1);

return statearr_11460;
})();
if(inst_11421){
var statearr_11461_11489 = state_11455__$1;
(statearr_11461_11489[(1)] = (5));

} else {
var statearr_11462_11490 = state_11455__$1;
(statearr_11462_11490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (15))){
var inst_11445 = (state_11455[(2)]);
var state_11455__$1 = state_11455;
var statearr_11463_11491 = state_11455__$1;
(statearr_11463_11491[(2)] = inst_11445);

(statearr_11463_11491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (13))){
var state_11455__$1 = state_11455;
var statearr_11464_11492 = state_11455__$1;
(statearr_11464_11492[(2)] = null);

(statearr_11464_11492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (6))){
var inst_11415 = (state_11455[(8)]);
var inst_11440 = inst_11415.length;
var inst_11441 = (inst_11440 > (0));
var state_11455__$1 = state_11455;
if(cljs.core.truth_(inst_11441)){
var statearr_11465_11493 = state_11455__$1;
(statearr_11465_11493[(1)] = (12));

} else {
var statearr_11466_11494 = state_11455__$1;
(statearr_11466_11494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (3))){
var inst_11453 = (state_11455[(2)]);
var state_11455__$1 = state_11455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11455__$1,inst_11453);
} else {
if((state_val_11456 === (12))){
var inst_11415 = (state_11455[(8)]);
var inst_11443 = cljs.core.vec.call(null,inst_11415);
var state_11455__$1 = state_11455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11455__$1,(15),out,inst_11443);
} else {
if((state_val_11456 === (2))){
var state_11455__$1 = state_11455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11455__$1,(4),ch);
} else {
if((state_val_11456 === (11))){
var inst_11419 = (state_11455[(9)]);
var inst_11423 = (state_11455[(10)]);
var inst_11433 = (state_11455[(2)]);
var inst_11434 = [];
var inst_11435 = inst_11434.push(inst_11419);
var inst_11415 = inst_11434;
var inst_11416 = inst_11423;
var state_11455__$1 = (function (){var statearr_11467 = state_11455;
(statearr_11467[(7)] = inst_11416);

(statearr_11467[(8)] = inst_11415);

(statearr_11467[(11)] = inst_11435);

(statearr_11467[(12)] = inst_11433);

return statearr_11467;
})();
var statearr_11468_11495 = state_11455__$1;
(statearr_11468_11495[(2)] = null);

(statearr_11468_11495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (9))){
var inst_11415 = (state_11455[(8)]);
var inst_11431 = cljs.core.vec.call(null,inst_11415);
var state_11455__$1 = state_11455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11455__$1,(11),out,inst_11431);
} else {
if((state_val_11456 === (5))){
var inst_11419 = (state_11455[(9)]);
var inst_11416 = (state_11455[(7)]);
var inst_11423 = (state_11455[(10)]);
var inst_11423__$1 = f.call(null,inst_11419);
var inst_11424 = cljs.core._EQ_.call(null,inst_11423__$1,inst_11416);
var inst_11425 = cljs.core.keyword_identical_QMARK_.call(null,inst_11416,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11426 = (inst_11424) || (inst_11425);
var state_11455__$1 = (function (){var statearr_11469 = state_11455;
(statearr_11469[(10)] = inst_11423__$1);

return statearr_11469;
})();
if(cljs.core.truth_(inst_11426)){
var statearr_11470_11496 = state_11455__$1;
(statearr_11470_11496[(1)] = (8));

} else {
var statearr_11471_11497 = state_11455__$1;
(statearr_11471_11497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (14))){
var inst_11448 = (state_11455[(2)]);
var inst_11449 = cljs.core.async.close_BANG_.call(null,out);
var state_11455__$1 = (function (){var statearr_11473 = state_11455;
(statearr_11473[(13)] = inst_11448);

return statearr_11473;
})();
var statearr_11474_11498 = state_11455__$1;
(statearr_11474_11498[(2)] = inst_11449);

(statearr_11474_11498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (10))){
var inst_11438 = (state_11455[(2)]);
var state_11455__$1 = state_11455;
var statearr_11475_11499 = state_11455__$1;
(statearr_11475_11499[(2)] = inst_11438);

(statearr_11475_11499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11456 === (8))){
var inst_11419 = (state_11455[(9)]);
var inst_11415 = (state_11455[(8)]);
var inst_11423 = (state_11455[(10)]);
var inst_11428 = inst_11415.push(inst_11419);
var tmp11472 = inst_11415;
var inst_11415__$1 = tmp11472;
var inst_11416 = inst_11423;
var state_11455__$1 = (function (){var statearr_11476 = state_11455;
(statearr_11476[(14)] = inst_11428);

(statearr_11476[(7)] = inst_11416);

(statearr_11476[(8)] = inst_11415__$1);

return statearr_11476;
})();
var statearr_11477_11500 = state_11455__$1;
(statearr_11477_11500[(2)] = null);

(statearr_11477_11500[(1)] = (2));


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
});})(c__6540__auto___11486,out))
;
return ((function (switch__6478__auto__,c__6540__auto___11486,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_11481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11481[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_11481[(1)] = (1));

return statearr_11481;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_11455){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_11455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e11482){if((e11482 instanceof Object)){
var ex__6482__auto__ = e11482;
var statearr_11483_11501 = state_11455;
(statearr_11483_11501[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11502 = state_11455;
state_11455 = G__11502;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_11455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_11455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___11486,out))
})();
var state__6542__auto__ = (function (){var statearr_11484 = f__6541__auto__.call(null);
(statearr_11484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___11486);

return statearr_11484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___11486,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map