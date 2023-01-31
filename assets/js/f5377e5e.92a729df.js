"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[222],{4907:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(9953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(1943),r=(n(9953),n(4907));const i={},a="time",l={unversionedId:"reference/pyexp/raptor-built-ins/time",id:"reference/pyexp/raptor-built-ins/time",title:"time",description:"Module time is a  module of time-related functions and constants. The module defines the following functions:",source:"@site/docs/reference/pyexp/raptor-built-ins/time.md",sourceDirName:"reference/pyexp/raptor-built-ins",slug:"/reference/pyexp/raptor-built-ins/time",permalink:"/docs/reference/pyexp/raptor-built-ins/time",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/pyexp/raptor-built-ins/time.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"struct",permalink:"/docs/reference/pyexp/raptor-built-ins/struct"},next:{title:"Architectural Design",permalink:"/docs/reference/spec"}},p={},s=[{value:"<code>from_timestamp(sec, nsec)</code>",id:"from_timestampsec-nsec",level:3},{value:"<code>is_valid_timezone(loc)</code>",id:"is_valid_timezoneloc",level:3},{value:"<code>now()</code>",id:"now",level:3},{value:"<code>parse_duration(d)</code>",id:"parse_durationd",level:3},{value:"<code>parseTime(x, format, location)</code>",id:"parsetimex-format-location",level:3},{value:"<code>time(year, month, day, hour, minute, second, nanosecond, location)</code>",id:"timeyear-month-day-hour-minute-second-nanosecond-location",level:3},{value:"Constant",id:"constant",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"time"},"time"),(0,r.kt)("p",null,"Module ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," is a  module of time-related functions and constants. The module defines the following functions:"),(0,r.kt)("h3",{id:"from_timestampsec-nsec"},(0,r.kt)("inlineCode",{parentName:"h3"},"from_timestamp(sec, nsec)")),(0,r.kt)("p",null,"Converts the given Unix time corresponding to the number of seconds and (optionally) nanoseconds since ",(0,r.kt)("inlineCode",{parentName:"p"},"January 1, 1970 UTC")," into an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Time"),"."),(0,r.kt)("p",null,"For more details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#Unix"},"https://pkg.go.dev/time#Unix"),"."),(0,r.kt)("h3",{id:"is_valid_timezoneloc"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid_timezone(loc)")),(0,r.kt)("p",null,"Reports whether loc is a valid time zone name."),(0,r.kt)("h3",{id:"now"},(0,r.kt)("inlineCode",{parentName:"h3"},"now()")),(0,r.kt)("p",null,"Returns the current local time. Applications may replace this function with a deterministic one."),(0,r.kt)("h3",{id:"parse_durationd"},(0,r.kt)("inlineCode",{parentName:"h3"},"parse_duration(d)")),(0,r.kt)("p",null,"Parses the given time string using a specific time format and location. The expected arguments are a time string (mandatory), a time format (optional, set to ",(0,r.kt)("inlineCode",{parentName:"p"},"RFC3339")," by default, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"2021-03-22T23:20:50.52Z"'),"), and a name of the location (optional, set to UTC by default)."),(0,r.kt)("p",null,"For more details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#Parse"},"https://pkg.go.dev/time#Parse")," and ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#ParseInLocation"},"https://pkg.go.dev/time#ParseInLocation"),"."),(0,r.kt)("h3",{id:"parsetimex-format-location"},(0,r.kt)("inlineCode",{parentName:"h3"},"parseTime(x, format, location)")),(0,r.kt)("p",null,'Parses the given time string using a specific time format and location. The expected arguments are a time string (mandatory), a time format (optional, set to RFC3339 by default, e.g. "2021-03-22T23:20:50.52Z") and a name of location (optional, set to UTC by default). For more details, refer to ',(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#Parse"},"https://pkg.go.dev/time#Parse")," and ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#ParseInLocation"},"https://pkg.go.dev/time#ParseInLocation"),"."),(0,r.kt)("h3",{id:"timeyear-month-day-hour-minute-second-nanosecond-location"},(0,r.kt)("inlineCode",{parentName:"h3"},"time(year, month, day, hour, minute, second, nanosecond, location)")),(0,r.kt)("p",null,"Returns the Time corresponding to ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd hh:mm:ss + nse"),"c nanoseconds in the appropriate zone for that time in the given location. All the parameters are optional."),(0,r.kt)("h2",{id:"constant"},"Constant"),(0,r.kt)("p",null,"The module also defines the following constants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nanosecond")," - A duration representing one nanosecond."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"microsecond")," - A duration representing one microsecond."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"millisecond")," - A duration representing one millisecond."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second")," - A duration representing one second."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minute")," - A duration representing one minute."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hour")," - A duration representing one hour.")))}m.isMDXComponent=!0}}]);