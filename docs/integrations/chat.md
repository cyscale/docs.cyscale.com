---
sidebar_position: 1
---

# Slack & Microsoft Teams

Cyscale enables you to receive alerts and compliance threshold violations on **Slack** and **Teams**.

:::info Multiple messages
Cyscale sends all newly created alerts and violated frameworks/policies for a given connector after its assessment. Cyscale paginates the messages for Slack and Microsoft Teams. Each message can contain up to 100 alerts and 30 frameworks/policies.
:::

#### Alerts Example

![Alerts via Teams Notification Channel](/img/alerts-teams.png)

#### Compliance Example

![Compliance Threshold Violations via Teams Notification Channel](/img/compliance-teams.png)

### Microsoft Teams Integration

In order for Cyscale to be able to send you notifications via Teams, you have to configure an **incoming webhook connector** on the Teams channel where Cyscale should send the messages. For the exact steps, consult the [Microsoft documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook).

Once you have the webhook URL, go to **Notification Channels** (from the top-right menu) and press the plus sign next to Microsoft Teams. Give it a descriptive name and description (optional) and paste the webhook URL. You can make sure that the integration works by pressing **Test Connection** which tells Cyscale to send you the following message “_This message confirms you've properly configured Microsoft Teams notifications in Cyscale_”. You can also select which notifications you'd like to receive: **New Alerts** or **Compliance threshold violations**.

### Slack Integration

In order for Cyscale to be able to send you notifications via Slack, you have to configure a **Slack app with incoming webhooks** enabled. For the exact steps, consult the [Slack documentation](https://api.slack.com/messaging/webhooks).

Once you have the webhook URL, go to **Notification Channels** (from the top-right menu) and press the plus sign next to Slack. Give it a descriptive name and description (optional) and paste the webhook URL. You can make sure that the integration works by pressing **Test Connection** which tells Cyscale to send you the following message “_This message confirms you've properly configured Slack notifications in Cyscale_”. You can also select which notifications you'd like to receive: **New Alerts** or **Compliance threshold violations**.
