---
title: Commands
lang: en-US
description: View all the available commands and detailed information of the Suggestions bot.
meta:
    - name: description
      content: View all the available commands and detailed information of the Suggestions bot.
---

# Commands

_**Key:**_  
`< >` = Required  
`[ ]` = Optional  
`bot` = Refers to the Suggestions bot  

## General Commands
| Command        | Description           | Guide  |
| ------------- |:-------------:| -----:|
| changelog      | View the recent changelog for the bot | [click](#changelog-command) |
| channel | View the current suggestions channel in the guild | [click](#channel-command) |
| help      | View bot commands and where to receive support      |   [click](#help-command) |
| info | View bot information      |    [click](#info-command) |
| invite | Receive a DM with information on inviting the bot to your server | [click](#invite-command) | 
| patrons | View all Patrons who have pledged to Nerd Cave Development | [click](#patrons-command) |
| ping | View the latency of the bot and API | [click](#ping-command) | 
| prefix | View the current prefix in the guild | [click](#prefix-command) |
| serverinfo | Display guild information regarding the bot | [click](#server-info-command) |
| sid | View the informatin of a specific guild suggestion by their sID | [click](#sid-command) |
| stats | View bot statistics | [click](#stats-command) |
| suggest | Submit a new suggestion | [click](#suggest-command) |
| suggestions | View suggestions data in the guild | [click](#suggestions-command) |
| vote | View all links to vote for the bot on various bot list sites | [click](#vote-command) |

## Staff Commands
These commands require a staff role or the Manage Server (`MANAGE_GUILD`) permission.

| Command | Description | Guide |
| ------- |:-----------:| -----:|
| approve | Approve a submitted suggestion | [click](#approve-command) |
| note | Add a note to a submitted suggestion | [click](#note-command) |
| reject | Reject a submitted suggestion | [click](#reject-command) | 
| staffsuggest | Submit a staff suggestion to be viewed by staff-only | [click](#staff-suggest-command) |


## Admin Commands
These commands require the Manage Server (`MANAGE_GUILD`) permission.

| Command | Description | Guide |
| ------- |:-----------:| -----:|
| blacklist | Blacklist a user from all bot commands in the guild | [click](#blacklist-command) |
| config | View and update various configuration settings of the bot | [click](#config-command) |

## Command Information

### Approve Command
```
,approve <sID> [response]
```
Approve a submitted suggestion via the suggestion ID (sID) with an optional response.

### Blacklist Command
```
,blacklist add/remove <user> [reason]
```
Add or remove a user from the bot blacklist (guild-only). This means the user cannot interact with any bot commands.

### Changelog Command
```
,changelog
```
The changelog command displays the information for the most recent changelog. Also included is an invite to the [Support Discord](https://discord.gg/ntXkRan) where you can view all previous changelogs.

Aliases: `changes, updates, changelogs`

### Config Command
```
,config [setting] [value]
```
View and update various configuration settings of the bot. You can check a specific setting by doing `,config [setting]` and update a specific setting by doing `,config [setting] [value]`.

Aliases: `conf, settings`

### Channel Command
```
,channel
```
This command sends a message of the current suggestions channel. If no suggestions channel is set, it will display an error letting you know.

### Help Command
```
,help
```
The help command displays all commands (commands will display based on permissions of the user) and additonal information dislaying current prefix, suggestions channel, bug reports links and the link to this documentation.

Aliases: `h, halp`

### Info Command
```
,info
```
The info command displays the bot author, bot description, the link to this documenation and the [Support Discord](https://discord.gg/ntXkRan). Some of the most important information is found here.

Aliases: `botinfo`

### Invite Command
```
,invite
```
The invite command sends the user a DM with the bot invite link as well as the link to this documenation and the [Support Discord](https://discord.gg/ntXkRan).

### Note Command
```
,note <sID> <note>
```
Add a new note to a submitted suggestion.

### Patrons Command
```
,patrons
```
View a list of all current Patrons who support Nerd Cave Development. These people, pledges big or small, are much appreciated and lets the developers know good is being done.

### Ping Command
```
,ping
```
This command displays the latency of the bot (where it's hosted) and the API (Discord API).

Aliases: `pong`

### Prefix Command
```
,prefix
```
This command sends a message of the current guild prefix. If no prefix is set, it displays the default prefix.

*Forgot the prefix? Simply mention the bot (`@Suggestions#2602`) and it'll tell you the current prefix!*

### Reject Command
```
,reject <sID> [response]
```
Reject a submitted suggestion via the suggestion ID (sID) with an optional reponse. A response is only required if DM responses are to `true` (check the [config](#config-command) command).

### Server Info Command
```
,serverinfo
```
Display guild information regarding the bot.

Aliases: `guildinfo`

### sID Command
```
,sid <sID>
```
View the information of a suggestion with the suggestion ID (sID). Information such as the submission date, the suggestion, whether it's been approved/rejected, etc. is shown.

### Staff Suggest Command
```
,staffsuggest <suggestion>
```
Submit a new suggestion for staff members to vote. These suggestions go in the set staff suggestions channel. This feature is specific to staff members of a Discord and is meant for voting without the need for a second Discord bot.

### Stats Command
```
,stats
```
The stats command displays information regarding how many guilds the bot is in, it's uptime, bot version, discord.js version, etc. Check here if you're a geek or just want to see how many guilds the bot is in.

### Suggest Command
```
,suggest <suggestion>
```
This command will allow the user to submit a new suggestion that will be sent to the set suggestions channel in the guild (by default the bot searches for a `#suggestions` channel if it's set).

Cooldown: `3 uses per minute`

### Suggestions Command
```
,suggestions [@User]
```
View your own suggestions data or another user's data in this guild. This includes a user's total submitted suggestions, total approved and total rejected.

### Vote Command
```
,vote
```
This command will display each link for Discord bot voting lists the bot is present on.