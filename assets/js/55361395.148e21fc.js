"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[626],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),f=n,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},793:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:1},i="Getting Started",s={unversionedId:"become-a-validator/get-started-validator",id:"become-a-validator/get-started-validator",title:"Getting Started",description:"---",source:"@site/docs/become-a-validator/get-started-validator.md",sourceDirName:"become-a-validator",slug:"/become-a-validator/get-started-validator",permalink:"/become-a-validator/get-started-validator",draft:!1,editUrl:"https://github.com/Nibiru-Network/nibiru-docs.github.io/tree/main/docs/become-a-validator/get-started-validator.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Become a Validator",permalink:"/category/become-a-validator"},next:{title:"Validator Node Configuration",permalink:"/become-a-validator/validator-set-up"}},d={},l=[{value:"Modified Proof of Stake",id:"modified-proof-of-stake",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Proof of Stake (PoS) blockchains like the Nibiru Network rely on the service of validator nodes\nto perform the important role of verifying and processing transactions, and generating new blocks\non the blockchain.  As validator nodes are crucial to the performance and security of the network,\nliquidity is staked into the nodes in the form of NBN, which can be slashed in the event that the\nnode does not perform its intended function.  Validator nodes that perform properly are compensated\nfor their service in NBN."),(0,n.kt)("h2",{id:"modified-proof-of-stake"},"Modified Proof of Stake"),(0,n.kt)("p",null,"The Nibiru Network employs a Modified Proof of Stake (MPoS) consensus mechanism that improves upon\nthe the original design of PoS in many blockchain networks today.  MPoS is a layer one consensus\nused in Nibiru Network that is based on the original Proof of Stake (PoS) consensus algorithm,\nbut with modifications to address certain issues or limitations."),(0,n.kt)("p",null,"It presets two pools of candidate nodes with different proportions of candidates (upper and lower\nhouse system). In each round of witness node election, a corresponding number of nodes are selected\naccording to the equity algorithm to give the right to produce blocks (that is, verification node),\nand at the same time combined with the benefit algorithm to ensure that each participant can get\nthe opportunity to produce a block."),(0,n.kt)("p",null,"For further information on MPoS and its benefits, see the\n",(0,n.kt)("a",{parentName:"p",href:"https://nibirunet.io/wp-content/uploads/2023/04/Nibiru_Whitepaper_V2.1.pdf"},"whitepaper"),"."),(0,n.kt)("admonition",{title:"warning",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Running a validator node on the Nibiru Network runs the risk of your stake being slashed in\nthe event that the computer acting as a validator node is unavailable.  This could be due to\npoor internet connectivity, a system crash, or power failure.  It's recommended that you only\nrun a validator node if you have a highly-available system.")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Have the hardware and infrastructure to deploy a validator node on the Nibiru Network and want\nto get started?  Continue on to the ",(0,n.kt)("a",{parentName:"p",href:"/become-a-validator/validator-set-up"},(0,n.kt)("strong",{parentName:"a"},"Next Step"))," to configure and deploy\nyour validator node."))}u.isMDXComponent=!0}}]);