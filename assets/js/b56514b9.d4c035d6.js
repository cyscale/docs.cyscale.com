"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=s.createContext({}),c=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||n;return a?s.createElement(m,l(l({ref:t},h),{},{components:a})):s.createElement(m,l({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=a(7462),r=(a(7294),a(3905));const n={sidebar_position:1},l="Alerts",i={unversionedId:"security/alerts",id:"security/alerts",title:"Alerts",description:"An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks.",source:"@site/docs/security/alerts.md",sourceDirName:"security",slug:"/security/alerts",permalink:"/security/alerts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Inventory",permalink:"/visibility/inventory"},next:{title:"Exemptions",permalink:"/security/exemptions"}},o={},c=[{value:"The Alert Lifecycle",id:"the-alert-lifecycle",level:2},{value:"Managing Alerts",id:"managing-alerts",level:2},{value:"Alert Generation",id:"alert-generation",level:3},{value:"The Alerts Page",id:"the-alerts-page",level:3},{value:"Impacted assets",id:"impacted-assets",level:4},{value:"Contextual Control Graph for an Impacted Asset",id:"contextual-control-graph-for-an-impacted-asset",level:4}],h={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alerts"},"Alerts"),(0,r.kt)("p",null,"An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks."),(0,r.kt)("h2",{id:"the-alert-lifecycle"},"The Alert Lifecycle"),(0,r.kt)("p",null,"The alerts are part of the assessment process that happens whenever Cyscale syncs your connectors (for both automatic/scheduled and manual triggers)."),(0,r.kt)("p",null,"When Cyscale identifies that an asset does not pass a control for the first time, it creates a new alert with the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Open"),"."),(0,r.kt)("admonition",{title:"Alert Notifications",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Whenever Cyscale generates new alerts, it sends them via email to each user that\u2019s part of the Cyscale account. Each user can change this from the ",(0,r.kt)("a",{parentName:"p",href:"https://app.cyscale.com/user-settings"},"user settings page"),". Read more on ",(0,r.kt)("a",{parentName:"p",href:"/general/notifications"},"the notifications docs"),".")),(0,r.kt)("p",null,"The alert will remain ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," until the asset either passes the control or is removed (or no longer visible to Cyscale - e.g., you might have changed the AWS regions in Cyscale), in which case the alert is moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"Resolved"),"."),(0,r.kt)("p",null,"In the case of regression (i.e. the asset fails again after previously being fixed), Cyscale creates a new alert with the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Open"),"."),(0,r.kt)("p",null,"The other alternative is when you disable the respective control or update it to stop generating alerts. In this case, Cyscale moves all the alerts for the respective control to ",(0,r.kt)("inlineCode",{parentName:"p"},"Disabled")," right after you update the control."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alert lifecycle",src:a(1010).Z,width:"1558",height:"698"})),(0,r.kt)("h2",{id:"managing-alerts"},"Managing Alerts"),(0,r.kt)("h3",{id:"alert-generation"},"Alert Generation"),(0,r.kt)("p",null,"You can influence which controls Cyscale must generate alerts for by changing the ",(0,r.kt)("strong",{parentName:"p"},"Severity Alerting Level")," from ",(0,r.kt)("a",{parentName:"p",href:"https://app.cyscale.com/account-settings"},"the account settings page"),". Cyscale will generate alerts for controls with severity equal to or greater than the configured level."),(0,r.kt)("admonition",{title:"Default severity alerting level",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The default level is ",(0,r.kt)("strong",{parentName:"p"},"medium"),". Cyscale will not generate alerts for low severity controls out of the box. We made this choice to keep the number of alerts as manageable as possible, especially after you connect your accounts for the first time.")),(0,r.kt)("admonition",{title:"Changing alert generation",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"As soon as you change the alert generation, Cyscale will disable any ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," alerts that are no longer needed. For example, if you increase the severity alerting level from medium to high, Cyscale will disable all medium alerts. If you lower the level back to medium, Cyscale will start generating alerts for medium severity controls during the subsequent assessments.")),(0,r.kt)("h3",{id:"the-alerts-page"},"The Alerts Page"),(0,r.kt)("p",null,"You can see all the alerts on ",(0,r.kt)("a",{parentName:"p",href:"https://app.cyscale.com/alerts"},"the alerts page"),". You can view the alerts in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"grouped by control")," (the failing controls, each with the number of alerts)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"all alerts"))),(0,r.kt)("p",null,"By default, Cyscale shows you the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," alerts (i.e. sorted descending by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Created at")," date field). Besides the provided sorting criteria, Cyscale shows the alerts that have the most impacted assets first if the alerts have the same value for the sorting criteria. For example, if you sort the alerts page by severity descending, Cyscale will show the alerts with the highest severity that have the most impacted assets first, then the highest severity alerts that have no impacted assets followed by alerts with a lower severity."),(0,r.kt)("p",null,"Cyscale provides the following actions that you can perform on one or multiple alerts (batch):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dismiss")," - this is how you tell Cyscale that you don\u2019t want to see the selected alert(s). Cyscale will move the alert(s) to the ",(0,r.kt)("strong",{parentName:"li"},"Dismissed")," tab until the next assessment. If the issue is still there, Cyscale will move the alert back to the main tab."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Acknowledge")," - you can think of this action as of the read/unread state most email clients offer. Cyscale will not change the acknowledgement state during the subsequent assessments (as opposed to dismiss). You might find filtering by the acknowledgement state useful."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Exempt")," - instruct Cyscale to always consider this asset as passing this control. You will have to provide a reason for exemption.")),(0,r.kt)("h4",{id:"impacted-assets"},"Impacted assets"),(0,r.kt)("p",null,"The alerts for contextual controls also display the impacted assets for that misconfiguration, that is assets, which become vulnerable due to the issue identified in the primary assets by the control. For example, an alert for a control that checks if the security group allows SSH access from the internet will display the assets (VMs) using the misconfigured security group, since those assets would be vulnerable to an external remote service attack."),(0,r.kt)("h4",{id:"contextual-control-graph-for-an-impacted-asset"},"Contextual Control Graph for an Impacted Asset"),(0,r.kt)("p",null,'To view a contextual control graph for an alert, click on the "Impacted Assets" column within the alert to access the graph with a list of impacted assets. Alternatively, you can click on the specific alert to open the Alert Details and then navigate to the Graph tab. This will allow you to visualize the relationships and connections associated with the alert.'),(0,r.kt)("p",null,"On the left side, you can see a list of Impacted assets, and on the right side, a graph is displayed. When nothing is selected from the Impacted assets list, you can view a graph that displays the primary asset along with all the impacted assets for a specific control. This graph allows you to examine and trace the path between the primary asset and any impacted asset. Additionally, you can observe all the assets located between the primary and impacted assets."),(0,r.kt)("p",null,"You can select one or more assets from the impacted assets list. When an asset is selected, the graph will show the relationships between the primary asset and the selected secondary asset."),(0,r.kt)("p",null,"For example, for the 'Ensure Datastores are not accessible by users without MFA' control, you can refer to the following graph:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alert graph",src:a(715).Z,width:"1778",height:"768"})),(0,r.kt)("p",null,"In the example below, an IAMUser without MFA has been granted access to multiple datastores (such as Buckets, DynamoDB Tables, Discs, etc.)."),(0,r.kt)("p",null,"If you want to see the relations related to a specific Bucket and SQSQueue, you can click on the assets from the list, and the graph will filter the nodes to show only the selected impacted assets."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alert graph with selected impacted assets",src:a(6903).Z,width:"1773",height:"767"})))}u.isMDXComponent=!0},1010:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/alert-lifecycle-90060146792277d0a1658a243d760ac1.png"},715:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/contextual-control-graph-with-assets-list-d0081cb760a3ecabd5c77421660fd7e7.png"},6903:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/contextual-control-graph-with-selected-impacted-assets-3005f02fb95130f59e8bca5366387409.png"}}]);