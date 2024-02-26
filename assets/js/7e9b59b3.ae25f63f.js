"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[621],{9153:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(4848),n=s(8453);const r={sidebar_position:1},o="Inventory",l={id:"visibility/inventory",title:"Inventory",description:"Once at least one Connector is onboarded, Cyscale will periodically sync it. This will result in an extensive Inventory page that includes all the assets that Cyscale supports. You can check for supported assets on the Connectors page.",source:"@site/docs/visibility/inventory.mdx",sourceDirName:"visibility",slug:"/visibility/inventory",permalink:"/visibility/inventory",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/connectors/kubernetes"},next:{title:"Alerts",permalink:"/security/alerts"}},c={},a=[{value:"Filtering",id:"filtering",level:2},{value:"Security Score",id:"security-score",level:3},{value:"Failed Controls",id:"failed-controls",level:3}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"inventory",children:"Inventory"}),"\n",(0,t.jsx)(i.p,{children:"Once at least one Connector is onboarded, Cyscale will periodically sync it. This will result in an extensive Inventory page that includes all the assets that Cyscale supports. You can check for supported assets on the Connectors page."}),"\n",(0,t.jsx)(i.h2,{id:"filtering",children:"Filtering"}),"\n",(0,t.jsxs)(i.p,{children:["The Inventory will include hundreds or even thousands of assets which will become difficult to manage. For this, Cyscale provides an intuitive filter palette that will allow you to filter by common asset properties like ",(0,t.jsx)(i.code,{children:"Provider"}),", ",(0,t.jsx)(i.code,{children:"Connector"}),", ",(0,t.jsx)(i.code,{children:"Region"}),", ",(0,t.jsx)(i.code,{children:"Asset Category"}),", ",(0,t.jsx)(i.code,{children:"Asset Type"})," and ",(0,t.jsx)(i.code,{children:"Tags"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Besides these, Cyscale supports filtering by ",(0,t.jsx)(i.code,{children:"Security Score"})," and ",(0,t.jsx)(i.code,{children:"Failed Controls"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"security-score",children:"Security Score"}),"\n",(0,t.jsx)(i.p,{children:"The asset score is a metric that indicates the security impact of an asset. When filtering by score, you can choose from 4 options:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Minimal Risk"}),": 100% score (or no risk detected by Cyscale)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Low Risk"}),": 76% - 99% score"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Medium Risk"}),": 51% - 75% score"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"High Risk"}),": 0% - 50%"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This will allow you to check which are the most insecure assets and focus on remediating them to increase your overall security posture."}),"\n",(0,t.jsxs)(i.p,{children:["You can combine this filter with any other to get powerful insights like ",(0,t.jsx)(i.em,{children:'"AWS Virtual Machines with High Risk"'})," or ",(0,t.jsxs)(i.em,{children:['"Assets with ',(0,t.jsx)(i.code,{children:"env: production"}),' tag with Medium Risk"']}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["For more information check ",(0,t.jsx)(i.a,{href:"/security/security-score",children:"Asset Score Page"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"failed-controls",children:"Failed Controls"}),"\n",(0,t.jsxs)(i.p,{children:["Another powerful filter is ",(0,t.jsx)(i.strong,{children:"Failed Controls"}),". This will allow you to filter the inventory based on specific security controls like ",(0,t.jsx)(i.em,{children:'"Ensure VMs are not publicly accessible"'}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["When this filter is applied, the inventory will display all the assets impacted by a control (notice that secondary impacted assets are displayed as well, check ",(0,t.jsx)(i.a,{href:"/security/alerts#impacted-assets",children:"Alerts Page"})," for more details about this)."]}),"\n",(0,t.jsxs)(i.p,{children:["We've created an intuitive yet familiar control selector which allows you to search for controls based on ",(0,t.jsx)(i.code,{children:"Name"}),", ",(0,t.jsx)(i.code,{children:"Provider"}),", ",(0,t.jsx)(i.code,{children:"Severity"})," and ",(0,t.jsx)(i.code,{children:"Category"}),". You can then click to select one or multiple controls. Notice that you can only select ",(0,t.jsx)(i.code,{children:"Failed"})," controls."]}),"\n",(0,t.jsxs)(i.p,{children:["For example, you can combine this filter with any other to get valuable information of ",(0,t.jsx)(i.em,{children:'"Production AWS Virtual Machines publicly accessible from the Internet"'}),":"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Failed Controls filter UI",src:s(3940).A+"",width:"1094",height:"466"})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3940:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/impacted-by-controls-filter-b4001be2fa89c4df7f9037ca6bb58aa9.png"},8453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>l});var t=s(6540);const n={},r=t.createContext(n);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);