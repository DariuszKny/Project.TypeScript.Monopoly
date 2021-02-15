import { Player } from '../../models/player.model';
import { GameModel } from "../../models/game.model";
import { playerLosesMoney } from './sharedCard.service';
import { Messages, logMessage } from '../messasges.service';
import { TRAP_TAX } from '../../constants/prices';
import { PLAYER_IS_ATTACKED_STEPS, PLAYER_IS_CHASED_STEPS } from '../../constants/gameConstants';

export const loseMoneyAndMoveBackward = (game: GameModel): void => {
  const player = game.activePlayer;
  loseMoneyAndMove(player, TRAP_TAX, PLAYER_IS_ATTACKED_STEPS);
};

export const loseMoneyAndMoveForward = (game: GameModel): void => {
  const player = game.activePlayer;
  loseMoneyAndMove(player, TRAP_TAX, PLAYER_IS_CHASED_STEPS);
};

const loseMoneyAndMove = (
  player: Player,
  money: number,
  fieldsToMove: number,
): void => {
  playerLosesMoney(player, money);
  player.moveNumberOfFields(fieldsToMove);
  logMessage(Messages.playerMoved(player, fieldsToMove));
};
