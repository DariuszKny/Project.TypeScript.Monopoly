import { Player } from "../../models/player.model";
import { getPriceDiscount } from "./hobbitCard.service";
import { Messages, logMessage } from "../messasges.service";

export const payMoneyToCardOwner = (player: Player, owner: Player, money: number): void  => {
  const priceDiscount = getPriceDiscount(player);
  const moneyToPay = Math.round(money - priceDiscount*money); 
  player.giveMoney(moneyToPay);
  owner.takeMoney(moneyToPay);
  logMessage(Messages.playerPaidMoneyToOwner(player, owner, money, priceDiscount));
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

export const playerLosesMoney = (player: Player, money: number): void => {
  player.giveMoney(money);
  logMessage(Messages.playerLostMoney(player, money));
}

export const playerGetsMoney = (player: Player, money: number): void => {
  player.takeMoney(money);
  logMessage(Messages.playerGotMoney(player, money));
}