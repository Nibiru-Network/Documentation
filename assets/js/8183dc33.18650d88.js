"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[295],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),u=i,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return o?n.createElement(f,r(r({ref:t},d),{},{components:o})):n.createElement(f,r({ref:t},d))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4627:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const a={sidebar_position:2},r="Layer 1 Network",s={unversionedId:"concepts/mpos-consensus",id:"concepts/mpos-consensus",title:"Layer 1 Network",description:"---",source:"@site/docs/concepts/mpos-consensus.md",sourceDirName:"concepts",slug:"/concepts/mpos-consensus",permalink:"/concepts/mpos-consensus",draft:!1,editUrl:"https://github.com/Nibiru-Network/nibiru-docs.github.io/tree/main/docs/concepts/mpos-consensus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/category/concepts"},next:{title:"Getting Started",permalink:"/category/getting-started"}},l={},c=[{value:"MPoS Consensus",id:"mpos-consensus",level:2},{value:"Delegation &amp; Verification",id:"delegation--verification",level:2},{value:"Staking &amp; Locking Time",id:"staking--locking-time",level:2},{value:"Validator Node Penalty Mechanism",id:"validator-node-penalty-mechanism",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"layer-1-network"},"Layer 1 Network"),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following information is taken from the Nibiru Network Whitepaper.  Please read the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nibirunet.io/whitepaper#"},"full whitepaper")," for more details.")),(0,i.kt)("h2",{id:"mpos-consensus"},"MPoS Consensus"),(0,i.kt)("p",null,"The MPoS (Multi Proof of Stake) consensus mechanism is an improvement based on the traditional PoS protocol. This system is designed to address the scalability and security issues faced in other networks, while also providing faster transaction processing times and lower energy consumption."),(0,i.kt)("p",null,"A key feature of MPoS is its dual-chamber model, which divides the candidate nodes into two separate pools with different proportions of candidates. The upper and lower house system ensures that nodes with a larger number of pledges have more opportunities to produce blocks, while smaller nodes also have a chance to participate in the block production process, thereby avoiding class solidification and consensus rigidity. In other words, in each round of witness node election, a corresponding number of nodes are selected according to the equity algorithm to give the right to produce blocks (that is, verification node), and at the same time combined with the benefit algorithm to ensure that each participant can get the opportunity to produce a block."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MPoS Consensus",src:o(5346).Z,width:"756",height:"730"})),(0,i.kt)("p",null,"The MPoS consensus mechanism also offers faster block confirmation times. In the MPoS network, a block is solidified immediately upon its production and then confirmed by 21 verifiers within 10 seconds, resulting in faster convergence speeds and reduced rollback risks."),(0,i.kt)("p",null,"Moreover, the MPoS network has a stable distribution of block generation time, producing a block every 10 seconds with an average waiting time of 6 seconds for transaction processing. This ensures that the network maintains optimal performance and transaction processing speeds."),(0,i.kt)("p",null,"The MPoS verification process as used by Nibiru Network, is also expanded beyond transaction verification, as the verifier is responsible for verifying participants in the PoC and PoF protocols, with additional responsibilities and benefits compared to traditional PoS. This expanded scope of verification ensures the integrity and security of the network."),(0,i.kt)("p",null,"Another key advantage of MPoS is its low participation threshold. The 100 NBN pledge entry threshold is far lower than other networks that adopt PoS consensus in the industry. This allows anyone to participate in the network as a verifier, ensuring decentralized participation and a more secure network."),(0,i.kt)("p",null,"Finally, the MPoS network has a built-in mechanism that allows for faster detection of issues with validator participation in a single slot. This means that potential problems with the network can be identified and addressed quickly, ensuring optimal network performance and security."),(0,i.kt)("p",null,"Overall, the MPoS consensus mechanism offers a range of features and benefits that make it an industry-recognized optimal solution for blockchain networks. Its fairer dual-chamber system, faster block confirmation times, stable block generation times, expanded verification process, low participation threshold, and faster problem detection makes it a highly secure, efficient, and scalable blockchain solution."),(0,i.kt)("h2",{id:"delegation--verification"},"Delegation & Verification"),(0,i.kt)("p",null,"The MPoS protocol plays a crucial role in Nibiru Network's consensus mechanism. It enables the delegator to delegate NBN to a verification address and receive a share of the validator's block reward. The validator, on the other hand, is responsible for operating the Verification Node, generating blocks, and distributing the block reward to all delegators."),(0,i.kt)("p",null,"To participate in MPoS delegation and verification, an individual must stake the specified amount of NBN and become a validator. Upon withdrawal, the validator will receive their full pledge back. The validator has the ability to set the fee percentage, and the remaining verification rewards will be distributed among the delegators. Any address can delegate NBN to any validator, but at the same time, the same address can only delegate NBN to one validator. The entrusted NBN is locked up for a period of 7 days and can be withdrawn after the lock-up period expires"),(0,i.kt)("h2",{id:"staking--locking-time"},"Staking & Locking Time"),(0,i.kt)("p",null,"In terms of staking and locking periods, Nibiru Network employs specific lock-up and lock-release rules for pledges on Multi Proof of Stake (MPoS), Proof of Flow (PoF), and Proof of Capacity (PoC) protocols. Pledges on these protocols are subject to a one-year lock-up period. Upon completion of the lock-up period, rewards and released pledges are subject to a 30-day lock-up period, followed by a 365-antenna linear release. Under this model, the locked amount is gradually released over a 365-day period, with a proportionate amount being released each day."),(0,i.kt)("p",null,"For delegators, the stake freeze period is seven days. This means that after delegating tokens, a delegator cannot withdraw them for a period of seven days. These lock-up and freeze periods help to ensure stability and security within the Nibiru Network ecosystem, promoting the long-term growth and success of the platform"),(0,i.kt)("h2",{id:"validator-node-penalty-mechanism"},"Validator Node Penalty Mechanism"),(0,i.kt)("p",null,"MPoS nodes come equipped with a penalty point mechanism designed to encourage block verification. If a verification node misses blocks during an ePoCh, penalty points are added. If the penalty points exceed 30, the node is no longer eligible to become a validator. If the penalty points exceed 30 days without payment, the node will be automatically exited from the MPoS protocol, leading to the destruction of the NBN staked by the node and the unreleased rewards in the node's earnings address."),(0,i.kt)("p",null,"Users can pay NBN to eliminate penalty points within the MPoS protocol. However, the NBN used for this purpose will be destroyed. The penalty point mechanism within MPoS nodes promotes accountability and reliability in the Nibiru Network ecosystem, ensuring the continued stability and success of the platform."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nibiruscan Node Penalty",src:o(8758).Z,width:"2672",height:"1490"})))}h.isMDXComponent=!0},5346:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mpos_consensus-cad384960604423d794feafba47c9044.png"},8758:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mpos_node_penalty-df93bd0ef76f93f4e8f481267c2002fa.png"}}]);