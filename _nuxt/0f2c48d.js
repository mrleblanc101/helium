(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{346:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("44a2c317",content,!0,{sourceMap:!1})},358:function(t,e,r){var n=r(2),o=r(233).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},359:function(t,e,r){"use strict";r(346)},360:function(t,e,r){var n=r(36)(!1);n.push([t.i,".section-hero[data-v-4c1ab88a]{display:flex;flex-direction:column;position:relative;min-height:100vh;overflow:hidden}.section-hero .section-inner[data-v-4c1ab88a]{flex-grow:1}.section-hero img[data-v-4c1ab88a]{display:block;position:absolute;top:0;bottom:0;min-height:100%;min-width:100%;left:0;right:0;-o-object-fit:cover;object-fit:cover;transition:transform .6s ease}.section-about .section-inner[data-v-4c1ab88a]{padding-top:0;padding-bottom:0}.header-wrapper[data-v-4c1ab88a]{position:absolute;bottom:95px;color:#fff}.header-wrapper h1[data-v-4c1ab88a]{font-size:30px;margin-bottom:8px;font-weight:700}@media(min-width:768px){.header-wrapper h1[data-v-4c1ab88a]{font-size:50px}}.header-wrapper a[data-v-4c1ab88a]{display:flex;grid-gap:10px;gap:10px;align-items:center;color:currentColor;font-size:20px}@media(min-width:768px){.header-wrapper a[data-v-4c1ab88a]{font-size:30px}}.marquee[data-v-4c1ab88a]{display:flex;white-space:nowrap;font-size:24px;padding:50px 0 40px;color:#2400ff}@media(min-width:1024px){.marquee[data-v-4c1ab88a]{padding:50px 0 120px;font-size:30px}}.about-grid[data-v-4c1ab88a]{display:grid;grid-template-columns:1fr;grid-gap:40px 5%;gap:40px 5%}@media(min-width:1024px){.about-grid[data-v-4c1ab88a]{grid-template-columns:repeat(3,1fr)}}.about-grid h2[data-v-4c1ab88a]{font-size:32px;margin-bottom:16px}@media(min-width:1024px){.about-grid h2[data-v-4c1ab88a]{font-size:40px;margin-bottom:40px}}.about-grid ul[data-v-4c1ab88a]{margin:0;padding-left:1rem}.about-grid p[data-v-4c1ab88a]{margin:0}.section-gallery .section-inner[data-v-4c1ab88a]{padding-top:60px;padding-bottom:80px}@media(min-width:1024px){.section-gallery .section-inner[data-v-4c1ab88a]{padding-top:120px;padding-bottom:180px}}.gallery-grid[data-v-4c1ab88a]{display:flex;flex-wrap:wrap;margin:-5px}@media(min-width:1024px){.gallery-grid[data-v-4c1ab88a]{margin:-15px}}.gallery-grid .cell[data-v-4c1ab88a]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;box-shadow:none;padding:5px}@media(min-width:1024px){.gallery-grid .cell[data-v-4c1ab88a]{padding:15px}}.gallery-grid .width-25[data-v-4c1ab88a]{width:100%}@media(min-width:768px){.gallery-grid .width-25[data-v-4c1ab88a]{width:25%}}.gallery-grid .width-27-5[data-v-4c1ab88a]{width:100%}@media(min-width:768px){.gallery-grid .width-27-5[data-v-4c1ab88a]{width:27.5%}}.gallery-grid .width-33[data-v-4c1ab88a]{width:100%}@media(min-width:768px){.gallery-grid .width-33[data-v-4c1ab88a]{width:33.33333%}}.gallery-grid .width-45[data-v-4c1ab88a]{width:100%}@media(min-width:768px){.gallery-grid .width-45[data-v-4c1ab88a]{width:45%}}.gallery-grid .width-50[data-v-4c1ab88a]{width:100%}@media(min-width:768px){.gallery-grid .width-50[data-v-4c1ab88a]{width:50%}}.gallery-grid .width-66[data-v-4c1ab88a]{width:100%}@media(min-width:768px){.gallery-grid .width-66[data-v-4c1ab88a]{width:66.66666%}}.gallery-grid .width-75[data-v-4c1ab88a]{width:100%}@media(min-width:768px){.gallery-grid .width-75[data-v-4c1ab88a]{width:75%}}.gallery-grid img[data-v-4c1ab88a]{position:relative;display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top left;object-position:top left;box-shadow:0 30px 60px rgba(0,0,0,.1)}.gallery-grid .responsive-embed[data-v-4c1ab88a]{position:relative;height:0;padding-bottom:56.25%}@media(min-width:768px){.gallery-grid .responsive-embed[data-v-4c1ab88a]{padding:0;height:100%}}.gallery-grid iframe[data-v-4c1ab88a]{position:absolute;top:0;left:0;width:100%;height:100%}@media(min-width:768px){.gallery-grid iframe[data-v-4c1ab88a]{position:static;height:100%;-o-object-fit:cover;object-fit:cover;padding-bottom:0}}",""]),t.exports=n},388:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(358),r(47),{name:"RealisationsSlugPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("realisations",n.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{realisation:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{index:null}},head:function(){return{title:"".concat(this.realisation.title," - Réalisations")}},computed:{gallery:function(){return this.realisation.gallery.map((function(i){return{src:Object.values(i)[0]}}))}}}),d=(r(359),r(17)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section-hero"},[r("NuxtImg",{attrs:{src:t.realisation.banner,alt:"",quality:60,format:"jpg"}}),t._v(" "),r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"header-wrapper"},[r("h1",[t._v(t._s(t.realisation.title))]),t._v(" "),r("nuxt-link",{attrs:{to:"/realisations"}},[r("svg",{attrs:{viewBox:"0 0 21 17.88",height:"18",role:"presentation",focusable:"false"}},[r("path",{attrs:{"data-name":"Tracé 1050",d:"M11.04 15.78L5.7 10.41l15.3-.03V7.44l-15.36.03 5.4-5.4L8.94 0 0 8.94l8.94 8.94z"}})]),t._v("\n                    Réalisations\n                ")])],1)])],1),t._v(" "),r("section",{staticClass:"section-about"},[r("div",{staticClass:"marquee"},[r("client-only",[r("MarqueeText",{attrs:{duration:30,repeat:10}},t._l(t.realisation.tags,(function(e){return r("span",{key:e},[t._v(" "+t._s(e)+" • ")])})),0)],1)],1),t._v(" "),r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"about-grid"},[r("div",{staticClass:"cell"},[r("h2",[t._v("Entreprise")]),t._v(" "),r("p",[t._v(t._s(t.realisation.entreprise))])]),t._v(" "),r("div",{staticClass:"cell"},[r("h2",[t._v("Contexte")]),t._v(" "),r("p",[t._v(t._s(t.realisation.contexte))])]),t._v(" "),r("div",{staticClass:"cell"},[r("h2",[t._v("Objectifs")]),t._v(" "),r("ul",t._l(t.realisation.objectifs,(function(e){return r("li",{key:e},[t._v(t._s(e))])})),0)])])])]),t._v(" "),t.realisation.gallery?r("section",{staticClass:"section-gallery"},[r("client-only",[r("CoolLightBox",{attrs:{items:t.gallery,index:t.index,slideshow:!1,gallery:!1,"close-on-click-outside-mobile":!0,"thumbs-position":"bottom"},on:{close:function(e){t.index=null}}})],1),t._v(" "),r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"gallery-grid"},[t._l(t.realisation.gallery,(function(e,i){return t._l(e,(function(e,n,o){return r("button",{key:"item-"+i+"-"+o,staticClass:"cell",class:"width-"+n.replace(".","-"),attrs:{type:"button"},on:{click:function(e){t.index=i}}},[e.startsWith("http")?r("div",{staticClass:"responsive-embed widescreen"},[r("iframe",{attrs:{src:e,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):r("NuxtImg",{attrs:{src:e,alt:"",quality:60,loading:"lazy"}})],1)}))}))],2)])],1):t._e()])}),[],!1,null,"4c1ab88a",null);e.default=component.exports}}]);