---
title: Configuration
lang: en-US
description: Learn how to configure various aspects of the Suggestions bot.
meta:
    - name: description
      content: Learn how to configure various aspects of the Suggestions bot.
---

# Configuration

_**Key:**_  
`< >` = Required  
`[ ]` = Optional  
`bot` = Refers to the Suggestions  
`guild` = Refers to a Discord server  
`emoji set` = Refers to the reactions added to suggestions  

One of the core components of the Suggestions bot is the fact that the administrators can configure various aspects of the bot to their liking. From the emojis used on suggestions to DM responses, you can take control of your guild's experience.

Configuring the bot is really easy. The format goes as:
- To view all configurable options, do `config`
- To view the information of a speicific option, do `config [option]` (check the image below for different options)
- To set a specific option, do `config [option] [value]` 

Here is an overview of all the configurable options. Keep scrolling for more information about each option.

![Suggestions Configuration Options](/images/configuration-1.png)

## Prefix
Usage: `config prefix` or `config prefix [prefix]`

You can either view or set the custom prefix to be used in your guild. If at any time you forget the prefix, simply mention the bot `@Suggestions#2602` or do `@Suggestions#2602 prefix`.

The bot's mention can also be used as a command prefix.

## Suggestions Channel
Usage: `config channel` or `config channel [channel]`

You can either view or set the channel where suggestions will be posted to. Invalid channels will not be allowed to be set. The options to pass through when setting the channel can be:

- The channel mention - `#suggestions`
- The channel name - `suggestions`
- The channel ID - `480265871596584970`

## Suggestions Logs Channel
Usage: `config logs` or `config logs [channel]`

You can either view or set the channel where suggestion results will be posted after a suggestion is approved or denied. The options to pass through follow the same as setting the [Suggestions Channel](#suggestions-channel). Keep in mind you cannot set a channel that does not exist.

## Staff Suggestions Channel
Usage: `config staffchannel` or `config staffchannel [channel]`

You can either view or set the channel where staff suggestions will be posted to. The options to pass through follow the same as setting the [Suggestions Channel](#suggestions-channel). Keep in mind you cannot set a channel that does not exist.

Users can only have suggestions posted to the staff suggestions channel through the `staffsuggest` command. Users have access to this command if a) they have the `MANAGE_SERVER` permission or b) they are a member of one of the set staff roles (refer to the [Staff Roles](#staff-roles) section).'

Read more about staff suggestions via the [Staff Suggestions](staff-suggestions.md) page.

## Staff Roles
Usage: `config roles` or `config roles [role]`

You can either view or set the various staff roles that are used for managing suggestions as well as submitting staff suggestions. Invalid roles will not be allowed to be set. The options to pass through when adding/removing a staff role can be:

- The role mention - `@Da Nerds`
- The role name - `Da Nerds`
- The role ID - `480249370382696458`

If the role you wish to set is not mentionable, follow this format using the role ID: `<@&ROLE_ID>`. The bot will resolve the mention and set the role without tagging the role.

Adding/removing a staff role is automatically determined by if it has been set previously. So if you previously added `Moderator` as a role and you do `config roles Moderator`, the bot will remove the role as a staff role. This applies vice versa.

## Vote Emojis
Usage: `config emojis` or `config emojis [id]`

You can either view all available vote emojis or set one to your liking. Invalid predefined emoji sets will not be allowed to be set. You can set a specific emoji set via it's ID that's listed when doing `config emojis`.

For more information on vote emojis, check out the [Suggestion Emojis](managing-suggestions.md#suggestions-emojis) section on the [Managing Suggestions](managing-suggestions.md) page.

## Rejection Responses
Usage: `config responses` or `config responses [true|false]`

You can either view or set if a response/reply is required when rejecting a suggestion. If enabled and a staff member attempts to reject a suggestion without a response, the bot will return an error letting them know that.

## Disabled Commands
Usage: `config commands` or `config commands [command]`

You can either view all currently disabled commands in your guild or add/remove commands that you wish to be disabled from usage in your guild. When trying to use a guild-disabled command, the bot will return an error letting the command sender know.

Enabling/disabling a command is automatically determined by if it has been adjusted previously. So if you previously disabled the `approve` command and you do `config commands approve`, the bot will enable the `approve` command. This applies vice versa.

However, some commands have been "guarded" meaning they cannot be enabled/disabled in your guild. The commands go as followed:

- `config`
- `changelog`
- `help`
- `info`
- `invite`
- `patrons`
- `ping`
- `prefix`
- `serverinfo`
- `stats`
- `vote`

## DM Responses
Usage: `config dmResponses` or `config dmResponses [true|false]`

You can either view if DM responses are enabled or not or enable/disable them if you wish.

When disabling DM responses, the bot will not DM the user on these actions:

- A suggestion is submitted
- A suggestion is approved
- A suggestion is rejected
- A note has been added to a suggestion