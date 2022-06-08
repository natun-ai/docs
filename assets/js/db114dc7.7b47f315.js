"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7714],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2378:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),i=n(9960),o=n(8425),a=n(6010),c="cardContainer_woeA",l="cardTitle_pNjP",u="cardDescription_qC_k",d=n(3919),s=n(5999);function p(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function m(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function f(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,i=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}},8165:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2378),i=n(8425),o=n(7294);function a(e){var t=e.docId,n=(0,i.xz)(null!=t?t:void 0),a=t.endsWith("/readme")?t.substring(0,t.length-"/readme".length):t;return o.createElement("p",null,o.createElement(r.Z,{item:{type:"link",label:n.title,docId:t,href:"/docs/"+a}}))}},6955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(8165),c=["components"],l={id:"readme",sidebar_position:0,sidebar_label:"Getting Started",title:"Welcome to the Natun Documentation"},u=void 0,d={unversionedId:"readme",id:"readme",title:"Welcome to the Natun Documentation",description:"Welcome to Natun docs!",source:"@site/docs/readme.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/natun-ai/docs/tree/master/docs/readme.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"readme",sidebar_position:0,sidebar_label:"Getting Started",title:"Welcome to the Natun Documentation"},sidebar:"docs",previous:{title:"Getting Started with the LabSDK",permalink:"/docs/getting-started-with-labsdk"},next:{title:"Tutorial: Building Your First Feature",permalink:"/docs/tutorial-building-your-first-feature"}},s={},p=[{value:"Want to jump right in?",id:"want-to-jump-right-in",level:2},{value:"Want to deep dive?",id:"want-to-deep-dive",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to Natun docs!\nHere you'll find all the documentation you need to get up and running Natun."),(0,o.kt)("h2",{id:"want-to-jump-right-in"},"Want to jump right in?"),(0,o.kt)("p",null,"Feeling like an eager beaver? Jump into the quick-start docs and get making your first feature:"),(0,o.kt)(a.Z,{docId:"welcome/hello-world-feature",mdxType:"DocCard"}),(0,o.kt)(a.Z,{docId:"tutorial-building-your-first-feature",mdxType:"DocCard"}),(0,o.kt)("h2",{id:"want-to-deep-dive"},"Want to deep dive?"),(0,o.kt)("p",null,"Dive a little deeper and start exploring our API reference to get an idea of everything that's possible with the API:"))}f.isMDXComponent=!0}}]);