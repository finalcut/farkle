class Farkle {
    constructor(playerCount){
        this._dieCount = 6;
        this._dieSides = 6;
        console.log("setting up game for " + playerCount + " players");
        this.dice = [];
        for(var i = 1; i<=this._dieCount; i++){
            this.dice[i-1] = new Die(this._dieSides);
        }

        console.log("test rolling the dice");

        this.dice.forEach((d)=>{
            console.log("rolled... " + d.roll());
        });
    }

    drawGame(){

    }

    drawPlayer(player){

    }
    
}
