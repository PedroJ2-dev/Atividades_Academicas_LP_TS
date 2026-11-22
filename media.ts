let lista: number[] = [1,5,7,8,3,9,6,4,2,1];

let sum: number = 0;

//passa por cada numero da lista
lista.forEach((n: number, i: number) => {
    sum = sum + n;

    //quando termina printa no console e retorna o valor da media
    if(lista.length == i+1){
        let media: number = sum / lista.length;
        console.log(`A media dos numeros da lista é ${media}`);
        return media
    }
});