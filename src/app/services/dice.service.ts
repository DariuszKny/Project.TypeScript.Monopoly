import { Player } from "../models/player.model";

export function throwDice(currentPlayer: Player) {

    let dice = new Array<number>(3);

    dice[0] = Math.floor(Math.random() * 6) + 1;
    dice[1] = Math.floor(Math.random() * 6) + 1;
    dice[2] = dice[0] + dice[1];

    currentPlayer.canThrowDices = false;

    return dice;

}

export function doubleCheck(throwD: number[], currentPlayer: Player) {
  if (throwD[0] === throwD[1]) {
      currentPlayer.numberOfDoubles++;
      if (currentPlayer.numberOfDoubles <= 2) {
          currentPlayer.canThrowDices = true;
      }
  }
  else currentPlayer.numberOfDoubles = 0;
}