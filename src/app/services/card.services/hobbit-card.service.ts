import { Player } from "../../models/player.model";
import { HobbitCard } from "../../models/card.models/hobbit-card.model";
import { playerOwnsCard, findCardOwner, payMoneyToCardOwner, numberOfOwnedCards } from "./shared-card.service";
import { HOBBIT_TAX } from "../../constants/prices";
import { HOBBIT_CARDS_IDS, LOWER_RENT_MULTIPLIER } from "../../constants/game-constants";

export const payHobbitTax = (player: Player, players: Player[], hobbit: HobbitCard): void => {
  if(hobbit.isObtainable) return;                                //if city wasnt bought by anyone
  if(playerOwnsCard(player, hobbit.id)) return;  
  let hobbitOwner = findCardOwner(players, hobbit.id);
  payMoneyToCardOwner(player, hobbitOwner, HOBBIT_TAX);
}

export const getPriceDiscount = (player: Player): number => {
  const numberOfOwnedHobbits = numberOfOwnedCards(player, HOBBIT_CARDS_IDS);
  return numberOfOwnedHobbits*LOWER_RENT_MULTIPLIER;
}