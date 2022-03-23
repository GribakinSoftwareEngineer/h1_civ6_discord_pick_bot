const { client } = require("../loader");
const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = {
    name: 'guildCreate',
    once: true,
    execute(guild) {
        const commands = [];
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            commands.push(command.data.toJSON());
        }
        const rest = new REST({ version: '9' }).setToken(process.env.DS_TOKEN);
        rest.put(Routes.applicationGuildCommands(client.user.id, guild.id), { body: commands })
            .then()
            .catch();
    }
}