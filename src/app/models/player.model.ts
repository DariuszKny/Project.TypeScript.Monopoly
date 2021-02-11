export class Player {

    private currentPosition: number;
    private previousPosition: number;
    private name: string;
    private money: number;
    private cards!: string[];
    private isJailed: boolean;
    private double: number;
    private areDiceRolled: boolean;

    public constructor(name: string){
        this.currentPosition = 1;
        this.previousPosition = -1;
        this.name = name;
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
        
    public get playerCards() : string[] {
        return this.cards;
    }
    
    public set playerCards(cards : string[]) {
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
}