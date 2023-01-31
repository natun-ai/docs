"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6297],{4907:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(9953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(1943),a=(t(9953),t(4907));const o={},c="DataConnectors",i={unversionedId:"reference/how-does-raptor-work/dataconnector/readme",id:"reference/how-does-raptor-work/dataconnector/readme",title:"DataConnectors",description:"DataConnectors are the glue that connect your Feature Definitions to the production data sources (such as streaming,",source:"@site/docs/reference/how-does-raptor-work/dataconnector/readme.md",sourceDirName:"reference/how-does-raptor-work/dataconnector",slug:"/reference/how-does-raptor-work/dataconnector/",permalink:"/docs/reference/how-does-raptor-work/dataconnector/",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/how-does-raptor-work/dataconnector/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Building your own Builder",permalink:"/docs/reference/how-does-raptor-work/feature-builders/building-your-own-builder"},next:{title:"streaming",permalink:"/docs/reference/how-does-raptor-work/dataconnector/streaming"}},s={},l=[{value:"DataConnector definition",id:"dataconnector-definition",level:2},{value:"DataConnector usage",id:"dataconnector-usage",level:2}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dataconnectors"},"DataConnectors"),(0,a.kt)("p",null,"DataConnectors are the glue that connect your Feature Definitions to the production data sources (such as streaming,\ndatabases, CRM systems, etc.)."),(0,a.kt)("p",null,"The DataConnectors takes care of the production concerns of handling high-volume data. And responsible for many related tasks, such as:\nAuthentication, Rate-limiting, Schema Normalization, Retry, etc."),(0,a.kt)("h2",{id:"dataconnector-definition"},"DataConnector definition"),(0,a.kt)("p",null,"DataConnectors are usually configured by DevOps and are defined as a Kubernetes resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.raptor.ml/v1alpha1\nkind: DataConnector\nmetadata:\n  name: clicks\nspec:\n  kind: streaming\n  config:\n    - name: kind\n      value: kafka\n    - name: brokers\n      value: :9093\n    - name: topics\n      value: clickstream\n    - name: consumer_group\n      value: clicks-consumer-group\n    - name: tls_disable\n      value: "true"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DataConnector")," definition is composed by the metadata(which defines its name), the ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," of this connector, and\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," of this particular kind."),(0,a.kt)("p",null,"For more information, see the relevant DataConnector documentation."),(0,a.kt)("h2",{id:"dataconnector-usage"},"DataConnector usage"),(0,a.kt)("p",null,"They are then referenced in your Feature Definitions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: k8s.raptor.ml/v1alpha1\nkind: Feature\nmetadata:\n  name: last-click-time\nspec:\n  primitive: timestamp\n  freshness: -1\n  staleness: -1\n// highlight-start\n  connector:\n    name: clicks\n// highlight-end\n  builder:\n    pyexp: |\n      def handler(**req):\n        return req["timestamp"]\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are not defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),", the Feature's namespace will be used.")))}u.isMDXComponent=!0}}]);