import { Player } from "../models/player.model";
import { throwDice } from "../models/dice.model"
import { SALARY_FOR_PASSIG_START } from "../models/prices"


export const moveWhenDicesRolled = (player: Player) => {
  const [, , sumOfThrownDices] = throwDice(player);
  if (player.playerAreDiceRolled) {
    player.move(sumOfThrownDices);

    if (playerPassedGO(player)) {
      player.takeMoney(SALARY_FOR_PASSIG_START); 
    }
  }
}


const playerPassedGO = (player: Player): boolean => {
  if (player.playerIsJailed) return false;
  return player.playerPreviousPosition > player.playerCurrentPosition;
}

