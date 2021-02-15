import { Player } from '../../models/player.model';
import { GameModel } from "../../models/game.model";
import { HobbitCard } from '../../models/card.models/hobbitCard.model';
import {
  playerOwnsCard,
  findCardOwner,
  payMoneyToCardOwner,
  numberOfOwnedCards,
} from './sharedCard.service';
import { HOBBIT_TAX } from '../../constants/prices';
import {
  HOBBIT_CARDS_IDS,
  LOWER_RENT_MULTIPLIER,
} from '../../constants/gameConstants';

export const payHobbitTax = (game: GameModel): void => {
  const player = game.activePlayer;
  const players = game.players;
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if(currentCard instanceof HobbitCard){
    const hobbit = currentCard;
  if (hobbit.isObtainable) return; //if city wasnt bought by anyone
  if (playerOwnsCard(player, hobbit.id)) return;
  let hobbitOwner = findCardOwner(players, hobbit.id);
  payMoneyToCardOwner(player, hobbitOwner, HOBBIT_TAX);
  }
};

export const getPriceDiscount = (player: Player): number => {
  const numberOfOwnedHobbits = numberOfOwnedCards(
    player,
    HOBBIT_CARDS_IDS,
  );
  return numberOfOwnedHobbits * LOWER_RENT_MULTIPLIER;
};
