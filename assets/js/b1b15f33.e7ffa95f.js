"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[261],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3519:function(e,t,a){a.d(t,{ZP:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={toc:[]};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"By default, all connectors are enabled. If you want to prevent Cyscale from syncing and assessing your assets for a certain connector, you can disable it. The state of the connector in Cyscale will be locked until you enable it again. The assets will not be updated based on your actual resources and assessments will not be performed for them."))}u.isMDXComponent=!0},9755:function(e,t,a){a.d(t,{ZP:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={toc:[]};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can always trigger a new sync and assessment manually for a given connector (unless the sync is already in progress). This will make Cyscale read all your resources for that particular connector, evaluate the applicable controls, and generate any alerts if necessary."))}u.isMDXComponent=!0},1744:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(3519),i=a(9755),u=["components"],s={sidebar_position:4},c="Alibaba Cloud",p={unversionedId:"connectors/alibaba",id:"connectors/alibaba",title:"Alibaba Cloud",description:"Cyscale enables you to keep track and secure your Alibaba Cloud (Aliyun) infrastructure natively. You connect your Aliyun account(s) by creating a RAM role that Cyscale can assume to read your Aliyun resources.",source:"@site/docs/connectors/alibaba.mdx",sourceDirName:"connectors",slug:"/connectors/alibaba",permalink:"/connectors/alibaba",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Platform",permalink:"/connectors/gcp"},next:{title:"Okta",permalink:"/connectors/okta"}},d={},m=[{value:"Connecting Your Alibaba Cloud Account",id:"connecting-your-alibaba-cloud-account",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Deep Dive on Permissions",id:"deep-dive-on-permissions",level:2},{value:"Managing Your Connected Alibaba Cloud Account(s)",id:"managing-your-connected-alibaba-cloud-accounts",level:2},{value:"Configure",id:"configure",level:3},{value:"Disable/Enable",id:"disableenable",level:3},{value:"Sync",id:"sync",level:3},{value:"Service Coverage",id:"service-coverage",level:2},{value:"Compute",id:"compute",level:3},{value:"Databases",id:"databases",level:3},{value:"Identity &amp; Access Management",id:"identity--access-management",level:3},{value:"Logging",id:"logging",level:3},{value:"Security &amp; Network",id:"security--network",level:3},{value:"Serverless",id:"serverless",level:3},{value:"Services",id:"services",level:3},{value:"Storage",id:"storage",level:3},{value:"Cloud-Wide",id:"cloud-wide",level:3}],k={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alibaba-cloud"},"Alibaba Cloud"),(0,l.kt)("p",null,"Cyscale enables you to keep track and secure your Alibaba Cloud (Aliyun) infrastructure natively. You connect your Aliyun account(s) by creating a ",(0,l.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/resource-access-management/latest/ram-role-overview"},"RAM role")," that Cyscale can assume to read your Aliyun resources."),(0,l.kt)("h2",{id:"connecting-your-alibaba-cloud-account"},"Connecting Your Alibaba Cloud Account"),(0,l.kt)("p",null,"Once you are ready to connect your Aliyun account(s) and have the required permissions, press the ",(0,l.kt)("strong",{parentName:"p"},"Create")," button from the top-right corner, select ",(0,l.kt)("strong",{parentName:"p"},"Add Connector"),", and choose ",(0,l.kt)("strong",{parentName:"p"},"Alibaba"),". You will be greeted with a simple multi-step process."),(0,l.kt)("h3",{id:"step-1"},"Step 1"),(0,l.kt)("p",null,"In the first step, you provide a ",(0,l.kt)("strong",{parentName:"p"},"name")," for your Alibaba Cloud account to be used throughout Cyscale. This is a plain-text identifier that helps you better manage your resources."),(0,l.kt)("h3",{id:"step-2"},"Step 2"),(0,l.kt)("p",null,"In the second step, you create the Alibaba RAM role. Cyscale provides you with the exact steps to create the role."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access Security")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"While the permissions you grant to Cyscale are limited to ",(0,l.kt)("strong",{parentName:"p"},"reading")," the configuration of your cloud resources, you might still be concerned about the security of your Alibaba Cloud account. Setting the trust relationship with the Cyscale Alibaba Cloud account means that any entity from the Cyscale Alibaba Cloud account with the privilege to assume the role from your account can read your Aliyun infrastructure."),(0,l.kt)("p",{parentName:"div"},"The Cyscale Alibaba Cloud account (5015623141518445) follows all the best practices and is continuously secured by Cyscale itself."))),(0,l.kt)("h3",{id:"step-3"},"Step 3"),(0,l.kt)("p",null,"In the third step, the system makes sure the connection to your cloud account can be established and starts the first sync in the background. You can navigate to the cloud account overview page. The page will automatically refresh when the sync and assessment are completed."),(0,l.kt)("h2",{id:"deep-dive-on-permissions"},"Deep Dive on Permissions"),(0,l.kt)("p",null,"Since Cyscale connects to your Aliyun account(s) by assuming the RAM role you create, all permissions are controlled through the policies that are attached to the role."),(0,l.kt)("p",null,"To benefit from everything Cyscale has and will have to offer, the following policy is required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ReadOnlyAccess")," - This system policy grants ",(0,l.kt)("strong",{parentName:"li"},"read")," access to all Aliyun resources. You can see the permissions it provides in ",(0,l.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com/policies/ReadOnlyAccess/System/content"},"the Alibaba Cloud Console"),".")),(0,l.kt)("h2",{id:"managing-your-connected-alibaba-cloud-accounts"},"Managing Your Connected Alibaba Cloud Account(s)"),(0,l.kt)("p",null,"Once connected, your Aliyun account(s) will show up in the ",(0,l.kt)("a",{parentName:"p",href:"https://app.cyscale.com/connectors"},"Connectors")," list. From there, you can either use the inline actions or navigate to the overview page of the cloud account. The available options are:"),(0,l.kt)("h3",{id:"configure"},"Configure"),(0,l.kt)("p",null,"You can update the following information for your Aliyun cloud accounts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name - this helps you better identify the cloud account throughout the Cyscale platform"),(0,l.kt)("li",{parentName:"ul"},"Role ARN - in case you want Cyscale to use another RAM role")),(0,l.kt)("h3",{id:"disableenable"},"Disable/Enable"),(0,l.kt)(o.ZP,{mdxType:"DisableEnable"}),(0,l.kt)("h3",{id:"sync"},"Sync"),(0,l.kt)(i.ZP,{mdxType:"Sync"}),(0,l.kt)("h2",{id:"service-coverage"},"Service Coverage"),(0,l.kt)("p",null,"The list of Alibaba Cloud resources that Cyscale can handle are listed in the tables below, along with the number of controls that check their configuration"),(0,l.kt)("h3",{id:"compute"},"Compute"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ECS"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disk"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instance"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SecurityGroup"),(0,l.kt)("td",{parentName:"tr",align:null},"3")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VPC"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FlowLog"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RouteTable"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VPC"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h3",{id:"databases"},"Databases"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"RDS"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DBInstance"),(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("h3",{id:"identity--access-management"},"Identity & Access Management"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"RAM"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PasswordPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Role"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VirtualMFADevice"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h3",{id:"logging"},"Logging"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ActionTrail"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trail"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("h3",{id:"security--network"},"Security & Network"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KMS"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KMSKey"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h3",{id:"serverless"},"Serverless"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cluster"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cluster"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h3",{id:"services"},"Services"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SLS"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alert"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"WAF"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Domain"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("h3",{id:"storage"},"Storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OSS"),(0,l.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"4")))),(0,l.kt)("h3",{id:"cloud-wide"},"Cloud-Wide"),(0,l.kt)("p",null,"In addition, Cyscale offers 58 more Alibaba Cloud controls that are not specific to a service or asset type. These are called cloud-wide controls."))}b.isMDXComponent=!0}}]);