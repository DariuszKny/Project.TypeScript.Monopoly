export class gameOptionModel {
  private _gameTime: number = 200;

  get gameTime(): number {
    return this._gameTime;
  }

  set gameTime(value: number) {
    this._gameTime = value;
  }
}
