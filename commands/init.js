const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("init")
        .setDescription("Initialization of rating bot control channels"),
    async execute(interaction) {
        await interaction.reply('In progress...');
        const category = await interaction.guild.channels.create("Play Ranked", {type: "GUILD_CATEGORY"});
        const waitingRoom = await interaction.guild.channels.create("waiting-room");
        await waitingRoom.setParent(category);
        await (await interaction.guild.channels.create("help")).setParent(category);
        await interaction.editReply('Init complete!');
        const gameDispatcher = interaction.client.gameDispatcher;
        gameDispatcher.setChannel = {"channelID": waitingRoom.id, "client": interaction.client};
        await gameDispatcher.render();
    },
};