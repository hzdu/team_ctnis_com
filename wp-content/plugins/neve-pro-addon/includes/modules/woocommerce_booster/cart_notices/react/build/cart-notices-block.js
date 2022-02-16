!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,n=window.wp.compose,r=window.wp.components,a=window.wp.hooks,o=window.wp.blockEditor,c=window.wp.i18n;(0,a.addFilter)("blocks.registerBlockType","neve/custom-attributes",(function(e,t){return"core/button"!==t||void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{autoAddToCart:{type:"boolean",default:!1},autoApplyDiscount:{type:"boolean",default:!1},discountCode:{type:"string"}})),e}));const l=(0,n.createHigherOrderComponent)((e=>n=>{if("core/button"!==n.name)return(0,t.createElement)(e,n);const{attributes:a,setAttributes:l,isSelected:i}=n,{autoAddToCart:s,autoApplyDiscount:u,discountCode:_}=a;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,n),i&&(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,c.__)("Advanced link settings","neve")},(0,t.createElement)(r.ToggleControl,{label:(0,c.__)("Automatically add to cart"),checked:!!s,onChange:()=>l({autoAddToCart:!s}),help:(0,c.__)("This works if the button uses a product link.","neve")}),s&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.ToggleControl,{label:(0,c.__)("Automatically apply discount"),checked:!!u,onChange:()=>l({autoApplyDiscount:!u})}),u&&(0,t.createElement)(r.TextControl,{label:(0,c.__)("Discount code","neve"),value:_,onChange:e=>l({discountCode:e})})))))}),"withAdvancedControls");(0,a.addFilter)("editor.BlockEdit","neve/cart-notice-advanced-button",l);var i=window.wp.data,s=window.wp.richText,u=e=>{const{selectionStart:n,selectionEnd:a,block:l}=(0,i.useSelect)((e=>({selectionStart:e("core/block-editor").getSelectionStart(),selectionEnd:e("core/block-editor").getSelectionEnd(),block:e("core/block-editor").getSelectedBlock()}))),{getMetaValue:u}=e,{updateBlock:_}=(0,i.useDispatch)("core/block-editor"),g=[{name:"{time_left}",isActive:!!u("nv_cn_expiration_end")},{name:"{amount_left}",isActive:!("amount"!==u("nv_cn_trigger")||!u("nv_cn_trigger_amount_max"))},{name:"{products_in_cart}",isActive:!("product"!==u("nv_cn_trigger")||!u("nv_cn_trigger_product_include")||!JSON.parse(u("nv_cn_trigger_product_include")).length)},{name:"{quantity_left}",isActive:!("product"!==u("nv_cn_trigger")||!u("nv_cn_trigger_product_max_qty"))},{name:"{quantity_over}",isActive:!("product"!==u("nv_cn_trigger")||!u("nv_cn_trigger_product_min_qty"))},{name:"{categories_in_cart}",isActive:!("category"!==u("nv_cn_trigger")||!u("nv_cn_trigger_category_include")||!JSON.parse(u("nv_cn_trigger_category_include")).length)}].filter((e=>!0===e.isActive))||[];return(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(r.ToolbarGroup,null,(0,t.createElement)(r.ToolbarItem,null,(e=>(0,t.createElement)(r.DropdownMenu,{className:"nv-magic-tags-dropdown",icon:"image-filter",label:(0,c.__)("Magic tags","neve"),toggleProps:e},(()=>(0,t.createElement)(r.MenuGroup,null,g.length>0?(0,t.createElement)(t.Fragment,null,g.map(((e,o)=>(0,t.createElement)(r.MenuItem,{onClick:()=>{const t=l.clientId,r=n.offset,o=a.offset,c=l.attributes.content;let i=(0,s.create)({html:c});i=(0,s.insert)(i,e.name,r,o),_(t,{attributes:{content:(0,s.toHTMLString)({value:i})}})},key:o},e.name)))):(0,t.createElement)(r.MenuItem,null,(0,c.__)("There are no available magic tags for this notice.","neve")))))))))},_=window.wp.blocks;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var d=({getMetaValue:e,setMetaValue:n})=>(0,t.createElement)(r.PanelBody,{title:(0,c.__)("Display location","neve"),initialOpen:!0},(0,t.createElement)(r.ToggleControl,{label:(0,c.__)("Show on cart","neve"),checked:!!e("nv_cn_location_cart")&&JSON.parse(e("nv_cn_location_cart")),onChange:e=>{n("nv_cn_location_cart",e)}}),(0,t.createElement)(r.ToggleControl,{label:(0,c.__)("Show on checkout","neve"),checked:!!e("nv_cn_location_checkout")&&JSON.parse(e("nv_cn_location_checkout")),onChange:e=>{n("nv_cn_location_checkout",e)}}),(0,t.createElement)(r.ToggleControl,{label:(0,c.__)("Show on product catalog","neve"),checked:!!e("nv_cn_location_shop")&&JSON.parse(e("nv_cn_location_shop")),onChange:e=>{n("nv_cn_location_shop",e)}}),(0,t.createElement)(r.ToggleControl,{label:(0,c.__)("Show on single product","neve"),checked:!!e("nv_cn_location_single")&&JSON.parse(e("nv_cn_location_single")),onChange:e=>{n("nv_cn_location_single",e)}})),m=({getMetaValue:e,setMetaValue:n})=>(0,t.createElement)(r.PanelBody,{title:(0,c.__)("Display settings","neve"),initialOpen:!1},(0,t.createElement)(r.SelectControl,{label:(0,c.__)("Display notice for:","neve"),options:[{label:(0,c.__)("All users","neve"),value:"all"},{label:(0,c.__)("Registered users","neve"),value:"registered"}],onChange:e=>{n("nv_cn_user_status",e)},value:e("nv_cn_user_status")?e("nv_cn_user_status"):"all"}),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("span",null,(0,t.createElement)("strong",null,(0,c.__)("Start date:","neve"))),(0,t.createElement)(r.Dropdown,{className:"nv-cn-expiration-start",position:"bottom right",renderToggle:({isOpen:n,onToggle:a})=>(0,t.createElement)(r.Button,{isTertiary:!0,onClick:a,"aria-expanded":n},e("nv_cn_expiration_start")?e("nv_cn_expiration_start"):(0,c.__)("Immediately","neve")),renderContent:()=>(0,t.createElement)(r.DateTimePicker,{currentDate:e("nv_cn_expiration_start")?e("nv_cn_expiration_start"):"",onChange:e=>{const t=null!==e?moment(e).format("MMMM D, YYYY HH:mm"):"";n("nv_cn_expiration_start",t)}})})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("span",null,(0,t.createElement)("strong",null,(0,c.__)("End date:","neve"))),(0,t.createElement)(r.Dropdown,{className:"nv-cn-expiration-end",position:"bottom right",renderToggle:({isOpen:n,onToggle:a})=>(0,t.createElement)(r.Button,{isTertiary:!0,onClick:a,"aria-expanded":n},e("nv_cn_expiration_end")?e("nv_cn_expiration_end"):(0,c.__)("No date defined","neve")),renderContent:()=>(0,t.createElement)(r.DateTimePicker,{currentDate:e("nv_cn_expiration_end")?e("nv_cn_expiration_end"):"",onChange:e=>{const t=null!==e?moment(e).format("MMMM D, YYYY HH:mm"):"";n("nv_cn_expiration_end",t)}})}))),p=window.wp.apiFetch,v=e.n(p);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},w=E({},f,{},"object"===("undefined"==typeof wcSharedSettings?"undefined":y(wcSharedSettings))?wcSharedSettings:{});function C(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return w.hasOwnProperty(e)?w[e]:t}w.currency=E({},f.currency,{},w.currency),w.locale=E({},f.locale,{},w.locale),w.adminUrl,w.countries,w.currency,w.locale,w.orderStatuses,w.siteTitle,w.wcAssetUrl,w.defaultDateRange;var k=window.wp.url,S=window.lodash,x=({getMetaValue:e,setMetaValue:n})=>{const[a,o]=(0,t.useState)({}),[l,i]=(0,t.useState)({});function s({type:e="products",queryArgs:t=[]}){let n;return"products"===e&&(n=function({queryArgs:e=[]}){const t={per_page:C("isLargeCatalog")?100:0,catalog_visibility:"any",orderby:"title",order:"asc"},n=[(0,k.addQueryArgs)("/wc/store/products",{...t,...e})];return C("isLargeCatalog")&&n.push((0,k.addQueryArgs)("/wc/store/products",{catalog_visibility:"any"})),n}({queryArgs:t})),"categories"===e&&(n=function({queryArgs:e=[]}){return[(0,k.addQueryArgs)("/wc/store/products/categories",{per_page:0,...e})]}({queryArgs:t})),Promise.all(n.map((e=>v()({path:e})))).then((e=>{const t=[];return(0,S.uniqBy)((0,S.flatten)(e),"id").forEach((e=>{t.push({value:e.id,title:e.name})})),t})).catch((e=>{throw e}))}(0,t.useEffect)((()=>{let e=!0;return s({type:"products"}).then((t=>{const n=t.reduce(((e,t)=>({...e,[t.title]:t.value})),{});e&&o(n)})).catch((e=>console.log(e))),s({type:"categories"}).then((t=>{const n=t.reduce(((e,t)=>({...e,[t.title]:t.value})),{});e&&i(n)})).catch((e=>console.error(e))),()=>e=!1}),[]);const u=function(e){switch(e){case"no-trigger":return(0,c.__)("The notice is always present on the selected locations.","neve");case"amount":return(0,c.__)("The notice is shown based on cart amount.","neve");case"product":return(0,c.__)("The notice is shown based on what products are in cart and/or their number.","neve");case"category":return(0,c.__)("The notice is shown based on categories of products that are in cart.","neve");default:return""}}(e("nv_cn_trigger"));function _(e,t,r=!1){const o=[],c=r?l:a;e.forEach((e=>{const t="string"==typeof e?c[e]:e.id;t&&o.push({id:t,value:"string"==typeof e?e:e.value})})),n(t,JSON.stringify(o))}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.PanelBody,{title:(0,c.__)("Display conditions","neve"),initialOpen:!1},(0,t.createElement)(r.BaseControl,{className:"nv-cn-trigger",help:u},(0,t.createElement)(r.SelectControl,{options:[{label:(0,c.__)("Always","neve"),value:"no-trigger"},{label:(0,c.__)("Cart amount","neve"),value:"amount"},{label:(0,c.__)("Product in cart","neve"),value:"product"},{label:(0,c.__)("Category in cart","neve"),value:"category"}],onChange:e=>{n("nv_cn_trigger",e)},value:e("nv_cn_trigger")?e("nv_cn_trigger"):"no-trigger"})),(0,t.createElement)(r.Dropdown,{className:"nv-cn-magic-tags",position:"bottom right",renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{isLink:!0,onClick:n,"aria-expanded":e},(0,c.__)("How to add magic tags","neve")),renderContent:()=>(0,t.createElement)("div",{className:"nv-cn-magic-tags-info"},(0,t.createElement)("p",null," ",(0,c.__)("Based on your notice settings, different magic tags will be available for you to add.","neve")," "),(0,t.createElement)("h4",null,(0,c.__)("How to add magic tags","neve")),(0,t.createElement)("p",null," ",(0,c.__)("Click on the text notice and a toolbar will be available.","neve")," "),(0,t.createElement)("p",null,void 0!==t.createInterpolateElement&&(0,t.createInterpolateElement)((0,c.__)("Click on <span></span> and the list with magic tags will be available. Click on any tag to insert it in your text.","neve"),{span:(0,t.createElement)("span",{className:"dashicon dashicons dashicons-image-filter"})})),(0,t.createElement)("img",{src:neveCartNotice.magicTagInfoImage,alt:(0,c.__)("Magic tags","neve")}))}),function(o){switch(o){case"amount":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.TextControl,{label:(0,c.__)("Maximum cart amount","neve"),type:"number",value:e("nv_cn_trigger_amount_max")?e("nv_cn_trigger_amount_max"):"",onChange:t=>{t=parseInt(t)<0?"0":t;const r=e("nv_cn_trigger_amount_min");t=parseInt(t)<parseInt(r)?r:t,n("nv_cn_trigger_amount_max",t)},min:0}),(0,t.createElement)(r.TextControl,{label:(0,c.__)("Minimum cart amount","neve"),type:"number",value:e("nv_cn_trigger_amount_min")?e("nv_cn_trigger_amount_min"):"",onChange:t=>{t=parseInt(t)<0?"0":t;const r=e("nv_cn_trigger_amount_max");t=parseInt(t)>parseInt(r)?r:t,n("nv_cn_trigger_amount_min",t)},min:0}),(0,t.createElement)(r.SelectControl,{label:(0,c.__)("Should include tax","neve"),options:[{label:(0,c.__)("No","neve"),value:"no"},{label:(0,c.__)("Yes","neve"),value:"yes"}],onChange:e=>{n("nv_cn_trigger_amount_tax",e)},value:e("nv_cn_trigger_amount_tax")?e("nv_cn_trigger_amount_tax"):"yes"}));case"product":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.BaseControl,{id:"nv-cn-product-include",label:(0,c.__)("Include","neve"),help:(0,c.__)("The notice is shown when any of the products from the list is in the cart.","neve"),className:"nv-products-control"},(0,t.createElement)(r.FormTokenField,{value:e("nv_cn_trigger_product_include")?JSON.parse(e("nv_cn_trigger_product_include")):[],suggestions:Object.keys(a),onChange:e=>_(e,"nv_cn_trigger_product_include")})),(0,t.createElement)(r.BaseControl,{id:"nv-cn-product-exclude",label:(0,c.__)("Exclude","neve"),help:(0,c.__)("The notice is shown when none of the products from the list is in the cart.","neve"),className:"nv-products-control"},(0,t.createElement)(r.FormTokenField,{value:e("nv_cn_trigger_product_exclude")?JSON.parse(e("nv_cn_trigger_product_exclude")):[],suggestions:Object.keys(a),onChange:e=>_(e,"nv_cn_trigger_product_exclude")})),(0,t.createElement)(r.TextControl,{label:(0,c.__)("Minimum quantity","neve"),type:"number",value:e("nv_cn_trigger_product_min_qty")?e("nv_cn_trigger_product_min_qty"):"",onChange:e=>{n("nv_cn_trigger_product_min_qty",e)},min:0}),(0,t.createElement)(r.TextControl,{label:(0,c.__)("Maximum quantity","neve"),type:"number",value:e("nv_cn_trigger_product_max_qty")?e("nv_cn_trigger_product_max_qty"):"",onChange:e=>{n("nv_cn_trigger_product_max_qty",e)},min:0}));case"category":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.BaseControl,{id:"nv-cn-category-include",label:(0,c.__)("Include","neve"),help:(0,c.__)("The notice is shown when any of the products from cart is in a category from this list.","neve"),className:"nv-products-control"},(0,t.createElement)(r.FormTokenField,{value:e("nv_cn_trigger_category_include")?JSON.parse(e("nv_cn_trigger_category_include")):[],suggestions:Object.keys(l),onChange:e=>_(e,"nv_cn_trigger_category_include",!0)})),(0,t.createElement)(r.BaseControl,{id:"nv-cn-category-exclude",label:(0,c.__)("Exclude","neve"),help:(0,c.__)("The notice is shown when any of the products from cart is not in a category from this list.","neve"),className:"nv-products-control"},(0,t.createElement)(r.FormTokenField,{value:e("nv_cn_trigger_category_exclude")?JSON.parse(e("nv_cn_trigger_category_exclude")):[],suggestions:Object.keys(l),onChange:e=>_(e,"nv_cn_trigger_category_exclude",!0)})));default:return""}}(e("nv_cn_trigger"))))},T=({attributes:e,setAttributes:n})=>{const{backgroundColor:a}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.PanelBody,{title:(0,c.__)("Styling","neve"),initialOpen:!1},(0,t.createElement)(r.BaseControl,{id:"nv-cn-background",label:(0,c.__)("Background color:","neve")},(0,t.createElement)(o.ColorPalette,{value:a,onChange:e=>n({backgroundColor:e})}))))},O=({getMetaValue:e,setMetaValue:n,attributes:r,setAttributes:a})=>(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(d,{getMetaValue:e,setMetaValue:n}),(0,t.createElement)(m,{getMetaValue:e,setMetaValue:n}),(0,t.createElement)(x,{getMetaValue:e,setMetaValue:n}),(0,t.createElement)(T,{attributes:r,setAttributes:a}));(0,_.registerBlockType)("neve-pro-addon/neve-cart-notices",{title:"Cart notice",icon:"admin-comments",category:"design",attributes:{content:{type:"string",source:"html",selector:"p"},backgroundColor:{type:"string",default:"var(--nv-c-1)"}},supports:{multiple:!1},edit:e=>{const{attributes:n,setAttributes:r}=e,{content:a,backgroundColor:l}=n,{meta:s}=(0,i.useSelect)((e=>({meta:e("core/editor").getEditedPostAttribute("meta")||{}}))),{editPost:_}=(0,i.useDispatch)("core/editor"),d=e=>s[e]||"",m={backgroundColor:l,color:"var(--nv-text-dark-bg)",padding:"20px"},p=(0,o.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(O,{getMetaValue:d,setMetaValue:(e,t)=>{_({meta:{[e]:t}})},attributes:n,setAttributes:r}),(0,t.createElement)("div",{className:"nv-cn-wrapper",style:m},(0,t.createElement)("div",{className:"nv-cn-content"},(0,t.createElement)(u,{getMetaValue:d}),(0,t.createElement)(o.RichText,g({},p,{className:"nv-cn-content",placeholder:(0,c.__)("Cart notice text","neve"),tagName:"p",onChange:e=>r({content:e}),value:a}))),(0,t.createElement)("div",{className:"nv-cn-cta"},(0,t.createElement)(o.InnerBlocks,{allowedBlocks:["core/button"],template:[["core/button",{placeholder:(0,c.__)("Call to action","neve"),align:"right",className:"is-style-primary",formattingControls:[]}]],templateLock:"all"}))))},save:e=>{const{attributes:{backgroundColor:n,content:r}}=e,a={backgroundColor:n,padding:"20px"},c=o.useBlockProps.save();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"nv-cn-wrapper",style:a},(0,t.createElement)("div",{className:"nv-cn-content"},(0,t.createElement)(o.RichText.Content,g({},c,{tagName:"p",value:r}))),(0,t.createElement)("div",{className:"nv-cn-cta"},(0,t.createElement)(o.InnerBlocks.Content,null))))}})}();