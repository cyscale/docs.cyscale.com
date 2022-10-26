---
sidebar_position: 2
---

# Policies

## Asset Management (Inventory)

Information assets shall be handled according to their determined classification, including access controls, labeling, retention policies, and destruction methods, among others.

In general, controls assigned by Data Asset Owners will deal with the confidentiality category of the data. The categories representing Integrity and Availability will be used to guide *Example Inc* to protect against the loss or corruption of the data.

Cyscale uses an asset inventory solution to ensure an updated and accurate software, cloud, physical, and data repositories asset inventory.

***Asset = data/information***

Information assets come in many shapes and forms. Therefore, the following list can only be illustrative. It is generally sensible to group information assets in a logical manner e.g. where they are all related to the same information system or business process.

## Breach Investigation and Notification

A data breach means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data.

This includes breaches that are a result of both accidental and deliberate causes. It also means that a breach is more than just about losing personal data.

A data breach can be broadly defined as a security incident that has affected the confidentiality, integrity, or availability of personal data. In short, there will be a data breach whenever any data is lost, destroyed, corrupted, or disclosed; if someone accesses the data or passes it on without proper authorization; or if the data is made unavailable and this unavailability has a significant negative effect on individuals.

In compliance with the EU General Data Protection Regulation (GDPR), Data Protection Act 1998 (DPA), Health Information Technology for Economic and Clinical Health Act (HITECH), and Health Insurance Portability and Accountability (HIPAA), *Example Inc* have implemented the following policy concerning data breaches.

In the case of any data breach, *Example Inc* must notify all affected direct parties.

## Business Continuity and Disaster Recovery Plan

This policy establishes the guidelines and procedures to recover from a possible disaster. Disasters can be short or may last for a long time, but *Example Inc* is ready for any adversity.

Business continuity and disaster recovery activities are led by the Chief Information Security Officer under the coordination of the Chief Operations Officer.

Scope
1. **Critical**
* production environments with applications that store or process protected or confidential data, tampering its confidentiality, invalidating its integrity, or affecting its availability (see Data Classification).

2. **Non-critical**
* anything which is not marked as critical will receive a lower priority and be recovered only when business operations have been fully restored.

## Change Management

Change is an essential part of the modern business environment and an effective supporting IT organization has to manage the implications of any change that sets it apart from others. Whether the change is proactive to move us forwards or reactive to adapt to incidents, problems, or external events such as new legislation, it will inevitably carry an element of risk with it.

Cyscale automates configuration management using automation (scripts, RPA, bots). Changes to production systems and networks are always logged. *Example Inc* uses Terraform to automatically configure IT systems.

Special care is required for **Production Environments**. All Production changes must be fully tested, have adequate approval, and be fully recoverable with automatic rollbacks in case of failure.

## Data Management

This policy describes the requirements and implemented controls for managing Data.

Any person who creates, uses, stores, or transmits *Example Inc* Data, and called hereafter Data Owner, has the responsibility to maintain and safeguard such Data. The very first step is to determine the level of sensitivity applicable to such Data and classify it. This step is handled by the Data Owner.

According to some regulations, such as the HIPAA Rules, covered entities "must securely back up retrievable exact copies of protected health information" and must be able to fully "restore any loss of data". Furthermore, additional security rules mandate that the backup should be frequent, encrypted, tested, and stored offsite.

Complete backups of both *Example Inc* and *Example Inc*'s customers' Protected and Confidential Data is performed daily and by respecting the ***3-2-1 Backup Rule***: "keep at least three (3) copies of your data, and store two (2) backup copies on different storage media, with one (1) of them located offsite".

## Data Protection

This policy provides procedures and a set of principles regarding the processing and protection of data contained within *Example Inc*'s IT systems, regardless if they are cloud-based or on-premise. *Example Inc* takes data confidentiality, integrity, and availability for employees and customers very seriously.

All Production environments (labeled accordingly) must follow the requirements laid out in this policy.

## Device Management (MDM)

Mobile computing is an increasing part of everyday life. As devices become smaller and more powerful the number of tasks that can be achieved away from the office grows. However, as the capabilities increase so do the risks. Security controls that have evolved to protect the static desktop environment are easily bypassed when using a mobile device outside of the confines of an office building. Disposal of sensitive data shall be carried out under federal and state law.

## Email and External Communications

*Example Inc* IT and communications systems are intended to promote effective communication and working practices within the organization. This policy outlines the standards you must observe when using these systems, the circumstances in which we may monitor your use, and the action we will take in respect of breaches of these standards.

Misuse of IT and communications systems can damage *Example Inc*'s business and reputation. Breach of this policy by any employee may be treated as a disciplinary matter. Breach by a contractor or other third party is likely to lead to the termination of their engagement with *Example Inc*, or financial compensations to be requested.

This policy does not form part of any employee's contract of employment or consultant's agreement and we may amend it at any time.

## Human Resources Security

Our Human Resources Security Policy defines the information to which the policy applies, who has proprietary rights to the information, individual accountability, responsibility for procedures, and outlines specific responsibilities within the organization. As a good practice, *Example Inc* acknowledged that rewarding positive behavior reinforces and encourages repeating it. This practice must be properly transmitted, monitored, and measured for all *Example Inc*, as defined in the scope of this policy.

## Identity and Access Management

This policy is to provide a framework for how user accounts and privileges are created, managed, and deleted.

Access control helps *Example Inc* to implement security best practices concerning logical security, account management, and remote access.

It includes details on how new users are authorized and granted appropriate privileges, as well as how these are reviewed and revoked when necessary. It also includes appropriate controls to prevent users from obtaining unauthorized privileges or access.

## Incident Reporting and Response

*Example Inc* has implemented an incident response process to proactively detect, report, respond to, and notify in case of incidents.

An event is any observable occurrence in a system or network. Events include a user connecting to a file share, a server receiving a request for a web page, a user sending email, and a firewall blocking a connection attempt. Adverse events are events with a negative consequence, such as system crashes, packet floods, unauthorized use of system privileges, unauthorized access to sensitive data, and the execution of malware that destroys data.

A **computer security incident** is an event that violates or creates an imminent threat of violation of computer security policies, acceptable use policies, or standard security practices.

## Information Security Program

*Example Inc* promotes a **Security-First** culture. This is done through proper Policies and Procedures, Training and Awareness Programs, Technical documentation, and Systems Audit.

This document establishes the Information Security Program Policy for *Example Inc*. It helps *Example Inc* address future changes in the information security landscape, including new or amended regulations, and to minimize the risk of damage by preventing security incidents and reducing their potential impact. For the information security policies to provide value they must be approved by management and adopted throughout the organization.

*Example Inc*'s Information Security Program covers:

1. Assist in compliance with regulatory requirements such as GDPR, SOC 2, HIPAA, ISO 27001, etc.;
2. Inventory and protection of all IT assets;
3. Ensure that appropriate measures are taken to protect the confidentiality, integrity, and availability of information entrusted to the organization by its customers, business partners, and stakeholders;
4. Protection of data-at-rest and data-in-transit;
5. Provide management with assurance that the organization is doing what it should concerning information security;
6. Centralized identity and access management;
7. Ensure Secure Software Development Lifecycle;
8. Plan for business continuity, disaster recovery, and emergency response.

## Password Management

*Example Inc* identified that a solid password policy is perhaps the most important security control an organization can employ. Since the responsibility for choosing good passwords falls on the users, a detailed and easy-to-understand policy is essential.

By default, failed login attempts to systems/applications should be monitored and accounts should automatically be locked and require password change after 5 failed attempts.

## Policy Management

This policy outlines the policy management framework for *Example Inc*, to ensure that policy development processes are appropriately governed, consistent and that they support the development of high-quality policies.

The Privacy and Security Officers, as defined by the company, are the ones responsible for the Policy Management. It is their responsibility to properly version and update the policies *Example Inc* adheres to.

## Remote Working

A remote working arrangement is a voluntary agreement between the organization and the employee. It usually involves the employee working from home in a separate area of their living accommodation, whether this is a house, apartment, or another type of domestic residence.

This policy sets out the key information security-related elements that must be considered in agreeing on a teleworking arrangement. It ensures that all of the necessary issues are addressed and that *Example Inc*'s assets are protected.

This policy does not address the human resources aspects of remote working such as health and safety, absence monitoring, job performance, and contractual issues. These will be handled by the HR department and must also be in place before the teleworking arrangement begins.

## Risk Management, Risk Assessment and Risk Analysis

**Software Risk is Business Risk**. It is a future event that may or may not happen but if it does occur it will have consequences for *Example Inc*.

Software engineering projects are risky because of the range of serious potential problems that can arise. The primary benefit of risk management is to contain and mitigate threats to project success. *Example Inc* identifies, plans, and acts when a risk arises—drawing upon the experience and knowledge of the entire team to minimize the impact on the project.

Risk is generally caused due to a lack of information, control, or time. A possibility of suffering from loss in the software development process is called a software risk. Loss can be:

* Financial
* Reputation for *Example Inc*
* Increase in production cost
* Development of poor quality software
* Not being able to complete the project on time

## Secure Software Development Lifecycle (SDLC)

All of *Example Inc*'s software is developed using the Agile or Continuous Integration / Continuous Delivery (CI/CD) methodology.

A Software Development Lifecycle (SDLC) policy helps your company by ensuring that software goes through a testing process, is built as securely as possible, and that all development work is compliant as it relates to any regulatory guidelines and business needs.

A **Secure** SDLC involves integrating security testing and other activities into an existing development process.

At *Example Inc*, we foster industry-standard secure coding practices, and all software products *Example Inc* produces must be ***Secure by Design*** and ***Secure by Default***.

## Security Architecture and Design

This policy is to present system-level security principles to be considered in the design, development, and operation of an information system, especially in the cloud-first era. This should constantly be in the company's mindset and especially in the management board to ensure maximum security is achieved in business operations, product development, and customer care.

Most of *Example Inc*'s Security Architecture and Design model is derived from the OWASP-maintained Software Assurance Maturity Model (SAMM).

## Security Training and Awareness

*Example Inc* promotes a **Security-First** culture. To support this culture, the company is committed to providing financial and moral support for employees in the processes of:

* acquiring certifications (cloud competencies, security certifications, etc.);
* being trained in skills they are missing or are needed to perform their job functions;
receiving proper education about *Example Inc* policies and procedures;
* raising security awareness for both the individual and the entire company.

*Example Inc* has named the following responsibles:

* Chief Information Security Officer - in charge of HITRUST, HIPAA, ISO 27001, PCI-DSS;
* Chief Data Protection Officer - in charge of ISO 27001, HIPAA;
* Chief Privacy Officer - in charge of GDPR, CCPA, HIPAA;

For managing training and security awareness programs for employees, *Example Inc* is using a SaaS-based solution offered by Mimecast. This tool offers traceable progress, phishing tests, and helps *Example Inc* to predict employee security risks.

## Software Policy

*Example Inc* uses many types of computer software to perform its business operations and always relies upon the correct functioning and security of that software. It is imperative therefore that steps are taken to ensure that only approved software is used within the organization and that no classified information is put at risk.

This policy sets out how the software will be acquired, registered, installed, and developed within *Example Inc*.

This control applies to all systems, people, and processes that constitute the organization's information systems, including board members, directors, employees, suppliers, and other 3rd Parties who have access to *Example Inc* systems.

## Software Release and Deployment Management

*Example Inc* uses a CMS to track change requests. A project is used to manage changes and approvals. All of the *Example Inc* cloud infrastructures are maintained as code IaC (Terraform/Cloudformation/Python).

For *Example Inc* to release working software to Production environments, Application Release Automation (ARA) tools are used to automate the deployment of applications to these environments.

## Systems Audit

Audit requirements, controls, effective security safeguards, and activities involving verification of operational systems shall be carefully planned and agreed upon, in order to minimize disruptions to business processes.

Purpose
Regular operational, process and security audits help to ensure that proper controls are sufficient and effective at providing information confidentiality, safeguarding data, ensuring system availability, and fostering a higher degree of data integrity.

*Example Inc*'s reason for performing security systems audits is to protect against:

* Security violations;
* Network vulnerabilities and intrusions;
* Unauthorized access to Protected or Confidential data;
* Data Loss of Protected or Confidential data;
* Performance problems and flaws in systems and applications;
* Outdated or vulnerable software.

## Third Party Vendors and Due Diligence

Due care must be taken to ensure that the policies of *Example Inc* are enforced and monitored where possible. Since access to most assets happens via the cloud provider's infrastructure, risks related to compliance is mitigated to an acceptable level by the Cloud Service Provider. *Example Inc* also brings significant effort to assure that all 3rd Party organizations that are working with us are compliant and do not compromise the integrity, security, and privacy of *Example Inc*'s company, employees, customers, and even of other vendors.

## Threat Management Policy

**Intrusion Detection** is the process of monitoring the events occurring in a computer system or network and analyzing them for signs of possible incidents, which are violations or imminent threats of violation of computer security policies, acceptable use policies, or standard security practices.

**Intrusion Prevention** is the process of attempting to stop detected (usually by the intrusion detection system) possible incidents.

IDPS have become a necessary addition to the security infrastructure of nearly every organization.

## Vulnerability Management

**Vulnerability**: a weakness or system flaw that renders the system open for attack thus reducing its information security assurance. A vulnerability can be found in proprietary developed software, open-source software, system, or process.

This policy details the vulnerability management procedures and guidelines required to maintain a high level of system and application security in a diverse IT and Cloud environment. It outlines a comprehensive and integrated program to detect and remediate vulnerabilities in operating systems, applications, source code, open-source software, mobile devices, cloud resources, and network devices.
