"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8594],{4907:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(1943),a=(r(9953),r(4907));const o={},i="Feature Selector",s={unversionedId:"reference/how-does-raptor-work/selectors",id:"reference/how-does-raptor-work/selectors",title:"Feature Selector",description:"The Feature Selector is a special string that allow you to select a feature value composition.",source:"@site/docs/reference/how-does-raptor-work/selectors.md",sourceDirName:"reference/how-does-raptor-work",slug:"/reference/how-does-raptor-work/selectors",permalink:"/docs/reference/how-does-raptor-work/selectors",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/how-does-raptor-work/selectors.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Models",permalink:"/docs/reference/how-does-raptor-work/models"},next:{title:"Decorators",permalink:"/docs/reference/labsdk/decorators"}},c={},l=[{value:"Components of the Feature Selector",id:"components-of-the-feature-selector",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feature-selector"},"Feature Selector"),(0,a.kt)("p",null,"The Feature Selector is a special string that allow you to select a feature value composition."),(0,a.kt)("h2",{id:"components-of-the-feature-selector"},"Components of the Feature Selector"),(0,a.kt)("p",null,"The Feature Selector is composed of several parts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"namespace.name+aggregation_function@version[encoding]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Namespace"),": an optional part that can be used to identify the namespace of the feature. It must start and end with\na letter or digit, and can contain letters, digits, and underscores. The maximum length is 256 characters.\nIf the namespace is not specified, we'll use the namespace of the request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Name"),": the name of the feature. It must start and end with a letter or digit, and can contain letters, digits, and\nunderscores. The maximum length is 256 characters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Aggregation function"),": an optional part that can be used to specify an aggregation function. The function must\nconsist of only lowercase letters and underscores."),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"  Aggregation functions can't be used in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@version")," part."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Version"),": an optional part that can be used to specify a version number. The version must be an integer.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Encoding"),": an optional part that can be used to specify an encoding format. The encoding format must consist of\nonly lowercase letters and underscores."))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here are some examples of valid Feature Selectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feature_name"),": a simple feature name with no namespace, aggregation function, version, or encoding specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace.feature_name"),": a feature name with a namespace specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feature_name+sum"),": a feature name with an aggregation function specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feature_name@-2"),": a feature name with a version number specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feature_name[encoding]"),": a feature name with an encoding format specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace.feature_name@-2[encoding]"),": a feature name with a namespace, version, and encoding format specified.")))}u.isMDXComponent=!0}}]);