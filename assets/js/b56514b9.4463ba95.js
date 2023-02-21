"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||s;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},l="Alerts",o={unversionedId:"security/alerts",id:"security/alerts",title:"Alerts",description:"An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks.",source:"@site/docs/security/alerts.md",sourceDirName:"security",slug:"/security/alerts",permalink:"/security/alerts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/connectors/okta"},next:{title:"Standards",permalink:"/compliance/standards"}},i={},c=[{value:"The Alert Lifecycle",id:"the-alert-lifecycle",level:2},{value:"Managing Alerts",id:"managing-alerts",level:2},{value:"Alert Generation",id:"alert-generation",level:3},{value:"Alert Actions",id:"alert-actions",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alerts"},"Alerts"),(0,r.kt)("p",null,"An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks."),(0,r.kt)("h2",{id:"the-alert-lifecycle"},"The Alert Lifecycle"),(0,r.kt)("p",null,"The alerts are part of the assessment process that happens whenever Cyscale syncs your connectors (for both automatic/scheduled and manual triggers)."),(0,r.kt)("p",null,"When Cyscale identifies that an asset does not pass a control for the first time, it creates a new alert with the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Open"),"."),(0,r.kt)("admonition",{title:"Alert Notifications",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Whenever Cyscale generates new alerts, it sends them via email to each user that\u2019s part of the Cyscale account. Each user can change this from the ",(0,r.kt)("a",{parentName:"p",href:"https://app.cyscale.com/user-settings"},"user settings page"),". Read more on ",(0,r.kt)("a",{parentName:"p",href:"/account/notifications"},"the notifications docs"),".")),(0,r.kt)("p",null,"The alert will remain ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," until the asset either passes the control or is removed (or no longer visible to Cyscale - e.g., you might have changed the AWS regions in Cyscale), in which case the alert is moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"Resolved"),"."),(0,r.kt)("p",null,"In the case of regression (i.e. the asset fails again after previously being fixed), Cyscale creates a new alert with the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Open"),"."),(0,r.kt)("p",null,"The other alternative is when you disable the respective control or update it to stop generating alerts. In this case, Cyscale moves all the alerts for the respective control to ",(0,r.kt)("inlineCode",{parentName:"p"},"Disabled")," right after you update the control."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alert lifecycle",src:a(1010).Z,width:"771",height:"295"})),(0,r.kt)("h2",{id:"managing-alerts"},"Managing Alerts"),(0,r.kt)("h3",{id:"alert-generation"},"Alert Generation"),(0,r.kt)("p",null,"You can influence which controls Cyscale must generate alerts for. You have two options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Per control by disabling the ",(0,r.kt)("strong",{parentName:"li"},"Create alerts when this control fails")," flag. You can find this on the details panel of each control."),(0,r.kt)("li",{parentName:"ol"},"For your entire Cyscale account by changing the ",(0,r.kt)("strong",{parentName:"li"},"Severity Alerting Level")," from ",(0,r.kt)("a",{parentName:"li",href:"https://app.cyscale.com/account-settings"},"the account settings page"),". Cyscale will generate alerts for controls with severity equal or greater than the configured level.")),(0,r.kt)("admonition",{title:"Default severity alerting level",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The default level is ",(0,r.kt)("strong",{parentName:"p"},"medium"),". Cyscale will not generate alerts for low severity controls out of the box. We made this choice in order to keep the number of alerts as manageable as possible, especially after you connect your accounts for the first time.")),(0,r.kt)("admonition",{title:"Changing alert generation",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"As soon as you change the alert generation, Cyscale will disable any ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," alerts that are no longer needed. For example, if you increase the severity alerting level from medium to high, Cyscale will disable all medium alerts. If you lower the level back to medium, Cyscale will start generating alerts for medium severity controls during the subsequent assessments.")),(0,r.kt)("h3",{id:"alert-actions"},"Alert Actions"),(0,r.kt)("p",null,"You can see all the alerts on ",(0,r.kt)("a",{parentName:"p",href:"https://app.cyscale.com/alerts"},"the alerts page"),". By default, Cyscale shows you the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," alerts (i.e. sorted descendingly by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Created at")," date field)."),(0,r.kt)("p",null,"Cyscale provides two actions that you can perform on one or multiple alerts (batch):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dismiss")," - this is how you tell Cyscale that you don\u2019t want to see the selected alert(s). Cyscale will move the alert(s) to the ",(0,r.kt)("strong",{parentName:"li"},"Dismissed")," tab until the next assessment. If the issue is still there, Cyscale will move the alert back to the main tab."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Acknowledge")," - you can think of this action as of the read/unread state most email clients offer. Cyscale will not change the acknowledgement state during the subsequent assessments (as opposed to dismiss). You might find filtering by the acknowledgement state useful.")))}h.isMDXComponent=!0},1010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/alert-lifecycle-0012b60d42ec57cfd20ac0ecf9f5bf99.png"}}]);