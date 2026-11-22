let listaPar: number[] = [1,7,3,8,2,9];
let listaImpar: number[] = [2,8,4,10,5];

console.log(`Mediano da lista par = ${calcularMediano(listaPar)}`)
console.log(`Mediano da lista impar = ${calcularMediano(listaImpar)}`)

function calcularMediano(lista: number[]): number{
    let size: number = lista.length;
    //ordena a lista de forma crescente
    lista.sort((x,y) => x-y);
    
    //verifica se a quantia de numeros da lista é par
    let mediano: number;
    
    //sempre diminui o valor da posição na lista por 1, pois array começa em 0
    if(size % 2 == 0) //se for par soma os dois valores do meio e divide
        mediano = (lista[size/2-1] + lista[size/2+1-1]) / 2;
    else //se for impar atribui o valor do meio
        mediano = lista[(size/2+0.5)-1];

    return mediano;
}