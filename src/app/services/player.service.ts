import {Player} from '../models/player.model';
import {GameModel} from '../models/game.model';
import {RightMenuView} from '../views/rightMenu.view';
import {Hero} from '../models/hero.enum';
import {logMessage, Messages} from "./messasges.service";

export module PlayerService {
    import playerLost = Messages.playerLost;
    export let createPlayers = function (
        settings: {
            players: {
                id: number;
                name: string;
                champ: Hero;
                isGood: boolean;
            }[];
            time: number;
        },
        game: GameModel,
    ) {
        for (let player in settings.players) {
            game.players.push(
                new Player(
                    settings.players[player].id,
                    settings.players[player].name,
                    settings.players[player].isGood,
                    settings.players[player].champ
                ),
            );

        }
        game.activePlayer = game.players[0];
    };

    export let changeActivePlayer = function (
        game: GameModel,
        rightMenuView: RightMenuView,
    ) {
        let currentPlayer = game.activePlayer;
        if (currentPlayer.id == game.players.length - 1) {
            game.activePlayer = game.players[0];
        } else {
            game.activePlayer = game.players[currentPlayer.id + 1];
        }
        game.activePlayer.numberOfDoubles = 0;
        if(game.activePlayer.money===0) {
            logMessage(playerLost(game.activePlayer))
            changeActivePlayer(game,rightMenuView)
        }
        showActivePlayer(rightMenuView, game);
    };

    let showActivePlayer = function (
        rightMenuView: RightMenuView,
        game: GameModel,
    ) {
        rightMenuView.fields.forEach((field) => {
            field.classList.remove('player-active');
            if (parseInt(field.id.slice(1)) == game.activePlayer.id) {
                field.classList.toggle('player-active');
            }
        });
    };
}
