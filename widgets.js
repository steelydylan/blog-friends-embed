(()=>{var P=Object.create;var m=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var _=e=>m(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ee=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of X(r))!z.call(e,n)&&n!=="default"&&m(e,n,{get:()=>r[n],enumerable:!(t=Q(r,n))||t.enumerable});return e},re=e=>ee(_(m(e!=null?P(Z(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var M=a((Se,E)=>{"use strict";var d=1;function te(){return d=(d*9301+49297)%233280,d/233280}function ne(e){d=e}E.exports={nextValue:te,seed:ne}});var f=a((Ie,k)=>{"use strict";var g=M(),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",u,S,l;function x(){l=!1}function I(e){if(!e){u!==i&&(u=i,x());return}if(e!==u){if(e.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+e.length+" characters: "+e);var r=e.split("").filter(function(t,n,c){return n!==c.lastIndexOf(t)});if(r.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+r.join(", "));u=e,x()}}function ae(e){return I(e),u}function oe(e){g.seed(e),S!==e&&(x(),S=e)}function se(){u||I(i);for(var e=u.split(""),r=[],t=g.nextValue(),n;e.length>0;)t=g.nextValue(),n=Math.floor(t*e.length),r.push(e.splice(n,1)[0]);return r.join("")}function V(){return l||(l=se(),l)}function ue(e){var r=V();return r[e]}function ie(){return u||i}k.exports={get:ie,characters:ae,seed:oe,lookup:ue,shuffled:V}});var C=a((Ve,A)=>{"use strict";var w=typeof window=="object"&&(window.crypto||window.msCrypto),b;!w||!w.getRandomValues?b=function(e){for(var r=[],t=0;t<e;t++)r.push(Math.floor(Math.random()*256));return r}:b=function(e){return w.getRandomValues(new Uint8Array(e))};A.exports=b});var R=a((ke,L)=>{L.exports=function(e,r,t){for(var n=(2<<Math.log(r.length-1)/Math.LN2)-1,c=-~(1.6*n*t/r.length),o="";;)for(var v=e(c),y=c;y--;)if(o+=r[v[y]&n]||"",o.length===+t)return o}});var $=a((Ae,T)=>{"use strict";var ce=f(),le=C(),fe=R();function de(e){for(var r=0,t,n="";!t;)n=n+fe(le,ce.get(),1),t=e<Math.pow(16,r+1),r++;return n}T.exports=de});var H=a((Le,N)=>{"use strict";var h=$(),Ce=f(),he=1567752802062,pe=7,p,j;function ve(e){var r="",t=Math.floor((Date.now()-he)*.001);return t===j?p++:(p=0,j=t),r=r+h(pe),r=r+h(e),p>0&&(r=r+h(p)),r=r+h(t),r}N.exports=ve});var U=a((Re,O)=>{"use strict";var me=f();function ge(e){if(!e||typeof e!="string"||e.length<6)return!1;var r=new RegExp("[^"+me.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!r.test(e)}O.exports=ge});var F=a((Te,D)=>{"use strict";D.exports=0});var J=a(($e,s)=>{"use strict";var q=f(),xe=H(),we=U(),B=F()||0;function be(e){return q.seed(e),s.exports}function qe(e){return B=e,s.exports}function ye(e){return e!==void 0&&q.characters(e),q.shuffled()}function G(){return xe(B)}s.exports=G;s.exports.generate=G;s.exports.seed=be;s.exports.worker=qe;s.exports.characters=ye;s.exports.isValid=we});var Y=a((je,W)=>{"use strict";W.exports=J()});var K=re(Y()),Ee=()=>{let e=document.querySelectorAll(".js-blog-friends");for(let r of e){let t=r.dataset.user,n=r.dataset.test,c=r.parentElement,o=document.createElement("iframe"),v=n?"http://localhost:3000":"https://blog-friends.com";o.src=`${v}/users/${t}/embed`,o.style.border="none",o.style.width="100%",o.name=`blog-friends-${(0,K.default)()}`,r.after(o),c.removeChild(r)}window.addEventListener("message",function(r){try{let t=JSON.parse(r.data);if(!t.isEmbed)return;let n=document.querySelector(`[name="${t.name}"]`);if(!n)return;n.height=t.height}catch{}},!1)};Ee();})();
