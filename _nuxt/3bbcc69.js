(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{332:function(t,e,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("2352e42e",content,!0,{sourceMap:!1})},343:function(t,e,r){"use strict";r(332)},344:function(t,e,r){var n=r(25)(!1);n.push([t.i,".page-header[data-v-58c4cf53]{min-height:400px;display:flex;align-items:center;justify-content:center;width:100%;padding-top:80px}@media(min-width:768px){.page-header[data-v-58c4cf53]{min-height:600px}}h1[data-v-58c4cf53]{max-width:1056px;width:100%;margin:0;font-size:30px}@media(min-width:768px){h1[data-v-58c4cf53]{font-size:60px}}@media(max-width:1023px){h1 .vue-typer[data-v-58c4cf53]{display:block}}h1 .vue-typer[data-v-58c4cf53]  .typed{color:#2400ff}.project[data-v-58c4cf53]{display:flex;justify-content:flex-start;align-items:center;font-size:24px;margin:0 0 12%}@media(min-width:768px){.project[data-v-58c4cf53]{margin:0 0 8%;font-size:50px}}.project a[data-v-58c4cf53]{color:#2400ff}.project .cell[data-v-58c4cf53]{position:relative;width:60%;border-radius:10px;z-index:1;overflow:hidden}@media(min-width:768px){.project .cell[data-v-58c4cf53]{width:47%}}.project .cell img[data-v-58c4cf53]{display:block;transition:transform .3s ease}.project .cell:hover img[data-v-58c4cf53]{transform:scale(1.05)}.project .marquee-text-wrap[data-v-58c4cf53]{position:absolute;left:59vw;width:41vw;transform:translateY(-50%)}@media(min-width:768px){.project .marquee-text-wrap[data-v-58c4cf53]{left:47vw;width:53vw}}.project[data-v-58c4cf53]:nth-child(2n){justify-content:flex-end}.project:nth-child(2n) .marquee-text-wrap[data-v-58c4cf53]{right:59vw;left:auto}@media(min-width:768px){.project:nth-child(2n) .marquee-text-wrap[data-v-58c4cf53]{right:47vw;left:auto}}",""]),t.exports=n},369:function(t,e,r){"use strict";r.r(e);var n=r(9),c=(r(50),{name:"RealisationsIndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("realisations").sortBy("order").fetch();case 3:return n=e.sent,e.abrupt("return",{projects:n});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Réalisations"}}),o=(r(343),r(20)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"max-width-container"},[r("div",{staticClass:"page-header"},[r("h1",[r("client-only",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v("Notre impact chez les marques")]},proxy:!0}])},[t._v("\n                    Notre impact chez les\n                    "),r("VueTyper",{attrs:{text:["marques","entreprises","compagnies","entrepreneurs","organisations"],"initial-action":"erasing","erase-style":"backspace","type-delay":150,"pre-type-delay":1e3,"pre-erase-delay":1500,"erase-delay":150}})],1)],1)]),t._v(" "),r("section",{staticClass:"section-inner"},t._l(t.projects,(function(e,n){return r("div",{key:e.slug,staticClass:"project"},[r("nuxt-link",{attrs:{to:e.path}},[r("client-only",[r("MarqueeText",{attrs:{duration:15,repeat:50,reverse:!(n%2)}},[t._v("\n                            "+t._s(e.title)+" • \n                        ")])],1)],1),t._v(" "),r("nuxt-link",{staticClass:"cell",attrs:{to:e.path}},[r("img",{attrs:{src:e.banner,width:"16",heigh:"9",loading:"lazy"}})])],1)})),0)])])}),[],!1,null,"58c4cf53",null);e.default=component.exports}}]);