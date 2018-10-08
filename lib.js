function makeMatrix(matrixSize)
{
  const matrix = [];
  for (let y = 0; y < matrixSize; ++y) {
    matrix[y] = [];
    for (let x = 0; x < matrixSize; ++x) {
      matrix[y][x] = Math.floor(Math.random() * 10);
    }
  }
  return matrix;
}

function getSequence(matrix){
  let sequence = '';
  const matrixSize = matrix[0].length; // for square matrix
  const position = {
    x: Math.floor(matrix.length/2),
    y: Math.floor(matrix.length/2)
  };
  sequence += matrix[position.y][position.x] + ' ';

  let direction = false;
  let stepCount = 1;
  while(stepCount < matrixSize) {
    for (let sx = 0; sx < stepCount; ++sx) {
      position.x = direction ? position.x + 1 : position.x - 1;

      sequence += matrix[position.y][position.x] + ' ';
    }
    direction = !direction;
    for (let sy = 0; sy < stepCount; ++sy) {
      position.y = direction ? position.y + 1 : position.y - 1;

      sequence += matrix[position.y][position.x] + ' ';
    }
    if (stepCount + 1 === matrixSize) {
      for (let sx = 0; sx < stepCount; ++sx) {
        position.x = direction ? position.x + 1 : position.x - 1;

        sequence += matrix[position.y][position.x] + ' ';
      }
    }
    ++stepCount;
  }

  return sequence;
}

module.exports={
  makeMatrix,
  getSequence,
};
