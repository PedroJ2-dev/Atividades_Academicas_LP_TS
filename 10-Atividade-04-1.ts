let senha: string = "pedraum@$%2";
let temNumero: boolean = false;

for(const letra of senha)
{
    console.log(letra);
    if(!isNaN(Number(letra)))
        temNumero = true;
        break;
}

console.log("Tem Numero: ", temNumero);
console.log("É maior que 8: ", senha.length > 8);