import { Player } from "../models/player.model";
import { CityCard } from "../models/city-card.model";

export const payRent = (player: Player, city: CityCard) => {
  if(player.playerCards.includes(city.id)) return; // if player own this property do nothing
  const rent = city.rent[city.numberOfHouses];
  //player.giveMoney(rent) 
}
