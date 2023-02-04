"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[517],{4907:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(9953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(h,c(c({ref:r},u),{},{components:t})):n.createElement(h,c({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9328:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(1943),a=(t(9953),t(4907));const o={},c="Features",i={unversionedId:"reference/how-does-raptor-work/features/README",id:"reference/how-does-raptor-work/features/README",title:"Features",description:'Features in Raptor are definitions for the "recipe" of how to calculate a feature value.',source:"@site/docs/reference/how-does-raptor-work/features/README.md",sourceDirName:"reference/how-does-raptor-work/features",slug:"/reference/how-does-raptor-work/features/",permalink:"/docs/reference/how-does-raptor-work/features/",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/how-does-raptor-work/features/README.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Extending Raptor",permalink:"/docs/reference/how-does-raptor-work/extending-raptor/"},next:{title:"Aggregations",permalink:"/docs/reference/how-does-raptor-work/features/aggregations"}},l={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("p",null,'Features in Raptor are definitions for the "recipe" of how to calculate a feature value.'),(0,a.kt)("p",null,"The recipe is composed of the following parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metadata - which contains the name, description, primitive type, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./freshness"},"Freshness")," - which contains the guarantees for the feature calculations."),(0,a.kt)("li",{parentName:"ul"},"Builder - which contains the code that will calculate the feature value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./datasources"},"Data Source")," - which references to the data that will be used to calculate the feature value.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"models"},"Models")," are usually require a group of features. Behind the scenes, Raptor will take care of aligning and\npreparing the Feature Set for your model."))}p.isMDXComponent=!0}}]);