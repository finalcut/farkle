class Farkle {
    constructor(){
        this._dieCount = 6;
        this._dieSides = 6;
        this.dice = [];

        this.players = [];

        for(var i = 1; i<=this._dieCount; i++){
            this.dice[i-1] = new Die(this._dieSides);
        }

        this.currentPlayer = null;
        this.currentPlayerIndex = 0;

        this.drawDice();
 
    }

    startGame(){
        this.currentPlayer = this.players[this.currentPlayerIndex];
        this.currentPlayer.giveDice(this.dice);
    }

    endTurn(){
        var firstPlayer = 0;
        var lastPlayer = this.players.length -1;
        this.currentPlayerIndex = this.currentPlayerIndex === lastPlayer ? firstPlayer : this.currentPlayerIndex++;
        this.currentPlayer = this.players[this.currentPlayerIndex];
    }

    roll(){
        this.currentPlayer.rollDice();
        this.drawDice();
    }

    addPlayer(playerName){
        this.players.push(new Player(playerName));
    }

    drawGame(){
        document.querySelector('#board').innerHTML='';
        
        this.players.forEach((player)=>{
            this.drawPlayer(player);
        });
   }

    drawPlayer(player){
        var p = document.createElement('div');
        p.innerText = player.name;
        document.querySelector('#board').appendChild(p);
    }

    drawDice(){
        var div = document.querySelector('#dice');
        div.innerHTML = '';
        var index = 0;
        this.dice.forEach((d)=>{
            var wrapper = document.createElement('div');
            wrapper.setAttribute('id','die'+index+'wrapper');
            wrapper.className = 'col-sm-2 btn btn-danger';

            var span = document.createElement('span');
            span.innerText=d.value;

            wrapper.appendChild(span);
            div.appendChild(wrapper);
        });

    }
    
}
