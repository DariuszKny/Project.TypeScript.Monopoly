export abstract class Card {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,  
  ) {}
}

export abstract class ObtainableCard extends Card {
  private _isObtainable: boolean = true;
  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string, 
    readonly price: number 
  ) {
    super(id, name, description)
  }

  get isObtainable(): boolean {
    return this._isObtainable;
  }

  set isObtainable(isObtainable: boolean) {
    this._isObtainable = isObtainable;
  }

}
