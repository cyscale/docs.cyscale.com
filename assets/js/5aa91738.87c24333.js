"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Exemptions",s={unversionedId:"security/exemptions",id:"security/exemptions",title:"Exemptions",description:"Exemptions enable you to exclude a specific asset from being assessed against a specific control. Cyscale will consider the asset as passing that specific control.",source:"@site/docs/security/exemptions.md",sourceDirName:"security",slug:"/security/exemptions",permalink:"/security/exemptions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/security/alerts"},next:{title:"Standards",permalink:"/compliance/standards"}},c={},p=[{value:"Compliance Reports",id:"compliance-reports",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exemptions"},"Exemptions"),(0,o.kt)("p",null,"Exemptions enable you to exclude a specific asset from being assessed against a specific control. Cyscale will consider the asset as passing that specific control."),(0,o.kt)("p",null,"You can create exemptions from alerts or from the ",(0,o.kt)("em",{parentName:"p"},"findings")," section of a control. You will have to provide a reason (explain concisely why you created the exemption). All exemptions are displayed on the ",(0,o.kt)("strong",{parentName:"p"},"Exemptions")," page. Furthermore, you can see the exemptions for a specific control from the findings section of that control."),(0,o.kt)("p",null,"You can delete exemptions from the exemptions page. During the next connector assessment, Cyscale will assess the asset again."),(0,o.kt)("p",null,"If you delete the corresponding resource (e.g. AWS EC2 instance) for an exemption, Cyscale preserves the exemption but indicates that the asset has been deleted. This applies also in case you remove a connector or change its configuration (e.g. AWS regions)."),(0,o.kt)("h2",{id:"compliance-reports"},"Compliance Reports"),(0,o.kt)("p",null,"Since exemptions are part of the risk management strategy and can influence compliance, Cyscale includes the relevant exemptions in the generated compliance reports, at the end. The report will contain the exempted asset name, the connector, when and by whom it was exempted, and the reason."))}m.isMDXComponent=!0}}]);