import { NUMBER_OF_FIELDS, START_FIELD } from "../constants/game-constants"
import { playerPassedStart } from "../services/card.services/base-card.service";
import { movePawnOnBoard } from "../services/add-pawn.service";

export class Player {
    readonly _id: number;
    readonly _color: string;
    private currentPosition: number;
    private previousPosition: number;
    private name: string;
    readonly goodChampion: boolean;
    private money: number;
    private cards: number[] = [];
    private isJailed: boolean;
    private double: number;
    private canThrowDices: boolean;
    private blockedTurns: number;

    public constructor(id: number, name: string, goodChampion: boolean){
        this._id = id
        this.currentPosition = START_FIELD;
        this.previousPosition = START_FIELD;
        this.name = name;
        this.goodChampion = goodChampion;
        this.money = 1500;
        this.isJailed = false;
        this.double = 0;
        this.canThrowDices = true;
        this.blockedTurns = 0;
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

    public get color(): string {
        return this._color;
    }

    public get playerCurrentPosition() : number {
        return this.currentPosition;
    }

    public set playerCurrentPosition(position : number) {
        this.currentPosition = position;
    }

    public get playerPreviousPosition() : number {
      return this.previousPosition;
    }

    public set playerPreviousPosition(position : number) {
        this.previousPosition = position;
    }

    public get playerName() : string {
        return this.name;
    }

    public set playerName(name : string) {
        this.name = name;
    }

    public get playerMoney() : number {
        return this.money;
    }
    
    public set playerMoney(money : number) {
        this.money = money;
    }
        
    public get playerCards() : number[] {
        return this.cards;
    }
    
    public set playerCards(cards : number[]) {
        this.cards = [...cards];
    }
    
    public get playerIsJailed() : boolean {
        return this.isJailed;
    }

    public set playerIsJailed(isJailed : boolean) {
        this.isJailed = isJailed;
    }

    public get playerDouble() : number {
        return this.double;
    }

    public set playerDouble(double : number) {
        this.double = double;
    }

    public get playerCanThrowDices() : boolean {
        return this.canThrowDices;
    }

    public set playerCanThrowDices(canThrowDices : boolean) {
        this.canThrowDices = canThrowDices;
    }

    public get playerBlockedTurns() : number {
        return this.blockedTurns;
    }

    public set playerBlockedTurns(blockedTurns : number) {
        this.blockedTurns = blockedTurns;
    }

    takeMoney(amount : number) {
        this.playerMoney = this.playerMoney + amount;
    }

    giveMoney(amount : number) {
        if(this.playerMoney > amount) this.playerMoney = this.playerMoney - amount;
        else console.log("You don't have enough money");
    }

    moveNumberOfFields(numberOfFields: number) {
      // if(this.blockedTurns > 0) {
      //   console.log(`You are in Jail, you have to wait ${this.blockedTurns} turns`);
      //   this.blockedTurns--;
      //   return;
      // }
      this.previousPosition = this.currentPosition;
      this.currentPosition = (this.currentPosition + numberOfFields) % NUMBER_OF_FIELDS;
      movePawnOnBoard(this);
      playerPassedStart(this);
    }

    moveToField(fieldNumber: number) {
      this.previousPosition = this.currentPosition;
      this.currentPosition = fieldNumber;
      movePawnOnBoard(this);
      playerPassedStart(this);
    }
}