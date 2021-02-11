export abstract class Card {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly obtainable = false    
  ) {}

}