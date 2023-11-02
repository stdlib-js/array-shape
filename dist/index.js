"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=g(function(q,c){
var u=require('@stdlib/assert-is-array-like-object/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r,e){var t=e[0];return u(t)&&(r.push(t.length),f(r,t)),r}function o(r,e,t,a,h){var v,n,i;for(v=e[t],i=0;i<a.length;i++){if(n=a[i],!u(n)||n.length!==v)return t;if(h&&(n=o(r,e,t+1,n,t+1<r-1),n<r))return n}return r}function p(r){var e,t;if(!u(r))throw new TypeError(s('01R2u',r));return e=[r.length],f(e,r),t=e.length,t>1&&(e.length=o(t,e,1,r,t>2)),e}c.exports=p
});var y=l();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
