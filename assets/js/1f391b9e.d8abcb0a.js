(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3085],{47045:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>j});var t=n(39953),a=n(64923),l=n(11923),r=n(36859),c=n(57851),i=n(11151),o=n(64760);const m="mdxPageWrapper_h_RB";function j(e){const{content:s}=e,{metadata:{title:n,description:j,frontMatter:d}}=s,{wrapperClassName:u,hide_table_of_contents:f}=d;return t.createElement(l.FG,{className:(0,a.Z)(u??r.k.wrapper.mdxPages,r.k.page.mdxPage)},t.createElement(l.d,{title:n,description:j}),t.createElement(c.Z,null,t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,a.Z)("row",m)},t.createElement("div",{className:(0,a.Z)("col",!f&&"col--8")},t.createElement("article",null,t.createElement(i.Z,null,t.createElement(s,null)))),!f&&s.toc.length>0&&t.createElement("div",{className:"col col--2"},t.createElement(o.Z,{toc:s.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},64760:(e,s,n)=>{"use strict";n.d(s,{Z:()=>i});var t=n(1943),a=n(39953),l=n(64923),r=n(21762);const c="tableOfContents_ccrV";function i(e){let{className:s,...n}=e;return a.createElement("div",{className:(0,l.Z)(c,"thin-scrollbar",s)},a.createElement(r.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},21762:(e,s,n)=>{"use strict";n.d(s,{Z:()=>f});var t=n(1943),a=n(39953),l=n(5379);function r(e){const s=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);s.forEach(((e,s)=>{const t=n.slice(2,e.level);e.parentIndex=Math.max(...t),n[e.level]=s}));const t=[];return s.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?s[n].children.push(a):t.push(a)})),t}function c(e){let{toc:s,minHeadingLevel:n,maxHeadingLevel:t}=e;return s.flatMap((e=>{const s=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[{...e,children:s}]:s}))}function i(e){const s=e.getBoundingClientRect();return s.top===s.bottom?i(e.parentNode):s}function o(e,s){let{anchorTopOffset:n}=s;const t=e.find((e=>i(e).top>=n));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:s}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=s?0:document.querySelector(".navbar").clientHeight}),[s]),e}function j(e){const s=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),c=function(e){let{minHeadingLevel:s,maxHeadingLevel:n}=e;const t=[];for(let a=s;a<=n;a+=1)t.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),i=o(c,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(s.current&&s.current!==e&&s.current.classList.remove(a),e.classList.add(a),s.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d(e){let{toc:s,className:n,linkClassName:t,isChild:l}=e;return s.length?a.createElement("ul",{className:l?void 0:n},s.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:t}))))):null}const u=a.memo(d);function f(e){let{toc:s,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const v=(0,l.L)(),h=m??v.tableOfContents.minHeadingLevel,g=d??v.tableOfContents.maxHeadingLevel,k=function(e){let{toc:s,minHeadingLevel:n,maxHeadingLevel:t}=e;return(0,a.useMemo)((()=>c({toc:r(s),minHeadingLevel:n,maxHeadingLevel:t})),[s,n,t])}({toc:s,minHeadingLevel:h,maxHeadingLevel:g});return j((0,a.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:g}}),[i,o,h,g])),a.createElement(u,(0,t.Z)({toc:k,className:n,linkClassName:i},f))}},73454:(e,s,n)=>{var t={"./af":10812,"./af.js":10812,"./ar":13157,"./ar-dz":38451,"./ar-dz.js":38451,"./ar-kw":99253,"./ar-kw.js":99253,"./ar-ly":41735,"./ar-ly.js":41735,"./ar-ma":72778,"./ar-ma.js":72778,"./ar-sa":7194,"./ar-sa.js":7194,"./ar-tn":62365,"./ar-tn.js":62365,"./ar.js":13157,"./az":3836,"./az.js":3836,"./be":99850,"./be.js":99850,"./bg":69238,"./bg.js":69238,"./bm":26889,"./bm.js":26889,"./bn":70898,"./bn-bd":30036,"./bn-bd.js":30036,"./bn.js":70898,"./bo":56456,"./bo.js":56456,"./br":99399,"./br.js":99399,"./bs":12680,"./bs.js":12680,"./ca":45239,"./ca.js":45239,"./cs":61070,"./cs.js":61070,"./cv":73796,"./cv.js":73796,"./cy":99750,"./cy.js":99750,"./da":48110,"./da.js":48110,"./de":80301,"./de-at":91638,"./de-at.js":91638,"./de-ch":27923,"./de-ch.js":27923,"./de.js":80301,"./dv":79740,"./dv.js":79740,"./el":1996,"./el.js":1996,"./en-au":96397,"./en-au.js":96397,"./en-ca":69479,"./en-ca.js":69479,"./en-gb":77684,"./en-gb.js":77684,"./en-ie":88454,"./en-ie.js":88454,"./en-il":83655,"./en-il.js":83655,"./en-in":60569,"./en-in.js":60569,"./en-nz":22526,"./en-nz.js":22526,"./en-sg":44860,"./en-sg.js":44860,"./eo":92665,"./eo.js":92665,"./es":76059,"./es-do":69931,"./es-do.js":69931,"./es-mx":40025,"./es-mx.js":40025,"./es-us":15232,"./es-us.js":15232,"./es.js":76059,"./et":20573,"./et.js":20573,"./eu":34760,"./eu.js":34760,"./fa":82011,"./fa.js":82011,"./fi":62636,"./fi.js":62636,"./fil":22640,"./fil.js":22640,"./fo":60322,"./fo.js":60322,"./fr":43403,"./fr-ca":66371,"./fr-ca.js":66371,"./fr-ch":59359,"./fr-ch.js":59359,"./fr.js":43403,"./fy":18058,"./fy.js":18058,"./ga":89842,"./ga.js":89842,"./gd":36370,"./gd.js":36370,"./gl":37755,"./gl.js":37755,"./gom-deva":61811,"./gom-deva.js":61811,"./gom-latn":43350,"./gom-latn.js":43350,"./gu":70209,"./gu.js":70209,"./he":26650,"./he.js":26650,"./hi":21244,"./hi.js":21244,"./hr":64273,"./hr.js":64273,"./hu":14910,"./hu.js":14910,"./hy-am":36474,"./hy-am.js":36474,"./id":7158,"./id.js":7158,"./is":50646,"./is.js":50646,"./it":4678,"./it-ch":67257,"./it-ch.js":67257,"./it.js":4678,"./ja":98627,"./ja.js":98627,"./jv":20404,"./jv.js":20404,"./ka":60981,"./ka.js":60981,"./kk":76243,"./kk.js":76243,"./km":47318,"./km.js":47318,"./kn":54945,"./kn.js":54945,"./ko":36569,"./ko.js":36569,"./ku":44917,"./ku.js":44917,"./ky":47110,"./ky.js":47110,"./lb":51831,"./lb.js":51831,"./lo":16779,"./lo.js":16779,"./lt":57156,"./lt.js":57156,"./lv":51056,"./lv.js":51056,"./me":43207,"./me.js":43207,"./mi":65037,"./mi.js":65037,"./mk":89558,"./mk.js":89558,"./ml":69424,"./ml.js":69424,"./mn":34804,"./mn.js":34804,"./mr":75013,"./mr.js":75013,"./ms":42930,"./ms-my":6333,"./ms-my.js":6333,"./ms.js":42930,"./mt":58122,"./mt.js":58122,"./my":38042,"./my.js":38042,"./nb":56692,"./nb.js":56692,"./ne":55574,"./ne.js":55574,"./nl":50729,"./nl-be":99083,"./nl-be.js":99083,"./nl.js":50729,"./nn":43948,"./nn.js":43948,"./oc-lnc":27604,"./oc-lnc.js":27604,"./pa-in":38843,"./pa-in.js":38843,"./pl":22374,"./pl.js":22374,"./pt":69787,"./pt-br":30507,"./pt-br.js":30507,"./pt.js":69787,"./ro":71668,"./ro.js":71668,"./ru":97275,"./ru.js":97275,"./sd":53325,"./sd.js":53325,"./se":7880,"./se.js":7880,"./si":17694,"./si.js":17694,"./sk":47172,"./sk.js":47172,"./sl":88641,"./sl.js":88641,"./sq":85233,"./sq.js":85233,"./sr":7165,"./sr-cyrl":4230,"./sr-cyrl.js":4230,"./sr.js":7165,"./ss":61422,"./ss.js":61422,"./sv":1756,"./sv.js":1756,"./sw":96319,"./sw.js":96319,"./ta":60052,"./ta.js":60052,"./te":36167,"./te.js":36167,"./tet":95260,"./tet.js":95260,"./tg":72929,"./tg.js":72929,"./th":69399,"./th.js":69399,"./tk":47789,"./tk.js":47789,"./tl-ph":25721,"./tl-ph.js":25721,"./tlh":67788,"./tlh.js":67788,"./tr":18851,"./tr.js":18851,"./tzl":45814,"./tzl.js":45814,"./tzm":46556,"./tzm-latn":83589,"./tzm-latn.js":83589,"./tzm.js":46556,"./ug-cn":48629,"./ug-cn.js":48629,"./uk":69182,"./uk.js":69182,"./ur":52063,"./ur.js":52063,"./uz":22890,"./uz-latn":20759,"./uz-latn.js":20759,"./uz.js":22890,"./vi":4661,"./vi.js":4661,"./x-pseudo":97418,"./x-pseudo.js":97418,"./yo":4826,"./yo.js":4826,"./zh-cn":81764,"./zh-cn.js":81764,"./zh-hk":55238,"./zh-hk.js":55238,"./zh-mo":22713,"./zh-mo.js":22713,"./zh-tw":51285,"./zh-tw.js":51285};function a(e){var s=l(e);return n(s)}function l(e){if(!n.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=l,e.exports=a,a.id=73454}}]);