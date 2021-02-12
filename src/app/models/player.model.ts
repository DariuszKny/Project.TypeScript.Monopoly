import { NUMBER_OF_FIELDS } from "../constants/game-constants"

export class Player {

    private currentPosition: number;
    private previousPosition: number;
    private name: string;
    readonly goodChampion: boolean;
    private money: number;
    private cards!: number[];
    private isJailed: boolean;
    private double: number;
    private areDiceRolled: boolean;

    public constructor(name: string, goodChampion: boolean){
        this.currentPosition = 0;
        this.previousPosition = -1;
        this.name = name;
        this.goodChampion = goodChampion;
        this.money = 1500;
        this.isJailed = false;
        this.double = 0;
        this.areDiceRolled = false;
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

    public get playerAreDiceRolled() : boolean {
        return this.areDiceRolled;
    }

    public set playerAreDiceRolled(areDiceRolled : boolean) {
        this.areDiceRolled = areDiceRolled;
    }

    takeMoney(amount : number) {
        this.playerMoney = this.playerMoney + amount;
    }

    giveMoney(amount : number) {
        if(this.playerMoney > amount) this.playerMoney = this.playerMoney - amount;
        else console.log("You don't have enough money");
    }

    move(numberOfFields: number) {
      this.previousPosition = this.currentPosition;
      this.currentPosition = (this.currentPosition + numberOfFields) % NUMBER_OF_FIELDS;
    }
}