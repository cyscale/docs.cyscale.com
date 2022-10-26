"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},o="Standards",s={unversionedId:"compliance/standards",id:"compliance/standards",title:"Standards",description:"CIS Amazon Web Services (AWS) Foundations Benchmark",source:"@site/docs/compliance/standards.md",sourceDirName:"compliance",slug:"/compliance/standards",permalink:"/compliance/standards",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/security/alerts"},next:{title:"Policies",permalink:"/compliance/policies"}},l={},c=[{value:"CIS Amazon Web Services (AWS) Foundations Benchmark",id:"cis-amazon-web-services-aws-foundations-benchmark",level:2},{value:"CIS Google Cloud Platform (GCP) Foundation",id:"cis-google-cloud-platform-gcp-foundation",level:2},{value:"CIS Microsoft Azure Foundations Benchmark",id:"cis-microsoft-azure-foundations-benchmark",level:2},{value:"CIS Alibaba (Aliyun) Cloud Foundation Benchmark",id:"cis-alibaba-aliyun-cloud-foundation-benchmark",level:2},{value:"GDPR - General Data Protection Regulation (EU)",id:"gdpr---general-data-protection-regulation-eu",level:2},{value:"HIPAA - Health Insurance Portability and Accountability Act (US)",id:"hipaa---health-insurance-portability-and-accountability-act-us",level:2},{value:"ISO 27001 - International Organization for Standardization",id:"iso-27001---international-organization-for-standardization",level:2},{value:"NIST 800-53 - NIST Special Publication 800-53",id:"nist-800-53---nist-special-publication-800-53",level:2},{value:"PCI-DSS - PCI Security Standards Council - Payment Card Industry Data Security Standard",id:"pci-dss---pci-security-standards-council---payment-card-industry-data-security-standard",level:2},{value:"SOC 2 - American Institute of CPAs (AICPA) - Service Organization Control 2",id:"soc-2---american-institute-of-cpas-aicpa---service-organization-control-2",level:2},{value:"Cyscale Security Framework",id:"cyscale-security-framework",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"standards"},"Standards"),(0,i.kt)("h2",{id:"cis-amazon-web-services-aws-foundations-benchmark"},"CIS Amazon Web Services (AWS) Foundations Benchmark"),(0,i.kt)("p",null,"This document provides prescriptive guidance for configuring security options for a subset of Amazon Web Services with an emphasis on foundational, testable, and architecture agnostic settings. Some of the specific Amazon Web Services in scope for this document include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AWS Identity and Access Management (IAM)"),(0,i.kt)("li",{parentName:"ul"},"IAM Access Analyzer"),(0,i.kt)("li",{parentName:"ul"},"AWS Config"),(0,i.kt)("li",{parentName:"ul"},"AWS CloudTrail"),(0,i.kt)("li",{parentName:"ul"},"AWS CloudWatch"),(0,i.kt)("li",{parentName:"ul"},"AWS Simple Notification Service (SNS)"),(0,i.kt)("li",{parentName:"ul"},"AWS Simple Storage Service (S3)"),(0,i.kt)("li",{parentName:"ul"},"Elastic Compute Cloud (EC2)"),(0,i.kt)("li",{parentName:"ul"},"Relational Database Service (RDS)"),(0,i.kt)("li",{parentName:"ul"},"AWS VPC")),(0,i.kt)("p",null,"There are multiple recommendations within each section. Note the use of the term recommendation as opposed to control or requirement. This reinforces the point that CIS is a self-imposed, best-practices standard, as opposed to compulsory or regulated and centralized standards such as the PCI DSS for the payment card industry or HIPAA for covered health care entities."),(0,i.kt)("h2",{id:"cis-google-cloud-platform-gcp-foundation"},"CIS Google Cloud Platform (GCP) Foundation"),(0,i.kt)("p",null,"This security configuration benchmark covers foundational elements of Google Cloud Platform. The recommendations detailed here are important security considerations when designing your infrastructure on Google Cloud Platform. Most of the recommendations provided with this release of the benchmark cover security considerations only at individual Project level and not at the organization level. It covers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identity and Access Management"),(0,i.kt)("li",{parentName:"ul"},"Logging and Monitoring configurations"),(0,i.kt)("li",{parentName:"ul"},"Virtual Networking Security settings"),(0,i.kt)("li",{parentName:"ul"},"Virtual Machine instance settings"),(0,i.kt)("li",{parentName:"ul"},"Storage Security configuration"),(0,i.kt)("li",{parentName:"ul"},"Cloud SQL Database Services settings"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes Engine configuration")),(0,i.kt)("h2",{id:"cis-microsoft-azure-foundations-benchmark"},"CIS Microsoft Azure Foundations Benchmark"),(0,i.kt)("p",null,"This document, CIS Microsoft Azure Foundations Security Benchmark, provides prescriptive guidance for establishing a secure baseline configuration for Microsoft Azure. The scope of this benchmark is to establish the foundation level of security for anyone adopting Microsoft Azure Cloud. The benchmark is, however, not an exhaustive list of all possible security configurations and architecture. You should take the benchmark as a starting point and do the required site-specific tailoring wherever needed and when it is prudent to do so."),(0,i.kt)("h2",{id:"cis-alibaba-aliyun-cloud-foundation-benchmark"},"CIS Alibaba (Aliyun) Cloud Foundation Benchmark"),(0,i.kt)("p",null,"This security configuration benchmark covers foundational elements of Alibaba Cloud. The recommendations detailed here provides prescriptive guidance for configuring security options for a subset of Alibaba Cloud services with an emphasis on foundational, testable, and architecture agnostic settings. Specific Alibaba Cloud Services in scope for this document include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Elastic Compute Service (ECS)"),(0,i.kt)("li",{parentName:"ul"},"Virtual Private Cloud (VPC)"),(0,i.kt)("li",{parentName:"ul"},"Object Storage Service (OSS)"),(0,i.kt)("li",{parentName:"ul"},"Relational Database Service (RDS)"),(0,i.kt)("li",{parentName:"ul"},"Container Service for Kubernetes (ACS)"),(0,i.kt)("li",{parentName:"ul"},"Key Management Service (KMS)"),(0,i.kt)("li",{parentName:"ul"},"Resource Access Management (RAM)"),(0,i.kt)("li",{parentName:"ul"},"ActionTrail"),(0,i.kt)("li",{parentName:"ul"},"Security Center")),(0,i.kt)("h2",{id:"gdpr---general-data-protection-regulation-eu"},"GDPR - General Data Protection Regulation (EU)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GDPR is a law.")," As compared to other Standards that generally offer recommendations, GDPR is a set of controls and ",(0,i.kt)("strong",{parentName:"p"},"requirements")," companies ",(0,i.kt)("strong",{parentName:"p"},"MUST")," meet as covered entities."),(0,i.kt)("p",null,"The General Data Protection Regulation (GDPR) is the toughest privacy and security law in the world. Though it was drafted and passed by the European Union (EU), it imposes obligations onto organizations anywhere, so long as they target or collect data related to people in the EU. The regulation was put into effect on May 25, 2018. The GDPR will levy harsh fines against those who violate its privacy and security standards, with penalties reaching into the tens of millions of euros."),(0,i.kt)("p",null,"Data protection by design and by default is the main principle that drives GDPR's controls and requirements."),(0,i.kt)("h2",{id:"hipaa---health-insurance-portability-and-accountability-act-us"},"HIPAA - Health Insurance Portability and Accountability Act (US)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HIPAA is a federal law.")," As compared to other Standards that generally offer recommendations, HIPAA is a set of controls and ",(0,i.kt)("strong",{parentName:"p"},"requirements")," companies ",(0,i.kt)("strong",{parentName:"p"},"MUST")," meet as covered entities."),(0,i.kt)("p",null,"The Health Insurance Portability and Accountability Act of 1996 (HIPAA) establishes national standards to protect individuals' medical records and other personal health information (PHI) and applies to health plans, health care clearinghouses, and those health care providers that conduct certain health care transactions electronically."),(0,i.kt)("p",null,"In recent years, a very important type of records that are required to be protected under HIPAA regulation is the Electronic protected health information or ePHI, defined in HIPAA as any protected health information (PHI) that is created, stored, transmitted, or received in any electronic format or media, cloud computing included. Although HIPAA has the same confidentiality requirements for all PHI, the ease with which ePHI can be copied and transmitted requires special safeguards to prevent breaches."),(0,i.kt)("p",null,"Under HIPAA, PHI can generally only be used to furnish medical services and process payments. There are also a few special cases when PHI must be disclosed, such as under a court-ordered warrant. Medical information that has been de-identified \u2014 stripped of all identifying information \u2014 is no longer subject to the HIPAA Privacy Rule, and can be used for other purposes, such as case studies."),(0,i.kt)("p",null,"HIPAA is governed by three main rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy Rule"),": how PHI can be used and disclosed;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security Rule"),": describes standards and safeguards required to protect ePHI at rest and in transit;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Breach Notification Rule"),": describes procedures and controls required to notify patients and the proper authorities in case of a PHI/ePHI data breach.")),(0,i.kt)("h2",{id:"iso-27001---international-organization-for-standardization"},"ISO 27001 - International Organization for Standardization"),(0,i.kt)("p",null,"ISO 27001 is the international standard which is recognised globally for managing risks to the security of information you hold. Certification to ISO 27001 allows you to prove to your clients and other stakeholders that you are managing the security of your information. ISO 27001:2013 (the current version of ISO 27001) provides a set of standardised requirements for an Information Security Management System (ISMS). The standard adopts a process based approach for establishing, implementing, operating, monitoring, maintaining, and improving your ISMS."),(0,i.kt)("p",null,"The ISO 27001 standard and ISMS provides a framework for information security management best practice that helps organisations to:"),(0,i.kt)("p",null,"Protect client and employee information\nManage risks to information security effectively\nAchieve compliance with regulations such as the European Union General Data Protection Regulation (EU GDPR)\nProtect the company's brand image"),(0,i.kt)("h2",{id:"nist-800-53---nist-special-publication-800-53"},"NIST 800-53 - NIST Special Publication 800-53"),(0,i.kt)("p",null,"The National Institute of Standards and Technology (NIST) is responsible for developing information security standards and guidelines, including minimum requirements for federal information systems."),(0,i.kt)("p",null,'Cyscale implements the guidance and controls which are part of the 5th revision of the standard, the one that removes the word "federal" to indicate that these regulations may be applied to all organizations, not just federal organizations. This version consists of 20 control families, an increase from 18 in the previous version and more than 1,000 related controls.'),(0,i.kt)("h2",{id:"pci-dss---pci-security-standards-council---payment-card-industry-data-security-standard"},"PCI-DSS - PCI Security Standards Council - Payment Card Industry Data Security Standard"),(0,i.kt)("p",null,"The Payment Card Industry Data Security Standard (PCI DSS) is a set of requirements intended to ensure that all companies that process, store, or transmit credit card information maintain a secure environment. It was launched on September 7, 2006, to manage PCI security standards and improve account security throughout the transaction process."),(0,i.kt)("p",null,"The PCI Standards Council (SSC) is responsible for the development of the standards for PCI compliance. It is an independent body created by Visa, MasterCard, American Express, Discover, and JCB."),(0,i.kt)("h2",{id:"soc-2---american-institute-of-cpas-aicpa---service-organization-control-2"},"SOC 2 - American Institute of CPAs (AICPA) - Service Organization Control 2"),(0,i.kt)("p",null,"SOC stands for Service and Organization Controls. A SOC 2 audit report provides detailed information and assurance about a service organization's security, availability, processing integrity, confidentiality, and/or privacy controls, based on their compliance with the AICPA' TSC (Trust Services Criteria)."),(0,i.kt)("p",null,"Cyscale SOC 2 compliance is a minimal requirement when considering a SaaS provider. Privacy controls should, at a minimum, follow the AICPA's Privacy Management Framework (PMF)."),(0,i.kt)("p",null,"There are two types of SOC audits and reports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type 1"),":\nAn audit and report carried out on a specified date as a single session;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type 2"),":\nAn audit and report carried out over a specified period, usually a minimum of six months.")),(0,i.kt)("p",null,'Developed by the American Institute of Certified Public Accountants (AICPA), SOC 2 defines criteria for managing customer data based on five "trust service principles" (categories):'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Security"),(0,i.kt)("li",{parentName:"ol"},"Availability"),(0,i.kt)("li",{parentName:"ol"},"Processing integrity"),(0,i.kt)("li",{parentName:"ol"},"Confidentiality"),(0,i.kt)("li",{parentName:"ol"},"Privacy")),(0,i.kt)("h2",{id:"cyscale-security-framework"},"Cyscale Security Framework"),(0,i.kt)("p",null,"The Cyscale Security Framework encompasses every piece of security-related knowledge we have gathered. It provides the complete cloud security posture for your assets across all supported services and providers."))}u.isMDXComponent=!0}}]);