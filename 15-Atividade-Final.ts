function soma(a: number, b:number): number
{
    return a + b;
}

function verificarParOuImpar(a: number): string
{
    return a % 2 == 0 ? "Par" : "Impar";
}

function saudacao(nome: string): void
{
    console.log(`Olá, ${nome}! Bem vindo ao sistema.`);
}

//Chama a função soma com 3 pares de numeros diferentes e exibe no console
console.log("Soma de 3+6 =", soma(3,6));
console.log("Soma de 8+27 =", soma(8,27));
console.log("Soma de 334+6867 =", soma(334,6867));

//Chama a função verificarParOuImpar() pra cada numero da lista e os exibe no console
let numeros: number[] = [1,7,12,36,41]
for(const numero of numeros)
{
    console.log(`O número: ${numero} é ${verificarParOuImpar(numero)}`);
}

//Percorre pela lista usuario e chama a função saudacao()
let usuarios: string[] = ["Pedro", "João", "Luan"]
for(const usuario of usuarios)
{
    saudacao(usuario);
}

