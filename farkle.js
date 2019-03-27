class Farkle {
    constructor(){
        this._dieCount = 6;
        this._dieSides = 6;
        this.dice = [];

        this.players = [];

        for(var i = 1; i<=this._dieCount; i++){
            this.dice[i-1] = new Die(this._dieSides);
        }


        // we're going to use these to keep track of the current player
        // and loop back to the first player after the last player goes.
        this.currentPlayer = null;
        this.currentPlayerIndex = 0;

        // now that everything is setup; draw some dice.
        this.drawDice();
 
    }

    startGame(){
        this.currentPlayer = this.players[this.currentPlayerIndex];
        this.currentPlayer.giveDice(this.dice);
    }

    endTurn(){
        var firstPlayer = 0;
        var lastPlayer = this.players.length -1;

        this.currentPlayerIndex = 
            this.currentPlayerIndex === lastPlayer ? 
                firstPlayer : 
                this.currentPlayerIndex++;
        
        this.currentPlayer = this.players[this.currentPlayerIndex];
        this.currentPlayer.giveDice(this.dice);
        this.drawDice();
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
            wrapper.className = 'col-sm-2 btn';

            var span = document.createElement('span');
            span.className = 'btn btn-danger col-sm-1';
            span.innerText=d.value;

            wrapper.appendChild(span);
            div.appendChild(wrapper);
        });

    }
    
}
