let number: number = 77;

let indice: number = 2;

while (indice <= number) {
    let resto: number = number % indice;
    if (indice == number)
        console.log(`O número ${number} é primo`);
    else if (resto == 0) {
        console.log(`O número ${number} não é primo, sendo divisivel por ${indice}`);
        break;
    }
    indice++;
}

//Encontra o numero primo mais proximo
let achouPrimoAcima: boolean = false;
let achouPrimoAbaixo: boolean = false;
let numberUp: number = number + 1;
let numberDown: number = number - 1;

for (let i: number = 2; !achouPrimoAcima; i++){
    if (i == numberUp) {
        achouPrimoAcima = true;
        console.log(`O número ${numberUp} é o primo acima`);
    }
    else if ((numberUp % i) == 0) {
        numberUp++;
        i = 2;
    }
}

for (let i: number = 2; !achouPrimoAbaixo; i++){
    if (i == numberDown) {
        achouPrimoAbaixo = true;
        console.log(`O número ${numberDown} é o primo Abaixo`);
    }
    else if ((numberDown % i) == 0) {
        numberDown--;
        i = 2;
    }
}
    