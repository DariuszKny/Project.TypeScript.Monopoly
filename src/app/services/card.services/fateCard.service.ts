import { Player } from "../../models/player.model";
import { goToJail } from "./baseCard.service";
import { playerGetsMoney, playerLosesMoney } from "./sharedCard.service";
import { BAD_OR_GOOD_SALARY, BONUS_SALARY } from "../../constants/prices";

export const badChampionEarn = (player: Player): void => {
  if(player.isGoodChampion) playerLosesMoney(player, BAD_OR_GOOD_SALARY);
  else playerGetsMoney(player, BAD_OR_GOOD_SALARY);
}

export const goodChampionEarn = (player: Player): void => {
  if(player.isGoodChampion) playerGetsMoney(player, BAD_OR_GOOD_SALARY);
  else playerLosesMoney(player, BAD_OR_GOOD_SALARY);
} 

export const earnAndSendSomeoneToJail = (player: Player, chosenPlayer: Player): void => {
  playerGetsMoney(player, BONUS_SALARY);
  goToJail(chosenPlayer);  
}