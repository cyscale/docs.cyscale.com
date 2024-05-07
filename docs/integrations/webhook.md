---
sidebar_position: 3
---

# Webhook

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
