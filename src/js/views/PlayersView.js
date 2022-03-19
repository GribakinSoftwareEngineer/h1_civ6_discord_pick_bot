import * as playersView from "@/templates/players_view.handlebars";

import { PlayerView } from "@/js/views/PlayerView.js";

class PlayersView {
    constructor() {
        this.params = {
            "players": [],
            "text_shadow": "0 0 2vw red",
            "font_size_vw": "10.6vw",
            "text_align": "center",
            "info_text": ""
        };
        this.items = {};
    }
    setState(state, playerId) {
        if(this.items[playerId]){
            this.items[playerId].setState(state);
        }
    }
    setPlayer(avatarUrl, nickname, playerId) {}
    setInfo(text, size, color, align) {}
    render() {
        let players = []
        for (const key in this.items) {
            players.push(this.items["key"]);
        }
        this.params["players"] = players;
        return playersView(this.params)
    }
}