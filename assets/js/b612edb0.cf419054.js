"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6810],{4907:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(9953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=i(r),p=a,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||s;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=r(1943),a=(r(9953),r(4907));const s={},o="Sourceless features",c={unversionedId:"docs/concepts/sourceless",id:"docs/concepts/sourceless",title:"Sourceless features",description:"Sourceless features are features that don't have a source. They are used to calculate features that are derived from",source:"@site/docs/docs/concepts/4-sourceless.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/sourceless",permalink:"/docs/concepts/sourceless",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/concepts/4-sourceless.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Aggregations",permalink:"/docs/concepts/aggregations"},next:{title:'Derived feature (like "join")',permalink:"/docs/concepts/derived"}},u={},i=[{value:"Sourceless feature definition",id:"sourceless-feature-definition",level:2},{value:"Training sourceless features",id:"training-sourceless-features",level:2}],l={toc:i};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sourceless-features"},"Sourceless features"),(0,a.kt)("p",null,"Sourceless features are features that don't have a source. They are used to calculate features that are derived from\nthe keys and timestamp or from other features."),(0,a.kt)("h2",{id:"sourceless-feature-definition"},"Sourceless feature definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@feature(keys=[\'name\'])\n@freshness(max_age=\'1m\', max_stale=\'10h\')\ndef greeter(_, _) -> str:\n  """this is a hello world feature"""\n  return f"hello {name}"\n')),(0,a.kt)("p",null,"In this example, we're defining a feature that returns a string with the name of the user. The feature doesn't have a\nsource, so we're not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"data_sources")," decorator argument."),(0,a.kt)("h2",{id:"training-sourceless-features"},"Training sourceless features"),(0,a.kt)("p",null,"Since sourceless features don't have a source, we need to provide a training data for the feature. This is necessary to\nallow the LabSDK to know the point in time that the feature was calculated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8}","{8}":!0},"# create a dataframe with the feature's keys and the feature's value\nmarkers_df = pd.DataFrame({\n  'name': ['john', 'jane'],\n  'timestamp': [datetime(2021, 1, 1), datetime(2021, 1, 1)]\n})\n\n# build the feature\n@feature(keys=['name'], sourceless_markers_df=markers_df)\n@freshness(max_age='1m', max_stale='10h')\ndef greeter(_, _) -> str:\n  \"\"\"this is a hello world feature\"\"\"\n  return f\"hello {name}\"\n")),(0,a.kt)("p",null,"Sometimes, it might be useful to use the data from an existing data source to mark the feature calculation points.\nTo do that, we can pass the data source to the ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceless_markers_df")," argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys=['name'], sourceless_markers_df=User)\n")))}f.isMDXComponent=!0}}]);