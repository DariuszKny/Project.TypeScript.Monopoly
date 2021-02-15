import { NUMBER_OF_FIELDS, START_FIELD } from "../constants/gameConstants"
import { START_SALARY } from "../constants/prices";
import { playerPassedStart } from "../services/card.services/baseCard.service";
import { movePawnOnBoard } from "../services/pawn.service";

export class Player {
    readonly _id: number;
    readonly _name: string;
    readonly _isGoodChampion: boolean;
    readonly _color: string;
    private _currentPosition: number = START_FIELD;
    private _previousPosition: number = START_FIELD;
    private _money: number = START_SALARY;
    private _cards: number[] = [];
    private _numberOfDoubles: number = 0;
    private _canThrowDices: boolean = true;
    private _isJailed = false;
    private _blockedTurns: number = 0;

    public constructor(id: number, name: string, isGoodChampion: boolean){
        this._id = id
        this._name = name;
        this._isGoodChampion = isGoodChampion;
        switch(this._id) {
          case 0:
            this._color = 'RED';
            break;
          case 1:
            this._color = 'BLUE';
            break;
          case 2:
            this._color = 'GREEN';
            break;
          case 3:
            this._color = 'YELLOW';
            break;
          default:
            this._color = 'GREEN';
        }
      }

    public get id(): number {
        return this._id;
    }
 
    public get name(): string {
      return this._name;
    }

    public get isGoodChampion(): boolean {
      return this._isGoodChampion;
    }

    public get color(): string {
        return this._color;
    }

    public get currentPosition() : number {
        return this._currentPosition;
    }

    public set currentPosition(position : number) {
        this._currentPosition = position;
    }

    public get previousPosition() : number {
      return this._previousPosition;
    }

    public set previousPosition(position : number) {
        this._previousPosition = position;
    }

    public get money() : number {
        return this._money;
    }
    
    public set money(money : number) {
        this._money = money;
    }
        
    public get cards() : number[] {
        return this._cards;
    }
    
    public set cards(cards : number[]) {
        this._cards = [...cards];
    }

    public get numberOfDoubles() : number {
        return this._numberOfDoubles;
    }

    public set numberOfDoubles(numberOfDoubles : number) {
        this._numberOfDoubles = numberOfDoubles;
    }

    public get canThrowDices() : boolean {
        return this._canThrowDices;
    }

    public set canThrowDices(canThrowDices : boolean) {
        this._canThrowDices = canThrowDices;
    }

    public get isJailed() : boolean {
      return this._isJailed;
    }

    public set isJailed(isJailed : boolean) {
      this._isJailed = isJailed;
    }

    public get blockedTurns() : number {
        return this._blockedTurns;
    }

    public set blockedTurns(blockedTurns : number) {
        this._blockedTurns = blockedTurns;
    }

    takeMoney(amount : number) {
        this._money = this._money + amount;
    }

    giveMoney(amount : number) {
        if(this._money > amount) this._money = this._money - amount;
        else console.log("You don't have enough money");
    }

    moveNumberOfFields(numberOfFields: number) {
      // if(this._blockedTurns > 0) {
      //   console.log(`You are in Jail, you have to wait ${this.blockedTurns} turns`);
      //   this._blockedTurns--;
      //   return;
      // }
      this._previousPosition = this._currentPosition;
      this._currentPosition = (this._currentPosition + numberOfFields) % NUMBER_OF_FIELDS;
      movePawnOnBoard(this);
      playerPassedStart(this);
    }

    moveToField(fieldNumber: number) {
      this._previousPosition = this._currentPosition;
      this._currentPosition = fieldNumber;
      movePawnOnBoard(this);
      playerPassedStart(this);
    }
}