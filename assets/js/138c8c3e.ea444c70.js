"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9631],{6875:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(4964),r=i(1523);const s={title:"Raptor Spec",sidebar_label:"Architectural Design",sidebar_position:99,id:"spec"},o="High level design",l={id:"reference/spec",title:"Raptor Spec",description:"Feature Definitions are an abstraction that contains metadata about the feature that should lead to create a Feature",source:"@site/docs/reference/spec.md",sourceDirName:"reference",slug:"/reference/spec",permalink:"/reference/spec",draft:!1,unlisted:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/spec.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"Raptor Spec",sidebar_label:"Architectural Design",sidebar_position:99,id:"spec"},sidebar:"reference",previous:{title:"Extending Raptor",permalink:"/reference/extending-raptor/"}},a={},d=[{value:"Feature Value",id:"feature-value",level:2},{value:"Kubernetes Controller",id:"kubernetes-controller",level:2},{value:"Core&#39;s engine",id:"cores-engine",level:2},{value:"Core&#39;s operator",id:"cores-operator",level:2},{value:"Low-level API",id:"low-level-api",level:2},{value:"Online-aggregations",id:"online-aggregations",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Builders",id:"builders",level:2},{value:"Snapshotting",id:"snapshotting",level:2},{value:"Regular features snapshotting",id:"regular-features-snapshotting",level:3},{value:"Windowed features snapshotting",id:"windowed-features-snapshotting",level:3},{value:"Synchronization process",id:"synchronization-process",level:2},{value:"Collect Notifications",id:"collect-notifications",level:3},{value:"Write jobs:",id:"write-jobs",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"high-level-design",children:"High level design"}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart\n    subgraph Core\n        direction TB\n        engine --\x3e pipeline\n        ctrl[Kubernetes Controller] & acc["Accessor<br><i>(REST & gRPC APIs)</i>"] <--\x3e engine\n\n        subgraph Engine\n            engine\n            pipeline --\x3e middlewares --\x3e state\n            runtime --\x3e engine\n            runtime --\x3e middlewares\n\n            subgraph state\n                direction TB\n                p[state provider]\n                win[window fns]\n                notify\n            end\n\n            subgraph middlewares\n                direction TB\n                REST\n                GeoIP\n                gRPC\n                encoding\n                validations\n                ...\n            end\n\n            subgraph runtime\n                direction TB\n                dyn[dynamic runtime manager]\n                exec[execution]\n            end\n        end\n    end\n\n    redis[("distributed state <br><i>(redis)</i>")] <-----\x3e state & sub\n    ft[Feature CRD] --\x3e ctrl\n    dsrc[DataSource CRD] --\x3e ctrl\n    model[Model CRD] --\x3e ctrl\n    ctrl <---\x3e mserv[External Model Servers]\n    middlewares --\x3e mserv\n\n    subgraph runners\n        direction LR\n        subgraph webhook\n            wh[runner] <--\x3e r[runtime] --\x3e acc\n        end\n        subgraph streaming\n            st[runner] <--\x3e r2[runtime] --\x3e acc\n        end\n    end\n    subgraph historian\n        direction LR\n        sub[notifications subscriber] --\x3e snapshotter & write\n        snapshotter --\x3e write\n    end\n\n    write --\x3e dw[( datalake: s3 / snowflake)]'}),"\n",(0,t.jsx)(n.h1,{id:"feature-definitions",children:"Feature Definitions"}),"\n",(0,t.jsx)(n.p,{children:"Feature Definitions are an abstraction that contains metadata about the feature that should lead to create a Feature\nValue."}),"\n",(0,t.jsx)(n.p,{children:"Feature definitions contains the metadata of the feature, and the business logic of the feature."}),"\n",(0,t.jsx)(n.p,{children:"The FeatureSpec struct defines the desired state of the Feature resource. The struct contains the following fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Primitive"})," (required): Defines the type of the underlying feature-value that a Feature should respond with."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Int"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"String"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Float"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Bool"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Timestamp"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"[]Int"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"[]String"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"[]Float"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"[]Bool"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"[]Timestamp"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Freshness"}),' (required): Defines the age of a feature-value (time since the value has been set) to consider it as "\nfresh." Fresh values don\'t require re-ingestion.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Staleness"}),' (required): Defines the age of a feature-value (time since the value has been set) to consider it as "\nstale." Stale values are not fit for usage and will require re-ingestion.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Timeout"})," (optional): Defines the maximum ingestion time allowed to calculate the feature value."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"KeepPrevious"})," (optional): Defines the number of previous values to keep in the history."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Keys"})," (required): Defines the list of keys required to calculate the feature value."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DataSource"})," (optional): A reference to the DataSource that the feature is associated with."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Builder"})," (required): Defines a building block to use to build the feature value."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, feature's in Raptor has a unique identifier called FQN (Fully Qualified Name). The FQN is a unique\nidentifier for a feature, and is composed of the following: ",(0,t.jsx)(n.code,{children:"<namespace>.<feature-name>"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"feature-value",children:"Feature Value"}),"\n",(0,t.jsx)(n.p,{children:"The Feature Value is the computed value of a feature's ingestion."}),"\n",(0,t.jsx)(n.p,{children:"Properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"fqn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"entity_id"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"value"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"timestamp"})}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"models",children:"Models"}),"\n",(0,t.jsx)(n.p,{children:"Models in Raptor have two main components:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Model execution - implemented as a Feature pipeline. The model pipeline build a feature set of the model's\nrequirements, and then use it for predictions against the model."}),"\n",(0,t.jsx)(n.li,{children:"Model deployment - uses different model servers to serve the model."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"core",children:"Core"}),"\n",(0,t.jsx)(n.p,{children:'The Core is the centeral component of Raptor. It acts as a "compiler" for the Raptor Definitions, and responsible\nfor the "production" implementation for these definitions.'}),"\n",(0,t.jsx)(n.p,{children:"The Core's key responsibilities include:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Read the Feature Definitions"}),"\n",(0,t.jsx)(n.li,{children:'Create an appropriate "builder" for each Feature Definition using the internal [read/write pipelines][#Pipleines],\nand [runners][#Data-ingestion]'}),"\n",(0,t.jsx)(n.li,{children:"Maintain the orchestration and monitoring of the system"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Core consists of several key components:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"[Engine][#Cores-engine] - responsible for the implementing the calculation pipelines"}),"\n",(0,t.jsx)(n.li,{children:"[Operator][#Cores-operator] - responsible for system orchestration, including the deployment of various services."}),"\n",(0,t.jsx)(n.li,{children:"State- responsible for maintaining the state of the system, including the state of values and the system itself."}),"\n",(0,t.jsx)(n.li,{children:"Accessor - responsible for providing access to the system state through APIs."}),"\n",(0,t.jsx)(n.li,{children:"Plugin system - responsible for loading plugins"}),"\n",(0,t.jsx)(n.li,{children:"Runtimes - responsible for executing Python code"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"kubernetes-controller",children:"Kubernetes Controller"}),"\n",(0,t.jsx)(n.p,{children:"The Kubernetes Controller in Raptor allows users to utilize Raptor in the Kubernetes environment. It is a component of the Core and supports validating manifests during creation."}),"\n",(0,t.jsx)(n.p,{children:"The controller reconcile Custom Resource Definitions (CRDs) for Feature, DataSource, and Models, and spawns additional\nservices and resources as needed."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The controller supports validation on time of manifest create"}),"\n",(0,t.jsxs)(n.li,{children:['It "read and implement" the CRDs',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Feature - defines a feature metadata & business logic"}),"\n",(0,t.jsx)(n.li,{children:"DataSource - defines the source configuration (i.e. how to connect to Kafka, what's the creds, what's the\ntopic, schema, allocated resources, etc.)"}),"\n",(0,t.jsx)(n.li,{children:"Model - defines a set of features and inference them with the model"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Update operations for Features are blocked by default and will be enabled ",(0,t.jsx)(n.em,{children:"only by enabling a special flag"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cores-engine",children:"Core's engine"}),"\n",(0,t.jsx)(n.p,{children:"The Core's engine is responsible for accessing and processing the feature values, as well as storing them in the State,\nand executing pipelines."}),"\n",(0,t.jsx)(n.h2,{id:"cores-operator",children:"Core's operator"}),"\n",(0,t.jsx)(n.p,{children:"The Core's operator is responsible for the orchestration of the system. It is responsible for the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Spawning the different services such as Runners"}),"\n",(0,t.jsx)(n.li,{children:"Modifying the CR's status"}),"\n",(0,t.jsx)(n.li,{children:"Implementing CR's webhooks"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"low-level-api",children:"Low-level API"}),"\n",(0,t.jsx)(n.p,{children:"The low-level API (aka Engine API) support low-level operations over feature values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Engine is the main engine of the Core\n// It is responsible for the low-level operation for the features against the feature store\ntype Engine interface {\n    // FeatureDescriptor returns the FeatureDescriptor for the given FQN\n    FeatureDescriptor(ctx context.Context, selector string) (FeatureDescriptor, error)\n    // Get returns the value for the given FQN and keys\n    // If the feature is not available, it returns nil.\n    // If the feature is windowed, the returned Value is a map from window function to Value.\n    Get(ctx context.Context, selector string, keys Keys) (Value, FeatureDescriptor, error)\n    // Set sets the raw value for the given FQN and keys\n    // If the feature's primitive is a List, it replaces the entire list.\n    // If the feature is windowed, it is aliased to WindowAdd instead of Set.\n    Set(ctx context.Context, FQN string, keys Keys, val any, ts time.Time) error\n    // Append appends to the raw value for the given FQN and keys\n    // If the feature's primitive is NOT a List it will throw an error.\n    Append(ctx context.Context, FQN string, keys Keys, val any, ts time.Time) error\n    // Incr increments the raw value of the feature.\n    // If the feature's primitive is NOT a Scalar it will throw an error.\n    // It returns the updated value in the state, and an error if occurred.\n    Incr(ctx context.Context, FQN string, keys Keys, by any, ts time.Time) error\n    // Update is the common function to update a feature SimpleValue.\n    // Under the hood, it utilizes lower-level functions depending on the type of the feature.\n    //  - Set for Scalars\n    //\t- Append for Lists\n    //  - WindowAdd for Windows\n    Update(ctx context.Context, FQN string, keys Keys, val any, ts time.Time) error\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is exposed via the Accessor as gRPC and Rest."}),"\n",(0,t.jsx)(n.h2,{id:"online-aggregations",children:"Online-aggregations"}),"\n",(0,t.jsx)(n.p,{children:"The engine support online aggregation (using the bucketing algorithm)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SUM"}),"\n",(0,t.jsx)(n.li,{children:"MAX"}),"\n",(0,t.jsx)(n.li,{children:"MIN"}),"\n",(0,t.jsx)(n.li,{children:"AVG"}),"\n",(0,t.jsx)(n.li,{children:"COUNT"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"pipelines",children:"Pipelines"}),"\n",(0,t.jsx)(n.p,{children:"Getting and Setting values to the State is performed through pipelines. A pipeline is composed by a chain of middleware\nfunctions that wraps the access to/from the State by the priority(the lowest priority, the earlier it's executed) that\neach middleware is defined with:"}),"\n",(0,t.jsx)(n.mermaid,{value:'graph LR\n    subgraph Get Pipeline\n        PreG["Pre Get #1"] -- 1 . . . n --\x3e PreG99["Pre Get #99"] --\x3e Get[Get from the State] --\x3e PostG["Post Get #1"] -- 1 . . . n --\x3e PostG99["Post Get #99"]\n    end\n    subgraph Set Pipeline\n        PreS["Pre Set #1"] -- 1 . . . n --\x3e PreS99["Pre Set #99"] --\x3e Set[Set to the State] --\x3e PostS["Post Set #1"] -- 1 . . . n --\x3e PostS99["Post Set #99"]\n    end'}),"\n",(0,t.jsx)(n.p,{children:"The middlewares allow chaining a set of functions when getting or setting a value, in order to mutate the value (or to\nprevent the operation). This is useful for implementing a variety of features, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Validations - validations are PreSet middlewares"}),"\n",(0,t.jsx)(n.li,{children:"DataConnectors that retrieve the data on the time-of-request (i.e. REST API)"}),"\n",(0,t.jsx)(n.li,{children:"Transformations"}),"\n",(0,t.jsx)(n.li,{children:'Encoders - i.e. attach "hashing" for the value at PostGet'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"runtime",children:"Runtime"}),"\n",(0,t.jsx)(n.p,{children:"The runtime is the unit that is responsible to run Python code. It is implemented as a sidecar container that is\ndeployed with the model."}),"\n",(0,t.jsx)(n.p,{children:"The runtime is responsible to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Run the python code"}),"\n",(0,t.jsx)(n.li,{children:"Encapsulate the code execution environment"}),"\n",(0,t.jsx)(n.li,{children:"Provide the code with the required data"}),"\n",(0,t.jsx)(n.li,{children:"Provide the code with the required libraries"}),"\n",(0,t.jsx)(n.li,{children:"Communicate with the Core"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"builders",children:"Builders"}),"\n",(0,t.jsx)(n.p,{children:"Builders are the composition of all the elements required to create a feature value:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Builder Kind - specifies the type of the builder composer. This is the unit that composing the pipeline and the\nimplementation details of the builder (and sometimes responsible for the connector implementation)."}),"\n",(0,t.jsx)(n.li,{children:"Aggregations definition (if any)"}),"\n",(0,t.jsx)(n.li,{children:"Python code"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To build features, the builder required to pull configurations from two places:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DataConnector CRD - defining the connection configuration"}),"\n",(0,t.jsxs)(n.li,{children:["Feature CRD - defining the business logic of a feature creation\n",(0,t.jsx)(n.img,{src:"/assets/spec.builders.png",alt:"Shape1"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Builders are an amorphic concept that unite together a set of instructions how to build the feature value.\nThere is no one unit that implements it."})}),"\n",(0,t.jsx)(n.h1,{id:"data-ingestion",children:"Data ingestion"}),"\n",(0,t.jsx)(n.p,{children:"Data ingestion can be implemented externally or internally"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Externally - as a standalone service (aka "Runner" deployment)\nThis can be implemented by writing a custom microservice (i.e. for webhook or streaming connectors)'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Internally - in-process of the "Core", utilizing the GET/SET pipeline.\nThis can be implemented by writing a "plugin" to that adds a middleware for this feature'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Writing data as "feature value" is done using the "low-level API" (whether it\'s internally via the library or externally\nby the runtime sidecar)'}),"\n",(0,t.jsx)(n.h1,{id:"historian",children:"Historian"}),"\n",(0,t.jsx)(n.p,{children:"The historian is responsible to keep records of the (current) State (of the world), to a storage.\nIt does that by scheduling a periodic snapshotting of the State to the storage."}),"\n",(0,t.jsx)(n.h2,{id:"snapshotting",children:"Snapshotting"}),"\n",(0,t.jsx)(n.p,{children:"Snapshotting is the process that is responsible for copying data from the real-time/online state to the historical\nstorage."}),"\n",(0,t.jsx)(n.p,{children:"This process is composed of 3 different sub-processes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Regular features snapshotting"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Scheduled Windowed-features snapshotting"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Storing process"})," - Synchronizes write calls"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"regular-features-snapshotting",children:"Regular features snapshotting"}),"\n",(0,t.jsxs)(n.p,{children:["We are keeping every ",(0,t.jsx)(n.strong,{children:"change"})," to the feature. To do that we just need to hook in just after the write in the pipeline."]}),"\n",(0,t.jsx)(n.p,{children:"Every feature's writing request in the pipeline triggers writing to a distributed queue:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Pipeline: write"}),"\n",(0,t.jsxs)(n.li,{children:["\u2192Pipeline: Go routing to ",(0,t.jsx)(n.code,{children:"Historian.AddWriteNotification(fqn, entityId,value)"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u2192Historian library: write a ",(0,t.jsx)(n.em,{children:"notification message"})," to a Redis stream"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"windowed-features-snapshotting",children:"Windowed features snapshotting"}),"\n",(0,t.jsx)(n.p,{children:"Due to the different behavior and volatility of windowed features, a different implementation is required:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Windowed features"})," are prune to MANY writes (due to the fact they are used to storing aggregations)"]}),"\n",(0,t.jsx)(n.li,{children:"Copying every change is expensive, inefficient and duplicating the raw data under the hood."}),"\n",(0,t.jsxs)(n.li,{children:["We are triggering snapshotting of windowed features by:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A periodic snapshotting (every 5 minutes)"}),"\n",(0,t.jsx)(n.li,{children:'Trigger an "update notification" when a windowed feature is written to'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To support the above, we are required to keep buckets in the state a little longer to make sure we're collecting them."}),"\n",(0,t.jsx)(n.h2,{id:"synchronization-process",children:"Synchronization process"}),"\n",(0,t.jsxs)(n.p,{children:["The Synchronization process is running only on a leader instance.\nIt utilizes an internal job queue combines duplicated ",(0,t.jsx)(n.em,{children:"writes"})," and ",(0,t.jsx)(n.em,{children:"collection"})," notifications, and handles them."]}),"\n",(0,t.jsx)(n.h3,{id:"collect-notifications",children:"Collect Notifications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"collect the values"}),"\n",(0,t.jsxs)(n.li,{children:["Add a ",(0,t.jsx)(n.em,{children:"writing job"})," of the results"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"write-jobs",children:"Write jobs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Writing process is running only on a leader instance."}),"\n",(0,t.jsx)(n.li,{children:"Writing the historical records to Historical Provider (i.e. Parquet S3, Snowflake, BigQuery, etc.)"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"glossary",children:"Glossary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CRD - Custom Resource Definition"}),"\n",(0,t.jsx)(n.li,{children:"Feature - A data input for the model which describes a trait of our data"}),"\n",(0,t.jsxs)(n.li,{children:["Feature Definition/Manifest - A feature's business logic declarative code. This is used by data scientists(via the\nLabSDK) to describe how the Core should generate feature values from ",(0,t.jsx)(n.em,{children:"raw data"})," and how the platform should store it."]}),"\n",(0,t.jsx)(n.li,{children:"FeatureSet - A set of features that are used to serve a specific model."}),"\n",(0,t.jsxs)(n.li,{children:["DataSource - A ",(0,t.jsx)(n.em,{children:"conceptual"})," unit that retrieves the data from the production system. Sometimes it's an actual unit(\ni.e. Kafka Runner), and sometimes it's just configuring a program."]}),"\n",(0,t.jsx)(n.li,{children:"DataSource Manifest - The configuration of the DataSource"}),"\n",(0,t.jsx)(n.li,{children:"Core - The main platform's program. This is the unit that is responsible to glue it all together"}),"\n",(0,t.jsx)(n.li,{children:"Read/Write pipeline - The pipeline of fetching/setting data from/to the storage. At its middle, we have the actual\noperation of the storage."}),"\n",(0,t.jsx)(n.li,{children:"Middlewares - The steps that wrap the read/write of the store"}),"\n",(0,t.jsx)(n.li,{children:"Runner - A unit that is running outside the Core and responsible"}),"\n",(0,t.jsx)(n.li,{children:"Historical Provider - the historical storage implementation. We're taking snapshots of the current state to it."}),"\n",(0,t.jsx)(n.li,{children:"State - The state is the unit the stores the feature values to be served to models. It describes the current state of\nthe world."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1523:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6504);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);