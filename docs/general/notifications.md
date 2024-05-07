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
- **Compliance threshold violations** - Cyscale sends a notification whenever it finds policies and standards with compliance scores below the threshold. We will skip those policies and standards that haven't changed since the last notification. You can configure the threshold from **Account Settings**.
