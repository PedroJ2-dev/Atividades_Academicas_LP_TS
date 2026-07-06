//Cria o objeto usuário
type usuario = {
    nome: string, 
    email: string,
    idade: number,
    ativo: boolean,
    endereco: {
        cep: number,
        numero: number,
        logradouro: string,
        cidade: string,
        estado: string
    }
}

//Cria uma lista de usuários e insere o valor de cada usuário
let usuarios: usuario[] = [{
    nome: "Pedro",
    email: "pedroj2341@gmail.com",
    idade: 19,
    ativo: true,
    endereco: {
        cep: 26112240,
        numero: 142,
        logradouro: "Rua Padre Jorge Vieira",
        cidade: "Belford-Roxo",
        estado: "RJ"
    }
},
{
    nome: "Vitor",
    email: "vgnoobbr@gmail.com",
    idade: 21,
    ativo: false,
    endereco: {
        cep: 32452240,
        numero: 1122,
        logradouro: "Rua Vinicius de Moura",
        cidade: "Inhauma",
        estado: "RJ"
    }
},
{
    nome: "Isabela",
    email: "bebela2005@gmail.com",
    idade: 20,
    ativo: true,
    endereco: {
        cep: 89744360,
        numero: 666,
        logradouro: "Rua da Liberdade",
        cidade: "Liberdade",
        estado: "SP"
    }
}]

console.log()

//Imprime os usuarios
ImprimirListaUsuarios(usuarios)

//Realiza mudança nos valores de alguns usuários
usuarios[1].ativo = true;
usuarios[2].ativo = false;
usuarios[0].idade = 20;

//Acrescenta um novo usuario
usuarios.push({
    nome: "Jonas",
    email: "davyjonasmago@gmail.com",
    idade: 23,
    ativo: true,
    endereco: {
        cep: 25347890,
        numero: 342,
        logradouro: "Rua do Mouro",
        cidade: "Tijuca",
        estado: "RJ"
    }
})

//Imprimi cada usuário após as mudanças de valores e chegada de novo usuário
console.log("Pós mudança: \n");
ImprimirListaUsuarios(usuarios)


//Percorre por cada usuário e exibi no terminal
function ImprimirListaUsuarios(usuarios: usuario[]): void{
    for(let usuario of usuarios){
        for(const [chave, valor] of Object.entries(usuario))
            console.log(chave, ': ', valor);

        console.log('');
    }
}
