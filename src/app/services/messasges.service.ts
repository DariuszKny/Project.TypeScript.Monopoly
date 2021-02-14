import { Player } from "../models/player.model";
import { ObtainableCard } from "../models/card.models/abstract-card.model";
import { PASSING_START_SALARY } from "../constants/prices";

export module Messages {

  export const playerRolledDice = (player: Player, dice: number[]): string => {
    const [firstDiceResult, secondDiceResult] = dice;
    if(firstDiceResult === secondDiceResult) return `${player.playerName} rolled a double of ${firstDiceResult}`;
    return `${player.playerName} rolled a ${firstDiceResult} and a ${secondDiceResult}`;
  }

  export const playerBoughtCard = (player: Player, card: ObtainableCard): string => {
    return `${player.playerName} bought ${card.name}`;
  }

  export const playerPaidMoneyToOwner = (player: Player, owner: Player, price: number, priceDiscount: number): string => {
    let optionalMessageContent: string = "";
    if(priceDiscount > 0) optionalMessageContent = `(with ${priceDiscount*100}% discount)`
    return `${player.playerName} paid ${price} to ${owner.playerName} ${optionalMessageContent}`;
  }

  export const playerPaidTax= (player: Player, tax: number): string => {
    return `${player.playerName} paid a ${tax} tax`;
  }

  export const playerGotMoney = (player: Player, money: number): string => {
    return `${player.playerName} got ${money}`;
  }

  export const playerLostMoney = (player: Player, money: number): string => {
    return `${player.playerName} lost ${money}`;
  }

  export const playerMoved = (player: Player, amount: number): string => {
    let direction: string = "forward";
    if(amount < 0) direction = "backward";
    return `${player.playerName} moved ${Math.abs(amount)} fields ${direction}`;
  }

  export const playerPassedStart = (player: Player): string => {
    return `${player.playerName} passed START and recieved ${PASSING_START_SALARY}`;
  }

  export const playerWentToJail = (player: Player): string => {
    return `${player.playerName} went to Jail and lost 2 turns`;
  }

  export const playerWentBankrupt = (player: Player): string => {
    return `${player.playerName} has gone bankrupt`;
  }

  export const playerWonTheGame = (player: Player): string => {
    return `${player.playerName} has won the game`;
  }
}