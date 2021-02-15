import { Player } from '../../models/player.model';
import { Messages, logMessage } from '../messasges.service';
import {
  JAIL_FIELD,
  START_FIELD,
} from '../../constants/gameConstants';
import { PASSING_START_SALARY } from '../../constants/prices';

export const playerPassedStart = (player: Player): void => {
  if (player.isJailed) return;
  if (
    player.currentPosition > START_FIELD &&
    player.previousPosition > player.currentPosition
  ) {
    player.takeMoney(PASSING_START_SALARY);
    logMessage(Messages.playerPassedStart(player));
  }
};

export const goToJail = (player: Player): void => {
  player.isJailed = true;
  player.blockedTurns = 2;
  player.moveToField(JAIL_FIELD);
  logMessage(Messages.playerWentToJail(player));
};
