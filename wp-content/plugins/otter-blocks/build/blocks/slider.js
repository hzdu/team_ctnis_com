!function(){"use strict";var e={n:function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,{a:a}),a},d:function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.lodash,a=window.wp.domReady;e.n(a)()((()=>{document.querySelectorAll(".wp-block-themeisle-blocks-slider").forEach((e=>{const a=e.querySelector(".glide__slides"),r=(0,t.omit)({...e.dataset},["autoplay","height","hideArrows"]),o="false"!==e.dataset.autoplay&&("true"===e.dataset.autoplay?2e3:e.dataset.autoplay);if("true"!==e.dataset.hideArrows){const t=document.createElement("div");t.innerHTML='<div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button></div>',e.appendChild(t.firstElementChild)}Object.keys(r).map((e=>r[e]=Number(r[e]))),new window.Glide(`#${e.id}`,{type:"carousel",keyboard:!0,autoplay:o,hoverpause:!0,...r,breakpoints:{800:{perView:1,peek:0,gap:0}}}).mount(),a&&(a.style.height=e.dataset.height)}))}))}();