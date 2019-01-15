# Commands

_**Key:**_  
`< >` = Required  
`[ ]` = Optional

## General Commands
| Command        | Description           | Guide  |
| ------------- |:-------------:| -----:|
| changelog      | View the recent changelog for the obt | [click](#changelog-command) |
| help      | View bot commands and where to receive support      |   [click](#help-command) |
| info | View bot information      |    [click](#info-command) |
| invite | Receive a DM with information on inviting the bot to your server | [click](#invite-command) | 
| ping | View the latency of the bot and API | [click](#ping-command) | 
| prefix | View the current prefix in the guild | [click](#prefix-command) |
| stats | View bot statistics | [click](#stats-command) |
| channel | View the current suggestions channel in the guild | [click](#channel-command) |
| mysuggestions | View your own suggestions data in the guild | [click](#my-suggestions-command) |
| sid | View the informatin of a specific guild suggestion by their sID | [click](#sid-command) |
| suggest | Submit a new suggestion | [click](#suggest-command) |
| suggestions | View suggestions data in the guild | [click](#suggestions-command) |
| vote | View all links to vote for the bot on various bot list sites | [click](#vote-command) |
| patrons | View all Patrons who have pledged to Nerd Cave Development | [click](#patrons-command) |

## Staff Commands



## Admin Commands



## Command Information

### Changelog Command
```
,changelog
```
The changelog command displays the information for the most recent changelog. Also included is an invite to the [Support Discord](https://discord.gg/g7wr8xb) where you can view all previous changelogs.

Aliases: `changes, updates, changelogs`

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
The info command displays the bot author, bot description, the link to this documenation and the [Support Discord](https://discord.gg/g7wr8xb). Some of the most important information is found here.

Aliases: `botinfo`

### Invite Command
```
,invite
```
The invite command sends the user a DM with the bot invite link as well as the link to this documenation and the [Support Discord](https://discord.gg/g7wr8xb).

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

### Stats Command
```
,stats
```
The stats command displays information regarding how many guilds the bot is in, it's uptime, bot version, discord.js version, etc. Check here if you're a geek or just want to see how many guilds the bot is in.

### Channel Command
```
,channel
```
This command sends a message of the current suggestions channel. If not suggestions channel is set, it will error letting you know.

### My Suggestions Command
```
,mysuggestions
```
This command will display the number of approved, rejected and total suggestions for the user in the guild the command was sent.

### sID Command
```
,sid <sID>
```
View the information of a suggestion with the suggestion ID (sID). Information such as the submission date, the suggestion, whether it's been approved/rejected, etc. is shown.

### Suggest Command
```
,suggest <suggestion>
```
This command will allow the user to submit a new suggestion that will be sent to the set suggestions channel in the guild (by default the bot searches for a `#suggestions` channel if it's set).

Cooldown: `3 uses per minute`

### Suggestions Command
```
,suggestions
```
This command will display the number of approved, rejected and total suggestions for the guild the command was sent in.

### Vote Command
```
,vote
```
This command will display each link for Discord bot voting lists the bot is present on.

### Patrons Command
```
,patrons
```
View a list of all current Patrons who support Nerd Cave Development. These people, pledges big or small, are much appreciated and lets the developers know good is being done.