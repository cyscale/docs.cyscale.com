---
sidebar_position: 2
---

# Dictionary

This page is a compilation of the most relevant terms encountered in the cloud security area in general and in the Cyscale Cloud Platform in particular.

### CSPM

CSPM is actually a market segment defined by Gartner, but it commonly refers to the products that are part of this segment. Basically, a CSPM helps you identify cloud misconfigurations and stay compliant with industry standards, potentially across multiple cloud providers. It’s the kind of tool that would tell you which S3 buckets are publicly accessible and with which sections of CIS and ISO 27001 your system is not compliant because of that.

### Asset

An asset refers to any resource your organization might have such as an AWS EC2 instance or an Azure Active Directory user.

:::info
A cloud resource might contain multiple assets. For example, an EC2 instance, besides the actual instance (which is just some memory and vCPU), also comes with one or more EBS volumes, one or more ENIs, a security group, maybe an Elastic IP address, and others.
:::

### Sync

The sync represents the process of synchronizing your actual cloud resources with the Cyscale database. You can read more about it on the [Getting Started page](../getting-started.md#syncassessment).

### Control

A control is a rule describing a best practice or requirement. For example, ISO 27001 comes with Annex A which is basically a table of controls, each telling you what to check for. Within Cyscale, a control is a rule such as “Ensure S3 bucket MFA Delete is enabled”. Besides the name, each Cyscale control also comes with a description (what the control is and why it’s important), remediation steps, and severity (low, medium, high).

### Policy

A policy is generally a document defining how to secure certain aspects within an organization. For example, you might have a policy describing how your organization handles identity and access management. A policy within Cyscale represents an entity that, besides content such as text and images, might also contain controls. Cyscale enables you to specify how certain policy sections are actually implemented by mapping controls to them through procedures.

### Procedure

Procedures describe how to achieve something. Your organization might have a procedure specifying how to onboard a new employee. Within Cyscale, a procedure is basically a group of controls described by a title and a body.

### Alerts

Alerts are commonly triggered when certain thresholds are crossed. In the context of Cyscale (and CSPM in general), alerts represent identified vulnerabilities and misconfigurations. Basically it’s the resulting entity after an asset is verified against a control and fails to pass it.

### Cloud accounts

Cloud accounts are the Cyscale entities representing your actual cloud accounts. If you want to assess and protect an AWS account, Azure subscription, GCP project, or Alibaba account, you add it to Cyscale by creating the corresponding cloud account.
