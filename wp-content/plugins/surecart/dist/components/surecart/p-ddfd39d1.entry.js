import{r as e,h as t,F as s,H as a,a as r}from"./p-e97fde0a.js";import{s as o}from"./p-021b5199.js";import"./p-ba32f886.js";import{s as i,h as n,d as l,e as c,a as d,b as p}from"./p-6c2d07a0.js";import{s as u}from"./p-fab02ef6.js";import{M as m,a as y}from"./p-449324ed.js";import{a as h}from"./p-401e165e.js";import"./p-03631502.js";import"./p-9dbc54d6.js";import"./p-d3366af3.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-95325ec5.js";import"./p-6ec14893.js";import"./p-93127aa7.js";const v=":host{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative;font-family:var(--sc-font-sans)}.sc-payment-toggle-summary{line-height:1;display:flex;align-items:center;gap:0.5em;font-weight:var(--sc-font-weight-semibold)}.sc-payment-label{display:flex;justify-content:space-between}.sc-payment-instructions{color:var(--sc-color-gray-600);font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense)}.sc-payment__stripe-card-element{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative}";const f=v;const w=class{constructor(t){e(this,t);this.stripePaymentElement=undefined;this.disabledProcessorTypes=undefined;this.secureNotice=undefined;this.label=undefined;this.hideTestModeBadge=undefined}componentWillLoad(){i.disabled.processors=this.disabledProcessorTypes}renderStripe(e){const s=n("stripe")?wp.i18n.__("Credit Card (Stripe)","surecart"):wp.i18n.__("Credit Card","surecart");return t("sc-payment-method-choice",{key:e===null||e===void 0?void 0:e.id,"processor-id":"stripe",card:this.stripePaymentElement},t("span",{slot:"summary",class:"sc-payment-toggle-summary"},t("sc-icon",{name:"credit-card",style:{fontSize:"24px"},"aria-hidden":"true"}),t("span",null,s)),t("div",{class:"sc-payment__stripe-card-element"},t("slot",{name:"stripe"})))}renderPayPal(e){return t(s,null,t("sc-payment-method-choice",{key:e===null||e===void 0?void 0:e.id,"processor-id":"paypal"},t("span",{slot:"summary",class:"sc-payment-toggle-summary"},t("sc-icon",{name:"paypal",style:{width:"80px",fontSize:"24px"},"aria-hidden":"true"}),t("sc-visually-hidden",null,wp.i18n.__("PayPal","surecart"))),t("sc-card",null,t("sc-payment-selected",{label:wp.i18n.__("PayPal selected for check out.","surecart")},t("sc-icon",{slot:"icon",name:"paypal",style:{width:"80px"},"aria-hidden":"true"}),wp.i18n.__("Another step will appear after submitting your order to complete your purchase details.","surecart")))),!n("paypal")&&t("sc-payment-method-choice",{key:e===null||e===void 0?void 0:e.id,"processor-id":"paypal","method-id":"card"},t("span",{slot:"summary",class:"sc-payment-toggle-summary"},t("sc-icon",{name:"credit-card",style:{fontSize:"24px"},"aria-hidden":"true"}),t("span",null,wp.i18n.__("Credit Card","surecart"))),t("sc-card",null,t("sc-payment-selected",{label:wp.i18n.__("Credit Card selected for check out.","surecart")},t("sc-icon",{name:"credit-card",slot:"icon",style:{fontSize:"24px"},"aria-hidden":"true"}),wp.i18n.__("Another step will appear after submitting your order to complete your purchase details.","surecart")))))}renderMock(e){return t(y,{processor:e})}renderPaystack(e){var s,a;const r=n("paystack")?wp.i18n.__("Credit Card (Paystack)","surecart"):wp.i18n.__("Credit Card","surecart");if(!((s=e===null||e===void 0?void 0:e.supported_currencies)!==null&&s!==void 0?s:[]).includes((a=window===null||window===void 0?void 0:window.scData)===null||a===void 0?void 0:a.currency)){return}return t("sc-payment-method-choice",{key:e===null||e===void 0?void 0:e.id,"processor-id":"paystack"},t("span",{slot:"summary",class:"sc-payment-toggle-summary"},t("sc-icon",{name:"credit-card",style:{fontSize:"24px"},"aria-hidden":"true"}),t("span",null,r)),t("sc-card",null,t("sc-payment-selected",{label:wp.i18n.__("Credit Card selected for check out.","surecart")},t("sc-icon",{slot:"icon",name:"credit-card","aria-hidden":"true"}),wp.i18n.__("Another step will appear after submitting your order to complete your purchase details.","surecart"))),t("sc-checkout-paystack-payment-provider",null))}render(){var e,r,i,n,y,v;if(((e=o.checkout)===null||e===void 0?void 0:e.payment_method_required)===false){return null}const f=l()||(u===null||u===void 0?void 0:u.id)==="paypal"?"sc-toggles":"div";const w=c("mollie");return t(a,null,t("sc-form-control",{label:this.label,exportparts:"label, help-text, form-control"},t("div",{class:"sc-payment-label",slot:"label"},t("div",null,this.label),o.mode==="test"&&!this.hideTestModeBadge&&t("sc-tag",{type:"warning",size:"small",exportparts:"base:test-badge__base, content:test-badge__content"},wp.i18n.__("Test Mode","surecart"))),(w===null||w===void 0?void 0:w.id)?t("sc-checkout-mollie-payment",{"processor-id":w===null||w===void 0?void 0:w.id}):t(f,{collapsible:false,theme:"container"},!((r=d())===null||r===void 0?void 0:r.length)&&!((i=p())===null||i===void 0?void 0:i.length)&&t("sc-alert",{type:"info",open:true},((y=(n=window===null||window===void 0?void 0:window.scData)===null||n===void 0?void 0:n.user_permissions)===null||y===void 0?void 0:y.manage_sc_shop_settings)?t(s,null,wp.i18n.__("You do not have any processors enabled for this mode and cart. ","surecart"),t("a",{href:h(`${(v=window===null||window===void 0?void 0:window.scData)===null||v===void 0?void 0:v.admin_url}admin.php`,{page:"sc-settings",tab:"processors"}),style:{color:"var(--sc-color-gray-700)"}},wp.i18n.__("Please configure your processors","surecart")),"."):wp.i18n.__("Please contact us for payment.","surecart")),(d()||[]).map((e=>{switch(e===null||e===void 0?void 0:e.processor_type){case"stripe":return this.renderStripe(e);case"paypal":return this.renderPayPal(e);case"paystack":return this.renderPaystack(e);case"mock":return this.renderMock(e)}})),t(m,{methods:p()}))))}get el(){return r(this)}};w.style=f;export{w as sc_payment};
//# sourceMappingURL=p-ddfd39d1.entry.js.map