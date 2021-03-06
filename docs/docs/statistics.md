---
title: Statistics
lang: en-US
description: View basic statistics in the Discord with various commands.
meta:
    - name: description
      content: View basic statistics in the Discord with various commands.
---

# Statistics

::: tip
Logging of approved and rejected statuses of suggestions began on September 29, 2018. Any data *specifically* regarding the status of a suggestion before that date isn't logged. However, suggestion data in general, in the new database, was logged. This explains the gap between approved/rejected suggestions and the total number of suggestions in your server if you'd had this bot in your server prior to the date above.
:::

There are a few different commands you can use to get the statistics of suggestions in your server:

* `suggestions`
* `sid`
* `serverinfo`

## Suggestions Command

The `suggestions` command allows you to view suggestions information of a specific user. You can see either your own statistics (`suggestions`) or the statistics of another user `suggestions <@User>`. (Read the message above.)

![An example of a user's suggestions stats](/images/statistics-1.png)

## sID Command

The `sid` command allows you to view the information of a specific suggestion via their suggestion ID (sID). You can do this with `sid <id>`:

![Information of a suggestion](/images/statistics-2.png)

Similar to when a suggestion is approved or rejected, the message embed will change to indicate how that suggestion was handled:

![Information of an approved suggestion](/images/statistics-3.png)

## Server Info Command

The `serverinfo` command allows you to view overall statistics for the Suggestions bot in the server. Here you can see the total number of suggestions, the total of approved and rejected suggestions, as well as the sID for the last submitted suggestion.

![Information of a guild's suggestions stats](/images/statistics-4.png)

This is not where it stops! There will be more ways in the future to view even more information for suggestions, both for regular and staff members.
