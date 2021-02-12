import { Player } from "../models/player.model";
import { throwDice } from "../models/dice.model"
import { SALARY_FOR_PASSIG_START } from "../constants/prices"


export const moveWhenDicesRolled = (player: Player) => {
  const [, , sumOfThrownDices] = throwDice(player);
  if (player.playerAreDiceRolled) {
    player.move(sumOfThrownDices);

    if (playerPassedStart(player)) {
      player.takeMoney(SALARY_FOR_PASSIG_START); 
    }
  }
}

//suggestion: move this funtion to baseCard service (its connected with start_card(id=0))
const playerPassedStart = (player: Player): boolean => {
  if (player.playerIsJailed) return false;
  return player.playerPreviousPosition > player.playerCurrentPosition;
}

