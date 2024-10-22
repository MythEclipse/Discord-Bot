
module.exports = async (client, interaction, args) => {

    if (!interaction.member.voice.channel) return client.errNormal({ error: `You're not in a voice channel!`, type: 'editreply' }, interaction);

    if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return client.errNormal({ error: `You are not in the same voice channel!`, type: 'editreply' }, interaction);

    client.soundboard(interaction.guild.id, interaction, "https://raw.githubusercontent.com/MythEclipse/hahahhahahhahahah/refs/heads/main/soundboard/fury-indonesia%2C-solid-solid-solid!!-made-with-Voicemod.mp3");

    client.succNormal({ text: "Soundboard started! Playing **Furry Indonesia**", type: 'editreply' }, interaction);
};