import {Player} from '../models/player.model';
import {LeftMenuService} from './leftMenu.service';
import {RightMenuView} from '../views/rightMenu.view';
import {GameModel} from "../models/game.model";
import {Hero} from "../models/hero.enum";
import {LeftMenuView} from "../views/leftMenu.view";

export module RightMenuService {


  export let showCards = function (
    playerID: number,
    rightMenuView: RightMenuView,
    leftMenuView: LeftMenuView,
    game: GameModel
  ): void {
    let images = LeftMenuService.images;
    rightMenuView.container.innerHTML = '';
    let champion = game.players.find(
      (player:Player) => player.id === playerID,
    );
    champion?.cards.forEach((card) => {
      let image = document.createElement('img');
      // @ts-ignore
      image.src = images[`f${card}`];
      image.addEventListener('click', function () {
        LeftMenuService.showPlayerCard(game,leftMenuView, `f${card}`);

      });
      rightMenuView.container.appendChild(image);
    });
    if(champion) rightMenuView.containerLabel.innerHTML = `${champion.name}'s Cards`
  };

  export let updatePlayersPanels = function (rightMenuView: RightMenuView,game:GameModel) {
    console.log("WORKED")
    let playerPanels = rightMenuView.fields;
    playerPanels.forEach(panel => {
      let player = game.players[parseInt(panel.id.slice(1))]
      if(player) {
        let playerName = panel.getElementsByTagName('h3')!;
        let playerScore = panel.getElementsByTagName('p')!;
        let playerIcon = panel.getElementsByTagName('img')!;

        playerName[0].innerText = player.name;
        playerScore[0].innerText = player.money + " $";
        let source = getIcon(player);
        playerIcon[0].src = source;
      }
    })
  }

  let getIcon = function (player:Player) {
    let source:string;
      switch (player.hero) {
        case Hero.Aragorn: {
          source = require("../../../images/champions/Aragorn-icon.png")
          break;
        }
        case Hero.Gandalf: {
          source = require("../../../images/champions/Gandalf-ICON.png")
          break;
        }
        case Hero.Saruman: {
          source = require("../../../images/champions/Saruman-ICON.png")
          break;
        }
        case Hero.Sauron: {
          source = require("../../../images/champions/Sauron-ICON.png")
        }
      }
      return source;
  }

}

