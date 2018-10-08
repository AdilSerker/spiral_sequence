const {getSequence} = require('../lib');
const {assert} = require('chai');

describe('matrix test',()=>{
  it('should make a sequence', ()=>{
    const matrix =
      [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
    const sequence = getSequence(matrix);
    assert.deepEqual(sequence, '5 4 7 8 9 6 3 2 1 ');
  })
});
