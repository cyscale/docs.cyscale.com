---
sidebar_position: 2
---

# Getting Started

### Sign Up

To start using Cyscale, go to https://app.cyscale.com/#/register and sign up using your email or through the supported identity providers.

Once signed up, you can start connecting your cloud accounts by choosing the provider(s) and following the onboarding steps - https://app.cyscale.com/#/select-cloud-provider.

### Connecting Cloud Accounts

For specific details on how to integrate with each of the supported providers, follow the links below:

- [AWS Integration](./integrations/aws.md)
- [Azure Integration](./integrations/azure.md)
- [GCP Integration](./integrations/gcp.md)
- [Alibaba Integration](./integrations//alibaba.md)

If everything is configured properly, you should be greeted with the following view

![Successfully connected a cloud account](/img/add-cloud-account-success.png)

### Sync/Assessment

Cyscale now starts exploring your cloud infrastructure through the provider’s APIs. Once Cyscale created a snapshot of your cloud assets, it will perform the assessment. This translates into Cyscale going over the list of controls and looking for assets that fail to meet the requirements. You can find out more about the assessment process [here](./security/assessment.md).

By default, Cyscale synchronizes your cloud assets and performs the assessment every 24 hours. If you added a cloud account at 1:24 PM, all subsequent automatic scans will be conducted at 1:24 PM.

Once the assessment is complete, Cyscale will generate the corresponding alerts and store the result in the form of “failed assets”. These are the basis for determining which controls fail (the ones with failed assets), the cloud account risk (given by the asset with the highest risk), and policy/standard status.

If you go to the Cloud Overview page and the synchronization is still in progress, you should see a loading indicator. Otherwise, you should see some high-level information about the security posture of the account you just added, similar to the following image:

![Cloud Overview Page](/img/cloud-overview.png)

Besides the scheduled syncs, you can manually trigger the process at any moment by pressing the Sync button. This is helpful if, for example, you changed your infrastructure or want to validate that certain vulnerabilities are indeed fixed. You can find out when Cyscale performed the last sync and how long it took by hovering over the Sync button.

### What's Next

At this point you can explore the rest of the platform such as exploring your cloud assets from the visibility section, going through the controls library from the security section, or checking how compliant your infrastructure is with various industry standards such as ISO 27001, SOC 2, PCI DSS, and others.

Additionally, you can always connect more cloud accounts.