"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return h}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={sidebar_position:2},c="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Sign Up",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/docs/overview/prerequisites"},next:{title:"Billing",permalink:"/docs/billing"}},u={},d=[{value:"Sign Up",id:"sign-up",level:3},{value:"Connecting Cloud Accounts",id:"connecting-cloud-accounts",level:3},{value:"Sync/Assessment",id:"syncassessment",level:3},{value:"What&#39;s Next",id:"whats-next",level:3}],p={toc:d};function h(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started"},"Getting Started"),(0,s.kt)("h3",{id:"sign-up"},"Sign Up"),(0,s.kt)("p",null,"To start using Cyscale, go to ",(0,s.kt)("a",{parentName:"p",href:"https://app.cyscale.com/#/register"},"https://app.cyscale.com/#/register")," and sign up using your email or through the supported identity providers."),(0,s.kt)("p",null,"Once signed up, you can start connecting your cloud accounts by choosing the provider(s) and following the onboarding steps - ",(0,s.kt)("a",{parentName:"p",href:"https://app.cyscale.com/#/select-cloud-provider"},"https://app.cyscale.com/#/select-cloud-provider"),"."),(0,s.kt)("h3",{id:"connecting-cloud-accounts"},"Connecting Cloud Accounts"),(0,s.kt)("p",null,"For specific details on how to integrate with each of the supported providers, follow the links below:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/integrations/aws"},"AWS Integration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/integrations/azure"},"Azure Integration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/integrations/gcp"},"GCP Integration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/integrations/alibaba"},"Alibaba Integration"))),(0,s.kt)("p",null,"If everything is configured properly, you should be greeted with the following view"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"Successfully connected a cloud account",src:n(6381).Z,width:"1026",height:"882"})),(0,s.kt)("h3",{id:"syncassessment"},"Sync/Assessment"),(0,s.kt)("p",null,"Cyscale now starts exploring your cloud infrastructure through the provider\u2019s APIs. Once Cyscale created a snapshot of your cloud assets, it will perform the assessment. This translates into Cyscale going over the list of controls and looking for assets that fail to meet the requirements. You can find out more about the assessment process ",(0,s.kt)("a",{parentName:"p",href:"/docs/security/assessment"},"here"),"."),(0,s.kt)("p",null,"By default, Cyscale synchronizes your cloud assets and performs the assessment every 24 hours. If you added a cloud account at 1:24 PM, all subsequent automatic scans will be conducted at 1:24 PM."),(0,s.kt)("p",null,"Once the assessment is complete, Cyscale will generate the corresponding alerts and store the result in the form of \u201cfailed assets\u201d. These are the basis for determining which controls fail (the ones with failed assets), the cloud account risk (given by the asset with the highest risk), and policy/standard status."),(0,s.kt)("p",null,"If you go to the Cloud Overview page and the synchronization is still in progress, you should see a loading indicator. Otherwise, you should see some high-level information about the security posture of the account you just added, similar to the following image:"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",alt:"Cloud Overview Page",src:n(8726).Z,width:"2220",height:"1412"})),(0,s.kt)("p",null,"Besides the scheduled syncs, you can manually trigger the process at any moment by pressing the Sync button. This is helpful if, for example, you changed your infrastructure or want to validate that certain vulnerabilities are indeed fixed. You can find out when Cyscale performed the last sync and how long it took by hovering over the Sync button."),(0,s.kt)("h3",{id:"whats-next"},"What's Next"),(0,s.kt)("p",null,"At this point you can explore the rest of the platform such as exploring your cloud assets from the visibility section, going through the controls library from the security section, or checking how compliant your infrastructure is with various industry standards such as ISO 27001, SOC 2, PCI DSS, and others."),(0,s.kt)("p",null,"Additionally, you can always connect more cloud accounts."))}h.isMDXComponent=!0},6381:function(e,t,n){t.Z=n.p+"assets/images/add-cloud-account-success-626eed5cacd36110d1c0a4250f7b57ff.png"},8726:function(e,t,n){t.Z=n.p+"assets/images/cloud-overview-9fad2eae5ff4691ccac4f258b153d91b.png"}}]);