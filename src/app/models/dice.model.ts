import { Player } from "./player.model";

export function throwDice(currentPlayer: Player) {

    let dice = new Array<number>(3);

    dice[0] = Math.floor(Math.random() * 6) + 1;
    dice[1] = Math.floor(Math.random() * 6) + 1;
    dice[2] = dice[0] + dice[1];

    currentPlayer.playerAreDiceRolled = true;

    return dice;

}