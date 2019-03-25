class Farkle {
    constructor(){
        this._dieCount = 6;
        this._dieSides = 6;
        this.dice = [];

        this.players = [];

        for(var i = 1; i<=this._dieCount; i++){
            this.dice[i-1] = new Die(this._dieSides);
        }
    }

    addPlayer(playerName){
        this.players.push(playerName);
    }

    drawGame(){
        document.querySelector('#board').innerHTML='';
        
        this.players.forEach((player)=>{
            this.drawPlayer(player);
        });
        // loop over the players
        // display them on the screen
        // display their score along side their names
        // draw some kind of a dice interface for viewing current dice status
    }

    drawPlayer(player){
        var p = document.createElement('div');
        p.innerText = player;
        document.querySelector('#board').appendChild(p);
    }
    
}
