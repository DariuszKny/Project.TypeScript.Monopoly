import { Player } from "../../models/player.model";
import { Messages, logMessage } from "../messasges.service";
import { JAIL_FIELD } from "../../constants/game-constants";
import { PASSING_START_SALARY } from "../../constants/prices";

export const playerPassedStart = (player: Player): void => {
  if (player.playerIsJailed) return;
  if(player.playerCurrentPosition === 0 && player.playerPreviousPosition > player.playerCurrentPosition) {
    player.takeMoney(PASSING_START_SALARY);
    logMessage(Messages.playerPassedStart(player));
  }
}

export const goToJail = (player: Player): void => {
  player.playerIsJailed = true;
  player.playerBlockedTurns = 2;
  player.playerCurrentPosition = JAIL_FIELD;
  logMessage(Messages.playerWentToJail(player));
}