import {Player} from "../models/player.model";
import {GameModel} from "../models/game.model";
import {RightMenuView} from "../views/rightMenu.view";


export module PlayerService {

    export let createPlayers = function () {
        return [
            new Player(0,"PLayer1",true),
            new Player(1,"PLayer2",true),
            new Player(2,"PLayer3",true),
            new Player(3,"PLayer4",true)
        ]
    }

    export let changeActivePlayer = function (game: GameModel,rightMenuView: RightMenuView) {
        console.log("LastPlayer"+ game.activePlayer.id)
        let currentPlayer = game.activePlayer;
        if (currentPlayer.id == game.players.length-1 ) {
            game.activePlayer = game.players[0];
        } else {
            game.activePlayer = game.players[currentPlayer.id+1]
        }
        console.log("NewPlayer"+ game.activePlayer.id)
        game.activePlayer.playerDouble = 0;
        showActivePlayer(rightMenuView,game)
    }

    let showActivePlayer = function (rightMenuView: RightMenuView, game: GameModel) {
        rightMenuView.fields.forEach(field => {
            field.classList.remove('player-active')
            if(parseInt(field.id.slice(1))==game.activePlayer.id) {
                field.classList.toggle('player-active')
            }
        })
    }





}