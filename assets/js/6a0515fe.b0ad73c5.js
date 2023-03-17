"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8007],{84907:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var n=r(39953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(y,c(c({ref:t},i),{},{components:r})):n.createElement(y,c({ref:t},i))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(1943),a=(r(39953),r(84907));const o={sidebar_label:"feature",title:"types.feature"},c=void 0,s={unversionedId:"reference/labsdk/types/feature",id:"reference/labsdk/types/feature",title:"types.feature",description:"AggregationFunction Objects",source:"@site/docs/reference/labsdk/types/feature.md",sourceDirName:"reference/labsdk/types",slug:"/reference/labsdk/types/feature",permalink:"/reference/labsdk/types/feature",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/labsdk/types/feature.md",tags:[],version:"current",frontMatter:{sidebar_label:"feature",title:"types.feature"},sidebar:"reference",previous:{title:"dsrc",permalink:"/reference/labsdk/types/dsrc"},next:{title:"model",permalink:"/reference/labsdk/types/model"}},l={},p=[{value:"AggregationFunction Objects",id:"aggregationfunction-objects",level:2},{value:"KeepPreviousSpec Objects",id:"keeppreviousspec-objects",level:2},{value:"FeatureSpec Objects",id:"featurespec-objects",level:2},{value:"Keys Objects",id:"keys-objects",level:2}],i={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"aggregationfunction-objects"},"AggregationFunction Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class AggregationFunction(EnumSpec)\n")),(0,a.kt)("p",null,"AggregationFunction is the function used to aggregate the data."),(0,a.kt)("h2",{id:"keeppreviousspec-objects"},"KeepPreviousSpec Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class KeepPreviousSpec(yaml.YAMLObject)\n")),(0,a.kt)("p",null,"KeepPreviousSpec is the specification for how many previous versions of a feature to keep."),(0,a.kt)("h2",{id:"featurespec-objects"},"FeatureSpec Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class FeatureSpec(RaptorSpec)\n")),(0,a.kt)("p",null,"FeatureSpec is the specification for a feature."),(0,a.kt)("h2",{id:"keys-objects"},"Keys Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Keys(Dict[str, str])\n")),(0,a.kt)("p",null,"Keys is a dictionary of keys and values for a feature."),(0,a.kt)("p",null,"It is used to encode and decode keys for a feature."))}u.isMDXComponent=!0}}]);