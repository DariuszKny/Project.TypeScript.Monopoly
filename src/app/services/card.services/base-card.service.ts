import { Player } from "../../models/player.model";
import { JAIL_FIELD } from "../../constants/game-constants";
import { PASSING_START_SALARY } from "../../constants/prices";

export const playerPassedStart = (player: Player): void => {
  if (player.playerIsJailed) return;
  if(player.playerPreviousPosition > player.playerCurrentPosition) {
    player.takeMoney(PASSING_START_SALARY);
  }
}

export const goToJail = (player: Player): void => {
  player.playerIsJailed = true;
  player.playerBlockedTurns = 2;
  player.playerCurrentPosition = JAIL_FIELD;
}