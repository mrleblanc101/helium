(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{329:function(e,t,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("04d6a4a5",content,!0,{sourceMap:!1})},342:function(e,t,r){"use strict";r(329)},343:function(e,t,r){var c=r(25)(!1);c.push([e.i,"section[data-v-b9cec4ce]{display:flex;flex-direction:column;position:relative;min-height:100vh;background-position:50%;background-size:cover}.section-inner[data-v-b9cec4ce]{flex-grow:1}.header-wrapper[data-v-b9cec4ce]{position:absolute;bottom:95px;color:#fff}.header-wrapper h1[data-v-b9cec4ce]{font-size:50px;margin-bottom:8px;font-weight:700}.header-wrapper a[data-v-b9cec4ce]{display:flex;grid-gap:10px;gap:10px;align-items:center;color:currentColor;font-size:30px}.grid[data-v-b9cec4ce]{display:flex;flex-wrap:wrap;margin:-15px}.grid .cell[data-v-b9cec4ce]{padding:15px}.grid .width-25[data-v-b9cec4ce]{width:25%}.grid .width-27-5[data-v-b9cec4ce]{width:27.5%}.grid .width-33[data-v-b9cec4ce]{width:33.33333%}.grid .width-45[data-v-b9cec4ce]{width:45%}.grid .width-50[data-v-b9cec4ce]{width:50%}.grid .width-66[data-v-b9cec4ce]{width:66.66666%}.grid .width-75[data-v-b9cec4ce]{width:75%}.grid img[data-v-b9cec4ce]{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=c},365:function(e,t,r){"use strict";r.r(t);var c=r(9),n=(r(50),{name:"RealisationsSlugPage",asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,c,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,c=e.params,t.next=3,r("realisations",c.slug).fetch();case 3:return n=t.sent,t.abrupt("return",{realisation:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{realisation:{}}},head:function(){return{title:"".concat(this.realisation.title," - Réalisations")}}}),o=(r(342),r(20)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{style:{backgroundImage:"url("+e.realisation.banner+")"}},[r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"header-wrapper"},[r("h1",[e._v(e._s(e.realisation.title))]),e._v(" "),r("nuxt-link",{attrs:{to:"/realisations"}},[r("svg",{attrs:{viewBox:"0 0 21 17.88",height:"18",role:"presentation",focusable:"false"}},[r("path",{attrs:{"data-name":"Tracé 1050",d:"M11.04 15.78L5.7 10.41l15.3-.03V7.44l-15.36.03 5.4-5.4L8.94 0 0 8.94l8.94 8.94z"}})]),e._v("\n                    Réalisations\n                ")])],1)])]),e._v(" "),e.realisation.gallery?r("section",[r("div",{staticClass:"section-inner max-width-container"},[r("div",{staticClass:"grid"},[e._l(e.realisation.gallery,(function(t,i){return e._l(t,(function(e,t,c){return r("div",{key:"item-"+i+"-"+c,staticClass:"cell",class:"width-"+t.replace(".","-")},[r("img",{attrs:{src:e,alt:""}})])}))}))],2)])]):e._e()])}),[],!1,null,"b9cec4ce",null);t.default=component.exports}}]);