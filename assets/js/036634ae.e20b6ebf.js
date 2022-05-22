"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3675],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=i,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7958:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={title:"Natun Spec",sidebar_label:"Architectural Design",sidebar_position:0,id:"spec"},s="Core",u={unversionedId:"reference/spec",id:"reference/spec",title:"Natun Spec",description:"Kubernetes Operator",source:"@site/docs/reference/spec.mdx",sourceDirName:"reference",slug:"/reference/spec",permalink:"/docs/reference/spec",draft:!1,editUrl:"https://github.com/natun-ai/docs/tree/master/docs/docs/reference/spec.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Natun Spec",sidebar_label:"Architectural Design",sidebar_position:0,id:"spec"},sidebar:"reference",next:{title:"How does Natun work?",permalink:"/docs/reference/how-does-natun-work/"}},p={},m=[{value:"Kubernetes Operator",id:"kubernetes-operator",level:2},{value:"Core&#39;s engine",id:"cores-engine",level:2},{value:"Features",id:"features",level:3},{value:"Feature Value",id:"feature-value",level:3},{value:"Low-level API",id:"low-level-api",level:3},{value:"Online-aggregations",id:"online-aggregations",level:3},{value:"Auto-backfill",id:"auto-backfill",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Snapshotting",id:"snapshotting",level:3},{value:"Regular features snapshotting - PrimitiveSnapshotter",id:"regular-features-snapshotting---primitivesnapshotter",level:4},{value:"Windowed features / WindowSnapshotter",id:"windowed-features--windowsnapshotter",level:4},{value:"Historian",id:"historian",level:4},{value:"Builders",id:"builders",level:2}],d={toc:m};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core"},"Core"),(0,r.kt)("h2",{id:"kubernetes-operator"},"Kubernetes Operator"),(0,r.kt)("p",null,"The Kubernetes operator enables the user to use Natun using the k8s world"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The operator will support validation on time of manifest create"),(0,r.kt)("li",{parentName:"ul"},"CRDs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Feature - defines a feature metadata & business logic"),(0,r.kt)("li",{parentName:"ul"},"DataConnector - defines a connector configuration (i.e. how to connect to Kafka, what's the creds, what's the topic, schema, allocated resources, etc.)"),(0,r.kt)("li",{parentName:"ul"},"FeatureSet - defines a set of features."))),(0,r.kt)("li",{parentName:"ul"},"Update operations for Features are blocked by default and will be enabled ",(0,r.kt)("em",{parentName:"li"},"only by enabling a special flag"),".")),(0,r.kt)("h2",{id:"cores-engine"},"Core's engine"),(0,r.kt)("p",null,"The Core's engine is responsible for accessing and processing the feature values, as well as storing them in the State and saving them to the Historical Storage."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("p",null,"Features are an abstraction that contains metadata about the feature that should lead to create a Feature Value."),(0,r.kt)("p",null,"Feature definitions contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FQN (Fully Qualified Name): a unique name which is the composition of ",(0,r.kt)("inlineCode",{parentName:"li"},"{name}.{namespace}")),(0,r.kt)("li",{parentName:"ul"},"Primitive Type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Timestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]Float")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]Timestamp")))),(0,r.kt)("li",{parentName:"ul"},"Freshness duration - The duration which within the feature value is considered as fresh, and shouldn't be recalculated"),(0,r.kt)("li",{parentName:"ul"},"Staleness duration - The duration which after it the feature is considered as stale and ",(0,r.kt)("em",{parentName:"li"},"is invalid")," to be used.\nThe state should evict/expire that value after that, and only story it for historical purposes."),(0,r.kt)("li",{parentName:"ul"},"Timeout duration - The maximum time the server should respond with a feature value. In this time it tries to get\nthe most fresh value it can provide (considering the above constrains)")),(0,r.kt)("h3",{id:"feature-value"},"Feature Value"),(0,r.kt)("p",null,"The Feature Value is the computed value of a feature's business logic that is stored in the historical/online storage layers(aka feature store / fs)\nProperties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fqn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity_id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"))),(0,r.kt)("h3",{id:"low-level-api"},"Low-level API"),(0,r.kt)("p",null,"The low-level API (aka Engine API) should support low-level operation over feature values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mutate features:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SET(fqn, entity_id, value, timestamp?)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET(fqn, entity_id, timestamp?)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE(fqn, entity_id, value, timestamp?)")," - set value or append to a list"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INCR(fqn, entity_id, by, timestamp?)")," - increment a value in a scalar (not for online aggr.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APPEND(fqn, entity_id, value, timestamp?)")," - append a value to a list"))),(0,r.kt)("li",{parentName:"ul"},"LIST of features"),(0,r.kt)("li",{parentName:"ul"},"GET feature-set (implemented as a feature builder)"),(0,r.kt)("li",{parentName:"ul"},"SET in bulk")),(0,r.kt)("h3",{id:"online-aggregations"},"Online-aggregations"),(0,r.kt)("p",null,"The engine should support online aggregation (using the bucket algorithm)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SUM"),(0,r.kt)("li",{parentName:"ul"},"MAX"),(0,r.kt)("li",{parentName:"ul"},"MIN"),(0,r.kt)("li",{parentName:"ul"},"AVG"),(0,r.kt)("li",{parentName:"ul"},"COUNT")),(0,r.kt)("h3",{id:"auto-backfill"},"Auto-backfill"),(0,r.kt)("p",null,"[TBD]"),(0,r.kt)("h3",{id:"pipelines"},"Pipelines"),(0,r.kt)("p",null,'Getting and Setting values to the State is done using the "Pipeline". The Pipeline is composed with a chain of middlewares that wraps the access to/from the State.'),(0,r.kt)("p",null,"The middlewares allow chaining a set of functions when getting or setting a value, in order to mutate the value (or to prevent the operation).\nThis is useful for implementing a variety of features, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validations - validations are PreSet middlewares"),(0,r.kt)("li",{parentName:"ul"},"Builders",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"REST builder - this can be implemented either with PreGet or PostGet"))),(0,r.kt)("li",{parentName:"ul"},'Encoders - i.e attache "hashing" for the value at PostGet')),(0,r.kt)("h3",{id:"snapshotting"},"Snapshotting"),(0,r.kt)("p",null,"Snapshotting is the process that is responsible for copying data from the real-time/online state to the historical storage."),(0,r.kt)("p",null,"This process is composed of 3 different sub-processes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Regular features snapshotting")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Windowed-features snapshotting")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Storing process / Historian"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Synchronizing writes"),(0,r.kt)("li",{parentName:"ol"},"Scheduler")))),(0,r.kt)("h4",{id:"regular-features-snapshotting---primitivesnapshotter"},"Regular features snapshotting - PrimitiveSnapshotter"),(0,r.kt)("p",null,"We are keeping every ",(0,r.kt)("strong",{parentName:"p"},"change")," to the feature. To do that we just need to hook in just after the write in the pipeline."),(0,r.kt)("p",null,"Every feature's writing request in the pipeline triggers writing to a distributed queue:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pipeline: write"),(0,r.kt)("li",{parentName:"ol"},"\u2192Pipeline: Go routing to Historian.syncMessage{fqn, entityId} ",(0,r.kt)("strong",{parentName:"li"},"(without value!)")),(0,r.kt)("li",{parentName:"ol"},"\u2192Historian: write a ",(0,r.kt)("em",{parentName:"li"},"notification message")," to a Redis stream")),(0,r.kt)("h4",{id:"windowed-features--windowsnapshotter"},"Windowed features / WindowSnapshotter"),(0,r.kt)("p",null,"Due to the different behavior and volatility of windowed features, a different implementation is required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Windowed features")," are prune to MANY writes (due to the fact they are used to storing aggregations)"),(0,r.kt)("li",{parentName:"ul"},"Copying every change is expensive, inefficient and duplicating the raw data under the hood.")),(0,r.kt)("h4",{id:"historian"},"Historian"),(0,r.kt)("p",null,"The historian is responsible for syncing and scheduling history records to the historical storage (offline store)."),(0,r.kt)("p",null,"The historian is running only on a leader instance."),(0,r.kt)("p",null,"// TODO should we implement it in spark?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It has an internal job queue that combines duplicated ",(0,r.kt)("em",{parentName:"li"},"writes"),": ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/k8s.io/client-go/util/workqueue"},"workqueue")),(0,r.kt)("li",{parentName:"ol"},"It's responsible for snapshotting the ",(0,r.kt)("em",{parentName:"li"},"dead windows")," buckets every over a specified D duration.\n3.  \u2192 send a ",(0,r.kt)("em",{parentName:"li"},"write job")," queue"),(0,r.kt)("li",{parentName:"ol"},"It's responsible for synchronizing jobs from the streams:\n5.  Expose a function that writes a ",(0,r.kt)("em",{parentName:"li"},"notification message")," to the streams"),(0,r.kt)("li",{parentName:"ol"},"Every X seconds it's executing the jobs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Collect Jobs",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"combine them into a single Redis read transaction"),(0,r.kt)("li",{parentName:"ol"},"read the values"),(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("em",{parentName:"li"},"writing job")," of the results"))),(0,r.kt)("li",{parentName:"ul"},"Write jobs:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Write the historical records to Parquet files")))))),(0,r.kt)("h2",{id:"builders"},"Builders"),(0,r.kt)("p",null,"The builder is the concept responsible to create a feature-value for a specific use-case (i.e. REST, expression, Kafka, salesforce, etc)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The builder configuration is defined in two places:"),(0,r.kt)("li",{parentName:"ul"},"DataConnector CRD - defining the connection configuration"),(0,r.kt)("li",{parentName:"ul"},"Feature CRD - defining the business logic of a feature creation"),(0,r.kt)("li",{parentName:"ul"},"Part of this resource specifies how the builder should behave\n",(0,r.kt)("img",{alt:"Shape1",src:a(2718).Z,width:"1152",height:"864"})),(0,r.kt)("li",{parentName:"ul"},"Builder can be implemented externally or internally"),(0,r.kt)("li",{parentName:"ul"},'Externally - as a standalone service (aka "runner" deployment)\nThis can be implemented by writing a custom micro-service'),(0,r.kt)("li",{parentName:"ul"},"Configuring the runner"),(0,r.kt)("li",{parentName:"ul"},"Configuration is being set in deployment time"),(0,r.kt)("li",{parentName:"ul"},"The runner cal pull the configuration from the CORE using polling (i.e. in a case of adding a feature to the same connector)"),(0,r.kt)("li",{parentName:"ul"},'Internally - in-process of the "CORE"')),(0,r.kt)("p",null,'This can be implemented by writing a "plugin" to that adds a middleware for this feature'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Writing data from the "builders" to the "feature value" is done using the "low-level API" (whether it\'s internally or externally)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Implementing a new builder requires implementing an interface (and optionally a standalone runner as a docker):")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BuilderName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OnNewFeature - run at reconciling time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PreGet - returns a list of pre-get middlewares")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PostGet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PreSet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PostSet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ExternalConfig(","[","]conn,","[","]features) -",">"," any"))),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRD - Custom Resource Definition"),(0,r.kt)("li",{parentName:"ul"},"Feature - A data input for the model which describes a trait of our data"),(0,r.kt)("li",{parentName:"ul"},"Feature Manifest - A feature's business logic declarative file. This is used by data scientists to describe how the platform should generate feature values from ",(0,r.kt)("em",{parentName:"li"},"raw data")," and how the platform should store it."),(0,r.kt)("li",{parentName:"ul"},"FeatureSet - A set of features that are used to serve a specific model."),(0,r.kt)("li",{parentName:"ul"},"Builder - A ",(0,r.kt)("em",{parentName:"li"},"conceptual")," building block that covers a business-logic use-case(i.e. Streaming, gRPC, REST, Salesforce) and helps users to build transformation without much hassle.\nA builder can be implemented either with a Runner or with a Middleware (or a combination of them)."),(0,r.kt)("li",{parentName:"ul"},"DataConnector - A ",(0,r.kt)("em",{parentName:"li"},"conceptual")," unit that retrieves the data from the production system. Sometimes it's an actual unit(i.e. Kafka Runner), and sometimes it's just configuring a program."),(0,r.kt)("li",{parentName:"ul"},"DataConnector Manifest - The configuration of the DataConnector"),(0,r.kt)("li",{parentName:"ul"},"CORE - The main platform's program. This is the unit that is responsible to glue it all together"),(0,r.kt)("li",{parentName:"ul"},"Read/Write pipeline - The pipeline of fetching/setting data from/to the storage. At its middle, we have the actual operation of the storage."),(0,r.kt)("li",{parentName:"ul"},"Middlewares - The steps that wrap the read/write of the store"),(0,r.kt)("li",{parentName:"ul"},"Runner - A unit that is running outside of the CORE and responsible"),(0,r.kt)("li",{parentName:"ul"},"Store Provider / Provider - the storage implementation. In theory, it is possible to replace it."),(0,r.kt)("li",{parentName:"ul"},"State - The online storage"),(0,r.kt)("li",{parentName:"ul"},"Historical Storage")))}c.isMDXComponent=!0},2718:function(e,t,a){t.Z=a.p+"assets/images/spec.builders-bd7aa9984b41f9f5ff180834deb1488b.png"}}]);