const argumentN = 2;
const N = Number(process.argv[argumentN].split('=')[1]);

const matrix = [];

const MATRIX_SIZE = 2 * N - 1;

for (let y = 0; y < MATRIX_SIZE; ++y) {
    matrix[y] = [];
    for (let x = 0; x < MATRIX_SIZE; ++x) {
        matrix[y][x] = Math.floor(Math.random() * 10);
    }
}

console.log(matrix);

const getSequence = (matrix) => {
    let sequence = '';
    const position = {
        x: Math.floor(matrix.length/2),
        y: Math.floor(matrix.length/2)
    };
    sequence += matrix[position.y][position.x] + ' ';

    let direction = false;
    let stepCount = 1;
    while(stepCount < MATRIX_SIZE) {
        for (let sx = 0; sx < stepCount; ++sx) {
            position.x = direction ? position.x + 1 : position.x - 1;

            sequence += matrix[position.y][position.x] + ' ';
        }
        direction = !direction;
        for (let sy = 0; sy < stepCount; ++sy) {
            position.y = direction ? position.y + 1 : position.y - 1;

            sequence += matrix[position.y][position.x] + ' ';
        }
        if (stepCount + 1 === MATRIX_SIZE) {
            for (let sx = 0; sx < stepCount; ++sx) {
                position.x = direction ? position.x + 1 : position.x - 1;
    
                sequence += matrix[position.y][position.x] + ' ';
            }
        }
        ++stepCount;
    }

    return sequence;
}

console.log(getSequence(matrix));
