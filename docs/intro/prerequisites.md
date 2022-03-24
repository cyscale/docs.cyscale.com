---
sidebar_position: 3
---

# Prerequisites

This page describes what you need to fully leverage Cyscale Cloud Platform.

## Public Cloud

Cyscale is designed to work with systems running on public clouds. We currently support Amazon Web Services, Microsoft Azure, Google Cloud Platform, and Alibaba Cloud. Additionally, each one of these providers offers a large suite of services so make sure to consult the Service Coverage page to determine whether your infrastructure is sufficiently covered.

You should consider Cyscale when you have a medium to large, frequently changing infrastructure deployed in the cloud or if you are migrating your on-premises infrastructure to the cloud.

## Permissions

Since Cyscale leverages the SDKs/APIs of the cloud providers to inspect your infrastructure, you must grant read-only access. To achieve this, you must have enough privileges to create the required IAM entities.

### AWS

For AWS, Cyscale connects by assuming an IAM role. You must have enough privileges to create this role and attached policies and, optionally and preferably, to deploy the CloudFormation stack or Terraform script.

If you encounter difficulties while creating the required IAM role and policies, contact your AWS administrator and consult the [AWS documentation on permission boundaries](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html).

### Azure

For Azure, Cyscale connects through an Azure Active Directory application. You must have enough privileges to create the application together with the corresponding service principal, and role definition and assignment with your subscription(s) as scope(s).

For more information, you can consult the [Azure documentation on registering an application](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#permissions-required-for-registering-an-app).

### GCP

For Google Cloud, Cyscale connects through a service account with read permissions at the project level. You must have enough privileges to create the service account and to enable the required APIs (Compute Engine, Resource Manager, KMS, Cloud Logging, Cloud Monitoring, Kubernetes Engine, Cloud DNS, Cloud SQL, BigQuery, Cloud Storage).

For more information, you can consult the [Google Cloud documentation on creating service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts).

### Alibaba

For Alibaba Cloud, Cyscale connects through a RAM role. You must have enough permissions to create the required role with read only permissions.
