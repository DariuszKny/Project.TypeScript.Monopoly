import { Player } from "../models/player.model";
import { JAIL_FIELD } from "../constants/game-constants";

export const playerPassedStart = (player: Player): boolean => {
  if (player.playerIsJailed) return false;
  return player.playerPreviousPosition > player.playerCurrentPosition;
}

export const goToJail = (player: Player) => {
  player.playerIsJailed = true;
  player.playerCurrentPosition = JAIL_FIELD;
}