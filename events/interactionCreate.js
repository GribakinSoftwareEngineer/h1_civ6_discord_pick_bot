module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction){
        if (interaction.isButton()){
            if(interaction.customId.startsWith("s_new")){
                await interaction.update({});
                await interaction.client.gameDispatcher.btnHandlers[interaction.customId](interaction);
                return;
            }
            else if(interaction.customId.startsWith("s_enter")){
                await interaction.update({});
                await interaction.client.gameDispatcher.enterHandler(interaction);
                return;
            }
            else if(interaction.customId.startsWith("s_leave")){
                await interaction.update({});
                await interaction.client.gameDispatcher.leaveHandler(interaction);
                return;
            }
        }
        if (interaction.isCommand()){
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) return;
            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
            }
        }
    }
}