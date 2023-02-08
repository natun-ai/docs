"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3178],{4907:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(9953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(1943),o=(r(9953),r(4907));const a={title:'Derived feature (like "join")'},s=void 0,i={unversionedId:"docs/concepts/derived",id:"docs/concepts/derived",title:'Derived feature (like "join")',description:'Raptor is introducing a new way to join between pieces of data - "dependencies".',source:"@site/docs/docs/concepts/5-derived.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/derived",permalink:"/docs/concepts/derived",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/concepts/5-derived.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:'Derived feature (like "join")'},sidebar:"docs",previous:{title:"Sourceless features",permalink:"/docs/concepts/sourceless"},next:{title:"Models",permalink:"/docs/concepts/models"}},c={},u=[{value:"Quick example",id:"quick-example",level:2},{value:"Using with sourceless features",id:"using-with-sourceless-features",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Raptor is introducing a new way to join between pieces of data - "dependencies".'),(0,o.kt)("p",null,"As explained ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/basics"},"earlier"),', we write features as functions and working in the context of a "row-level"\napproach.'),(0,o.kt)("p",null,'To implement a feature that "joins" a data from two different sources, we just need to call another feature that\ncalculates the data we need.'),(0,o.kt)("h2",{id:"quick-example"},"Quick example"),(0,o.kt)("p",null,'A relatively simple example for this is the following "rate" feature:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'@feature(keys=["user_id"], sourceless_markers_df=markers_df)  # sourceless_markers_df is used for training\n@freshness(max_age=\'1m\', max_stale=\'10h\')\ndef views_purchases_rate(_, ctx: Context) -> float:\n  """rate of two views and purchases"""\n  views, _ = ctx.get_feature("views+count")\n  purchases, _ = ctx.get_feature("purchases+count")\n  return views / purchases\n')),(0,o.kt)("p",null,"In this code, we're using the ",(0,o.kt)("a",{parentName:"p",href:"/reference/how-does-raptor-work/features/context#get-feature"},(0,o.kt)("inlineCode",{parentName:"a"},"feature_get()"))," function\nto request the values of ",(0,o.kt)("inlineCode",{parentName:"p"},"views+count")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"purchases+count")," for our ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," key(by default, the function propagate\nthe keys). Then, we return the rate of the two. Simple right?"),(0,o.kt)("h2",{id:"using-with-sourceless-features"},"Using with sourceless features"))}p.isMDXComponent=!0}}]);