import { ObtainableCard } from "../models/card.models/abstractCard.model";
import { GameModel } from "../models/game.model";
import { BaseCard } from '../models/card.models/baseCard.model';
import { CityCard } from '../models/card.models/cityCard.model';
import { TrapCard } from '../models/card.models/trapCard.model';
import { FateCard } from '../models/card.models/fateCard.model';
import { ArtifactCard } from '../models/card.models/artifactCard.model';
import { HobbitCard } from '../models/card.models/hobbitCard.model';
import { goToJail } from './card.services/baseCard.service';
import { payRent, buyHouse } from './card.services/cityCard.service';
import {
  loseMoneyAndMoveBackward,
  loseMoneyAndMoveForward,
} from './card.services/trapCard.service';
import {
  goodChampionEarn,
  badChampionEarn,
  earnAndSendSomeoneToJail,
} from './card.services/fateCard.service';
import { payArtifactTax } from './card.services/artifactCard.service';
import { payHobbitTax } from './card.services/hobbitCard.service';
import { logMessage, Messages } from "../services/messasges.service";

export const canPlayerBuyCard = (game: GameModel): boolean => {
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if(currentCard instanceof ObtainableCard){
    if(currentCard.isObtainable && game.activePlayer.money > currentCard.price){
      logMessage(Messages.playerCanBuyCard(game.activePlayer, currentCard));
      return true;
    }
    else return false;
  }
  else return false;  
}

export const buyCard = (game: GameModel) => {
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if(currentCard instanceof ObtainableCard){
    currentCard.isObtainable = false;
    game.activePlayer.giveMoney(currentCard.price);
    game.activePlayer.cards.push(currentCard.id);
    logMessage(Messages.playerBoughtCard(game.activePlayer, currentCard));
  }
}

export const obtainableCardActions = (game: GameModel) => {
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if (currentCard instanceof ObtainableCard){
    if(!currentCard.isObtainable){
      if(currentCard instanceof CityCard) payRent(game);
      else if(currentCard instanceof HobbitCard) payHobbitTax(game);
      else if (currentCard instanceof ArtifactCard) payArtifactTax(game);
    }
    // else if (currentCard.isObtainable){
    //  if(currentCard instanceof CityCard) buyHouse(game);
    // }
  }
}


export const nonobtainableCardActions = (game: GameModel) => {
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
    if(currentCard instanceof TrapCard){
    switch(currentCard.id) {
      case 2: 
        loseMoneyAndMoveForward(game); 
        break;
      case 37: 
        loseMoneyAndMoveBackward(game);
        break;
    }
  }
  else if(currentCard instanceof FateCard){
    switch(currentCard.id) {
      case 3: 
      case 23:
        goodChampionEarn(game);
        break;
      case 13: 
      case 33:
        badChampionEarn(game);
        break;
      case 14: 
        earnAndSendSomeoneToJail(game);
        break;
    }
  }
  else if(currentCard instanceof BaseCard){
    if(currentCard.id === 30) goToJail(game);
}
}
