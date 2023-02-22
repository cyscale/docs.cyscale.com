---
sidebar_position: 2
---

# Exemptions

Exemptions enable you to exclude a specific asset from being assessed against a specific control. Cyscale will consider the asset as passing that specific control.

You can create exemptions from alerts or from the _findings_ section of a control. You will have to provide a reason (explain concisely why you created the exemption). All exemptions are displayed on the **Exemptions** page. Furthermore, you can see the exemptions for a specific control from the findings section of that control.

You can delete exemptions from the exemptions page. During the next connector assessment, Cyscale will assess the asset again.

If you delete the corresponding resource (e.g. AWS EC2 instance) for an exemption, Cyscale preserves the exemption but indicates that the asset has been deleted. This applies also in case you remove a connector or change its configuration (e.g. AWS regions).

## Compliance Reports

Since exemptions are part of the risk management strategy and can influence compliance, Cyscale includes the relevant exemptions in the generated compliance reports, at the end. The report will contain the exempted asset name, the connector, when and by whom it was exempted, and the reason.
