import { GameOptionView } from '../views/gameOption.view';
import { NavigationPagesView } from '../views/navigationPages.view';
import { Hero } from '../models/hero.enum';
import { Disabler } from './disabler.service';

export module GameSettings {
  import disableEnable = Disabler.disableEnable;
  export let nameChoose = function (
    navigationPages: NavigationPagesView,
    settings: { id: number; name: string }[],
  ) {
    let name1 = document.getElementById(
      'player0',
    )! as HTMLInputElement;
    let name2 = document.getElementById(
      'player1',
    )! as HTMLInputElement;
    let name3 = document.getElementById(
      'player2',
    )! as HTMLInputElement;
    let name4 = document.getElementById(
      'player3',
    )! as HTMLInputElement;

    if (!name1.value || !name2.value) {
      window.alert('Player ONE and TWO must be choosen');
      return;
    } else if (!name3.value && name4.value) {
      window.alert('Player Three  is not choosen');
      return;
    }

    settings.push({ id: 0, name: name1.value });
    settings.push({ id: 1, name: name2.value });
    if (name3.value) settings.push({ id: 2, name: name3.value });
    if (name4.value) settings.push({ id: 3, name: name4.value });

    navigationPages.settingsPlayer.style.display = 'none';
    navigationPages.settingsTime.style.display = 'flex';

    console.log(settings);
  };

  export let timeChoose = function (
    settings: {
      players: { id: number; name: string }[];
      time: number;
    },
    navigationPages: NavigationPagesView,
    button: Element,
  ) {
    let time = parseInt(button.id.slice(1));
    settings.time = time;
    navigationPages.settingsTime.style.display = 'none';
    navigationPages.settingsChampions.style.display = 'flex';

    text.innerText = settings.players[0].name;
  };
  let text = document.getElementById('playerName')!;
  let currentChooser = 0;

  export let championChoose = function (
    champ: Element,
    gameOptionView: GameOptionView,
    settings: {
      players: {
        id: number;
        name: string;
        champ: Hero;
        isGood: boolean;
      }[];
      time: number;
    },
  ) {
    let d = document.querySelector(
      '.champion-container',
    )! as HTMLElement;
    d?.removeChild(document.getElementById(champ.id)!);
    console.log(currentChooser);
    switch (champ.id) {
      case 'Aragorn':
        settings.players[currentChooser].champ = Hero.Aragorn;
        settings.players[currentChooser].isGood = true;
        break;
      case 'Gandalf':
        settings.players[currentChooser].champ = Hero.Gandalf;
        settings.players[currentChooser].isGood = true;
        break;
      case 'Saruman':
        settings.players[currentChooser].champ = Hero.Saruman;
        settings.players[currentChooser].isGood = false;
        break;
      case 'Sauron':
        settings.players[currentChooser].champ = Hero.Sauron;
        settings.players[currentChooser].isGood = false;
    }

    currentChooser = currentChooser + 1;
    if(currentChooser != settings.players.length) text.innerText = settings.players[currentChooser].name;


    if (currentChooser == settings.players.length) {
      d.style.display = 'none';
      text.parentElement!.style.display = 'none';
      disableEnable(
        [],
        [document.getElementById('buttonPlay')! as HTMLButtonElement],
      );
    }


    console.log(settings);
  };
}
