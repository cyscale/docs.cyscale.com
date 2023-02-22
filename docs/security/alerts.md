---
sidebar_position: 1
---

# Alerts

An alert represents a specific issue of a certain asset. Cyscale creates alerts for assets that are not compliant with the controls it checks.

## The Alert Lifecycle

The alerts are part of the assessment process that happens whenever Cyscale syncs your connectors (for both automatic/scheduled and manual triggers).

When Cyscale identifies that an asset does not pass a control for the first time, it creates a new alert with the status `Open`.

:::info Alert Notifications
Whenever Cyscale generates new alerts, it sends them via email to each user that’s part of the Cyscale account. Each user can change this from the [user settings page](https://app.cyscale.com/user-settings). Read more on [the notifications docs](../account/notifications.md).
:::

The alert will remain `Open` until the asset either passes the control or is removed (or no longer visible to Cyscale - e.g., you might have changed the AWS regions in Cyscale), in which case the alert is moved to `Resolved`.

In the case of regression (i.e. the asset fails again after previously being fixed), Cyscale creates a new alert with the status `Open`.

The other alternative is when you disable the respective control or update it to stop generating alerts. In this case, Cyscale moves all the alerts for the respective control to `Disabled` right after you update the control.

![Alert lifecycle](/img/alert-lifecycle.png)

## Managing Alerts

### Alert Generation

You can influence which controls Cyscale must generate alerts for. You have two options:

1. Per control by disabling the **Create alerts when this control fails** flag. You can find this on the details panel of each control.
2. For your entire Cyscale account by changing the **Severity Alerting Level** from [the account settings page](https://app.cyscale.com/account-settings). Cyscale will generate alerts for controls with severity equal or greater than the configured level.

:::info Default severity alerting level
The default level is **medium**. Cyscale will not generate alerts for low severity controls out of the box. We made this choice in order to keep the number of alerts as manageable as possible, especially after you connect your accounts for the first time.
:::

:::caution Changing alert generation
As soon as you change the alert generation, Cyscale will disable any `Open` alerts that are no longer needed. For example, if you increase the severity alerting level from medium to high, Cyscale will disable all medium alerts. If you lower the level back to medium, Cyscale will start generating alerts for medium severity controls during the subsequent assessments.
:::

### The Alerts Page

You can see all the alerts on [the alerts page](https://app.cyscale.com/alerts). By default, Cyscale shows you the latest `Open` alerts (i.e. sorted descendingly by the `Created at` date field).

Cyscale provides the following actions that you can perform on one or multiple alerts (batch):

1. **Dismiss** - this is how you tell Cyscale that you don’t want to see the selected alert(s). Cyscale will move the alert(s) to the **Dismissed** tab until the next assessment. If the issue is still there, Cyscale will move the alert back to the main tab.
2. **Acknowledge** - you can think of this action as of the read/unread state most email clients offer. Cyscale will not change the acknowledgement state during the subsequent assessments (as opposed to dismiss). You might find filtering by the acknowledgement state useful.
3. **Exempt** - instruct Cyscale to always consider this asset as passing this control. You will have to provide a reason for exemption.
