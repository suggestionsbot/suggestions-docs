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
Logging of approved/rejected status of suggestions began on September 29, 2018. Any data before that *specifically* regarding the status of a suggestion is not logged. However, suggestion data in general, in the new database, has been logged. This explains the gap between approved/rejected suggestions and the total number of suggestions in your guild if you have had this bot in your guild prior to the date above.
:::

There are a few different commands you can use to get the statistics of suggestions in your guild:

* `suggestions`
* `sid`
* `serverinfo`

## Suggestions Command

The `suggestions` command allows you to view suggestions information of a specific user. Either being your own statistics (`suggestions`) or the statistics of another user `suggestions <@User>` (read the message above).

![An example of a user's suggestions stats](/images/statistics-1.png)

## sID Command

The `sid` command allows you to view the information of a specific suggestion via their suggestion ID (sID). You can do this with `sid <id>`:

![Information of a suggestion](/images/statistics-2.png)

Similar to when a suggestion is approved or rejected, the message embed will change to indicate how that suggestion was handled:

![Information of an approved suggestion](/images/statistics-3.png)

## Server Info Command

The `serverinfo` command allows you to view overall statistics for the Suggestions bot in the guild. Here you can see the total number of suggestions, total approved and rejected suggestions as well as the sID for the last submitted suggestion.

![Information of a guild's suggestions stats](/images/statistics-4.png)

This is not where it stops! There will be more ways in the future to view even more information for suggestions. Both for users and staff members.