"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3971],{4907:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},745:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(1943),a=(t(9953),t(4907));const o={},i="Historical Data and Retraining",c={unversionedId:"reference/how-does-raptor-work/historical-data-and-backfill",id:"reference/how-does-raptor-work/historical-data-and-backfill",title:"Historical Data and Retraining",description:"Training your model for the first time is quite intuitive using the LabSDK, but what about retraining your model?",source:"@site/docs/reference/how-does-raptor-work/historical-data-and-backfill.md",sourceDirName:"reference/how-does-raptor-work",slug:"/reference/how-does-raptor-work/historical-data-and-backfill",permalink:"/docs/reference/how-does-raptor-work/historical-data-and-backfill",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/how-does-raptor-work/historical-data-and-backfill.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"fqn",permalink:"/docs/reference/how-does-raptor-work/fqn"},next:{title:"decorators",permalink:"/docs/reference/labsdk/decorators"}},l={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"historical-data-and-retraining"},"Historical Data and Retraining"),(0,a.kt)("p",null,"Training your model for the first time is quite intuitive using the LabSDK, but what about retraining your model?"),(0,a.kt)("p",null,"Fortunately, Raptor has a built-in mechanism for that. Raptor automatically collects your production data to an\nhistorical storage, and then you can retrain your model using the historical data."),(0,a.kt)("p",null,"At the moment, the historical data is available by using the created Snowflake view, or by writing a custom query over\nS3."),(0,a.kt)("p",null,"Coming soon will be a mechanism for retraining your model using historical data using the LabSDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@raptor.feature_set(remote=True)\ndef my_feature_set():\n    pass\n")))}p.isMDXComponent=!0}}]);