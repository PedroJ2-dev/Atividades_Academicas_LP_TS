let notas: number[][] = [
    [7, 8, 8.5, 8.2],
    [6, 4, 5, 7],
    [9, 10, 9.2, 9.8]
];

let media: number[] = [];

for (let i = 0; i < notas.length; i++){
    let notaTotal: number = 0;
    for (let j = 0; j < notas[0].length; j++){
        notaTotal = notaTotal + notas[i][j];
    }
    media.push(notaTotal / 4);
    notaTotal = 0
}

console.log(media)
