class Die{
    constructor(sides){
        this._sides = sides;
    }

    roll(){
        return Math.ceil(Math.random() * this._sides);
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.totalScore = 0;
        this.currentTurnScore = 0;
        this.isEndGameStarter = false;

        this.heldDice = [];
        
    }

    rollDice(dice){

    }
}

class PlayerTurn{
    constructor(rules){
        this.rollSets = [];
        this.rules = rules;
        this.isFarkle = false;

    }

    score(){
        // figure out the total score for the round by adding up the set scores
        var s = 0;
        this.rollSets.forEach((s)=>{
            s += this.setScore(s);
        });
    }
    setScore(dieSet){


    }
}

class Rules {
    constructor(){
    }

    score(dice){

    }

    hasFives(){

    }
    hasOnes(){

    }
    hasPair(){

    }
    hasTwoPair(){

    }
    hasThreePair(){

    }
    hasTwoThreeOfAKinds(){

    }
    hasStraight(){

    }

}