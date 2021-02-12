import { Player } from "../models/player.model";

export const playerPassedStart = (player: Player): boolean => {
  if (player.playerIsJailed) return false;
  return player.playerPreviousPosition > player.playerCurrentPosition;
}