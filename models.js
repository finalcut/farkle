class Die{
    constructor(sides){
        this._sides = sides;
        this.reset();
    }

    roll(){
        if(!this.isLocked){
            this.value = Math.ceil(Math.random() * this._sides);
        }
        return this.value;
    }
    reset(){
        this.value = '-';
        this.isLocked = 0;
    }
}

class Player{
    constructor(name){
        this._name = name.trim();
        this.initialize();
    }

    get name(){
        return this._name;
    }

    initialize(){
        this.dice = [];
        this.totalScore = 0;
        this.currentTurnScore = 0;
        this.isEndGameStarter = false;
        
        this.heldDice = []; // history of dice kept per roll.
        this.tempBank = []; // values that can't be picked back up because you've finished the six dice and kept rolling
    }

    giveDice(dice){
        this.dice = dice;
        this.dice.forEach((d)=>{
            d.reset();
        });
    }

    rollDice(dice){
        this.dice.forEach((d)=>{
            if(!d.isLocked){
                d.roll();
            }
        });
    }

    continueTurn(){
        // player kept all six dice and is picking them all up
        this.tempBank.push(this.heldDice);
        this.heldDice = [];
        this.dice.forEach((d)=>{
            d.reset();
        });
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