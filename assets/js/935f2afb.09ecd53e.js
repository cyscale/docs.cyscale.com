"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Intro","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/","docId":"intro/overview","unlisted":false},{"type":"link","label":"Dictionary","href":"/intro/dictionary","docId":"intro/dictionary","unlisted":false},{"type":"link","label":"Prerequisites","href":"/intro/prerequisites","docId":"intro/prerequisites","unlisted":false}]},{"type":"link","label":"Getting Started","href":"/getting-started","docId":"getting-started","unlisted":false},{"type":"category","label":"General","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Scopes","href":"/general/scopes","docId":"general/scopes","unlisted":false},{"type":"link","label":"Users","href":"/general/users","docId":"general/users","unlisted":false},{"type":"link","label":"Account Deletion","href":"/general/account-deletion","docId":"general/account-deletion","unlisted":false},{"type":"link","label":"Notifications","href":"/general/notifications","docId":"general/notifications","unlisted":false},{"type":"link","label":"Billing & Usage","href":"/general/billing","docId":"general/billing","unlisted":false}]},{"type":"category","label":"Connectors","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Amazon Web Services","href":"/connectors/aws","docId":"connectors/aws","unlisted":false},{"type":"link","label":"Azure","href":"/connectors/azure","docId":"connectors/azure","unlisted":false},{"type":"link","label":"Google Cloud","href":"/connectors/gcp","docId":"connectors/gcp","unlisted":false},{"type":"link","label":"Alibaba Cloud","href":"/connectors/alibaba","docId":"connectors/alibaba","unlisted":false},{"type":"link","label":"Kubernetes","href":"/connectors/kubernetes","docId":"connectors/kubernetes","unlisted":false},{"type":"link","label":"Okta","href":"/connectors/okta","docId":"connectors/okta","unlisted":false},{"type":"link","label":"Entra ID","href":"/connectors/entra","docId":"connectors/entra","unlisted":false}]},{"type":"category","label":"Visibility","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Inventory","href":"/visibility/inventory","docId":"visibility/inventory","unlisted":false}]},{"type":"category","label":"Security","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Alerts","href":"/security/alerts","docId":"security/alerts","unlisted":false},{"type":"link","label":"Exemptions","href":"/security/exemptions","docId":"security/exemptions","unlisted":false},{"type":"link","label":"Security Score","href":"/security/security-score","docId":"security/security-score","unlisted":false}]},{"type":"category","label":"Compliance","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Standards","href":"/compliance/standards","docId":"compliance/standards","unlisted":false},{"type":"link","label":"Policies","href":"/compliance/policies","docId":"compliance/policies","unlisted":false}]},{"type":"category","label":"Third-Party Licenses","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"MITRE ATT&CK\xae","href":"/licenses/mitre","docId":"licenses/mitre","unlisted":false}]}]},"docs":{"compliance/policies":{"id":"compliance/policies","title":"Policies","description":"Asset Management (Inventory)","sidebar":"tutorialSidebar"},"compliance/standards":{"id":"compliance/standards","title":"Standards","description":"CIS Amazon Web Services (AWS) Foundations Benchmark","sidebar":"tutorialSidebar"},"connectors/alibaba":{"id":"connectors/alibaba","title":"Alibaba Cloud","description":"Cyscale enables you to keep track and secure your Alibaba Cloud (Aliyun) infrastructure natively. You connect your Aliyun account(s) by creating a RAM role that Cyscale can assume to read your Aliyun resources.","sidebar":"tutorialSidebar"},"connectors/aws":{"id":"connectors/aws","title":"Amazon Web Services","description":"Cyscale enables you to keep track and secure your AWS infrastructure natively. You connect your AWS account(s) by creating an IAM role which Cyscale can assume to read your AWS resources.","sidebar":"tutorialSidebar"},"connectors/azure":{"id":"connectors/azure","title":"Azure","description":"Cyscale enables you to keep track and secure your Azure infrastructure natively. You connect your Azure subscription(s) by registering an AAD service principal which Cyscale uses to read your Azure resources.","sidebar":"tutorialSidebar"},"connectors/entra":{"id":"connectors/entra","title":"Entra ID","description":"Cyscale enables you to keep track of Entra entities (users, groups, devices, etc.) and what they have access to, such as Azure resources and even resources from other cloud providers if you are using Entra ID as an IdP for your SSO setup. You connect Cyscale to your Entra ID tenant through an app registration.","sidebar":"tutorialSidebar"},"connectors/gcp":{"id":"connectors/gcp","title":"Google Cloud","description":"Cyscale enables you to keep track and secure your Google Cloud infrastructure natively. You connect your Google Cloud project(s) by creating an IAM service account that Cyscale impersonates to read your Google Cloud resources.","sidebar":"tutorialSidebar"},"connectors/kubernetes":{"id":"connectors/kubernetes","title":"Kubernetes","description":"Cyscale enables you to keep track of and secure your Kubernetes resources natively. You connect your Kubernetes clusters by deploying the Cyscale agent. The agent, at its core, is a Kubernetes controller that listens to changes in your cluster, aggregates them, and sends them to Cyscale.","sidebar":"tutorialSidebar"},"connectors/okta":{"id":"connectors/okta","title":"Okta","description":"Cyscale enables you to keep track and secure your Okta identities. You connect your Okta organization(s) by creating an API Token that Cyscale uses to read your Okta resources.","sidebar":"tutorialSidebar"},"general/account-deletion":{"id":"general/account-deletion","title":"Account Deletion","description":"In the event you want Cyscale to forget everything about you, you have two options:","sidebar":"tutorialSidebar"},"general/billing":{"id":"general/billing","title":"Billing & Usage","description":"While Cyscale is committed to offering a generous free plan and trial version, in case you want continuous support and greater quotas, you will need a paid plan.","sidebar":"tutorialSidebar"},"general/notifications":{"id":"general/notifications","title":"Notifications","description":"An important part of maintaining a good security posture is represented by notifications. Cyscale gives you two notification flavors, personal and via configured notification channels.","sidebar":"tutorialSidebar"},"general/scopes":{"id":"general/scopes","title":"Scopes","description":"The scopes feature allows you to change what Cyscale displays throughout the platform. It helps you cover scenarios such as:","sidebar":"tutorialSidebar"},"general/users":{"id":"general/users","title":"Users","description":"Cyscale is based on two entities: users and accounts. When you register, you create a new Cyscale account with one user - yourself.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Sign Up","sidebar":"tutorialSidebar"},"intro/dictionary":{"id":"intro/dictionary","title":"Dictionary","description":"This page is a compilation of the most relevant terms encountered in the cloud security area in general and in the Cyscale Cloud Platform in particular.","sidebar":"tutorialSidebar"},"intro/overview":{"id":"intro/overview","title":"Overview","description":"Welcome to the Cyscale documentation website. Here you can find out more about what the Cyscale Cloud Platform is, how it works, and when to use it.","sidebar":"tutorialSidebar"},"intro/prerequisites":{"id":"intro/prerequisites","title":"Prerequisites","description":"This page describes what you need to fully leverage Cyscale Cloud Platform.","sidebar":"tutorialSidebar"},"licenses/mitre":{"id":"licenses/mitre","title":"MITRE ATT&CK\xae","description":"LICENSE","sidebar":"tutorialSidebar"},"security/alerts":{"id":"security/alerts","title":"Alerts","description":"An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks.","sidebar":"tutorialSidebar"},"security/exemptions":{"id":"security/exemptions","title":"Exemptions","description":"Exemptions enable you to exclude a specific asset from being assessed against a specific control. Cyscale will consider the asset as passing that specific control.","sidebar":"tutorialSidebar"},"security/security-score":{"id":"security/security-score","title":"Security Score","description":"The security score per asset is a metric that indicates the security impact of an asset. It is calculated based on the controls that are relevant for that asset and any assets that are impacted by the failure. The asset score is a number between 0 and 100, where 0 means that the asset has a high impact on your security posture and 100 means the asset is compliant with all the controls that check it.","sidebar":"tutorialSidebar"},"visibility/inventory":{"id":"visibility/inventory","title":"Inventory","description":"Once at least one Connector is onboarded, Cyscale will periodically sync it. This will result in an extensive Inventory page that includes all the assets that Cyscale supports. You can check for supported assets on the Connectors page.","sidebar":"tutorialSidebar"}}}')}}]);