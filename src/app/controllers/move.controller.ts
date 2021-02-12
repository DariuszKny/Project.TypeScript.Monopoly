import { Player } from "../models/player.model";

export function movePlayer(result: number, currentPlayer: Player, whichPlayer: number) {

    let color: string;
    let pos: number;

    switch(whichPlayer) {
        case 0:
            color = 'BLUE';
            break;
        case 1:
            color = 'GREEN';
            break;
        case 2:
            color = 'YELLOW';
            break;
        case 3:
            color = 'RED';
            break;
        default:
            color = 'GREEN';
    }

    if (currentPlayer.playerCurrentPosition + result > 39) {
        pos = result - (39 - currentPlayer.playerCurrentPosition)
    }
    else {
        pos = currentPlayer.playerCurrentPosition + result;
    }

    const images = require('../../../images/pawns/*.png');
    const nextField = document.querySelector(`#f${pos}`)!;
    const pawn = document.querySelector<HTMLElement>(`#${color}`)!;
    const newPawn = document.createElement('img');

    pawn.parentNode!.removeChild(pawn);
    newPawn.src = images[color];
    newPawn.setAttribute('id', color);
    nextField.appendChild(newPawn);
    currentPlayer.playerCurrentPosition = pos;
}