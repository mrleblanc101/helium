(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{322:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("b0ce3098",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n(322)},334:function(t,e,n){var r=n(29)(!1);r.push([t.i,'.section-title .section-inner[data-v-779f9160]{display:flex;flex-direction:column;align-items:center;justify-content:center}.section-title .section-wrapper[data-v-779f9160]{margin:50vh 0 0;width:100%;text-align:center;align-self:flex-end;transform:translateY(-50%)}@media(min-width:768px){.section-title .section-wrapper[data-v-779f9160]{text-align:left;max-width:650px;margin:50vh 9% 0}}.section-title h1[data-v-779f9160]{font-size:20px;color:#2400ff;font-weight:400}@media(min-width:768px){.section-title h1[data-v-779f9160]{font-size:50px}}.section-title p[data-v-779f9160]{font-size:16px}@media(min-width:768px){.section-title p[data-v-779f9160]{font-size:24px}}.section-tags[data-v-779f9160]{background-color:#2400ff;color:#fff}.section-tags .section-inner[data-v-779f9160]{display:flex;justify-content:center;padding:52px 0}@media(min-width:768px){.section-tags .section-inner[data-v-779f9160]{padding:104px 0}}.section-tags ul[data-v-779f9160]{display:inline-grid;margin:0;grid-template-columns:1fr;grid-gap:16px;gap:16px;padding:0;list-style:none;font-size:16px}@media(min-width:768px){.section-tags ul[data-v-779f9160]{font-size:30px;grid-gap:36px 104px;gap:36px 104px}}@media(min-width:1024px){.section-tags ul[data-v-779f9160]{grid-template-columns:1fr 1fr}}.section-tags li[data-v-779f9160]{display:flex}.section-tags li[data-v-779f9160]:before{content:"•";margin-right:12px}.section-details ul[data-v-779f9160]{list-style:none}.section-details li[data-v-779f9160]{display:flex;align-items:center}.section-details li[data-v-779f9160]:nth-child(odd){flex-direction:row-reverse}',""]),t.exports=r},355:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(50),{name:"ExpertiseSlugPage",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("expertises",r.slug).limit(1).fetch();case 3:return c=e.sent,e.abrupt("return",{expertise:c});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{expertise:{}}}}),o=(n(333),n(20)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section-title"},[n("div",{staticClass:"section-inner max-width-container"},[n("div",{staticClass:"section-wrapper"},[n("h1",[t._v("\n                    "+t._s(t.expertise.title)+"\n                ")]),t._v(" "),n("p",[t._v(t._s(t.expertise.description))])])])]),t._v(" "),n("div",{staticClass:"section-tags"},[n("div",{staticClass:"section-inner max-width-container"},[n("ul",t._l(t.expertise.tags,(function(e){return n("li",{key:e},[t._v("\n                    "+t._s(e)+"\n                ")])})),0)])]),t._v(" "),n("div",{staticClass:"section-details"},[n("div",{staticClass:"section-inner max-width-container"},[n("ul",t._l(t.expertise.details,(function(e){return n("li",{key:e.title},[n("img",{attrs:{src:e.img,alt:"",width:"200",height:"200"}}),t._v(" "),n("div",[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))])])])})),0)])])])}),[],!1,null,"779f9160",null);e.default=component.exports}}]);