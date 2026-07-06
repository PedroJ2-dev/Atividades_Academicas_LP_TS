let expo: number = 4489;

if (expo == 0)
    console.log("Raiz igual a 0");
else
{
    let indice: number = 0;
    while(expo>indice)
    {
        indice = indice + 1;
        if (expo / indice == indice)
        {
            console.log(`A raiz de ${expo} é igual a ${indice}`);
            break;
        }
        else if (indice == expo) console.log("Raiz não encontrada do numero: ", expo);
    }
}