import { Player } from "../models/player.model";

export function addPawn(index: number) {

    enum colors {BLUE, GREEN, YELLOW, RED};

    const images = require('../../../images/pawns/*.png');
    const nextField = document.querySelector('#f0 > .pawns-container ')!;
    const newPawn = document.createElement('img');

    newPawn.src = images[colors[index]];
    newPawn.setAttribute('id', colors[index]);
    nextField.appendChild(newPawn)

}

export const movePawnOnBoard = function (player: Player) {
  const positonOnBoard: number = player.playerCurrentPosition;
  const images = require('../../../images/pawns/*.png');
  const nextField = document.querySelector(`#f${positonOnBoard} > .pawns-container `)!;
  const pawn = document.querySelector<HTMLElement>(`#${player.color}`)!;
  const newPawn = document.createElement('img');

  pawn.parentNode!.removeChild(pawn);
  newPawn.src = images[player.color];
  newPawn.setAttribute('id', player.color);
  if(nextField) {
    nextField.appendChild(newPawn)
  } else {
    console.log("NOT FOUND on field "+ positonOnBoard)
  }
}