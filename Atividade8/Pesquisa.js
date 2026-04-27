var Pessoas = [];

for (var i = 0; i < 45; i++) {
  var idade = prompt("Digite a idade da Pessoa " + (i + 1) + ":");
  var sexo = prompt("Digite o sexo da Pessoa " + (i + 1) + " (M/F/O):");
  var opiniao = prompt("Digite a opinião sobre o filme da Pessoa " + (i + 1) + " (ótimo (4), bom (3), regular (2), péssimo (1)):");
  
  Pessoas.push([idade, sexo, opiniao]);
}

var mediaIdade = 0;
var idadeMaisVelha = 0;
var idadeMaisNova = 999;
var qtdPessimo = 0;
var qtdPositivo = 0;
var qtdMasculino = 0;
var qtdFeminino = 0;
var qtdOutro = 0;

for (var j = 0; j < Pessoas.length; j++) {
  mediaIdade += parseInt(Pessoas[j][0]);

  if (parseInt(Pessoas[j][0]) > idadeMaisVelha) {
    idadeMaisVelha = parseInt(Pessoas[j][0]);
  }
  else if (parseInt(Pessoas[j][0]) < idadeMaisNova) {
    idadeMaisNova = parseInt(Pessoas[j][0]);
  }
    if (Pessoas[j][2] == 1) {
        qtdPessimo++;
    }
    else if (Pessoas[j][2] == 4 || Pessoas[j][2] == 3) {
        qtdPositivo++;
    }

    if (Pessoas[j][1] == "M") {
        qtdMasculino++;
    }
    else if (Pessoas[j][1] == "F") {
        qtdFeminino++;
    }
    else {
        qtdOutro++;
    }
}

mediaIdade = mediaIdade / 45;
qtdPositivo = (qtdPositivo / 45) * 100;
qtdPositivo.toFixed(2);
alert("Média das Idades: " + mediaIdade + "\nIdade da Pessoa mais Velha: " + idadeMaisVelha + 
    "\nIdade da Pessoa mais Nova: " + idadeMaisNova + 
    "\nQuantidade de Pessimo: " + qtdPessimo + 
    "\nQuantidade de Opiniões Positivas (Ótimo e Bom): " + qtdPositivo + "%" +
    "\nQuantidade de Pessoas do Sexo Masculino: " + qtdMasculino + 
    "\nQuantidade de Pessoas do Sexo Feminino: " + qtdFeminino + 
    "\nQuantidade de Pessoas de Outros Sexos: " + qtdOutro);