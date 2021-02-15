import { ObtainableCard } from "./abstractCard.model";
import { Province } from "../../constants/provinces"

export class CityCard extends ObtainableCard {
  readonly priceOfHouses!: number;
  private _numberOfHouses: number = 0;    //if numberOfHouses===5, it means its a hotel

  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly price: number,
    readonly province: Province,
    readonly rent: number[]
  ) {
    super(id, name, description, price);
    switch(province){
      case 1: 
      case 2:
              this.priceOfHouses = 50;
              break;
      case 3: 
      case 4: this.priceOfHouses = 100;
              break;    
      case 5:
      case 6: this.priceOfHouses = 150;
              break;
      case 7: 
      case 8: this.priceOfHouses = 200;
              break;  
    }
  }

  get numberOfHouses(): number {
    return this._numberOfHouses;
  }

  set numberOfHouses(numberOfHouses: number) {
    this._numberOfHouses = numberOfHouses;
  }
}