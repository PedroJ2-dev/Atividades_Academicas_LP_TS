let lista: number[] = [1,5,4,2,4,2,2];
console.log(`A moda da lista é = ${calcularModa(lista)}`)

function calcularModa(lista: number[]): number{
    //cria um dicionario com numero/frequencia
    const frequencias = new Map<number, number>();

    for (const numero of lista){
        frequencias.set(numero, (frequencias.get(numero) || 0) + 1);
    }

    let maiorFrequencia: number = 0;
    let moda: number = lista[0];

    //passa por cada valor do map e descobre qual o numero com a maior frequencia
    for (const [numero, frequencia] of frequencias){
        if(frequencia > maiorFrequencia){
            maiorFrequencia = frequencia;
            moda = numero;
        }
    }

    return moda;
}