---
title: Staff Suggestions
lang: en-US
description: Allow staff members to internally vote on staff suggestions without interference or the need for a second bot.
meta:
    - name: description
      content: Allow staff members to internally vote on staff suggestions without interference or the need for a second bot.
---

# Staff Suggestions

::: warning
This feature doesn't mirror the regular user suggestions. This means there's no logging, a unique sID for each suggestion, or a way to manage a staff suggestion by using its message ID, nor does the configured emoji set apply to staff suggestions. It's a lightweight feature that allows staff members to vote on matters internally with zero interference of the user suggestions feature.
However, it'll be possible to manage staff suggestions when the next version of the bot is released.
:::

## Setting Things Up

This feature makes the bot unique, versatile, and prevents server owners from having to get a second bot to deal with matters like this. And getting a second bot for the same feature used in a different way is not always practical. That's why this bot has the feature for staff members to submit suggestions to be voted on and dealt with internally.

Remember the suggestions role you created back at the [Getting Started](README.md) section? Well, it comes to use here as well! This is because users with that role can not only manage suggestions, but they can also submit suggestions internally! The setup mirrors the initial suggestions channel setup process:

1. Create and set a staff suggestions channel by doing `config staffchannel <channel>`. (You can tag the channel; you must be an administrator to do this action.)
2. Add the bot to that channel's permissions and exclusively give it the `SEND MESSAGES` and `ADD REACTIONS` permissions. (Add anymore depending on what permissions you gave the bot globally.)
3. Disable `SEND MESSAGES` and `ADD REACTIONS` for `@everyone` to keep the channel clean and that users only vote with the ✅ and ❌ emojis.
4. Assign designated individuals the set staff role that you made earlier. (Only users with this role can submit staff suggestions!)
5. Run `staffsuggest` to submit a new staff suggestion.

Once this is all setup, your staff members should be good to go and vote!
