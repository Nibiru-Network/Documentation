"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,slug:"/"},i="Getting started with Nibiru",l={unversionedId:"intro",id:"intro",title:"Getting started with Nibiru",description:"---",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/documentation/",draft:!1,editUrl:"https://github.com/Nibiru-Network/nibiru-docs.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Become a Validator",permalink:"/documentation/category/become-a-validator"}},s={},u=[{value:"Share",id:"share",level:2},{value:"Earn",id:"earn",level:2},{value:"Build",id:"build",level:2},{value:"More coming soon!",id:"more-coming-soon",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-nibiru"},"Getting started with Nibiru"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nibirunet.io"},"Nibiru Network")," is a decentralized storage, bandwidth and compute\nblockchain network that is designed to allow anyone to participate in a permissionless manner.\nAnyone who has surplus storage, networking bandwidth and/or compute resources can easily\nbecome a part of the Nibiru ecosystem."),(0,o.kt)("p",null,"There are 3 ways to participate in the Nibiru ecosystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Share")," your extra compute, storage, and network bandwidth resources to bring the vision of a truly decentralized cloud to reality."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Earn")," rewards by staking in multiple ways or contributing your extra computing resources to the network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Build")," using your existing Solidity skills to build new, or migrate existing, Dapps to the EVM-compatible Nibiru Network.")),(0,o.kt)("h2",{id:"share"},"Share"),(0,o.kt)("p",null,"Rarely do we fully utilize the storage space, bandwidth, or compute resources that our\ncomputers have.  With the Nibiru Network's unique Proof of Flow (PoF) and Proof of Capacity (PoC)\nlayer 2 consensus mechanisms, you can turn those spare resources into rentable resources."),(0,o.kt)("h2",{id:"earn"},"Earn"),(0,o.kt)("p",null,"When sharing your surplus computing resources, you are rewarded in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Through PoF and PoC consensus rewards"),(0,o.kt)("li",{parentName:"ol"},"Through participants of the network renting your surplus resources for their personal or business needs.")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"As an EVM-compatible network, developers familiar with Ethereum development languages and toolchains\ncan focus on developing new, or migrating existing, Dapps for the Nibiru Network rather than learning new skills.  "),(0,o.kt)("h2",{id:"more-coming-soon"},"More coming soon!"),(0,o.kt)("p",null,"While the Nibiru Network is ",(0,o.kt)("a",{parentName:"p",href:"https://www.nibiruscan.io"},"live")," today, we're currently focusing on encouraging\nthe community on-board to the network through deploying a validator node.  Later this year, network\nparticipants will be able to ",(0,o.kt)("strong",{parentName:"p"},"Share")," and ",(0,o.kt)("strong",{parentName:"p"},"Earn"),". If you're ready to help ",(0,o.kt)("strong",{parentName:"p"},"Build")," the Nibiru network\nand earning MPoS NBN rewards, continue on to the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/become-a-validator/get-started-validator"},(0,o.kt)("strong",{parentName:"a"},"Next Step")),"\nand deploy a validator."))}d.isMDXComponent=!0}}]);