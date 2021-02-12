import { Player } from "../models/player.model";
import { CityCard } from "../models/city-card.model";

export const payRent = (currentPlayer: Player, players: Player[], city: CityCard,) => {
  if(!city.isObtainable){                                    //if card/property was bought 
    if(playerOwnsProperty(currentPlayer, city)) return;  
    let propertyOwner!: Player ;           
    const rent = city.rent[city.numberOfHouses];
    players.forEach((player) => {
      if(playerOwnsProperty(player, city)) propertyOwner = player;
    });
    currentPlayer.giveMoney(rent);
    propertyOwner.takeMoney(rent);
  }
}

export const buyHouse = (player: Player, city: CityCard) => {
  if(playerOwnsProperty(player, city) && city.numberOfHouses < 5){   
    player.takeMoney(city.priceOfHouses);
    city.numberOfHouses++;
  }
}

const playerOwnsProperty = (player: Player, city: CityCard): boolean => {
  return player.playerCards.includes(city.id)
}