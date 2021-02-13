import { Player } from "../../models/player.model";
import { BAD_OR_GOOD_SALARY, BONUS_SALARY } from "../../constants/prices";

export const badChampionEarn = (player: Player): void => {
  if(player.goodChampion) player.giveMoney(BAD_OR_GOOD_SALARY);
  else player.takeMoney(BAD_OR_GOOD_SALARY);
}

export const goodChampionEarn = (player: Player): void => {
  if(player.goodChampion) player.takeMoney(BAD_OR_GOOD_SALARY);
  else player.giveMoney(BAD_OR_GOOD_SALARY);
}

export const earnAndSendSomeoneToJail = (player: Player): void => {
  player.takeMoney(BONUS_SALARY);
  //choose player (maybe at first would be better to send random one :D)
  //goToJail(chosenPlayer)
}