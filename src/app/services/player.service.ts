import { Player } from "../models/player.model";
import { throwDice } from "../models/dice.model";
import { playerPassedStart } from "./base-card.service";
import { SALARY_FOR_PASSIG_START } from "../constants/prices";


export const moveWhenDicesRolled = (player: Player, dice: number[]) => {
  if (player.playerAreDiceRolled) {
    const [, , sumOfThrownDices] = dice;
    player.move(sumOfThrownDices);
    player.playerAreDiceRolled = false;

    if (playerPassedStart(player)) {
      player.takeMoney(SALARY_FOR_PASSIG_START); 
    } 
  }
}

