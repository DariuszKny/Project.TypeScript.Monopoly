import { Player } from "../models/player.model";
import { playerRolledDiceMessage } from "./messasges.service";

const images = require("../../../images/dice/*.png");

export function showThrowResults(dice: number[], currentPlayer: Player) {

    const die1 = document.querySelector<HTMLImageElement>("#die1")!;
    const die2 = document.querySelector<HTMLImageElement>("#die2")!;
    const info = document.querySelector<HTMLElement>(".message-container")!;

    die1.src = images[`DICEROLL${dice[0]}`];
    die2.src = images[`DICEROLL${dice[1]}`];

    const p = document.createElement("p");
    const node = document.createTextNode(`${currentPlayer.playerName} has rolled ${dice[0]} and ${dice[1]}`)
    p.appendChild(node);
}

export const logMessage = (message: string): void => {
  const messageContainer = document.querySelector<HTMLElement>(".message-container")!;
  const newParagraph = document.createElement("p");
  const newMessage = document.createTextNode(message);
  newParagraph.appendChild(newMessage);
  messageContainer.insertBefore(newParagraph, messageContainer.firstChild);
}