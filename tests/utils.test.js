const chai = require('chai');
const expect = chai.expect;

const assert = chai.assert;
// const assert = require('assert');

// dice roll
const utils = require('../utils/')

const roll = utils.roll
describe('`roll` utility method',()=>{
  it('returns a number',()=>{
    expect(roll()).to.be.a('number')
  });

  it('returns a integer',()=>{
    expect(roll()).to.satisfy(Number.isInteger)
  });

  it('returns a maximum of 6',()=>{
    let max = roll();
    for (let i=0;i<1000;i++){
      let temp = roll();
      if (temp>max){max=temp}
    }
    expect(max).to.equal(6)
  })

  it('returns a minimum of 2',()=>{
    let min = roll();
    for (let i=0;i<1000;i++){
      let temp = roll();
      if (temp<min){min=temp}
    }
    expect(min).to.equal(2)
  })

  it('returns either a 2, 3, 4, 5 or 6',()=>{
    let result = {2:0,3:0,4:0,5:0,6:0}
    for(let i=0;i<100;i++){
      let val = roll();
      result[val]++
    }
    expect(result[2]>0).to.be.true &&
    expect(result[3]>0).to.be.true &&
    expect(result[4]>0).to.be.true &&
    expect(result[5]>0).to.be.true &&
    expect(result[6]>0).to.be.true 
  })
});


// Deck tests

describe('`Deck` class',()=>{
  testDeck = new utils.Deck()

  it('has a deck of 108 cards in an array',()=>{
    expect(testDeck.cards).to.be.an('array').to.have.lengthOf(108)
  })

  it('has a deck with exactly four `JOKERS`',()=>{
    let result = 0;
    testDeck.cards.forEach(card=> {
      if (card === "JOKER") result++
    })
    expect(result).to.equal(4)
  })

  it('has a deck with exactly 8 of every standard card(Ace to King)',()=>{
    let tempCount = {"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"JACK":0,"QUEEN":0,"KING":0,"ACE":0}
    // count cards
    testDeck.cards.forEach(card=> {
      tempCount[card]++
    })
    // count everything expect joker
    delete tempCount.JOKER
    // compare values
    expect(Object.values(tempCount)).to.deep.equal([ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8])
  })

  describe('`Deck.shuffle` function',()=>{
    it('is a function',()=>{
      // console.log(assert)
      assert.isFunction(testDeck.shuffle)
    })

    it('shuffles cards',()=>{
      let shuffleTestDeck = new utils.Deck()

      // track current card order
      let initialTempShuffleOrder = "";
      shuffleTestDeck.cards.forEach(element => {
        initialTempShuffleOrder+=element
      });

      // shuffle
      shuffleTestDeck.shuffle()

      // test card order

      let finalTempShuffleOrder = "";
      shuffleTestDeck.cards.forEach(element => {
        finalTempShuffleOrder+=element
      });
      // expect the order to different
      expect(finalTempShuffleOrder).to.not.equal(initialTempShuffleOrder)
    })

    it('returns an array of 108',()=>{
      expect(testDeck.shuffle()).to.have.length(108)
    })
  })
  
    describe('`Deck.deal` function',()=>{
      it('is a function,',()=>{
        assert.isFunction(testDeck.deal)
      })

      it('throws an error if either parameter are less than 2',()=>{
        // assert.throws(testDeck.deal)
        assert.throw( ()=> {testDeck.deal(0,1)})&&
        assert.throw( ()=> {testDeck.deal(1,0)})&&
        assert.throw( ()=> {testDeck.deal(-1,52)})&&
        assert.throw( ()=> {testDeck.deal(0,1)})
      })

      it('throws an error cardcount is greater than 6',()=>{
        // assert.throws(testDeck.deal)
        assert.throw( ()=> {testDeck.deal(2,7)})&&
        assert.throw( ()=> {testDeck.deal(3,8)})&&
        assert.throw( ()=> {testDeck.deal(4,11)})&&
        assert.throw( ()=> {testDeck.deal(5,15)})
      })

      it('returns an array of array cards',()=>{
        // testDeck.deal(2,1)
        // assert.
      })
    })

})
 

