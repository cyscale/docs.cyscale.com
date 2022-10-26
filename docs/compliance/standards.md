---
sidebar_position: 1
---

# Standards
## CIS Amazon Web Services (AWS) Foundations Benchmark

This document provides prescriptive guidance for configuring security options for a subset of Amazon Web Services with an emphasis on foundational, testable, and architecture agnostic settings. Some of the specific Amazon Web Services in scope for this document include:

* AWS Identity and Access Management (IAM)
* IAM Access Analyzer
* AWS Config
* AWS CloudTrail
* AWS CloudWatch
* AWS Simple Notification Service (SNS)
* AWS Simple Storage Service (S3)
* Elastic Compute Cloud (EC2)
* Relational Database Service (RDS)
* AWS VPC

There are multiple recommendations within each section. Note the use of the term recommendation as opposed to control or requirement. This reinforces the point that CIS is a self-imposed, best-practices standard, as opposed to compulsory or regulated and centralized standards such as the PCI DSS for the payment card industry or HIPAA for covered health care entities.

## CIS Google Cloud Platform (GCP) Foundation

This security configuration benchmark covers foundational elements of Google Cloud Platform. The recommendations detailed here are important security considerations when designing your infrastructure on Google Cloud Platform. Most of the recommendations provided with this release of the benchmark cover security considerations only at individual Project level and not at the organization level. It covers:

* Identity and Access Management
* Logging and Monitoring configurations
* Virtual Networking Security settings
* Virtual Machine instance settings
* Storage Security configuration
* Cloud SQL Database Services settings
* Kubernetes Engine configuration

## CIS Microsoft Azure Foundations Benchmark

This document, CIS Microsoft Azure Foundations Security Benchmark, provides prescriptive guidance for establishing a secure baseline configuration for Microsoft Azure. The scope of this benchmark is to establish the foundation level of security for anyone adopting Microsoft Azure Cloud. The benchmark is, however, not an exhaustive list of all possible security configurations and architecture. You should take the benchmark as a starting point and do the required site-specific tailoring wherever needed and when it is prudent to do so.

## CIS Alibaba (Aliyun) Cloud Foundation Benchmark

This security configuration benchmark covers foundational elements of Alibaba Cloud. The recommendations detailed here provides prescriptive guidance for configuring security options for a subset of Alibaba Cloud services with an emphasis on foundational, testable, and architecture agnostic settings. Specific Alibaba Cloud Services in scope for this document include:

* Elastic Compute Service (ECS)
* Virtual Private Cloud (VPC)
* Object Storage Service (OSS)
* Relational Database Service (RDS)
* Container Service for Kubernetes (ACS)
* Key Management Service (KMS)
* Resource Access Management (RAM)
* ActionTrail
* Security Center

## GDPR - General Data Protection Regulation (EU)

**GDPR is a law.** As compared to other Standards that generally offer recommendations, GDPR is a set of controls and **requirements** companies **MUST** meet as covered entities.

The General Data Protection Regulation (GDPR) is the toughest privacy and security law in the world. Though it was drafted and passed by the European Union (EU), it imposes obligations onto organizations anywhere, so long as they target or collect data related to people in the EU. The regulation was put into effect on May 25, 2018. The GDPR will levy harsh fines against those who violate its privacy and security standards, with penalties reaching into the tens of millions of euros.

Data protection by design and by default is the main principle that drives GDPR's controls and requirements.

## HIPAA - Health Insurance Portability and Accountability Act (US)

**HIPAA is a federal law.** As compared to other Standards that generally offer recommendations, HIPAA is a set of controls and **requirements** companies **MUST** meet as covered entities.

The Health Insurance Portability and Accountability Act of 1996 (HIPAA) establishes national standards to protect individuals' medical records and other personal health information (PHI) and applies to health plans, health care clearinghouses, and those health care providers that conduct certain health care transactions electronically.

In recent years, a very important type of records that are required to be protected under HIPAA regulation is the Electronic protected health information or ePHI, defined in HIPAA as any protected health information (PHI) that is created, stored, transmitted, or received in any electronic format or media, cloud computing included. Although HIPAA has the same confidentiality requirements for all PHI, the ease with which ePHI can be copied and transmitted requires special safeguards to prevent breaches.

Under HIPAA, PHI can generally only be used to furnish medical services and process payments. There are also a few special cases when PHI must be disclosed, such as under a court-ordered warrant. Medical information that has been de-identified — stripped of all identifying information — is no longer subject to the HIPAA Privacy Rule, and can be used for other purposes, such as case studies.

HIPAA is governed by three main rules:

* **Privacy Rule**: how PHI can be used and disclosed;
* **Security Rule**: describes standards and safeguards required to protect ePHI at rest and in transit;
* **Breach Notification Rule**: describes procedures and controls required to notify patients and the proper authorities in case of a PHI/ePHI data breach.

## ISO 27001 - International Organization for Standardization

ISO 27001 is the international standard which is recognised globally for managing risks to the security of information you hold. Certification to ISO 27001 allows you to prove to your clients and other stakeholders that you are managing the security of your information. ISO 27001:2013 (the current version of ISO 27001) provides a set of standardised requirements for an Information Security Management System (ISMS). The standard adopts a process based approach for establishing, implementing, operating, monitoring, maintaining, and improving your ISMS.

The ISO 27001 standard and ISMS provides a framework for information security management best practice that helps organisations to:

Protect client and employee information
Manage risks to information security effectively
Achieve compliance with regulations such as the European Union General Data Protection Regulation (EU GDPR)
Protect the company's brand image

## NIST 800-53 - NIST Special Publication 800-53

The National Institute of Standards and Technology (NIST) is responsible for developing information security standards and guidelines, including minimum requirements for federal information systems.

Cyscale implements the guidance and controls which are part of the 5th revision of the standard, the one that removes the word "federal" to indicate that these regulations may be applied to all organizations, not just federal organizations. This version consists of 20 control families, an increase from 18 in the previous version and more than 1,000 related controls.

## PCI-DSS - PCI Security Standards Council - Payment Card Industry Data Security Standard

The Payment Card Industry Data Security Standard (PCI DSS) is a set of requirements intended to ensure that all companies that process, store, or transmit credit card information maintain a secure environment. It was launched on September 7, 2006, to manage PCI security standards and improve account security throughout the transaction process.

The PCI Standards Council (SSC) is responsible for the development of the standards for PCI compliance. It is an independent body created by Visa, MasterCard, American Express, Discover, and JCB.

## SOC 2 - American Institute of CPAs (AICPA) - Service Organization Control 2

SOC stands for Service and Organization Controls. A SOC 2 audit report provides detailed information and assurance about a service organization's security, availability, processing integrity, confidentiality, and/or privacy controls, based on their compliance with the AICPA' TSC (Trust Services Criteria).

Cyscale SOC 2 compliance is a minimal requirement when considering a SaaS provider. Privacy controls should, at a minimum, follow the AICPA's Privacy Management Framework (PMF).

There are two types of SOC audits and reports:

* **Type 1**:
An audit and report carried out on a specified date as a single session;
* **Type 2**:
An audit and report carried out over a specified period, usually a minimum of six months.

Developed by the American Institute of Certified Public Accountants (AICPA), SOC 2 defines criteria for managing customer data based on five "trust service principles" (categories):

1. Security
2. Availability
3. Processing integrity
4. Confidentiality
5. Privacy

## Cyscale Security Framework

The Cyscale Security Framework encompasses every piece of security-related knowledge we have gathered. It provides the complete cloud security posture for your assets across all supported services and providers.
