const roll = () => {
    // rolls between 2 - 6
    // no rolling 1 for brandi dog
    return Math.floor(Math.random() * Math.floor(5))+2;
}

class Deck {
    constructor(){
        this.deck=[];
        this.shuffle();
        this.currentHand=[];
    }

    //  returns the array of shuffled deck of cards
    //  a playing deck consists of 2 decks of cards, 52 standard cards each and 2 jokers.
    shuffle(){
        // reset
        let cards = ["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"]
        let jokers = ["JOKER","JOKER","JOKER","JOKER"]
        let result = []
        result.push(...jokers)
        for(let i =0; i<8; i++) {
            result.push(...cards)
        }

        // shuffle cards Durstenfeld Shuffle
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        this.deck = result
        return this.deck;
    }

    deal(players=2,cardCount=2){
        if( players < 2 || cardCount < 2 ) {throw new Error('Parameter minimums are 2')}
        if(cardCount > 6 ) {throw new Error('card count maximum is 6')}
        if(players > 18 ) {throw new Error('players maximum is 18')}
        let result = []
        for(let i = 0; i < players; i++){

            let temp = []
            for (let j = 0 ; j < cardCount; j++){
                temp.push(this.deck.pop())
            }
            result.push(temp)
        }
        this.currentHand=result

        this.shuffle()

        // console.log("result:",result)
        return this.currentHand
    }

}

module.exports = {roll, Deck};