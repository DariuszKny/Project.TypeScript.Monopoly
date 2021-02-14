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

    }
}

export default App;
