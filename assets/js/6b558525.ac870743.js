"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9578],{4907:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(9953);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(t),u=i,d=f["".concat(s,".").concat(u)]||f[u]||m[u]||c;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=u;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[f]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<c;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1161:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=t(1943),i=(t(9953),t(4907));const c={sidebar_label:"primitives",title:"types.primitives"},o=void 0,a={unversionedId:"reference/labsdk/reference/types/primitives",id:"reference/labsdk/reference/types/primitives",title:"types.primitives",description:"Primitive Objects",source:"@site/docs/reference/labsdk/reference/types/primitives.md",sourceDirName:"reference/labsdk/reference/types",slug:"/reference/labsdk/reference/types/primitives",permalink:"/reference/labsdk/reference/types/primitives",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/labsdk/reference/types/primitives.md",tags:[],version:"current",frontMatter:{sidebar_label:"primitives",title:"types.primitives"},sidebar:"reference",previous:{title:"model",permalink:"/reference/labsdk/reference/types/model"},next:{title:"Architectural Design",permalink:"/reference/spec"}},s={},p=[{value:"Primitive Objects",id:"primitive-objects",level:2}],l={toc:p};function f(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"primitive-objects"},"Primitive Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Primitive(EnumSpec)\n")),(0,i.kt)("p",null,"Primitive types supported by RaptorML."))}f.isMDXComponent=!0}}]);