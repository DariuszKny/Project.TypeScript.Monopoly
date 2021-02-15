import { ObtainableCard } from "../models/card.models/abstractCard.model";
import { GameModel } from "../models/game.model";

export const buyCard = (game: GameModel) => {
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if(currentCard instanceof ObtainableCard)
    game.activePlayer.cards.push(currentCard.id);
}