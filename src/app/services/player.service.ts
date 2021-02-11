import { Player } from "../models/player.model";
import { throwDice } from "../models/dice.model"

export const movePlayer = (player: Player) => {
  const [, , sumOfThrownDices] = throwDice(player);
  if (player.playerAreDiceRolled) {
    player.playerPreviousPosition = player.playerCurrentPosition;
    player.playerCurrentPosition = (player.playerCurrentPosition + sumOfThrownDices) % 40;

    if (playerPassedGO(player)) {
      //give 200 to player
    }
  }
}


const playerPassedGO = (player: Player): boolean => {
  if (player.playerIsJailed) return false;
  return player.playerPreviousPosition > player.playerCurrentPosition;
}

