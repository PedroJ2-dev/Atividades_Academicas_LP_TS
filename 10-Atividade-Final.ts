class Aluno {
    nome: string;
    nota: number;
    frequencia: number;
    mediaPond: number;
    aprovado: boolean = false;

    constructor(nome: string, nota: number, frequencia: number){
        this.nome = nome;
        this.nota = nota;
        this.frequencia = frequencia;
        //Calcula a media ponderada nota vale 60% e frequencia vale 40%
        this.mediaPond = ((nota * 6) + (frequencia * 4)) / 10;
    }
}

//Cria um array de alunos
let alunos: Aluno[] = [];

alunos.push(
    new Aluno("Luan", 90, 68)
);
alunos.push(
    new Aluno("Gohan", 86, 90)
);
alunos.push(
    new Aluno("Paola", 55, 79)
);
alunos.push(
    new Aluno("Gandi", 70, 70)
);

//Passa por cada aluno e checa se foi aprovado ou não
for(const aluno of alunos){
    if((aluno.nota >= 60 && aluno.frequencia >= 75) || !(aluno.nota < 90))
        aluno.aprovado = true;
    else
        aluno.aprovado = false;

    console.log(`Aluno: ${aluno.nome}
Nota: ${aluno.nota}
Frequência: ${aluno.frequencia}
Aprovado: ${aluno.aprovado}
Média Ponderada: ${aluno.mediaPond}\n`)
}

