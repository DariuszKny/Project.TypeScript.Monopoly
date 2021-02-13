import {LeftMenuView} from "../views/leftMenu.view"
import {LeftMenuService} from "../services/leftMenu.service"
import {RightMenuView} from "../views/rightMenu.view";
import {RightMenuService} from "../services/rightMenu.service";

export module GameController {
    const leftMenuView = new LeftMenuView()
    const leftMenuService = LeftMenuService;
    const rightMenuService = RightMenuService;
    const rightMenuView = new RightMenuView();


    leftMenuView.fields?.forEach(field => {
        field.addEventListener('click', function () {
            leftMenuService.showPreview(leftMenuView.preview, field)
        })
    });

    rightMenuView.fields?.forEach(player => {
        player.addEventListener('click', function (){
            rightMenuService.showCards(player, rightMenuView, leftMenuView.preview)
        })
    })




}