const roll = () => {
    // rolls between 2 - 6
    // no rolling 1 for brandi dog
    return Math.floor(Math.random() * Math.floor(5))+2;
}

class Deck {
    constructor(){
        this.cards=[];
        this.shuffle();
    }

    //  returns the array of shuffled deck of cards
    shuffle(){
        let cards = ["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"]
        let jokers = ["JOKER","JOKER","JOKER","JOKER"]
        let result = [].push(...cards,...cards,...cards,...cards,...jokers)
        
        this.cards = result
        return this.cards;
    }

    //  returns 
    // deal(players,cardCount){

    // }

}

module.exports = {roll, Deck};