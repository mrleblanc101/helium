(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{315:function(e,t,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("442b93b8",content,!0,{sourceMap:!1})},322:function(e,t,n){"use strict";n(315)},323:function(e,t,n){var r=n(34)(!1);r.push([e.i,"section[data-v-17e6c304]{flex-direction:column}.page-header[data-v-17e6c304],section[data-v-17e6c304]{display:flex;align-items:center}.page-header[data-v-17e6c304]{min-height:400px;justify-content:center;width:100%;padding-top:80px}@media(min-width:768px){.page-header[data-v-17e6c304]{min-height:600px}}h1[data-v-17e6c304]{max-width:1056px;width:100%;font-weight:400;margin:0;font-size:30px}@media(min-width:768px){h1[data-v-17e6c304]{font-size:60px}}@media(max-width:1023px){h1[data-v-17e6c304]  .vue-typer{display:block}}h1[data-v-17e6c304]  .typed{color:#2400ff}.project[data-v-17e6c304]{display:flex;justify-content:flex-start;align-items:center;font-size:24px;margin:0 0 12%}@media(min-width:768px){.project[data-v-17e6c304]{margin:0 0 8%;font-size:50px}}.project a[data-v-17e6c304]{color:#2400ff;text-decoration:none}.project .cell[data-v-17e6c304]{position:relative;width:60%;border-radius:10px;z-index:1;overflow:hidden}@media(min-width:768px){.project .cell[data-v-17e6c304]{width:47%}}.project .cell img[data-v-17e6c304]{display:block;transition:all .3s ease}.project .cell:hover img[data-v-17e6c304]{transform:scale(1.05)}.project .marquee-text-wrap[data-v-17e6c304]{position:absolute;left:59vw;width:41vw;transform:translateY(-50%)}@media(min-width:768px){.project .marquee-text-wrap[data-v-17e6c304]{left:47vw;width:53vw}}.project[data-v-17e6c304]:nth-child(2n){justify-content:flex-end}.project:nth-child(2n) .marquee-text-wrap[data-v-17e6c304]{right:59vw;left:auto}@media(min-width:768px){.project:nth-child(2n) .marquee-text-wrap[data-v-17e6c304]{right:47vw;left:auto}}",""]),e.exports=r},343:function(e,t,n){"use strict";n.r(t);var r=n(9),c=(n(50),{name:"RealisationsIndexPage",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n("realisations",{text:!1}).limit(2).fetch();case 3:return r=t.sent,t.abrupt("return",{projects:r});case 5:case"end":return t.stop()}}),t)})))()}}),o=(n(322),n(20)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"max-width-container"},[n("div",{staticClass:"page-header"},[n("h1",[n("client-only",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v("Notre impact chez les marques")]},proxy:!0}])},[e._v("\n                    Notre impact chez les\n                    "),n("VueTyper",{attrs:{text:["marques","entreprises","compagnies","entrepreneurs","organisations"],"initial-action":"erasing","erase-style":"backspace","type-delay":150,"pre-type-delay":1e3,"pre-erase-delay":3500,"erase-delay":150}})],1)],1)]),e._v(" "),n("div",{staticClass:"section-inner"},e._l(e.projects,(function(t,r){return n("div",{key:t.slug,staticClass:"project"},[n("nuxt-link",{attrs:{to:t.path}},[n("client-only",[n("MarqueeText",{attrs:{duration:15,repeat:50,reverse:!(r%2)}},[e._v("\n                            "+e._s(t.title)+" • \n                        ")])],1)],1),e._v(" "),n("nuxt-link",{staticClass:"cell",attrs:{to:t.path}},[n("img",{attrs:{src:t.banner,width:"16",heigh:"9",loading:"lazy"}})])],1)})),0)])])}),[],!1,null,"17e6c304",null);t.default=component.exports}}]);