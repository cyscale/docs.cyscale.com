---
sidebar_position: 3
---

# ServiceNow

Cyscale supports ServiceNow as a notification channel so you can push alert notifications into your existing workflow tooling.

## Configuring ServiceNow

Open **Organization → Notification Channels** and add a **ServiceNow** channel.

From the current product flow, ServiceNow is configured in the same webhook-style flow as the other outbound channels: provide the target URL, test the connection, and then choose the notification types the channel should receive.

## Scope Targeting

For alert notifications, you can optionally target:

- **All**
- a **custom scope**
- a connector-created **implicit scope**

This is useful when you want one ServiceNow channel for production connectors and another for lower-priority environments.

## Notes

- Scope targeting currently applies to alert notifications.
- Compliance and posture notifications remain organization-wide.
- Jira is documented separately because it is used for issue creation rather than broadcast notifications.
