// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&(t=n.length,e(t)===t)&&n.length>=0&&n.length<=4294967295;var t}function t(e,r){var o=r[0];return n(o)&&(e.push(o.length),t(e,o)),e}function r(e,t,o,f,u){var i,l,h;for(i=t[o],h=0;h<f.length;h++){if(!n(l=f[h])||l.length!==i)return o;if(u&&(l=r(e,t,o+1,l,o+1<e-1))<e)return l}return e}return function(e){var o,f;if(!n(e))throw new TypeError(function(){var e,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(e=1;e<n.length;e++)t+="&arg[]="+encodeURIComponent(n[e]);return t}("00i36",e));return t(o=[e.length],e),(f=o.length)>1&&(o.length=r(f,o,1,e,f>2)),o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).arrayShape=n();
//# sourceMappingURL=browser.js.map
