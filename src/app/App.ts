import { doubleCheck } from "./controllers/double-check.controller";
import { movePlayer } from "./controllers/move.controller";
import { newRound } from "./controllers/new-round.controller";
import { throwDice } from "./models/dice.model";
import { Player } from "./models/player.model";
import { showThrowResults } from "./services/info-board.service";
import {GameController} from "./controllers/game.controller"
import { addPawn } from "./services/add-pawn.service";

class App {
    _init() {
        console.log('start');
        const gameController = GameController;


        const playBtn = document.querySelector(".btn-main")!;
        const landingPage = document.querySelector<HTMLElement>(".landingPage")!;
        const gameContainer = document.querySelector<HTMLElement>(".game-container")!;
        const roll = document.querySelector<HTMLElement>("#roll")!;
        const startField = document.getElementsByClassName("pawns-container");
        const input = document.querySelectorAll<HTMLInputElement>("input");

        let currentPlayer = 0;
        let players: Player[]; 

        var dummyPlayer = new Player("Adam", true); // workaround for typerror players is undefined
        players = [dummyPlayer];

        playBtn.addEventListener('click', () => {
            landingPage.style.display = "none";
            gameContainer.style.display = "flex";
 
            for (let i=0; i < input.length; i++) {
                if (input[i].value) {
                    let newPlayer = new Player(input[i].value, true);
                    players[i] = newPlayer;
                    addPawn(i);
                }
            }
        })

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
