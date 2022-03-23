import "@/styles/players_view.css"
import "@/styles/player_view.css"

import * as playersView from "@/templates/players_view.handlebars";
import * as playerView from "@/templates/player_view.handlebars";

(function main()
{})()

let players = [
    playerView({
        "player_view_margin": "0.7%",
        "player_view_flex_basis": "23.6%",
        "player_view_box_shadow": "0 0 2vw green",
        "player_view_border": "0.4vw solid green",
        "player_view_avatar_background": "url(https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png) no-repeat transparent",
        "player_view_avatar_background-size": "100%",
        "player_view_avatar_box_shadow": "0 0 10vw green",
        "player_view_avatar_border": "0.2vw solid green",
        "player_view_avatar_text": "",
        "player_view_nickname_wrapper_background": "linear-gradient(rgba(0,128,0,1) 50%, rgba(0,0,0,0))",
        "nickname": "test_1"
    }),
    playerView({
        "player_view_margin": "0.7%",
        "player_view_flex_basis": "23.6%",
        "player_view_box_shadow": "0 0 2vw green",
        "player_view_border": "0.4vw solid green",
        "player_view_avatar_background": "url(https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png) no-repeat transparent",
        "player_view_avatar_background-size": "100%",
        "player_view_avatar_box_shadow": "0 0 10vw green",
        "player_view_avatar_border": "0.2vw solid green",
        "player_view_avatar_text": "",
        "player_view_nickname_wrapper_background": "linear-gradient(rgba(0,128,0,1) 50%, rgba(0,0,0,0))",
        "nickname": "test_2"
    }),
    playerView({
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
    }),
]
document.getElementById("content").innerHTML = playersView({
    "players": players,
    "text_shadow": "0 0 2vw red",
    "font_size_vw": "10.6vw",
    "text_align": "center",
    "info_text": "Waiting for Players"
})