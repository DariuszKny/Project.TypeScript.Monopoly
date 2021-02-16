import { GameModel } from '../models/game.model';
import { Player } from '../models/player.model';
import { LeftMenuView } from '../views/leftMenu.view';
import { EndPageView } from '../views/endPage.view';
import {doc} from "prettier";

export module TimerService {
  export const startTimer = function (
    time: number,
    game: GameModel,
    leftMenuView: LeftMenuView,
    endPageView: EndPageView,
  ) {
    leftMenuView.time.innerHTML = `${time}`;
    let timer = setInterval(function () {
      if (time != 0) {
        time = time - 1;
        let hours = Math.floor(time/3600);
        let secondsLeft = time%3600;
        let minutes = Math.floor(secondsLeft/60);
        secondsLeft = secondsLeft%60;
        let timeLeft = [hours,minutes,secondsLeft]
          .map(v => v < 10 ? "0" + v : v)
          .filter((v,i) => v !== "00" || i > 0)
          .join(":");
        showTime(timeLeft, leftMenuView);
        endGameCash(game.players, endPageView);
      } else {
        endGameTime(game.players, endPageView);
        clearInterval(timer);
      }
    }, 1000);
  };

  const endGameTime = function (players: Player[], endPageView: EndPageView) {

    let top = 0;
    let winner = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].money > top) {
        top = players[i].money;
        winner[0] = players[i];
      }
    };

    endMessage(winner, endPageView);
  };

  const endGameCash = function (players: Player[], endPageView: EndPageView) {

    let counter = 0;
    let winner = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].money !== 0) {
        counter++;
        winner[0] = players[i];
      }
    }
      if (counter === 1) endMessage(winner, endPageView);
  };

  const endMessage = function(winner: Player[], endPageView: EndPageView): void {
    const game = document.querySelector<HTMLElement>('.game-container')!.style.display = 'none';
    const images = require('../../../images/ending/*.jpg');

    let newParagraph= document.getElementById("end-p")!;
    newParagraph.innerHTML = `${winner[0].name}` + `</br>` + `has defeated all enemies!`
    endPageView.winnerMessage.style.display = 'flex';
    endPageView.winnerMessage.style.backgroundImage = 'url(' +images[winner[0].hero] +')';
  };

  const showTime = function (
    time: string,
    leftMenuView: LeftMenuView,
  ) {
    leftMenuView.time.innerHTML = `${time}`;
  };
}
