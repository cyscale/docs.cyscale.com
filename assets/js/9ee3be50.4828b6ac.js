"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[233],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?o.createElement(d,r(r({ref:t},p),{},{components:n})):o.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(3117),a=n(102),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:3},c="Notifications",l={unversionedId:"account/notifications",id:"account/notifications",title:"Notifications",description:"An important part of maintaining a good security posture is represented by notifications. Cyscale gives you two notification flavors, personal and via configured notification channels.",source:"@site/docs/account/notifications.md",sourceDirName:"account",slug:"/account/notifications",permalink:"/account/notifications",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Account Deletion",permalink:"/account/account-deletion"},next:{title:"Amazon Web Services",permalink:"/connectors/aws"}},p={},u=[{value:"Personal Notifications",id:"personal-notifications",level:2},{value:"Notification Channels",id:"notification-channels",level:2},{value:"Microsoft Teams Integration",id:"microsoft-teams-integration",level:3},{value:"Slack Integration",id:"slack-integration",level:3},{value:"Webhook Integration",id:"webhook-integration",level:3}],f={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notifications"},"Notifications"),(0,i.kt)("p",null,"An important part of maintaining a good security posture is represented by notifications. Cyscale gives you two notification flavors, personal and via configured notification channels."),(0,i.kt)("h2",{id:"personal-notifications"},"Personal Notifications"),(0,i.kt)("p",null,"Personal notifications are the ones that you receive in your email inbox. Cyscale sends these individually to each user of the account, thus allowing members to control their notification preferences."),(0,i.kt)("p",null,"You can customize which notifications you want to receive from the ",(0,i.kt)("strong",{parentName:"p"},"My Profile")," page."),(0,i.kt)("p",null,"Currently, Cyscale has the following notification types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security Posture")," - a weekly digest with the security posture (high/medium/low risk asset count and their trend compared to the previous digest)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Alerts")," - Cyscale sends alert notifications whenever it finds new vulnerabilities. Due to how the assessment process takes place, Cyscale will batch all alerts for a given connector in a single email.")),(0,i.kt)("h2",{id:"notification-channels"},"Notification Channels"),(0,i.kt)("p",null,"Cyscale also enables you to receive alerts on ",(0,i.kt)("strong",{parentName:"p"},"Slack"),", ",(0,i.kt)("strong",{parentName:"p"},"Teams"),", and via ",(0,i.kt)("strong",{parentName:"p"},"Webhook"),". You can configure up to 10 notification channels and up to 3 notification channels for each provider (e.g., you can have up to 3 Slack notification channels)."),(0,i.kt)("p",null,"Whenever Cyscale creates new alerts for a given connector, it will batch and send them as a platform-specific message such as the Teams example below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alerts via Teams Notification Channel",src:n(696).Z,width:"1990",height:"1136"})),(0,i.kt)("h3",{id:"microsoft-teams-integration"},"Microsoft Teams Integration"),(0,i.kt)("p",null,"In order for Cyscale to be able to send you notifications via Teams, you have to configure an ",(0,i.kt)("strong",{parentName:"p"},"incoming webhook connector")," on the Teams channel where Cyscale should send the messages. For the exact steps, consult the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"},"Microsoft documentation"),"."),(0,i.kt)("p",null,"Once you have the webhook URL, go to ",(0,i.kt)("strong",{parentName:"p"},"Notification Channels")," (from the top-right menu) and press the plus sign next to Microsoft Teams. Give it a descriptive name and description (optional) and paste in the webhook URL. You can make sure that the integration works by pressing ",(0,i.kt)("strong",{parentName:"p"},"Test Connection")," which tells Cyscale to send you the following message \u201c",(0,i.kt)("em",{parentName:"p"},"This message confirms you've properly configured Microsoft Teams notifications in Cyscale"),"\u201d."),(0,i.kt)("h3",{id:"slack-integration"},"Slack Integration"),(0,i.kt)("p",null,"In order for Cyscale to be able to send you notifications via Slack, you have to configure a ",(0,i.kt)("strong",{parentName:"p"},"Slack app with incoming webhooks")," enabled. For the exact steps, consult the ",(0,i.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Slack documentation"),"."),(0,i.kt)("p",null,"Once you have the webhook URL, go to ",(0,i.kt)("strong",{parentName:"p"},"Notification Channels")," (from the top-right menu) and press the plus sign next to Slack. Give it a descriptive name and description (optional) and paste in the webhook URL. You can make sure that the integration works by pressing ",(0,i.kt)("strong",{parentName:"p"},"Test Connection")," which tells Cyscale to send you the following message \u201c",(0,i.kt)("em",{parentName:"p"},"This message confirms you've properly configured Slack notifications in Cyscale"),"\u201d."),(0,i.kt)("h3",{id:"webhook-integration"},"Webhook Integration"),(0,i.kt)("p",null,"If you want Cyscale to push alerts directly to your endpoint, you can configure a webhook. Whenever Cyscale creates new alerts, it will send to your endpoint an array with them. See the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "createdAtTimestamp": "2022-02-25T13:24:00.0Z",\n    "lastSeenAtTimestamp": "2022-02-25T13:24:00.0Z",\n    "resolvedAtTimestamp": "0001-01-01T00:00:00Z",\n    "accountID": "a8512186-f8ff-45c7-9ebb-a4752f405da2",\n    "controlName": "Ensure log metric filter and alerts exist for Custom Role changes",\n    "controlID": "eac85ccf-f169-4236-97f0-28c7b2167289",\n    "status": "open",\n    "cloudProvider": "gcp",\n    "cloudAccountName": "Cyscale GCP",\n    "cloudAccountID": "61bc4a6d72146f226120c37d",\n    "severity": "low"\n  },\n  {\n    "createdAtTimestamp": "2022-02-25T13:24:00.0Z",\n    "lastSeenAtTimestamp": "2022-02-25T13:24:00.0Z",\n    "resolvedAtTimestamp": "0001-01-01T00:00:00Z",\n    "accountID": "a8512186-f8ff-45c7-9ebb-a4752f405da2",\n    "controlName": "Ensure the default firewall does not have any default rules besides http and https",\n    "controlID": "5931d1d0-5bcb-4b6f-a65a-c18295e94b38",\n    "status": "open",\n    "assetName": "default-allow-rdp",\n    "assetID": "ce90ed4a-6b07-46b4-bb02-d1f6ef7953b1",\n    "assetType": "FirewallRule",\n    "assetCategory": "SecurityNetwork",\n    "cloudProvider": "gcp",\n    "cloudAccountName": "Cyscale GCP",\n    "cloudAccountID": "61bc4a6d72146f226120c37d",\n    "severity": "medium"\n  }\n]\n')),(0,i.kt)("p",null,"Note that some alerts might not contain asset-related fields since they cannot be associated with a specific asset."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"severity")," of the alerts can be ",(0,i.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"medium"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"high")," and the ",(0,i.kt)("strong",{parentName:"p"},"status")," can be ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"resolved")," (however, Cyscale sends only ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," alerts for now)."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"resolvedAtTimestamp")," is always ",(0,i.kt)("inlineCode",{parentName:"p"},'\u201c0001-01-01T00:00:00Z"')," since Cyscale sends only newly created alerts - they are not resolved by definition."))}m.isMDXComponent=!0},696:function(e,t,n){t.Z=n.p+"assets/images/alerts-teams-c9e7be0bf66bd67c840440429bcfcb62.png"}}]);