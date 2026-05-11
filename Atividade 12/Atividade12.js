class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calculaArea() {
        return this.base * this.altura;
    }
}

class Conta {
    set saldo(valor) {
        this._saldo = valor;
    }

    set nomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    set numeroConta(numero) {
        this._numeroConta = numero;
    }

    set banco(nomeBanco) {
        this._banco = nomeBanco;
    }

    get saldo() {
        return this._saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }
    
    get numeroConta() {
        return this._numeroConta;
    }

    get banco() {
        return this._banco;
    }
}

class Poupanca extends Conta {
        set juros(valor) {
            this._juros = valor;
        }

        set dataVencimento(data) {
            this._dataVencimento = data;
        }

        get juros() {
            return this._juros;
        }

        get dataVencimento() {
            return this._dataVencimento;
        }
}

class Corrente extends Conta {
    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }
}

base = parseFloat(prompt("Digite a base do retângulo:"));
altura = parseFloat(prompt("Digite a altura do retângulo:"));
Retangulo = new Retangulo(base, altura);

alert("A área do retângulo é: " + Retangulo.calculaArea());

contaCorrente = new Corrente();
contaCorrente.setnomeCorrentista(prompt("Conta Corrente\nDigite o nome do correntista:"));
contaCorrente.setnumeroConta(prompt("Conta Corrente\nDigite o número da conta:"));
contaCorrente.setbanco(prompt("Conta Corrente\nDigite o nome do banco:"));
contaCorrente.setsaldo(parseFloat(prompt("Conta Corrente\nDigite o saldo da conta:")));
contaCorrente.setsaldoEspecial(parseFloat(prompt("Conta Corrente\nDigite o saldo especial da conta:")));

contaPoupanca = new Poupanca();
contaPoupanca.setnomeCorrentista(prompt("Conta Poupança\nDigite o nome do correntista:"));
contaPoupanca.setnumeroConta(prompt("Conta Poupança\nDigite o número da conta:"));
contaPoupanca.setbanco(prompt("Conta Poupança\nDigite o nome do banco:"));
contaPoupanca.setsaldo(parseFloat(prompt("Conta Poupança\nDigite o saldo da conta:")));
contaPoupanca.setjuros(parseFloat(prompt("Conta Poupança\nDigite o valor dos juros:")));
contaPoupanca.setDataVencimento(prompt("Conta Poupança\nDigite a data de vencimento dos juros:"));

alert("Informações da conta corrente:\n" +
    "Nome do correntista: " + contaCorrente.getnomeCorrentista() + "\n" +
    "Número da conta: " + contaCorrente.getnumeroConta() + "\n" +
    "Banco: " + contaCorrente.getbanco() + "\n" +
    "Saldo: " + contaCorrente.getsaldo() + "\n" +
    "Saldo especial: " + contaCorrente.getsaldoEspecial());

alert("Informações da conta poupança:\n" +
    "Nome do correntista: " + contaPoupanca.getnomeCorrentista() + "\n" +
    "Número da conta: " + contaPoupanca.getnumeroConta() + "\n" +
    "Banco: " + contaPoupanca.getbanco() + "\n" +
    "Saldo: " + contaPoupanca.getsaldo() + "\n" +
    "Juros: " + contaPoupanca.getjuros() + "\n" +
    "Data de vencimento dos juros: " + contaPoupanca.getdataVencimento());