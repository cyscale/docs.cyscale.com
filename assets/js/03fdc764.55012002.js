"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3519:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, all connectors are enabled. If you want to prevent Cyscale from syncing and assessing your assets for a certain connector, you can disable it. The state of the connector in Cyscale will be locked until you enable it again. The assets will not be updated based on your actual resources and assessments will not be performed for them."))}i.isMDXComponent=!0},9755:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can always trigger a new sync and assessment manually for a given connector (unless the sync is already in progress). This will make Cyscale read all your resources for that particular connector, evaluate the applicable controls, and generate any alerts if necessary."))}i.isMDXComponent=!0},1101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(3519),l=a(9755);const i={sidebar_position:1},s="Amazon Web Services",c={unversionedId:"connectors/aws",id:"connectors/aws",title:"Amazon Web Services",description:"Cyscale enables you to keep track and secure your AWS infrastructure natively. You connect your AWS account(s) by creating an IAM role which Cyscale can assume to read your AWS resources.",source:"@site/docs/connectors/aws.mdx",sourceDirName:"connectors",slug:"/connectors/aws",permalink:"/connectors/aws",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Billing & Usage",permalink:"/general/billing"},next:{title:"Azure",permalink:"/connectors/azure"}},u={},p=[{value:"Connecting Your AWS Account(s)",id:"connecting-your-aws-accounts",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"CloudFormation (Default)",id:"cloudformation-default",level:4},{value:"Terraform",id:"terraform",level:4},{value:"Manual",id:"manual",level:4},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Deep Dive on Permissions",id:"deep-dive-on-permissions",level:2},{value:"Managing Your Connected AWS Account(s)",id:"managing-your-connected-aws-accounts",level:2},{value:"Configure",id:"configure",level:3},{value:"Disable/Enable",id:"disableenable",level:3},{value:"Sync",id:"sync",level:3},{value:"Service Coverage",id:"service-coverage",level:2},{value:"Compute",id:"compute",level:3},{value:"Databases",id:"databases",level:3},{value:"Identity &amp; Access Management",id:"identity--access-management",level:3},{value:"Logging",id:"logging",level:3},{value:"Security &amp; Network",id:"security--network",level:3},{value:"Serverless",id:"serverless",level:3},{value:"Services",id:"services",level:3},{value:"Storage",id:"storage",level:3},{value:"Cloud-Wide",id:"cloud-wide",level:3},{value:"Amazon Inspector",id:"amazon-inspector",level:2},{value:"Configure",id:"configure-1",level:3},{value:"Vulnerabilities",id:"vulnerabilities",level:3},{value:"Severity",id:"severity",level:3},{value:"Asset Risk",id:"asset-risk",level:3},{value:"Mentions",id:"mentions",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-web-services"},"Amazon Web Services"),(0,r.kt)("p",null,"Cyscale enables you to keep track and secure your AWS infrastructure natively. You connect your AWS account(s) by creating an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html"},"IAM role")," which Cyscale can assume to read your AWS resources."),(0,r.kt)("h2",{id:"connecting-your-aws-accounts"},"Connecting Your AWS Account(s)"),(0,r.kt)("p",null,"Once you are ready to connect your AWS account and have the required permissions, press the ",(0,r.kt)("strong",{parentName:"p"},"Create")," button from the top-right corner, select ",(0,r.kt)("strong",{parentName:"p"},"Add Connector"),", and choose ",(0,r.kt)("strong",{parentName:"p"},"AWS"),". You will be greeted with a simple multi-step process."),(0,r.kt)("h3",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"In the first step, you provide a ",(0,r.kt)("strong",{parentName:"p"},"name")," for your AWS account to be used throughout Cyscale. This is a plain-text identifier that helps you better manage your resources."),(0,r.kt)("p",null,"You also provide the ",(0,r.kt)("strong",{parentName:"p"},"external ID"),". The field is pre-populated by default and there is no real reason to change it other than if you want to use an already existing role. This is a native feature of AWS roles that helps the involved parties establish a more secure connection (see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html"},"AWS docs")," for more)."),(0,r.kt)("h3",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"In the second step, you create the AWS role. Cyscale gives you multiple ways to achieve this to adhere to your already existing processes."),(0,r.kt)("h4",{id:"cloudformation-default"},"CloudFormation (Default)"),(0,r.kt)("p",null,"The most straightforward way to create the required AWS role is by using CloudFormation, the native infrastructure as code service from AWS."),(0,r.kt)("admonition",{title:"Infrastructure as Code Benefits",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Besides being simple to use, just like the Terraform option, it provides a great way to manage the lifecycle of the created resources (role, policy). For example, if you decide to remove the connection to your AWS account, you simply delete the CloudFormation stack and all the related resources will be deleted automatically.")),(0,r.kt)("p",null,"Cyscale comes with a ready-to-use CloudFormation template which you can view either inline (see the image below) or you can download the actual template from ",(0,r.kt)("a",{parentName:"p",href:"https://cyscale-onboarding.s3.amazonaws.com/aws/cyscale_aws_cloudformation_read-only.template"},"here")," (this is the source of the CloudFormation stack)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CloudFormation Template",src:a(5599).Z,width:"3024",height:"1240"})),(0,r.kt)("p",null,"When you click on ",(0,r.kt)("strong",{parentName:"p"},"Create AWS Stack"),", a new browser window will open with the CloudFormation stack ready to be created. You might have to authenticate into the AWS console."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS CloudFormation Stack",src:a(748).Z,width:"2378",height:"1564"})),(0,r.kt)("p",null,"Review the name and the parameters of the stack, check the ",(0,r.kt)("em",{parentName:"p"},"I acknowledge that AWS CloudFormation might create IAM resources with custom names.")," checkbox, and press ",(0,r.kt)("strong",{parentName:"p"},"Create stack"),". Your AWS resources should be ready within a few minutes (state ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE_COMPLETE"),"). From the ",(0,r.kt)("strong",{parentName:"p"},"outputs")," tab, copy the ARN and paste it into the ",(0,r.kt)("em",{parentName:"p"},"Role ARN from Output")," field in Cyscale, as displayed below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS Role ARN from CloudFormation",src:a(1220).Z,width:"1648",height:"840"})),(0,r.kt)("h4",{id:"terraform"},"Terraform"),(0,r.kt)("p",null,"Another option based on infrastructure as code is to use Terraform. If your current workflow leverages Terraform, you might want to choose this approach."),(0,r.kt)("p",null,"Cyscale generates a ready-to-use Terraform configuration file which you download and run using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/cli"},"Terraform CLI"),". Inspect the file and, once you are ready, run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply -auto-approve"),"."),(0,r.kt)("admonition",{title:"Authentication and Authorization",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Terraform uses the provider's APIs/SDKs to manage the resources - IAM role and policy in this case. The Terraform AWS provider can be configured in several ways which you can find ",(0,r.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration"},"here"),"."),(0,r.kt)("p",{parentName:"admonition"},"Perhaps the simplest option is to let the provider use the credentials stored by the AWS CLI. If you have multiple AWS CLI profiles, you can set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS_PROFILE")," with the profile corresponding to the AWS account you want to connect to Cyscale.")),(0,r.kt)("h4",{id:"manual"},"Manual"),(0,r.kt)("p",null,"If you prefer setting up the resources manually from the AWS management console, follow the steps described in the application."),(0,r.kt)("admonition",{title:"Access Security",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"While the permissions you grant to Cyscale are limited to ",(0,r.kt)("strong",{parentName:"p"},"reading")," the configuration of your cloud resources, you might still be concerned about the security of your AWS account. Setting the trust relationship with the Cyscale AWS account means that any entity from the Cyscale AWS account with the privilege to assume the role from your account and that has access to the external ID you provided can read your AWS infrastructure."),(0,r.kt)("p",{parentName:"admonition"},"The Cyscale AWS account (789815788242) follows all the best practices and is continuously secured by Cyscale itself. Furthermore, the external ID is encrypted and stored in a database accessible only by certain services from within the Cyscale infrastructure. No member of the Cyscale team has access to the external ID.")),(0,r.kt)("h3",{id:"step-3"},"Step 3"),(0,r.kt)("p",null,"You can tell Cyscale to also discover the AWS SSO resources (users and groups) managed through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/singlesignon/latest/developerguide/what-is-scim.html"},"SCIM"),". These endpoints are used, in most cases, for automatic provisioning of users and groups from an identity provider such as Okta."),(0,r.kt)("p",null,"Enable the SCIM integration if you have configured SSO for your AWS account. This implies that the AWS account is the management account of the AWS Organization. Read more in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html"},"AWS documentation"),"."),(0,r.kt)("p",null,"You will have to provide the SCIM endpoint and the access token - you can create a new one by following the steps described in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/provision-automatically.html#generate-token"},"AWS docs"),"."),(0,r.kt)("p",null,"Cyscale only reads the SSO users and groups through SCIM."),(0,r.kt)("admonition",{title:"Limitations",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently, the AWS SCIM implementation limits the number of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/singlesignon/latest/developerguide/listusers.html#constraints-listusers"},"users")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/singlesignon/latest/developerguide/listgroups.html#constraints-listgroups"},"groups")," that can be retrieved to 50. If you need more contact us - we might be able to leverage more information provided by the identity provider.")),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you use Okta to manage your users and groups, consider ",(0,r.kt)("a",{parentName:"p",href:"/connectors/okta"},"connecting your Okta account to Cyscale"),". This will enable Cyscale to link your Okta users with the AWS SSO users, thus providing you with the complete picture of what each Okta user can do in each AWS account.")),(0,r.kt)("h3",{id:"step-4"},"Step 4"),(0,r.kt)("p",null,"In this step, you can select which AWS regions should be covered by Cyscale. By default, all regions are selected. In most cases, you will want to choose the regions in which you have some resources deployed. You can change this after."),(0,r.kt)("admonition",{title:"Default Resources",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All AWS regions have some resources deployed by default such as the default VPC, default subnets (one for each AZ), and the default security group. These resources count towards the quota of your plan.")),(0,r.kt)("admonition",{title:"Global Resources",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Certain resources such as IAM resources (users, groups, roles, policies, etc.) do not belong to a certain region. These are classified by Cyscale as ",(0,r.kt)("strong",{parentName:"p"},"global assets"),".")),(0,r.kt)("h3",{id:"step-5"},"Step 5"),(0,r.kt)("p",null,"In this step, Cyscale makes sure the connection to your cloud account can be established and starts the first sync in the background. You can navigate to the cloud account overview page. The page will automatically refresh when the sync and assessment are completed."),(0,r.kt)("h2",{id:"deep-dive-on-permissions"},"Deep Dive on Permissions"),(0,r.kt)("p",null,"Since Cyscale connects to your AWS account(s) by assuming the role you create, all permissions are controlled through the policies that are attached to the role."),(0,r.kt)("p",null,"To benefit from everything Cyscale has and will have to offer, two policies should be attached:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SecurityAudit")," - This is an AWS-managed policy granting read access to most AWS services. You can read more about it in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor"},"AWS documentation")," and in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/policies/arn:aws:iam::aws:policy/SecurityAudit"},"AWS console"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Custom Policy")," - An additional custom policy granting permissions for certain actions/services that are not covered by the Security Audit policy such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ListTagsForResource")," for EFS and ",(0,r.kt)("inlineCode",{parentName:"p"},"List*")," actions for S3."))),(0,r.kt)("admonition",{title:"Data Access",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is important to make the distinction between infrastructure/configuration access and data access. Since Cyscale focuses currently on infrastructure, ",(0,r.kt)("strong",{parentName:"p"},"these policies do not grant permissions to your data"),". For example, Cyscale can read the configuration of your S3 buckets and objects, but not their actual content - i.e. there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"GetObject")," permission."),(0,r.kt)("p",{parentName:"admonition"},"One area you might want to pay attention to is ",(0,r.kt)("strong",{parentName:"p"},"logging"),". Cyscale will have access to your logs from Amazon CloudWatch. While Cyscale does not process the content of the logs in any way, it is still important to not leak any sensitive information in logs.")),(0,r.kt)("h2",{id:"managing-your-connected-aws-accounts"},"Managing Your Connected AWS Account(s)"),(0,r.kt)("p",null,"Once connected, your AWS account(s) will show up in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.cyscale.com/connectors"},"Connectors")," list. From there, you can either use the inline actions or navigate to the overview page of the cloud account. The available options are:"),(0,r.kt)("h3",{id:"configure"},"Configure"),(0,r.kt)("p",null,"You can update the following information for your AWS cloud accounts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - this helps you better identify the cloud account throughout the Cyscale platform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Role ARN")," - in case you want Cyscale to use another role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"External ID")," - if you change the IAM Role you might also have to provide another external ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regions")," - from the dedicated tab, you can update which AWS regions Cyscale should cover. This change will be visible after the next sync, which starts automatically after you save. If you remove a region, all assets from that region will be removed from Cyscale.")),(0,r.kt)("h3",{id:"disableenable"},"Disable/Enable"),(0,r.kt)(o.ZP,{mdxType:"DisableEnable"}),(0,r.kt)("h3",{id:"sync"},"Sync"),(0,r.kt)(l.ZP,{mdxType:"Sync"}),(0,r.kt)("h2",{id:"service-coverage"},"Service Coverage"),(0,r.kt)("p",null,"The list of AWS resources that Cyscale can handle are listed in the tables below, along with the number of controls that check their configuration"),(0,r.kt)("h3",{id:"compute"},"Compute"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EC2"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FlowLog"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NetworkACL"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NetworkInterface"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SecurityGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subnetwork"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VM"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Volume"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VPC"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ECS"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECSContainerInstance"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"databases"},"Databases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RDS"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBInstance"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"DynamoDB"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DynamoDBTable"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"identity--access-management"},"Identity & Access Management"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"IAM"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccessAnalyzer"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CredentialReport"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PasswordPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Policy"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Role"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ServerCertificate"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserCredentials"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VirtualMFADevice"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CloudTrail"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trail"),(0,r.kt)("td",{parentName:"tr",align:null},"4")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CloudWatch"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MetricAlarm"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MetricFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"security--network"},"Security & Network"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ELB"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTPListener"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadBalancer"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KMS"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KMSKey"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h3",{id:"serverless"},"Serverless"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Lambda"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConfigurationRecorder"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Kinesis"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KinesisDataStream"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SNS"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SNSSubscription"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SNSTopic"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ECS"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECSCluster"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SQS"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQSQueue"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API Gateway"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VPCLink"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CustomDomain"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"S3"),(0,r.kt)("th",{parentName:"tr",align:null},"# of Controls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"13")))),(0,r.kt)("h3",{id:"cloud-wide"},"Cloud-Wide"),(0,r.kt)("p",null,"In addition, Cyscale offers 27 more AWS controls that are not specific to a service or asset type. These are called cloud-wide controls."),(0,r.kt)("h2",{id:"amazon-inspector"},"Amazon Inspector"),(0,r.kt)("h3",{id:"configure-1"},"Configure"),(0,r.kt)("p",null,"Amazon Inspector is an automated vulnerability management service that continually scans Amazon Elastic Compute Cloud (EC2), AWS Lambda functions, and container workloads for software vulnerabilities and unintended network exposure."),(0,r.kt)("p",null,"You can activate Amazon Inspector for your entire organization or an individual account with a few clicks in the AWS Management Console. For more information check ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/inspector/faqs/?nc=sn&loc=6"},"FAQ")," section of Amazon Inspector."),(0,r.kt)("p",null,"Once activated, Cyscale will pull all the findings automatically."),(0,r.kt)("h3",{id:"vulnerabilities"},"Vulnerabilities"),(0,r.kt)("p",null,"If the Amazon Inspector is activated, you can see all findings alongside the ",(0,r.kt)("strong",{parentName:"p"},"CVE ID")," (and the reference in ",(0,r.kt)("a",{parentName:"p",href:"https://cve.mitre.org/cve/"},"MITRE"),"), ",(0,r.kt)("strong",{parentName:"p"},"Severity"),", Affected ",(0,r.kt)("strong",{parentName:"p"},"Packages"),", ",(0,r.kt)("strong",{parentName:"p"},"Description")," of the CVE and the ",(0,r.kt)("strong",{parentName:"p"},"Remediation")," steps."),(0,r.kt)("p",null,"The findings will be grouped by CVE ID and ordered by Severity in the Vulnerabilities inventory (accessible from the main menu)."),(0,r.kt)("p",null,"You can also check asset vulnerabilities by navigating to the Vulnerabilities tab or in the Overview Cards section."),(0,r.kt)("h3",{id:"severity"},"Severity"),(0,r.kt)("p",null,"A finding severity rating can be Info, Low, Medium, High, Critical or Untriaged.\n",(0,r.kt)("strong",{parentName:"p"},"Untriaged")," findings are those the vendor hasn't yet assigned a score for. Cyscale will consider Untriaged findings a priority and will display them at the top of the list.\nEach Severity is marked with a color from light yellow to dark red."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html"},"read more")," about how Amazon Inspector computes severity scores."),(0,r.kt)("h3",{id:"asset-risk"},"Asset Risk"),(0,r.kt)("p",null,"Risk is calculated by normalizing the severity scores of both security misconfigurations and vulnerable packages to a common scale, and then combining them using a weighted average based on their relative importance. The resulting weighted risk score is categorized into risk levels such as ",(0,r.kt)("strong",{parentName:"p"},"Low"),", ",(0,r.kt)("strong",{parentName:"p"},"Medium"),", or ",(0,r.kt)("strong",{parentName:"p"},"High"),"."),(0,r.kt)("h3",{id:"mentions"},"Mentions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Vulnerabilities inventory will be empty until the Amazon Inspector is enabled in one of your AWS connectors."),(0,r.kt)("li",{parentName:"ul"},"Once enabled, you should wait for the next sync or trigger a sync from the Connectors page. Check ",(0,r.kt)("a",{parentName:"li",href:"/getting-started#syncassessment"},"Getting Started")," for more details."),(0,r.kt)("li",{parentName:"ul"},"Cyscale will not show findings related to Network Reachability due to their overlapping with our security controls."),(0,r.kt)("li",{parentName:"ul"},"Starting on 19 April 2023, Amazon Inspector supports ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/about-aws/whats-new/2023/04/amazon-inspector-deep-inspection-ec2-instances/"},"deep inspection of EC2 instances"),". It allows you to see vulnerabilities in application packages such as Python, Java, and Node.js.")))}h.isMDXComponent=!0},748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-cf-create-stack-0021c595ce4f2aaea5d76dfc34d01b55.png"},1220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-cf-role-arn-593b8c7f8966689058bd1897f38cb13b.png"},5599:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-cf-template-822ef2b68cc67b6f7429689a1a8ad1fa.png"}}]);