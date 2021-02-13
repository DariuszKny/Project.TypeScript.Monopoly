import {LeftMenuView} from "../views/leftMenu.view"
import {LeftMenuService} from "../services/leftMenu.service"

export module GameController {
    const leftMenuView = new LeftMenuView()
    const leftMenuService = LeftMenuService;


    leftMenuView.fields?.forEach(field => {
        field.addEventListener('click', function () {
            leftMenuService.showPreview(leftMenuView.preview, field)
        })
    });


}