import {GameModel} from "../models/game.model";
import {LeftMenuView} from "../views/leftMenu.view";


export module TimerService {

    export const startTimer =  function (time: number, game: GameModel, leftMenuView: LeftMenuView) {
        leftMenuView.time.innerHTML = `${time}`;
        console.log("TIMER STARTED")
        console.log(time)
            setInterval(function () {
                if (time!=0){
                    time = time - 1
                    showTime(time,leftMenuView)
                } else {
                    endGame(game);
                }
            }, 1000)
    }

     const endGame = function (game: GameModel) {
        game.isEnded = true;
    }

    const showTime = function (time: number, leftMenuView: LeftMenuView) {
        leftMenuView.time.innerHTML = `${time}`;
    }

}