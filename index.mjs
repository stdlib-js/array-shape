// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(t,n){var s=n[0];return r(s)&&(t.push(s.length),e(t,s)),t}function n(t,e,s,i,o){var l,h,f;for(l=e[s],f=0;f<i.length;f++){if(h=i[f],!r(h)||h.length!==l)return s;if(o&&(h=n(t,e,s+1,h,s+1<t-1))<t)return h}return t}function s(s){var i,o;if(!r(s))throw new TypeError(t("01R2u",s));return e(i=[s.length],s),(o=i.length)>1&&(i.length=n(o,i,1,s,o>2)),i}export{s as default};
//# sourceMappingURL=index.mjs.map
