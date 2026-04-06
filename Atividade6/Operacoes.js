let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

let num1 = parseFloat(numero1);
let num2 = parseFloat(numero2);

let subtracao = num1 - num2;
let soma = num1 + num2;
let produto = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

alert("Número 1: " + num1 + "\nNúmero 2: " + num2 + "\n\nOperações:" + "\nSoma: " + soma
    + "\nSubtração: " + subtracao + "\nProduto: " + produto + "\nDivisão: " + divisao +
    "\nResto da Divisão: " + resto);