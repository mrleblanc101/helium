(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{334:function(t,e,r){var content=r(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("1e09b6d8",content,!0,{sourceMap:!1})},347:function(t,e,r){var n=r(2),d=r(216).values;n({target:"Object",stat:!0},{values:function(t){return d(t)}})},348:function(t,e,r){"use strict";r(334)},349:function(t,e,r){var n=r(25)(!1);n.push([t.i,".section-hero[data-v-2cf36ff3]{display:flex;flex-direction:column;position:relative;min-height:100vh;background-position:50%;background-size:cover}.section-hero .section-inner[data-v-2cf36ff3]{flex-grow:1}.section-about .section-inner[data-v-2cf36ff3]{padding-top:0;padding-bottom:0}.header-wrapper[data-v-2cf36ff3]{position:absolute;bottom:95px;color:#fff}.header-wrapper h1[data-v-2cf36ff3]{font-size:30px;margin-bottom:8px;font-weight:700}@media(min-width:768px){.header-wrapper h1[data-v-2cf36ff3]{font-size:50px}}.header-wrapper a[data-v-2cf36ff3]{display:flex;grid-gap:10px;gap:10px;align-items:center;color:currentColor;font-size:20px}@media(min-width:768px){.header-wrapper a[data-v-2cf36ff3]{font-size:30px}}.marquee[data-v-2cf36ff3]{display:flex;white-space:nowrap;font-size:24px;padding:50px 0 40px;color:#2400ff}@media(min-width:1024px){.marquee[data-v-2cf36ff3]{padding:50px 0 120px;font-size:30px}}.about-grid[data-v-2cf36ff3]{display:grid;grid-template-columns:1fr;grid-gap:40px 5%;gap:40px 5%}@media(min-width:1024px){.about-grid[data-v-2cf36ff3]{grid-template-columns:repeat(3,1fr)}}.about-grid h2[data-v-2cf36ff3]{font-size:32px;margin-bottom:16px}@media(min-width:1024px){.about-grid h2[data-v-2cf36ff3]{font-size:40px;margin-bottom:40px}}.about-grid ul[data-v-2cf36ff3]{margin:0;padding-left:1rem}.about-grid p[data-v-2cf36ff3]{margin:0}.section-gallery .section-inner[data-v-2cf36ff3]{padding-top:60px;padding-bottom:80px}@media(min-width:1024px){.section-gallery .section-inner[data-v-2cf36ff3]{padding-top:120px;padding-bottom:180px}}.gallery-grid[data-v-2cf36ff3]{display:flex;flex-wrap:wrap;margin:-5px}@media(min-width:1024px){.gallery-grid[data-v-2cf36ff3]{margin:-15px}}.gallery-grid .cell[data-v-2cf36ff3]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;box-shadow:none;padding:5px}@media(min-width:1024px){.gallery-grid .cell[data-v-2cf36ff3]{padding:15px}}.gallery-grid .width-25[data-v-2cf36ff3]{width:100%}@media(min-width:768px){.gallery-grid .width-25[data-v-2cf36ff3]{width:25%}}.gallery-grid .width-27-5[data-v-2cf36ff3]{width:100%}@media(min-width:768px){.gallery-grid .width-27-5[data-v-2cf36ff3]{width:27.5%}}.gallery-grid .width-33[data-v-2cf36ff3]{width:100%}@media(min-width:768px){.gallery-grid .width-33[data-v-2cf36ff3]{width:33.33333%}}.gallery-grid .width-45[data-v-2cf36ff3]{width:100%}@media(min-width:768px){.gallery-grid .width-45[data-v-2cf36ff3]{width:45%}}.gallery-grid .width-50[data-v-2cf36ff3]{width:100%}@media(min-width:768px){.gallery-grid .width-50[data-v-2cf36ff3]{width:50%}}.gallery-grid .width-66[data-v-2cf36ff3]{width:100%}@media(min-width:768px){.gallery-grid .width-66[data-v-2cf36ff3]{width:66.66666%}}.gallery-grid .width-75[data-v-2cf36ff3]{width:100%}@media(min-width:768px){.gallery-grid .width-75[data-v-2cf36ff3]{width:75%}}.gallery-grid img[data-v-2cf36ff3]{display:block;height:100%;-o-object-fit:cover;object-fit:cover}.gallery-grid iframe[data-v-2cf36ff3],.gallery-grid img[data-v-2cf36ff3]{width:100%;box-shadow:0 30px 60px rgba(0,0,0,.1)}.gallery-grid iframe[data-v-2cf36ff3]{height:0;padding-bottom:56.25%}@media(min-width:768px){.gallery-grid iframe[data-v-2cf36ff3]{height:100%;-o-object-fit:cover;object-fit:cover;padding-bottom:0}}",""]),t.exports=n},371:function(t,e,r){"use strict";r.r(e);var n=r(9),d=(r(45),r(347),r(50),{name:"RealisationsSlugPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("realisations",n.slug).fetch();case 3:return d=e.sent,e.abrupt("return",{realisation:d});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{index:null,realisation:{}}},head:function(){return{title:"".concat(this.realisation.title," - Réalisations")}},computed:{gallery:function(){return this.realisation.gallery.map((function(i){return{src:Object.values(i)[0]}}))}}}),o=(r(348),r(20)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section-hero",style:{backgroundImage:"url("+t.realisation.banner+")"}},[r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"header-wrapper"},[r("h1",[t._v(t._s(t.realisation.title))]),t._v(" "),r("nuxt-link",{attrs:{to:"/realisations"}},[r("svg",{attrs:{viewBox:"0 0 21 17.88",height:"18",role:"presentation",focusable:"false"}},[r("path",{attrs:{"data-name":"Tracé 1050",d:"M11.04 15.78L5.7 10.41l15.3-.03V7.44l-15.36.03 5.4-5.4L8.94 0 0 8.94l8.94 8.94z"}})]),t._v("\n                    Réalisations\n                ")])],1)])]),t._v(" "),r("section",{staticClass:"section-about"},[r("div",{staticClass:"marquee"},[r("client-only",[r("MarqueeText",{attrs:{duration:30,repeat:10}},t._l(t.realisation.tags,(function(e){return r("span",{key:e},[t._v(" "+t._s(e)+" • ")])})),0)],1)],1),t._v(" "),r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"about-grid"},[r("div",{staticClass:"cell"},[r("h2",[t._v("Entreprise")]),t._v(" "),r("p",[t._v(t._s(t.realisation.entreprise))])]),t._v(" "),r("div",{staticClass:"cell"},[r("h2",[t._v("Contexte")]),t._v(" "),r("p",[t._v(t._s(t.realisation.contexte))])]),t._v(" "),r("div",{staticClass:"cell"},[r("h2",[t._v("Objectifs")]),t._v(" "),r("ul",t._l(t.realisation.objectifs,(function(e){return r("li",{key:e},[t._v(t._s(e))])})),0)])])])]),t._v(" "),t.realisation.gallery?r("section",{staticClass:"section-gallery"},[r("client-only",[r("CoolLightBox",{attrs:{items:t.gallery,index:t.index,slideshow:!1,gallery:!1,"close-on-click-outside-mobile":!0,"thumbs-position":"bottom"},on:{close:function(e){t.index=null}}})],1),t._v(" "),r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"gallery-grid"},[t._l(t.realisation.gallery,(function(e,i){return t._l(e,(function(e,n,d){return r("button",{key:"item-"+i+"-"+d,staticClass:"cell",class:"width-"+n.replace(".","-"),attrs:{type:"button"},on:{click:function(e){t.index=i}}},[e.startsWith("http")?r("iframe",{attrs:{src:e,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):r("img",{attrs:{src:e,alt:""}})])}))}))],2)])],1):t._e()])}),[],!1,null,"2cf36ff3",null);e.default=component.exports}}]);