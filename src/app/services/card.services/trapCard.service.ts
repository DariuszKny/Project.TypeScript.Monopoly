import { Player } from '../../models/player.model';
import { playerLosesMoney } from './sharedCard.service';
import { Messages, logMessage } from '../messasges.service';
import { TRAP_TAX } from '../../constants/prices';
import { PLAYER_IS_ATTACKED_STEPS, PLAYER_IS_CHASED_STEPS } from '../../constants/gameConstants';

export const loseMoneyAndMoveBackward = (player: Player): void => {
  loseMoneyAndMove(player, TRAP_TAX, PLAYER_IS_CHASED_STEPS);
};

export const loseMoneyAndMoveForward = (player: Player): void => {
  loseMoneyAndMove(player, TRAP_TAX, PLAYER_IS_ATTACKED_STEPS);
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
