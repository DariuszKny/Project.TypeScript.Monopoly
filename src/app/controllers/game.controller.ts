import {LeftMenuView} from "../views/leftMenu.view"
import {LeftMenuService} from "../services/leftMenu.service"
import {RightMenuView} from "../views/rightMenu.view";
import {RightMenuService} from "../services/rightMenu.service";
import {GameModel} from "../models/game.model";
import {gameOptionModel} from "../models/gameOption.model";
import {MainBoardView} from "../views/mainBoard.view";
import {GameOptionView} from "../views/gameOption.view";
import {TimerService} from "../services/timer.service";
import {Player} from "../models/player.model";
import {addPawn} from "../services/add-pawn.service";
import {NavigationPagesView} from "../views/navigationPages.view";
import {PlayerService} from "../services/player.service";
import {playerMove, throwDiceAndMovePlayer} from "../services/game-board.service";
import {Disabler} from "../services/disabler.service";
import {goToJail} from "../services/card.services/base-card.service"

export module GameController {
    import disableEnable = Disabler.disableEnable;
    const leftMenuView = new LeftMenuView()
    const leftMenuService = LeftMenuService;
    const rightMenuService = RightMenuService;
    const rightMenuView = new RightMenuView();
    const mainBoardView = new MainBoardView();
    const gameOptionView = new GameOptionView();
    const timerService = TimerService;
    const navigationPages = new NavigationPagesView()
    const playerService = PlayerService

    const gameOption = new gameOptionModel()


    const game = new GameModel(gameOption.gameTime)

    leftMenuView.fields?.forEach(field => {
        field.addEventListener('click', function () {
            leftMenuService.showPreview(leftMenuView.preview, field)
        })
    });

    rightMenuView.fields?.forEach(player => {
        player.addEventListener('click', function () {
            rightMenuService.showCards(player, rightMenuView, leftMenuView.preview)
        })
    })

    mainBoardView.buttonNextPlayer.addEventListener('click',function () {
        playerService.changeActivePlayer(game,rightMenuView)
        disableEnable([mainBoardView.buttonNextPlayer],[mainBoardView.buttonRoll])
    })

    mainBoardView.buttonRoll.addEventListener('click',function () {
        playerMove(game);
        if(game.activePlayer.playerAreDiceRolled) disableEnable([mainBoardView.buttonRoll],[mainBoardView.buttonNextPlayer])
    })

    gameOptionView.buttonPlay?.addEventListener('click', function () {
        navigationPages.landingPage.style.display = "none";
        navigationPages.gameContainer.style.display = "flex";
        for (let player in game.players) {
            addPawn(game.players[player].id);
        }
        disableEnable([mainBoardView.buttonNextPlayer],[])
        timerService.startTimer(gameOption.gameTime, game, leftMenuView)
    })



}