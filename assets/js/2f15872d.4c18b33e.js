"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},i="Billing & Usage",o={unversionedId:"billing",id:"billing",title:"Billing & Usage",description:"While Cyscale is committed to offering a generous free plan and trial version, in case you want continuous support and greater quotas, you will need a paid plan.",source:"@site/docs/billing.md",sourceDirName:".",slug:"/billing",permalink:"/billing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Users",permalink:"/account/users"}},s={},c=[{value:"Azure Marketplace",id:"azure-marketplace",level:2},{value:"Plans",id:"plans",level:2},{value:"Free",id:"free",level:3},{value:"Pro",id:"pro",level:3},{value:"Scale",id:"scale",level:3},{value:"Enterprise",id:"enterprise",level:3},{value:"Usage",id:"usage",level:2},{value:"Invoicing",id:"invoicing",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"billing--usage"},"Billing & Usage"),(0,r.kt)("p",null,"While Cyscale is committed to offering a generous free plan and trial version, in case you want continuous support and greater quotas, you will need a paid plan."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To get started with the paid version or update your current plan, contact us at ",(0,r.kt)("a",{parentName:"strong",href:"mailto:sales@cyscale.com"},"sales@cyscale.com"),".")),(0,r.kt)("h2",{id:"azure-marketplace"},"Azure Marketplace"),(0,r.kt)("p",null,"If you are already using Azure, you can subscribe to Cyscale through the ",(0,r.kt)("a",{parentName:"p",href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cyscale.cyscale"},"Azure Marketplace")," (or ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/#create/cyscale.cyscale/preview"},"Azure Portal link"),"). If you are not using Azure, but still using Microsoft products, you can subscribe to Cyscale through ",(0,r.kt)("a",{parentName:"p",href:"https://appsource.microsoft.com/en-us/product/web-apps/cyscale.cyscale"},"AppSource"),"."),(0,r.kt)("h2",{id:"plans"},"Plans"),(0,r.kt)("p",null,"All plans include the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlimited connectors"),(0,r.kt)("li",{parentName:"ul"},"All supported providers (AWS, Azure, GCP, Alibaba, Okta)"),(0,r.kt)("li",{parentName:"ul"},"Asset Inventory"),(0,r.kt)("li",{parentName:"ul"},"Alerts"),(0,r.kt)("li",{parentName:"ul"},"Notification Channels (Teams, Slack, Webhook)"),(0,r.kt)("li",{parentName:"ul"},"Email Notifications (alerts and weekly digest)"),(0,r.kt)("li",{parentName:"ul"},"Standards (ISO 27001, SOC 2, PCI-DSS, HIPAA, and more)"),(0,r.kt)("li",{parentName:"ul"},"Out of the box Controls (380+)"),(0,r.kt)("li",{parentName:"ul"},"Out of the box Policies"),(0,r.kt)("li",{parentName:"ul"},"Custom Policies"),(0,r.kt)("li",{parentName:"ul"},"PDF Reports")),(0,r.kt)("h3",{id:"free"},"Free"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only manual ",(0,r.kt)("a",{parentName:"li",href:"/intro/dictionary#sync"},"syncs")," (excepting the sync after adding a connector)"),(0,r.kt)("li",{parentName:"ul"},"Up to 25 monthly syncs"),(0,r.kt)("li",{parentName:"ul"},"Up to 3 users"),(0,r.kt)("li",{parentName:"ul"},"Up to 1000 ",(0,r.kt)("a",{parentName:"li",href:"/intro/dictionary#asset"},"assets"))),(0,r.kt)("h3",{id:"pro"},"Pro"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic + manual, unlimited ",(0,r.kt)("a",{parentName:"li",href:"/intro/dictionary#sync"},"syncs")),(0,r.kt)("li",{parentName:"ul"},"Unlimited users"),(0,r.kt)("li",{parentName:"ul"},"Up to 1000 ",(0,r.kt)("a",{parentName:"li",href:"/intro/dictionary#asset"},"assets"))),(0,r.kt)("h3",{id:"scale"},"Scale"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Up to 5000 ",(0,r.kt)("a",{parentName:"li",href:"/intro/dictionary#asset"},"assets"))),(0,r.kt)("h3",{id:"enterprise"},"Enterprise"),(0,r.kt)("p",null,"If your needs exceed the scale plan and/or you want a closer collaboration, reach us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@cyscale.com"},"sales@cyscale.com"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The main usage metric in Cyscale is the asset. This represents a node in the ",(0,r.kt)("a",{parentName:"p",href:"/#security-knowledge-graph"},"Security Knowledge Graph"),". Examples of assets include EC2 instances, EBS volumes, VPCs, buckets, Azure AD users, GCP service accounts, Okta applications, and so on."),(0,r.kt)("p",null,"Cyscale counts each unique resource seen at least once during the billing period as a separate asset."),(0,r.kt)("p",null,"You can always see how many assets Cyscale has read each month on the ",(0,r.kt)("a",{parentName:"p",href:"https://app.cyscale.com/usage"},"usage page"),". The information could be delayed by a few minutes."),(0,r.kt)("p",null,"The billing period is monthly, starting on the first of each month."),(0,r.kt)("admonition",{title:"Bonus",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Once we establish our agreement, you will be billed starting next month. Until then, it's on us.")),(0,r.kt)("h2",{id:"invoicing"},"Invoicing"),(0,r.kt)("p",null,"Once we have exchanged all the required billing information, we will send you the invoices via email. You can pay them via wire transfer."),(0,r.kt)("admonition",{title:"Yearly Billing",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer a yearly arrangement, contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@cyscale.com"},"sales@cyscale.com"))))}p.isMDXComponent=!0}}]);