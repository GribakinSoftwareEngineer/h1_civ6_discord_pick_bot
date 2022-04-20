const {MessageActionRow, MessageButton, MessageAttachment} = require("discord.js");

const view = require("../utils/view.js");

class Lobby{
    constructor(size, channel, gameId, creator) {
        this.__players = creator;
        this.__gameId = gameId;
        this.__size = size;
        this.__msgId = null;
        this.__channel = channel;
    }

    async dtor(){
        await (await this.__channel.messages.fetch(this.__msgId)).delete();
    }

    get count(){
        return Object.keys(this.__players).length;
    }

    async addPlayer(playerId, playerInfo){
        this.__players[playerId] = playerInfo;
        await this.__edit();
    }

    async delPlayer(playerId){
        delete this.__players[playerId];
        await this.__edit();
    }

    async render(){
        const row = new MessageActionRow();
        row.addComponents(new MessageButton().setCustomId(`s_enter_${this.__gameId}`).setLabel('Enter').setStyle('SUCCESS'));
        row.addComponents(new MessageButton().setCustomId(`s_leave_${this.__gameId}`).setLabel('Leave').setStyle('DANGER'));
        let players = [];
        for(let player in this.__players){
            players.push(this.__players[player]);
        }
        const { createView } = await view;
        const attachment = new MessageAttachment(await createView(this.__size, players));
        const msg = await this.__channel.send({ content: `GAME: ${this.__gameId}`, files: [attachment], components: [row] });
        this.__msgId = msg.id;
    }

    async drop(){
        if(this.__msgId){
            (await this.__channel.messages.fetch(this.__msgId)).delete();
            this.__msgId = null;
        }
    }

    async __edit(){
        let players = [];
        for(let player in this.__players){
            players.push(this.__players[player]);
        }
        const { createView } = await view;
        const attachment = new MessageAttachment(await createView(this.__size, players));
        (await this.__channel.messages.fetch(this.__msgId)).edit({files: [attachment]});
    }
}

module.exports =  { Lobby };