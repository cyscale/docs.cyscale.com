---
sidebar_position: 2
---

# Account Deletion

In the event you want Cyscale to forget everything about you, you have two options:

- delete your user
- delete your account

You can **delete your user** from the **My Profile** page. This operation only deletes your user entry from the Cyscale database. Cyscale creates a new entry in the account activity log with type `user_deleted`.

:::info At least one admin is required
In case there would be no admin user left when you try to delete your user, Cyscale will deny the operation, giving you the option to delete the entire account.
:::

As an admin, you can delete the entire Cyscale account from the **Account Settings** page. This permanently deletes every piece of information related to your Cyscale account including:

- All **users** that are part of the account (the equivalent of performing user deletion for each of them)
- All **connectors** and any related data such as **assets**, **results**, and **alerts** (the equivalent of manually deleting each connector)
- All **policies**, **standards**, and **generated reports**.

The only information left in the Cyscale databases related to your account is the account activity log with a new entry with type `account_deleted`.

:::info Leftover Resources
When you delete a connector or the entire Cyscale account, make sure to also delete the corresponding resources from your actual connector accounts. For example, delete the AWS Role, Azure Service Principal, or any generated API Key. If you used infrastructure as code, run `terraform destroy`.
:::
