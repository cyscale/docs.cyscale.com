---
sidebar_position: 1
---

# Scopes

The scopes feature allows you to change what Cyscale displays throughout the platform. It helps you cover scenarios such as:

- You want to see the security posture for a specific **connector** or **provider** (e.g. all AWS accounts).
- You want to see the security posture of your **production** environment.
- You are an **MSP/MSSP** and would like to see the results for a **specific customer**.

:::info
The scope is basically a platform-wide filter. It covers assets, assessment results, alerts, compliance, exemptions, identity, containers, and everything else.
:::

## Implicit Scopes

By default, all Cyscale accounts will operate under the "All" scope. It basically contains all the data of your Cyscale account and it works as it there was no scopes feature.

Every time you onboard a connector, Cyscale will automatically create a new, unmodifiable scope corresponding to that specific connector. This implicit scope is named after your connector. This will allow you to switch your platform view to focus only on data from that specific connector.

## Custom Scopes

In addition to the default ("All") and connector scopes, you can create your own custom scopes based on one or multiple connectors. All new assets from those connectors will automatically be covered by the scope. This flexibility allows you to customize and manage your view based on specific groups of connectors.
