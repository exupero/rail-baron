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
if(typeof cljs.core.async.t13732 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13732 = (function (f,fn_handler,meta13733){
this.f = f;
this.fn_handler = fn_handler;
this.meta13733 = meta13733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13732.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13734){
var self__ = this;
var _13734__$1 = this;
return self__.meta13733;
});

cljs.core.async.t13732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13734,meta13733__$1){
var self__ = this;
var _13734__$1 = this;
return (new cljs.core.async.t13732(self__.f,self__.fn_handler,meta13733__$1));
});

cljs.core.async.t13732.cljs$lang$type = true;

cljs.core.async.t13732.cljs$lang$ctorStr = "cljs.core.async/t13732";

cljs.core.async.t13732.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13732");
});

cljs.core.async.__GT_t13732 = (function cljs$core$async$fn_handler_$___GT_t13732(f__$1,fn_handler__$1,meta13733){
return (new cljs.core.async.t13732(f__$1,fn_handler__$1,meta13733));
});

}

return (new cljs.core.async.t13732(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13736 = buff;
if(G__13736){
var bit__4856__auto__ = null;
if(cljs.core.truth_((function (){var or__4182__auto__ = bit__4856__auto__;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return G__13736.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13736.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13736);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13736);
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
var G__13738 = arguments.length;
switch (G__13738) {
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
var G__13741 = arguments.length;
switch (G__13741) {
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
var val_13743 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13743);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13743,ret){
return (function (){
return fn1.call(null,val_13743);
});})(val_13743,ret))
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
var G__13745 = arguments.length;
switch (G__13745) {
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
var n__5067__auto___13747 = n;
var x_13748 = (0);
while(true){
if((x_13748 < n__5067__auto___13747)){
(a[x_13748] = (0));

var G__13749 = (x_13748 + (1));
x_13748 = G__13749;
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

var G__13750 = (i + (1));
i = G__13750;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13754 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13754 = (function (flag,alt_flag,meta13755){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13755 = meta13755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13756){
var self__ = this;
var _13756__$1 = this;
return self__.meta13755;
});})(flag))
;

cljs.core.async.t13754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13756,meta13755__$1){
var self__ = this;
var _13756__$1 = this;
return (new cljs.core.async.t13754(self__.flag,self__.alt_flag,meta13755__$1));
});})(flag))
;

cljs.core.async.t13754.cljs$lang$type = true;

cljs.core.async.t13754.cljs$lang$ctorStr = "cljs.core.async/t13754";

cljs.core.async.t13754.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13754");
});})(flag))
;

cljs.core.async.__GT_t13754 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13754(flag__$1,alt_flag__$1,meta13755){
return (new cljs.core.async.t13754(flag__$1,alt_flag__$1,meta13755));
});})(flag))
;

}

return (new cljs.core.async.t13754(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13760 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13760 = (function (cb,flag,alt_handler,meta13761){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13761 = meta13761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13760.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13762){
var self__ = this;
var _13762__$1 = this;
return self__.meta13761;
});

cljs.core.async.t13760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13762,meta13761__$1){
var self__ = this;
var _13762__$1 = this;
return (new cljs.core.async.t13760(self__.cb,self__.flag,self__.alt_handler,meta13761__$1));
});

cljs.core.async.t13760.cljs$lang$type = true;

cljs.core.async.t13760.cljs$lang$ctorStr = "cljs.core.async/t13760";

cljs.core.async.t13760.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13760");
});

cljs.core.async.__GT_t13760 = (function cljs$core$async$alt_handler_$___GT_t13760(cb__$1,flag__$1,alt_handler__$1,meta13761){
return (new cljs.core.async.t13760(cb__$1,flag__$1,alt_handler__$1,meta13761));
});

}

return (new cljs.core.async.t13760(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13763_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13763_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13764_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13764_SHARP_,port], null));
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
var G__13765 = (i + (1));
i = G__13765;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13768){
var map__13769 = p__13768;
var map__13769__$1 = ((cljs.core.seq_QMARK_.call(null,map__13769))?cljs.core.apply.call(null,cljs.core.hash_map,map__13769):map__13769);
var opts = map__13769__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13766){
var G__13767 = cljs.core.first.call(null,seq13766);
var seq13766__$1 = cljs.core.next.call(null,seq13766);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13767,seq13766__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13771 = arguments.length;
switch (G__13771) {
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
var c__6540__auto___13820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13820){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13820){
return (function (state_13795){
var state_val_13796 = (state_13795[(1)]);
if((state_val_13796 === (7))){
var inst_13791 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13797_13821 = state_13795__$1;
(statearr_13797_13821[(2)] = inst_13791);

(statearr_13797_13821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (1))){
var state_13795__$1 = state_13795;
var statearr_13798_13822 = state_13795__$1;
(statearr_13798_13822[(2)] = null);

(statearr_13798_13822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (4))){
var inst_13774 = (state_13795[(7)]);
var inst_13774__$1 = (state_13795[(2)]);
var inst_13775 = (inst_13774__$1 == null);
var state_13795__$1 = (function (){var statearr_13799 = state_13795;
(statearr_13799[(7)] = inst_13774__$1);

return statearr_13799;
})();
if(cljs.core.truth_(inst_13775)){
var statearr_13800_13823 = state_13795__$1;
(statearr_13800_13823[(1)] = (5));

} else {
var statearr_13801_13824 = state_13795__$1;
(statearr_13801_13824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (13))){
var state_13795__$1 = state_13795;
var statearr_13802_13825 = state_13795__$1;
(statearr_13802_13825[(2)] = null);

(statearr_13802_13825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (6))){
var inst_13774 = (state_13795[(7)]);
var state_13795__$1 = state_13795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13795__$1,(11),to,inst_13774);
} else {
if((state_val_13796 === (3))){
var inst_13793 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13795__$1,inst_13793);
} else {
if((state_val_13796 === (12))){
var state_13795__$1 = state_13795;
var statearr_13803_13826 = state_13795__$1;
(statearr_13803_13826[(2)] = null);

(statearr_13803_13826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (2))){
var state_13795__$1 = state_13795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13795__$1,(4),from);
} else {
if((state_val_13796 === (11))){
var inst_13784 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
if(cljs.core.truth_(inst_13784)){
var statearr_13804_13827 = state_13795__$1;
(statearr_13804_13827[(1)] = (12));

} else {
var statearr_13805_13828 = state_13795__$1;
(statearr_13805_13828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (9))){
var state_13795__$1 = state_13795;
var statearr_13806_13829 = state_13795__$1;
(statearr_13806_13829[(2)] = null);

(statearr_13806_13829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (5))){
var state_13795__$1 = state_13795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13807_13830 = state_13795__$1;
(statearr_13807_13830[(1)] = (8));

} else {
var statearr_13808_13831 = state_13795__$1;
(statearr_13808_13831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (14))){
var inst_13789 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13809_13832 = state_13795__$1;
(statearr_13809_13832[(2)] = inst_13789);

(statearr_13809_13832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (10))){
var inst_13781 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13810_13833 = state_13795__$1;
(statearr_13810_13833[(2)] = inst_13781);

(statearr_13810_13833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (8))){
var inst_13778 = cljs.core.async.close_BANG_.call(null,to);
var state_13795__$1 = state_13795;
var statearr_13811_13834 = state_13795__$1;
(statearr_13811_13834[(2)] = inst_13778);

(statearr_13811_13834[(1)] = (10));


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
});})(c__6540__auto___13820))
;
return ((function (switch__6478__auto__,c__6540__auto___13820){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_13815 = [null,null,null,null,null,null,null,null];
(statearr_13815[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_13815[(1)] = (1));

return statearr_13815;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_13795){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13816){if((e13816 instanceof Object)){
var ex__6482__auto__ = e13816;
var statearr_13817_13835 = state_13795;
(statearr_13817_13835[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13836 = state_13795;
state_13795 = G__13836;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_13795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_13795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13820))
})();
var state__6542__auto__ = (function (){var statearr_13818 = f__6541__auto__.call(null);
(statearr_13818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13820);

return statearr_13818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13820))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14020){
var vec__14021 = p__14020;
var v = cljs.core.nth.call(null,vec__14021,(0),null);
var p = cljs.core.nth.call(null,vec__14021,(1),null);
var job = vec__14021;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6540__auto___14203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14203,res,vec__14021,v,p,job,jobs,results){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14203,res,vec__14021,v,p,job,jobs,results){
return (function (state_14026){
var state_val_14027 = (state_14026[(1)]);
if((state_val_14027 === (2))){
var inst_14023 = (state_14026[(2)]);
var inst_14024 = cljs.core.async.close_BANG_.call(null,res);
var state_14026__$1 = (function (){var statearr_14028 = state_14026;
(statearr_14028[(7)] = inst_14023);

return statearr_14028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14026__$1,inst_14024);
} else {
if((state_val_14027 === (1))){
var state_14026__$1 = state_14026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14026__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6540__auto___14203,res,vec__14021,v,p,job,jobs,results))
;
return ((function (switch__6478__auto__,c__6540__auto___14203,res,vec__14021,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_14032 = [null,null,null,null,null,null,null,null];
(statearr_14032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_14032[(1)] = (1));

return statearr_14032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_14026){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14033){if((e14033 instanceof Object)){
var ex__6482__auto__ = e14033;
var statearr_14034_14204 = state_14026;
(statearr_14034_14204[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14205 = state_14026;
state_14026 = G__14205;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_14026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_14026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14203,res,vec__14021,v,p,job,jobs,results))
})();
var state__6542__auto__ = (function (){var statearr_14035 = f__6541__auto__.call(null);
(statearr_14035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14203);

return statearr_14035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14203,res,vec__14021,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14036){
var vec__14037 = p__14036;
var v = cljs.core.nth.call(null,vec__14037,(0),null);
var p = cljs.core.nth.call(null,vec__14037,(1),null);
var job = vec__14037;
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
var n__5067__auto___14206 = n;
var __14207 = (0);
while(true){
if((__14207 < n__5067__auto___14206)){
var G__14038_14208 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14038_14208) {
case "async":
var c__6540__auto___14210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14207,c__6540__auto___14210,G__14038_14208,n__5067__auto___14206,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__14207,c__6540__auto___14210,G__14038_14208,n__5067__auto___14206,jobs,results,process,async){
return (function (state_14051){
var state_val_14052 = (state_14051[(1)]);
if((state_val_14052 === (7))){
var inst_14047 = (state_14051[(2)]);
var state_14051__$1 = state_14051;
var statearr_14053_14211 = state_14051__$1;
(statearr_14053_14211[(2)] = inst_14047);

(statearr_14053_14211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (6))){
var state_14051__$1 = state_14051;
var statearr_14054_14212 = state_14051__$1;
(statearr_14054_14212[(2)] = null);

(statearr_14054_14212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (5))){
var state_14051__$1 = state_14051;
var statearr_14055_14213 = state_14051__$1;
(statearr_14055_14213[(2)] = null);

(statearr_14055_14213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (4))){
var inst_14041 = (state_14051[(2)]);
var inst_14042 = async.call(null,inst_14041);
var state_14051__$1 = state_14051;
if(cljs.core.truth_(inst_14042)){
var statearr_14056_14214 = state_14051__$1;
(statearr_14056_14214[(1)] = (5));

} else {
var statearr_14057_14215 = state_14051__$1;
(statearr_14057_14215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (3))){
var inst_14049 = (state_14051[(2)]);
var state_14051__$1 = state_14051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14051__$1,inst_14049);
} else {
if((state_val_14052 === (2))){
var state_14051__$1 = state_14051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14051__$1,(4),jobs);
} else {
if((state_val_14052 === (1))){
var state_14051__$1 = state_14051;
var statearr_14058_14216 = state_14051__$1;
(statearr_14058_14216[(2)] = null);

(statearr_14058_14216[(1)] = (2));


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
});})(__14207,c__6540__auto___14210,G__14038_14208,n__5067__auto___14206,jobs,results,process,async))
;
return ((function (__14207,switch__6478__auto__,c__6540__auto___14210,G__14038_14208,n__5067__auto___14206,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_14062 = [null,null,null,null,null,null,null];
(statearr_14062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_14062[(1)] = (1));

return statearr_14062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_14051){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14063){if((e14063 instanceof Object)){
var ex__6482__auto__ = e14063;
var statearr_14064_14217 = state_14051;
(statearr_14064_14217[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14218 = state_14051;
state_14051 = G__14218;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_14051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_14051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__14207,switch__6478__auto__,c__6540__auto___14210,G__14038_14208,n__5067__auto___14206,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_14065 = f__6541__auto__.call(null);
(statearr_14065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14210);

return statearr_14065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__14207,c__6540__auto___14210,G__14038_14208,n__5067__auto___14206,jobs,results,process,async))
);


break;
case "compute":
var c__6540__auto___14219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14207,c__6540__auto___14219,G__14038_14208,n__5067__auto___14206,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__14207,c__6540__auto___14219,G__14038_14208,n__5067__auto___14206,jobs,results,process,async){
return (function (state_14078){
var state_val_14079 = (state_14078[(1)]);
if((state_val_14079 === (7))){
var inst_14074 = (state_14078[(2)]);
var state_14078__$1 = state_14078;
var statearr_14080_14220 = state_14078__$1;
(statearr_14080_14220[(2)] = inst_14074);

(statearr_14080_14220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (6))){
var state_14078__$1 = state_14078;
var statearr_14081_14221 = state_14078__$1;
(statearr_14081_14221[(2)] = null);

(statearr_14081_14221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (5))){
var state_14078__$1 = state_14078;
var statearr_14082_14222 = state_14078__$1;
(statearr_14082_14222[(2)] = null);

(statearr_14082_14222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (4))){
var inst_14068 = (state_14078[(2)]);
var inst_14069 = process.call(null,inst_14068);
var state_14078__$1 = state_14078;
if(cljs.core.truth_(inst_14069)){
var statearr_14083_14223 = state_14078__$1;
(statearr_14083_14223[(1)] = (5));

} else {
var statearr_14084_14224 = state_14078__$1;
(statearr_14084_14224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14079 === (3))){
var inst_14076 = (state_14078[(2)]);
var state_14078__$1 = state_14078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14078__$1,inst_14076);
} else {
if((state_val_14079 === (2))){
var state_14078__$1 = state_14078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14078__$1,(4),jobs);
} else {
if((state_val_14079 === (1))){
var state_14078__$1 = state_14078;
var statearr_14085_14225 = state_14078__$1;
(statearr_14085_14225[(2)] = null);

(statearr_14085_14225[(1)] = (2));


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
});})(__14207,c__6540__auto___14219,G__14038_14208,n__5067__auto___14206,jobs,results,process,async))
;
return ((function (__14207,switch__6478__auto__,c__6540__auto___14219,G__14038_14208,n__5067__auto___14206,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_14089 = [null,null,null,null,null,null,null];
(statearr_14089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_14089[(1)] = (1));

return statearr_14089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_14078){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14090){if((e14090 instanceof Object)){
var ex__6482__auto__ = e14090;
var statearr_14091_14226 = state_14078;
(statearr_14091_14226[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14227 = state_14078;
state_14078 = G__14227;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_14078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_14078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__14207,switch__6478__auto__,c__6540__auto___14219,G__14038_14208,n__5067__auto___14206,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_14092 = f__6541__auto__.call(null);
(statearr_14092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14219);

return statearr_14092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__14207,c__6540__auto___14219,G__14038_14208,n__5067__auto___14206,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14228 = (__14207 + (1));
__14207 = G__14228;
continue;
} else {
}
break;
}

var c__6540__auto___14229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14229,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14229,jobs,results,process,async){
return (function (state_14114){
var state_val_14115 = (state_14114[(1)]);
if((state_val_14115 === (9))){
var inst_14107 = (state_14114[(2)]);
var state_14114__$1 = (function (){var statearr_14116 = state_14114;
(statearr_14116[(7)] = inst_14107);

return statearr_14116;
})();
var statearr_14117_14230 = state_14114__$1;
(statearr_14117_14230[(2)] = null);

(statearr_14117_14230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (8))){
var inst_14100 = (state_14114[(8)]);
var inst_14105 = (state_14114[(2)]);
var state_14114__$1 = (function (){var statearr_14118 = state_14114;
(statearr_14118[(9)] = inst_14105);

return statearr_14118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14114__$1,(9),results,inst_14100);
} else {
if((state_val_14115 === (7))){
var inst_14110 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
var statearr_14119_14231 = state_14114__$1;
(statearr_14119_14231[(2)] = inst_14110);

(statearr_14119_14231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (6))){
var inst_14095 = (state_14114[(10)]);
var inst_14100 = (state_14114[(8)]);
var inst_14100__$1 = cljs.core.async.chan.call(null,(1));
var inst_14101 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14102 = [inst_14095,inst_14100__$1];
var inst_14103 = (new cljs.core.PersistentVector(null,2,(5),inst_14101,inst_14102,null));
var state_14114__$1 = (function (){var statearr_14120 = state_14114;
(statearr_14120[(8)] = inst_14100__$1);

return statearr_14120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14114__$1,(8),jobs,inst_14103);
} else {
if((state_val_14115 === (5))){
var inst_14098 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14114__$1 = state_14114;
var statearr_14121_14232 = state_14114__$1;
(statearr_14121_14232[(2)] = inst_14098);

(statearr_14121_14232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (4))){
var inst_14095 = (state_14114[(10)]);
var inst_14095__$1 = (state_14114[(2)]);
var inst_14096 = (inst_14095__$1 == null);
var state_14114__$1 = (function (){var statearr_14122 = state_14114;
(statearr_14122[(10)] = inst_14095__$1);

return statearr_14122;
})();
if(cljs.core.truth_(inst_14096)){
var statearr_14123_14233 = state_14114__$1;
(statearr_14123_14233[(1)] = (5));

} else {
var statearr_14124_14234 = state_14114__$1;
(statearr_14124_14234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (3))){
var inst_14112 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14114__$1,inst_14112);
} else {
if((state_val_14115 === (2))){
var state_14114__$1 = state_14114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14114__$1,(4),from);
} else {
if((state_val_14115 === (1))){
var state_14114__$1 = state_14114;
var statearr_14125_14235 = state_14114__$1;
(statearr_14125_14235[(2)] = null);

(statearr_14125_14235[(1)] = (2));


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
});})(c__6540__auto___14229,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto___14229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_14129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_14129[(1)] = (1));

return statearr_14129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_14114){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14130){if((e14130 instanceof Object)){
var ex__6482__auto__ = e14130;
var statearr_14131_14236 = state_14114;
(statearr_14131_14236[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14237 = state_14114;
state_14114 = G__14237;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_14114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_14114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14229,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_14132 = f__6541__auto__.call(null);
(statearr_14132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14229);

return statearr_14132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14229,jobs,results,process,async))
);


var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,jobs,results,process,async){
return (function (state_14170){
var state_val_14171 = (state_14170[(1)]);
if((state_val_14171 === (7))){
var inst_14166 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
var statearr_14172_14238 = state_14170__$1;
(statearr_14172_14238[(2)] = inst_14166);

(statearr_14172_14238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (20))){
var state_14170__$1 = state_14170;
var statearr_14173_14239 = state_14170__$1;
(statearr_14173_14239[(2)] = null);

(statearr_14173_14239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (1))){
var state_14170__$1 = state_14170;
var statearr_14174_14240 = state_14170__$1;
(statearr_14174_14240[(2)] = null);

(statearr_14174_14240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (4))){
var inst_14135 = (state_14170[(7)]);
var inst_14135__$1 = (state_14170[(2)]);
var inst_14136 = (inst_14135__$1 == null);
var state_14170__$1 = (function (){var statearr_14175 = state_14170;
(statearr_14175[(7)] = inst_14135__$1);

return statearr_14175;
})();
if(cljs.core.truth_(inst_14136)){
var statearr_14176_14241 = state_14170__$1;
(statearr_14176_14241[(1)] = (5));

} else {
var statearr_14177_14242 = state_14170__$1;
(statearr_14177_14242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (15))){
var inst_14148 = (state_14170[(8)]);
var state_14170__$1 = state_14170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14170__$1,(18),to,inst_14148);
} else {
if((state_val_14171 === (21))){
var inst_14161 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
var statearr_14178_14243 = state_14170__$1;
(statearr_14178_14243[(2)] = inst_14161);

(statearr_14178_14243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (13))){
var inst_14163 = (state_14170[(2)]);
var state_14170__$1 = (function (){var statearr_14179 = state_14170;
(statearr_14179[(9)] = inst_14163);

return statearr_14179;
})();
var statearr_14180_14244 = state_14170__$1;
(statearr_14180_14244[(2)] = null);

(statearr_14180_14244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (6))){
var inst_14135 = (state_14170[(7)]);
var state_14170__$1 = state_14170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14170__$1,(11),inst_14135);
} else {
if((state_val_14171 === (17))){
var inst_14156 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
if(cljs.core.truth_(inst_14156)){
var statearr_14181_14245 = state_14170__$1;
(statearr_14181_14245[(1)] = (19));

} else {
var statearr_14182_14246 = state_14170__$1;
(statearr_14182_14246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (3))){
var inst_14168 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14170__$1,inst_14168);
} else {
if((state_val_14171 === (12))){
var inst_14145 = (state_14170[(10)]);
var state_14170__$1 = state_14170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14170__$1,(14),inst_14145);
} else {
if((state_val_14171 === (2))){
var state_14170__$1 = state_14170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14170__$1,(4),results);
} else {
if((state_val_14171 === (19))){
var state_14170__$1 = state_14170;
var statearr_14183_14247 = state_14170__$1;
(statearr_14183_14247[(2)] = null);

(statearr_14183_14247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (11))){
var inst_14145 = (state_14170[(2)]);
var state_14170__$1 = (function (){var statearr_14184 = state_14170;
(statearr_14184[(10)] = inst_14145);

return statearr_14184;
})();
var statearr_14185_14248 = state_14170__$1;
(statearr_14185_14248[(2)] = null);

(statearr_14185_14248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (9))){
var state_14170__$1 = state_14170;
var statearr_14186_14249 = state_14170__$1;
(statearr_14186_14249[(2)] = null);

(statearr_14186_14249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (5))){
var state_14170__$1 = state_14170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14187_14250 = state_14170__$1;
(statearr_14187_14250[(1)] = (8));

} else {
var statearr_14188_14251 = state_14170__$1;
(statearr_14188_14251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (14))){
var inst_14148 = (state_14170[(8)]);
var inst_14150 = (state_14170[(11)]);
var inst_14148__$1 = (state_14170[(2)]);
var inst_14149 = (inst_14148__$1 == null);
var inst_14150__$1 = cljs.core.not.call(null,inst_14149);
var state_14170__$1 = (function (){var statearr_14189 = state_14170;
(statearr_14189[(8)] = inst_14148__$1);

(statearr_14189[(11)] = inst_14150__$1);

return statearr_14189;
})();
if(inst_14150__$1){
var statearr_14190_14252 = state_14170__$1;
(statearr_14190_14252[(1)] = (15));

} else {
var statearr_14191_14253 = state_14170__$1;
(statearr_14191_14253[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (16))){
var inst_14150 = (state_14170[(11)]);
var state_14170__$1 = state_14170;
var statearr_14192_14254 = state_14170__$1;
(statearr_14192_14254[(2)] = inst_14150);

(statearr_14192_14254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (10))){
var inst_14142 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
var statearr_14193_14255 = state_14170__$1;
(statearr_14193_14255[(2)] = inst_14142);

(statearr_14193_14255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (18))){
var inst_14153 = (state_14170[(2)]);
var state_14170__$1 = state_14170;
var statearr_14194_14256 = state_14170__$1;
(statearr_14194_14256[(2)] = inst_14153);

(statearr_14194_14256[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14171 === (8))){
var inst_14139 = cljs.core.async.close_BANG_.call(null,to);
var state_14170__$1 = state_14170;
var statearr_14195_14257 = state_14170__$1;
(statearr_14195_14257[(2)] = inst_14139);

(statearr_14195_14257[(1)] = (10));


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
var statearr_14199 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_14199[(1)] = (1));

return statearr_14199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_14170){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14200){if((e14200 instanceof Object)){
var ex__6482__auto__ = e14200;
var statearr_14201_14258 = state_14170;
(statearr_14201_14258[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14259 = state_14170;
state_14170 = G__14259;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_14170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_14170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_14202 = f__6541__auto__.call(null);
(statearr_14202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_14202;
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
var G__14261 = arguments.length;
switch (G__14261) {
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
var G__14264 = arguments.length;
switch (G__14264) {
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
var G__14267 = arguments.length;
switch (G__14267) {
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
var c__6540__auto___14319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14319,tc,fc){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14319,tc,fc){
return (function (state_14293){
var state_val_14294 = (state_14293[(1)]);
if((state_val_14294 === (7))){
var inst_14289 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
var statearr_14295_14320 = state_14293__$1;
(statearr_14295_14320[(2)] = inst_14289);

(statearr_14295_14320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (1))){
var state_14293__$1 = state_14293;
var statearr_14296_14321 = state_14293__$1;
(statearr_14296_14321[(2)] = null);

(statearr_14296_14321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (4))){
var inst_14270 = (state_14293[(7)]);
var inst_14270__$1 = (state_14293[(2)]);
var inst_14271 = (inst_14270__$1 == null);
var state_14293__$1 = (function (){var statearr_14297 = state_14293;
(statearr_14297[(7)] = inst_14270__$1);

return statearr_14297;
})();
if(cljs.core.truth_(inst_14271)){
var statearr_14298_14322 = state_14293__$1;
(statearr_14298_14322[(1)] = (5));

} else {
var statearr_14299_14323 = state_14293__$1;
(statearr_14299_14323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (13))){
var state_14293__$1 = state_14293;
var statearr_14300_14324 = state_14293__$1;
(statearr_14300_14324[(2)] = null);

(statearr_14300_14324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (6))){
var inst_14270 = (state_14293[(7)]);
var inst_14276 = p.call(null,inst_14270);
var state_14293__$1 = state_14293;
if(cljs.core.truth_(inst_14276)){
var statearr_14301_14325 = state_14293__$1;
(statearr_14301_14325[(1)] = (9));

} else {
var statearr_14302_14326 = state_14293__$1;
(statearr_14302_14326[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (3))){
var inst_14291 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14293__$1,inst_14291);
} else {
if((state_val_14294 === (12))){
var state_14293__$1 = state_14293;
var statearr_14303_14327 = state_14293__$1;
(statearr_14303_14327[(2)] = null);

(statearr_14303_14327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (2))){
var state_14293__$1 = state_14293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14293__$1,(4),ch);
} else {
if((state_val_14294 === (11))){
var inst_14270 = (state_14293[(7)]);
var inst_14280 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14293__$1,(8),inst_14280,inst_14270);
} else {
if((state_val_14294 === (9))){
var state_14293__$1 = state_14293;
var statearr_14304_14328 = state_14293__$1;
(statearr_14304_14328[(2)] = tc);

(statearr_14304_14328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (5))){
var inst_14273 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14274 = cljs.core.async.close_BANG_.call(null,fc);
var state_14293__$1 = (function (){var statearr_14305 = state_14293;
(statearr_14305[(8)] = inst_14273);

return statearr_14305;
})();
var statearr_14306_14329 = state_14293__$1;
(statearr_14306_14329[(2)] = inst_14274);

(statearr_14306_14329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (14))){
var inst_14287 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
var statearr_14307_14330 = state_14293__$1;
(statearr_14307_14330[(2)] = inst_14287);

(statearr_14307_14330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (10))){
var state_14293__$1 = state_14293;
var statearr_14308_14331 = state_14293__$1;
(statearr_14308_14331[(2)] = fc);

(statearr_14308_14331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14294 === (8))){
var inst_14282 = (state_14293[(2)]);
var state_14293__$1 = state_14293;
if(cljs.core.truth_(inst_14282)){
var statearr_14309_14332 = state_14293__$1;
(statearr_14309_14332[(1)] = (12));

} else {
var statearr_14310_14333 = state_14293__$1;
(statearr_14310_14333[(1)] = (13));

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
});})(c__6540__auto___14319,tc,fc))
;
return ((function (switch__6478__auto__,c__6540__auto___14319,tc,fc){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_14314 = [null,null,null,null,null,null,null,null,null];
(statearr_14314[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_14314[(1)] = (1));

return statearr_14314;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_14293){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14315){if((e14315 instanceof Object)){
var ex__6482__auto__ = e14315;
var statearr_14316_14334 = state_14293;
(statearr_14316_14334[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14335 = state_14293;
state_14293 = G__14335;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_14293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_14293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14319,tc,fc))
})();
var state__6542__auto__ = (function (){var statearr_14317 = f__6541__auto__.call(null);
(statearr_14317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14319);

return statearr_14317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14319,tc,fc))
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
return (function (state_14382){
var state_val_14383 = (state_14382[(1)]);
if((state_val_14383 === (7))){
var inst_14378 = (state_14382[(2)]);
var state_14382__$1 = state_14382;
var statearr_14384_14400 = state_14382__$1;
(statearr_14384_14400[(2)] = inst_14378);

(statearr_14384_14400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14383 === (6))){
var inst_14368 = (state_14382[(7)]);
var inst_14371 = (state_14382[(8)]);
var inst_14375 = f.call(null,inst_14368,inst_14371);
var inst_14368__$1 = inst_14375;
var state_14382__$1 = (function (){var statearr_14385 = state_14382;
(statearr_14385[(7)] = inst_14368__$1);

return statearr_14385;
})();
var statearr_14386_14401 = state_14382__$1;
(statearr_14386_14401[(2)] = null);

(statearr_14386_14401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14383 === (5))){
var inst_14368 = (state_14382[(7)]);
var state_14382__$1 = state_14382;
var statearr_14387_14402 = state_14382__$1;
(statearr_14387_14402[(2)] = inst_14368);

(statearr_14387_14402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14383 === (4))){
var inst_14371 = (state_14382[(8)]);
var inst_14371__$1 = (state_14382[(2)]);
var inst_14372 = (inst_14371__$1 == null);
var state_14382__$1 = (function (){var statearr_14388 = state_14382;
(statearr_14388[(8)] = inst_14371__$1);

return statearr_14388;
})();
if(cljs.core.truth_(inst_14372)){
var statearr_14389_14403 = state_14382__$1;
(statearr_14389_14403[(1)] = (5));

} else {
var statearr_14390_14404 = state_14382__$1;
(statearr_14390_14404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14383 === (3))){
var inst_14380 = (state_14382[(2)]);
var state_14382__$1 = state_14382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14382__$1,inst_14380);
} else {
if((state_val_14383 === (2))){
var state_14382__$1 = state_14382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14382__$1,(4),ch);
} else {
if((state_val_14383 === (1))){
var inst_14368 = init;
var state_14382__$1 = (function (){var statearr_14391 = state_14382;
(statearr_14391[(7)] = inst_14368);

return statearr_14391;
})();
var statearr_14392_14405 = state_14382__$1;
(statearr_14392_14405[(2)] = null);

(statearr_14392_14405[(1)] = (2));


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
var statearr_14396 = [null,null,null,null,null,null,null,null,null];
(statearr_14396[(0)] = cljs$core$async$reduce_$_state_machine__6479__auto__);

(statearr_14396[(1)] = (1));

return statearr_14396;
});
var cljs$core$async$reduce_$_state_machine__6479__auto____1 = (function (state_14382){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14397){if((e14397 instanceof Object)){
var ex__6482__auto__ = e14397;
var statearr_14398_14406 = state_14382;
(statearr_14398_14406[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14407 = state_14382;
state_14382 = G__14407;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6479__auto__ = function(state_14382){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6479__auto____1.call(this,state_14382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6479__auto____0;
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6479__auto____1;
return cljs$core$async$reduce_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_14399 = f__6541__auto__.call(null);
(statearr_14399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_14399;
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
var G__14409 = arguments.length;
switch (G__14409) {
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
return (function (state_14434){
var state_val_14435 = (state_14434[(1)]);
if((state_val_14435 === (7))){
var inst_14416 = (state_14434[(2)]);
var state_14434__$1 = state_14434;
var statearr_14436_14460 = state_14434__$1;
(statearr_14436_14460[(2)] = inst_14416);

(statearr_14436_14460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (1))){
var inst_14410 = cljs.core.seq.call(null,coll);
var inst_14411 = inst_14410;
var state_14434__$1 = (function (){var statearr_14437 = state_14434;
(statearr_14437[(7)] = inst_14411);

return statearr_14437;
})();
var statearr_14438_14461 = state_14434__$1;
(statearr_14438_14461[(2)] = null);

(statearr_14438_14461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (4))){
var inst_14411 = (state_14434[(7)]);
var inst_14414 = cljs.core.first.call(null,inst_14411);
var state_14434__$1 = state_14434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14434__$1,(7),ch,inst_14414);
} else {
if((state_val_14435 === (13))){
var inst_14428 = (state_14434[(2)]);
var state_14434__$1 = state_14434;
var statearr_14439_14462 = state_14434__$1;
(statearr_14439_14462[(2)] = inst_14428);

(statearr_14439_14462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (6))){
var inst_14419 = (state_14434[(2)]);
var state_14434__$1 = state_14434;
if(cljs.core.truth_(inst_14419)){
var statearr_14440_14463 = state_14434__$1;
(statearr_14440_14463[(1)] = (8));

} else {
var statearr_14441_14464 = state_14434__$1;
(statearr_14441_14464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (3))){
var inst_14432 = (state_14434[(2)]);
var state_14434__$1 = state_14434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14434__$1,inst_14432);
} else {
if((state_val_14435 === (12))){
var state_14434__$1 = state_14434;
var statearr_14442_14465 = state_14434__$1;
(statearr_14442_14465[(2)] = null);

(statearr_14442_14465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (2))){
var inst_14411 = (state_14434[(7)]);
var state_14434__$1 = state_14434;
if(cljs.core.truth_(inst_14411)){
var statearr_14443_14466 = state_14434__$1;
(statearr_14443_14466[(1)] = (4));

} else {
var statearr_14444_14467 = state_14434__$1;
(statearr_14444_14467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (11))){
var inst_14425 = cljs.core.async.close_BANG_.call(null,ch);
var state_14434__$1 = state_14434;
var statearr_14445_14468 = state_14434__$1;
(statearr_14445_14468[(2)] = inst_14425);

(statearr_14445_14468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (9))){
var state_14434__$1 = state_14434;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14446_14469 = state_14434__$1;
(statearr_14446_14469[(1)] = (11));

} else {
var statearr_14447_14470 = state_14434__$1;
(statearr_14447_14470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (5))){
var inst_14411 = (state_14434[(7)]);
var state_14434__$1 = state_14434;
var statearr_14448_14471 = state_14434__$1;
(statearr_14448_14471[(2)] = inst_14411);

(statearr_14448_14471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (10))){
var inst_14430 = (state_14434[(2)]);
var state_14434__$1 = state_14434;
var statearr_14449_14472 = state_14434__$1;
(statearr_14449_14472[(2)] = inst_14430);

(statearr_14449_14472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14435 === (8))){
var inst_14411 = (state_14434[(7)]);
var inst_14421 = cljs.core.next.call(null,inst_14411);
var inst_14411__$1 = inst_14421;
var state_14434__$1 = (function (){var statearr_14450 = state_14434;
(statearr_14450[(7)] = inst_14411__$1);

return statearr_14450;
})();
var statearr_14451_14473 = state_14434__$1;
(statearr_14451_14473[(2)] = null);

(statearr_14451_14473[(1)] = (2));


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
var statearr_14455 = [null,null,null,null,null,null,null,null];
(statearr_14455[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_14455[(1)] = (1));

return statearr_14455;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_14434){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14456){if((e14456 instanceof Object)){
var ex__6482__auto__ = e14456;
var statearr_14457_14474 = state_14434;
(statearr_14457_14474[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14475 = state_14434;
state_14434 = G__14475;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_14434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_14434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_14458 = f__6541__auto__.call(null);
(statearr_14458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_14458;
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

cljs.core.async.Mux = (function (){var obj14477 = {};
return obj14477;
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


cljs.core.async.Mult = (function (){var obj14479 = {};
return obj14479;
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
if(typeof cljs.core.async.t14701 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14701 = (function (cs,ch,mult,meta14702){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14702 = meta14702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14701.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14701.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14701.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14701.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14701.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14703){
var self__ = this;
var _14703__$1 = this;
return self__.meta14702;
});})(cs))
;

cljs.core.async.t14701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14703,meta14702__$1){
var self__ = this;
var _14703__$1 = this;
return (new cljs.core.async.t14701(self__.cs,self__.ch,self__.mult,meta14702__$1));
});})(cs))
;

cljs.core.async.t14701.cljs$lang$type = true;

cljs.core.async.t14701.cljs$lang$ctorStr = "cljs.core.async/t14701";

cljs.core.async.t14701.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t14701");
});})(cs))
;

cljs.core.async.__GT_t14701 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14701(cs__$1,ch__$1,mult__$1,meta14702){
return (new cljs.core.async.t14701(cs__$1,ch__$1,mult__$1,meta14702));
});})(cs))
;

}

return (new cljs.core.async.t14701(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6540__auto___14922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14922,cs,m,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14922,cs,m,dchan,dctr,done){
return (function (state_14834){
var state_val_14835 = (state_14834[(1)]);
if((state_val_14835 === (7))){
var inst_14830 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14836_14923 = state_14834__$1;
(statearr_14836_14923[(2)] = inst_14830);

(statearr_14836_14923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (20))){
var inst_14735 = (state_14834[(7)]);
var inst_14745 = cljs.core.first.call(null,inst_14735);
var inst_14746 = cljs.core.nth.call(null,inst_14745,(0),null);
var inst_14747 = cljs.core.nth.call(null,inst_14745,(1),null);
var state_14834__$1 = (function (){var statearr_14837 = state_14834;
(statearr_14837[(8)] = inst_14746);

return statearr_14837;
})();
if(cljs.core.truth_(inst_14747)){
var statearr_14838_14924 = state_14834__$1;
(statearr_14838_14924[(1)] = (22));

} else {
var statearr_14839_14925 = state_14834__$1;
(statearr_14839_14925[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (27))){
var inst_14777 = (state_14834[(9)]);
var inst_14706 = (state_14834[(10)]);
var inst_14775 = (state_14834[(11)]);
var inst_14782 = (state_14834[(12)]);
var inst_14782__$1 = cljs.core._nth.call(null,inst_14775,inst_14777);
var inst_14783 = cljs.core.async.put_BANG_.call(null,inst_14782__$1,inst_14706,done);
var state_14834__$1 = (function (){var statearr_14840 = state_14834;
(statearr_14840[(12)] = inst_14782__$1);

return statearr_14840;
})();
if(cljs.core.truth_(inst_14783)){
var statearr_14841_14926 = state_14834__$1;
(statearr_14841_14926[(1)] = (30));

} else {
var statearr_14842_14927 = state_14834__$1;
(statearr_14842_14927[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (1))){
var state_14834__$1 = state_14834;
var statearr_14843_14928 = state_14834__$1;
(statearr_14843_14928[(2)] = null);

(statearr_14843_14928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (24))){
var inst_14735 = (state_14834[(7)]);
var inst_14752 = (state_14834[(2)]);
var inst_14753 = cljs.core.next.call(null,inst_14735);
var inst_14715 = inst_14753;
var inst_14716 = null;
var inst_14717 = (0);
var inst_14718 = (0);
var state_14834__$1 = (function (){var statearr_14844 = state_14834;
(statearr_14844[(13)] = inst_14715);

(statearr_14844[(14)] = inst_14717);

(statearr_14844[(15)] = inst_14718);

(statearr_14844[(16)] = inst_14752);

(statearr_14844[(17)] = inst_14716);

return statearr_14844;
})();
var statearr_14845_14929 = state_14834__$1;
(statearr_14845_14929[(2)] = null);

(statearr_14845_14929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (39))){
var state_14834__$1 = state_14834;
var statearr_14849_14930 = state_14834__$1;
(statearr_14849_14930[(2)] = null);

(statearr_14849_14930[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (4))){
var inst_14706 = (state_14834[(10)]);
var inst_14706__$1 = (state_14834[(2)]);
var inst_14707 = (inst_14706__$1 == null);
var state_14834__$1 = (function (){var statearr_14850 = state_14834;
(statearr_14850[(10)] = inst_14706__$1);

return statearr_14850;
})();
if(cljs.core.truth_(inst_14707)){
var statearr_14851_14931 = state_14834__$1;
(statearr_14851_14931[(1)] = (5));

} else {
var statearr_14852_14932 = state_14834__$1;
(statearr_14852_14932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (15))){
var inst_14715 = (state_14834[(13)]);
var inst_14717 = (state_14834[(14)]);
var inst_14718 = (state_14834[(15)]);
var inst_14716 = (state_14834[(17)]);
var inst_14731 = (state_14834[(2)]);
var inst_14732 = (inst_14718 + (1));
var tmp14846 = inst_14715;
var tmp14847 = inst_14717;
var tmp14848 = inst_14716;
var inst_14715__$1 = tmp14846;
var inst_14716__$1 = tmp14848;
var inst_14717__$1 = tmp14847;
var inst_14718__$1 = inst_14732;
var state_14834__$1 = (function (){var statearr_14853 = state_14834;
(statearr_14853[(13)] = inst_14715__$1);

(statearr_14853[(18)] = inst_14731);

(statearr_14853[(14)] = inst_14717__$1);

(statearr_14853[(15)] = inst_14718__$1);

(statearr_14853[(17)] = inst_14716__$1);

return statearr_14853;
})();
var statearr_14854_14933 = state_14834__$1;
(statearr_14854_14933[(2)] = null);

(statearr_14854_14933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (21))){
var inst_14756 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14858_14934 = state_14834__$1;
(statearr_14858_14934[(2)] = inst_14756);

(statearr_14858_14934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (31))){
var inst_14782 = (state_14834[(12)]);
var inst_14786 = done.call(null,null);
var inst_14787 = cljs.core.async.untap_STAR_.call(null,m,inst_14782);
var state_14834__$1 = (function (){var statearr_14859 = state_14834;
(statearr_14859[(19)] = inst_14786);

return statearr_14859;
})();
var statearr_14860_14935 = state_14834__$1;
(statearr_14860_14935[(2)] = inst_14787);

(statearr_14860_14935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (32))){
var inst_14777 = (state_14834[(9)]);
var inst_14774 = (state_14834[(20)]);
var inst_14776 = (state_14834[(21)]);
var inst_14775 = (state_14834[(11)]);
var inst_14789 = (state_14834[(2)]);
var inst_14790 = (inst_14777 + (1));
var tmp14855 = inst_14774;
var tmp14856 = inst_14776;
var tmp14857 = inst_14775;
var inst_14774__$1 = tmp14855;
var inst_14775__$1 = tmp14857;
var inst_14776__$1 = tmp14856;
var inst_14777__$1 = inst_14790;
var state_14834__$1 = (function (){var statearr_14861 = state_14834;
(statearr_14861[(9)] = inst_14777__$1);

(statearr_14861[(20)] = inst_14774__$1);

(statearr_14861[(22)] = inst_14789);

(statearr_14861[(21)] = inst_14776__$1);

(statearr_14861[(11)] = inst_14775__$1);

return statearr_14861;
})();
var statearr_14862_14936 = state_14834__$1;
(statearr_14862_14936[(2)] = null);

(statearr_14862_14936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (40))){
var inst_14802 = (state_14834[(23)]);
var inst_14806 = done.call(null,null);
var inst_14807 = cljs.core.async.untap_STAR_.call(null,m,inst_14802);
var state_14834__$1 = (function (){var statearr_14863 = state_14834;
(statearr_14863[(24)] = inst_14806);

return statearr_14863;
})();
var statearr_14864_14937 = state_14834__$1;
(statearr_14864_14937[(2)] = inst_14807);

(statearr_14864_14937[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (33))){
var inst_14793 = (state_14834[(25)]);
var inst_14795 = cljs.core.chunked_seq_QMARK_.call(null,inst_14793);
var state_14834__$1 = state_14834;
if(inst_14795){
var statearr_14865_14938 = state_14834__$1;
(statearr_14865_14938[(1)] = (36));

} else {
var statearr_14866_14939 = state_14834__$1;
(statearr_14866_14939[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (13))){
var inst_14725 = (state_14834[(26)]);
var inst_14728 = cljs.core.async.close_BANG_.call(null,inst_14725);
var state_14834__$1 = state_14834;
var statearr_14867_14940 = state_14834__$1;
(statearr_14867_14940[(2)] = inst_14728);

(statearr_14867_14940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (22))){
var inst_14746 = (state_14834[(8)]);
var inst_14749 = cljs.core.async.close_BANG_.call(null,inst_14746);
var state_14834__$1 = state_14834;
var statearr_14868_14941 = state_14834__$1;
(statearr_14868_14941[(2)] = inst_14749);

(statearr_14868_14941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (36))){
var inst_14793 = (state_14834[(25)]);
var inst_14797 = cljs.core.chunk_first.call(null,inst_14793);
var inst_14798 = cljs.core.chunk_rest.call(null,inst_14793);
var inst_14799 = cljs.core.count.call(null,inst_14797);
var inst_14774 = inst_14798;
var inst_14775 = inst_14797;
var inst_14776 = inst_14799;
var inst_14777 = (0);
var state_14834__$1 = (function (){var statearr_14869 = state_14834;
(statearr_14869[(9)] = inst_14777);

(statearr_14869[(20)] = inst_14774);

(statearr_14869[(21)] = inst_14776);

(statearr_14869[(11)] = inst_14775);

return statearr_14869;
})();
var statearr_14870_14942 = state_14834__$1;
(statearr_14870_14942[(2)] = null);

(statearr_14870_14942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (41))){
var inst_14793 = (state_14834[(25)]);
var inst_14809 = (state_14834[(2)]);
var inst_14810 = cljs.core.next.call(null,inst_14793);
var inst_14774 = inst_14810;
var inst_14775 = null;
var inst_14776 = (0);
var inst_14777 = (0);
var state_14834__$1 = (function (){var statearr_14871 = state_14834;
(statearr_14871[(9)] = inst_14777);

(statearr_14871[(20)] = inst_14774);

(statearr_14871[(27)] = inst_14809);

(statearr_14871[(21)] = inst_14776);

(statearr_14871[(11)] = inst_14775);

return statearr_14871;
})();
var statearr_14872_14943 = state_14834__$1;
(statearr_14872_14943[(2)] = null);

(statearr_14872_14943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (43))){
var state_14834__$1 = state_14834;
var statearr_14873_14944 = state_14834__$1;
(statearr_14873_14944[(2)] = null);

(statearr_14873_14944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (29))){
var inst_14818 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14874_14945 = state_14834__$1;
(statearr_14874_14945[(2)] = inst_14818);

(statearr_14874_14945[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (44))){
var inst_14827 = (state_14834[(2)]);
var state_14834__$1 = (function (){var statearr_14875 = state_14834;
(statearr_14875[(28)] = inst_14827);

return statearr_14875;
})();
var statearr_14876_14946 = state_14834__$1;
(statearr_14876_14946[(2)] = null);

(statearr_14876_14946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (6))){
var inst_14766 = (state_14834[(29)]);
var inst_14765 = cljs.core.deref.call(null,cs);
var inst_14766__$1 = cljs.core.keys.call(null,inst_14765);
var inst_14767 = cljs.core.count.call(null,inst_14766__$1);
var inst_14768 = cljs.core.reset_BANG_.call(null,dctr,inst_14767);
var inst_14773 = cljs.core.seq.call(null,inst_14766__$1);
var inst_14774 = inst_14773;
var inst_14775 = null;
var inst_14776 = (0);
var inst_14777 = (0);
var state_14834__$1 = (function (){var statearr_14877 = state_14834;
(statearr_14877[(9)] = inst_14777);

(statearr_14877[(20)] = inst_14774);

(statearr_14877[(21)] = inst_14776);

(statearr_14877[(11)] = inst_14775);

(statearr_14877[(29)] = inst_14766__$1);

(statearr_14877[(30)] = inst_14768);

return statearr_14877;
})();
var statearr_14878_14947 = state_14834__$1;
(statearr_14878_14947[(2)] = null);

(statearr_14878_14947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (28))){
var inst_14774 = (state_14834[(20)]);
var inst_14793 = (state_14834[(25)]);
var inst_14793__$1 = cljs.core.seq.call(null,inst_14774);
var state_14834__$1 = (function (){var statearr_14879 = state_14834;
(statearr_14879[(25)] = inst_14793__$1);

return statearr_14879;
})();
if(inst_14793__$1){
var statearr_14880_14948 = state_14834__$1;
(statearr_14880_14948[(1)] = (33));

} else {
var statearr_14881_14949 = state_14834__$1;
(statearr_14881_14949[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (25))){
var inst_14777 = (state_14834[(9)]);
var inst_14776 = (state_14834[(21)]);
var inst_14779 = (inst_14777 < inst_14776);
var inst_14780 = inst_14779;
var state_14834__$1 = state_14834;
if(cljs.core.truth_(inst_14780)){
var statearr_14882_14950 = state_14834__$1;
(statearr_14882_14950[(1)] = (27));

} else {
var statearr_14883_14951 = state_14834__$1;
(statearr_14883_14951[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (34))){
var state_14834__$1 = state_14834;
var statearr_14884_14952 = state_14834__$1;
(statearr_14884_14952[(2)] = null);

(statearr_14884_14952[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (17))){
var state_14834__$1 = state_14834;
var statearr_14885_14953 = state_14834__$1;
(statearr_14885_14953[(2)] = null);

(statearr_14885_14953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (3))){
var inst_14832 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14834__$1,inst_14832);
} else {
if((state_val_14835 === (12))){
var inst_14761 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14886_14954 = state_14834__$1;
(statearr_14886_14954[(2)] = inst_14761);

(statearr_14886_14954[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (2))){
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14834__$1,(4),ch);
} else {
if((state_val_14835 === (23))){
var state_14834__$1 = state_14834;
var statearr_14887_14955 = state_14834__$1;
(statearr_14887_14955[(2)] = null);

(statearr_14887_14955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (35))){
var inst_14816 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14888_14956 = state_14834__$1;
(statearr_14888_14956[(2)] = inst_14816);

(statearr_14888_14956[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (19))){
var inst_14735 = (state_14834[(7)]);
var inst_14739 = cljs.core.chunk_first.call(null,inst_14735);
var inst_14740 = cljs.core.chunk_rest.call(null,inst_14735);
var inst_14741 = cljs.core.count.call(null,inst_14739);
var inst_14715 = inst_14740;
var inst_14716 = inst_14739;
var inst_14717 = inst_14741;
var inst_14718 = (0);
var state_14834__$1 = (function (){var statearr_14889 = state_14834;
(statearr_14889[(13)] = inst_14715);

(statearr_14889[(14)] = inst_14717);

(statearr_14889[(15)] = inst_14718);

(statearr_14889[(17)] = inst_14716);

return statearr_14889;
})();
var statearr_14890_14957 = state_14834__$1;
(statearr_14890_14957[(2)] = null);

(statearr_14890_14957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (11))){
var inst_14715 = (state_14834[(13)]);
var inst_14735 = (state_14834[(7)]);
var inst_14735__$1 = cljs.core.seq.call(null,inst_14715);
var state_14834__$1 = (function (){var statearr_14891 = state_14834;
(statearr_14891[(7)] = inst_14735__$1);

return statearr_14891;
})();
if(inst_14735__$1){
var statearr_14892_14958 = state_14834__$1;
(statearr_14892_14958[(1)] = (16));

} else {
var statearr_14893_14959 = state_14834__$1;
(statearr_14893_14959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (9))){
var inst_14763 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14894_14960 = state_14834__$1;
(statearr_14894_14960[(2)] = inst_14763);

(statearr_14894_14960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (5))){
var inst_14713 = cljs.core.deref.call(null,cs);
var inst_14714 = cljs.core.seq.call(null,inst_14713);
var inst_14715 = inst_14714;
var inst_14716 = null;
var inst_14717 = (0);
var inst_14718 = (0);
var state_14834__$1 = (function (){var statearr_14895 = state_14834;
(statearr_14895[(13)] = inst_14715);

(statearr_14895[(14)] = inst_14717);

(statearr_14895[(15)] = inst_14718);

(statearr_14895[(17)] = inst_14716);

return statearr_14895;
})();
var statearr_14896_14961 = state_14834__$1;
(statearr_14896_14961[(2)] = null);

(statearr_14896_14961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (14))){
var state_14834__$1 = state_14834;
var statearr_14897_14962 = state_14834__$1;
(statearr_14897_14962[(2)] = null);

(statearr_14897_14962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (45))){
var inst_14824 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14898_14963 = state_14834__$1;
(statearr_14898_14963[(2)] = inst_14824);

(statearr_14898_14963[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (26))){
var inst_14766 = (state_14834[(29)]);
var inst_14820 = (state_14834[(2)]);
var inst_14821 = cljs.core.seq.call(null,inst_14766);
var state_14834__$1 = (function (){var statearr_14899 = state_14834;
(statearr_14899[(31)] = inst_14820);

return statearr_14899;
})();
if(inst_14821){
var statearr_14900_14964 = state_14834__$1;
(statearr_14900_14964[(1)] = (42));

} else {
var statearr_14901_14965 = state_14834__$1;
(statearr_14901_14965[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (16))){
var inst_14735 = (state_14834[(7)]);
var inst_14737 = cljs.core.chunked_seq_QMARK_.call(null,inst_14735);
var state_14834__$1 = state_14834;
if(inst_14737){
var statearr_14902_14966 = state_14834__$1;
(statearr_14902_14966[(1)] = (19));

} else {
var statearr_14903_14967 = state_14834__$1;
(statearr_14903_14967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (38))){
var inst_14813 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14904_14968 = state_14834__$1;
(statearr_14904_14968[(2)] = inst_14813);

(statearr_14904_14968[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (30))){
var state_14834__$1 = state_14834;
var statearr_14905_14969 = state_14834__$1;
(statearr_14905_14969[(2)] = null);

(statearr_14905_14969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (10))){
var inst_14718 = (state_14834[(15)]);
var inst_14716 = (state_14834[(17)]);
var inst_14724 = cljs.core._nth.call(null,inst_14716,inst_14718);
var inst_14725 = cljs.core.nth.call(null,inst_14724,(0),null);
var inst_14726 = cljs.core.nth.call(null,inst_14724,(1),null);
var state_14834__$1 = (function (){var statearr_14906 = state_14834;
(statearr_14906[(26)] = inst_14725);

return statearr_14906;
})();
if(cljs.core.truth_(inst_14726)){
var statearr_14907_14970 = state_14834__$1;
(statearr_14907_14970[(1)] = (13));

} else {
var statearr_14908_14971 = state_14834__$1;
(statearr_14908_14971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (18))){
var inst_14759 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14909_14972 = state_14834__$1;
(statearr_14909_14972[(2)] = inst_14759);

(statearr_14909_14972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (42))){
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14834__$1,(45),dchan);
} else {
if((state_val_14835 === (37))){
var inst_14706 = (state_14834[(10)]);
var inst_14793 = (state_14834[(25)]);
var inst_14802 = (state_14834[(23)]);
var inst_14802__$1 = cljs.core.first.call(null,inst_14793);
var inst_14803 = cljs.core.async.put_BANG_.call(null,inst_14802__$1,inst_14706,done);
var state_14834__$1 = (function (){var statearr_14910 = state_14834;
(statearr_14910[(23)] = inst_14802__$1);

return statearr_14910;
})();
if(cljs.core.truth_(inst_14803)){
var statearr_14911_14973 = state_14834__$1;
(statearr_14911_14973[(1)] = (39));

} else {
var statearr_14912_14974 = state_14834__$1;
(statearr_14912_14974[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14835 === (8))){
var inst_14717 = (state_14834[(14)]);
var inst_14718 = (state_14834[(15)]);
var inst_14720 = (inst_14718 < inst_14717);
var inst_14721 = inst_14720;
var state_14834__$1 = state_14834;
if(cljs.core.truth_(inst_14721)){
var statearr_14913_14975 = state_14834__$1;
(statearr_14913_14975[(1)] = (10));

} else {
var statearr_14914_14976 = state_14834__$1;
(statearr_14914_14976[(1)] = (11));

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
});})(c__6540__auto___14922,cs,m,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___14922,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6479__auto__ = null;
var cljs$core$async$mult_$_state_machine__6479__auto____0 = (function (){
var statearr_14918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14918[(0)] = cljs$core$async$mult_$_state_machine__6479__auto__);

(statearr_14918[(1)] = (1));

return statearr_14918;
});
var cljs$core$async$mult_$_state_machine__6479__auto____1 = (function (state_14834){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14919){if((e14919 instanceof Object)){
var ex__6482__auto__ = e14919;
var statearr_14920_14977 = state_14834;
(statearr_14920_14977[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14978 = state_14834;
state_14834 = G__14978;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6479__auto__ = function(state_14834){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6479__auto____1.call(this,state_14834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6479__auto____0;
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6479__auto____1;
return cljs$core$async$mult_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14922,cs,m,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_14921 = f__6541__auto__.call(null);
(statearr_14921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14922);

return statearr_14921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14922,cs,m,dchan,dctr,done))
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
var G__14980 = arguments.length;
switch (G__14980) {
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

cljs.core.async.Mix = (function (){var obj14983 = {};
return obj14983;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14988){
var map__14989 = p__14988;
var map__14989__$1 = ((cljs.core.seq_QMARK_.call(null,map__14989))?cljs.core.apply.call(null,cljs.core.hash_map,map__14989):map__14989);
var opts = map__14989__$1;
var statearr_14990_14993 = state;
(statearr_14990_14993[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14989,map__14989__$1,opts){
return (function (val){
var statearr_14991_14994 = state;
(statearr_14991_14994[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14989,map__14989__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14992_14995 = state;
(statearr_14992_14995[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14984){
var G__14985 = cljs.core.first.call(null,seq14984);
var seq14984__$1 = cljs.core.next.call(null,seq14984);
var G__14986 = cljs.core.first.call(null,seq14984__$1);
var seq14984__$2 = cljs.core.next.call(null,seq14984__$1);
var G__14987 = cljs.core.first.call(null,seq14984__$2);
var seq14984__$3 = cljs.core.next.call(null,seq14984__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14985,G__14986,G__14987,seq14984__$3);
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
if(typeof cljs.core.async.t15115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15115 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15116){
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
this.meta15116 = meta15116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15115.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t15115.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15117){
var self__ = this;
var _15117__$1 = this;
return self__.meta15116;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15117,meta15116__$1){
var self__ = this;
var _15117__$1 = this;
return (new cljs.core.async.t15115(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15116__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15115.cljs$lang$type = true;

cljs.core.async.t15115.cljs$lang$ctorStr = "cljs.core.async/t15115";

cljs.core.async.t15115.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15115");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t15115 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t15115(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15116){
return (new cljs.core.async.t15115(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15116));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t15115(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___15234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15187){
var state_val_15188 = (state_15187[(1)]);
if((state_val_15188 === (7))){
var inst_15131 = (state_15187[(7)]);
var inst_15136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15131);
var state_15187__$1 = state_15187;
var statearr_15189_15235 = state_15187__$1;
(statearr_15189_15235[(2)] = inst_15136);

(statearr_15189_15235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (20))){
var inst_15146 = (state_15187[(8)]);
var state_15187__$1 = state_15187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15187__$1,(23),out,inst_15146);
} else {
if((state_val_15188 === (1))){
var inst_15121 = (state_15187[(9)]);
var inst_15121__$1 = calc_state.call(null);
var inst_15122 = cljs.core.seq_QMARK_.call(null,inst_15121__$1);
var state_15187__$1 = (function (){var statearr_15190 = state_15187;
(statearr_15190[(9)] = inst_15121__$1);

return statearr_15190;
})();
if(inst_15122){
var statearr_15191_15236 = state_15187__$1;
(statearr_15191_15236[(1)] = (2));

} else {
var statearr_15192_15237 = state_15187__$1;
(statearr_15192_15237[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (24))){
var inst_15139 = (state_15187[(10)]);
var inst_15131 = inst_15139;
var state_15187__$1 = (function (){var statearr_15193 = state_15187;
(statearr_15193[(7)] = inst_15131);

return statearr_15193;
})();
var statearr_15194_15238 = state_15187__$1;
(statearr_15194_15238[(2)] = null);

(statearr_15194_15238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (4))){
var inst_15121 = (state_15187[(9)]);
var inst_15127 = (state_15187[(2)]);
var inst_15128 = cljs.core.get.call(null,inst_15127,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15129 = cljs.core.get.call(null,inst_15127,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15130 = cljs.core.get.call(null,inst_15127,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15131 = inst_15121;
var state_15187__$1 = (function (){var statearr_15195 = state_15187;
(statearr_15195[(7)] = inst_15131);

(statearr_15195[(11)] = inst_15129);

(statearr_15195[(12)] = inst_15128);

(statearr_15195[(13)] = inst_15130);

return statearr_15195;
})();
var statearr_15196_15239 = state_15187__$1;
(statearr_15196_15239[(2)] = null);

(statearr_15196_15239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (15))){
var state_15187__$1 = state_15187;
var statearr_15197_15240 = state_15187__$1;
(statearr_15197_15240[(2)] = null);

(statearr_15197_15240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (21))){
var inst_15139 = (state_15187[(10)]);
var inst_15131 = inst_15139;
var state_15187__$1 = (function (){var statearr_15198 = state_15187;
(statearr_15198[(7)] = inst_15131);

return statearr_15198;
})();
var statearr_15199_15241 = state_15187__$1;
(statearr_15199_15241[(2)] = null);

(statearr_15199_15241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (13))){
var inst_15183 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
var statearr_15200_15242 = state_15187__$1;
(statearr_15200_15242[(2)] = inst_15183);

(statearr_15200_15242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (22))){
var inst_15181 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
var statearr_15201_15243 = state_15187__$1;
(statearr_15201_15243[(2)] = inst_15181);

(statearr_15201_15243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (6))){
var inst_15185 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15187__$1,inst_15185);
} else {
if((state_val_15188 === (25))){
var state_15187__$1 = state_15187;
var statearr_15202_15244 = state_15187__$1;
(statearr_15202_15244[(2)] = null);

(statearr_15202_15244[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (17))){
var inst_15161 = (state_15187[(14)]);
var state_15187__$1 = state_15187;
var statearr_15203_15245 = state_15187__$1;
(statearr_15203_15245[(2)] = inst_15161);

(statearr_15203_15245[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (3))){
var inst_15121 = (state_15187[(9)]);
var state_15187__$1 = state_15187;
var statearr_15204_15246 = state_15187__$1;
(statearr_15204_15246[(2)] = inst_15121);

(statearr_15204_15246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (12))){
var inst_15161 = (state_15187[(14)]);
var inst_15142 = (state_15187[(15)]);
var inst_15147 = (state_15187[(16)]);
var inst_15161__$1 = inst_15142.call(null,inst_15147);
var state_15187__$1 = (function (){var statearr_15205 = state_15187;
(statearr_15205[(14)] = inst_15161__$1);

return statearr_15205;
})();
if(cljs.core.truth_(inst_15161__$1)){
var statearr_15206_15247 = state_15187__$1;
(statearr_15206_15247[(1)] = (17));

} else {
var statearr_15207_15248 = state_15187__$1;
(statearr_15207_15248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (2))){
var inst_15121 = (state_15187[(9)]);
var inst_15124 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15121);
var state_15187__$1 = state_15187;
var statearr_15208_15249 = state_15187__$1;
(statearr_15208_15249[(2)] = inst_15124);

(statearr_15208_15249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (23))){
var inst_15172 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
if(cljs.core.truth_(inst_15172)){
var statearr_15209_15250 = state_15187__$1;
(statearr_15209_15250[(1)] = (24));

} else {
var statearr_15210_15251 = state_15187__$1;
(statearr_15210_15251[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (19))){
var inst_15169 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
if(cljs.core.truth_(inst_15169)){
var statearr_15211_15252 = state_15187__$1;
(statearr_15211_15252[(1)] = (20));

} else {
var statearr_15212_15253 = state_15187__$1;
(statearr_15212_15253[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (11))){
var inst_15146 = (state_15187[(8)]);
var inst_15152 = (inst_15146 == null);
var state_15187__$1 = state_15187;
if(cljs.core.truth_(inst_15152)){
var statearr_15213_15254 = state_15187__$1;
(statearr_15213_15254[(1)] = (14));

} else {
var statearr_15214_15255 = state_15187__$1;
(statearr_15214_15255[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (9))){
var inst_15139 = (state_15187[(10)]);
var inst_15139__$1 = (state_15187[(2)]);
var inst_15140 = cljs.core.get.call(null,inst_15139__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15141 = cljs.core.get.call(null,inst_15139__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15142 = cljs.core.get.call(null,inst_15139__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_15187__$1 = (function (){var statearr_15215 = state_15187;
(statearr_15215[(10)] = inst_15139__$1);

(statearr_15215[(17)] = inst_15141);

(statearr_15215[(15)] = inst_15142);

return statearr_15215;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15187__$1,(10),inst_15140);
} else {
if((state_val_15188 === (5))){
var inst_15131 = (state_15187[(7)]);
var inst_15134 = cljs.core.seq_QMARK_.call(null,inst_15131);
var state_15187__$1 = state_15187;
if(inst_15134){
var statearr_15216_15256 = state_15187__$1;
(statearr_15216_15256[(1)] = (7));

} else {
var statearr_15217_15257 = state_15187__$1;
(statearr_15217_15257[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (14))){
var inst_15147 = (state_15187[(16)]);
var inst_15154 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15147);
var state_15187__$1 = state_15187;
var statearr_15218_15258 = state_15187__$1;
(statearr_15218_15258[(2)] = inst_15154);

(statearr_15218_15258[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (26))){
var inst_15177 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
var statearr_15219_15259 = state_15187__$1;
(statearr_15219_15259[(2)] = inst_15177);

(statearr_15219_15259[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (16))){
var inst_15157 = (state_15187[(2)]);
var inst_15158 = calc_state.call(null);
var inst_15131 = inst_15158;
var state_15187__$1 = (function (){var statearr_15220 = state_15187;
(statearr_15220[(7)] = inst_15131);

(statearr_15220[(18)] = inst_15157);

return statearr_15220;
})();
var statearr_15221_15260 = state_15187__$1;
(statearr_15221_15260[(2)] = null);

(statearr_15221_15260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (10))){
var inst_15146 = (state_15187[(8)]);
var inst_15147 = (state_15187[(16)]);
var inst_15145 = (state_15187[(2)]);
var inst_15146__$1 = cljs.core.nth.call(null,inst_15145,(0),null);
var inst_15147__$1 = cljs.core.nth.call(null,inst_15145,(1),null);
var inst_15148 = (inst_15146__$1 == null);
var inst_15149 = cljs.core._EQ_.call(null,inst_15147__$1,change);
var inst_15150 = (inst_15148) || (inst_15149);
var state_15187__$1 = (function (){var statearr_15222 = state_15187;
(statearr_15222[(8)] = inst_15146__$1);

(statearr_15222[(16)] = inst_15147__$1);

return statearr_15222;
})();
if(cljs.core.truth_(inst_15150)){
var statearr_15223_15261 = state_15187__$1;
(statearr_15223_15261[(1)] = (11));

} else {
var statearr_15224_15262 = state_15187__$1;
(statearr_15224_15262[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (18))){
var inst_15141 = (state_15187[(17)]);
var inst_15142 = (state_15187[(15)]);
var inst_15147 = (state_15187[(16)]);
var inst_15164 = cljs.core.empty_QMARK_.call(null,inst_15142);
var inst_15165 = inst_15141.call(null,inst_15147);
var inst_15166 = cljs.core.not.call(null,inst_15165);
var inst_15167 = (inst_15164) && (inst_15166);
var state_15187__$1 = state_15187;
var statearr_15225_15263 = state_15187__$1;
(statearr_15225_15263[(2)] = inst_15167);

(statearr_15225_15263[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (8))){
var inst_15131 = (state_15187[(7)]);
var state_15187__$1 = state_15187;
var statearr_15226_15264 = state_15187__$1;
(statearr_15226_15264[(2)] = inst_15131);

(statearr_15226_15264[(1)] = (9));


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
});})(c__6540__auto___15234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6478__auto__,c__6540__auto___15234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6479__auto__ = null;
var cljs$core$async$mix_$_state_machine__6479__auto____0 = (function (){
var statearr_15230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15230[(0)] = cljs$core$async$mix_$_state_machine__6479__auto__);

(statearr_15230[(1)] = (1));

return statearr_15230;
});
var cljs$core$async$mix_$_state_machine__6479__auto____1 = (function (state_15187){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15231){if((e15231 instanceof Object)){
var ex__6482__auto__ = e15231;
var statearr_15232_15265 = state_15187;
(statearr_15232_15265[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15266 = state_15187;
state_15187 = G__15266;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6479__auto__ = function(state_15187){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6479__auto____1.call(this,state_15187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6479__auto____0;
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6479__auto____1;
return cljs$core$async$mix_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6542__auto__ = (function (){var statearr_15233 = f__6541__auto__.call(null);
(statearr_15233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15234);

return statearr_15233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15234,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj15268 = {};
return obj15268;
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
var G__15270 = arguments.length;
switch (G__15270) {
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
var G__15274 = arguments.length;
switch (G__15274) {
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
return (function (p1__15272_SHARP_){
if(cljs.core.truth_(p1__15272_SHARP_.call(null,topic))){
return p1__15272_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15272_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15275 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15275 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta15276){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta15276 = meta15276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15275.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15275.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15275.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t15275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15275.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15275.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15277){
var self__ = this;
var _15277__$1 = this;
return self__.meta15276;
});})(mults,ensure_mult))
;

cljs.core.async.t15275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15277,meta15276__$1){
var self__ = this;
var _15277__$1 = this;
return (new cljs.core.async.t15275(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta15276__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15275.cljs$lang$type = true;

cljs.core.async.t15275.cljs$lang$ctorStr = "cljs.core.async/t15275";

cljs.core.async.t15275.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15275");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15275 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t15275(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15276){
return (new cljs.core.async.t15275(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15276));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15275(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___15398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15398,mults,ensure_mult,p){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15398,mults,ensure_mult,p){
return (function (state_15349){
var state_val_15350 = (state_15349[(1)]);
if((state_val_15350 === (7))){
var inst_15345 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15351_15399 = state_15349__$1;
(statearr_15351_15399[(2)] = inst_15345);

(statearr_15351_15399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (20))){
var state_15349__$1 = state_15349;
var statearr_15352_15400 = state_15349__$1;
(statearr_15352_15400[(2)] = null);

(statearr_15352_15400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (1))){
var state_15349__$1 = state_15349;
var statearr_15353_15401 = state_15349__$1;
(statearr_15353_15401[(2)] = null);

(statearr_15353_15401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (24))){
var inst_15328 = (state_15349[(7)]);
var inst_15337 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15328);
var state_15349__$1 = state_15349;
var statearr_15354_15402 = state_15349__$1;
(statearr_15354_15402[(2)] = inst_15337);

(statearr_15354_15402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (4))){
var inst_15280 = (state_15349[(8)]);
var inst_15280__$1 = (state_15349[(2)]);
var inst_15281 = (inst_15280__$1 == null);
var state_15349__$1 = (function (){var statearr_15355 = state_15349;
(statearr_15355[(8)] = inst_15280__$1);

return statearr_15355;
})();
if(cljs.core.truth_(inst_15281)){
var statearr_15356_15403 = state_15349__$1;
(statearr_15356_15403[(1)] = (5));

} else {
var statearr_15357_15404 = state_15349__$1;
(statearr_15357_15404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (15))){
var inst_15322 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15358_15405 = state_15349__$1;
(statearr_15358_15405[(2)] = inst_15322);

(statearr_15358_15405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (21))){
var inst_15342 = (state_15349[(2)]);
var state_15349__$1 = (function (){var statearr_15359 = state_15349;
(statearr_15359[(9)] = inst_15342);

return statearr_15359;
})();
var statearr_15360_15406 = state_15349__$1;
(statearr_15360_15406[(2)] = null);

(statearr_15360_15406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (13))){
var inst_15304 = (state_15349[(10)]);
var inst_15306 = cljs.core.chunked_seq_QMARK_.call(null,inst_15304);
var state_15349__$1 = state_15349;
if(inst_15306){
var statearr_15361_15407 = state_15349__$1;
(statearr_15361_15407[(1)] = (16));

} else {
var statearr_15362_15408 = state_15349__$1;
(statearr_15362_15408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (22))){
var inst_15334 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
if(cljs.core.truth_(inst_15334)){
var statearr_15363_15409 = state_15349__$1;
(statearr_15363_15409[(1)] = (23));

} else {
var statearr_15364_15410 = state_15349__$1;
(statearr_15364_15410[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (6))){
var inst_15330 = (state_15349[(11)]);
var inst_15280 = (state_15349[(8)]);
var inst_15328 = (state_15349[(7)]);
var inst_15328__$1 = topic_fn.call(null,inst_15280);
var inst_15329 = cljs.core.deref.call(null,mults);
var inst_15330__$1 = cljs.core.get.call(null,inst_15329,inst_15328__$1);
var state_15349__$1 = (function (){var statearr_15365 = state_15349;
(statearr_15365[(11)] = inst_15330__$1);

(statearr_15365[(7)] = inst_15328__$1);

return statearr_15365;
})();
if(cljs.core.truth_(inst_15330__$1)){
var statearr_15366_15411 = state_15349__$1;
(statearr_15366_15411[(1)] = (19));

} else {
var statearr_15367_15412 = state_15349__$1;
(statearr_15367_15412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (25))){
var inst_15339 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15368_15413 = state_15349__$1;
(statearr_15368_15413[(2)] = inst_15339);

(statearr_15368_15413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (17))){
var inst_15304 = (state_15349[(10)]);
var inst_15313 = cljs.core.first.call(null,inst_15304);
var inst_15314 = cljs.core.async.muxch_STAR_.call(null,inst_15313);
var inst_15315 = cljs.core.async.close_BANG_.call(null,inst_15314);
var inst_15316 = cljs.core.next.call(null,inst_15304);
var inst_15290 = inst_15316;
var inst_15291 = null;
var inst_15292 = (0);
var inst_15293 = (0);
var state_15349__$1 = (function (){var statearr_15369 = state_15349;
(statearr_15369[(12)] = inst_15291);

(statearr_15369[(13)] = inst_15315);

(statearr_15369[(14)] = inst_15290);

(statearr_15369[(15)] = inst_15293);

(statearr_15369[(16)] = inst_15292);

return statearr_15369;
})();
var statearr_15370_15414 = state_15349__$1;
(statearr_15370_15414[(2)] = null);

(statearr_15370_15414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (3))){
var inst_15347 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15349__$1,inst_15347);
} else {
if((state_val_15350 === (12))){
var inst_15324 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15371_15415 = state_15349__$1;
(statearr_15371_15415[(2)] = inst_15324);

(statearr_15371_15415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (2))){
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15349__$1,(4),ch);
} else {
if((state_val_15350 === (23))){
var state_15349__$1 = state_15349;
var statearr_15372_15416 = state_15349__$1;
(statearr_15372_15416[(2)] = null);

(statearr_15372_15416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (19))){
var inst_15330 = (state_15349[(11)]);
var inst_15280 = (state_15349[(8)]);
var inst_15332 = cljs.core.async.muxch_STAR_.call(null,inst_15330);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15349__$1,(22),inst_15332,inst_15280);
} else {
if((state_val_15350 === (11))){
var inst_15304 = (state_15349[(10)]);
var inst_15290 = (state_15349[(14)]);
var inst_15304__$1 = cljs.core.seq.call(null,inst_15290);
var state_15349__$1 = (function (){var statearr_15373 = state_15349;
(statearr_15373[(10)] = inst_15304__$1);

return statearr_15373;
})();
if(inst_15304__$1){
var statearr_15374_15417 = state_15349__$1;
(statearr_15374_15417[(1)] = (13));

} else {
var statearr_15375_15418 = state_15349__$1;
(statearr_15375_15418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (9))){
var inst_15326 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15376_15419 = state_15349__$1;
(statearr_15376_15419[(2)] = inst_15326);

(statearr_15376_15419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (5))){
var inst_15287 = cljs.core.deref.call(null,mults);
var inst_15288 = cljs.core.vals.call(null,inst_15287);
var inst_15289 = cljs.core.seq.call(null,inst_15288);
var inst_15290 = inst_15289;
var inst_15291 = null;
var inst_15292 = (0);
var inst_15293 = (0);
var state_15349__$1 = (function (){var statearr_15377 = state_15349;
(statearr_15377[(12)] = inst_15291);

(statearr_15377[(14)] = inst_15290);

(statearr_15377[(15)] = inst_15293);

(statearr_15377[(16)] = inst_15292);

return statearr_15377;
})();
var statearr_15378_15420 = state_15349__$1;
(statearr_15378_15420[(2)] = null);

(statearr_15378_15420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (14))){
var state_15349__$1 = state_15349;
var statearr_15382_15421 = state_15349__$1;
(statearr_15382_15421[(2)] = null);

(statearr_15382_15421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (16))){
var inst_15304 = (state_15349[(10)]);
var inst_15308 = cljs.core.chunk_first.call(null,inst_15304);
var inst_15309 = cljs.core.chunk_rest.call(null,inst_15304);
var inst_15310 = cljs.core.count.call(null,inst_15308);
var inst_15290 = inst_15309;
var inst_15291 = inst_15308;
var inst_15292 = inst_15310;
var inst_15293 = (0);
var state_15349__$1 = (function (){var statearr_15383 = state_15349;
(statearr_15383[(12)] = inst_15291);

(statearr_15383[(14)] = inst_15290);

(statearr_15383[(15)] = inst_15293);

(statearr_15383[(16)] = inst_15292);

return statearr_15383;
})();
var statearr_15384_15422 = state_15349__$1;
(statearr_15384_15422[(2)] = null);

(statearr_15384_15422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (10))){
var inst_15291 = (state_15349[(12)]);
var inst_15290 = (state_15349[(14)]);
var inst_15293 = (state_15349[(15)]);
var inst_15292 = (state_15349[(16)]);
var inst_15298 = cljs.core._nth.call(null,inst_15291,inst_15293);
var inst_15299 = cljs.core.async.muxch_STAR_.call(null,inst_15298);
var inst_15300 = cljs.core.async.close_BANG_.call(null,inst_15299);
var inst_15301 = (inst_15293 + (1));
var tmp15379 = inst_15291;
var tmp15380 = inst_15290;
var tmp15381 = inst_15292;
var inst_15290__$1 = tmp15380;
var inst_15291__$1 = tmp15379;
var inst_15292__$1 = tmp15381;
var inst_15293__$1 = inst_15301;
var state_15349__$1 = (function (){var statearr_15385 = state_15349;
(statearr_15385[(12)] = inst_15291__$1);

(statearr_15385[(14)] = inst_15290__$1);

(statearr_15385[(15)] = inst_15293__$1);

(statearr_15385[(17)] = inst_15300);

(statearr_15385[(16)] = inst_15292__$1);

return statearr_15385;
})();
var statearr_15386_15423 = state_15349__$1;
(statearr_15386_15423[(2)] = null);

(statearr_15386_15423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (18))){
var inst_15319 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15387_15424 = state_15349__$1;
(statearr_15387_15424[(2)] = inst_15319);

(statearr_15387_15424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (8))){
var inst_15293 = (state_15349[(15)]);
var inst_15292 = (state_15349[(16)]);
var inst_15295 = (inst_15293 < inst_15292);
var inst_15296 = inst_15295;
var state_15349__$1 = state_15349;
if(cljs.core.truth_(inst_15296)){
var statearr_15388_15425 = state_15349__$1;
(statearr_15388_15425[(1)] = (10));

} else {
var statearr_15389_15426 = state_15349__$1;
(statearr_15389_15426[(1)] = (11));

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
});})(c__6540__auto___15398,mults,ensure_mult,p))
;
return ((function (switch__6478__auto__,c__6540__auto___15398,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15393[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15393[(1)] = (1));

return statearr_15393;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15349){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15394){if((e15394 instanceof Object)){
var ex__6482__auto__ = e15394;
var statearr_15395_15427 = state_15349;
(statearr_15395_15427[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15428 = state_15349;
state_15349 = G__15428;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15398,mults,ensure_mult,p))
})();
var state__6542__auto__ = (function (){var statearr_15396 = f__6541__auto__.call(null);
(statearr_15396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15398);

return statearr_15396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15398,mults,ensure_mult,p))
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
var G__15430 = arguments.length;
switch (G__15430) {
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
var G__15433 = arguments.length;
switch (G__15433) {
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
var G__15436 = arguments.length;
switch (G__15436) {
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
var c__6540__auto___15506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15475){
var state_val_15476 = (state_15475[(1)]);
if((state_val_15476 === (7))){
var state_15475__$1 = state_15475;
var statearr_15477_15507 = state_15475__$1;
(statearr_15477_15507[(2)] = null);

(statearr_15477_15507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (1))){
var state_15475__$1 = state_15475;
var statearr_15478_15508 = state_15475__$1;
(statearr_15478_15508[(2)] = null);

(statearr_15478_15508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (4))){
var inst_15439 = (state_15475[(7)]);
var inst_15441 = (inst_15439 < cnt);
var state_15475__$1 = state_15475;
if(cljs.core.truth_(inst_15441)){
var statearr_15479_15509 = state_15475__$1;
(statearr_15479_15509[(1)] = (6));

} else {
var statearr_15480_15510 = state_15475__$1;
(statearr_15480_15510[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (15))){
var inst_15471 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15481_15511 = state_15475__$1;
(statearr_15481_15511[(2)] = inst_15471);

(statearr_15481_15511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (13))){
var inst_15464 = cljs.core.async.close_BANG_.call(null,out);
var state_15475__$1 = state_15475;
var statearr_15482_15512 = state_15475__$1;
(statearr_15482_15512[(2)] = inst_15464);

(statearr_15482_15512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (6))){
var state_15475__$1 = state_15475;
var statearr_15483_15513 = state_15475__$1;
(statearr_15483_15513[(2)] = null);

(statearr_15483_15513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (3))){
var inst_15473 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15475__$1,inst_15473);
} else {
if((state_val_15476 === (12))){
var inst_15461 = (state_15475[(8)]);
var inst_15461__$1 = (state_15475[(2)]);
var inst_15462 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15461__$1);
var state_15475__$1 = (function (){var statearr_15484 = state_15475;
(statearr_15484[(8)] = inst_15461__$1);

return statearr_15484;
})();
if(cljs.core.truth_(inst_15462)){
var statearr_15485_15514 = state_15475__$1;
(statearr_15485_15514[(1)] = (13));

} else {
var statearr_15486_15515 = state_15475__$1;
(statearr_15486_15515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (2))){
var inst_15438 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15439 = (0);
var state_15475__$1 = (function (){var statearr_15487 = state_15475;
(statearr_15487[(7)] = inst_15439);

(statearr_15487[(9)] = inst_15438);

return statearr_15487;
})();
var statearr_15488_15516 = state_15475__$1;
(statearr_15488_15516[(2)] = null);

(statearr_15488_15516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (11))){
var inst_15439 = (state_15475[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15475,(10),Object,null,(9));
var inst_15448 = chs__$1.call(null,inst_15439);
var inst_15449 = done.call(null,inst_15439);
var inst_15450 = cljs.core.async.take_BANG_.call(null,inst_15448,inst_15449);
var state_15475__$1 = state_15475;
var statearr_15489_15517 = state_15475__$1;
(statearr_15489_15517[(2)] = inst_15450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (9))){
var inst_15439 = (state_15475[(7)]);
var inst_15452 = (state_15475[(2)]);
var inst_15453 = (inst_15439 + (1));
var inst_15439__$1 = inst_15453;
var state_15475__$1 = (function (){var statearr_15490 = state_15475;
(statearr_15490[(7)] = inst_15439__$1);

(statearr_15490[(10)] = inst_15452);

return statearr_15490;
})();
var statearr_15491_15518 = state_15475__$1;
(statearr_15491_15518[(2)] = null);

(statearr_15491_15518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (5))){
var inst_15459 = (state_15475[(2)]);
var state_15475__$1 = (function (){var statearr_15492 = state_15475;
(statearr_15492[(11)] = inst_15459);

return statearr_15492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15475__$1,(12),dchan);
} else {
if((state_val_15476 === (14))){
var inst_15461 = (state_15475[(8)]);
var inst_15466 = cljs.core.apply.call(null,f,inst_15461);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15475__$1,(16),out,inst_15466);
} else {
if((state_val_15476 === (16))){
var inst_15468 = (state_15475[(2)]);
var state_15475__$1 = (function (){var statearr_15493 = state_15475;
(statearr_15493[(12)] = inst_15468);

return statearr_15493;
})();
var statearr_15494_15519 = state_15475__$1;
(statearr_15494_15519[(2)] = null);

(statearr_15494_15519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (10))){
var inst_15443 = (state_15475[(2)]);
var inst_15444 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15475__$1 = (function (){var statearr_15495 = state_15475;
(statearr_15495[(13)] = inst_15443);

return statearr_15495;
})();
var statearr_15496_15520 = state_15475__$1;
(statearr_15496_15520[(2)] = inst_15444);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (8))){
var inst_15457 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15497_15521 = state_15475__$1;
(statearr_15497_15521[(2)] = inst_15457);

(statearr_15497_15521[(1)] = (5));


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
});})(c__6540__auto___15506,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___15506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15501[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15501[(1)] = (1));

return statearr_15501;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15475){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15502){if((e15502 instanceof Object)){
var ex__6482__auto__ = e15502;
var statearr_15503_15522 = state_15475;
(statearr_15503_15522[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15523 = state_15475;
state_15475 = G__15523;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15506,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_15504 = f__6541__auto__.call(null);
(statearr_15504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15506);

return statearr_15504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15506,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15526 = arguments.length;
switch (G__15526) {
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
var c__6540__auto___15581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15581,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15581,out){
return (function (state_15556){
var state_val_15557 = (state_15556[(1)]);
if((state_val_15557 === (7))){
var inst_15536 = (state_15556[(7)]);
var inst_15535 = (state_15556[(8)]);
var inst_15535__$1 = (state_15556[(2)]);
var inst_15536__$1 = cljs.core.nth.call(null,inst_15535__$1,(0),null);
var inst_15537 = cljs.core.nth.call(null,inst_15535__$1,(1),null);
var inst_15538 = (inst_15536__$1 == null);
var state_15556__$1 = (function (){var statearr_15558 = state_15556;
(statearr_15558[(7)] = inst_15536__$1);

(statearr_15558[(9)] = inst_15537);

(statearr_15558[(8)] = inst_15535__$1);

return statearr_15558;
})();
if(cljs.core.truth_(inst_15538)){
var statearr_15559_15582 = state_15556__$1;
(statearr_15559_15582[(1)] = (8));

} else {
var statearr_15560_15583 = state_15556__$1;
(statearr_15560_15583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (1))){
var inst_15527 = cljs.core.vec.call(null,chs);
var inst_15528 = inst_15527;
var state_15556__$1 = (function (){var statearr_15561 = state_15556;
(statearr_15561[(10)] = inst_15528);

return statearr_15561;
})();
var statearr_15562_15584 = state_15556__$1;
(statearr_15562_15584[(2)] = null);

(statearr_15562_15584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (4))){
var inst_15528 = (state_15556[(10)]);
var state_15556__$1 = state_15556;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15556__$1,(7),inst_15528);
} else {
if((state_val_15557 === (6))){
var inst_15552 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
var statearr_15563_15585 = state_15556__$1;
(statearr_15563_15585[(2)] = inst_15552);

(statearr_15563_15585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (3))){
var inst_15554 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15556__$1,inst_15554);
} else {
if((state_val_15557 === (2))){
var inst_15528 = (state_15556[(10)]);
var inst_15530 = cljs.core.count.call(null,inst_15528);
var inst_15531 = (inst_15530 > (0));
var state_15556__$1 = state_15556;
if(cljs.core.truth_(inst_15531)){
var statearr_15565_15586 = state_15556__$1;
(statearr_15565_15586[(1)] = (4));

} else {
var statearr_15566_15587 = state_15556__$1;
(statearr_15566_15587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (11))){
var inst_15528 = (state_15556[(10)]);
var inst_15545 = (state_15556[(2)]);
var tmp15564 = inst_15528;
var inst_15528__$1 = tmp15564;
var state_15556__$1 = (function (){var statearr_15567 = state_15556;
(statearr_15567[(11)] = inst_15545);

(statearr_15567[(10)] = inst_15528__$1);

return statearr_15567;
})();
var statearr_15568_15588 = state_15556__$1;
(statearr_15568_15588[(2)] = null);

(statearr_15568_15588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (9))){
var inst_15536 = (state_15556[(7)]);
var state_15556__$1 = state_15556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15556__$1,(11),out,inst_15536);
} else {
if((state_val_15557 === (5))){
var inst_15550 = cljs.core.async.close_BANG_.call(null,out);
var state_15556__$1 = state_15556;
var statearr_15569_15589 = state_15556__$1;
(statearr_15569_15589[(2)] = inst_15550);

(statearr_15569_15589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (10))){
var inst_15548 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
var statearr_15570_15590 = state_15556__$1;
(statearr_15570_15590[(2)] = inst_15548);

(statearr_15570_15590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (8))){
var inst_15536 = (state_15556[(7)]);
var inst_15528 = (state_15556[(10)]);
var inst_15537 = (state_15556[(9)]);
var inst_15535 = (state_15556[(8)]);
var inst_15540 = (function (){var c = inst_15537;
var v = inst_15536;
var vec__15533 = inst_15535;
var cs = inst_15528;
return ((function (c,v,vec__15533,cs,inst_15536,inst_15528,inst_15537,inst_15535,state_val_15557,c__6540__auto___15581,out){
return (function (p1__15524_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15524_SHARP_);
});
;})(c,v,vec__15533,cs,inst_15536,inst_15528,inst_15537,inst_15535,state_val_15557,c__6540__auto___15581,out))
})();
var inst_15541 = cljs.core.filterv.call(null,inst_15540,inst_15528);
var inst_15528__$1 = inst_15541;
var state_15556__$1 = (function (){var statearr_15571 = state_15556;
(statearr_15571[(10)] = inst_15528__$1);

return statearr_15571;
})();
var statearr_15572_15591 = state_15556__$1;
(statearr_15572_15591[(2)] = null);

(statearr_15572_15591[(1)] = (2));


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
});})(c__6540__auto___15581,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15581,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15576[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15576[(1)] = (1));

return statearr_15576;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15556){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15577){if((e15577 instanceof Object)){
var ex__6482__auto__ = e15577;
var statearr_15578_15592 = state_15556;
(statearr_15578_15592[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15593 = state_15556;
state_15556 = G__15593;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15581,out))
})();
var state__6542__auto__ = (function (){var statearr_15579 = f__6541__auto__.call(null);
(statearr_15579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15581);

return statearr_15579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15581,out))
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
var G__15595 = arguments.length;
switch (G__15595) {
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
var c__6540__auto___15643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15643,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15643,out){
return (function (state_15619){
var state_val_15620 = (state_15619[(1)]);
if((state_val_15620 === (7))){
var inst_15601 = (state_15619[(7)]);
var inst_15601__$1 = (state_15619[(2)]);
var inst_15602 = (inst_15601__$1 == null);
var inst_15603 = cljs.core.not.call(null,inst_15602);
var state_15619__$1 = (function (){var statearr_15621 = state_15619;
(statearr_15621[(7)] = inst_15601__$1);

return statearr_15621;
})();
if(inst_15603){
var statearr_15622_15644 = state_15619__$1;
(statearr_15622_15644[(1)] = (8));

} else {
var statearr_15623_15645 = state_15619__$1;
(statearr_15623_15645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (1))){
var inst_15596 = (0);
var state_15619__$1 = (function (){var statearr_15624 = state_15619;
(statearr_15624[(8)] = inst_15596);

return statearr_15624;
})();
var statearr_15625_15646 = state_15619__$1;
(statearr_15625_15646[(2)] = null);

(statearr_15625_15646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (4))){
var state_15619__$1 = state_15619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15619__$1,(7),ch);
} else {
if((state_val_15620 === (6))){
var inst_15614 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15626_15647 = state_15619__$1;
(statearr_15626_15647[(2)] = inst_15614);

(statearr_15626_15647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (3))){
var inst_15616 = (state_15619[(2)]);
var inst_15617 = cljs.core.async.close_BANG_.call(null,out);
var state_15619__$1 = (function (){var statearr_15627 = state_15619;
(statearr_15627[(9)] = inst_15616);

return statearr_15627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15619__$1,inst_15617);
} else {
if((state_val_15620 === (2))){
var inst_15596 = (state_15619[(8)]);
var inst_15598 = (inst_15596 < n);
var state_15619__$1 = state_15619;
if(cljs.core.truth_(inst_15598)){
var statearr_15628_15648 = state_15619__$1;
(statearr_15628_15648[(1)] = (4));

} else {
var statearr_15629_15649 = state_15619__$1;
(statearr_15629_15649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (11))){
var inst_15596 = (state_15619[(8)]);
var inst_15606 = (state_15619[(2)]);
var inst_15607 = (inst_15596 + (1));
var inst_15596__$1 = inst_15607;
var state_15619__$1 = (function (){var statearr_15630 = state_15619;
(statearr_15630[(8)] = inst_15596__$1);

(statearr_15630[(10)] = inst_15606);

return statearr_15630;
})();
var statearr_15631_15650 = state_15619__$1;
(statearr_15631_15650[(2)] = null);

(statearr_15631_15650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (9))){
var state_15619__$1 = state_15619;
var statearr_15632_15651 = state_15619__$1;
(statearr_15632_15651[(2)] = null);

(statearr_15632_15651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (5))){
var state_15619__$1 = state_15619;
var statearr_15633_15652 = state_15619__$1;
(statearr_15633_15652[(2)] = null);

(statearr_15633_15652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (10))){
var inst_15611 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15634_15653 = state_15619__$1;
(statearr_15634_15653[(2)] = inst_15611);

(statearr_15634_15653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15620 === (8))){
var inst_15601 = (state_15619[(7)]);
var state_15619__$1 = state_15619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15619__$1,(11),out,inst_15601);
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
});})(c__6540__auto___15643,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15643,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15638[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15638[(1)] = (1));

return statearr_15638;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15619){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15639){if((e15639 instanceof Object)){
var ex__6482__auto__ = e15639;
var statearr_15640_15654 = state_15619;
(statearr_15640_15654[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15655 = state_15619;
state_15619 = G__15655;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15643,out))
})();
var state__6542__auto__ = (function (){var statearr_15641 = f__6541__auto__.call(null);
(statearr_15641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15643);

return statearr_15641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15643,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15663 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15663 = (function (ch,f,map_LT_,meta15664){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15664 = meta15664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15666 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15666 = (function (fn1,_,meta15664,map_LT_,f,ch,meta15667){
this.fn1 = fn1;
this._ = _;
this.meta15664 = meta15664;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15667 = meta15667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15666.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15656_SHARP_){
return f1.call(null,(((p1__15656_SHARP_ == null))?null:self__.f.call(null,p1__15656_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15668){
var self__ = this;
var _15668__$1 = this;
return self__.meta15667;
});})(___$1))
;

cljs.core.async.t15666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15668,meta15667__$1){
var self__ = this;
var _15668__$1 = this;
return (new cljs.core.async.t15666(self__.fn1,self__._,self__.meta15664,self__.map_LT_,self__.f,self__.ch,meta15667__$1));
});})(___$1))
;

cljs.core.async.t15666.cljs$lang$type = true;

cljs.core.async.t15666.cljs$lang$ctorStr = "cljs.core.async/t15666";

cljs.core.async.t15666.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15666");
});})(___$1))
;

cljs.core.async.__GT_t15666 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15666(fn1__$1,___$2,meta15664__$1,map_LT___$1,f__$1,ch__$1,meta15667){
return (new cljs.core.async.t15666(fn1__$1,___$2,meta15664__$1,map_LT___$1,f__$1,ch__$1,meta15667));
});})(___$1))
;

}

return (new cljs.core.async.t15666(fn1,___$1,self__.meta15664,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t15663.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15665){
var self__ = this;
var _15665__$1 = this;
return self__.meta15664;
});

cljs.core.async.t15663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15665,meta15664__$1){
var self__ = this;
var _15665__$1 = this;
return (new cljs.core.async.t15663(self__.ch,self__.f,self__.map_LT_,meta15664__$1));
});

cljs.core.async.t15663.cljs$lang$type = true;

cljs.core.async.t15663.cljs$lang$ctorStr = "cljs.core.async/t15663";

cljs.core.async.t15663.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15663");
});

cljs.core.async.__GT_t15663 = (function cljs$core$async$map_LT__$___GT_t15663(ch__$1,f__$1,map_LT___$1,meta15664){
return (new cljs.core.async.t15663(ch__$1,f__$1,map_LT___$1,meta15664));
});

}

return (new cljs.core.async.t15663(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15672 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15672 = (function (ch,f,map_GT_,meta15673){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15673 = meta15673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15672.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15674){
var self__ = this;
var _15674__$1 = this;
return self__.meta15673;
});

cljs.core.async.t15672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15674,meta15673__$1){
var self__ = this;
var _15674__$1 = this;
return (new cljs.core.async.t15672(self__.ch,self__.f,self__.map_GT_,meta15673__$1));
});

cljs.core.async.t15672.cljs$lang$type = true;

cljs.core.async.t15672.cljs$lang$ctorStr = "cljs.core.async/t15672";

cljs.core.async.t15672.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15672");
});

cljs.core.async.__GT_t15672 = (function cljs$core$async$map_GT__$___GT_t15672(ch__$1,f__$1,map_GT___$1,meta15673){
return (new cljs.core.async.t15672(ch__$1,f__$1,map_GT___$1,meta15673));
});

}

return (new cljs.core.async.t15672(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15678 = (function (ch,p,filter_GT_,meta15679){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15679 = meta15679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15678.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15678.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15678.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15680){
var self__ = this;
var _15680__$1 = this;
return self__.meta15679;
});

cljs.core.async.t15678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15680,meta15679__$1){
var self__ = this;
var _15680__$1 = this;
return (new cljs.core.async.t15678(self__.ch,self__.p,self__.filter_GT_,meta15679__$1));
});

cljs.core.async.t15678.cljs$lang$type = true;

cljs.core.async.t15678.cljs$lang$ctorStr = "cljs.core.async/t15678";

cljs.core.async.t15678.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15678");
});

cljs.core.async.__GT_t15678 = (function cljs$core$async$filter_GT__$___GT_t15678(ch__$1,p__$1,filter_GT___$1,meta15679){
return (new cljs.core.async.t15678(ch__$1,p__$1,filter_GT___$1,meta15679));
});

}

return (new cljs.core.async.t15678(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15682 = arguments.length;
switch (G__15682) {
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
var c__6540__auto___15725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15725,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15725,out){
return (function (state_15703){
var state_val_15704 = (state_15703[(1)]);
if((state_val_15704 === (7))){
var inst_15699 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
var statearr_15705_15726 = state_15703__$1;
(statearr_15705_15726[(2)] = inst_15699);

(statearr_15705_15726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (1))){
var state_15703__$1 = state_15703;
var statearr_15706_15727 = state_15703__$1;
(statearr_15706_15727[(2)] = null);

(statearr_15706_15727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (4))){
var inst_15685 = (state_15703[(7)]);
var inst_15685__$1 = (state_15703[(2)]);
var inst_15686 = (inst_15685__$1 == null);
var state_15703__$1 = (function (){var statearr_15707 = state_15703;
(statearr_15707[(7)] = inst_15685__$1);

return statearr_15707;
})();
if(cljs.core.truth_(inst_15686)){
var statearr_15708_15728 = state_15703__$1;
(statearr_15708_15728[(1)] = (5));

} else {
var statearr_15709_15729 = state_15703__$1;
(statearr_15709_15729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (6))){
var inst_15685 = (state_15703[(7)]);
var inst_15690 = p.call(null,inst_15685);
var state_15703__$1 = state_15703;
if(cljs.core.truth_(inst_15690)){
var statearr_15710_15730 = state_15703__$1;
(statearr_15710_15730[(1)] = (8));

} else {
var statearr_15711_15731 = state_15703__$1;
(statearr_15711_15731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (3))){
var inst_15701 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15703__$1,inst_15701);
} else {
if((state_val_15704 === (2))){
var state_15703__$1 = state_15703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15703__$1,(4),ch);
} else {
if((state_val_15704 === (11))){
var inst_15693 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
var statearr_15712_15732 = state_15703__$1;
(statearr_15712_15732[(2)] = inst_15693);

(statearr_15712_15732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (9))){
var state_15703__$1 = state_15703;
var statearr_15713_15733 = state_15703__$1;
(statearr_15713_15733[(2)] = null);

(statearr_15713_15733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (5))){
var inst_15688 = cljs.core.async.close_BANG_.call(null,out);
var state_15703__$1 = state_15703;
var statearr_15714_15734 = state_15703__$1;
(statearr_15714_15734[(2)] = inst_15688);

(statearr_15714_15734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (10))){
var inst_15696 = (state_15703[(2)]);
var state_15703__$1 = (function (){var statearr_15715 = state_15703;
(statearr_15715[(8)] = inst_15696);

return statearr_15715;
})();
var statearr_15716_15735 = state_15703__$1;
(statearr_15716_15735[(2)] = null);

(statearr_15716_15735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (8))){
var inst_15685 = (state_15703[(7)]);
var state_15703__$1 = state_15703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15703__$1,(11),out,inst_15685);
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
});})(c__6540__auto___15725,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15725,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15720 = [null,null,null,null,null,null,null,null,null];
(statearr_15720[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15720[(1)] = (1));

return statearr_15720;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15703){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15721){if((e15721 instanceof Object)){
var ex__6482__auto__ = e15721;
var statearr_15722_15736 = state_15703;
(statearr_15722_15736[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15737 = state_15703;
state_15703 = G__15737;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15725,out))
})();
var state__6542__auto__ = (function (){var statearr_15723 = f__6541__auto__.call(null);
(statearr_15723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15725);

return statearr_15723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15725,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15739 = arguments.length;
switch (G__15739) {
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
return (function (state_15906){
var state_val_15907 = (state_15906[(1)]);
if((state_val_15907 === (7))){
var inst_15902 = (state_15906[(2)]);
var state_15906__$1 = state_15906;
var statearr_15908_15949 = state_15906__$1;
(statearr_15908_15949[(2)] = inst_15902);

(statearr_15908_15949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (20))){
var inst_15872 = (state_15906[(7)]);
var inst_15883 = (state_15906[(2)]);
var inst_15884 = cljs.core.next.call(null,inst_15872);
var inst_15858 = inst_15884;
var inst_15859 = null;
var inst_15860 = (0);
var inst_15861 = (0);
var state_15906__$1 = (function (){var statearr_15909 = state_15906;
(statearr_15909[(8)] = inst_15858);

(statearr_15909[(9)] = inst_15883);

(statearr_15909[(10)] = inst_15861);

(statearr_15909[(11)] = inst_15859);

(statearr_15909[(12)] = inst_15860);

return statearr_15909;
})();
var statearr_15910_15950 = state_15906__$1;
(statearr_15910_15950[(2)] = null);

(statearr_15910_15950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (1))){
var state_15906__$1 = state_15906;
var statearr_15911_15951 = state_15906__$1;
(statearr_15911_15951[(2)] = null);

(statearr_15911_15951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (4))){
var inst_15847 = (state_15906[(13)]);
var inst_15847__$1 = (state_15906[(2)]);
var inst_15848 = (inst_15847__$1 == null);
var state_15906__$1 = (function (){var statearr_15912 = state_15906;
(statearr_15912[(13)] = inst_15847__$1);

return statearr_15912;
})();
if(cljs.core.truth_(inst_15848)){
var statearr_15913_15952 = state_15906__$1;
(statearr_15913_15952[(1)] = (5));

} else {
var statearr_15914_15953 = state_15906__$1;
(statearr_15914_15953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (15))){
var state_15906__$1 = state_15906;
var statearr_15918_15954 = state_15906__$1;
(statearr_15918_15954[(2)] = null);

(statearr_15918_15954[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (21))){
var state_15906__$1 = state_15906;
var statearr_15919_15955 = state_15906__$1;
(statearr_15919_15955[(2)] = null);

(statearr_15919_15955[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (13))){
var inst_15858 = (state_15906[(8)]);
var inst_15861 = (state_15906[(10)]);
var inst_15859 = (state_15906[(11)]);
var inst_15860 = (state_15906[(12)]);
var inst_15868 = (state_15906[(2)]);
var inst_15869 = (inst_15861 + (1));
var tmp15915 = inst_15858;
var tmp15916 = inst_15859;
var tmp15917 = inst_15860;
var inst_15858__$1 = tmp15915;
var inst_15859__$1 = tmp15916;
var inst_15860__$1 = tmp15917;
var inst_15861__$1 = inst_15869;
var state_15906__$1 = (function (){var statearr_15920 = state_15906;
(statearr_15920[(8)] = inst_15858__$1);

(statearr_15920[(10)] = inst_15861__$1);

(statearr_15920[(11)] = inst_15859__$1);

(statearr_15920[(12)] = inst_15860__$1);

(statearr_15920[(14)] = inst_15868);

return statearr_15920;
})();
var statearr_15921_15956 = state_15906__$1;
(statearr_15921_15956[(2)] = null);

(statearr_15921_15956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (22))){
var state_15906__$1 = state_15906;
var statearr_15922_15957 = state_15906__$1;
(statearr_15922_15957[(2)] = null);

(statearr_15922_15957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (6))){
var inst_15847 = (state_15906[(13)]);
var inst_15856 = f.call(null,inst_15847);
var inst_15857 = cljs.core.seq.call(null,inst_15856);
var inst_15858 = inst_15857;
var inst_15859 = null;
var inst_15860 = (0);
var inst_15861 = (0);
var state_15906__$1 = (function (){var statearr_15923 = state_15906;
(statearr_15923[(8)] = inst_15858);

(statearr_15923[(10)] = inst_15861);

(statearr_15923[(11)] = inst_15859);

(statearr_15923[(12)] = inst_15860);

return statearr_15923;
})();
var statearr_15924_15958 = state_15906__$1;
(statearr_15924_15958[(2)] = null);

(statearr_15924_15958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (17))){
var inst_15872 = (state_15906[(7)]);
var inst_15876 = cljs.core.chunk_first.call(null,inst_15872);
var inst_15877 = cljs.core.chunk_rest.call(null,inst_15872);
var inst_15878 = cljs.core.count.call(null,inst_15876);
var inst_15858 = inst_15877;
var inst_15859 = inst_15876;
var inst_15860 = inst_15878;
var inst_15861 = (0);
var state_15906__$1 = (function (){var statearr_15925 = state_15906;
(statearr_15925[(8)] = inst_15858);

(statearr_15925[(10)] = inst_15861);

(statearr_15925[(11)] = inst_15859);

(statearr_15925[(12)] = inst_15860);

return statearr_15925;
})();
var statearr_15926_15959 = state_15906__$1;
(statearr_15926_15959[(2)] = null);

(statearr_15926_15959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (3))){
var inst_15904 = (state_15906[(2)]);
var state_15906__$1 = state_15906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15906__$1,inst_15904);
} else {
if((state_val_15907 === (12))){
var inst_15892 = (state_15906[(2)]);
var state_15906__$1 = state_15906;
var statearr_15927_15960 = state_15906__$1;
(statearr_15927_15960[(2)] = inst_15892);

(statearr_15927_15960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (2))){
var state_15906__$1 = state_15906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15906__$1,(4),in$);
} else {
if((state_val_15907 === (23))){
var inst_15900 = (state_15906[(2)]);
var state_15906__$1 = state_15906;
var statearr_15928_15961 = state_15906__$1;
(statearr_15928_15961[(2)] = inst_15900);

(statearr_15928_15961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (19))){
var inst_15887 = (state_15906[(2)]);
var state_15906__$1 = state_15906;
var statearr_15929_15962 = state_15906__$1;
(statearr_15929_15962[(2)] = inst_15887);

(statearr_15929_15962[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (11))){
var inst_15858 = (state_15906[(8)]);
var inst_15872 = (state_15906[(7)]);
var inst_15872__$1 = cljs.core.seq.call(null,inst_15858);
var state_15906__$1 = (function (){var statearr_15930 = state_15906;
(statearr_15930[(7)] = inst_15872__$1);

return statearr_15930;
})();
if(inst_15872__$1){
var statearr_15931_15963 = state_15906__$1;
(statearr_15931_15963[(1)] = (14));

} else {
var statearr_15932_15964 = state_15906__$1;
(statearr_15932_15964[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (9))){
var inst_15894 = (state_15906[(2)]);
var inst_15895 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15906__$1 = (function (){var statearr_15933 = state_15906;
(statearr_15933[(15)] = inst_15894);

return statearr_15933;
})();
if(cljs.core.truth_(inst_15895)){
var statearr_15934_15965 = state_15906__$1;
(statearr_15934_15965[(1)] = (21));

} else {
var statearr_15935_15966 = state_15906__$1;
(statearr_15935_15966[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (5))){
var inst_15850 = cljs.core.async.close_BANG_.call(null,out);
var state_15906__$1 = state_15906;
var statearr_15936_15967 = state_15906__$1;
(statearr_15936_15967[(2)] = inst_15850);

(statearr_15936_15967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (14))){
var inst_15872 = (state_15906[(7)]);
var inst_15874 = cljs.core.chunked_seq_QMARK_.call(null,inst_15872);
var state_15906__$1 = state_15906;
if(inst_15874){
var statearr_15937_15968 = state_15906__$1;
(statearr_15937_15968[(1)] = (17));

} else {
var statearr_15938_15969 = state_15906__$1;
(statearr_15938_15969[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (16))){
var inst_15890 = (state_15906[(2)]);
var state_15906__$1 = state_15906;
var statearr_15939_15970 = state_15906__$1;
(statearr_15939_15970[(2)] = inst_15890);

(statearr_15939_15970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15907 === (10))){
var inst_15861 = (state_15906[(10)]);
var inst_15859 = (state_15906[(11)]);
var inst_15866 = cljs.core._nth.call(null,inst_15859,inst_15861);
var state_15906__$1 = state_15906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15906__$1,(13),out,inst_15866);
} else {
if((state_val_15907 === (18))){
var inst_15872 = (state_15906[(7)]);
var inst_15881 = cljs.core.first.call(null,inst_15872);
var state_15906__$1 = state_15906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15906__$1,(20),out,inst_15881);
} else {
if((state_val_15907 === (8))){
var inst_15861 = (state_15906[(10)]);
var inst_15860 = (state_15906[(12)]);
var inst_15863 = (inst_15861 < inst_15860);
var inst_15864 = inst_15863;
var state_15906__$1 = state_15906;
if(cljs.core.truth_(inst_15864)){
var statearr_15940_15971 = state_15906__$1;
(statearr_15940_15971[(1)] = (10));

} else {
var statearr_15941_15972 = state_15906__$1;
(statearr_15941_15972[(1)] = (11));

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
var statearr_15945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15945[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__);

(statearr_15945[(1)] = (1));

return statearr_15945;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1 = (function (state_15906){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15946){if((e15946 instanceof Object)){
var ex__6482__auto__ = e15946;
var statearr_15947_15973 = state_15906;
(statearr_15947_15973[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15974 = state_15906;
state_15906 = G__15974;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = function(state_15906){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1.call(this,state_15906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_15948 = f__6541__auto__.call(null);
(statearr_15948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_15948;
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
var G__15976 = arguments.length;
switch (G__15976) {
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
var G__15979 = arguments.length;
switch (G__15979) {
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
var G__15982 = arguments.length;
switch (G__15982) {
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
var c__6540__auto___16032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___16032,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___16032,out){
return (function (state_16006){
var state_val_16007 = (state_16006[(1)]);
if((state_val_16007 === (7))){
var inst_16001 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
var statearr_16008_16033 = state_16006__$1;
(statearr_16008_16033[(2)] = inst_16001);

(statearr_16008_16033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16007 === (1))){
var inst_15983 = null;
var state_16006__$1 = (function (){var statearr_16009 = state_16006;
(statearr_16009[(7)] = inst_15983);

return statearr_16009;
})();
var statearr_16010_16034 = state_16006__$1;
(statearr_16010_16034[(2)] = null);

(statearr_16010_16034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16007 === (4))){
var inst_15986 = (state_16006[(8)]);
var inst_15986__$1 = (state_16006[(2)]);
var inst_15987 = (inst_15986__$1 == null);
var inst_15988 = cljs.core.not.call(null,inst_15987);
var state_16006__$1 = (function (){var statearr_16011 = state_16006;
(statearr_16011[(8)] = inst_15986__$1);

return statearr_16011;
})();
if(inst_15988){
var statearr_16012_16035 = state_16006__$1;
(statearr_16012_16035[(1)] = (5));

} else {
var statearr_16013_16036 = state_16006__$1;
(statearr_16013_16036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16007 === (6))){
var state_16006__$1 = state_16006;
var statearr_16014_16037 = state_16006__$1;
(statearr_16014_16037[(2)] = null);

(statearr_16014_16037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16007 === (3))){
var inst_16003 = (state_16006[(2)]);
var inst_16004 = cljs.core.async.close_BANG_.call(null,out);
var state_16006__$1 = (function (){var statearr_16015 = state_16006;
(statearr_16015[(9)] = inst_16003);

return statearr_16015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16006__$1,inst_16004);
} else {
if((state_val_16007 === (2))){
var state_16006__$1 = state_16006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16006__$1,(4),ch);
} else {
if((state_val_16007 === (11))){
var inst_15986 = (state_16006[(8)]);
var inst_15995 = (state_16006[(2)]);
var inst_15983 = inst_15986;
var state_16006__$1 = (function (){var statearr_16016 = state_16006;
(statearr_16016[(7)] = inst_15983);

(statearr_16016[(10)] = inst_15995);

return statearr_16016;
})();
var statearr_16017_16038 = state_16006__$1;
(statearr_16017_16038[(2)] = null);

(statearr_16017_16038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16007 === (9))){
var inst_15986 = (state_16006[(8)]);
var state_16006__$1 = state_16006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16006__$1,(11),out,inst_15986);
} else {
if((state_val_16007 === (5))){
var inst_15983 = (state_16006[(7)]);
var inst_15986 = (state_16006[(8)]);
var inst_15990 = cljs.core._EQ_.call(null,inst_15986,inst_15983);
var state_16006__$1 = state_16006;
if(inst_15990){
var statearr_16019_16039 = state_16006__$1;
(statearr_16019_16039[(1)] = (8));

} else {
var statearr_16020_16040 = state_16006__$1;
(statearr_16020_16040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16007 === (10))){
var inst_15998 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
var statearr_16021_16041 = state_16006__$1;
(statearr_16021_16041[(2)] = inst_15998);

(statearr_16021_16041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16007 === (8))){
var inst_15983 = (state_16006[(7)]);
var tmp16018 = inst_15983;
var inst_15983__$1 = tmp16018;
var state_16006__$1 = (function (){var statearr_16022 = state_16006;
(statearr_16022[(7)] = inst_15983__$1);

return statearr_16022;
})();
var statearr_16023_16042 = state_16006__$1;
(statearr_16023_16042[(2)] = null);

(statearr_16023_16042[(1)] = (2));


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
});})(c__6540__auto___16032,out))
;
return ((function (switch__6478__auto__,c__6540__auto___16032,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_16027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16027[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_16027[(1)] = (1));

return statearr_16027;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_16006){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_16006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e16028){if((e16028 instanceof Object)){
var ex__6482__auto__ = e16028;
var statearr_16029_16043 = state_16006;
(statearr_16029_16043[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16044 = state_16006;
state_16006 = G__16044;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_16006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_16006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___16032,out))
})();
var state__6542__auto__ = (function (){var statearr_16030 = f__6541__auto__.call(null);
(statearr_16030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___16032);

return statearr_16030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___16032,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__16046 = arguments.length;
switch (G__16046) {
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
var c__6540__auto___16115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___16115,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___16115,out){
return (function (state_16084){
var state_val_16085 = (state_16084[(1)]);
if((state_val_16085 === (7))){
var inst_16080 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16086_16116 = state_16084__$1;
(statearr_16086_16116[(2)] = inst_16080);

(statearr_16086_16116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (1))){
var inst_16047 = (new Array(n));
var inst_16048 = inst_16047;
var inst_16049 = (0);
var state_16084__$1 = (function (){var statearr_16087 = state_16084;
(statearr_16087[(7)] = inst_16048);

(statearr_16087[(8)] = inst_16049);

return statearr_16087;
})();
var statearr_16088_16117 = state_16084__$1;
(statearr_16088_16117[(2)] = null);

(statearr_16088_16117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (4))){
var inst_16052 = (state_16084[(9)]);
var inst_16052__$1 = (state_16084[(2)]);
var inst_16053 = (inst_16052__$1 == null);
var inst_16054 = cljs.core.not.call(null,inst_16053);
var state_16084__$1 = (function (){var statearr_16089 = state_16084;
(statearr_16089[(9)] = inst_16052__$1);

return statearr_16089;
})();
if(inst_16054){
var statearr_16090_16118 = state_16084__$1;
(statearr_16090_16118[(1)] = (5));

} else {
var statearr_16091_16119 = state_16084__$1;
(statearr_16091_16119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (15))){
var inst_16074 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16092_16120 = state_16084__$1;
(statearr_16092_16120[(2)] = inst_16074);

(statearr_16092_16120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (13))){
var state_16084__$1 = state_16084;
var statearr_16093_16121 = state_16084__$1;
(statearr_16093_16121[(2)] = null);

(statearr_16093_16121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (6))){
var inst_16049 = (state_16084[(8)]);
var inst_16070 = (inst_16049 > (0));
var state_16084__$1 = state_16084;
if(cljs.core.truth_(inst_16070)){
var statearr_16094_16122 = state_16084__$1;
(statearr_16094_16122[(1)] = (12));

} else {
var statearr_16095_16123 = state_16084__$1;
(statearr_16095_16123[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (3))){
var inst_16082 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16084__$1,inst_16082);
} else {
if((state_val_16085 === (12))){
var inst_16048 = (state_16084[(7)]);
var inst_16072 = cljs.core.vec.call(null,inst_16048);
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16084__$1,(15),out,inst_16072);
} else {
if((state_val_16085 === (2))){
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16084__$1,(4),ch);
} else {
if((state_val_16085 === (11))){
var inst_16064 = (state_16084[(2)]);
var inst_16065 = (new Array(n));
var inst_16048 = inst_16065;
var inst_16049 = (0);
var state_16084__$1 = (function (){var statearr_16096 = state_16084;
(statearr_16096[(7)] = inst_16048);

(statearr_16096[(8)] = inst_16049);

(statearr_16096[(10)] = inst_16064);

return statearr_16096;
})();
var statearr_16097_16124 = state_16084__$1;
(statearr_16097_16124[(2)] = null);

(statearr_16097_16124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (9))){
var inst_16048 = (state_16084[(7)]);
var inst_16062 = cljs.core.vec.call(null,inst_16048);
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16084__$1,(11),out,inst_16062);
} else {
if((state_val_16085 === (5))){
var inst_16057 = (state_16084[(11)]);
var inst_16048 = (state_16084[(7)]);
var inst_16052 = (state_16084[(9)]);
var inst_16049 = (state_16084[(8)]);
var inst_16056 = (inst_16048[inst_16049] = inst_16052);
var inst_16057__$1 = (inst_16049 + (1));
var inst_16058 = (inst_16057__$1 < n);
var state_16084__$1 = (function (){var statearr_16098 = state_16084;
(statearr_16098[(11)] = inst_16057__$1);

(statearr_16098[(12)] = inst_16056);

return statearr_16098;
})();
if(cljs.core.truth_(inst_16058)){
var statearr_16099_16125 = state_16084__$1;
(statearr_16099_16125[(1)] = (8));

} else {
var statearr_16100_16126 = state_16084__$1;
(statearr_16100_16126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (14))){
var inst_16077 = (state_16084[(2)]);
var inst_16078 = cljs.core.async.close_BANG_.call(null,out);
var state_16084__$1 = (function (){var statearr_16102 = state_16084;
(statearr_16102[(13)] = inst_16077);

return statearr_16102;
})();
var statearr_16103_16127 = state_16084__$1;
(statearr_16103_16127[(2)] = inst_16078);

(statearr_16103_16127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (10))){
var inst_16068 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16104_16128 = state_16084__$1;
(statearr_16104_16128[(2)] = inst_16068);

(statearr_16104_16128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (8))){
var inst_16057 = (state_16084[(11)]);
var inst_16048 = (state_16084[(7)]);
var tmp16101 = inst_16048;
var inst_16048__$1 = tmp16101;
var inst_16049 = inst_16057;
var state_16084__$1 = (function (){var statearr_16105 = state_16084;
(statearr_16105[(7)] = inst_16048__$1);

(statearr_16105[(8)] = inst_16049);

return statearr_16105;
})();
var statearr_16106_16129 = state_16084__$1;
(statearr_16106_16129[(2)] = null);

(statearr_16106_16129[(1)] = (2));


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
});})(c__6540__auto___16115,out))
;
return ((function (switch__6478__auto__,c__6540__auto___16115,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_16110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16110[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_16110[(1)] = (1));

return statearr_16110;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_16084){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_16084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e16111){if((e16111 instanceof Object)){
var ex__6482__auto__ = e16111;
var statearr_16112_16130 = state_16084;
(statearr_16112_16130[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16131 = state_16084;
state_16084 = G__16131;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_16084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_16084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___16115,out))
})();
var state__6542__auto__ = (function (){var statearr_16113 = f__6541__auto__.call(null);
(statearr_16113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___16115);

return statearr_16113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___16115,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__16133 = arguments.length;
switch (G__16133) {
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
var c__6540__auto___16206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___16206,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___16206,out){
return (function (state_16175){
var state_val_16176 = (state_16175[(1)]);
if((state_val_16176 === (7))){
var inst_16171 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16177_16207 = state_16175__$1;
(statearr_16177_16207[(2)] = inst_16171);

(statearr_16177_16207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (1))){
var inst_16134 = [];
var inst_16135 = inst_16134;
var inst_16136 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16175__$1 = (function (){var statearr_16178 = state_16175;
(statearr_16178[(7)] = inst_16136);

(statearr_16178[(8)] = inst_16135);

return statearr_16178;
})();
var statearr_16179_16208 = state_16175__$1;
(statearr_16179_16208[(2)] = null);

(statearr_16179_16208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (4))){
var inst_16139 = (state_16175[(9)]);
var inst_16139__$1 = (state_16175[(2)]);
var inst_16140 = (inst_16139__$1 == null);
var inst_16141 = cljs.core.not.call(null,inst_16140);
var state_16175__$1 = (function (){var statearr_16180 = state_16175;
(statearr_16180[(9)] = inst_16139__$1);

return statearr_16180;
})();
if(inst_16141){
var statearr_16181_16209 = state_16175__$1;
(statearr_16181_16209[(1)] = (5));

} else {
var statearr_16182_16210 = state_16175__$1;
(statearr_16182_16210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (15))){
var inst_16165 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16183_16211 = state_16175__$1;
(statearr_16183_16211[(2)] = inst_16165);

(statearr_16183_16211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (13))){
var state_16175__$1 = state_16175;
var statearr_16184_16212 = state_16175__$1;
(statearr_16184_16212[(2)] = null);

(statearr_16184_16212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (6))){
var inst_16135 = (state_16175[(8)]);
var inst_16160 = inst_16135.length;
var inst_16161 = (inst_16160 > (0));
var state_16175__$1 = state_16175;
if(cljs.core.truth_(inst_16161)){
var statearr_16185_16213 = state_16175__$1;
(statearr_16185_16213[(1)] = (12));

} else {
var statearr_16186_16214 = state_16175__$1;
(statearr_16186_16214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (3))){
var inst_16173 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16175__$1,inst_16173);
} else {
if((state_val_16176 === (12))){
var inst_16135 = (state_16175[(8)]);
var inst_16163 = cljs.core.vec.call(null,inst_16135);
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16175__$1,(15),out,inst_16163);
} else {
if((state_val_16176 === (2))){
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16175__$1,(4),ch);
} else {
if((state_val_16176 === (11))){
var inst_16139 = (state_16175[(9)]);
var inst_16143 = (state_16175[(10)]);
var inst_16153 = (state_16175[(2)]);
var inst_16154 = [];
var inst_16155 = inst_16154.push(inst_16139);
var inst_16135 = inst_16154;
var inst_16136 = inst_16143;
var state_16175__$1 = (function (){var statearr_16187 = state_16175;
(statearr_16187[(11)] = inst_16155);

(statearr_16187[(12)] = inst_16153);

(statearr_16187[(7)] = inst_16136);

(statearr_16187[(8)] = inst_16135);

return statearr_16187;
})();
var statearr_16188_16215 = state_16175__$1;
(statearr_16188_16215[(2)] = null);

(statearr_16188_16215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (9))){
var inst_16135 = (state_16175[(8)]);
var inst_16151 = cljs.core.vec.call(null,inst_16135);
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16175__$1,(11),out,inst_16151);
} else {
if((state_val_16176 === (5))){
var inst_16139 = (state_16175[(9)]);
var inst_16143 = (state_16175[(10)]);
var inst_16136 = (state_16175[(7)]);
var inst_16143__$1 = f.call(null,inst_16139);
var inst_16144 = cljs.core._EQ_.call(null,inst_16143__$1,inst_16136);
var inst_16145 = cljs.core.keyword_identical_QMARK_.call(null,inst_16136,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16146 = (inst_16144) || (inst_16145);
var state_16175__$1 = (function (){var statearr_16189 = state_16175;
(statearr_16189[(10)] = inst_16143__$1);

return statearr_16189;
})();
if(cljs.core.truth_(inst_16146)){
var statearr_16190_16216 = state_16175__$1;
(statearr_16190_16216[(1)] = (8));

} else {
var statearr_16191_16217 = state_16175__$1;
(statearr_16191_16217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (14))){
var inst_16168 = (state_16175[(2)]);
var inst_16169 = cljs.core.async.close_BANG_.call(null,out);
var state_16175__$1 = (function (){var statearr_16193 = state_16175;
(statearr_16193[(13)] = inst_16168);

return statearr_16193;
})();
var statearr_16194_16218 = state_16175__$1;
(statearr_16194_16218[(2)] = inst_16169);

(statearr_16194_16218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (10))){
var inst_16158 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16195_16219 = state_16175__$1;
(statearr_16195_16219[(2)] = inst_16158);

(statearr_16195_16219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (8))){
var inst_16139 = (state_16175[(9)]);
var inst_16143 = (state_16175[(10)]);
var inst_16135 = (state_16175[(8)]);
var inst_16148 = inst_16135.push(inst_16139);
var tmp16192 = inst_16135;
var inst_16135__$1 = tmp16192;
var inst_16136 = inst_16143;
var state_16175__$1 = (function (){var statearr_16196 = state_16175;
(statearr_16196[(14)] = inst_16148);

(statearr_16196[(7)] = inst_16136);

(statearr_16196[(8)] = inst_16135__$1);

return statearr_16196;
})();
var statearr_16197_16220 = state_16175__$1;
(statearr_16197_16220[(2)] = null);

(statearr_16197_16220[(1)] = (2));


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
});})(c__6540__auto___16206,out))
;
return ((function (switch__6478__auto__,c__6540__auto___16206,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_16201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16201[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_16201[(1)] = (1));

return statearr_16201;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_16175){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_16175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e16202){if((e16202 instanceof Object)){
var ex__6482__auto__ = e16202;
var statearr_16203_16221 = state_16175;
(statearr_16203_16221[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16222 = state_16175;
state_16175 = G__16222;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_16175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_16175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___16206,out))
})();
var state__6542__auto__ = (function (){var statearr_16204 = f__6541__auto__.call(null);
(statearr_16204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___16206);

return statearr_16204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___16206,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map