import * as playerView from "@/templates/player_view.handlebars";

class PlayerView{
    constructor(){
        this.params = {
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
        };
    }
    setState(state){
        if(state){
            this.params["player_view_box_shadow"] = "0 0 2vw green";
            this.params["player_view_border"] = "0.4vw solid green";
            this.params["player_view_avatar_box_shadow"] = "0 0 10vw green";
            this.params["player_view_avatar_border"] = "0.2vw solid green";
            this.params["player_view_nickname_wrapper_background"] = "linear-gradient(rgba(0,128,0,1) 50%, rgba(0,0,0,0))";
        }
        else{
            this.params["player_view_box_shadow"] = "0 0 2vw red";
            this.params["player_view_border"] = "0.4vw solid red";
            this.params["player_view_avatar_box_shadow"] = "0 0 10vw red";
            this.params["player_view_avatar_border"] = "0.2vw solid red";
            this.params["player_view_nickname_wrapper_background"] = "linear-gradient(rgba(255,0,0,1) 50%, rgba(0,0,0,0))";
        }
    }
    setSizeInPercent(size){
        this.params["player_view_flex_basis"] = `${size}%`;
    }
    setAvatarUrl(url){
        if(url === undefined){
            this.params["player_view_avatar_background"] = "url(https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png) no-repeat transparent";
            this.params["player_view_avatar_text"] = "";
        }
        else{
            this.params["player_view_avatar_text"] = "?";
        }
    }
    setNickname(text){
        this.params["nickname"] = text;
    }
    render(){
        return playerView(this.params);
    }
}

export { PlayerView };