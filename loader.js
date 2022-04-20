const fs = require("node:fs");

const {Client, Collection, Intents} = require("discord.js");
require('dotenv').config();

const { GameDispatcher } = require("./GameDispatcher/GameDispatcher.js");

const client = new Client({intents: [Intents.FLAGS.GUILDS]});
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.gameDispatcher = new GameDispatcher(0);
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

module.exports =  { client, eventFiles };