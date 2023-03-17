"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4902],{84907:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(39953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(h,s(s({ref:t},l),{},{components:n})):o.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(1943),a=(n(39953),n(84907));const r={},s="Common use-cases",c={unversionedId:"docs/concepts/common",id:"docs/concepts/common",title:"Common use-cases",description:"In this section, we'll go over some common use-cases that you might encounter when using Raptor.",source:"@site/docs/docs/concepts/10-common.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/common",permalink:"/docs/concepts/common",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/concepts/10-common.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"docs",previous:{title:"Models",permalink:"/docs/concepts/models"},next:{title:"How does Raptor work?",permalink:"/docs/how-it-works/"}},i={},u=[{value:"How can I &quot;join&quot; between two data sources?",id:"how-can-i-join-between-two-data-sources",level:2},{value:"How can I use have aggregations without time windows?",id:"how-can-i-use-have-aggregations-without-time-windows",level:2},{value:"How can I use a feature that&#39;s not a column in my data source?",id:"how-can-i-use-a-feature-thats-not-a-column-in-my-data-source",level:2},{value:"How can I calculate the time difference between two events?",id:"how-can-i-calculate-the-time-difference-between-two-events",level:2},{value:"How can I use python packages for my features and models?",id:"how-can-i-use-python-packages-for-my-features-and-models",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-use-cases"},"Common use-cases"),(0,a.kt)("p",null,"In this section, we'll go over some common use-cases that you might encounter when using Raptor."),(0,a.kt)("h2",{id:"how-can-i-join-between-two-data-sources"},'How can I "join" between two data sources?'),(0,a.kt)("p",null,"Rather than joining between two data sources, we can use the concept of ",(0,a.kt)("strong",{parentName:"p"},'"dependencies"')," or ",(0,a.kt)("strong",{parentName:"p"},'"derived features"')," to\nachieve the same result."),(0,a.kt)("p",null,"To do that, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.get_feature()")," function to request the value of a feature from another data source."),(0,a.kt)("p",null,"For more information, check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/derived"},"Derived feature")," section."),(0,a.kt)("h2",{id:"how-can-i-use-have-aggregations-without-time-windows"},"How can I use have aggregations without time windows?"),(0,a.kt)("p",null,"Unfortunately, Raptor doesn't support aggregations without time windows at the moment. It's in our ",(0,a.kt)("strong",{parentName:"p"},"near")," roadmap."),(0,a.kt)("p",null,"As a workaround, you can specify a very big time window(",(0,a.kt)("inlineCode",{parentName:"p"},"over"),") with a ",(0,a.kt)("inlineCode",{parentName:"p"},"granularity")," of the window size."),(0,a.kt)("h2",{id:"how-can-i-use-a-feature-thats-not-a-column-in-my-data-source"},"How can I use a feature that's not a column in my data source?"),(0,a.kt)("p",null,"Features can be any value that you can calculate from your data source, or from another feature."),(0,a.kt)("h2",{id:"how-can-i-calculate-the-time-difference-between-two-events"},"How can I calculate the time difference between two events?"),(0,a.kt)("p",null,"To calculate the time difference between two events, you should assist another derived feature."),(0,a.kt)("p",null,"For example, let's say we want to calculate the time difference between the purchases of a customer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@feature(keys=['customer_id'], datasource=CustomerPurchases)\n@keep_previous(versions=1, over='1d')\n@freshness(max_age='1h', max_stale='1d')\ndef last_purchase_time(this_row: CustomerPurchases, ctx: FeatureContext):\n  return this_row['purchase_time']\n\n\n@feature(keys=['customer_id'], sourceless_markers_df=CustomerPurchases)\n@freshness(max_age='1h', max_stale='1d')\ndef time_since_last_purchase(_, ctx: FeatureContext):\n  last_purchase = ctx.get_feature('last_purchase_time')\n  return ctx.this_row['purchase_time'] - last_purchase\n")),(0,a.kt)("h2",{id:"how-can-i-use-python-packages-for-my-features-and-models"},"How can I use python packages for my features and models?"),(0,a.kt)("p",null,"You can use any python package that you want, as long as:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It's installed in your local environment."),(0,a.kt)("li",{parentName:"ol"},"You instructed Raptor to install it in the production environment using\nthe ",(0,a.kt)("a",{parentName:"li",href:"/reference/labsdk/decorators#runtime"},(0,a.kt)("inlineCode",{parentName:"a"},"@runtime")," decorator"),"."),(0,a.kt)("li",{parentName:"ol"},"You imported it ",(0,a.kt)("em",{parentName:"li"},"inside")," your function.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"{3}","{3}":!0},"@feature(keys=['user_id'], data_source=User)\n@freshness(max_age='1h', max_stale='5h')\n@runtime(packages=['phonenumbers==8.13.5'], env_name='default')\ndef is_valid_phone(this_row: User, ctx: FeatureContext):\n  import phonenumbers\n  p = phonenumbers.parse(this_row['phone'], \"US\")\n  return phonenumbers.is_valid_number(p)\n")),(0,a.kt)("p",null,"In the example above, we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"phonenumbers")," package to validate a phone number."),(0,a.kt)("p",null,"We're also using the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," environment, which comes with Raptor by default. The ",(0,a.kt)("inlineCode",{parentName:"p"},"environmet"),' acts exactly like "\nvirtualenv" in python - it\'s a separate python environment(bounded to specific python version), that you can install\npackages in.'),(0,a.kt)("p",null,"Spawning a new environment is usually done by the DevOps team, and it's not something that you should do yourself."))}p.isMDXComponent=!0}}]);