//Exibi numero de 1 a 10
for(let i: number=1;i<=10;i++){
    console.log(i);
}

//Calcula 100 fatorial e exibi
let soma: number = 1;
for(let i: number=1;i<=100;i++){
    soma = i * soma;
}
console.log(soma);

//Exibi números pares entre 1 e 20
let indice: number = 1;
while(indice<=20){
    if(indice%2 == 0)
        console.log(indice);
    indice++;
}
    

