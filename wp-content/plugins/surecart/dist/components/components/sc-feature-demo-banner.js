import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$2}from"./sc-icon2.js";const scFeatureDemoBannerCss=".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}",ScFeatureDemoBannerStyle0=scFeatureDemoBannerCss,ScFeatureDemoBanner$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.url="https://app.surecart.com/plans",this.buttonText=wp.i18n.__("Upgrade Your Plan","surecart")}render(){return h("div",{key:"a414757e4faa901653e5c49cb54ed5cdc4881e6b",class:{"sc-banner":!0}},h("p",{key:"6e64184b9e4616ae143e70cce53aac5e631d3385"},h("slot",{key:"597a7b942c56000c29e7b78c16068f4c8f8cf373"},wp.i18n.__("This is a feature demo. In order to use it, you must upgrade your plan.","surecart")),h("a",{key:"e9341dea400e75d1b132ecfa83372c4c66edc5a2",href:this.url,target:"_blank"},h("slot",{key:"b6c7b47eb1993d8821af7d6641b3876cad1b9084",name:"link"},this.buttonText," ",h("sc-icon",{key:"5952e8d32d1881985fe59060858ef4a39a7d375f",name:"arrow-right"})))))}static get style(){return ScFeatureDemoBannerStyle0}},[1,"sc-feature-demo-banner",{url:[1],buttonText:[1,"button-text"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-feature-demo-banner","sc-icon"].forEach((e=>{switch(e){case"sc-feature-demo-banner":customElements.get(e)||customElements.define(e,ScFeatureDemoBanner$1);break;case"sc-icon":customElements.get(e)||defineCustomElement$2()}}))}const ScFeatureDemoBanner=ScFeatureDemoBanner$1,defineCustomElement=defineCustomElement$1;export{ScFeatureDemoBanner,defineCustomElement};