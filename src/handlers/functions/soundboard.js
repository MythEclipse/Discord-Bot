const Discord = require('discord.js');
const { AudioPlayerStatus, createAudioResource, createAudioPlayer, NoSubscriberBehavior, joinVoiceChannel, StreamType, VoiceConnectionStatus } = require('@discordjs/voice');

var servers = {}

module.exports = (client) => {

    client.soundboard = async function (guild, interaction, url) {
        if (!servers[guild]) servers[guild] = {
            queue: []
        }

        var server = servers[guild];
        server.queue.push(url);

        const player = createAudioPlayer();

        const channel = interaction.member.voice.channel;
        if (!channel) return interaction.reply({ content: "You must be in a voice channel!", ephemeral: true });

        const connection = await client.connectToChannel(channel);

        // Logging the connection state
        connection.on(VoiceConnectionStatus.Ready, () => {
            console.log(`The bot has connected to ${channel.name}`);
        });

        connection.on(VoiceConnectionStatus.Disconnected, () => {
            console.log("Bot was disconnected from the voice channel.");
        });

        connection.subscribe(player);

        setTimeout(() => {
            if (channel.type == Discord.ChannelType.GuildStageVoice) {
                interaction.guild.members.me.voice.setSuppressed(false);
            }
        }, 3000)

        client.play(connection, interaction, guild, player);
    }

    client.play = async function (connection, interaction, guild, player) {
        var server = servers[guild];

        if (!server.queue[0]) {
            console.log("Queue is empty, nothing to play.");
            connection.destroy();
            return;
        }

        // Adding try-catch to handle errors during playback
        try {
            const resource = createAudioResource(server.queue[0], { inputType: StreamType.Arbitrary });
            player.play(resource);

            console.log(`Playing: ${server.queue[0]}`);

            server.queue.shift();

            // Handling the 'idle' event when the player finishes playing
            player.on(AudioPlayerStatus.Idle, () => {
                if (server.queue[0]) {
                    console.log("Playing next in queue.");
                    client.play(connection, interaction, guild, player);
                } else {
                    console.log("Queue finished, leaving the voice channel.");
                    connection.destroy();
                }
            });

            // Error handling for the player
            player.on('error', error => {
                console.error(`Error playing sound: ${error.message}`);
                connection.destroy();
            });

        } catch (error) {
            console.error(`Error: ${error.message}`);
            connection.destroy();
        }
    }
}
