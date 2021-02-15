import { Player } from '../../models/player.model';
import { CityCard } from '../../models/card.models/cityCard.model';
import { GameModel } from "../../models/game.model";
import {
  playerOwnsCard,
  findCardOwner,
  numberOfOwnedCards,
  payMoneyToCardOwner,
} from './sharedCard.service';
import * as provinces from '../../constants/provinces';

export const payRent = (game: GameModel): void => {
  const player = game.activePlayer;
  const players = game.players;
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if(currentCard instanceof CityCard){
    const city = currentCard;
  if (city.isObtainable) return; //if city wasnt bought by anyone
  if (playerOwnsCard(player, city.id)) return;
  const rent = city.rent[city.numberOfHouses];
  const cityOwner = findCardOwner(players, city.id);
  payMoneyToCardOwner(player, cityOwner, rent);
  }
};

export const buyHouse = (game: GameModel): void => {
  const player = game.activePlayer;
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if(currentCard instanceof CityCard){
    const city = currentCard;
  if (
    playerOwnsAllCitiesInProvince(player, city) &&
    city.numberOfHouses < 5
  ) {
    player.takeMoney(city.priceOfHouses);
    city.numberOfHouses++;
  }
}
};

const playerOwnsAllCitiesInProvince = (
  player: Player,
  city: CityCard,
): boolean => {
  const provinceCities = getProvinceCities(city);
  const numberOfProvinceCities = provinceCities.length;
  const numberOfOwnedCities = numberOfOwnedCards(
    player,
    provinceCities,
  );
  return numberOfProvinceCities === numberOfOwnedCities;
};

const getProvinceCities = (city: CityCard): number[] => {
  switch (city.province) {
    case 1:
      return provinces.SHIRE_CITIES;
    case 2:
      return provinces.LONE_LANDS_CITIES;
    case 3:
      return provinces.ERIADOR_CITIES;
    case 4:
      return provinces.HITHAEGLIR_CITIES;
    case 5:
      return provinces.ROHAN_CITIES;
    case 6:
      return provinces.CALENARDHON_CITIES;
    case 7:
      return provinces.GONDOR_CITIES;
    case 8:
      return provinces.MORDOR_CITIES;
    default:
      throw new Error('Wrong province provided.');
  }
};
