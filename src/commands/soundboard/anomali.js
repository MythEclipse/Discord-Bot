
module.exports = async (client, interaction, args) => {

    if (!interaction.member.voice.channel) return client.errNormal({ error: `You're not in a voice channel!`, type: 'editreply' }, interaction);

    if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return client.errNormal({ error: `You are not in the same voice channel!`, type: 'editreply' }, interaction);

    client.soundboard(interaction.guild.id, interaction, "https://raw.githubusercontent.com/MythEclipse/hahahhahahhahahah/refs/heads/main/soundboard/WhatsApp%20Audio%202024-10-21%20at%2020.47.49_0a0da20f.mp3");

    client.succNormal({ text: "Soundboard started! Playing **Anomali**", type: 'editreply' }, interaction);
};