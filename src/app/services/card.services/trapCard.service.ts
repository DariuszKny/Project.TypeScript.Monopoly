import { Player } from '../../models/player.model';
import { GameModel } from "../../models/game.model";
import { playerLosesMoney } from './sharedCard.service';
import { Messages, logMessage } from '../messasges.service';
import { TRAP_TAX } from '../../constants/prices';
import { PLAYER_IS_ATTACKED_STEPS, PLAYER_IS_CHASED_STEPS } from '../../constants/gameConstants';

export const loseMoneyAndMoveBackward = (game: GameModel): void => {
  const player = game.activePlayer;
  playerLosesMoney(player, TRAP_TAX);
  const field = player.currentPosition + PLAYER_IS_ATTACKED_STEPS;
  player.moveToField(field);    //this method has to be used insted of moveNumberOfField, because it doesnt check passing Start(prev>curr) 
  logMessage(Messages.playerWasAttacked(player));
};

export const loseMoneyAndMoveForward = (game: GameModel): void => {
  const player = game.activePlayer;
  playerLosesMoney(player, TRAP_TAX);
  player.moveNumberOfFields(PLAYER_IS_CHASED_STEPS);
  logMessage(Messages.playerWasChased(player));
  
};

