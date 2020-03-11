for (let i = 1; i <= 10; i++) {
    console.log('OUTER LOOP:', i);
    for (let j = 10; j >= 0; j -= 2) {
        console.log('INER LOOP', j);
    }
}

const gameBoard = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19]
];

for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    console.log(row);
    for (let j = 0; j < row.length; j++) {
        conseol.log(row[i]);
    }
}