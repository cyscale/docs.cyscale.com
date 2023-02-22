"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=o,h=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Dictionary",s={unversionedId:"intro/dictionary",id:"intro/dictionary",title:"Dictionary",description:"This page is a compilation of the most relevant terms encountered in the cloud security area in general and in the Cyscale Cloud Platform in particular.",source:"@site/docs/intro/dictionary.md",sourceDirName:"intro",slug:"/intro/dictionary",permalink:"/intro/dictionary",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Prerequisites",permalink:"/intro/prerequisites"}},c={},l=[{value:"Alerts",id:"alerts",level:3},{value:"Asset",id:"asset",level:3},{value:"Connectors",id:"connectors",level:3},{value:"Control",id:"control",level:3},{value:"CSPM",id:"cspm",level:3},{value:"Exemptions",id:"exemptions",level:3},{value:"Policy",id:"policy",level:3},{value:"Procedure",id:"procedure",level:3},{value:"Sync",id:"sync",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dictionary"},"Dictionary"),(0,o.kt)("p",null,"This page is a compilation of the most relevant terms encountered in the cloud security area in general and in the Cyscale Cloud Platform in particular."),(0,o.kt)("h3",{id:"alerts"},"Alerts"),(0,o.kt)("p",null,"Alerts are commonly triggered when certain thresholds are crossed. In the context of Cyscale (and CSPM in general), alerts represent identified vulnerabilities and misconfigurations. Basically it's the resulting entity after an asset is verified against a control and fails to pass it."),(0,o.kt)("h3",{id:"asset"},"Asset"),(0,o.kt)("p",null,"An asset refers to any resource your organization might have such as an AWS EC2 instance or an Azure Active Directory user."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A cloud resource might contain multiple assets. For example, an EC2 instance, besides the actual instance (which is just some memory and vCPU), also comes with one or more EBS volumes, one or more ENIs, a security group, maybe an Elastic IP address, and others.")),(0,o.kt)("h3",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,"Connectors are the Cyscale entities representing your actual cloud accounts and identity provider accounts. If you want to assess and protect an AWS account, Azure subscription, Google Cloud project, Alibaba account, or Okta organization, you add it to Cyscale by creating the corresponding connector."),(0,o.kt)("h3",{id:"control"},"Control"),(0,o.kt)("p",null,"A control is a rule describing a best practice or requirement. For example, ISO 27001 comes with Annex A which is basically a table of controls, each telling you what to check for. Within Cyscale, a control is a rule such as \u201cEnsure S3 bucket MFA Delete is enabled\u201d. Besides the name, each Cyscale control also comes with a description (what the control is and why it's important), remediation steps, and severity (low, medium, high)."),(0,o.kt)("h3",{id:"cspm"},"CSPM"),(0,o.kt)("p",null,"CSPM is actually a market segment defined by Gartner, but it commonly refers to the products that are part of this segment. Basically, a CSPM helps you identify cloud misconfigurations and stay compliant with industry standards, potentially across multiple cloud providers. It's the kind of tool that would tell you which S3 buckets are publicly accessible and with which sections of CIS and ISO 27001 your system is not compliant because of that."),(0,o.kt)("h3",{id:"exemptions"},"Exemptions"),(0,o.kt)("p",null,"Exemptions enable you to exclude a specific asset from being assessed against a specific control. Cyscale will consider the asset as passing that specific control."),(0,o.kt)("h3",{id:"policy"},"Policy"),(0,o.kt)("p",null,"A policy is generally a document defining how to secure certain aspects within an organization. For example, you might have a policy describing how your organization handles identity and access management. A policy within Cyscale represents an entity that, besides content such as text and images, might also contain controls. Cyscale enables you to specify how certain policy sections are actually implemented by mapping controls to them through procedures."),(0,o.kt)("h3",{id:"procedure"},"Procedure"),(0,o.kt)("p",null,"Procedures describe how to achieve something. Your organization might have a procedure specifying how to onboard a new employee. Within Cyscale, a procedure is basically a group of controls described by a title and a body."),(0,o.kt)("h3",{id:"sync"},"Sync"),(0,o.kt)("p",null,"The sync represents the process of synchronizing your actual cloud resources with the Cyscale database. You can read more about it on the ",(0,o.kt)("a",{parentName:"p",href:"/getting-started#syncassessment"},"Getting Started page"),"."))}p.isMDXComponent=!0}}]);