import { doubleCheck } from "./controllers/double-check.controller";
import { movePlayer } from "./controllers/move.controller";
import { newRound } from "./controllers/new-round.controller";
import { throwDice } from "./models/dice.model";
import { Player } from "./models/player.model";
import { showThrowResults } from "./services/info-board.service";
import {GameController} from "./controllers/game.controller"

class App {
    _init() {
        console.log('start');
        const gameController = GameController;


        const playBtn = document.querySelector(".btn-main")!;
        const landingPage = document.querySelector<HTMLElement>(".landingPage")!;
        const gameContainer = document.querySelector(".game-container")!;
        const roll = document.querySelector<HTMLElement>("#roll")!;
        const fields = document.querySelectorAll<HTMLElement>(".field");

        let currentPlayer = 0;
        let players: Player[];

        playBtn.addEventListener('click', () => {
            landingPage.style.display = "none";
        })

        var player1 = new Player("Adam", true); // temporary, TODO players array and current player variable
        var player2 = new Player("Tomek", true); // temporary, TODO players array and current player variable
        var player3 = new Player("Wojtek", true); // temporary, TODO players array and current player variable
        var player4 = new Player("Zbyszek", true); // temporary, TODO players array and current player variable
        players = [player1, player2, player3, player4];

        roll.addEventListener('click', () => {
            
            let dice = throwDice(players[currentPlayer]);
            doubleCheck(dice, players[currentPlayer]);
            showThrowResults(dice, players[currentPlayer]);

            // if (player1.playerDouble == 3) {
            //         player1.playerCurrentPosition = 11;
            //         // movePlayer(currentPlayer); TODO
            //         // newRound(); TODO
            // }

            // if (player1.playerDouble > 0) {
            //     // movePlayer(dice); TODO
            //     // buyCard(currentPlayer.playerPosition);   TODO
            // }

            movePlayer(dice[2], players[currentPlayer], currentPlayer);
            // buyCard(currentPlayer.playerPosition);   TODO
            currentPlayer = newRound(players, currentPlayer);
        })
    }
}

export default App;
