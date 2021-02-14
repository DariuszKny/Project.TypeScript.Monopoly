export function addPawn(index: number) {

    enum colors {BLUE, GREEN, YELLOW, RED};

    const images = require('../../../images/pawns/*.png');
    const nextField = document.querySelector('#f0 > .pawns-container ')!;
    const newPawn = document.createElement('img');

    newPawn.src = images[colors[index]];
    newPawn.setAttribute('id', colors[index]);
    nextField.appendChild(newPawn)

}