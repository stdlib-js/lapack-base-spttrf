"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var p=s(function(J,d){
var m=require('@stdlib/number-float64-base-to-float32/dist');function h(e,r,t,v,a,o,f){var i,n,q,u;if(e===0)return 0;for(n=f,i=v,u=0;u<e-1;u++){if(r[i]<=0)return u+1;q=a[n],a[n]=m(q/r[i]),i+=t,r[i]=m(r[i]-m(a[n]*q)),n+=o}return r[i]<=0?e:0}d.exports=h
});var l=s(function(K,c){
var F=require('@stdlib/error-tools-fmtprodmsg/dist'),V=p();function _(e,r,t){if(e<0)throw new RangeError(F('1yxG7',e));return V(e,r,1,0,t,1,0)}c.exports=_
});var b=s(function(L,x){
var E=require('@stdlib/error-tools-fmtprodmsg/dist'),O=p();function k(e,r,t,v,a,o,f){if(e<0)throw new RangeError(E('1yxG7',e));return O(e,r,t,v,a,o,f)}x.exports=k
});var R=s(function(M,y){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=l(),A=b();z(w,"ndarray",A);y.exports=w
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=R(),g,j=C(B(__dirname,"./native.js"));G(j)?g=H:g=j;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
