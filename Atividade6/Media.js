let nome, nota1, nota2, nota3, nota4;

nome = prompt("Digite o nome do Aluno")

nota1 = prompt("Digite a Primeira Nota do Aluno");
nota2 = prompt("Digite a Segunda Nota do Aluno");
nota3 = prompt("Digite a Terceira Nota do Aluno");
nota4 = prompt("Digite a Quarta Nota do Aluno");

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) +parseFloat(nota4))/ 4;

alert("Nome do Aluno: " + nome + "\nMedia: " + media)