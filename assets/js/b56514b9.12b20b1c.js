"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[599],{3014:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(4848),n=s(8453);const i={sidebar_position:1},r="Alerts",l={id:"security/alerts",title:"Alerts",description:"An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks.",source:"@site/docs/security/alerts.md",sourceDirName:"security",slug:"/security/alerts",permalink:"/security/alerts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Inventory",permalink:"/visibility/inventory"},next:{title:"Exemptions",permalink:"/security/exemptions"}},o={},c=[{value:"The Alert Lifecycle",id:"the-alert-lifecycle",level:2},{value:"Managing Alerts",id:"managing-alerts",level:2},{value:"Alert Generation",id:"alert-generation",level:3},{value:"The Alerts Page",id:"the-alerts-page",level:3},{value:"Impacted assets",id:"impacted-assets",level:4},{value:"Contextual Control Graph for an Impacted Asset",id:"contextual-control-graph-for-an-impacted-asset",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"alerts",children:"Alerts"}),"\n",(0,a.jsx)(t.p,{children:"An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks."}),"\n",(0,a.jsx)(t.h2,{id:"the-alert-lifecycle",children:"The Alert Lifecycle"}),"\n",(0,a.jsx)(t.p,{children:"The alerts are part of the assessment process that happens whenever Cyscale syncs your connectors (for both automatic/scheduled and manual triggers)."}),"\n",(0,a.jsxs)(t.p,{children:["When Cyscale identifies that an asset does not pass a control for the first time, it creates a new alert with the status ",(0,a.jsx)(t.code,{children:"Open"}),"."]}),"\n",(0,a.jsx)(t.admonition,{title:"Alert Notifications",type:"info",children:(0,a.jsxs)(t.p,{children:["Whenever Cyscale generates new alerts, it sends them via email to each user that\u2019s part of the Cyscale account. Each user can change this from the ",(0,a.jsx)(t.a,{href:"https://app.cyscale.com/user-settings",children:"user settings page"}),". Read more on ",(0,a.jsx)(t.a,{href:"/general/notifications",children:"the notifications docs"}),"."]})}),"\n",(0,a.jsxs)(t.p,{children:["The alert will remain ",(0,a.jsx)(t.code,{children:"Open"})," until the asset either passes the control or is removed (or no longer visible to Cyscale - e.g., you might have changed the AWS regions in Cyscale), in which case the alert is moved to ",(0,a.jsx)(t.code,{children:"Resolved"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In the case of regression (i.e. the asset fails again after previously being fixed), Cyscale creates a new alert with the status ",(0,a.jsx)(t.code,{children:"Open"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The other alternative is when you disable the respective control or update it to stop generating alerts. In this case, Cyscale moves all the alerts for the respective control to ",(0,a.jsx)(t.code,{children:"Disabled"})," right after you update the control."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alert lifecycle",src:s(6738).A+"",width:"1558",height:"698"})}),"\n",(0,a.jsx)(t.h2,{id:"managing-alerts",children:"Managing Alerts"}),"\n",(0,a.jsx)(t.h3,{id:"alert-generation",children:"Alert Generation"}),"\n",(0,a.jsxs)(t.p,{children:["You can influence which controls Cyscale must generate alerts for by changing the ",(0,a.jsx)(t.strong,{children:"Severity Alerting Level"})," from ",(0,a.jsx)(t.a,{href:"https://app.cyscale.com/account-settings",children:"the account settings page"}),". Cyscale will generate alerts for controls with severity equal to or greater than the configured level."]}),"\n",(0,a.jsx)(t.admonition,{title:"Default severity alerting level",type:"info",children:(0,a.jsxs)(t.p,{children:["The default level is ",(0,a.jsx)(t.strong,{children:"medium"}),". Cyscale will not generate alerts for low severity controls out of the box. We made this choice to keep the number of alerts as manageable as possible, especially after you connect your accounts for the first time."]})}),"\n",(0,a.jsx)(t.admonition,{title:"Changing alert generation",type:"caution",children:(0,a.jsxs)(t.p,{children:["As soon as you change the alert generation, Cyscale will disable any ",(0,a.jsx)(t.code,{children:"Open"})," alerts that are no longer needed. For example, if you increase the severity alerting level from medium to high, Cyscale will disable all medium alerts. If you lower the level back to medium, Cyscale will start generating alerts for medium severity controls during the subsequent assessments."]})}),"\n",(0,a.jsx)(t.h3,{id:"the-alerts-page",children:"The Alerts Page"}),"\n",(0,a.jsxs)(t.p,{children:["You can see all the alerts on ",(0,a.jsx)(t.a,{href:"https://app.cyscale.com/alerts",children:"the alerts page"}),". You can view the alerts in two ways:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"grouped by control"})," (the failing controls, each with the number of alerts)"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"all alerts"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["By default, Cyscale shows you the latest ",(0,a.jsx)(t.code,{children:"Open"})," alerts (i.e. sorted descending by the ",(0,a.jsx)(t.code,{children:"Created at"})," date field). Besides the provided sorting criteria, Cyscale shows the alerts that have the most impacted assets first if the alerts have the same value for the sorting criteria. For example, if you sort the alerts page by severity descending, Cyscale will show the alerts with the highest severity that have the most impacted assets first, then the highest severity alerts that have no impacted assets followed by alerts with a lower severity."]}),"\n",(0,a.jsx)(t.p,{children:"Cyscale provides the following actions that you can perform on one or multiple alerts (batch):"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Dismiss"})," - this is how you tell Cyscale that you don\u2019t want to see the selected alert(s). Cyscale will move the alert(s) to the ",(0,a.jsx)(t.strong,{children:"Dismissed"})," tab until the next assessment. If the issue is still there, Cyscale will move the alert back to the main tab."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Acknowledge"})," - you can think of this action as of the read/unread state most email clients offer. Cyscale will not change the acknowledgement state during the subsequent assessments (as opposed to dismiss). You might find filtering by the acknowledgement state useful."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Exempt"})," - instruct Cyscale to always consider this asset as passing this control. You will have to provide a reason for exemption."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"impacted-assets",children:"Impacted assets"}),"\n",(0,a.jsx)(t.p,{children:"The alerts for contextual controls also display the impacted assets for that misconfiguration, that is assets, which become vulnerable due to the issue identified in the primary assets by the control. For example, an alert for a control that checks if the security group allows SSH access from the internet will display the assets (VMs) using the misconfigured security group, since those assets would be vulnerable to an external remote service attack."}),"\n",(0,a.jsx)(t.h4,{id:"contextual-control-graph-for-an-impacted-asset",children:"Contextual Control Graph for an Impacted Asset"}),"\n",(0,a.jsx)(t.p,{children:'To view a contextual control graph for an alert, click on the "Impacted Assets" column within the alert to access the graph with a list of impacted assets. Alternatively, you can click on the specific alert to open the Alert Details and then navigate to the Graph tab. This will allow you to visualize the relationships and connections associated with the alert.'}),"\n",(0,a.jsx)(t.p,{children:"On the left side, you can see a list of Impacted assets, and on the right side, a graph is displayed. When nothing is selected from the Impacted assets list, you can view a graph that displays the primary asset along with all the impacted assets for a specific control. This graph allows you to examine and trace the path between the primary asset and any impacted asset. Additionally, you can observe all the assets located between the primary and impacted assets."}),"\n",(0,a.jsx)(t.p,{children:"You can select one or more assets from the impacted assets list. When an asset is selected, the graph will show the relationships between the primary asset and the selected secondary asset."}),"\n",(0,a.jsx)(t.p,{children:"For example, for the 'Ensure Datastores are not accessible by users without MFA' control, you can refer to the following graph:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alert graph",src:s(4819).A+"",width:"1778",height:"768"})}),"\n",(0,a.jsx)(t.p,{children:"In the example below, an IAMUser without MFA has been granted access to multiple datastores (such as Buckets, DynamoDB Tables, Discs, etc.)."}),"\n",(0,a.jsx)(t.p,{children:"If you want to see the relations related to a specific Bucket and SQSQueue, you can click on the assets from the list, and the graph will filter the nodes to show only the selected impacted assets."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alert graph with selected impacted assets",src:s(406).A+"",width:"1773",height:"767"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},6738:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/alert-lifecycle-90060146792277d0a1658a243d760ac1.png"},4819:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/contextual-control-graph-with-assets-list-d0081cb760a3ecabd5c77421660fd7e7.png"},406:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/contextual-control-graph-with-selected-impacted-assets-3005f02fb95130f59e8bca5366387409.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var a=s(6540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);