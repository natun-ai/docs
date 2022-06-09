"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3297],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||u;return r?n.createElement(d,i(i({ref:t},o),{},{components:r})):n.createElement(d,i({ref:t},o))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,i=new Array(u);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<u;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2809:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(3117),a=r(102),u=(r(7294),r(3905)),i=["components"],c={},s="struct",l={unversionedId:"reference/pyexp/natun-built-ins/struct",id:"reference/pyexp/natun-built-ins/struct",title:"struct",description:"A generic object with fields.",source:"@site/docs/reference/pyexp/natun-built-ins/struct.md",sourceDirName:"reference/pyexp/natun-built-ins",slug:"/reference/pyexp/natun-built-ins/struct",permalink:"/docs/reference/pyexp/natun-built-ins/struct",draft:!1,editUrl:"https://github.com/natun-ai/docs/tree/master/docs/reference/pyexp/natun-built-ins/struct.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"re (regular expressions)",permalink:"/docs/reference/pyexp/natun-built-ins/re-regular-expressions"},next:{title:"time",permalink:"/docs/reference/pyexp/natun-built-ins/time"}},o={},p=[{value:"Members",id:"members",level:2},{value:"struct",id:"struct-1",level:3},{value:"Parameters",id:"parameters",level:4}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"struct"},"struct"),(0,u.kt)("p",null,"A generic object with fields."),(0,u.kt)("p",null,"Structs fields cannot be reassigned once the struct is created. Two structs are equal if they have the same fields and if corresponding field values are equal."),(0,u.kt)("h2",{id:"members"},"Members"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/reference/pyexp/natun-built-ins/struct#struct-1",title:"mention"},"#struct-1"))),(0,u.kt)("h3",{id:"struct-1"},"struct"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"struct struct(**kwargs)\n")),(0,u.kt)("p",null,"Creates an immutable struct using the keyword arguments as attributes. It is used to group multiple values together. Example:\\"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'s = struct(x = 2, y = 3)\nreturn s.x + getattr(s, "y")  # returns 5\n')),(0,u.kt)("h4",{id:"parameters"},"Parameters"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"kwargs")),(0,u.kt)("td",{parentName:"tr",align:null},"default = {}",(0,u.kt)("br",null),"Dictionary of arguments.")))))}m.isMDXComponent=!0}}]);