"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:2},a="Getting Started",i={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Sign Up",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/intro/prerequisites"},next:{title:"Billing & Usage",permalink:"/billing"}},l={},c=[{value:"Sign Up",id:"sign-up",level:3},{value:"Connecting Cloud Accounts/Identity Providers",id:"connecting-cloud-accountsidentity-providers",level:3},{value:"Sync/Assessment",id:"syncassessment",level:3},{value:"What&#39;s Next",id:"whats-next",level:3}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"sign-up"},"Sign Up"),(0,o.kt)("p",null,"To start using Cyscale, go to ",(0,o.kt)("a",{parentName:"p",href:"https://app.cyscale.com/register"},"https://app.cyscale.com/register")," and sign up using your email or through the supported identity providers."),(0,o.kt)("p",null,"Once signed up, you can start connecting your cloud accounts and identity providers (a.k.a. ",(0,o.kt)("strong",{parentName:"p"},"connectors"),") by choosing the provider(s) and following the onboarding steps - ",(0,o.kt)("a",{parentName:"p",href:"https://app.cyscale.com/select-provider"},"https://app.cyscale.com/select-provider"),"."),(0,o.kt)("h3",{id:"connecting-cloud-accountsidentity-providers"},"Connecting Cloud Accounts/Identity Providers"),(0,o.kt)("p",null,"For specific details on how to integrate with each of the supported providers, follow the links below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connectors/aws"},"AWS Integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connectors/azure"},"Azure Integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connectors/gcp"},"GCP Integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connectors/alibaba"},"Alibaba Integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connectors/okta"},"Okta"))),(0,o.kt)("p",null,"If everything is configured properly, you should be greeted with the following view"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Successfully added a connector",src:n(6381).Z,width:"1026",height:"882"})),(0,o.kt)("h3",{id:"syncassessment"},"Sync/Assessment"),(0,o.kt)("p",null,"Cyscale now starts exploring your cloud infrastructure through the provider's APIs. Once Cyscale created a snapshot of your cloud assets, it will perform the assessment. This translates into Cyscale going over the list of controls and looking for assets that fail to meet the requirements. You can find out more about the assessment process ",(0,o.kt)("a",{parentName:"p",href:"/security/assessment"},"here"),"."),(0,o.kt)("p",null,"By default, Cyscale synchronizes your cloud assets and performs the assessment every 24 hours. If you added a connector at 1:24 PM, all subsequent automatic scans will be conducted at 1:24 PM."),(0,o.kt)("p",null,"Once the assessment is complete, Cyscale will generate the corresponding alerts and store the result in the form of \u201cfailed assets\u201d. These are the basis for determining which controls fail (the ones with failed assets), the connector risk (given by the asset with the highest risk), and policy/standard status."),(0,o.kt)("p",null,"If you go to the Cloud Overview page and the synchronization is still in progress, you should see a loading indicator. Otherwise, you should see some high-level information about the security posture of the account you just added, similar to the following image:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloud Overview Page",src:n(8726).Z,width:"3018",height:"1616"})),(0,o.kt)("p",null,"Besides the scheduled syncs, you can manually trigger the process at any moment by pressing the Sync button. This is helpful if, for example, you changed your infrastructure or want to validate that certain vulnerabilities are indeed fixed. You can find out when Cyscale performed the last sync and how long it took by hovering over the Sync button."),(0,o.kt)("h3",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"At this point you can explore the rest of the platform such as exploring your cloud assets from the visibility section, going through the controls library from the security section, or checking how compliant your infrastructure is with various industry standards such as ISO 27001, SOC 2, PCI DSS, and others."),(0,o.kt)("p",null,"Additionally, you can always add more connectors."))}p.isMDXComponent=!0},6381:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add-cloud-account-success-626eed5cacd36110d1c0a4250f7b57ff.png"},8726:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-overview-edf80131abcaeaa2ad7bb3ca9309194f.png"}}]);