import {Player} from "../models/player.model";
import {LeftMenuService} from "./leftMenu.service";
import {RightMenuView} from "../views/rightMenu.view";

export module RightMenuService {
    const leftMenuService = LeftMenuService;
    const images = leftMenuService.images;

    export let showCards = function ( player: Element, rightMenuView: RightMenuView, preview:HTMLImageElement):void {
        rightMenuView.container.innerHTML = "";
        let playerId : string = player.id;
        let hero = playerId.slice(1)
        let chempion = champions.find(player => player.id === parseInt(hero))
        chempion?.playerCards.forEach(card => {
            let image = document.createElement('img');
            // @ts-ignore
            image.src = images[`f${card}`]
            image.addEventListener('click',function () {
                leftMenuService.showPlayerCard(preview, `f${card}`)
            })
            rightMenuView.container.appendChild(image)
        })

    }
}

////FOR DEV ONLY
let champ1 = new Player(0,"Daro",true)
champ1.playerCards= [1,4,5]
let champ2 = new Player(1,"Daro",true)
champ2.playerCards= [6,7,9]
let champ3 = new Player(2,"Daro",true)
champ3.playerCards= [11,12,15]
let champ4 = new Player(3,"Daro",true)
champ4.playerCards= [17,18,19]
let champions = [champ1, champ2,champ3,champ4]