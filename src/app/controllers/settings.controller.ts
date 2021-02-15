import {GameOptionView} from "../views/gameOption.view";
import {NavigationPagesView} from "../views/navigationPages.view";
import {GameSettings} from "../services/gameSettings.service";
import {Disabler} from "../services/disabler.service";
import {Hero} from "../models/hero.enum";


export module SettingsController {
    import disableEnable = Disabler.disableEnable;
    import nameChoose = GameSettings.nameChoose;
    import timeChoose = GameSettings.timeChoose;
    const navigationPages = new NavigationPagesView()
    let gameOptionView = new GameOptionView();


    export let settings : {players:{id: number,name:string,champ:Hero, isGood: boolean}[], time:number}= {players:[],time:0}

    gameOptionView.buttonSettingsPlayer?.addEventListener('click', function () {
        navigationPages.landingPage.style.display = "none";
        navigationPages.settingsPage.style.display = "flex";
    })
    gameOptionView.buttonSettingsTime?.addEventListener('click', function () {
        nameChoose(navigationPages, settings.players)

    })
    gameOptionView.buttonsSettingsChampions?.forEach(butt => {
        butt.addEventListener('click', function () {
            timeChoose(settings, navigationPages,butt)
            disableEnable([gameOptionView.buttonPlay],[])

        })
    });

    gameOptionView.buttonsChampions.forEach(champ => {
        champ.addEventListener('click', () => {
            GameSettings.championChoose(champ,gameOptionView,settings)
        })
    })
}