"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,slug:"/"},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"---",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/Documentation/",draft:!1,editUrl:"https://github.com/Nibiru-Network/nibiru-docs.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/Documentation/category/getting-started"}},l={},u=[{value:"Learn more",id:"learn-more",level:2},{value:"More coming soon!",id:"more-coming-soon",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nibirunet.io"},"Nibiru Network")," is a decentralized storage, bandwidth and compute\nblockchain network that is designed to allow anyone to participate in a permissionless manner.\nAnyone who has surplus storage, networking bandwidth and/or compute resources can easily\nbecome a part of the Nibiru ecosystem."),(0,o.kt)("p",null,"There are 3 ways to participate in the Nibiru ecosystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Share")," your extra compute, storage, and network resources to realize the potential of the decentralized cloud."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Earn")," rewards by staking in a validator or contributing your extra computing resources to the network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Burn")," tokens by using services. This provides a deflationary token model and proof of network usage, ensuring long term success of the ecosystem."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Build")," using your existing Solidity skills to build new, or migrate existing, Dapps to the EVM-compatible Nibiru Network.")),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"Have more questions about the Nibiru Network and its capabilities?  See ",(0,o.kt)("a",{parentName:"p",href:"https://www.nibirunet.io/about"},"About the Nibiru Network")," to learn about ",(0,o.kt)("strong",{parentName:"p"},"Resource Providers")," and the ",(0,o.kt)("strong",{parentName:"p"},"NBN Token"),".  "),(0,o.kt)("p",null,"General questions?  See the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nibirunet.io/faq"},"FAQ"),"."),(0,o.kt)("h2",{id:"more-coming-soon"},"More coming soon!"),(0,o.kt)("p",null,"While the Nibiru Network is ",(0,o.kt)("a",{parentName:"p",href:"https://www.nibiruscan.io"},"live")," today, we're currently focusing on encouraging\nthe community on-board to the network through deploying a validator node.  Later this year, network\nparticipants will be able to ",(0,o.kt)("strong",{parentName:"p"},"Share"),", ",(0,o.kt)("strong",{parentName:"p"},"Earn")," and ",(0,o.kt)("strong",{parentName:"p"},"Burn"),". If you're ready to help ",(0,o.kt)("strong",{parentName:"p"},"Build")," the Nibiru network\nand earning MPoS NBN rewards, continue on to the ",(0,o.kt)("a",{parentName:"p",href:"/Documentation/become-a-validator/get-started-validator"},(0,o.kt)("strong",{parentName:"a"},"Next Step")),"\nand deploy a validator."))}d.isMDXComponent=!0}}]);