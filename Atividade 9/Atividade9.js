function maiorNum() 
{
    var a = parseInt(prompt("Digite o primeiro número:"));
    var b = parseInt(prompt("Digite o segundo número:"));
    var c = parseInt(prompt("Digite o terceiro número:"));

    if (a > b && a > c) 
    {
        alert("O maior número é: " + a);
    }
    else if (b > a && b > c) 
    {
        alert("O maior número é: " + b);
    }
    else 
    {
        alert("O maior número é: " + c);
    }
}

function ordemCrescente() 
{
    var a = parseInt(prompt("Digite o primeiro número:"));
    var b = parseInt(prompt("Digite o segundo número:"));
    var c = parseInt(prompt("Digite o terceiro número:"));

    var numeros = [a, b, c];
    numeros.sort(function(x, y) 
    {
        return x - y;
    });

    alert("Os números dados em ordem crescente são: " + numeros.join(", "));
}

function palindromo() 
{
    var palavra = prompt("Digite uma palavra:").toLowerCase().replace(/\s/g, "");

    var palavraReversa = palavra.split("").reverse().join("");
    if (palavra === palavraReversa) 
    {
        alert("A palavra é um palíndromo");
    }
    else 
    {
        alert("A palavra não é um palíndromo");
    }
}

function subconjunto(a, b)
{
    if (!a || !b || a === "" || b === "") 
        {
            return "Erro";
        }
    if (a.toLowerCase().includes(b.toLowerCase()))
    {
        return "É um subconjunto";
    }
    else 
    {
        return "Não é um subconjunto";
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    const button = document.getElementById("Subconjunto");

    button.addEventListener("click", function()
    {
        const a = prompt("Digite a primeira palavra:");
        const b = prompt("Digite a segunda palavra:");
        const resultado = subconjunto(a, b);
        alert(resultado);
    });
});


function diaSemana()
{
    var data = new Date(prompt("Digite a data no formato mm-dd-aaaa:"));
    var dia = data.getDay();
    var diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    alert("O dia da semana é: " + diasSemana[dia]);
}
