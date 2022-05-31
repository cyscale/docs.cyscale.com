"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[562],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3519:function(e,t,a){a.d(t,{ZP:function(){return s}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={toc:[]};function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, all connectors are enabled. If you want to prevent Cyscale from syncing and assessing your assets for a certain connector, you can disable it. The state of the connector in Cyscale will be locked until you enable it again. The assets will not be updated based on your actual resources and assessments will not be performed for them."))}s.isMDXComponent=!0},9755:function(e,t,a){a.d(t,{ZP:function(){return s}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={toc:[]};function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can always trigger a new sync and assessment manually for a given connector (unless the sync is already in progress). This will make Cyscale read all your resources for that particular connector, evaluate the applicable controls, and generate any alerts if necessary."))}s.isMDXComponent=!0},1101:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(3519),i=a(9755),s=["components"],c={sidebar_position:1},u="Amazon Web Services",p={unversionedId:"connectors/aws",id:"connectors/aws",title:"Amazon Web Services",description:"Cyscale enables you to keep track and secure your AWS infrastructure natively. You connect your AWS account(s) by creating an IAM role which Cyscale can assume to read your AWS resources.",source:"@site/docs/connectors/aws.mdx",sourceDirName:"connectors",slug:"/connectors/aws",permalink:"/connectors/aws",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/account/notifications"},next:{title:"Azure",permalink:"/connectors/azure"}},d={},m=[{value:"Connecting Your AWS Account(s)",id:"connecting-your-aws-accounts",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"CloudFormation (Default)",id:"cloudformation-default",level:4},{value:"Terraform",id:"terraform",level:4},{value:"Manual",id:"manual",level:4},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Deep Dive on Permissions",id:"deep-dive-on-permissions",level:2},{value:"Managing Your Connected AWS Account(s)",id:"managing-your-connected-aws-accounts",level:2},{value:"Configure",id:"configure",level:3},{value:"Disable/Enable",id:"disableenable",level:3},{value:"Sync",id:"sync",level:3},{value:"Service Coverage",id:"service-coverage",level:2},{value:"Compute",id:"compute",level:3},{value:"Databases",id:"databases",level:3},{value:"Identity &amp; Access Management",id:"identity--access-management",level:3},{value:"Logging",id:"logging",level:3},{value:"Security &amp; Network",id:"security--network",level:3},{value:"Serverless",id:"serverless",level:3},{value:"Services",id:"services",level:3},{value:"Storage",id:"storage",level:3},{value:"Cloud-Wide",id:"cloud-wide",level:3}],h={toc:m};function k(e){var t=e.components,c=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"amazon-web-services"},"Amazon Web Services"),(0,o.kt)("p",null,"Cyscale enables you to keep track and secure your AWS infrastructure natively. You connect your AWS account(s) by creating an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html"},"IAM role")," which Cyscale can assume to read your AWS resources."),(0,o.kt)("h2",{id:"connecting-your-aws-accounts"},"Connecting Your AWS Account(s)"),(0,o.kt)("p",null,"Once you are ready to connect your AWS account and have the required permissions, press the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button from the top-right corner, select ",(0,o.kt)("strong",{parentName:"p"},"Add Connector"),", and choose ",(0,o.kt)("strong",{parentName:"p"},"AWS"),". You will be greeted with a simple multi-step process."),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"In the first step, you provide a ",(0,o.kt)("strong",{parentName:"p"},"name")," for your AWS account to be used throughout Cyscale. This is a plain-text identifier that helps you better manage your resources."),(0,o.kt)("p",null,"You also provide the ",(0,o.kt)("strong",{parentName:"p"},"external ID"),". The field is pre-populated by default and there is no real reason to change it other than if you want to use an already existing role. This is a native feature of AWS roles that helps the involved parties establish a more secure connection (see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html"},"AWS docs")," for more)."),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"In the second step, you create the AWS role. Cyscale gives you multiple ways to achieve this to adhere to your already existing processes."),(0,o.kt)("h4",{id:"cloudformation-default"},"CloudFormation (Default)"),(0,o.kt)("p",null,"The most straightforward way to create the required AWS role is by using CloudFormation, the native infrastructure as code service from AWS."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Infrastructure as Code Benefits")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Besides being simple to use, just like the Terraform option, it provides a great way to manage the lifecycle of the created resources (role, policy). For example, if you decide to remove the connection to your AWS account, you simply delete the CloudFormation stack and all the related resources will be deleted automatically."))),(0,o.kt)("p",null,"Cyscale comes with a ready-to-use CloudFormation template which you can view either inline (see the image below) or you can download the actual template from ",(0,o.kt)("a",{parentName:"p",href:"https://cyscale-onboarding.s3.amazonaws.com/aws/cyscale_aws_cloudformation_read-only.template"},"here")," (this is the source of the CloudFormation stack)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CloudFormation Template",src:a(5599).Z,width:"3024",height:"1240"})),(0,o.kt)("p",null,"When you click on ",(0,o.kt)("strong",{parentName:"p"},"Create AWS Stack"),", a new browser window will open with the CloudFormation stack ready to be created. You might have to authenticate into the AWS console."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS CloudFormation Stack",src:a(748).Z,width:"2378",height:"1564"})),(0,o.kt)("p",null,"Review the name and the parameters of the stack, check the ",(0,o.kt)("em",{parentName:"p"},"I acknowledge that AWS CloudFormation might create IAM resources with custom names.")," checkbox, and press ",(0,o.kt)("strong",{parentName:"p"},"Create stack"),". Your AWS resources should be ready within a few minutes (state ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE_COMPLETE"),"). From the ",(0,o.kt)("strong",{parentName:"p"},"outputs")," tab, copy the ARN and paste it into the ",(0,o.kt)("em",{parentName:"p"},"Role ARN from Output")," field in Cyscale, as displayed below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Role ARN from CloudFormation",src:a(1220).Z,width:"1648",height:"840"})),(0,o.kt)("h4",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"Another option based on infrastructure as code is to use Terraform. If your current workflow leverages Terraform, you might want to choose this approach."),(0,o.kt)("p",null,"Cyscale generates a ready-to-use Terraform configuration file which you download and run using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/cli"},"Terraform CLI"),". Inspect the file and, once you are ready, run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply -auto-approve"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Authentication and Authorization")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Terraform uses the provider's APIs/SDKs to manage the resources - IAM role and policy in this case. The Terraform AWS provider can be configured in several ways which you can find ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration"},"here"),"."),(0,o.kt)("p",{parentName:"div"},"Perhaps the simplest option is to let the provider use the credentials stored by the AWS CLI. If you have multiple AWS CLI profiles, you can set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_PROFILE")," with the profile corresponding to the AWS account you want to connect to Cyscale."))),(0,o.kt)("h4",{id:"manual"},"Manual"),(0,o.kt)("p",null,"If you prefer setting up the resources manually from the AWS management console, follow the steps described in the application."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access Security")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While the permissions you grant to Cyscale are limited to ",(0,o.kt)("strong",{parentName:"p"},"reading")," the configuration of your cloud resources, you might still be concerned about the security of your AWS account. Setting the trust relationship with the Cyscale AWS account means that any entity from the Cyscale AWS account with the privilege to assume the role from your account and that has access to the external ID you provided can read your AWS infrastructure."),(0,o.kt)("p",{parentName:"div"},"The Cyscale AWS account (789815788242) follows all the best practices and is continuously secured by Cyscale itself. Furthermore, the external ID is encrypted and stored in a database accessible only by certain services from within the Cyscale infrastructure. No member of the Cyscale team has access to the external ID."))),(0,o.kt)("h3",{id:"step-3"},"Step 3"),(0,o.kt)("p",null,"In the third step, you can select which AWS regions should be covered by Cyscale. By default, all regions are selected. In most cases, you will want to choose the regions in which you have some resources deployed. You can change this after."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Default Resources")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All AWS regions have some resources deployed by default such as the default VPC, default subnets (one for each AZ), and the default security group. These resources count towards the quota of your plan."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Global Resources")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Certain resources such as IAM resources (users, groups, roles, policies, etc.) do not belong to a certain region. These are classified by Cyscale as ",(0,o.kt)("strong",{parentName:"p"},"global assets"),"."))),(0,o.kt)("h3",{id:"step-4"},"Step 4"),(0,o.kt)("p",null,"In step four, Cyscale makes sure the connection to your cloud account can be established and starts the first sync in the background. You can navigate to the cloud account overview page. The page will automatically refresh when the sync and assessment are completed."),(0,o.kt)("h2",{id:"deep-dive-on-permissions"},"Deep Dive on Permissions"),(0,o.kt)("p",null,"Since Cyscale connects to your AWS account(s) by assuming the role you create, all permissions are controlled through the policies that are attached to the role."),(0,o.kt)("p",null,"To benefit from everything Cyscale has and will have to offer, two policies should be attached:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SecurityAudit")," - This is an AWS-managed policy granting read access to most AWS services. You can read more about it in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor"},"AWS documentation")," and in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/policies/arn:aws:iam::aws:policy/SecurityAudit"},"AWS console"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Custom Policy")," - An additional custom policy granting permissions for certain actions/services that are not covered by the Security Audit policy such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ListTagsForResource")," for EFS and ",(0,o.kt)("inlineCode",{parentName:"p"},"List*")," actions for S3."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Data Access")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is important to make the distinction between infrastructure/configuration access and data access. Since Cyscale focuses currently on infrastructure, ",(0,o.kt)("strong",{parentName:"p"},"these policies do not grant permissions to your data"),". For example, Cyscale can read the configuration of your S3 buckets and objects, but not their actual content - i.e. there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"GetObject")," permission."),(0,o.kt)("p",{parentName:"div"},"One area you might want to pay attention to is ",(0,o.kt)("strong",{parentName:"p"},"logging"),". Cyscale will have access to your logs from Amazon CloudWatch. While Cyscale does not process the content of the logs in any way, it is still important to not leak any sensitive information in logs."))),(0,o.kt)("h2",{id:"managing-your-connected-aws-accounts"},"Managing Your Connected AWS Account(s)"),(0,o.kt)("p",null,"Once connected, your AWS account(s) will show up in the ",(0,o.kt)("a",{parentName:"p",href:"https://app.cyscale.com/connectors"},"Connectors")," list. From there, you can either use the inline actions or navigate to the overview page of the cloud account. The available options are:"),(0,o.kt)("h3",{id:"configure"},"Configure"),(0,o.kt)("p",null,"You can update the following information for your AWS cloud accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name")," - this helps you better identify the cloud account throughout the Cyscale platform"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role ARN")," - in case you want Cyscale to use another role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"External ID")," - if you change the IAM Role you might also have to provide another external ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Regions")," - from the dedicated tab, you can update which AWS regions Cyscale should cover. This change will be visible after the next sync, which starts automatically after you save. If you remove a region, all assets from that region will be removed from Cyscale.")),(0,o.kt)("h3",{id:"disableenable"},"Disable/Enable"),(0,o.kt)(l.ZP,{mdxType:"DisableEnable"}),(0,o.kt)("h3",{id:"sync"},"Sync"),(0,o.kt)(i.ZP,{mdxType:"Sync"}),(0,o.kt)("h2",{id:"service-coverage"},"Service Coverage"),(0,o.kt)("p",null,"The list of AWS resources that Cyscale can handle are listed in the tables below, along with the number of controls that check their configuration"),(0,o.kt)("h3",{id:"compute"},"Compute"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"EC2"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FlowLog"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Image"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NetworkACL"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NetworkInterface"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SecurityGroup"),(0,o.kt)("td",{parentName:"tr",align:null},"6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Snapshot"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Subnetwork"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VM"),(0,o.kt)("td",{parentName:"tr",align:null},"4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Volume"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VPC"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))),(0,o.kt)("h3",{id:"databases"},"Databases"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"RDS"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBInstance"),(0,o.kt)("td",{parentName:"tr",align:null},"4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBCluster"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"DynamoDB"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DynamoDBTable"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))),(0,o.kt)("h3",{id:"identity--access-management"},"Identity & Access Management"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IAM"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AccessAnalyzer"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CredentialReport"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PasswordPolicy"),(0,o.kt)("td",{parentName:"tr",align:null},"7")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Policy"),(0,o.kt)("td",{parentName:"tr",align:null},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Role"),(0,o.kt)("td",{parentName:"tr",align:null},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ServerCertificate"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User"),(0,o.kt)("td",{parentName:"tr",align:null},"4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UserCredentials"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VirtualMFADevice"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))),(0,o.kt)("h3",{id:"logging"},"Logging"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CloudTrail"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Trail"),(0,o.kt)("td",{parentName:"tr",align:null},"4")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CloudWatch"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MetricAlarm"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MetricFilter"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))),(0,o.kt)("h3",{id:"security--network"},"Security & Network"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"ELB"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTPListener"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LoadBalancer"),(0,o.kt)("td",{parentName:"tr",align:null},"3")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"KMS"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"KMSKey"),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("h3",{id:"serverless"},"Serverless"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Lambda"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Config"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConfigurationRecorder"),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Kinesis"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"KinesisDataStream"),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SNS"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SNSSubscription"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SNSTopic"),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"S3"),(0,o.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,o.kt)("td",{parentName:"tr",align:null},"13")))),(0,o.kt)("h3",{id:"cloud-wide"},"Cloud-Wide"),(0,o.kt)("p",null,"In addition, Cyscale offers 27 more AWS controls that are not specific to a service or asset type. These are called cloud-wide controls."))}k.isMDXComponent=!0},748:function(e,t,a){t.Z=a.p+"assets/images/aws-cf-create-stack-0021c595ce4f2aaea5d76dfc34d01b55.png"},1220:function(e,t,a){t.Z=a.p+"assets/images/aws-cf-role-arn-593b8c7f8966689058bd1897f38cb13b.png"},5599:function(e,t,a){t.Z=a.p+"assets/images/aws-cf-template-822ef2b68cc67b6f7429689a1a8ad1fa.png"}}]);