!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=61)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.React},function(e,t,n){var r=n(35),i=n(36),s=n(23),a=n(37);e.exports=function(e,t){return r(e)||i(e,t)||s(e,t)||a()}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=window.wp.apiFetch},function(e,t,n){e.exports=n(29)()},,function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(24);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(14),i=n(13);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?i(e):t}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),s=u(i),a=u(n(7)),o=n(31),l=u(n(32)),c=u(n(33)),p=u(n(34));function u(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h="data-lazyload-listened",b=[],d=[],O=!1;try{var v=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,v)}catch(e){}var y=!!O&&{capture:!1,passive:!0},j=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,r=void 0,i=void 0,s=void 0,a=void 0;try{var o=t.getBoundingClientRect();r=o.top,i=o.left,s=o.height,a=o.width}catch(e){r=0,i=0,s=0,a=0}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,p=Math.max(r,0),u=Math.max(i,0),m=Math.min(l,r+s)-p,f=Math.min(c,i+a)-u,g=void 0,h=void 0,b=void 0,d=void 0;try{var O=n.getBoundingClientRect();g=O.top,h=O.left,b=O.height,d=O.width}catch(e){g=0,h=0,b=0,d=0}var v=g-p,y=h-u,j=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return v-j[0]<=m&&v+b+j[1]>=0&&y-j[0]<=f&&y+d+j[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var i=t.getBoundingClientRect();n=i.top,r=i.height}catch(e){n=0,r=0}var s=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=s&&n+r+a[1]>=0}(e))?e.visible||(e.props.once&&d.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},_=function(){d.forEach((function(e){var t=b.indexOf(e);-1!==t&&b.splice(t,1)})),d=[]},E=function(){for(var e=0;e<b.length;++e){var t=b[e];j(t)}_()},w=void 0,P=null,C=function(e){function t(e){m(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return g(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===w||"debounce"===w&&void 0===this.props.debounce;if(n&&((0,o.off)(e,"scroll",P,y),(0,o.off)(window,"resize",P,y),P=null),P||(void 0!==this.props.debounce?(P=(0,c.default)(E,"number"==typeof this.props.debounce?this.props.debounce:300),w="debounce"):void 0!==this.props.throttle?(P=(0,p.default)(E,"number"==typeof this.props.throttle?this.props.throttle:300),w="throttle"):P=E),this.props.overflow){var r=(0,l.default)(this.ref);if(r&&"function"==typeof r.getAttribute){var i=+r.getAttribute(h)+1;1===i&&r.addEventListener("scroll",P,y),r.setAttribute(h,i)}}else if(0===b.length||n){var s=this.props,a=s.scroll,u=s.resize;a&&(0,o.on)(e,"scroll",P,y),u&&(0,o.on)(window,"resize",P,y)}b.push(this),j(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(h)-1;0===t?(e.removeEventListener("scroll",P,y),e.removeAttribute(h)):e.setAttribute(h,t)}}var n=b.indexOf(this);-1!==n&&b.splice(n,1),0===b.length&&"undefined"!=typeof window&&((0,o.off)(window,"resize",P,y),(0,o.off)(window,"scroll",P,y))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,r=e.placeholder,i=e.classNamePrefix,a=e.style;return s.default.createElement("div",{className:i+"-wrapper",ref:this.setRef,style:a},this.visible?n:r||s.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(i.Component);C.propTypes={classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},C.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var k=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){m(this,i);var e=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+k(t),e}return g(i,n),r(i,[{key:"render",value:function(){return s.default.createElement(C,e,s.default.createElement(t,this.props))}}]),i}(i.Component)}},t.default=C,t.forceCheck=E,t.forceVisible=function(){for(var e=0;e<b.length;++e){var t=b[e];t.visible=!0,t.forceUpdate()}_()}},function(e,t){e.exports=window.wp.htmlEntities},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},,function(e,t,n){var r=n(21);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},,,,,function(e,t,n){"use strict";var r=n(30);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,s,a){if(a!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(r),s=i.position,a=i.overflow,o=i["overflow-x"],l=i["overflow-y"];if("static"===s&&t)r=r.parentNode;else{if(n.test(a)&&n.test(o)&&n.test(l))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,i=void 0,s=void 0,a=void 0,o=void 0,l=function l(){var c=+new Date-a;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(o=e.apply(s,i),r||(s=null,i=null)))};return function(){s=this,i=arguments,a=+new Date;var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(o=e.apply(s,i),s=null,i=null),o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,i;return t||(t=250),function(){var s=n||this,a=+new Date,o=arguments;r&&a<r+t?(clearTimeout(i),i=setTimeout((function(){r=a,e.apply(s,o)}),t)):(r=a,e.apply(s,o))}}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(4),i=n.n(r),s=n(9),a=n.n(s),o=n(10),l=n.n(o),c=n(13),p=n.n(c),u=n(11),m=n.n(u),f=n(12),g=n.n(f),h=n(5),b=n.n(h),d=n(0),O=(n(52),n(19)),v=n.n(O);function y(e,t,n){var r=n&&n.lexicographical,i=n&&n.zeroExtend,s=e.split("."),a=t.split(".");function o(e){return(r?/^\d+[A-Za-z]*$/:/^\d+$/).test(e)}if(!s.every(o)||!a.every(o))return NaN;if(i){for(;s.length<a.length;)s.push("0");for(;a.length<s.length;)a.push("0")}r||(s=s.map(Number),a=a.map(Number));for(var l=0;l<s.length;++l){if(a.length===l)return 1;if(s[l]!==a[l])return s[l]>a[l]?1:-1}return s.length!==a.length?-1:0}var j=n(1),_=n(2),E=n(20),w=n(6),P=n.n(w);var C=function(e){m()(s,e);var t,n,r=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=b()(t);if(n){var i=b()(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return g()(this,e)});function s(){var e;return a()(this,s),(e=r.apply(this,arguments)).state={allSites:{},isAPIWorking:!1,siteOpened:!1,siteData:{},siteSlug:"",sitePlugins:{},hasData:{},hasWidgets:!1,importOptions:!0,importContent:!0,confirmImport:!1,importComplete:!1,installablePlugins:[],activePlugins:[],manualPlugins:[],refreshingSites:!1,hasBackup:gppSiteLibrary.hasBackup,pageBuilder:"No Page Builder",category:"",device:"desktop"},e.importThemeOptions=e.importThemeOptions.bind(p()(e)),e.installPlugins=e.installPlugins.bind(p()(e)),e.activatePlugins=e.activatePlugins.bind(p()(e)),e.importContent=e.importContent.bind(p()(e)),e.importSiteOptions=e.importSiteOptions.bind(p()(e)),e.importWidgets=e.importWidgets.bind(p()(e)),e}return l()(s,[{key:"componentDidMount",value:function(){var e=this;P()({path:"/generatepress-site-library/v1/get_sites",method:"POST",data:{forceRefresh:!1}}).then((function(t){e.setState({isAPILoaded:!0,allSites:t.response})}))}},{key:"importThemeOptions",value:function(e){var t=this,n=e.target.nextElementSibling;n.classList.add("gpp-library-action-message--show"),n.textContent=Object(j.__)("Importing theme options","gp-premium"),P()({path:"/generatepress-site-library/v1/import_theme_options",method:"POST",data:{siteData:this.state.siteData,siteSlug:this.state.siteData.name.replace(/\s+/g,"_").toLowerCase(),importOptions:this.state.importOptions,importContent:this.state.importContent}}).then((function(e){n.textContent=e.response,e.success&&e.response||n.classList.add("gblocks-action-message--error"),setTimeout((function(){t.state.importContent?Object.keys(t.state.hasData.plugin_data).length>0?t.installPlugins(n):t.importContent(n):(n.textContent=Object(j.__)("Import Complete","gp-premium"),t.setState({isAPIWorking:!1,importComplete:!0,hasBackup:!0}))}),2e3)}))}},{key:"installPlugins",value:function(e){var t=this;void 0!==e.target&&(e=e.target.nextElementSibling),e.classList.add("gpp-library-action-message--show"),e.textContent=Object(j.__)("Installing plugins","gp-premium"),Object.entries(this.state.hasData.plugin_data).forEach((function(n){var r=i()(n,2),s=r[0],a=r[1],o=a.slug.split("/")[0],l=a.name;a.installed?(delete t.state.hasData.plugin_data[s],0===Object.keys(t.state.hasData.plugin_data).length&&t.activatePlugins(e)):("bb-plugin"===o&&(o="beaver-builder-lite-version",l="Beaver Builder Lite"),e.textContent=Object(j.sprintf)(
/* translators: Installing "Plugin Name" */
Object(j.__)("Installing %s","gp-premium"),l),wp.updates.installPlugin({slug:o,success:function(n){console.log(n),delete t.state.hasData.plugin_data[s],0===Object.keys(t.state.hasData.plugin_data).length&&t.activatePlugins(e)},error:function(n){console.log(n),delete t.state.hasData.plugin_data[s],0===Object.keys(t.state.hasData.plugin_data).length&&t.activatePlugins(e)}}))}))}},{key:"activatePlugins",value:function(e){var t=this;e.classList.add("gpp-library-action-message--show"),e.textContent=Object(j.__)("Activating plugins","gp-premium"),P()({path:"/generatepress-site-library/v1/activate_plugins",method:"POST",data:{siteData:this.state.siteData,siteSlug:this.state.siteData.name.replace(/\s+/g,"_").toLowerCase(),importOptions:this.state.importOptions,importContent:this.state.importContent}}).then((function(n){e.textContent=n.response,n.success&&n.response||e.classList.add("gblocks-action-message--error"),setTimeout((function(){t.importContent(e)}),2e3)}))}},{key:"importContent",value:function(e){var t=this;e.classList.add("gpp-library-action-message--show"),e.textContent=Object(j.__)("Importing content","gp-premium"),P()({path:"/generatepress-site-library/v1/import_content",method:"POST",data:{siteData:this.state.siteData,siteSlug:this.state.siteData.name.replace(/\s+/g,"_").toLowerCase(),importOptions:this.state.importOptions,importContent:this.state.importContent}}).then((function(n){e.textContent=n.response,n.success&&n.response||e.classList.add("gblocks-action-message--error"),setTimeout((function(){t.importSiteOptions(e)}),2e3)}))}},{key:"importSiteOptions",value:function(e){var t=this;e.classList.add("gpp-library-action-message--show"),e.textContent=Object(j.__)("Importing site options","gp-premium"),P()({path:"/generatepress-site-library/v1/import_site_options",method:"POST",data:{siteData:this.state.siteData,siteSlug:this.state.siteData.name.replace(/\s+/g,"_").toLowerCase(),importOptions:this.state.importOptions,importContent:this.state.importContent}}).then((function(n){e.textContent=n.response,n.success&&n.response||e.classList.add("gblocks-action-message--error"),setTimeout((function(){t.state.hasWidgets?t.importWidgets(e):(e.textContent=Object(j.__)("Import Complete","gp-premium"),t.setState({isAPIWorking:!1,importComplete:!0,hasBackup:!0}))}),2e3)}))}},{key:"importWidgets",value:function(e){var t=this;e.classList.add("gpp-library-action-message--show"),e.textContent=Object(j.__)("Importing widgets","gp-premium"),P()({path:"/generatepress-site-library/v1/import_widgets",method:"POST",data:{siteData:this.state.siteData,siteSlug:this.state.siteData.name.replace(/\s+/g,"_").toLowerCase(),importOptions:this.state.importOptions,importContent:this.state.importContent}}).then((function(n){e.textContent=n.response,n.success&&n.response||e.classList.add("gblocks-action-message--error"),setTimeout((function(){e.textContent=Object(j.__)("Import Complete","gp-premium"),t.setState({isAPIWorking:!1,importComplete:!0,hasBackup:!0})}),2e3)}))}},{key:"restoreBackup",value:function(e){var t=this,n=e.target.nextElementSibling;n.classList.add("gpp-library-action-message--show"),n.textContent=Object(j.__)("Restoring theme options","gp-premium"),P()({path:"/generatepress-site-library/v1/restore_theme_options",method:"POST"}).then((function(e){n.textContent=e.response,e.success&&e.response||n.classList.add("gblocks-action-message--error"),setTimeout((function(){n.textContent=Object(j.__)("Restoring content","gp-premium"),P()({path:"/generatepress-site-library/v1/restore_content",method:"POST"}).then((function(e){n.textContent=e.response,e.success&&e.response||n.classList.add("gblocks-action-message--error"),t.setState({isAPIWorking:!1,hasBackup:!1})}))}),2e3)}))}},{key:"render",value:function(){var e=this;if(!this.state.isAPILoaded)return Object(d.createElement)(_.Placeholder,{className:"gpp-library-placeholder"},Object(d.createElement)(_.Spinner,null));var t=this.state.allSites;if(!t||"no results"===t)return Object(d.createElement)("div",{className:"generatepress-site-library-no-results"},Object(d.createElement)("p",null,Object(j.__)("No sites were found.","gp-premium")," ",Object(d.createElement)("a",{href:"https://docs.generatepress.com/article/site-library-unavailable/",target:"_blank",rel:"noreferrer noopener"},Object(j.__)("Why?","gp-premium"))),Object(d.createElement)(_.Button,{isPrimary:!0,onClick:function(){e.setState({refreshingSites:!0}),P()({path:"/generatepress-site-library/v1/get_sites",method:"POST",data:{forceRefresh:!0}}).then((function(t){e.setState({isAPILoaded:!0,allSites:t.response,refreshingSites:!1})}))}},this.state.refreshingSites&&Object(d.createElement)(_.Spinner,null),!this.state.refreshingSites&&Object(j.__)("Try again","gp-premium")));var n=[{label:Object(j.__)("None","gp-premium"),value:""}],r=[];t&&Object.keys(t).forEach((function(e){t[e].page_builder.forEach((function(e){if(!r.includes(e)){if("No Page Builder"===e)return;n.push({label:e,value:e}),r.push(e)}}))}));var s=[{label:Object(j.__)("All","gp-premium"),value:""}],a=[];t&&Object.keys(t).forEach((function(e){t[e].category.forEach((function(e){a.includes(e)||(s.push({label:e,value:e}),a.push(e))}))}));var o="";"tablet"===this.state.device&&(o="768px"),"mobile"===this.state.device&&(o="480px");var l=this.state.siteData.author_name&&this.state.siteData.author_url&&"GeneratePress"!==this.state.siteData.author_name;return Object(d.createElement)(d.Fragment,null,Object(d.createElement)("div",{className:"generatepress-site-library"},!!this.state.hasBackup&&Object(d.createElement)("div",{className:"generatepress-site-library-restore"},Object(d.createElement)("h2",null,Object(j.__)("Existing Site Import Detected","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("It is highly recommended that you remove the last site you imported before importing a new one.","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("This process restores your previous options, widgets and active plugins. It will also remove your imported content and CSS.","gp-premium")),Object(d.createElement)("div",{className:"gpp-library-action-button"},Object(d.createElement)(_.Button,{isPrimary:!0,onClick:function(t){window.confirm(Object(j.__)("This process makes changes to your website. If it contains important data, we suggest backing it up before proceeding.","gp-premium"))&&(e.setState({isAPIWorking:!0}),e.restoreBackup(t))}},this.state.isAPIWorking&&Object(d.createElement)(_.Spinner,null),!this.state.isAPIWorking&&Object(j.__)("Remove imported site","gp-premium")),Object(d.createElement)("span",{className:"gpp-library-action-message"}),!this.state.isAPIWorking&&Object(d.createElement)(_.Button,{onClick:function(){e.setState({hasBackup:!1})}},Object(j.__)("No thanks","gp-premium")))),!this.state.siteOpened&&!this.state.hasBackup&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("div",{className:"generatepress-site-library-filter"},"No Page Builder"===this.state.pageBuilder&&Object(d.createElement)(_.SelectControl,{label:Object(j.__)("Category","gp-premium"),options:s,value:this.state.category,onChange:function(t){e.setState({category:t,pageBuilder:"No Page Builder"}),setTimeout((function(){Object(O.forceCheck)()}),100)}}),""===this.state.category&&Object(d.createElement)(_.SelectControl,{label:Object(j.__)("Page Builder","gp-premium"),options:n,value:this.state.pageBuilder,onChange:function(t){""===t&&(t="No Page Builder"),e.setState({pageBuilder:t,category:""}),setTimeout((function(){Object(O.forceCheck)()}),100)}})),Object(d.createElement)("ul",{className:"generatepress-site-library-list"},Object.keys(t).map((function(n){if(!t[n].page_builder.includes(e.state.pageBuilder))return null;if(""!==e.state.category&&!t[n].category.includes(e.state.category))return null;var r=t[n].directory+"/screenshot.png",i=t[n].name,s=Object(E.decodeEntities)(i),a=gppSiteLibrary.gppVersion.split("-")[0],o=t[n].min_version.split("-")[0],l=gppSiteLibrary.gpVersion.split("-")[0],c=t[n].min_theme_version?t[n].min_theme_version.split("-")[0]:l,p=y(o,a)>0||y(c,l)>0,u=t[n].image_width,m=t[n].image_height;return Object(d.createElement)("li",{className:"generatepress-site-library-list-item",key:i+":"+n},Object(d.createElement)("button",{disabled:p,onClick:function(){e.setState({siteOpened:!0,siteData:t[n],sitePlugins:JSON.parse(t[n].plugins)})}},Object(d.createElement)("div",{className:"generatepress-site-library-list-item-image"},Object(d.createElement)(v.a,{offset:100,once:!0},Object(d.createElement)("img",{src:r,alt:i,width:u,height:m}))),Object(d.createElement)("div",{className:"generatepress-site-library-list-item-title"},s,!!p&&y(o,a)>0&&Object(d.createElement)("span",{className:"generatepress-site-library-required-version"},Object(j.sprintf)(
/* translators: Version number */
Object(j.__)("Requires GP Premium %s.","gp-premium"),o)),!!p&&y(c,l)>0&&Object(d.createElement)("span",{className:"generatepress-site-library-required-version"},Object(j.sprintf)(
/* translators: Version number */
Object(j.__)("Requires GeneratePress %s.","gp-premium"),c)))))}))),Object(d.createElement)("div",{className:"generatepress-site-library-refresh"},Object(d.createElement)(_.Button,{isPrimary:!0,onClick:function(){e.setState({refreshingSites:!0}),P()({path:"/generatepress-site-library/v1/get_sites",method:"POST",data:{forceRefresh:!0}}).then((function(t){e.setState({isAPILoaded:!0,allSites:t.response,refreshingSites:!1})}))}},this.state.refreshingSites&&Object(d.createElement)(_.Spinner,null),!this.state.refreshingSites&&Object(j.__)("Refresh sites","gp-premium")))),this.state.siteOpened&&Object(d.createElement)("div",{className:"generatepress-site-library-opened"},Object(d.createElement)("div",{className:"generatepress-site-library-iframe"},Object(d.createElement)("iframe",{title:"gpp-site-library-frame",src:this.state.siteData.preview_url,style:{width:o}})),Object(d.createElement)("div",{className:"generatepress-site-library-info"},Object(d.createElement)("div",{className:"generatepress-site-library-header"},Object(d.createElement)("div",{className:"generatepress-site-library-header__title"},Object(d.createElement)("h2",{className:l?"has-author":""},Object(E.decodeEntities)(this.state.siteData.name)),l&&Object(d.createElement)("span",{className:"site-library-author"},
/* translators: Site library site built by "author name" */
Object(j.__)("Built by","gp-premium")+" ",Object(d.createElement)("a",{href:this.state.siteData.author_url,target:"_blank",rel:"noreferrer noopener"},this.state.siteData.author_name))),Object(d.createElement)(_.Button,{onClick:function(){e.setState({isAPIWorking:!1,siteOpened:!1,siteData:{},siteSlug:"",sitePlugins:{},hasData:{},hasWidgets:!1,importOptions:!0,importContent:!0,confirmImport:!1,importComplete:!1,installablePlugins:[],activePlugins:[],manualPlugins:[]})}},Object(d.createElement)("svg",{width:"35",height:"35",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},Object(d.createElement)("path",{d:"M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"})))),Object(d.createElement)("div",{className:"generatepress-site-library-content"},!!this.state.siteData.description&&Object(d.createElement)("p",null,Object(E.decodeEntities)(this.state.siteData.description)),!this.state.importComplete&&Object(d.createElement)(d.Fragment,null,0===Object.keys(this.state.hasData).length&&Object(d.createElement)(d.Fragment,null,gppSiteLibrary.isDebugEnabled&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("h3",null,Object(j.__)("Debug Mode Enabled","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("WordPress debug mode is currently enabled. With this, any errors from third-party plugins might affect the import process.","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("To disable it, find WP_DEBUG in your wp-config.php file and set it to false like the below.","gp-premium")),Object(d.createElement)("code",null,"define( 'WP_DEBUG', false );"),Object(d.createElement)("p",null,Object(d.createElement)("a",{href:"https://docs.generatepress.com/article/debug-mode-enabled/",target:"_blank",rel:"noreferrer noopener"},Object(j.__)("Learn more here","gp-premium")))),Object.keys(this.state.sitePlugins).length>0&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("h3",null,Object(j.__)("Plugins","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("This site uses the following plugins.","gp-premium")),Object(d.createElement)("ul",{className:"generatepress-site-library-plugins"},Object.entries(this.state.sitePlugins).map((function(e){var t=i()(e,1)[0];return Object(d.createElement)("li",{key:t},t)})))),Object(d.createElement)("div",{className:"gpp-library-action-button"},Object(d.createElement)(_.Button,{isPrimary:!0,disabled:this.state.isAPIWorking,onClick:function(t){e.setState({isAPIWorking:!0});var n=t.target.nextElementSibling;n.textContent=Object(j.__)("Gathering information","gp-premium"),P()({path:"/generatepress-site-library/v1/get_site_data",method:"POST",data:{siteData:e.state.siteData}}).then((function(t){var r=[],s=[],a=[];Object.entries(t.response.plugin_data).forEach((function(e){var n=i()(e,1)[0],o=t.response.plugin_data[n];o.repo&&!o.installed?r.push(o.name):o.installed||o.active?s.push(o.name):a.push(o.name)})),e.setState({isAPIWorking:!1,hasData:t.response,sitePlugins:t.response.plugins,hasWidgets:t.response.widgets,installablePlugins:r,activePlugins:s,manualPlugins:a}),n.classList.add("gpp-library-action-message--show"),n.textContent=t.response,t.success&&t.response?setTimeout((function(){n.classList.remove("gpp-library-action-message--show")}),3e3):n.classList.add("gpp-library-action-message--error")}))}},this.state.isAPIWorking&&Object(d.createElement)(_.Spinner,null),!this.state.isAPIWorking&&Object(j.__)("Get Started","gp-premium")),Object(d.createElement)("span",{className:"gpp-library-action-message"}))),Object.keys(this.state.hasData).length>0&&Object.keys(this.state.sitePlugins).length>0&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("h3",null,Object(j.__)("Plugins","gp-premium")),this.state.installablePlugins.length>0&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("p",null,Object(j.__)("These plugins can be installed automatically.","gp-premium")),Object(d.createElement)("ul",{className:"generatepress-site-library-plugins"},this.state.installablePlugins.map((function(e){return Object(d.createElement)("li",{key:e},e)})))),this.state.activePlugins.length>0&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("p",null,Object(j.__)("These plugins are already installed.","gp-premium")),Object(d.createElement)("ul",{className:"generatepress-site-library-plugins"},this.state.activePlugins.map((function(e){return Object(d.createElement)("li",{key:e},e)})))),this.state.manualPlugins.length>0&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("p",null,Object(j.__)("These plugins need to be installed manually.","gp-premium")),Object(d.createElement)("ul",{className:"generatepress-site-library-plugins"},this.state.manualPlugins.map((function(e){return Object(d.createElement)("li",{key:e},e)}))))),Object.keys(this.state.hasData).length>0&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("h3",null,Object(j.__)("Import","gp-premium")),this.state.hasData.options&&!this.state.isAPIWorking&&Object(d.createElement)(_.Tooltip,{text:Object(j.__)("This will import the options from the Customizer.","gp-premium")},Object(d.createElement)(_.ToggleControl,{checked:!!this.state.importOptions,label:Object(j.__)("Import Theme Options","gp-premium"),onChange:function(t){e.setState({importOptions:t})}})),this.state.hasData.content&&!this.state.isAPIWorking&&Object(d.createElement)(_.Tooltip,{text:Object(j.__)("This will install and activate needed plugins, import demo content, and import site options.","gp-premium")},Object(d.createElement)(_.ToggleControl,{checked:!!this.state.importContent,label:Object(j.__)("Import Demo Content","gp-premium"),onChange:function(t){e.setState({importContent:t})}})),(!!this.state.importOptions||!!this.state.importContent)&&Object(d.createElement)(d.Fragment,null,!this.state.isAPIWorking&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("h3",null,Object(j.__)("Confirm Import","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("This process makes changes to your website. If it contains important data, we suggest backing it up before proceeding.","gp-premium")),Object(d.createElement)(_.ToggleControl,{checked:!!this.state.confirmImport,label:Object(j.__)("I understand","gp-premium"),onChange:function(t){e.setState({confirmImport:t})}})),!!this.state.confirmImport&&!this.state.importComplete&&Object(d.createElement)("div",{className:"gpp-library-action-button"},Object(d.createElement)(_.Button,{isPrimary:!0,disabled:this.state.isAPIWorking,onClick:function(t){e.setState({isAPIWorking:!0}),e.state.importOptions?e.importThemeOptions(t):e.state.importContent&&e.installPlugins(t)}},this.state.isAPIWorking&&Object(d.createElement)(_.Spinner,null),!this.state.isAPIWorking&&Object(j.__)("Begin Import","gp-premium")),Object(d.createElement)("span",{className:"gpp-library-action-message"}))))),!!this.state.importComplete&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("h3",null,Object(j.__)("Import Complete","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("Check out your new site and start making it yours!","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("Note: We do our best to ensure all imported images are licensed for open use. However, image licenses can change, so we strongly advise that you replace all imported images with your own.","gp-premium")),Object(d.createElement)("a",{className:"components-button is-primary",href:gppSiteLibrary.homeUrl},Object(j.__)("View Site","gp-premium")),this.state.siteData.uploads_url&&Object.values(this.state.sitePlugins).includes("elementor/elementor.php")&&Object(d.createElement)(d.Fragment,null,Object(d.createElement)("h3",null,Object(j.__)("Additional Cleanup","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("This site is using Elementor which means you will want to replace the imported image URLs.","gp-premium")),Object(d.createElement)("p",null,Object(j.__)("Take note of the old and new URLs below, then head over to the Elementor Tools area to replace them.","gp-premium")),Object(d.createElement)(_.TextControl,{label:Object(j.__)("Old URL","gp-premium"),readOnly:!0,value:this.state.siteData.uploads_url}),Object(d.createElement)(_.TextControl,{label:Object(j.__)("New URL","gp-premium"),readOnly:!0,value:gppSiteLibrary.uploadsUrl}),Object(d.createElement)("a",{href:gppSiteLibrary.elementorReplaceUrls,className:"components-button is-primary",target:"_blank",rel:"noopener noreferrer"},Object(j.__)("Elementor Tools","gp-premium")))),Object(d.createElement)("div",{className:"generatepress-site-library-footer"},Object(d.createElement)(_.Tooltip,{text:Object(j.__)("Preview desktop","gp-premium")},Object(d.createElement)(_.Button,{isPrimary:"desktop"===this.state.device,onClick:function(){e.setState({device:"desktop"})}},Object(d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"1em",height:"1em",viewBox:"0 0 24 24"},Object(d.createElement)("path",{d:"M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h7l-2 3v1h8v-1l-2-3h7a2 2 0 002-2V4a2 2 0 00-2-2z",fill:"currentColor"})))),Object(d.createElement)(_.Tooltip,{text:Object(j.__)("Preview tablet","gp-premium")},Object(d.createElement)(_.Button,{isPrimary:"tablet"===this.state.device,onClick:function(){e.setState({device:"tablet"})}},Object(d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"1em",height:"1em",viewBox:"0 0 24 24"},Object(d.createElement)("path",{d:"M19 19H4V3h15m-7.5 20a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m7-23h-14A2.5 2.5 0 002 2.5v19A2.5 2.5 0 004.5 24h14a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0018.5 0z",fill:"currentColor"})))),Object(d.createElement)(_.Tooltip,{text:Object(j.__)("Preview mobile","gp-premium")},Object(d.createElement)(_.Button,{isPrimary:"mobile"===this.state.device,onClick:function(){e.setState({device:"mobile"})}},Object(d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"1em",height:"1em",viewBox:"0 0 24 24"},Object(d.createElement)("path",{d:"M17 19H7V5h10m0-4H7c-1.11 0-2 .89-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2z",fill:"currentColor"}))))))))))}}]),s}(d.Component);Object(d.render)(Object(d.createElement)(C,null),document.getElementById("gpp-site-library"))}]);