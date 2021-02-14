import { Card } from "../models/card.models/abstract-card.model";
import { BaseCard } from "../models/card.models/base-card.model";
import { CityCard } from "../models/card.models/city-card.model";
import { TrapCard } from "../models/card.models/trap-card.model";
import { FateCard } from "../models/card.models/fate-card.model";
import { ArtifactCard } from "../models/card.models/artifact-card.model";
import { HobbitCard } from "../models/card.models/hobbit-card.model";
import { goToJail } from "./card.services/base-card.service";
import { payRent, buyHouse } from "./card.services/city-card.service";
import { loseMoneyAndMoveBackward, loseMoneyAndMoveForward } from "./card.services/trap-card.service";
import { goodChampionEarn, badChampionEarn, earnAndSendSomeoneToJail} from "./card.services/fate-card.service";
import { payArtifactTax } from "./card.services/artifact-card.service";
import { payHobbitTax } from "./card.services/hobbit-card.service";
import { Province } from "../constants/provinces";
import * as rent from "../constants/prices";

type gameField = {card: Card, action?: unknown}; 

export const gameBoard: gameField[] = [
  {card: new BaseCard(0, "START", "Start")},
  {card: new CityCard(1, "Bag end", "Province: Shire", 160, Province.SHIRE, rent.BAG_END_RENT),
  action: [payRent, buyHouse]},
  {card: new TrapCard(2, "Chase", "You are chased you have to run"),
  action: loseMoneyAndMoveForward},
  {card: new FateCard(3, "Good", "If you are good champion wait for reward" ), 
  action: goodChampionEarn},
  {card: new CityCard(4, "Farmers maggot", "Province: Shire", 200, Province.SHIRE, rent.FARMERS_MAGGOT_RENT),
  action: [payRent, buyHouse]},
  {card: new HobbitCard(5, "Frodo", "Hobbit", 250),
  action: payHobbitTax},
  {card: new CityCard(6, "Bree", "Province: Lone Lands", 240, Province.LONE_LANDS, rent.BREE_RENT),
  action: [payRent, buyHouse]},
  {card: new CityCard(7, "Blucklebury Ferry", "Province: Lone Lands", 240, Province.LONE_LANDS, rent.BLUCKLEBURY_FERRY_RENT),
  action: [payRent, buyHouse]},
  {card: new ArtifactCard(8, "Glamdring", "Artifact", 250),
  action: payArtifactTax},
  {card: new CityCard(9, "Wheathertrop", "Province: Lone Lands", 260, Province.LONE_LANDS, rent.WHEATHERTROP_RENT),
  action: [payRent, buyHouse]},
  {card: new BaseCard(10, "JAIL", "You are visiting jail")},
  {card: new CityCard(11, "Rivendell", "Province: Eriador", 300, Province.ERIADOR, rent.RIVENDELL_RENT),
  action: [payRent, buyHouse]},
  {card: new CityCard(12, "Caradhrad", "Province: Eriador", 300, Province.ERIADOR, rent.CARADHRAS_RENT),
  action: [payRent, buyHouse]},
  {card: new FateCard(13, "Evil", "If you are bad champion wait for reward"),
  action: badChampionEarn},
  {card: new FateCard(14, "Ring", "One to rule them all"),
  action: earnAndSendSomeoneToJail},
  {card: new HobbitCard(15, "Sam", "Hobbit", 250),
  action: payHobbitTax},
  {card: new CityCard(16, "Mines of moria", "Province: Hithaeglir", 340, Province.HITHAEGLIR, rent.MINES_OF_MORIA_RENT),
  action: [payRent, buyHouse]}, 
  {card: new CityCard(17, "Lothorien", "Province: Hithaeglir", 340, Province.HITHAEGLIR, rent.LOTHORIEN_RENT),
  action: [payRent, buyHouse]},
  {card: new ArtifactCard(18, "Sting", "Artifact", 250),
  action: payArtifactTax},
  {card: new CityCard(19, "Falls of rauros", "Province: Hithaeglir", 360, Province.HITHAEGLIR, rent.FALLS_OF_RAUROS_RENT),
  action: [payRent, buyHouse]},
  {card: new BaseCard(20, "PIT STOP", "You are resting here")},
  {card: new CityCard(21, "Gap of Rohan", "Province: Rohan", 400, Province.ROHAN, rent.GAP_OF_ROHAN_RENT),
  action: [payRent, buyHouse]}, 
  {card: new CityCard(22, "Helm's Deep", "Province: Rohan", 400, Province.ROHAN, rent.HELMS_DEEP_RENT),
  action: [payRent, buyHouse]},
  {card: new FateCard(23, "Good", "If you are good champion wait for reward"),
  action: goodChampionEarn},
  {card: new CityCard(24, "Edoras", "Province: Rohan", 430, Province.ROHAN, rent.EDORAS_RENT),
  action: [payRent, buyHouse]},
  {card: new HobbitCard(25, "Merry", "Hobbit", 250),
  action: payHobbitTax},
  {card: new CityCard(26, "Fangorn Forest", "Province: Calenardhon", 460, Province.CALENARDHON, rent.FARGORN_FOREST_RENT),
  action: [payRent, buyHouse]},
  {card: new CityCard(27, "Westfold", "Province: Calenardhon", 460, Province.CALENARDHON, rent.WESTFOLD_RENT),
  action: [payRent, buyHouse]},
  {card: new ArtifactCard(28, "Anduril", "Artifact", 250),
  action: payArtifactTax},
  {card: new CityCard(29, "Isengard", "Province: Calenardhon", 500, Province.CALENARDHON, rent.ISENGARD_RENT),
  action: [payRent, buyHouse]},
  {card: new BaseCard(30, "JAIL", "You are going to jail!"),
  action: goToJail},
  {card: new CityCard(31, "Osgiliath", "Province: Gondor", 550, Province.GONDOR, rent.OSGILIATH_RENT),
  action: [payRent, buyHouse]},
  {card: new CityCard(32, "Pelennor Fields", "Province: Gondor", 600, Province.GONDOR, rent.PELENNOR_FIELDS_RENT),
  action: [payRent, buyHouse]},
  {card: new FateCard(33, "Evil", "If you are bad champion wait for reward"),
  action: badChampionEarn},
  {card: new CityCard(34, "Minas Tirith", "Province: Gondor", 650, Province.GONDOR, rent.MINAS_TIRITH_RENT), 
  action: [payRent, buyHouse]}, 
  {card: new HobbitCard(35, "Pippin", "Hobbit", 250),
  action: payHobbitTax},
  {card: new CityCard(36, "Barad Dur", "Province: Mordor", 750, Province.MORDOR, rent.BARAD_DUR_RENT),
  action: [payRent, buyHouse]},
  {card: new TrapCard(37, "Spider's Lair", "You are attacked by spider you have to go back"),
  action: loseMoneyAndMoveBackward},
  {card: new ArtifactCard(38, "Durins Axe", "Artifact", 250),
  action: payArtifactTax},
  {card: new CityCard(39, "Mount Doom", "Province: Mordor", 800, Province.MORDOR, rent.MOUNT_DOOM_RENT),
  action: [payRent, buyHouse]}
];