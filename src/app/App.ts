import { doubleCheck } from "./controllers/double-check.controller";
import { throwDice } from "./models/dice.model";
import { Player } from "./models/player.model";

class App {
    _init() {
        console.log('start');

        const playBtn = document.querySelector(".btn-main")!;
        const landingPage = document.querySelector<HTMLElement>(".landingPage")!;
        const gameContainer = document.querySelector(".game-container")!;
        const throwButton = document.querySelector<HTMLElement>("#throwDice")!;
        const result = document.querySelector("#result");

        let currentPlayer;

        playBtn.addEventListener('click', () => {
            landingPage.style.display = "none";
        })

        var player1 = new Player("Adam"); // temporary, TODO players array and current player variable
        throwButton.addEventListener('click', () => {
            
            let dice = throwDice(player1);
            doubleCheck(dice, player1);
            // showResults() TODO write dice results to input #result

            if (player1.playerDouble == 3) {
                    player1.playerPosition = 11;
                    // movePlayer(currentPlayer); TODO
                    // newRound(); TODO
            }

            if (player1.playerDouble > 0) {
                // movePlayer(dice); TODO
                // buyCard(currentPlayer.playerPosition);   TODO
            }

            // movePlayer(dice); TODO
            // buyCard(currentPlayer.playerPosition);   TODO
            // newRound(currentPlayer); TODO
        })
    }
}

export default App;
