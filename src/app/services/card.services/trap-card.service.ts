import { Player } from "../../models/player.model";
import { TRAP_TAX } from "../../constants/prices";
import { PLAYER_ATTACKED_STEPS, PLAYER_IS_CHASED_STEPS } from "../../constants/game-constants";

export const loseMoneyAndMoveBackward = (player: Player) => {
  player.giveMoney(TRAP_TAX);
  player.move(PLAYER_IS_CHASED_STEPS);
}

export const loseMoneyAndMoveForward = (player: Player) => {
  player.giveMoney(TRAP_TAX);
  player.move(PLAYER_ATTACKED_STEPS);
}