---
sidebar_position: 2
---

# Getting Started

### Sign Up

To start using Cyscale, go to https://app.cyscale.com/register and sign up using your email or through the supported identity providers.

Once signed up, you can start connecting your cloud accounts and identity providers (a.k.a. **connectors**) by choosing the provider(s) and following the onboarding steps - https://app.cyscale.com/select-provider.

### Connecting Cloud Accounts/Identity Providers

For specific details on how to integrate with each of the supported providers, follow the links below:

- [AWS Integration](./connectors/aws.mdx)
- [Azure Integration](./connectors/azure.mdx)
- [Google Cloud Integration](./connectors/gcp.mdx)
- [Alibaba Integration](./connectors/alibaba.mdx)
- [Okta](./connectors/okta.mdx)

If everything is configured properly, you should be greeted with the following view

![Successfully added a connector](/img/add-cloud-account-success.png)

### Sync/Assessment

Cyscale now starts exploring your cloud infrastructure through the provider's APIs. Once Cyscale created a snapshot of your cloud assets, it will perform the assessment. This translates into Cyscale going over the list of controls and looking for assets that fail to meet the requirements.

By default, Cyscale synchronizes your cloud assets and performs the assessment every 24 hours. If you added a connector at 1:24 PM, all subsequent automatic scans will be conducted at 1:24 PM.

Once the assessment is complete, Cyscale will generate the corresponding [alerts](./security/alerts.md) and store the result in the form of “failed assets”. These are the basis for determining which controls fail (the ones with failed assets), the connector risk (given by the asset with the highest risk), and policy/standard status.

If you go to the Cloud Overview page and the synchronization is still in progress, you should see a loading indicator. Otherwise, you should see some high-level information about the security posture of the account you just added, similar to the following image:

![Cloud Overview Page](/img/cloud-overview.png)

Besides the scheduled syncs, you can manually trigger the process at any moment by pressing the Sync button. This is helpful if, for example, you changed your infrastructure or want to validate that certain vulnerabilities are indeed fixed. You can find out when Cyscale performed the last sync and how long it took by hovering over the Sync button.

### What's Next

At this point you can explore the rest of the platform such as exploring your cloud assets from the visibility section, going through the controls library from the security section, or checking how compliant your infrastructure is with various industry standards such as ISO 27001, SOC 2, PCI DSS, and others.

Additionally, you can always add more connectors.
