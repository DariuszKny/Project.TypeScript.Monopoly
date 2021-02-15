import { GameModel } from '../models/game.model';
import { Player } from '../models/player.model';
import { LeftMenuView } from '../views/leftMenu.view';
import { EndPageView } from '../views/endPage.view'
import { settings } from 'cluster';

export module TimerService {
  export const startTimer = function (
    time: number,
    game: GameModel,
    leftMenuView: LeftMenuView,
    endPageView: EndPageView,
  ) {
    leftMenuView.time.innerHTML = `${time}`;
    console.log('TIMER STARTED');
    console.log(time);
    let timer = setInterval(function () {
      if (time != 0) {
        time = time - 1;
        showTime(time, leftMenuView);
      } else {
        endGame(game.players, endPageView);
        console.log('dupa')
        clearInterval(timer);
      }
    }, 1000);
  };

  const endGame = function (players: Player[], endPageView: EndPageView) {

    let top = 0;
    let winner = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].money > top) {
        top = players[i].money;
        winner[0] = players[i];
        console.log('end!')
      }
    };
    
    const game = document.querySelector<HTMLElement>('.game-container')!.style.display = 'none';
    const images = require('../../../images/ending/*.jpg');

    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = `${winner[0].name}<br>has defeated all enemies!`
    endPageView.winnerMessage.appendChild(newParagraph);
    endPageView.winnerMessage.style.display = 'flex';
    endPageView.winnerMessage.style.backgroundImage = 'url(' +images[winner[0].hero] +')';
  };

  const showTime = function (
    time: number,
    leftMenuView: LeftMenuView,
  ) {
    leftMenuView.time.innerHTML = `${time}`;
  };
}
