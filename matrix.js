const {makeMatrix, getSequence} = require('./lib');

const argumentN = 2;
const N = Number(process.argv[argumentN].split('=')[1]);


const matrixSize = 2 * N - 1;
const matrix = makeMatrix(matrixSize);
console.log('Matrix:');
console.log(matrix);

console.log('Sequence:');
console.log(getSequence(matrix));
