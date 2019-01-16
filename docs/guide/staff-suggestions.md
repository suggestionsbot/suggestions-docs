---
title: Staff Suggestions
lang: en-US
description: Allow staff members to internally vote on staff suggestions without interference or the need for a second bot.
meta:
    - name: description
      content: Staff Suggestions
    - name: theme-color
      content: 0xdd9323
---

# Staff Suggestions

::: warning
This feature does not mirror the regular user suggestions. This means there is no logging or a unique sID for each suggestion. It's a lightweight feature that allows staff members to vote on matters internally with zero interference of the user suggestions feature.
:::

## Setting Things Up

This feature is something that makes the bot unique, versatile, and prevents server owners from having to get a second bot to deal with matters like this. And getting a second bot for the same feature used in a different way is not always practical. That's why this bot has the feature for staff members to submit suggestions to be voted on and dealt with internally.

Remember the suggestions role you created back at the [Getting Started](README.md) section? Well it comes to use here as well! This is because users with that role can not only manage suggestions, but they can submit suggestions internally! The setup mirrors the initial suggestions channel setup process:

1. Create and set a staff suggestions channel by doing`setstaffchannel <channel>`\(you can tag the channel; you must have the`MANAGE_GUILD`permission to do this action\)
   1. Add the bot to that channel and exclusively give it the`SEND MESSAGES`and`ADD REACTIONS`permissions \(add anymore depending on what permissions you gave the bot globally\).
   2. Disable`SEND MESSAGES`and`ADD REACTIONS`for`@everyone`to keep the channel clean and that users only vote with the ✅ and ❌emojis.
2. Assign designated individuals the set staff role that you made earlier \(only users with this role can submit staff suggestions!\)
3. Use`staffsuggest`to submit a new staff suggestion

Once this is all setup, your staff members should be good to go and vote!