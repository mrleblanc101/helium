(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{347:function(t,e,d){var content=d(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(37).default)("953bfc0a",content,!0,{sourceMap:!1})},359:function(t,e,d){var r=d(2),n=d(233).values;r({target:"Object",stat:!0},{values:function(t){return n(t)}})},360:function(t,e,d){"use strict";d(347)},361:function(t,e,d){var r=d(36)(!1);r.push([t.i,".section-hero[data-v-67d8cc4a]{display:flex;flex-direction:column;position:relative;min-height:100vh;overflow:hidden}.section-hero .section-inner[data-v-67d8cc4a]{flex-grow:1}.section-hero img[data-v-67d8cc4a]{display:block;position:absolute;top:0;bottom:0;min-height:100%;min-width:100%;left:0;right:0;-o-object-fit:cover;object-fit:cover;transition:transform .6s ease}.section-about .section-inner[data-v-67d8cc4a]{padding-top:0;padding-bottom:0}.header-wrapper[data-v-67d8cc4a]{position:absolute;bottom:95px;color:#fff}.header-wrapper h1[data-v-67d8cc4a]{font-size:30px;margin-bottom:8px;font-weight:700}@media(min-width:768px){.header-wrapper h1[data-v-67d8cc4a]{font-size:50px}}.header-wrapper a[data-v-67d8cc4a]{display:flex;grid-gap:10px;gap:10px;align-items:center;color:currentColor;font-size:20px}@media(min-width:768px){.header-wrapper a[data-v-67d8cc4a]{font-size:30px}}.marquee[data-v-67d8cc4a]{display:flex;white-space:nowrap;font-size:24px;padding:50px 0 40px;color:#2400ff}@media(min-width:1024px){.marquee[data-v-67d8cc4a]{padding:50px 0 120px;font-size:30px}}.about-grid[data-v-67d8cc4a]{display:grid;grid-template-columns:1fr;grid-gap:40px 5%;gap:40px 5%}@media(min-width:1024px){.about-grid[data-v-67d8cc4a]{grid-template-columns:repeat(3,1fr)}}.about-grid h2[data-v-67d8cc4a]{font-size:32px;margin-bottom:16px}@media(min-width:1024px){.about-grid h2[data-v-67d8cc4a]{font-size:40px;margin-bottom:40px}}.about-grid ul[data-v-67d8cc4a]{margin:0;padding-left:1rem}.about-grid p[data-v-67d8cc4a]{margin:0}.section-gallery .section-inner[data-v-67d8cc4a]{padding-top:60px;padding-bottom:80px}@media(min-width:1024px){.section-gallery .section-inner[data-v-67d8cc4a]{padding-top:120px;padding-bottom:180px}}.gallery-grid[data-v-67d8cc4a]{display:flex;flex-wrap:wrap;margin:-5px}@media(min-width:1024px){.gallery-grid[data-v-67d8cc4a]{margin:-15px}}.gallery-grid .cell[data-v-67d8cc4a]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;box-shadow:none;padding:5px}@media(min-width:1024px){.gallery-grid .cell[data-v-67d8cc4a]{padding:15px}}.gallery-grid .width-25[data-v-67d8cc4a]{width:100%}@media(min-width:768px){.gallery-grid .width-25[data-v-67d8cc4a]{width:25%}}.gallery-grid .width-27-5[data-v-67d8cc4a]{width:100%}@media(min-width:768px){.gallery-grid .width-27-5[data-v-67d8cc4a]{width:27.5%}}.gallery-grid .width-33[data-v-67d8cc4a]{width:100%}@media(min-width:768px){.gallery-grid .width-33[data-v-67d8cc4a]{width:33.33333%}}.gallery-grid .width-45[data-v-67d8cc4a]{width:100%}@media(min-width:768px){.gallery-grid .width-45[data-v-67d8cc4a]{width:45%}}.gallery-grid .width-50[data-v-67d8cc4a]{width:100%}@media(min-width:768px){.gallery-grid .width-50[data-v-67d8cc4a]{width:50%}}.gallery-grid .width-66[data-v-67d8cc4a]{width:100%}@media(min-width:768px){.gallery-grid .width-66[data-v-67d8cc4a]{width:66.66666%}}.gallery-grid .width-75[data-v-67d8cc4a]{width:100%}@media(min-width:768px){.gallery-grid .width-75[data-v-67d8cc4a]{width:75%}}.gallery-grid img[data-v-67d8cc4a]{position:relative;display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top left;object-position:top left;box-shadow:0 30px 60px rgba(0,0,0,.1)}.gallery-grid .responsive-embed[data-v-67d8cc4a]{position:relative;height:0;padding-bottom:56.25%}@media(min-width:768px){.gallery-grid .responsive-embed[data-v-67d8cc4a]{padding:0;height:100%}}.gallery-grid iframe[data-v-67d8cc4a]{position:absolute;top:0;left:0;width:100%;height:100%}@media(min-width:768px){.gallery-grid iframe[data-v-67d8cc4a]{position:static;height:100%;-o-object-fit:cover;object-fit:cover;padding-bottom:0}}",""]),t.exports=r},388:function(t,e,d){"use strict";d.r(e);var r=d(8),n=(d(38),d(359),d(47),{name:"RealisationsSlugPage",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var d,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=t.$content,r=t.params,e.next=3,d("realisations",r.slug).fetch();case 3:return n=e.sent,e.abrupt("return",{realisation:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{index:null,realisation:{}}},head:function(){return{title:"".concat(this.realisation.title," - Réalisations")}},computed:{gallery:function(){return this.realisation.gallery.map((function(i){return{src:Object.values(i)[0]}}))}}}),o=(d(360),d(17)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("section",{staticClass:"section-hero"},[d("NuxtImg",{attrs:{src:t.realisation.banner,alt:"",quality:60,format:"jpg"}}),t._v(" "),d("div",{staticClass:"section-inner max-width-container"},[d("div",{staticClass:"header-wrapper"},[d("h1",[t._v(t._s(t.realisation.title))]),t._v(" "),d("nuxt-link",{attrs:{to:"/realisations"}},[d("svg",{attrs:{viewBox:"0 0 21 17.88",height:"18",role:"presentation",focusable:"false"}},[d("path",{attrs:{"data-name":"Tracé 1050",d:"M11.04 15.78L5.7 10.41l15.3-.03V7.44l-15.36.03 5.4-5.4L8.94 0 0 8.94l8.94 8.94z"}})]),t._v("\n                    Réalisations\n                ")])],1)])],1),t._v(" "),d("section",{staticClass:"section-about"},[d("div",{staticClass:"marquee"},[d("client-only",[d("MarqueeText",{attrs:{duration:30,repeat:10}},t._l(t.realisation.tags,(function(e){return d("span",{key:e},[t._v(" "+t._s(e)+" • ")])})),0)],1)],1),t._v(" "),d("div",{staticClass:"section-inner max-width-container"},[d("div",{staticClass:"about-grid"},[d("div",{staticClass:"cell"},[d("h2",[t._v("Entreprise")]),t._v(" "),d("p",[t._v(t._s(t.realisation.entreprise))])]),t._v(" "),d("div",{staticClass:"cell"},[d("h2",[t._v("Contexte")]),t._v(" "),d("p",[t._v(t._s(t.realisation.contexte))])]),t._v(" "),d("div",{staticClass:"cell"},[d("h2",[t._v("Objectifs")]),t._v(" "),d("ul",t._l(t.realisation.objectifs,(function(e){return d("li",{key:e},[t._v(t._s(e))])})),0)])])])]),t._v(" "),t.realisation.gallery?d("section",{staticClass:"section-gallery"},[d("client-only",[d("CoolLightBox",{attrs:{items:t.gallery,index:t.index,slideshow:!1,gallery:!1,"close-on-click-outside-mobile":!0,"thumbs-position":"bottom"},on:{close:function(e){t.index=null}}})],1),t._v(" "),d("div",{staticClass:"section-inner max-width-container"},[d("div",{staticClass:"gallery-grid"},[t._l(t.realisation.gallery,(function(e,i){return t._l(e,(function(e,r,n){return d("button",{key:"item-"+i+"-"+n,staticClass:"cell",class:"width-"+r.replace(".","-"),attrs:{type:"button"},on:{click:function(e){t.index=i}}},[e.startsWith("http")?d("div",{staticClass:"responsive-embed widescreen"},[d("iframe",{attrs:{src:e,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):d("NuxtImg",{attrs:{src:e,alt:"",quality:60,loading:"lazy"}})],1)}))}))],2)])],1):t._e()])}),[],!1,null,"67d8cc4a",null);e.default=component.exports}}]);