class Funcionario {
    nome: string;
    horaEntrada: number;
    horaSaida: number;

    constructor(nome: string, horaEntrada: number, horaSaida: number){
        this.nome = nome;
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
    }
}

let funcionarios: Funcionario[] = [];

funcionarios.push(
    new Funcionario("Pedro", 10, 18)
);
funcionarios.push(
    new Funcionario("Maria", 20, 4)
);
funcionarios.push(
    new Funcionario("Jorge", 22, 6)
);
funcionarios.push(
    new Funcionario("Lucas", 8, 20)
);
funcionarios.push(
    new Funcionario("Vitor", 12, 20)
);

for(const funcionario of funcionarios){
    let entrada: number = funcionario.horaEntrada;
    let saida: number = funcionario.horaSaida;

    if((entrada >= 22 || saida < 6) || entrada < 6)
        console.log(funcionario.nome, ", pega o turno da noite")
    else
        console.log(funcionario.nome, ", não trabalha no turno da noite")
}