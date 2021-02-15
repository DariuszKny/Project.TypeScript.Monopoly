import { Player } from "../models/player.model";

export function doubleCheck(throwD: number[], currentPlayer: Player) {
    if (throwD[0] === throwD[1]) {
        currentPlayer.playerDouble++;
        if (currentPlayer.playerDouble <= 2) {
            currentPlayer.playerCanThrowDices = true;
        }
    }
    else currentPlayer.playerDouble = 0;
}