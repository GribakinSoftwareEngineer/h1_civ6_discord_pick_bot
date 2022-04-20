const { MessageActionRow, MessageButton } = require('discord.js');

const { Lobby } = require("./Lobby.js");

class GameDispatcher{
    constructor(startId) {
        this.__gameId = startId;
        this.__channel = null;
        this.__lobbys = {};
        this.__players = {};
        this.__msgId = null;
        this.btnHandlers = {
            "s_new_ffa8": this.ffa8Handler.bind(this),
            "s_new_ffa10": this.ffa10Handler.bind(this),
        }
    }

    set setChannel(value){
        this.__channel = value.client.channels.cache.get(value.channelID);
    }

    async enterHandler(interaction){
        if(!this.__players.hasOwnProperty(interaction.user.id.toString())){
            let gameId = interaction.customId.split("_")[2];
            await this.__lobbys[interaction.customId.split("_")[2]].addPlayer(interaction.user.id.toString(), {
                "nickname": interaction.user.username,
                "avatar_url": interaction.user.avatarURL()
            });
            this.__players[interaction.user.id.toString()] = gameId;
        }
    }

    async leaveHandler(interaction){
        if(this.__players.hasOwnProperty(interaction.user.id.toString())){
            let gameId = interaction.customId.split("_")[2];
            await this.__lobbys[gameId].delPlayer(interaction.user.id.toString());
            if(await this.__lobbys[gameId].count===0){
                await this.__lobbys[gameId].dtor();
                delete this.__lobbys[gameId];
            }
            delete this.__players[interaction.user.id.toString()];
        }
    }

    async ffa8Handler(interaction){
        await this.__addLobby(8, interaction);
    }

    async ffa10Handler(interaction){
        await this.__addLobby(10, interaction);
    }

    async __addLobby(size, interaction){
        if(!this.__players.hasOwnProperty(interaction.user.id.toString())) {
            let creator = {};
            creator[interaction.user.id.toString()] = {
                "nickname": interaction.user.username,
                "avatar_url": interaction.user.avatarURL()
            };
            this.__lobbys[this.__gameId.toString()] = new Lobby(size, this.__channel, this.__gameId, creator);
            this.__players[interaction.user.id.toString()] = this.__gameId;
            this.__gameId++;
            await this.render();
        }
    }

    async __clearAll(){
        for(const lobby in this.__lobbys){
            await this.__lobbys[lobby].drop();
        }
    }

    async render(){
        if(this.__channel){
            await this.__clearAll();
            for(const lobby in this.__lobbys){
                await this.__lobbys[lobby].render();
            }
            if(this.__msgId){
                (await this.__channel.messages.fetch(this.__msgId)).delete();
            }
            const row = new MessageActionRow();
            row.addComponents(new MessageButton().setCustomId('s_new_ffa8').setLabel('FFA8').setStyle('PRIMARY'));
            row.addComponents(new MessageButton().setCustomId(`s_new_ffa10`).setLabel('FFA10').setStyle('PRIMARY'));
            const msg = await this.__channel.send({ content: 'New Game', components: [row] });
            this.__msgId =msg.id;
        }
    }
}

module.exports = { GameDispatcher };