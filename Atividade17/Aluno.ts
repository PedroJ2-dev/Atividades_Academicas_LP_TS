import { Pessoa } from './Pessoa';

class Aluno extends Pessoa{
    nota:number;

    constructor(nome:string,idade:number,nota:number){
        super(nome,idade);
        this.nota = nota;
    }

    estaAprovado():boolean{
        return this.nota >= 6;
    }
}

function adicionarAluno(nome: string, idade: number, nota: number, listaAlunos: Aluno[]): void
{
    listaAlunos.push(new Aluno(nome, idade, nota));
}

function listarAlunos(alunosLista: Aluno[]): void
{
    console.log("---Lista de Alunos---")

    alunosLista.forEach((aluno, i) => {
        console.log(i+1,"Nome: "+aluno.nome,"Idade: "+aluno.idade)
    });
}

function exibirAprovados(alunosLista: Aluno[]): void
{
    console.log("---Alunos aprovados")

    alunosLista.forEach((aluno, i) => {
        if(aluno.estaAprovado())
            console.log(i+1,aluno.nome,"aprovado com nota: "+aluno.nota)
    });
}

function organizacaoAlfabetica(listaAlunos: Aluno[]): Aluno[]
{
    let nomeDosAlunos: string[] = [];
    let alunosOrganizados: Aluno[] = [];

    listaAlunos.forEach(aluno => {
        nomeDosAlunos.push(aluno.nome);
    });
    nomeDosAlunos.sort()

    for(let nome of nomeDosAlunos)
    {
        for(let aluno of listaAlunos)
        {
            if(aluno.nome == nome)
            {
                alunosOrganizados.push(aluno);
                break;
            }
        }
    }
    return alunosOrganizados;
}

let alunosLista: Aluno[] = [
    new Aluno("Pedro", 19, 10),
    new Aluno("Jorge", 20, 8),
    new Aluno("Ana", 21, 9),
    new Aluno("Vinicius", 19, 3),
    new Aluno("Pamela", 17, 5),
    new Aluno("Bartolomeu", 21, 7)
]
adicionarAluno("Luan", 20, 9, alunosLista);

alunosLista = organizacaoAlfabetica(alunosLista);

listarAlunos(alunosLista);
exibirAprovados(alunosLista);







