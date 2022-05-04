"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[113],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3519:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, all connectors are enabled. If you want to prevent Cyscale from syncing and assessing your assets for a certain connector, you can disable it. The state of the connector in Cyscale will be locked until you enable it again. The assets will not be updated based on your actual resources and assessments will not be performed for them."))}l.isMDXComponent=!0},9755:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can always trigger a new sync and assessment manually for a given connector (unless the sync is already in progress). This will make Cyscale read all your resources for that particular connector, evaluate the applicable controls, and generate any alerts if necessary."))}l.isMDXComponent=!0},6937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(3519),s=n(9755),l=["components"],c={sidebar_position:5},u="Okta",p={unversionedId:"connectors/okta",id:"connectors/okta",title:"Okta",description:"Cyscale enables you to keep track and secure your Okta identities. You connect your Okta organization(s) by creating an API Token that Cyscale uses to read your Okta resources.",source:"@site/docs/connectors/okta.mdx",sourceDirName:"connectors",slug:"/connectors/okta",permalink:"/connectors/okta",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Alibaba Cloud",permalink:"/connectors/alibaba"},next:{title:"The Assessment Process",permalink:"/security/assessment"}},d={},m=[{value:"Connecting Your Okta Organization",id:"connecting-your-okta-organization",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Managing Your Connected Okta Organization(s)",id:"managing-your-connected-okta-organizations",level:2},{value:"Configure",id:"configure",level:3},{value:"Disable/Enable",id:"disableenable",level:3},{value:"Sync",id:"sync",level:3},{value:"Service Coverage",id:"service-coverage",level:2}],k={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"okta"},"Okta"),(0,o.kt)("p",null,"Cyscale enables you to keep track and secure your Okta identities. You connect your Okta organization(s) by creating an ",(0,o.kt)("a",{parentName:"p",href:"https://help.okta.com/oie/en-us/Content/Topics/Security/API.htm?cshid=Security_API#Security_API"},"API Token")," that Cyscale uses to read your Okta resources."),(0,o.kt)("h2",{id:"connecting-your-okta-organization"},"Connecting Your Okta Organization"),(0,o.kt)("p",null,"Once you are ready to connect your Okta organization and have the required permissions, press the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button from the top-right corner, select ",(0,o.kt)("strong",{parentName:"p"},"Add Connector"),", and choose ",(0,o.kt)("strong",{parentName:"p"},"Okta"),". You will be greeted with a simple multi-step process."),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"In the first step, you provide a ",(0,o.kt)("strong",{parentName:"p"},"name")," for your Okta connector to be used throughout Cyscale. This is a plain-text identifier that helps you better manage your resources."),(0,o.kt)("p",null,"Here, you also provide the ",(0,o.kt)("strong",{parentName:"p"},"organization URL")," - ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://my-org.okta.com"},"https://my-org.okta.com"))," for example."),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"In the second step, you provide the API token that grants Cyscale access. You can find the exact steps to follow in order to create the token within the application."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Token Permissions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Okta API tokens inherit the permissions of the user that creates them. Ideally, you would have a separate Okta user with read-only permissions (besides permission to create API Tokens) that you use to create the token."))),(0,o.kt)("h2",{id:"managing-your-connected-okta-organizations"},"Managing Your Connected Okta Organization(s)"),(0,o.kt)("p",null,"Once connected, your Okta organization(s) will show up in the ",(0,o.kt)("a",{parentName:"p",href:"https://app.cyscale.com/#/connectors"},"Connectors")," list. You can perform the following actions:"),(0,o.kt)("h3",{id:"configure"},"Configure"),(0,o.kt)("p",null,"You can update the following information for your Okta connectors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Identity Provider Name - this helps you better identify the connector throughout Cyscale"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Okta API Token")," - you might want to rotate the token or, in case the token hasn't been used for more than 30 days, you will have to replace it")),(0,o.kt)("h3",{id:"disableenable"},"Disable/Enable"),(0,o.kt)(i.ZP,{mdxType:"DisableEnable"}),(0,o.kt)("h3",{id:"sync"},"Sync"),(0,o.kt)(s.ZP,{mdxType:"Sync"}),(0,o.kt)("h2",{id:"service-coverage"},"Service Coverage"),(0,o.kt)("p",null,"The list of Okta resources that Cyscale can handle are listed in the tables below, along with the number of controls that check their configuration."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IAM"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Application"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AuthenticationPolicy"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PasswordPolicy"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))))}y.isMDXComponent=!0}}]);