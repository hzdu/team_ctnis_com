!function(){"use strict";var e=window.wp.element,t=window.wp.i18n,l=window.wp.blocks,o=window.wp.components,a=window.wp.compose,n=window.wp.blockEditor,u=window.wp.hooks;const s=[{label:(0,t.__)("None","otter-blocks"),value:"none"},{label:(0,t.__)("Bounce","otter-blocks"),value:"bounce"},{label:(0,t.__)("Bounce In","otter-blocks"),value:"bounceIn"},{label:(0,t.__)("Bounce In Down","otter-blocks"),value:"bounceInDown"},{label:(0,t.__)("Bounce In Left","otter-blocks"),value:"bounceInLeft"},{label:(0,t.__)("Bounce In Right","otter-blocks"),value:"bounceInRight"},{label:(0,t.__)("Bounce In Up","otter-blocks"),value:"bounceInUp"},{label:(0,t.__)("Bounce Out","otter-blocks"),value:"bounceOut"},{label:(0,t.__)("Bounce Out Down","otter-blocks"),value:"bounceOutDown"},{label:(0,t.__)("Bounce Out Left","otter-blocks"),value:"bounceOutLeft"},{label:(0,t.__)("Bounce Out Right","otter-blocks"),value:"bounceOutRight"},{label:(0,t.__)("Bounce Out Up","otter-blocks"),value:"bounceOutUp"},{label:(0,t.__)("Fade In","otter-blocks"),value:"fadeIn"},{label:(0,t.__)("Fade In Down","otter-blocks"),value:"fadeInDown"},{label:(0,t.__)("Fade In Down Big","otter-blocks"),value:"fadeInDownBig"},{label:(0,t.__)("Fade In Left","otter-blocks"),value:"fadeInLeft"},{label:(0,t.__)("Fade In Left Big","otter-blocks"),value:"fadeInLeftBig"},{label:(0,t.__)("Fade In Right","otter-blocks"),value:"fadeInRight"},{label:(0,t.__)("Fade In Right Big","otter-blocks"),value:"fadeInRightBig"},{label:(0,t.__)("Fade In Up","otter-blocks"),value:"fadeInUp"},{label:(0,t.__)("Fade Out","otter-blocks"),value:"fadeOut"},{label:(0,t.__)("Fade Out Down","otter-blocks"),value:"fadeOutDown"},{label:(0,t.__)("Fade Out Down Big","otter-blocks"),value:"fadeOutDownBig"},{label:(0,t.__)("Fade Out Left","otter-blocks"),value:"fadeOutLeft"},{label:(0,t.__)("Fade Out Left Big","otter-blocks"),value:"fadeOutLeftBig"},{label:(0,t.__)("Fade Out Right","otter-blocks"),value:"fadeOutRight"},{label:(0,t.__)("Fade Out Right Big","otter-blocks"),value:"fadeOutRightBig"},{label:(0,t.__)("Fade Out Up","otter-blocks"),value:"fadeOutUp"},{label:(0,t.__)("Fade Out Up Big","otter-blocks"),value:"fadeOutUpBig"},{label:(0,t.__)("Flip","otter-blocks"),value:"flip"},{label:(0,t.__)("Flip In X","otter-blocks"),value:"flipInX"},{label:(0,t.__)("Flip In Y","otter-blocks"),value:"flipInY"},{label:(0,t.__)("Flip Out X","otter-blocks"),value:"flipOutX"},{label:(0,t.__)("Flip Out Y","otter-blocks"),value:"flipOutY"},{label:(0,t.__)("Rotate In","otter-blocks"),value:"rotateIn"},{label:(0,t.__)("Rotate In Down Left","otter-blocks"),value:"rotateInDownLeft"},{label:(0,t.__)("Rotate In Down Right","otter-blocks"),value:"rotateInDownRight"},{label:(0,t.__)("Rotate In Up Left","otter-blocks"),value:"rotateInUpLeft"},{label:(0,t.__)("Rotate In Up Right","otter-blocks"),value:"rotateInUpRight"},{label:(0,t.__)("Rotate Out","otter-blocks"),value:"rotateOut"},{label:(0,t.__)("Rotate Out Down Left","otter-blocks"),value:"rotateOutDownLeft"},{label:(0,t.__)("Rotate Out Down Right","otter-blocks"),value:"rotateOutDownRight"},{label:(0,t.__)("Rotate Out Up Left","otter-blocks"),value:"rotateOutUpLeft"},{label:(0,t.__)("Rotate Out Up Right","otter-blocks"),value:"rotateOutUpRight"},{label:(0,t.__)("Slide In Down","otter-blocks"),value:"slideInDown"},{label:(0,t.__)("Slide In Left","otter-blocks"),value:"slideInLeft"},{label:(0,t.__)("Slide In Right","otter-blocks"),value:"slideInRight"},{label:(0,t.__)("Slide In Up","otter-blocks"),value:"slideInUp"},{label:(0,t.__)("Slide Out Down","otter-blocks"),value:"slideOutDown"},{label:(0,t.__)("Slide Out Left","otter-blocks"),value:"slideOutLeft"},{label:(0,t.__)("Slide Out Right","otter-blocks"),value:"slideOutRight"},{label:(0,t.__)("Slide Out Up","otter-blocks"),value:"slideOutUp"},{label:(0,t.__)("Zoom In","otter-blocks"),value:"zoomIn"},{label:(0,t.__)("Zoom In Down","otter-blocks"),value:"zoomInDown"},{label:(0,t.__)("Zoom In Left","otter-blocks"),value:"zoomInLeft"},{label:(0,t.__)("Zoom In Right","otter-blocks"),value:"zoomInRight"},{label:(0,t.__)("Zoom In Up","otter-blocks"),value:"zoomInUp"},{label:(0,t.__)("Zoom Out","otter-blocks"),value:"zoomOut"},{label:(0,t.__)("Zoom Out Down","otter-blocks"),value:"zoomOutDown"},{label:(0,t.__)("Zoom Out Left","otter-blocks"),value:"zoomOutLeft"},{label:(0,t.__)("Zoom Out Right","otter-blocks"),value:"zoomOutRight"},{label:(0,t.__)("Zoom Out Up","otter-blocks"),value:"zoomOutUp"},{label:(0,t.__)("Roll In","otter-blocks"),value:"rollIn"},{label:(0,t.__)("Roll Out","otter-blocks"),value:"rollOut"},{label:(0,t.__)("Light Speed In","otter-blocks"),value:"lightSpeedIn"},{label:(0,t.__)("Light Speed Out","otter-blocks"),value:"lightSpeedOut"},{label:(0,t.__)("Flash","otter-blocks"),value:"flash"},{label:(0,t.__)("Pulse","otter-blocks"),value:"pulse"},{label:(0,t.__)("Rubber Band","otter-blocks"),value:"rubberBand"},{label:(0,t.__)("Shake","otter-blocks"),value:"shake"},{label:(0,t.__)("Head Shake","otter-blocks"),value:"headShake"},{label:(0,t.__)("Swing","otter-blocks"),value:"swing"},{label:(0,t.__)("TaDa","otter-blocks"),value:"tada"},{label:(0,t.__)("Wobble","otter-blocks"),value:"wobble"},{label:(0,t.__)("Jello","otter-blocks"),value:"jello"},{label:(0,t.__)("Heart Beat","otter-blocks"),value:"heartBeat"},{label:(0,t.__)("Hinge","otter-blocks"),value:"hinge"},{label:(0,t.__)("Jack In The Box","otter-blocks"),value:"jackInTheBox"}],r=[{label:(0,t.__)("Bouncing","otter-blocks"),value:"bounce"},{label:(0,t.__)("Fading","otter-blocks"),value:"fadeIn"},{label:(0,t.__)("Flipping","otter-blocks"),value:"flip"},{label:(0,t.__)("Rotating","otter-blocks"),value:"rotateIn"},{label:(0,t.__)("Sliding","otter-blocks"),value:"slideInDown"},{label:(0,t.__)("Zooming","otter-blocks"),value:"zoomIn"},{label:(0,t.__)("Rolling","otter-blocks"),value:"rollIn"},{label:(0,t.__)("Other","otter-blocks"),value:"lightSpeedIn"}],b=["bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipOutX","flipOutY","lightSpeedOut","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","rollOut"],c=[{label:(0,t.__)("None","otter-blocks"),value:"none"},{label:(0,t.__)("100 Milliseconds","otter-blocks"),value:"delay-100ms"},{label:(0,t.__)("200 Milliseconds","otter-blocks"),value:"delay-200ms"},{label:(0,t.__)("500 Milliseconds","otter-blocks"),value:"delay-500ms"},{label:(0,t.__)("One Second","otter-blocks"),value:"delay-1s"},{label:(0,t.__)("Two Second","otter-blocks"),value:"delay-2s"},{label:(0,t.__)("Three Second","otter-blocks"),value:"delay-3s"},{label:(0,t.__)("Four Second","otter-blocks"),value:"delay-4s"},{label:(0,t.__)("Five Second","otter-blocks"),value:"delay-5s"}],i=[{label:(0,t.__)("Default","otter-blocks"),value:"none"},{label:(0,t.__)("Slow","otter-blocks"),value:"slow"},{label:(0,t.__)("Slower","otter-blocks"),value:"slower"},{label:(0,t.__)("Fast","otter-blocks"),value:"fast"},{label:(0,t.__)("Faster","otter-blocks"),value:"faster"}];var _=function l(n){let{animationsList:u,updateAnimation:s,currentAnimationLabel:b,setCurrentAnimationLabel:c}=n;const i=(0,a.useInstanceId)(l),[_,d]=(0,e.useState)(""),[v,m]=(0,e.useState)(!1),k=`inspector-themeisle-animations-control-${i}`;return(0,e.createElement)(o.BaseControl,{label:(0,t.__)("Animation","otter-blocks"),id:k},(0,e.createElement)(o.Dropdown,{contentClassName:"themeisle-animations-control__popover",position:"bottom center",renderToggle:t=>{let{isOpen:l,onToggle:a}=t;return(0,e.createElement)(o.Button,{className:"themeisle-animations-control__button",id:k,onClick:a,"aria-expanded":l},b)},renderContent:l=>{let{onToggle:a}=l;return(0,e.createElement)(o.MenuGroup,{label:(0,t.__)("Animations","otter-blocks")},(0,e.createElement)(o.TextControl,{placeholder:(0,t.__)("Search","otter-blocks"),value:_,onChange:e=>{d(e),m(!1)}}),(0,e.createElement)("div",{className:"components-popover__items"},u.map((t=>(0,e.createElement)(e.Fragment,null,""===_&&r.map((l=>l.value===t.value?(0,e.createElement)("div",{className:"themeisle-animations-control__category"},l.label):"")),((t,l)=>{let a=!0;return _&&_.toLowerCase().split(" ").forEach((e=>{t.label.toLowerCase().includes(e)||(a=!1)})),a&&!v&&m(!0),a&&(0,e.createElement)(o.MenuItem,{className:b===t.label?"is-selected":"",onClick:()=>{c(t.label),s(t.value),l()}},t.label)})(t,a)))),!v&&(0,e.createElement)("div",null,(0,t.__)("Nothing found. Try searching for something else!","otter-blocks"))))}}))},d=function(l){let{attributes:a,clientId:n,setAttributes:u}=l;(0,e.useEffect)((()=>{let e;if(a.className){e=a.className,e=e.split(" ");const t=Array.from(s).find((t=>e.find((e=>e===t.value)))),l=Array.from(c).find((t=>e.find((e=>e===t.value)))),o=Array.from(i).find((t=>e.find((e=>e===t.value))));d(t?t.value:"none"),m(l?l.value:"default"),p(o?o.value:"default"),O(t?t.label:"none")}}),[]);const[r,d]=(0,e.useState)("none"),[v,m]=(0,e.useState)("default"),[k,p]=(0,e.useState)("default"),[f,O]=(0,e.useState)("none");return(0,e.createElement)("div",{className:"themeisle-animations-control"},(0,e.createElement)(_,{animationsList:s,updateAnimation:e=>{let t,l="none"!==e?e:"";if(a.className){t=a.className,t=t.split(" ");const e=t.find((e=>e===r));t.find((e=>"animated"===e))||t.push("animated"),e?t=t.join(" ").replace(r,l):(t.push(l),t=t.join(" "))}else t=`animated ${l}`;"none"===e&&(t=t.replace("animated","").replace(v,"").replace(k,""),m("default"),p("default")),t=t.replace(/\s+/g," ").trim(),""===t&&(t=void 0),d(e),u({className:t});let o=document.querySelector(`#block-${n} .animated`)||document.querySelector(`#block-${n}.animated`);o&&b.forEach((e=>{o.className.includes(e)&&o.addEventListener("animationend",(()=>{o.classList.remove(e),o.addEventListener("animationstart",(()=>{o.classList.remove(e)}))}))}))},currentAnimationLabel:f,setCurrentAnimationLabel:O}),"none"!==r&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.SelectControl,{label:(0,t.__)("Delay","otter-blocks"),value:v||"default",options:c,onChange:e=>{let t,l="none"!==e?e:"";a.className?(t=a.className,t=t.split(" "),t.find((e=>e===v))?t=t.join(" ").replace(v,l):(t.push(l),t=t.join(" "))):t=l,t=t.replace(/\s+/g," "),m(e),u({className:t})}}),(0,e.createElement)(o.SelectControl,{label:(0,t.__)("Speed","otter-blocks"),value:k||"default",options:i,onChange:e=>{let t,l="none"!==e?e:"";a.className?(t=a.className,t=t.split(" "),t.find((e=>e===k))?t=t.join(" ").replace(k,l):(t.push(l),t=t.join(" "))):t=l,t=t.replace(/\s+/g," "),p(e),u({className:t})}})))};const v=(0,a.createHigherOrderComponent)((a=>u=>(0,l.hasBlockSupport)(u.name,"customClassName",!0)&&u.isSelected?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a,u),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:(0,t.__)("Animations","otter-blocks"),initialOpen:!1},(0,e.createElement)(d,{clientId:u.clientId,setAttributes:u.setAttributes,attributes:u.attributes})))):(0,e.createElement)(a,u)),"withInspectorControl");(0,u.addFilter)("editor.BlockEdit","themeisle-custom-css/with-inspector-controls",v)}();