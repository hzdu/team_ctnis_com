(()=>{function e(){const e=document.querySelectorAll(".header--row.hide-on-mobile.is_sticky"),o=document.querySelectorAll(".header--row.hide-on-desktop.is_sticky");(e.length>0||o.length>0)&&(!function(e=!1,t=!1){let o=document.querySelector(".sticky-header-placeholder");const r=document.querySelector(".hfg_header"),s=document.querySelector(".neve-transparent-header");null===o&&null===s&&(o=document.createElement("div"),o.classList.add("sticky-header-placeholder"),r.parentNode.insertBefore(o,r.nextSibling)),!e&&o&&o.classList.add("hide-on-mobile","hide-on-tablet"),!t&&o&&o.classList.add("hide-on-desktop"),e&&r.classList.add("has-sticky-rows--mobile"),t&&r.classList.add("has-sticky-rows--desktop"),null!==o&&(o.style.height=r.offsetHeight+"px")}(o.length>0,e.length>0),t(document.querySelector(".hfg_header"),document.querySelector("header.header")))}function t(e,t){new IntersectionObserver((t=>{if(!0===t[0].isIntersecting)return e.classList.remove("is-stuck"),!1;e.classList.add("is-stuck")}),{rootMargin:"20px 0px 25px 0px"}).observe(t)}function o(){document.querySelectorAll(".footer--row.is_sticky").length>0&&(!function(){let e=document.querySelector(".sticky-footer-placeholder");const t=document.querySelector(".hfg_footer");null===e&&(e=document.createElement("div"),e.classList.add("sticky-footer-placeholder"),t.parentNode.insertBefore(e,t.nextSibling)),t.classList.add("has-sticky-rows"),e.style.height=t.offsetHeight+"px"}(),t(document.querySelector(".hfg_footer"),document.querySelector("footer")))}let r;window.addEventListener("load",(function(){e(),o()})),window.addEventListener("selective-refresh-content-rendered",(function(t){if("hfg_header_layout_partial"===t.detail){const t=document.querySelector(".sticky-header-placeholder"),o=document.querySelector(".hfg_header");t&&t.remove(),o.classList.remove("has-sticky-rows--mobile","has-sticky-rows--desktop"),e()}if("hfg_footer_layout_partial"===t.detail){const e=document.querySelector(".hfg_footer"),t=document.querySelector(".sticky-footer-placeholder");t&&t.remove(),e.classList.remove("has-sticky-rows"),o()}})),window.addEventListener("resize",(function(){clearTimeout(r),r=setTimeout((function(){e(),o()}),500)}))})();