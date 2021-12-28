---
title: Getting Started
lang: en-US
description: Get started with inviting the Suggestions bot and setting up its primary features.
meta:
    - name: description
      content: Get started with inviting the Suggestions bot and setting up its primary features.
---

## Getting Started

To invite the bot, you must use [this link](https://discordapp.com/oauth2/authorize?client_id=474051954998509571&scope=bot&permissions=93248).

Here you can choose the server you wish to invite the bot to and choose what permissions it should have. It's best to leave the permissions alone or you'll most likely run into issues. The bot is only assigned the permissions it needs. Those permissions are:

* View Channels (`VIEW_CHANNEL`)
* Send Messages (`SEND_MESSAGES`)
* Manage Messages (`MANAGE_MESSAGES`)
* Embed Links (`EMBED_LINKS`\)
* Read Message History (`READ_MESSAGE_HISTORY`)
* Add Reactions (`ADD_REACTIONS`)

## Setting Up the Bot

Once the bot is in your server, there are a few housekeeping things you need to do. (You must have the Manage Server (`MANAGE_GUILD`) permission to complete these steps.)

Also by default, the prefix is `,` and the bot searches for `#suggestions` as the default suggestions channel. The bot mention (`@Suggestions#2602`) can be used as a prefix for commands as well if you ever incorrectly set the prefix or forget the prefix in general.

1. Create and set a suggestions channel by running `config channel <channel>`. (You can tag the channel.)
   i. Add the bot to that channel and exclusively give it the `SEND MESSAGES` and `ADD REACTIONS` permissions. (Add anymore depending on what permissions you gave the bot 
   globally.)
   ii. Disable `SEND MESSAGES` and `ADD REACTIONS` for `@everyone` to keep the channel clean and that users only vote with the configured emoji set (ex. the ✅ and ❌ emojis).

2. Create and set a suggestions log channel by running `config logs <channel>`. (You can tag the channel.)

3. Add roles so users in that role can approve/reject user suggestions. You may do that with `config roles <role>`, where the role can either be tagged or be typed out if it exists in the guild.

4. Choose an emoji set for your guild. You can view the available sets via the `config emojis` command and choose which one you want in your guild with `config emojis <#>`, where `#` indicates which emoji option.

*Options 2 and 3 are only required if you'll be managing suggestions using the `approve` and `reject` commands.*

Once you completed those steps, you should be set to go! Click "Managing Suggestions" on the left or down below for more information on approving/rejecting user suggestions.
