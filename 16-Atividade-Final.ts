class Aluno {
    nome: string;
    nota: number;
    idade: number;
    aprovado: boolean;

    constructor(nome: string, nota: number, idade: number){
        this.nome = nome;
        this.nota = nota;
        this.idade = idade;
        this.aprovado = false;
    }

    verificarAprovacao(): string 
    {
        if(this.nota >= 6)
        {
            this.aprovado = true;
            return `${this.nome} está aprovado com nota ${this.nota}`;
        }
        return `${this.nome} está reprovado com nota ${this.nota}`;
    }

    exibirPerfil(): void
    {
        for(const [chave, valor] of Object.entries(this))
            console.log(chave+": "+valor);
    }
}

//Cria um array de alunos
let alunos: Aluno[] = [];

alunos.push(
    new Aluno("Luan", 10, 19)
);
alunos.push(
    new Aluno("Gohan", 9, 21)
);
alunos.push(
    new Aluno("Paola", 5, 20)
);
alunos.push(
    new Aluno("Gandi", 7, 70)
);

//Passa por cada aluno e checa se foi aprovado ou não e exibe o perfil
alunos.forEach(aluno => {
    console.log(aluno.verificarAprovacao());
    console.log();
    aluno.exibirPerfil();
    console.log()
});

