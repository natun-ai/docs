"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6591],{8619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(4964),s=t(1523);const a={},r="Common use-cases",c={id:"docs/concepts/common",title:"Common use-cases",description:"In this section, we'll go over some common use-cases that you might encounter when using Raptor.",source:"@site/docs/docs/concepts/10-common.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/common",permalink:"/docs/concepts/common",draft:!1,unlisted:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/docs/concepts/10-common.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"docs",previous:{title:"Models",permalink:"/docs/concepts/models"},next:{title:"How does Raptor work?",permalink:"/docs/how-it-works/"}},i={},u=[{value:"How can I &quot;join&quot; between two data sources?",id:"how-can-i-join-between-two-data-sources",level:2},{value:"How can I use have aggregations without time windows?",id:"how-can-i-use-have-aggregations-without-time-windows",level:2},{value:"How can I use a feature that&#39;s not a column in my data source?",id:"how-can-i-use-a-feature-thats-not-a-column-in-my-data-source",level:2},{value:"How can I calculate the time difference between two events?",id:"how-can-i-calculate-the-time-difference-between-two-events",level:2},{value:"How can I use python packages for my features and models?",id:"how-can-i-use-python-packages-for-my-features-and-models",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"common-use-cases",children:"Common use-cases"}),"\n",(0,o.jsx)(n.p,{children:"In this section, we'll go over some common use-cases that you might encounter when using Raptor."}),"\n",(0,o.jsx)(n.h2,{id:"how-can-i-join-between-two-data-sources",children:'How can I "join" between two data sources?'}),"\n",(0,o.jsxs)(n.p,{children:["Rather than joining between two data sources, we can use the concept of ",(0,o.jsx)(n.strong,{children:'"dependencies"'})," or ",(0,o.jsx)(n.strong,{children:'"derived features"'})," to\nachieve the same result."]}),"\n",(0,o.jsxs)(n.p,{children:["To do that, we can use the ",(0,o.jsx)(n.code,{children:"ctx.get_feature()"})," function to request the value of a feature from another data source."]}),"\n",(0,o.jsxs)(n.p,{children:["For more information, check out the ",(0,o.jsx)(n.a,{href:"/docs/concepts/derived",children:"Derived feature"})," section."]}),"\n",(0,o.jsx)(n.h2,{id:"how-can-i-use-have-aggregations-without-time-windows",children:"How can I use have aggregations without time windows?"}),"\n",(0,o.jsxs)(n.p,{children:["Unfortunately, Raptor doesn't support aggregations without time windows at the moment. It's in our ",(0,o.jsx)(n.strong,{children:"near"})," roadmap."]}),"\n",(0,o.jsxs)(n.p,{children:["As a workaround, you can specify a very big time window(",(0,o.jsx)(n.code,{children:"over"}),") with a ",(0,o.jsx)(n.code,{children:"granularity"})," of the window size."]}),"\n",(0,o.jsx)(n.h2,{id:"how-can-i-use-a-feature-thats-not-a-column-in-my-data-source",children:"How can I use a feature that's not a column in my data source?"}),"\n",(0,o.jsx)(n.p,{children:"Features can be any value that you can calculate from your data source, or from another feature."}),"\n",(0,o.jsx)(n.h2,{id:"how-can-i-calculate-the-time-difference-between-two-events",children:"How can I calculate the time difference between two events?"}),"\n",(0,o.jsx)(n.p,{children:"To calculate the time difference between two events, you should assist another derived feature."}),"\n",(0,o.jsx)(n.p,{children:"For example, let's say we want to calculate the time difference between the purchases of a customer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"@feature(keys=['customer_id'], datasource=CustomerPurchases)\n@keep_previous(versions=1, over='1d')\n@freshness(max_age='1h', max_stale='1d')\ndef last_purchase_time(this_row: CustomerPurchases, ctx: FeatureContext):\n  return this_row['purchase_time']\n\n\n@feature(keys=['customer_id'], sourceless_markers_df=CustomerPurchases)\n@freshness(max_age='1h', max_stale='1d')\ndef time_since_last_purchase(_, ctx: FeatureContext):\n  last_purchase = ctx.get_feature('last_purchase_time')\n  return ctx.this_row['purchase_time'] - last_purchase\n"})}),"\n",(0,o.jsx)(n.h2,{id:"how-can-i-use-python-packages-for-my-features-and-models",children:"How can I use python packages for my features and models?"}),"\n",(0,o.jsx)(n.p,{children:"You can use any python package that you want, as long as:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"It's installed in your local environment."}),"\n",(0,o.jsxs)(n.li,{children:["You instructed Raptor to install it in the production environment using\nthe ",(0,o.jsxs)(n.a,{href:"/reference/labsdk/decorators#runtime",children:[(0,o.jsx)(n.code,{children:"@runtime"})," decorator"]}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You imported it ",(0,o.jsx)(n.em,{children:"inside"})," your function."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",metastring:"{3}",children:"@feature(keys=['user_id'], data_source=User)\n@freshness(max_age='1h', max_stale='5h')\n@runtime(packages=['phonenumbers==8.13.5'], env_name='default')\ndef is_valid_phone(this_row: User, ctx: FeatureContext):\n  import phonenumbers\n  p = phonenumbers.parse(this_row['phone'], \"US\")\n  return phonenumbers.is_valid_number(p)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the example above, we're using the ",(0,o.jsx)(n.code,{children:"phonenumbers"})," package to validate a phone number."]}),"\n",(0,o.jsxs)(n.p,{children:["We're also using the ",(0,o.jsx)(n.code,{children:"default"})," environment, which comes with Raptor by default. The ",(0,o.jsx)(n.code,{children:"environmet"}),' acts exactly like "\nvirtualenv" in python - it\'s a separate python environment(bounded to specific python version), that you can install\npackages in.']}),"\n",(0,o.jsx)(n.p,{children:"Spawning a new environment is usually done by the DevOps team, and it's not something that you should do yourself."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1523:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6504);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);