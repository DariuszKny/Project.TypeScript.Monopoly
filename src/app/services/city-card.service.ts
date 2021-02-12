import { Player } from "../models/player.model";
import { CityCard } from "../models/city-card.model";

export const payRent = (player: Player, city: CityCard) => {
  if(playerOwnsProperty(player, city)) return; 
  const rent = city.rent[city.numberOfHouses];
  player.giveMoney(rent);
}

export const buyHouse = (player: Player, city: CityCard) => {
  if(playerOwnsProperty(player, city) && city.numberOfHouses < 4){
    player.takeMoney(city.priceOfHouses);
    city.numberOfHouses++;
  }
}

const playerOwnsProperty = (player: Player, city: CityCard): boolean => {
  return player.playerCards.includes(city.id)
}