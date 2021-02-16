import { LeftMenuView } from '../views/leftMenu.view';
import { LeftMenuService } from '../services/leftMenu.service';
import { RightMenuView } from '../views/rightMenu.view';
import { RightMenuService } from '../services/rightMenu.service';
import { GameModel } from '../models/game.model';
import { gameOptionModel } from '../models/gameOption.model';
import { MainBoardView } from '../views/mainBoard.view';
import { GameOptionView } from '../views/gameOption.view';
import { TimerService } from '../services/timer.service';
import { addPawn } from '../services/pawn.service';
import { NavigationPagesView } from '../views/navigationPages.view';
import { PlayerService } from '../services/player.service';
import {gameBoard, playerMove} from '../services/gameBoard.service';
import { Disabler } from '../services/disabler.service';
import { SettingsController } from './settings.controller';
import { buyCard, canPlayerBuyCard, canPlayerBuyHouse, cardActions} from "../services/gameManager.service";
import { ObtainableCard } from "../models/card.models/abstractCard.model";
import { logMessage, Messages } from "../services/messasges.service";
import { isPlayerInJail } from "../services/card.services/baseCard.service";
import { EndPageView } from '../views/endPage.view';
import { CityCard } from '../models/card.models/cityCard.model';
import { buyHouse } from '../services/card.services/cityCard.service';

export module GameController {
  import disableEnable = Disabler.disableEnable;
  import settings = SettingsController.settings;
  const leftMenuView = new LeftMenuView();
  const leftMenuService = LeftMenuService;
  const rightMenuService = RightMenuService;
  const rightMenuView = new RightMenuView();
  const mainBoardView = new MainBoardView();
  const gameOptionView = new GameOptionView();
  const timerService = TimerService;
  const navigationPages = new NavigationPagesView();
  const playerService = PlayerService;
  const endGameView = new EndPageView();

  const gameOption = new gameOptionModel();

  const game = new GameModel(gameOption.gameTime);

  leftMenuView.fields?.forEach((field) => {
    field.addEventListener('click', function () {
      leftMenuService.showPreview(game,leftMenuView, parseInt(field.id.slice(1)));
    });
  });

  rightMenuView.fields?.forEach((player) => {
    player.addEventListener('click', function () {
      rightMenuService.showCards(
        parseInt(player.id.slice(1)),
        rightMenuView,
        leftMenuView,
          game
      );
    });
  });

  mainBoardView.buttonNextPlayer.addEventListener(
    'click',
    function () {
      playerService.changeActivePlayer(game, rightMenuView);
      rightMenuService.showCards(game.activePlayer.id,rightMenuView,leftMenuView,game)
      isPlayerInJail(game);
      if(game.activePlayer.isJailed) 
        disableEnable([mainBoardView.buttonBuy, mainBoardView.buttonRoll],[mainBoardView.buttonNextPlayer]);
      else
        disableEnable([mainBoardView.buttonNextPlayer, mainBoardView.buttonBuy],[mainBoardView.buttonRoll]);
    },
  );

  mainBoardView.buttonRoll.addEventListener('click', function () {
    playerMove(game, leftMenuView);
    const currentCard = game.gameBoard[game.activePlayer.currentPosition].card; 
    console.log(game.activePlayer.currentPosition);
    console.log(currentCard.id);
      if(currentCard instanceof ObtainableCard && canPlayerBuyCard(game)){
        mainBoardView.buttonBuy.innerHTML = "Buy Card"
        logMessage(Messages.playerCanBuyCard(game.activePlayer, currentCard));
        disableEnable([], [mainBoardView.buttonBuy]);
      }
      else if(currentCard instanceof CityCard && canPlayerBuyHouse(game)){
        mainBoardView.buttonBuy.innerHTML = "Upgrade"
        logMessage(Messages.playerCanBuyHouse(game.activePlayer, currentCard));
        disableEnable([], [mainBoardView.buttonBuy]);
      }
      else {
        disableEnable([mainBoardView.buttonBuy],[]);
        cardActions(game);
      }
    if (!game.activePlayer.canThrowDices) disableEnable([mainBoardView.buttonRoll],[mainBoardView.buttonNextPlayer]);
    rightMenuService.updatePlayersPanels(rightMenuView,game);
    });

  mainBoardView.buttonBuy.addEventListener('click', function() {
    if(canPlayerBuyCard(game)) buyCard(game, leftMenuView,rightMenuView);
    else if (canPlayerBuyHouse(game)) buyHouse(game, leftMenuView,rightMenuView);
    rightMenuService.updatePlayersPanels(rightMenuView,game);
    disableEnable([mainBoardView.buttonBuy],[])
  })

  gameOptionView.buttonPlay?.addEventListener('click', function () {
    navigationPages.settingsPage.style.display = 'none';
    navigationPages.settingsChampions.style.display = 'none';
    navigationPages.gameContainer.style.display = 'flex';
    let gameSettings = settings;
    playerService.createPlayers(gameSettings, game);
    for (let player in game.players) {
      addPawn(game.players[player].id);
    }
    rightMenuService.updatePlayersPanels(rightMenuView,game);
    disableEnable([mainBoardView.buttonNextPlayer, mainBoardView.buttonBuy], []);
    timerService.startTimer(gameSettings.time, game, leftMenuView, endGameView);
  });
}
