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
import { playerMove } from '../services/gameBoard.service';
import { Disabler } from '../services/disabler.service';
import { SettingsController } from './settings.controller';

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

  const gameOption = new gameOptionModel();

  const game = new GameModel(gameOption.gameTime);

  leftMenuView.fields?.forEach((field) => {
    field.addEventListener('click', function () {
      leftMenuService.showPreview(leftMenuView, field);
    });
  });

  rightMenuView.fields?.forEach((player) => {
    player.addEventListener('click', function () {
      rightMenuService.showCards(
        player,
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
      disableEnable(
        [mainBoardView.buttonNextPlayer],
        [mainBoardView.buttonRoll],
      );
    },
  );

  mainBoardView.buttonRoll.addEventListener('click', function () {
    playerMove(game);
    if (!game.activePlayer.canThrowDices)
      disableEnable(
        [mainBoardView.buttonRoll],
        [mainBoardView.buttonNextPlayer],
      );
  });

  gameOptionView.buttonPlay?.addEventListener('click', function () {
    navigationPages.settingsPage.style.display = 'none';
    navigationPages.settingsChampions.style.display = 'none';
    navigationPages.gameContainer.style.display = 'flex';
    let gameSettings = settings;
    playerService.createPlayers(gameSettings, game);
    for (let player in game.players) {
      addPawn(game.players[player].id);
    }
    rightMenuService.updatePlayersPanels(rightMenuView,game)
    disableEnable([mainBoardView.buttonNextPlayer], []);
    timerService.startTimer(gameSettings.time, game, leftMenuView);
  });
}
