---
sidebar_position: 3
---

# Notifications

An important part of maintaining a good security posture is represented by notifications. Cyscale gives you two notification flavors, personal and via configured notification channels.

## Personal Notifications

Personal notifications are the ones that you receive in your email inbox. Cyscale sends these individually to each user of the account, thus allowing members to control their notification preferences.

You can customize which notifications you want to receive from the **My Profile** page.

Currently, Cyscale has the following notification types:

- **Security Posture** - a weekly digest with the security posture (high/medium/low risk asset count and their trend compared to the previous digest)
- **Alerts** - Cyscale sends alert notifications whenever it finds new vulnerabilities. Due to how the assessment process takes place, Cyscale will batch all alerts for a given connector in a single email.
- **Compliance threshold violations** - Cyscale sends a notification whenever it finds policies and standards with compliance scores below the threshold.  We will skip those policies and standards that haven't changed since the last notification. You can configure the threshold from **Account Settings**.

## Notification Channels

Cyscale also enables you to receive alerts on **Slack**, **Teams**, and via **Webhook**. You can configure up to 10 notification channels and up to 3 notification channels for each provider (e.g., you can have up to 3 Slack notification channels).

Note that Cyscale will paginate the messages for Slack and Microsoft Teams. The current page sizes are `100` for alerts and `30` for compliance threshold violations. Cyscale will not paginate the messages for Webhook Integrations.

#### Batched alerts message for a specific connector example

![Alerts via Teams Notification Channel](/img/alerts-teams.png)

#### Compliance Threshold Violations message example

![Compliance Threshold Violations via Teams Notification Channel](/img/compliance-teams.png)

### Microsoft Teams Integration

In order for Cyscale to be able to send you notifications via Teams, you have to configure an **incoming webhook connector** on the Teams channel where Cyscale should send the messages. For the exact steps, consult the [Microsoft documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook).

Once you have the webhook URL, go to **Notification Channels** (from the top-right menu) and press the plus sign next to Microsoft Teams. Give it a descriptive name and description (optional) and paste the webhook URL. You can make sure that the integration works by pressing **Test Connection** which tells Cyscale to send you the following message “_This message confirms you've properly configured Microsoft Teams notifications in Cyscale_”.  You can also select which notifications you'd like to receive: **New Alerts** or **Compliance threshold violations**.

### Slack Integration

In order for Cyscale to be able to send you notifications via Slack, you have to configure a **Slack app with incoming webhooks** enabled. For the exact steps, consult the [Slack documentation](https://api.slack.com/messaging/webhooks).

Once you have the webhook URL, go to **Notification Channels** (from the top-right menu) and press the plus sign next to Slack. Give it a descriptive name and description (optional) and paste the webhook URL. You can make sure that the integration works by pressing **Test Connection** which tells Cyscale to send you the following message “_This message confirms you've properly configured Slack notifications in Cyscale_”. You can also select which notifications you'd like to receive: **New Alerts** or **Compliance threshold violations**.

### Webhook Integration

If you want Cyscale to push notifications directly to your endpoint, you can configure a webhook and choose which notifications you'd like to receive: **New Alerts** or **Compliance threshold violations**.

#### New Alerts
Whenever Cyscale creates new alerts, it will send to your endpoint an array with them. See the example below:

```json
[
  {
    "createdAtTimestamp": "2022-02-25T13:24:00.0Z",
    "lastSeenAtTimestamp": "2022-02-25T13:24:00.0Z",
    "resolvedAtTimestamp": "0001-01-01T00:00:00Z",
    "accountID": "a8512186-f8ff-45c7-9ebb-a4752f405da2",
    "controlName": "Ensure log metric filter and alerts exist for Custom Role changes",
    "controlID": "eac85ccf-f169-4236-97f0-28c7b2167289",
    "status": "open",
    "cloudProvider": "gcp",
    "cloudAccountName": "Cyscale GCP",
    "cloudAccountID": "61bc4a6d72146f226120c37d",
    "severity": "low"
  },
  {
    "createdAtTimestamp": "2022-02-25T13:24:00.0Z",
    "lastSeenAtTimestamp": "2022-02-25T13:24:00.0Z",
    "resolvedAtTimestamp": "0001-01-01T00:00:00Z",
    "accountID": "a8512186-f8ff-45c7-9ebb-a4752f405da2",
    "controlName": "Ensure the default firewall does not have any default rules besides http and https",
    "controlID": "5931d1d0-5bcb-4b6f-a65a-c18295e94b38",
    "status": "open",
    "assetName": "default-allow-rdp",
    "assetID": "ce90ed4a-6b07-46b4-bb02-d1f6ef7953b1",
    "assetType": "FirewallRule",
    "assetCategory": "SecurityNetwork",
    "cloudProvider": "gcp",
    "cloudAccountName": "Cyscale GCP",
    "cloudAccountID": "61bc4a6d72146f226120c37d",
    "severity": "medium"
  }
]
```

Note that some alerts might not contain asset-related fields since they cannot be associated with a specific asset.

The **severity** of the alerts can be `low`, `medium`, or `high` and the **status** can be `open` or `resolved` (however, Cyscale sends only `open` alerts for now).

Note that `resolvedAtTimestamp` is always `“0001-01-01T00:00:00Z"` since Cyscale sends only newly created alerts - they are not resolved by definition.

#### Compliance threshold violations

Cyscale will send a notification with policies and standards with compliance scores below the threshold. See the example bellow:

```json
{
    "threshold": 50,
    "skippedCount": 6,
    "policies": [
        {
            "name": "Change Management",
            "slug": "change-management",
            "isStandard": false,
            "currentScore": { "passedAssets": 100, "totalAssets": 400, "score": 25 },
            "previousScore": { "passedAssets": 125, "totalAssets": 400, "score": 31 }
        },
        {
            "name": "Data Management",
            "slug": "data-management",
            "isStandard": false,
            "currentScore": { "passedAssets": 50, "totalAssets": 150, "score": 33 },
            "previousScore": { "passedAssets": 30, "totalAssets": 150, "score": 20 }
        },
        {
            "name": "Data Protection",
            "slug": "data-protection",
            "isStandard": false,
            "currentScore": { "passedAssets": 72, "totalAssets": 146, "score": 49 },
            "previousScore": { "passedAssets": 130, "totalAssets": 146, "score": 89 }
        },
        {
            "name": "GDPR",
            "slug": "gdpr",
            "isStandard": true,
            "currentScore": { "passedAssets": 523, "totalAssets": 1050, "score": 49 },
            "previousScore": { "passedAssets": 400, "totalAssets": 1050, "score": 38 }
        },
        {
            "name": "Incident Reporting and Response",
            "slug": "incident-response",
            "isStandard": false,
            "currentScore": { "passedAssets": 12, "totalAssets": 65, "score": 18 },
            "previousScore": null	
        }
    ]
}
```
