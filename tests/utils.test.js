const chai = require('chai');
const expect = chai.expect;

const assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

// dice roll
const utils = require('../utils/')
const roll = utils.roll
describe('`roll` utility method',()=>{
  it('returns a number',()=>{
    expect(roll()).to.be.a('number')
  });

  // it('will eventually roll 2, 3, 4, 5, 6',()=>{
  //   expect
  // })

});

 