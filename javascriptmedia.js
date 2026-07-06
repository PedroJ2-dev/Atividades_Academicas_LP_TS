let nome = "Cleiton";

let nota1 = 5.2;
let nota2 = 5.5;
let nota3 = 4.0;

let media = (nota1 + nota2 + nota3) / 3;

console.log("O aluno", nome, "foi: ");

if(media > 6)
{
    console.log("Aprovado, com média", media);
}
else
{
    console.log("Reprovado, faltam ", 6 - media, " pontos para ele ser aprovado" );  
}