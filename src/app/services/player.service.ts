import { Player } from "../models/player.model";
import { throwDice } from "../models/dice.model"

export const movePlayer = (player: Player) => {
  const [,,sumOfThrownDices] = throwDice(player); 
  if(player.playerAreDiceRolled) {
    player.playerPosition = (player.playerPosition + sumOfThrownDices) % 40; 
  }
}
