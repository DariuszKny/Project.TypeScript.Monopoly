import { Player } from "../../models/player.model";
import { CityCard } from "../../models/card.models/city-card.model";
import * as provinces from "../../constants/provinces";

export const payRent = (currentPlayer: Player, players: Player[], city: CityCard,) => {
  if(city.isObtainable) return;                                //if city wasnt bought by anyone
  if(playerOwnsCity(currentPlayer, city.id)) return;  
  let propertyOwner!: Player ;           
  const rent = city.rent[city.numberOfHouses];
  players.forEach((player) => {
  if(playerOwnsCity(player, city.id)) propertyOwner = player;
  });
  currentPlayer.giveMoney(rent);
  propertyOwner.takeMoney(rent);
}

export const buyHouse = (player: Player, city: CityCard) => {
  if(playerOwnsAllCitiesInProvince(player, city) && city.numberOfHouses < 5){   
    player.takeMoney(city.priceOfHouses);
    city.numberOfHouses++;
  }
}

const playerOwnsAllCitiesInProvince = (player: Player, city: CityCard): boolean => {
  const provinceCities = getProvinceCities(city);
  const numberOfProvinceCities = provinceCities.length;
  let numberOfOwnedCities: number = 0;
  for (let id of provinceCities){
    if(playerOwnsCity(player, id)) numberOfOwnedCities++;
  }
  return numberOfProvinceCities === numberOfOwnedCities;
}

const playerOwnsCity = (player: Player, cityId: number): boolean => {
  return player.playerCards.includes(cityId)
}

const getProvinceCities = (city: CityCard): number[] => {
  switch(city.province){
    case 1: return provinces.SHIRE_CITIES;
    case 2: return provinces.LONE_LANDS_CITIES;
    case 3: return provinces.ERIADOR_CITIES;
    case 4: return provinces.HITHAEGLIR_CITIES;    
    case 5: return provinces.ROHAN_CITIES;
    case 6: return provinces.CALENARDHON_CITIES;
    case 7: return provinces.GONDOR_CITIES;
    case 8: return provinces.MORDOR_CITIES;
    default: throw new Error("Wrong province provided.")  
  }
}