!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.getBoundingClientRect();return e.top+e.height>0&&window.innerHeight-e.top>0&&e.left+e.width>0&&window.innerWidth-e.left>0}},function(t,e,n){"use strict";n.r(e),e.default={init:function(t){document.addEventListener("scroll",(function(){0===window.scrollY?t.classList.remove("active"):t.classList.add("active")}))}}},function(t,e,n){"use strict";n.r(e),e.default={init:function(t,e){t.addEventListener("mousemove",(function(t){e.style.transform="translateY(".concat(-t.y/4,"px) translateX(").concat(t.x/18,"px)")}))}}},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default={init:function(t,e){document.addEventListener("scroll",(function n(){Object(o.default)(e)&&(document.removeEventListener("scroll",n),t.forEach((function(t){var e,n=parseInt(t.textContent,10);requestAnimationFrame((function o(r){e||(e=r);var i=(r-e)/2e3;t.textContent=Math.floor(i*n),i<1&&requestAnimationFrame(o)}))})))}))}}},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default={init:function(t){t.forEach((function(t){document.addEventListener("scroll",(function e(){Object(o.default)(t)&&(document.removeEventListener("scroll",e),t.classList.add("animation"))}))}))}}},function(t,e,n){"use strict";n.r(e),e.default={init:function(t,e){e.forEach((function(n){document.addEventListener("scroll",(function(){var o=n.getBoundingClientRect();if(window.scrollY+50>o.top+window.scrollY&&window.scrollY+50<o.bottom+window.scrollY){var r=Array.prototype.indexOf.call(e,n);t.forEach((function(t){return t.classList.remove("active")})),t[r].classList.add("active")}}))}))}}},function(t,e,n){n(7),n(4),n(3),n(1),n(5),n(2),t.exports=n(0)},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(2),i=n(3),c=n(4),u=n(5),l=document.querySelector(".header"),a=document.querySelector("#js-parallax-scene"),f=document.querySelector("#js-parallax-layer"),d=document.querySelectorAll(".countup"),s=document.querySelector(".achives"),m=document.querySelectorAll(".js-animate"),v=document.querySelectorAll(".portfolio__navigation__item"),p=document.querySelectorAll(".portfolio__area .portfolio__box");o.default.init(l),r.default.init(a,f),i.default.init(d,s),c.default.init(m),u.default.init(v,p)}]);