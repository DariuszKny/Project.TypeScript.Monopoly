import { Player } from "../models/player.model";

export function newRound(players: Player[], currentPlayer: number) : number {

    if (currentPlayer === players.length - 1) {
        currentPlayer = 0;
    }
    else currentPlayer++;

    players[currentPlayer].playerDouble = 0;

    return currentPlayer;
}