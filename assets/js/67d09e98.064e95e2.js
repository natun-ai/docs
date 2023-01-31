"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1624],{4907:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),g=o,d=p["".concat(u,".").concat(g)]||p[g]||f[g]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(1943),o=(r(9953),r(4907));const a={slug:"introducing-raptor",title:"Introducing Raptor",authors:["AlmogBaku"],tags:[]},i=void 0,c={permalink:"/blog/introducing-raptor",editUrl:"https://github.com/raptor-ml/docs/tree/master/blog/2022-09-3-first-blog-post.md",source:"@site/blog/2022-09-3-first-blog-post.md",title:"Introducing Raptor",description:"Raptor is a serverless feature engineering platform. It helps you to create production-ready ML features directly from",date:"2022-09-03T00:00:00.000Z",formattedDate:"September 3, 2022",tags:[],readingTime:.425,hasTruncateMarker:!1,authors:[{name:"Almog Baku",title:"Raptor creator",url:"https://github.com/AlmogBaku",imageURL:"https://github.com/AlmogBaku.png",key:"AlmogBaku"}],frontMatter:{slug:"introducing-raptor",title:"Introducing Raptor",authors:["AlmogBaku"],tags:[]}},u={authorsImageUrls:[void 0]},l=[],s={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Raptor is a serverless feature engineering platform. It helps you to create production-ready ML features directly from\nyour notebook\nand take it to production in less than 5 minutes."),(0,o.kt)("p",null,"With Raptor, data scientists can stop waiting for others to build production-ready version of their work. Instead,\nslightly tweak your Python code and write your features' code in a notebook. Then, export the features to Kubernetes,\nand RaptorML will take care of the production and engineering concerns (such as scale, high availability,\nauthentication, caching, monitoring, etc.)"))}p.isMDXComponent=!0}}]);