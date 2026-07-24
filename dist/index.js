"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var l=g(function(q,c){
var u=require('@stdlib/assert-is-array-like-object/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r){var t=r[0];return u(t)&&(e.push(t.length),f(e,t)),e}function o(e,r,t,a,h){var v,n,i;for(v=r[t],i=0;i<a.length;i++){if(n=a[i],!u(n)||n.length!==v)return t;if(h&&(n=o(e,r,t+1,n,t+1<e-1),n<e))return n}return e}function p(e){var r,t;if(!u(e))throw new TypeError(s('01R2u',e));return r=[e.length],f(r,e),t=r.length,t>1&&(r.length=o(t,r,1,e,t>2)),r}c.exports=p
});var y=l();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
