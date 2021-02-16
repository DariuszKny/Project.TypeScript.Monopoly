import {LeftMenuView} from "../views/leftMenu.view";
import {gameBoard} from "./gameBoard.service";
import {ArtifactCard} from "../models/card.models/artifactCard.model";
import {CityCard} from "../models/card.models/cityCard.model";
import {findCardOwner} from "./card.services/sharedCard.service";
import {GameModel} from "../models/game.model";
import {ObtainableCard} from "../models/card.models/abstractCard.model";
import {HOBBIT_TAX} from "../constants/prices";
import {HobbitCard} from "../models/card.models/hobbitCard.model";
import {Province} from "../constants/provinces";

export module LeftMenuService {
    export let showPreview = function (
        game: GameModel,
        leftMenuView: LeftMenuView,
        id: number,
    ): void {
        let fieldId: number = id;
        if (
            fieldId == 0 ||
            fieldId == 10 ||
            fieldId == 20 ||
            fieldId == 30
        ) {
            return;
        } else {
            leftMenuView.preview.src = images[`f${fieldId}`];
            showCardInfo(game,leftMenuView, id)
        }
    };

    export let showPlayerCard = function (
        game: GameModel,
        leftMenuView: LeftMenuView,
        id: string,
    ): void {
        showCardInfo(game,leftMenuView, parseInt(id.slice(1)));
        leftMenuView.preview.src = images[`${id}`];
    };

    export let showCardInfo = function (game: GameModel, leftMenuView: LeftMenuView, id: number) {
        let cardInfo = leftMenuView.cardInfo!
        let field = gameBoard.find((field) => {
            return field.card.id === id;
        })

        if (field) {
            let card = field.card;
            cardInfo.innerHTML =
                `<h2>id: ${card.id}</h2>` +
                `<h2>name: ${card.name}</h2>`;

            cardInfo.innerHTML += card instanceof CityCard ? `<h2>Province: ${Province[card.province].toLocaleLowerCase()}</h2>` :  `<h2>description: ${card.description}</h2>`

            if (card instanceof ArtifactCard) {
                cardInfo.innerHTML += `<h2>Tax: ${card.tax}</h2>`
            }

            if (card instanceof HobbitCard) {
                cardInfo.innerHTML += `<h2>Tax: ${HOBBIT_TAX}</h2>`
            }
            if (card instanceof CityCard) {
                cardInfo.innerHTML +=
                    `<h2>Taxes: ${card.rent} </h2>`
            }

            if(card instanceof ObtainableCard) {
                let player = findCardOwner(game.players,card.id)
                cardInfo.innerHTML +=  `<h2></br></h2> `
                if(player) {
                    cardInfo.innerHTML +=  `<h2>Owner: ${player.name}</h2> `
                } else {
                    cardInfo.innerHTML +=  `<h2>Owner: </h2>`
                }
                cardInfo.innerHTML += `<h2>Price: ${card.price} $</h2> `
            }
            if(card instanceof CityCard) cardInfo.innerHTML +=
                `<h2>Towers: lv ${card.numberOfHouses}</h2>` +
                `<h2>Upgrade Cost: ${card.priceOfHouses} $</h2> `
        }

    };


    export const images: { [index: string]: any } = {
        f0: require(`../../../images/cards/0.png`),
        f1: require(`../../../images/cards/1.png`),
        f2: require(`../../../images/cards/2.png`),
        f3: require(`../../../images/cards/3.png`),
        f4: require(`../../../images/cards/4.png`),
        f5: require(`../../../images/cards/5.png`),
        f6: require(`../../../images/cards/6.png`),
        f7: require(`../../../images/cards/7.png`),
        f8: require(`../../../images/cards/8.png`),
        f9: require(`../../../images/cards/9.png`),
        f10: require(`../../../images/cards/10.png`),
        f11: require(`../../../images/cards/11.png`),
        f12: require(`../../../images/cards/12.png`),
        f13: require(`../../../images/cards/13.png`),
        f14: require(`../../../images/cards/14.png`),
        f15: require(`../../../images/cards/15.png`),
        f16: require(`../../../images/cards/16.png`),
        f17: require(`../../../images/cards/17.png`),
        f18: require(`../../../images/cards/18.png`),
        f19: require(`../../../images/cards/19.png`),
        f20: require(`../../../images/cards/20.png`),
        f21: require(`../../../images/cards/21.png`),
        f22: require(`../../../images/cards/22.png`),
        f23: require(`../../../images/cards/23.png`),
        f24: require(`../../../images/cards/24.png`),
        f25: require(`../../../images/cards/25.png`),
        f26: require(`../../../images/cards/26.png`),
        f27: require(`../../../images/cards/27.png`),
        f28: require(`../../../images/cards/28.png`),
        f29: require(`../../../images/cards/29.png`),
        f30: require(`../../../images/cards/30.png`),
        f31: require(`../../../images/cards/31.png`),
        f32: require(`../../../images/cards/32.png`),
        f33: require(`../../../images/cards/33.png`),
        f34: require(`../../../images/cards/34.png`),
        f35: require(`../../../images/cards/35.png`),
        f36: require(`../../../images/cards/36.png`),
        f37: require(`../../../images/cards/37.png`),
        f38: require(`../../../images/cards/38.png`),
        f39: require(`../../../images/cards/39.png`),
    };
}
