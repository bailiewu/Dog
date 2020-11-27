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
    //  a playing deck consists of 2 decks of cards, 52 standard cards each and 2 jokers.
    shuffle(){
        let cards = ["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"]
        let jokers = ["JOKER","JOKER","JOKER","JOKER"]
        let result = []
        result.push(...jokers)
        for(let i =0; i<8; i++) {
            result.push(...cards)
        }
        this.cards = result
        return this.cards;
    }

    //  returns 
    // deal(players,cardCount){

    // }

}

module.exports = {roll, Deck};