import { Player } from '../../models/player.model';
import { GameModel } from "../../models/game.model";
import { goToJail } from './baseCard.service';
import {
  playerGetsMoney,
  playerLosesMoney,
} from './sharedCard.service';
import {
  BAD_OR_GOOD_SALARY,
  BONUS_SALARY,
} from '../../constants/prices';

export const badChampionEarn = (game: GameModel): void => {
  const player = game.activePlayer;
  if (player.isGoodChampion)
    playerLosesMoney(player, BAD_OR_GOOD_SALARY);
  else playerGetsMoney(player, BAD_OR_GOOD_SALARY);
};

export const goodChampionEarn = (game: GameModel): void => {
  const player = game.activePlayer;
  if (player.isGoodChampion)
    playerGetsMoney(player, BAD_OR_GOOD_SALARY);
  else playerLosesMoney(player, BAD_OR_GOOD_SALARY);
};

//for now currentPlayer earns money and goes to Jail
export const earnAndSendSomeoneToJail = (game: GameModel): void => {
  const player = game.activePlayer;
  playerGetsMoney(player, BONUS_SALARY);
  goToJail(game);
};
