const chai = require('chai');
const expect = chai.expect;

const assert = require('assert');

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

// const deck = new utils.Deck()
// console.log(utils)
// console.log("deck: ", deck)
describe('`Deck` class',()=>{
  it('has a deck of cards in an array',()=>{
    // deck=new Deck()
  })
})
 

