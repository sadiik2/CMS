!function(){"use strict";var e,t={9504:function(){var e=window.wp.blocks,t=window.React,r=window.wp.primitives,n=(0,t.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(r.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),o=window.wp.i18n,c=window.wp.blockEditor,l=window.wp.components,a=JSON.parse('{"UU":"surecart/product-quantity"}');(0,e.registerBlockType)(a.UU,{edit:e=>{let{attributes:t,setAttributes:r}=e;const{label:n}=t,{style:a}=(0,c.__experimentalUseBorderProps)(t),{style:s}=(0,c.__experimentalUseColorProps)(t),i=(0,c.useBlockProps)({style:{display:"block",...s?.color?{"--sc-input-label-color":s.color,"--sc-focus-ring-color-primary":s.color,"--sc-input-border-color-focus":s.color}:{}}});return React.createElement(React.Fragment,null,React.createElement(c.InspectorControls,null,React.createElement(l.PanelBody,{title:(0,o.__)("Attributes","surecart")},React.createElement(l.PanelRow,null,React.createElement(l.TextControl,{label:(0,o.__)("Label","surecart"),value:n,onChange:e=>r({label:e})})))),React.createElement("div",i,React.createElement("label",{className:"sc-form-label"},n),React.createElement("div",{className:"sc-input-group sc-quantity-selector",style:{...a?.borderRadius?{"border-radius":a.borderRadius}:{}}},React.createElement("div",{className:"sc-input-group-text sc-quantity-selector__decrease"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},React.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),React.createElement("input",{className:"sc-form-control sc-quantity-selector__control",value:0,type:"number"}),React.createElement("div",{className:"sc-input-group-text sc-quantity-selector__increase"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},React.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),React.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))))))},icon:n})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=function(t,r,o,c){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],c=e[u][2];for(var a=!0,s=0;s<r.length;s++)(!1&c||l>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,c<l&&(l=c));if(a){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[r,o,c]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={4600:0,6464:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,c,l=r[0],a=r[1],s=r[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var u=s(n)}for(t&&t(r);i<l.length;i++)c=l[i],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(u)},r=self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[6464],(function(){return n(9504)}));o=n.O(o)}();