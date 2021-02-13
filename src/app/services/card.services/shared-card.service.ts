import { Player } from "../../models/player.model";
import { ObtainableCard } from "../../models/card.models/abstract-card.model";

export const payMoneyToCardOwner = (player: Player, owner: Player, money: number): void  => {
  player.giveMoney(money);
  owner.takeMoney(money);
}


export const findCardOwner = (players: Player[], cardId: number): Player => {
  let cardOwner!: Player;
  players.forEach((player) => {
    if(playerOwnsCard(player, cardId)) cardOwner = player;
  });
  return cardOwner;
}

export const numberOfOwnedCards = (player: Player, cards: number[]): number => {
  let numberOfOwnedCards: number = 0;
  for (let id of cards){
    if(playerOwnsCard(player, id)) numberOfOwnedCards++;
  }
  return numberOfOwnedCards;
}



export const playerOwnsCard = (player: Player, cardId: number): boolean => {
  return player.playerCards.includes(cardId)
}