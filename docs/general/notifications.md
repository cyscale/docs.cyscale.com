---
sidebar_position: 3
---

# Notifications

An important part of maintaining a good security posture is represented by notifications. Cyscale currently surfaces notifications in three places: personal email notifications, in-app notifications, and organization-level notification channels.

## Personal Notifications

Personal notifications are the ones that you receive in your email inbox. Cyscale sends these individually to each user of the account, thus allowing members to control their notification preferences.

You can customize which notifications you want to receive from the **My Profile** page.

Currently, Cyscale has the following notification types:

- **Security Posture** - a weekly digest with the security posture (high/medium/low risk asset count and their trend compared to the previous digest)
- **Alerts** - Cyscale sends alert notifications whenever new alertable findings are generated. Due to how the assessment process takes place, Cyscale will batch all alerts for a given connector in a single email.
- **Compliance threshold violations** - Cyscale sends a notification whenever it finds policies and standards with compliance scores below the threshold. We will skip those policies and standards that haven't changed since the last notification. You can configure the threshold from **Account Settings**.

## In-App Notifications

In-app notifications are shown inside the platform and focus on operational events such as:

- connector sync started, completed, or failed
- inventory report generation started, completed, or failed
- assessment report generation started, completed, or failed
- product suggestions such as cluster onboarding prompts

These notifications are useful when you want immediate feedback while working in the platform without relying only on email.

## Notification Channels

Notification channels are configured at **Organization → Notification Channels** and are shared at the organization level.

Cyscale currently supports collaboration and workflow channels such as Slack, Microsoft Teams, Webhook, and ServiceNow, alongside issue-management integrations such as Jira.

For webhook-style channels, you can choose which notification types the channel should receive. Alert notifications can also be targeted to:

- **All**
- a **custom scope**
- a connector-created **implicit scope**

At the moment, scope targeting is supported only for alert notifications. Posture and compliance notifications are organization-wide.

During connector onboarding, Cyscale also lets you choose which notification types that connector is allowed to emit. This makes it possible to keep alerting narrower for noisy or lower-priority environments.
