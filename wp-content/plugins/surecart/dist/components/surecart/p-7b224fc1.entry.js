import{r as t,c as e,h as i,a as s}from"./p-e97fde0a.js";import{s as a}from"./p-830ab1a3.js";import{a as r,h as c}from"./p-9a298389.js";import"./p-13f5e4e1.js";import{a as n,g as d}from"./p-401e165e.js";import"./p-d3366af3.js";import"./p-3f6362a4.js";import"./p-ec182234.js";const o=":host {\n  display: block;\n}\n\n.product-item-list {\n  display: grid;\n  grid-template-columns: repeat(var(--sc-product-item-list-column), 1fr);\n  gap: var(--sc-product-item-list-gap);\n}\n.product-item-list__wrapper {\n  container-type: inline-size;\n  display: grid;\n  gap: var(--sc-spacing-medium);\n}\n@container (max-width: 576px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: 1fr;\n  }\n}\n@container (min-width: 576px) and (max-width: 768px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.product-item-list__sort, .product-item-list__empty, .product-item-list__search, .product-item-list__search-tag {\n  font-size: 16px;\n}\n.product-item-list__search, .product-item-list__sort {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-item-list__loader {\n  display: grid;\n  gap: 0.88rem;\n  padding-top: var(--sc-product-item-padding-top);\n  padding-bottom: var(--sc-product-item-padding-bottom);\n  padding-left: var(--sc-product-item-padding-left);\n  padding-right: var(--sc-product-item-padding-right);\n  margin-top: var(--sc-product-item-margin-top);\n  margin-bottom: var(--sc-product-item-margin-bottom);\n  margin-left: var(--sc-product-item-margin-left);\n  margin-right: var(--sc-product-item-margin-right);\n  border: solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);\n  border-radius: var(--sc-product-item-border-radius);\n  color: var(--sc-product-title-text-color);\n  background-color: var(--sc-product-item-background-color);\n  line-height: 1;\n}\n.product-item-list__pagination {\n  padding: 40px 0 0;\n  width: 100%;\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n.product-item-list__search-tag {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__search-label {\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n\n.search-button,\n.clear-button {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--sc-transition-medium) ease-in-out;\n  cursor: pointer;\n}\n\n.product-item-list__has-search .search-button,\n.product-item-list__has-search .clear-button {\n  opacity: 1;\n  visibility: visible;\n}\n\nsc-product-item::part(image) {\n  aspect-ratio: var(--sc-product-image-aspect-ratio);\n}\n\nsc-dropdown sc-button::part(base):focus-visible {\n  border: 1px dashed var(--sc-product-item-border-color, --sc-color-gray-50);\n}\n\nsc-pagination {\n  font-size: var(--sc-pagination-font-size);\n}";const l=o;const h=class{constructor(i){t(this,i);this.scSearched=e(this,"scSearched",7);this.scProductsViewed=e(this,"scProductsViewed",7);this.ids=undefined;this.sort="created_at:desc";this.query=undefined;this.searchEnabled=true;this.sortEnabled=true;this.collectionEnabled=true;this.collectionId=undefined;this.pageTitle=undefined;this.featured=false;this.paginationEnabled=true;this.ajaxPagination=true;this.paginationAutoScroll=true;this.layoutConfig=undefined;this.paginationAlignment="center";this.limit=15;this.page=1;this.products=undefined;this.loading=false;this.busy=false;this.error=undefined;this.currentPage=1;this.currentQuery=undefined;this.pagination={total:0,total_pages:0};this.collections=undefined;this.selectedCollections=[]}handleProductsChanged(t,e){var i;const s=new Set([...(e||[]).map((t=>t.id)),...(t||[]).map((t=>t.id))]);if((t===null||t===void 0?void 0:t.length)===(e===null||e===void 0?void 0:e.length)&&s.size===t.length){return}const a=[this.pageTitle,this.paginationEnabled?wp.i18n.sprintf(wp.i18n.__("Page %d","surecart"),this.currentPage):undefined,this.sort?this.renderSortName():undefined,this.query||((i=this.selectedCollections)===null||i===void 0?void 0:i.length)?wp.i18n.__("Search results","surecart"):undefined].filter((t=>!!t)).join(" - ");this.scProductsViewed.emit({products:this.products,pageTitle:a,collectionId:this.collectionId})}componentWillLoad(){var t;if(!((t=this===null||this===void 0?void 0:this.products)===null||t===void 0?void 0:t.length)){this.getProducts()}else{this.handleProductsChanged(this.products)}if(this.collectionEnabled){this.getCollections()}}doPagination(t){if(this.ajaxPagination){this.page=t;this.updateProducts();this.paginationAutoScroll&&this.el.scrollIntoView({behavior:"smooth"});return}const e=n(location.href,{"product-page":t});window.location.replace(e)}async getProducts(){const{"product-page":t}=d(window.location.href);this.page=this.paginationEnabled&&t?parseInt(t):1;try{this.loading=true;await this.fetchProducts()}catch(t){console.error(t)}finally{this.loading=false}}async getCollections(){try{this.collections=await r({path:n("surecart/v1/product_collections/",{per_page:100})})}catch(t){console.error(t)}}async handleSortChange(){this.page=1;this.updateProducts()}async updateProducts(t=false){var e;try{this.busy=true;await this.fetchProducts();if(!!this.query&&t){this.scSearched.emit({searchString:this.query,searchResultCount:(e=this.products)===null||e===void 0?void 0:e.length,searchResultIds:this.products.map((t=>t.id))})}}catch(t){console.log("error");console.error(t);this.error=t.message||wp.i18n.__("An unknown error occurred.","surecart")}finally{this.busy=false}}handleIdsChange(){if(this.debounce!==null){clearTimeout(this.debounce);this.debounce=null}this.debounce=window.setTimeout((()=>{this.updateProducts();this.debounce=null}),200)}async fetchProducts(){var t,e;let i=((t=this.selectedCollections)===null||t===void 0?void 0:t.map((t=>t.id)))||[];if(this.collectionId){i=[this.collectionId]}try{const t=await r({path:n(`surecart/v1/products/`,{expand:["prices","featured_product_media","product_medias","product_media.media","variants"],archived:false,status:["published"],per_page:this.limit,page:this.page,sort:this.sort,product_collection_ids:i,...this.featured?{featured:true}:{},...((e=this.ids)===null||e===void 0?void 0:e.length)?{ids:this.ids}:{},...this.query?{query:this.query}:{}}),parse:false});this.currentQuery=this.query;this.pagination={total:parseInt(t.headers.get("X-WP-Total")),total_pages:parseInt(t.headers.get("X-WP-TotalPages"))};this.products=await t.json();if(!!i.length||!!this.query){a(wp.i18n.sprintf(wp.i18n.__("%s products found","surecart"),this.pagination.total))}}catch(t){await c(t).then((()=>this.fetchProducts())).catch((t=>{this.error=t.message||wp.i18n.__("An unknown error occurred.","surecart")}))}}renderSortName(){switch(this.sort){case"cataloged_at:desc":return wp.i18n.__("Latest","surecart");case"cataloged_at:asc":return wp.i18n.__("Oldest","surecart");case"name:asc":return wp.i18n.__("Alphabetical, A-Z","surecart");case"name:desc":return wp.i18n.__("Alphabetical, Z-A","surecart");default:return wp.i18n.__("Sort","surecart")}}toggleSelectCollection(t){if(!this.selectedCollections.find((e=>e.id===t.id))){this.selectedCollections=[...this.selectedCollections,t]}else{this.selectedCollections=this.selectedCollections.filter((e=>e.id!==t.id))}}getCollectionsAfterFiltered(){var t;return((t=this.collections)!==null&&t!==void 0?t:[]).filter((t=>!this.selectedCollections.some((e=>e.id===t.id))))}isPaginationAvailable(){var t;return!!((t=this.products)===null||t===void 0?void 0:t.length)&&this.pagination.total>this.products.length&&this.paginationEnabled}render(){var t,e,s,a,r,c;return i("div",{key:"6408c64fbd0b59e9aa1b0359b0dfcc490f4a8f2e",class:{"product-item-list__wrapper":true,"product-item-list__has-search":!!this.query}},this.error&&i("sc-alert",{key:"cb15953f986ef3f1d88f3f837f50d3ce47a3216c",type:"danger",open:true},this.error),(this.searchEnabled||this.sortEnabled||this.collectionEnabled)&&i("div",{key:"a101ad04a589e86fa9f0c8d093d41c10a40866cd",class:"product-item-list__header"},i("div",{key:"e55564b57eaa31b336b9f70820e8394790529b22",class:"product-item-list__controls"},i("div",{key:"23123b910e85dc008e9d7984ec18a6608c65598c",class:"product-item-list__sort"},this.sortEnabled&&i("sc-dropdown",{key:"83eadbcb43854c20f7bab062471e60e8076cd275",style:{"--panel-width":"15em"}},i("sc-button",{key:"79671e76fb3e790e7938bd48b12dffb8a491efe7",type:"text",caret:true,slot:"trigger"},i("sc-visually-hidden",{key:"b807aa612abcea288ff2ea851d6e94f6e8e09c22"},wp.i18n.__("Dropdown to sort products.","surecart")," "),this.renderSortName(),i("sc-visually-hidden",{key:"d3f51057f0fb170e8465c5d938551989ef0e335e"}," ",wp.i18n.__("selected.","surecart"))),i("sc-menu",{key:"1748bb7c348d2984a531f3eeaa5b3b17b3687c8c","aria-label":wp.i18n.__("Sort Products","surecart")},i("sc-menu-item",{key:"53f7e6fbfb1e390e19435a4a5ba7fd9c35f05fa9","aria-label":wp.i18n.__("Sort by latest","surecart"),onClick:()=>this.sort="cataloged_at:desc"},wp.i18n.__("Latest","surecart")),i("sc-menu-item",{key:"f55715b201942ca079ac51d04887071833c3e9ba","aria-label":wp.i18n.__("Sort by oldest","surecart"),onClick:()=>this.sort="cataloged_at:asc"},wp.i18n.__("Oldest","surecart")),i("sc-menu-item",{key:"2ddd3d99ece189731314d33cfea794aa2cb9c80f","aria-label":wp.i18n.__("Sort by name, A to Z","surecart"),onClick:()=>this.sort="name:asc"},wp.i18n.__("Alphabetical, A-Z","surecart")),i("sc-menu-item",{key:"4003d5a412b3d0ed9a9607396632d0c37bc0acc4","aria-label":wp.i18n.__("Sort by name, Z to A","surecart"),onClick:()=>this.sort="name:desc"},wp.i18n.__("Alphabetical, Z-A","surecart")))),this.collectionEnabled&&((t=this.collections)!==null&&t!==void 0?t:[]).length>0&&i("sc-dropdown",{key:"5d802aad1f066a874d7712147ed19e1a7089c158",style:{"--panel-width":"15rem"}},i("sc-button",{key:"fcb4357e8da11867435a290fb7b1b177f8536b03",type:"text",caret:true,slot:"trigger"},i("sc-visually-hidden",{key:"38c5edb5b1dd1424ac47ad7ec110e93e854c696b"},wp.i18n.sprintf(wp.i18n.__("Dropdown to filter products by collection. %s selected.","surecart"),((e=this.selectedCollections)===null||e===void 0?void 0:e.length)?this.selectedCollections.map((t=>t===null||t===void 0?void 0:t.name)).join(","):wp.i18n.__("None","surecart"))),i("span",{key:"5b9bc299add9b062b54a9bc1e8fe706642b0948e","aria-hidden":true}," ",wp.i18n.__("Filter","surecart"))),i("sc-menu",{key:"1fc5548d30df5fc47ca85c340becbbca97fb9a28","aria-label":wp.i18n.__("Filter products","surecart")},((s=this.collections)!==null&&s!==void 0?s:[]).map((t=>i("sc-menu-item",{checked:this.selectedCollections.some((e=>(e===null||e===void 0?void 0:e.id)===(t===null||t===void 0?void 0:t.id))),onClick:()=>this.toggleSelectCollection(t),key:t===null||t===void 0?void 0:t.id,"aria-label":wp.i18n.sprintf(wp.i18n.__("Filter by %s","surecart"),t===null||t===void 0?void 0:t.name)},t.name)))))),i("div",{key:"a1504c73a5d0c071ab9195b89db82904de4e1da5",class:"product-item-list__search"},this.searchEnabled&&(((a=this.query)===null||a===void 0?void 0:a.length)&&this.query===this.currentQuery?i("div",{class:"product-item-list__search-tag"},i("div",{class:"product-item-list__search-label"},wp.i18n.__("Search Results:","surecart")),i("sc-tag",{clearable:true,onScClear:()=>{this.query="";this.currentQuery="";this.updateProducts()},"aria-label":wp.i18n.sprintf(wp.i18n.__("Searched for %s. Press space to clear search.","surecart"),this.query)},this.query)):i("sc-input",{type:"text",placeholder:wp.i18n.__("Search","surecart"),size:"small",onKeyUp:t=>{if(t.key==="Enter"){this.query=t.target.value;this.updateProducts(true)}},value:this.query,clearable:true},this.query?i("sc-icon",{class:"clear-button",slot:"prefix",name:"x",onClick:()=>{this.query=""}}):i("sc-icon",{slot:"prefix",name:"search"}),i("sc-button",{class:"search-button",type:"link",slot:"suffix",busy:this.busy,onClick:()=>{this.updateProducts(true)}},wp.i18n.__("Search","surecart")))))),this.collectionEnabled&&this.selectedCollections.length>0&&i("div",{key:"03a75bc5384dab3ffad8711a452a6ac24d5ab50a",class:"product-item-list__search-tag"},this.selectedCollections.map((t=>i("sc-tag",{key:t===null||t===void 0?void 0:t.id,clearable:true,onScClear:()=>{this.toggleSelectCollection(t)}},t===null||t===void 0?void 0:t.name))))),!((r=this.products)===null||r===void 0?void 0:r.length)&&!this.loading&&i("sc-empty",{key:"04bc5a3be8805ed387e9df841e4e34df3f951439",class:"product-item-list__empty",icon:"shopping-bag"},wp.i18n.__("No products found.","surecart")),i("section",{key:"1b11f9a08ae5f231c477799ebd6e3c12b6d2ee45",class:"product-item-list","aria-label":wp.i18n.__("Product list","surecart")},this.loading?[...Array(((c=this.products)===null||c===void 0?void 0:c.length)||this.limit||10)].map(((t,e)=>i("div",{class:"product-item-list__loader",key:e},(this.layoutConfig||[]).map((t=>{var e,s;switch(t.blockName){case"surecart/product-item-title":return i("div",{style:{textAlign:"var(--sc-product-title-align)"}},i("sc-skeleton",{style:{width:"80%",display:"inline-block"}}));case"surecart/product-item-image":return i("sc-skeleton",{style:{width:"100%",minHeight:"90%",aspectRatio:(s=(e=t.attributes)===null||e===void 0?void 0:e.ratio)!==null&&s!==void 0?s:"1/1.4","--sc-border-radius-pill":"12px",display:"inline-block"}});case"surecart/product-item-price":return i("div",{style:{textAlign:"var(--sc-product-price-align)"}},i("sc-skeleton",{style:{width:"40%",display:"inline-block"}}));default:return null}}))))):(this.products||[]).map(((t,e)=>i("sc-product-item",{key:t===null||t===void 0?void 0:t.id,...this.products.length-1===e?{"aria-label":wp.i18n.sprintf(wp.i18n.__("You have reached the end of product list. %s","surecart"),this.isPaginationAvailable()?wp.i18n.__("Press tab to browse more products using pagination.","surecart"):wp.i18n.__("No more products to browse.","surecart"))}:{},exportparts:"title, price, image",product:t,layoutConfig:this.layoutConfig})))),this.isPaginationAvailable()&&i("div",{key:"293890b47fc0c00064c9e7c4b480b7e7ccf75b2c",class:{"product-item-list__pagination":true,"--is-aligned-left":this.paginationAlignment==="left","--is-aligned-center":this.paginationAlignment==="center","--is-aligned-right":this.paginationAlignment==="right"}},i("sc-pagination",{key:"4c80a73728002f933d48642395cc026d98d39198",page:this.page,perPage:this.limit,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:this.limit,onScNextPage:()=>this.doPagination(this.page+1),onScPrevPage:()=>this.doPagination(this.page-1)})),(this.busy||this.loading)&&i("sc-block-ui",{key:"ba5a393b08ea081b7dfbcdc873ae42271c28da4b"}))}get el(){return s(this)}static get watchers(){return{products:["handleProductsChanged"],sort:["handleSortChange"],selectedCollections:["handleSortChange"],query:["handleSortChange"],ids:["handleIdsChange"],limit:["handleIdsChange"],featured:["handleIdsChange"]}}};h.style=l;export{h as sc_product_item_list};
//# sourceMappingURL=p-7b224fc1.entry.js.map