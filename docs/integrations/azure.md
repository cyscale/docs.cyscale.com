---
sidebar_position: 2
---

# Azure

Cyscale enables you to keep track and secure your Azure infrastructure natively. You connect your Azure subscription(s) by registering an [AAD service principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) which Cyscale uses to read your Azure resources.

## Connecting Your Azure Subscription(s)

Once you are ready to connect your Azure subscription(s) and have the required permissions, press the **Create** button from the top-right corner, select **Add Cloud Account**, and choose **Azure**. You will be greeted with a simple multi-step process.

### Step 1

In the first step you provide the ID of your Azure Active Directory tenant. You can find your tenant ID using the Azure Portal [here](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview).

You have two options for choosing which Azure subscriptions to connect:

1. **Connect all subscriptions for the given AAD tenant** (default). Resources from all Azure subscriptions which you are authorized to access (you have the **Owner** role or the classic roles Service Administrator and Co-Administrator) will be imported. You can see a list of the subscriptions in the [Azure Portal](https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade) (check the My role column). Cyscale will automatically use the subscription name to identify the subscription throughout Cyscale (as the connector name). **Each subscription will be represented as a separate Cyscale cloud account**.

2. **Specify a certain subscription**. If you uncheck Onboard all Subscriptions for this Tenant (uncheck for a single Subscription), Cyscale will allow you to specify the ID of a certain Azure subscription (under the given tenant) and give it a name to be used throughout the Cyscale platform.

### Step 2

In the second step you create the AAD application, the service principal, and the custom role to grant access for Cyscale to your infrastructure.

### Step 3

In step four, Cyscale makes sure the connection to your cloud account can be established and starts the first sync in the background. You can navigate to the cloud account overview page. The page will automatically refresh when the sync and assessment is completed.

#### Terraform (Default)

Based on the information you provided in the first step, Cyscale generates a ready-to-use Terraform configuration file. You download this file and, using the [Terraform CLI](https://www.terraform.io/cli) either from your machine or using [Azure Cloud Shell](https://docs.microsoft.com/en-us/azure/cloud-shell/overview) (click [here](https://shell.azure.com/) to directly open the shell), you provision the required Azure resources.

:::info Authentication and Authorization
Terraform uses the provider's APIs/SDKs to manage the resource. Cyscale makes use of two Azure providers, `hashicorp/azuread` for creating the AAD application and service principal, and `hashicorp/azurerm` for reading the subscriptions and creating/assigning the custom role. You can read more about the available authentication options [here](https://registry.terraform.io/providers/hashicorp/azuread/latest/docs#authenticating-to-azure-active-directory) and [here](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure).

Perhaps the simplest option is to let the provider use the credentials stored by the Azure CLI (`az`). If you have multiple tenants/subscriptions configured for your CLI, you can switch between them using the command `az account set --subscription="SUBSCRIPTION_ID"`.
:::

Inspect the Terraform configuration file and run `terraform init` and `terraform apply -auto-approve`. Terraform creates the resources and outputs the credentials. Since the service principal secret is sensitive information, you have to output the credentials in a file using the command `terraform output -json > azure-key.json` (the name of the file is not important). Upload this file to Cyscale. You will see something like

![Azure Key Uploaded to Cyscale](/img/azure-key.png)

Grant admin consent to the created AAD application (Cyscale provides you with the link to the API permissions page of the app) and proceed to the next step. If you do not grant admin consent, Cyscale will not sync AAD users, groups, and applications.

:::info Infrastructure as Code
Besides being simple to use, it provides a great way to manage the lifecycle of the created resources (AAD application, service principal, custom role). For example, if you decide to remove the connection to your Azure subscription, you simply run `terraform destroy` to delete all Cyscale-related resources from your subscription.
:::

#### Manual

If you prefer setting up the resources manually from the Azure portal, follow the steps described in the application. The manual option is available only when onboarding a specific azure subscription (i.e. uncheck the Onboard all subscriptions checkbox).

:::info Access Security
While the permissions you grant to Cyscale are limited to **reading the configuration of your cloud resources**, you might still be concerned about the security of your Azure tenant. Providing the service principal credentials to Cyscale means that any entity with access to these credentials can read your Azure resources.

Cyscale encrypts and stores the credentials in a database accessible only from within the Cyscale infrastructure. Then, a specialized microservice decrypts and uses the credentials to sync your Azure assets. No member of the Cyscale team has access to your credentials.
:::

## Deep Dive on Permissions

### Roles

The permissions Cyscale has with regards to your Azure infrastructure are dictated by the roles you assign to the Cyscale AAD application.

In order to benefit from everything Cyscale has to offer, the following roles are needed:

- **Reader** - This is a built-in role which allows **read** access to all (infrastructure) resources. You can read more about the Reader role in the [Azure documentation](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) or on the Access Control (IAM) page of your subscription (see the [Azure documentation](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions-list) for the exact steps).

- **Custom Role** - Reading certain settings such as security settings for web apps are not covered by the reader role. More precisely, this role allows Cyscale to:
  - Get Network Security Groups configured on the network interface of the VM
  - View the configured and effective network security group rules applied on a VM
  - Get the status of flow logging on a resource
  - Get VPN configurations
  - Get the configuration of service URI and custom headers for a webhook
  - List Web App's security sensitive settings, such as publishing credentials, app settings and connection strings

### API Permissions

While roles handle the permissions for cloud infrastructure, API permissions allow Cyscale to read Azure Active Directory resource - i.e. users, groups, apps, etc.

Cyscale requires only `Directory.Read.All` which enables it to read the IAM resources from your tenant. Since this is considered a high privilege permission, you will have to grant admin consent for it. You can read more about admin consent in the [Azure documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent?WT.mc_id=Portal-Microsoft_AAD_RegisteredApps#admin-consent).

## Managing Your Connected Azure Subscription(s)

Once connected, your Azure subscription(s) will show up in the [Cloud Accounts](https://app.cyscale.com/#/cloud-accounts) list. From there, you can either use the inline actions or navigate to the overview page of the cloud account. The available options are:

### Configure

You can update the following information for your Azure cloud accounts:

- Name - this helps you better identify the cloud account throughout the Cyscale platform
- Subscription/tenant/application/object ID - you might need to change these in case you configured the connection manually
- **Application key** - this is the service principal secret. You will have to update this in case you rotate it, or it expires - the configured **validity period is 3 years** (you can find this in the Terraform configuration file)

### Disable/Enable

By default, all cloud accounts are enabled. If you want to prevent Cyscale from syncing and assessing your assets for a certain cloud account, you can disable that account. The state of cloud account in Cyscale will be locked until you enable it again. The assets will not be updated based on your actual cloud infrastructure and assessments will not be performed for them.

### Sync

You can always trigger a new sync and assessment manually for a given cloud account (unless the sync is already in progress). This will make Cyscale read your entire cloud infrastructure for that particular account, evaluate the applicable controls, and generate the corresponding alerts (if any).
