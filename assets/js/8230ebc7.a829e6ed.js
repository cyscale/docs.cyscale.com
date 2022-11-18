"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3},a="Prerequisites",s={unversionedId:"intro/prerequisites",id:"intro/prerequisites",title:"Prerequisites",description:"This page describes what you need to fully leverage Cyscale Cloud Platform.",source:"@site/docs/intro/prerequisites.md",sourceDirName:"intro",slug:"/intro/prerequisites",permalink:"/intro/prerequisites",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dictionary",permalink:"/intro/dictionary"},next:{title:"Getting Started",permalink:"/getting-started"}},l={},u=[{value:"Public Cloud",id:"public-cloud",level:2},{value:"Permissions",id:"permissions",level:2},{value:"AWS",id:"aws",level:3},{value:"Azure",id:"azure",level:3},{value:"Google Cloud",id:"google-cloud",level:3},{value:"Alibaba",id:"alibaba",level:3},{value:"Okta",id:"okta",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This page describes what you need to fully leverage Cyscale Cloud Platform."),(0,n.kt)("h2",{id:"public-cloud"},"Public Cloud"),(0,n.kt)("p",null,"Cyscale is designed to work with systems running on public clouds. We currently support Amazon Web Services, Microsoft Azure, Google Cloud Platform, and Alibaba Cloud. Additionally, each one of these providers offers a large suite of services so make sure to consult the service coverage section for each provider to determine whether your infrastructure is sufficiently covered."),(0,n.kt)("p",null,"You should consider Cyscale when you have a medium to large, frequently changing infrastructure deployed in the cloud or if you are migrating your on-premises infrastructure to the cloud."),(0,n.kt)("h2",{id:"permissions"},"Permissions"),(0,n.kt)("p",null,"Since Cyscale leverages the SDKs/APIs of the cloud providers to inspect your infrastructure, you must grant read-only access. To achieve this, you must have enough privileges to create the required IAM entities."),(0,n.kt)("h3",{id:"aws"},"AWS"),(0,n.kt)("p",null,"For AWS, Cyscale connects by assuming an IAM role. You must have enough privileges to create this role and attached policies and, optionally and preferably, to deploy the CloudFormation stack or Terraform script."),(0,n.kt)("p",null,"If you encounter difficulties while creating the required IAM role and policies, contact your AWS administrator and consult the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html"},"AWS documentation on permission boundaries"),"."),(0,n.kt)("h3",{id:"azure"},"Azure"),(0,n.kt)("p",null,"For Azure, Cyscale connects through an Azure Active Directory application. You must have enough privileges to create the application together with the corresponding service principal, and role definition and assignment with your subscription(s) as scope(s)."),(0,n.kt)("p",null,"For more information, you can consult the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#permissions-required-for-registering-an-app"},"Azure documentation on registering an application"),"."),(0,n.kt)("h3",{id:"google-cloud"},"Google Cloud"),(0,n.kt)("p",null,"For Google Cloud, Cyscale connects through a service account with read permissions at the project level. You must have enough privileges to create the service account and to enable the required APIs (Compute Engine, Resource Manager, KMS, Cloud Logging, Cloud Monitoring, Kubernetes Engine, Cloud DNS, Cloud SQL, BigQuery, Cloud Storage)."),(0,n.kt)("p",null,"For more information, you can consult the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"Google Cloud documentation on creating service accounts"),"."),(0,n.kt)("h3",{id:"alibaba"},"Alibaba"),(0,n.kt)("p",null,"For Alibaba Cloud, Cyscale connects through a RAM role. You must have enough permissions to create the required role with read only permissions."),(0,n.kt)("h3",{id:"okta"},"Okta"),(0,n.kt)("p",null,"For Okta, Cyscale connects through an API token. You must have the permissions to create the token and read access to most Okta entities such as users, groups, applications, policies - this is because the API token inherits the permissions of the user that creates it."))}p.isMDXComponent=!0}}]);