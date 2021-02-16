import { Player } from '../models/player.model';
import { ObtainableCard } from '../models/card.models/abstractCard.model';
import { PASSING_START_SALARY } from '../constants/prices';

export const logMessage = (message: string): void => {
  const messageContainer = document.querySelector<HTMLElement>(
    '.message-container',
  )!;
  const newParagraph = document.createElement('p');
  const newMessage = document.createTextNode(message);
  newParagraph.appendChild(newMessage);
  messageContainer.insertBefore(
    newParagraph,
    messageContainer.firstChild,
  );
};

export module Messages {
  export const playerRolledDice = (
    player: Player,
    dice: number[],
  ): string => {
    const [firstDiceResult, secondDiceResult] = dice;
    if (firstDiceResult === secondDiceResult)
      return `${player.name} rolled a double of ${firstDiceResult}`;
    return `${player.name} rolled a ${firstDiceResult} and a ${secondDiceResult}`;
  };

  export const playerCanBuyCard = (
    player: Player,
    card: ObtainableCard,
  ): string => {
    return `${player.name} can buy this card for ${card.price}$`;
  };

  export const playerBoughtCard = (
    player: Player,
    card: ObtainableCard,
  ): string => {
    return `${player.name} bought ${card.name}`;
  };

  export const playerPaidMoneyToOwner = (
    player: Player,
    owner: Player,
    price: number,
    priceDiscount: number,
  ): string => {
    let optionalMessageContent: string = '';
    if (priceDiscount > 0)
      optionalMessageContent = `(with ${
        priceDiscount * 100
      }% discount)`;
    return `${player.name} paid ${price}$ to ${owner.name} ${optionalMessageContent}`;
  };

  export const playerGotMoney = (
    player: Player,
    money: number,
  ): string => {
    return `${player.name} got ${money}$`;
  };

  export const playerLostMoney = (
    player: Player,
    money: number,
  ): string => {
    return `${player.name} lost ${money}$`;
  };

  export const playerMoved = (
    player: Player,
    amount: number,
  ): string => {
    let direction: string = 'forward';
    let plural: string = '';
    if (amount < 0) direction = 'backward';
    if (Math.abs(amount) > 1) plural = 's';
    return `${player.name} moved ${Math.abs(amount)} field${plural} ${direction}`;
  };

  export const playerPassedStart = (player: Player): string => {
    return `${player.name} passed START and recieved ${PASSING_START_SALARY}$`;
  };

  export const playerWentToJail = (player: Player): string => {
    return `${player.name} went to Jail and lose 2 turns`;
  };

  export const playerGotOutOfJail = (player: Player): string => {
    return `${player.name} got out of Jail`;
  }

  export const playerInJail = (player: Player): string => {
    let plural: string = '';
    if (player.blockedTurns > 1) plural = 's';
    return `${player.name} is in Jail, has to wait ${player.blockedTurns} turn${plural}`;
  };


  export const playerWentBankrupt = (player: Player): string => {
    return `${player.name} has gone bankrupt`;
  };

  export const playerWonTheGame = (player: Player): string => {
    return `${player.name} has won the game`;
  };

}

