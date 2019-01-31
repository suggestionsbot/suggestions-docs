---
title: Managing Suggestions
lang: en-US
description: Use the easy but powerful suggesitons management to stay organized in your Discord.
meta:
    - name: description
      content: Use the easy but powerful suggesitons management to stay organized in your Discord.
---

# Managing Suggestions

_**Key:**_  
`< >` = Required  
`[ ]` = Optional

Managing suggestions are simple. Each suggestion is assigned a **Suggestion ID** \(sID\). From there, staff members can either approve, reject, or add a note to a suggestion with the sID. The sID is located in the footer of each suggestion: 

![Suggestion Example w/ sID](/images/DXjJkPA.png)

![Suggestion DM](/images/ItyPiS9.png)

## Setting Up Staff Roles

If you haven't already done so, please refer to the [Getting Started](README.md#set-up-the-bot) section to set up staff roles. By default, users with the `MANAGE_GUILD` permission can manage suggestions. However, if you want staff members to have access to these commands, please refer to the aforementioned section.

## Approving Suggestions

Suggestions are approved via the sID. Once you have it, run the command `approve <ID>`. Afterward, series of actions will happen:

* The suggestion will update as "Approved" in the suggestions channel and shortly delete itself afterward
* The user will receive a DM that you approved their suggestion
* The results of that suggestion will be logged in the suggestions logs channel
* _An optional response can be added doing_ `approve <ID> [response]`

![Suggestion Approved Status](/images/X06AWl6.png)

![Suggestion Approved DM](/images/2H0C5DM.png)

It seems like a lot doesn't it? It really isn't because it all happens in the matter of seconds!

## Rejecting Suggestions

Rejecting suggestions work the same way as approving suggestions. Once you run the command `reject <ID> [response]`the same series of actions will happen as stated above, just instead information of the suggestion being rejected will be posted.

If responses are set to `true` via the usage of the [setresponses](commands.md#set-responses-command), then adding a response when rejecting a suggestion is required.

![Suggestion Rejected Status](/images/BZCRVps.png)

![Suggestion Rejected DM](/images/maFdPG9.png)

## Suggestions Logging

When a suggestion is approved or rejected, it's results are logged to the suggestions logs channel you set earlier. In that channel, you'll find this information for each result:

* The results \(both upvotes and down votes\)
* The suggestion
* The submitter
* The staff member that approved or rejected the suggestion
* The sID
* The response if one was give

![Suggestion Results](/images/X06AWl6.png)

## Suggestions Emojis

A newly introduced feature as of September 29, 2018, you have the ability to choose from a predefined list of emojis to be used for your suggestions. Setting this up is really simple. To see the available options as well as the option you have configured,  use the command `setvotes`

![The available emoji set.](/images/hb0lqes.png)

To change to any of these options, you can simply do `setvotes <#>`\(ex. `setvotes 3`\)*. The number is in front of each emoji set. Upon changing, any future suggestions will use that emoji set, as shown below:

![An example of one of the emoji sets.](/images/XfnmYyX.png)

**User must have the `MANAGE_SERVER` permission to use this command.*

## Suggestion Notes

A newly introduced feature as of December 2, 2018, you have the ability to add notes to a submitted suggestion. Notes can be used to not only notify the submitter of a suggestion about a change or improvement, but also notify the community as well.

![An example of a suggestion note](/images/iWsmKzx.png)

To add a note to a suggestion, simply retrieve the sID and do `note <sID> <note>` where the `note` can be any message you wish to choose. Upon adding a note, the submitter of the suggestion will receive a DM with that information:

![An example of a suggestion note in DM](/images/cGoggOj.png)

A new note can be added and it'll override the current note on the suggestion. However, all previous notes are saved and will be accessible in the future (TBD).