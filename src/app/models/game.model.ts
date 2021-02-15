import { Player } from './player.model';
import { gameBoard, gameField } from '../services/gameBoard.service';

export class GameModel {
  private _players: Player[] = [];
  private _activePlayer: Player = this._players[0];
  private _gameBoard = gameBoard;
  private _isEnded = false;
  readonly timeToEnd: number;

  constructor(timeToEnd: number) {
    this.timeToEnd = timeToEnd;
  }

  get players(): Player[] {
    return this._players;
  }

  set players(value: Player[]) {
    this._players = value;
  }

  get activePlayer(): Player {
    return this._activePlayer;
  }

  set activePlayer(value: Player) {
    this._activePlayer = value;
  }

  get gameBoard(): gameField[] {
    return this._gameBoard;
  }

  get isEnded(): boolean {
    return this._isEnded;
  }

  set isEnded(value: boolean) {
    this._isEnded = value;
  }
}
