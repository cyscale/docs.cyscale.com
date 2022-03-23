---
sidebar_position: 1
---

# Amazon Web Services

Cyscale enables you to keep track and secure your AWS infrastructure natively. You connect your AWS account(s) by creating an [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) which Cyscale can assume to read your AWS resources.

## Connecting Your AWS Account(s)

Once you are ready to connect your AWS account and have the required permissions, press the **Create** button from the top-right corner, select **Add Cloud Account**, and choose **AWS**. You will be greeted with a simple multi-step process.

### Step 1

In the first step you provide a **name** for your AWS account to be used throughout Cyscale. This is a plain-text identifier that helps you better manage your resources.

You also provide the **external ID**. The field is pre-populated by default and there is no real reason to change it other than if you want to use an already existing role. This is a native feature of AWS roles which helps the involved parties establish a more secure connection (see the [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) for more).

### Step 2

In the second step you create the AWS role. Cyscale gives you multiple ways to achieve this in order to adhere to your already existing processes.

#### CloudFormation (Default)

The most straight-forward way to create the required AWS role is by using CloudFormation, the native infrastructure as code service from AWS.

:::info Infrastructure as Code Benefits
Besides being simple to use, just like the Terraform option, it provides a great way to manage the lifecycle of the created resources (role, policy). For example, if you decide to remove the connection to your AWS account, you simply delete the CloudFormation stack and all the related resources will be deleted automatically.
:::

Cyscale comes with a ready-to-use CloudFormation template which you can view either inline (see the image below) or you can download the actual template from [here](https://cyscale-onboarding.s3.amazonaws.com/aws/cyscale_aws_cloudformation_read-only.template) (this is the source of the CloudFormation stack).

![CloudFormation Template](/img/aws-cf-template.png)

When you click on **Create AWS Stack**, a new browser window will open with the CloudFormation stack ready to be created. You might have to authenticate into the AWS console.

![AWS CloudFormation Stack](/img/aws-cf-create-stack.png)

Review the name and the parameters of the stack, check the _I acknowledge that AWS CloudFormation might create IAM resources with custom names._ checkbox, and press **Create stack**. Your AWS resources should be ready within a few minutes (state `CREATE_COMPLETE`). From the **outputs** tab, copy the ARN and paste it in the _Role ARN from Output_ field in Cyscale, as displayed below.

![AWS Role ARN from CloudFormation](/img/aws-cf-role-arn.png)

#### Terraform

Another option based on infrastructure as code is to use Terraform. If your current workflow leverages Terraform, you might want to choose this approach.

Cyscale generates a ready-to-use Terraform configuration file which you download and run using the [Terraform CLI](https://www.terraform.io/cli). Inspect the file and, once you are ready, run `terraform init` and `terraform apply -auto-approve`.

:::info Authentication and Authorization
Terraform uses the provider's APIs/SDKs to manage the resources - IAM role and policy in this case. The Terraform AWS provider can be configured in several ways which you can find [here](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration).

Perhaps the simplest option is to let the provider use the credentials stored by the AWS CLI. If you have multiple AWS CLI profiles, you can set the environment variable `AWS_PROFILE` with the profile corresponding to the AWS account you want to connect to Cyscale.
:::

#### Manual

If you prefer setting up the resources manually from the AWS management console, follow the steps described in the application.

:::info Access Security
While the permissions you grant to Cyscale are limited to **reading** the configuration of your cloud resources, you might still be concerned about the security of your AWS account. Setting the trust relationship with the Cyscale AWS account means that any entity from the Cyscale AWS account with the privilege to assume the role from your account and that has access to the external ID you provided can read your AWS infrastructure.

The Cyscale AWS account (789815788242) follows all the best practices and is continuously secured by Cyscale itself. Furthermore, the external ID is encrypted and stored in a database accessible only by certain services from within the Cyscale infrastructure. No member of the Cyscale team has access to the external ID.
:::

### Step 3

In the third step you can select which AWS regions should be covered by Cyscale. By default, all regions are selected. In most cases you will want to choose the regions in which you have some resources deployed. You can change this after.

:::tip Default Resources
All AWS regions have some resources deployed by default such as the default VPC, default subnets (one for each AZ) and the default security group. These resources count towards the quota of your plan.
:::

:::info Global Resources
Certain resources such as IAM resources (users, groups, roles, policies, etc.) do not belong to a certain region. These are classified by Cyscale as **global assets**.
:::

### Step 4

In step four, the system makes sure the connection to your cloud account can be established and starts the first sync in the background. You can navigate to the cloud account overview page. The page will automatically refresh when the sync and assessment is completed.

## Deep Dive on Permissions

Since Cyscale connects to your AWS account(s) by assuming the role you create, all permissions are controlled through the policies that are attached to the role.

In order to benefit from everything Cyscale has and will have to offer, two policies should be attached:

- **SecurityAudit** - This is an AWS-managed policy granting read access to most AWS services. You can read more about it in the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html#jf_security-auditor) and in the [AWS console](https://console.aws.amazon.com/iam/home#/policies/arn:aws:iam::aws:policy/SecurityAudit).

- **Custom Policy** - An additional custom policy granting permissions for certain actions/services that are not covered by the Security Audit policy such as `ListTagsForResource` for EFS and `List*` actions for S3.

:::info Data Access
It is important to make the distinction between infrastructure/configuration access and data access. Since Cyscale focuses currently on infrastructure, **these policies do not grant permissions to your data**. For example, Cyscale can read the configuration of your S3 buckets and objects, but not their actual content - i.e. there is no `GetObject` permission.

One area you might want to pay attention to is **logging**. Cyscale will have access to your logs from Amazon CloudWatch. While Cyscale does not process the content of the logs in any way, it is still important to not leak any sensitive information in logs.
:::

## Managing Your Connected AWS Account(s)

Once connected, your AWS account(s) will show up in the [Cloud Accounts](https://app.cyscale.com/#/cloud-accounts) list. From there, you can either use the inline actions or navigate to the overview page of the cloud account. The available options are:

### Configure

You can update the following information for your AWS cloud accounts:

- **Name** - this helps you better identify the cloud account throughout the Cyscale platform
- **Role ARN** - in case you want Cyscale to use another role
- **External ID** - if you change the IAM Role you might also have to provide another external ID
- **Regions** - from the dedicated tab, you can update which AWS regions Cyscale should cover. This change will be visible after the next sync, which starts automatically after you save. If you remove a region, all assets from that region will be removed from Cyscale.

### Disable/Enable

By default, all cloud accounts are enabled. If you want to prevent Cyscale from syncing and assessing your assets for a certain cloud account, you can disable that account. The state of cloud account in Cyscale will be locked until you enable it again. The assets will not be updated based on your actual cloud infrastructure and assessments will not be performed for them.

### Sync

You can always trigger a new sync and assessment manually for a given cloud account (unless the sync is already in progress). This will make Cyscale read your entire cloud infrastructure for that particular account, evaluate the applicable controls, and generate the corresponding alerts (if any).
