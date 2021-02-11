export class Player {

    private position: number;
    private name: string;
    private money: number;
    private cards!: string[];

    public constructor(name: string){
        this.position = 1;
        this.name = name;
        this.money = 1500;
    } 
    
    public get playerPosition() : number {
        return this.position;
    }

    
    public set playerPosition(position : number) {
        this.position = position;
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
    
}