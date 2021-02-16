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
import { logMessage, Messages } from '../messasges.service';

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

//for now currentPlayer earns money and someone is sent to jail
export const earnAndSendSomeoneToJail = (game: GameModel): void => {
  const currentPlayer = game.activePlayer;
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  playerGetsMoney(currentPlayer, BONUS_SALARY);
  const otherPlayers = game.players.filter(player => player.id !== currentPlayer.id);
  const randomlySelectedPlayer = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
  logMessage(Messages.playerSentToJail(currentPlayer, randomlySelectedPlayer));
  goToJail(randomlySelectedPlayer);
};
