const { client, eventFiles } = require("./loader");

(async () => {
    for(const file of eventFiles){
        const event = require(`./events/${file}`);
        if(event.once){
            client.once(event.name, (...args) => event.execute(...args));
        }
        else{
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
    await client.login(process.env.DS_TOKEN);
})();