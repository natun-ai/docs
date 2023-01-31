"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3017],{4907:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,f=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(1943),a=(n(9953),n(4907));const l={},i="Handler function",o={unversionedId:"reference/pyexp/handler-function",id:"reference/pyexp/handler-function",title:"Handler function",description:"Implementing features with PyExp is easy.",source:"@site/docs/reference/pyexp/handler-function.md",sourceDirName:"reference/pyexp",slug:"/reference/pyexp/handler-function",permalink:"/docs/reference/pyexp/handler-function",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/pyexp/handler-function.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Differences with Python",permalink:"/docs/reference/pyexp/differences-with-python"},next:{title:"PyExp: Language definition",permalink:"/docs/reference/pyexp/pyexp-language-definition/"}},p={},u=[{value:"Input arguments via KWargs",id:"input-arguments-via-kwargs",level:3}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handler-function"},"Handler function"),(0,a.kt)("p",null,"Implementing features with PyExp is easy.\nThe only thing you need to implement is a handler function that either named ",(0,a.kt)("em",{parentName:"p"},"with the feature's name")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"handler"),".\nThis function should accept ",(0,a.kt)("em",{parentName:"p"},"only")," one argument of the kwargs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def handler(**req):\n    """Implement city feature"""\n    return "Tel-Aviv"\n')),(0,a.kt)("p",null,"You can return multiple parameters via the return statements."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"field"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Value - the returned value for the expression."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp - the timestamp of the digestment."),(0,a.kt)("td",{parentName:"tr",align:null},"Now(When set to None, Raptor will default it to the current timestamp)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Entity ID - the entity ID of the feature"),(0,a.kt)("td",{parentName:"tr",align:null},"Synchronous digestment:Defaulted to the requested entity_id of the feature digestment request.Asynchronous digstment:This is required")))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Different feature builders require you to implement different return values."),(0,a.kt)("p",{parentName:"admonition"},"I.e. the streaming features require you to return all the parameters since it's usually derived from the event {%")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def handler(**req):\n    """Implements count clicks from a stream of clicks"""\n    """This feature has a `count` aggregation attached"""\n    return 1, req["timestamp"], req["payload"].client_id\n')),(0,a.kt)("h3",{id:"input-arguments-via-kwargs"},"Input arguments via KWargs"),(0,a.kt)("p",null,"You should have access to the following inputs via the KWArgs argument that has been passed by the feature builder:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"variable"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"payload")),(0,a.kt)("td",{parentName:"tr",align:null},"The payload that you should process.",(0,a.kt)("br",null),"Usually, this will be a deserialized form of the raw data being processed by the builder.",(0,a.kt)("br",null),(0,a.kt)("br",null),"For more information - see the specific builder's documentation.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Type: ",(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"headers")),(0,a.kt)("td",{parentName:"tr",align:null},"A dictionary of headers that have passed by the feature builder.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Type: ",(0,a.kt)("inlineCode",{parentName:"td"},"dict[string][]string   "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"entity_id")),(0,a.kt)("td",{parentName:"tr",align:null},"The Entity ID of the feature.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Type: ",(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,a.kt)("td",{parentName:"tr",align:null},"The timestamp of the value calculation.")))))}s.isMDXComponent=!0}}]);