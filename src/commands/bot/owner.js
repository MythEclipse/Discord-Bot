const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `MythEclipse`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</MythEclipse>#6294`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `VoidWalker`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://asepharyana.cloud](https://asepharyana.cloud)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 