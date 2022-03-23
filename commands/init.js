const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("init")
        .setDescription("Initialization of rating bot control channels"),
    async execute(interaction) {
        const category = await interaction.guild.channels.create("Play Ranked", {type: "GUILD_CATEGORY"});
        await (await interaction.guild.channels.create("waiting-room")).setParent(category);
        await (await interaction.guild.channels.create("help")).setParent(category);
        await interaction.reply('Init complete!');
    },
};