---
sidebar_position: 1
---

# Slack & Microsoft Teams

Cyscale enables you to receive alerts and compliance threshold violations on **Slack** and **Microsoft Teams**.

:::info Multiple messages
Cyscale sends all newly created alerts and violated frameworks/policies for a given connector after its assessment. Cyscale paginates the messages for Slack and Microsoft Teams. Each message can contain up to 100 alerts and 30 frameworks/policies.
:::

#### Alerts Example

![Alerts via Teams Notification Channel](/img/alerts-teams.png)

#### Compliance Example

![Compliance Threshold Violations via Teams Notification Channel](/img/compliance-teams.png)

### Microsoft Teams Integration

In order for Cyscale to be able to send you notifications via Teams, you have to configure an **incoming webhook connector** on the Teams channel where Cyscale should send the messages. For the exact steps, consult the [Microsoft documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook).

Once you have the webhook URL, go to **Organization → Notification Channels** and add a Microsoft Teams channel. Give it a descriptive name and description (optional), paste the webhook URL, and use **Test Connection** to validate the endpoint.

If you are configuring alert notifications, you can optionally scope the channel to **All**, a custom scope, or a connector scope. Compliance and posture notifications remain organization-wide.

### Slack Integration

In order for Cyscale to be able to send you notifications via Slack, you have to configure a **Slack app with incoming webhooks** enabled. For the exact steps, consult the [Slack documentation](https://api.slack.com/messaging/webhooks).

Once you have the webhook URL, go to **Organization → Notification Channels** and add a Slack channel. Give it a descriptive name and description (optional), paste the webhook URL, and use **Test Connection** to validate the endpoint.

If you are configuring alert notifications, you can optionally scope the channel to **All**, a custom scope, or a connector scope. Compliance and posture notifications remain organization-wide.
