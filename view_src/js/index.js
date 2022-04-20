import "@/styles/players_view.css"
import "@/styles/player_view.css"

import * as playersView from "@/templates/players_view.handlebars";
import * as playerView from "@/templates/player_view.handlebars";

function createFfa8PickView(players){
    let _players = [];
    for(const player of players) {
        _players.push(playerView({
            "player_view_margin": "0.7%",
            "player_view_flex_basis": "23.6%",
            "player_view_box_shadow": "0 0 2vw green",
            "player_view_border": "0.4vw solid green",
            "player_view_avatar_background": `url(${player["avatar_url"]}) no-repeat transparent`,
            "player_view_avatar_background-size": "100%",
            "player_view_avatar_box_shadow": "0 0 10vw green",
            "player_view_avatar_border": "0.2vw solid green",
            "player_view_avatar_text": "",
            "player_view_nickname_wrapper_background": "linear-gradient(rgba(0,128,0,1) 50%, rgba(0,0,0,0))",
            "nickname": player["nickname"]
        }));
    }
    let freeSlots = _players.length;
    for(let i = 0; i < 8 - freeSlots; i++ ){
        _players.push(playerView({
            "player_view_margin": "0.7%",
            "player_view_flex_basis": "23.6%",
            "player_view_box_shadow": "0 0 2vw red",
            "player_view_border": "0.4vw solid red",
            "player_view_avatar_background": "rgba(255,0,0,0.3)",
            "player_view_avatar_background-size": "100%",
            "player_view_avatar_box_shadow": "0 0 10vw red",
            "player_view_avatar_border": "0.2vw solid red",
            "player_view_avatar_text": "?",
            "player_view_nickname_wrapper_background": "linear-gradient(rgba(255,0,0,1) 50%, rgba(0,0,0,0))",
            "nickname": "FREE_SLOT"
        }));
    }
    return playersView({
        "players": _players,
        "text_shadow": "0 0 2vw red",
        "font_size_vw": "10.6vw",
        "text_align": "center",
        "info_text": "Waiting for Players"
    });
}

function createFfa10PickView(players){
    let _players = [];
    for(const player of players) {
        _players.push(playerView({
            "player_view_margin": "0.7%",
            "player_view_flex_basis": "18.6%",
            "player_view_box_shadow": "0 0 2vw green",
            "player_view_border": "0.4vw solid green",
            "player_view_avatar_background": `url(${player["avatar_url"]}) no-repeat transparent`,
            "player_view_avatar_background-size": "100%",
            "player_view_avatar_box_shadow": "0 0 10vw green",
            "player_view_avatar_border": "0.2vw solid green",
            "player_view_avatar_text": "",
            "player_view_nickname_wrapper_background": "linear-gradient(rgba(0,128,0,1) 50%, rgba(0,0,0,0))",
            "nickname": player["nickname"]
        }));
    }
    let freeSlots = _players.length;
    for(let i = 0; i < 10 - freeSlots; i++ ){
        _players.push(playerView({
            "player_view_margin": "0.7%",
            "player_view_flex_basis": "18.6%",
            "player_view_box_shadow": "0 0 2vw red",
            "player_view_border": "0.4vw solid red",
            "player_view_avatar_background": "rgba(255,0,0,0.3)",
            "player_view_avatar_background-size": "100%",
            "player_view_avatar_box_shadow": "0 0 10vw red",
            "player_view_avatar_border": "0.2vw solid red",
            "player_view_avatar_text": "?",
            "player_view_nickname_wrapper_background": "linear-gradient(rgba(255,0,0,1) 50%, rgba(0,0,0,0))",
            "nickname": "FREE_SLOT"
        }));
    }
    return playersView({
        "players": _players,
        "text_shadow": "0 0 2vw red",
        "font_size_vw": "10.6vw",
        "text_align": "center",
        "info_text": "Waiting for Players"
    });
}

(function main(){
    document.getElementById("btn-game-info").addEventListener("click", () => {
        let input = document.getElementById("input-game-info");
        let gameInfo = JSON.parse(input.value);
        if(gameInfo["type"]===8){
            document.getElementById("content").innerHTML = createFfa8PickView(gameInfo["players"]);
        }
        else if(gameInfo["type"]===10){
            document.getElementById("content").innerHTML = createFfa10PickView(gameInfo["players"]);
        }
        input.value = "";
    })
})()