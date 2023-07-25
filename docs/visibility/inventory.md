---
sidebar_position: 1
---

# Inventory

Once at least one Connector is onboarded, Cyscale will periodically sync it. This will result in an extensive Inventory page that includes all the assets that Cyscale supports. You can check for supported assets on the Connectors page.

## Filtering

The Inventory will include hundreds or even thousands of assets which will become difficult to manage. For this, Cyscale provides an intuitive filter palette that will allow you to filter by common asset properties like `Provider`, `Connector`, `Region`, `Asset Category`, `Asset Type` and `Tags`.

Besides these, Cyscale supports filtering by `Security Score` and `Impacted by Controls`.

### Security Score

The asset score is a metric that indicates the security impact of an asset. When filtering by  score, you can choose from 4 options:
 - **Minimal Risk**: 100% score (or no risk detected by Cyscale)
 - **Low Risk**: 76% - 99% score
 - **Medium Risk**: 51% - 75% score
 - **High Risk**: 0% - 50%

This will allow you to check which are the most insecure assets and focus on remediating them to increase your overall security posture.

You can combine this filter with any other to get powerful insights like *"AWS Virtual Machines with High Risk"* or *"Assets with `env: production` tag with Medium Risk"*.

For more information check [Asset Score Page](../security/asset-score.md).

### Impacted by Controls

Another powerful filter is **Impacted by Controls**. This will allow you to filter the inventory based on specific security controls like *"Ensure that SSH access is restricted from the internet"*.

When this filter is applied, the inventory will display all the assets impacted by a control (notice that secondary impacted assets are displayed as well, check [Alerts Page](../security/alerts.md#impacted-assets) for more details about this).

We've created an intuitive yet familiar control selector  which allows you to search for controls based on `Name`, `Provider`, `Severity` and `Category`. You can then click to select one or multiple controls. Notice that you can only select `Failed` controls.

![Impacted by Controls filter UI](/img/impacted-by-controls-filter.png)

