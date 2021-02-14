import { Player } from "../models/player.model";
import { playerRolledDiceMessage } from "./messasges.service";

const images = require("../../../images/dice/*.png");

export function showThrowResults(dice: number[], currentPlayer: Player) {
    const die1 = document.querySelector<HTMLImageElement>("#die1")!;
    const die2 = document.querySelector<HTMLImageElement>("#die2")!;

    die1.src = images[`DICEROLL${dice[0]}`];
    die2.src = images[`DICEROLL${dice[1]}`];

    logMessage(playerRolledDiceMessage(currentPlayer, dice));
}

export const logMessage = (message: string): void => {
  const messageContainer = document.querySelector<HTMLElement>(".message-container")!;
  const newParagraph = document.createElement("p");
  const newMessage = document.createTextNode(message);
  newParagraph.appendChild(newMessage);
  messageContainer.insertBefore(newParagraph, messageContainer.firstChild);
}