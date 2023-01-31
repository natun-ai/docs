"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[342],{4907:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(9953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,c=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(1943),r=(n(9953),n(4907));const i={},l="Built-in constants and functions",o={unversionedId:"reference/pyexp/pyexp-language-definition/built-in-constants-and-functions",id:"reference/pyexp/pyexp-language-definition/built-in-constants-and-functions",title:"Built-in constants and functions",description:'The outermost block of the Starlark environment is known as the "predeclared" block. It defines a number of fundamental values and functions needed by all Starlark programs, such as None, True, False, and len, and possibly additional application-specific names.',source:"@site/docs/reference/pyexp/pyexp-language-definition/built-in-constants-and-functions.md",sourceDirName:"reference/pyexp/pyexp-language-definition",slug:"/reference/pyexp/pyexp-language-definition/built-in-constants-and-functions",permalink:"/docs/reference/pyexp/pyexp-language-definition/built-in-constants-and-functions",draft:!1,editUrl:"https://github.com/raptor-ml/docs/tree/master/docs/reference/pyexp/pyexp-language-definition/built-in-constants-and-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"PyExp: Language definition",permalink:"/docs/reference/pyexp/pyexp-language-definition/"},next:{title:"Built-in methods",permalink:"/docs/reference/pyexp/pyexp-language-definition/built-in-methods"}},p={},s=[{value:"None",id:"none",level:2},{value:"True and False",id:"true-and-false",level:2},{value:"abs",id:"abs",level:2},{value:"any",id:"any",level:2},{value:"all",id:"all",level:2},{value:"bool",id:"bool",level:2},{value:"chr",id:"chr",level:2},{value:"dict",id:"dict",level:2},{value:"dir",id:"dir",level:2},{value:"enumerate",id:"enumerate",level:2},{value:"fail",id:"fail",level:2},{value:"float",id:"float",level:2},{value:"getattr",id:"getattr",level:2},{value:"hasattr",id:"hasattr",level:2},{value:"hash",id:"hash",level:2},{value:"int",id:"int",level:2},{value:"len",id:"len",level:2},{value:"list",id:"list",level:2},{value:"max",id:"max",level:2},{value:"min",id:"min",level:2},{value:"ord",id:"ord",level:2},{value:"print",id:"print",level:2},{value:"range",id:"range",level:2},{value:"repr",id:"repr",level:2},{value:"reversed",id:"reversed",level:2},{value:"set",id:"set",level:2},{value:"sorted",id:"sorted",level:2},{value:"str",id:"str",level:2},{value:"tuple",id:"tuple",level:2},{value:"type",id:"type",level:2},{value:"zip",id:"zip",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"built-in-constants-and-functions"},"Built-in constants and functions"),(0,r.kt)("p",null,'The outermost block of the Starlark environment is known as the "predeclared" block. It defines a number of fundamental values and functions needed by all Starlark programs, such as ',(0,r.kt)("inlineCode",{parentName:"p"},"None"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"len"),", and possibly additional application-specific names."),(0,r.kt)("p",null,"These names are not reserved words so Starlark programs are free to redefine them in a smaller block such as a function body or even at the top level of a module. However, doing so may be confusing to the reader. Nonetheless, this rule permits names to be added to the predeclared block in later versions of the language (or application-specific dialect) without breaking existing programs."),(0,r.kt)("h2",{id:"none"},"None"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"None")," is the distinguished value of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"NoneType"),"."),(0,r.kt)("h2",{id:"true-and-false"},"True and False"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"True")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," are the two values of type ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,r.kt)("h2",{id:"abs"},"abs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"abs(x)")," returns the absolute value of its argument ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", which must be an int or float. The result has the same type as ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,r.kt)("h2",{id:"any"},"any"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any(x)")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if any element of the iterable sequence x has a truth value of true. If the iterable is empty, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,r.kt)("h2",{id:"all"},"all"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"all(x)")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," if any element of the iterable sequence x has a truth value of false. If the iterable is empty, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("h2",{id:"bool"},"bool"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bool(x)")," interprets ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," as a Boolean value---",(0,r.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),". With no argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"bool()")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,r.kt)("h2",{id:"chr"},"chr"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chr(i)")," returns a string that encodes the single Unicode code point whose value is specified by the integer ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"chr")," fails unless 0 \u2264 ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u2264 0x10FFFF."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chr(65)                         # "A",\nchr(1049)                       # "\u0419", CYRILLIC CAPITAL LETTER SHORT I\nchr(0x1F63F)                    # "\ud83d\ude3f", CRYING CAT FACE\n')),(0,r.kt)("p",null,"See also: ",(0,r.kt)("inlineCode",{parentName:"p"},"ord"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implementation note:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"chr")," is not provided by the Java implementation."),(0,r.kt)("h2",{id:"dict"},"dict"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dict")," creates a dictionary. It accepts up to one positional argument, which is interpreted as an iterable of two-element sequences (pairs), each specifying a key/value pair in the resulting dictionary."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dict")," also accepts any number of keyword arguments, each of which specifies a key/value pair in the resulting dictionary; each keyword is treated as a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'dict()                          # {}, empty dictionary\ndict([(1, 2), (3, 4)])          # {1: 2, 3: 4}\ndict([(1, 2), ["a", "b"]])      # {1: 2, "a": "b"}\ndict(one=1, two=2)              # {"one": 1, "two", 1}\ndict([(1, 2)], x=3)             # {1: 2, "x": 3}\n')),(0,r.kt)("p",null,"With no arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"dict()")," returns a new empty dictionary."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dict(x)")," where x is a dictionary returns a new copy of x."),(0,r.kt)("h2",{id:"dir"},"dir"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dir(x)")," returns a new sorted list of the names of the attributes (fields and methods) of its operand. The attributes of a value ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," are the names ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," such that ",(0,r.kt)("inlineCode",{parentName:"p"},"x.f")," is a valid expression."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dir(\"hello\")                    # ['capitalize', 'count', ...], the methods of a string\n")),(0,r.kt)("p",null,"Several types known to the interpreter, such as list, string, and dict, have methods, but none have fields. However, an application may define types with fields that may be read or set by statements such as these:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"y = x.f\nx.f = y\n")),(0,r.kt)("h2",{id:"enumerate"},"enumerate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enumerate(x)")," returns a list of (index, value) pairs, each containing successive values of the iterable sequence xand the index of the value within the sequence."),(0,r.kt)("p",null,"The optional second parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),", specifies an integer value to add to each index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'enumerate(["zero", "one", "two"])               # [(0, "zero"), (1, "one"), (2, "two")]\nenumerate(["one", "two"], 1)                    # [(1, "one"), (2, "two")]\n')),(0,r.kt)("h2",{id:"fail"},"fail"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'fail(*args, sep=" ")')," function causes execution to fail with the specified error message. Like ",(0,r.kt)("inlineCode",{parentName:"p"},"print"),", arguments are formatted as if by ",(0,r.kt)("inlineCode",{parentName:"p"},"str(x)")," and separated by a space, unless an alternative separator is specified by a ",(0,r.kt)("inlineCode",{parentName:"p"},"sep")," named argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'fail("oops")                # "fail: oops"\nfail("oops", 1, False, sep=\'/\')     # "fail: oops/1/False"\n')),(0,r.kt)("h2",{id:"float"},"float"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"float(x)")," interprets its argument as a floating-point number."),(0,r.kt)("p",null,"If x is a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", the result is x. if x is an ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", the result is the nearest floating point value to x. If x is a string, the string is interpreted as a floating-point literal. With no arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"float()")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0"),"."),(0,r.kt)("h2",{id:"getattr"},"getattr"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getattr(x, name)")," returns the value of the attribute (field or method) of x named ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". It is a dynamic error if x has no such attribute."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'getattr(x, "f")')," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"x.f"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'getattr("banana", "split")("a")        # ["b", "n", "n", ""], equivalent to "banana".split("a")\n')),(0,r.kt)("p",null,"The three-argument form ",(0,r.kt)("inlineCode",{parentName:"p"},"getattr(x, name, default)")," returns the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value instead of failing."),(0,r.kt)("h2",{id:"hasattr"},"hasattr"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hasattr(x, name)")," reports whether x has an attribute (field or method) named ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,r.kt)("h2",{id:"hash"},"hash"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hash(x)")," returns an integer hash of a string x such that two equal strings have the same hash. In other words ",(0,r.kt)("inlineCode",{parentName:"p"},"x == y")," implies ",(0,r.kt)("inlineCode",{parentName:"p"},"hash(x) == hash(y)"),"."),(0,r.kt)("p",null,"In the interests of reproducibility of Starlark program behavior over time and across implementations, the specific hash function is the same as that implemented by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#hashCode"},"java.lang.String.hashCode"),", a simple polynomial accumulator over the UTF-16 transcoding of the string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hash")," fails if given a non-string operand, even if the value is hashable and thus suitable as the key of dictionary."),(0,r.kt)("h2",{id:"int"},"int"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int(x[, base])")," interprets its argument as an integer."),(0,r.kt)("p",null,"If x is an ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", the result is x. If x is a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", the result is the integer value nearest to x, truncating towards zero; it is an error if x is not finite (",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"+Inf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-Inf"),"). If x is a ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),", the result is 0 for ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," or 1 for ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("p",null,"If x is a string, it is interpreted as a sequence of digits in the specified base, decimal by default. If ",(0,r.kt)("inlineCode",{parentName:"p"},"base")," is zero, x is interpreted like an integer literal, the base being inferred from an optional base prefix such as ",(0,r.kt)("inlineCode",{parentName:"p"},"0b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0o"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," preceding the first digit. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"base")," is provided explictly, a matching base prefix is also permitted, and has no effect. Irrespective of base, the string may start with an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," sign indicating the sign of the result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'int("11")               # 11\nint("11", 0)            # 11\nint("11", 10)           # 11\nint("11", 2)            # 3\nint("11", 8)            # 9\nint("11", 16)           # 17\n\nint("0x11", 0)          # 17\nint("0x11", 16)         # 17\nint("0b1", 16)          # 177 (0xb1)\nint("0b1", 2)           # 1\nint("0b1", 0)           # 1\n\nint("0x11")             # error: invalid literal with base 10\n')),(0,r.kt)("h2",{id:"len"},"len"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"len(x)")," returns the number of elements in its argument."),(0,r.kt)("p",null,"It is a dynamic error if its argument is not a sequence."),(0,r.kt)("h2",{id:"list"},"list"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"list")," constructs a list."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"list(x)")," returns a new list containing the elements of the iterable sequence x."),(0,r.kt)("p",null,"With no argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"list()")," returns a new empty list."),(0,r.kt)("h2",{id:"max"},"max"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max(x)")," returns the greatest element in the iterable sequence x."),(0,r.kt)("p",null,"It is an error if any element does not support ordered comparison, or if the sequence is empty."),(0,r.kt)("p",null,"The optional named parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," specifies a function to be applied to each element prior to comparison."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'max([3, 1, 4, 1, 5, 9])                         # 9\nmax("two", "three", "four")                     # "two", the lexicographically greatest\nmax("two", "three", "four", key=len)            # "three", the longest\n')),(0,r.kt)("h2",{id:"min"},"min"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"min(x)")," returns the least element in the iterable sequence x."),(0,r.kt)("p",null,"It is an error if any element does not support ordered comparison, or if the sequence is empty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'min([3, 1, 4, 1, 5, 9])                         # 1\nmin("two", "three", "four")                     # "four", the lexicographically least\nmin("two", "three", "four", key=len)            # "two", the shortest\n')),(0,r.kt)("h2",{id:"ord"},"ord"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ord(s)")," returns the integer value of the sole Unicode code point encoded by the string ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," does not encode exactly one Unicode code point, ",(0,r.kt)("inlineCode",{parentName:"p"},"ord")," fails. Each invalid code within the string is treated as if it encodes the Unicode replacement character, U+FFFD."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ord("A")                # 65\nord("\u0419")                # 1049\nord("\ud83d\ude3f")                   # 0x1F63F\nord("\u0419"[1:])                # 0xFFFD (Unicode replacement character)\n')),(0,r.kt)("p",null,"See also: ",(0,r.kt)("inlineCode",{parentName:"p"},"chr"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implementation note:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ord")," is not provided by the Java implementation."),(0,r.kt)("h2",{id:"print"},"print"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'print(*args, sep=" ")')," prints its arguments, followed by a newline. Arguments are formatted as if by ",(0,r.kt)("inlineCode",{parentName:"p"},"str(x)")," and separated with a space, unless an alternative separator is specified by a ",(0,r.kt)("inlineCode",{parentName:"p"},"sep")," named argument."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(1, "hi")                  # "1 hi\\n"\nprint("hello", "world")         # "hello world\\n"\nprint("hello", "world", sep=", ")   # "hello, world\\n"\n')),(0,r.kt)("p",null,"Typically the formatted string is printed to the standard error file, but the exact behavior is a property of the Starlark thread and is determined by the host application."),(0,r.kt)("h2",{id:"range"},"range"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"range")," returns an immutable sequence of integers defined by the specified interval and stride."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"range(stop)                             # equivalent to range(0, stop)\nrange(start, stop)                      # equivalent to range(start, stop, 1)\nrange(start, stop, step)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"range")," requires between one and three integer arguments. With one argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"range(stop)")," returns the ascending sequence of non-negative integers less than ",(0,r.kt)("inlineCode",{parentName:"p"},"stop"),". With two arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"range(start, stop)")," returns only integers not less than ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"."),(0,r.kt)("p",null,"With three arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"range(start, stop, step)")," returns integers formed by successively adding ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," until the value meets or passes ",(0,r.kt)("inlineCode",{parentName:"p"},"stop"),". A call to ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," fails if the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," is zero."),(0,r.kt)("p",null,"A call to ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," does not materialize the entire sequence, but returns a fixed-size value of type ",(0,r.kt)("inlineCode",{parentName:"p"},'"range"')," that represents the parameters that define the sequence. The ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," value is iterable and may be indexed efficiently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"list(range(10))                         # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nlist(range(3, 10))                      # [3, 4, 5, 6, 7, 8, 9]\nlist(range(3, 10, 2))                   # [3, 5, 7, 9]\nlist(range(10, 3, -2))                  # [10, 8, 6, 4]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"len")," function applied to a ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," value returns its length. The truth value of a ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," value is ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if its length is non-zero."),(0,r.kt)("p",null,"Range values are comparable: two ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," values compare equal if they denote the same sequence of integers, even if they were created using different parameters."),(0,r.kt)("p",null,"Range values are not hashable."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," function applied to a ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," value yields a string of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"range(10)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"range(1, 10)"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"range(1, 10, 2)"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"x in y")," operator, where ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," is a range, reports whether ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is equal to some member of the sequence ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"; the operation fails unless ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is a number."),(0,r.kt)("h2",{id:"repr"},"repr"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"repr(x)")," formats its argument as a string."),(0,r.kt)("p",null,"All strings in the result are double-quoted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'repr(1)                 # \'1\'\nrepr("x")               # \'"x"\'\nrepr([1, "x"])          # \'[1, "x"]\'\n')),(0,r.kt)("h2",{id:"reversed"},"reversed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reversed(x)")," returns a new list containing the elements of the iterable sequence x in reverse order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'reversed(range(5))                              # [4, 3, 2, 1, 0]\nreversed("stressed".codepoints())               # ["d", "e", "s", "s", "e", "r", "t", "s"]\nreversed({"one": 1, "two": 2}.keys())           # ["two", "one"]\n')),(0,r.kt)("h2",{id:"set"},"set"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set(x)")," returns a new set containing the elements of the iterable x. With no argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"set()")," returns a new empty set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"set([3, 1, 4, 1, 5, 9])         # set([3, 1, 4, 5, 9])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implementation note:")," Sets are an optional feature of the Go implementation of Starlark, enabled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"-set")," flag."),(0,r.kt)("h2",{id:"sorted"},"sorted"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sorted(x)")," returns a new list containing the elements of the iterable sequence x, in sorted order. The sort algorithm is stable."),(0,r.kt)("p",null,"The optional named parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse"),", if true, causes ",(0,r.kt)("inlineCode",{parentName:"p"},"sorted")," to return results in reverse sorted order."),(0,r.kt)("p",null,"The optional named parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," specifies a function of one argument to apply to obtain the value's sort key. The default behavior is the identity function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'sorted(set("harbors".codepoints()))                             # [\'a\', \'b\', \'h\', \'o\', \'r\', \'s\']\nsorted([3, 1, 4, 1, 5, 9])                                      # [1, 1, 3, 4, 5, 9]\nsorted([3, 1, 4, 1, 5, 9], reverse=True)                        # [9, 5, 4, 3, 1, 1]\n\nsorted(["two", "three", "four"], key=len)                       # ["two", "four", "three"], shortest to longest\nsorted(["two", "three", "four"], key=len, reverse=True)         # ["three", "four", "two"], longest to shortest\n')),(0,r.kt)("h2",{id:"str"},"str"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"str(x)")," formats its argument as a string."),(0,r.kt)("p",null,"If x is a string, the result is x (without quotation). All other strings, such as elements of a list of strings, are double-quoted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"str(1)                          # '1'\nstr(\"x\")                        # 'x'\nstr([1, \"x\"])                   # '[1, \"x\"]'\n")),(0,r.kt)("h2",{id:"tuple"},"tuple"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tuple(x)")," returns a tuple containing the elements of the iterable x."),(0,r.kt)("p",null,"With no arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"tuple()")," returns the empty tuple."),(0,r.kt)("h2",{id:"type"},"type"),(0,r.kt)("p",null,"type(x) returns a string describing the type of its operand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'type(None)              # "NoneType"\ntype(0)                 # "int"\ntype(0.0)               # "float"\n')),(0,r.kt)("h2",{id:"zip"},"zip"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zip()")," returns a new list of n-tuples formed from corresponding elements of each of the n iterable sequences provided as arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),". That is, the first tuple contains the first element of each of the sequences, the second element contains the second element of each of the sequences, and so on. The result list is only as long as the shortest of the input sequences."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'zip()                                   # []\nzip(range(5))                           # [(0,), (1,), (2,), (3,), (4,)]\nzip(range(5), "abc")                    # [(0, "a"), (1, "b"), (2, "c")]\n')))}u.isMDXComponent=!0}}]);