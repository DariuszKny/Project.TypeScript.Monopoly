import { Player } from "../../models/player.model";
import { priceMultiplier } from "./hobbit-card.service";

export const payMoneyToCardOwner = (player: Player, owner: Player, money: number): void  => {
  const moneyToPay = priceMultiplier(player)*money; 
  player.giveMoney(moneyToPay);
  owner.takeMoney(moneyToPay);
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