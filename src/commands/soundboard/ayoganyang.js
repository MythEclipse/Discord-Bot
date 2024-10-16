
module.exports = async (client, interaction, args) => {

    if (!interaction.member.voice.channel) return client.errNormal({ error: `You're not in a voice channel!`, type: 'editreply' }, interaction);

    if (interaction.guild.members.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.members.me.voice.channel.id) return client.errNormal({ error: `You are not in the same voice channel!`, type: 'editreply' }, interaction);

    client.soundboard(interaction.guild.id, interaction, "https://cdn.discordapp.com/attachments/1251868900665065543/1296082502007521363/ayo-ayo-ganyang-fufufafa-made-with-Voicemod.mp3?ex=6710fe64&is=670face4&hm=f91a5f6f2f7207d49636c9c626cf38e6540c0e0f3a5ff2c1d46101ea8c0eda06&");

    client.succNormal({ text: "Soundboard started! Playing **ayo ayo ganyang fufufafa**", type: 'editreply' }, interaction);
};