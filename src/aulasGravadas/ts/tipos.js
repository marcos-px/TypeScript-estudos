"use strict";
//Boolean
var contaPaga = false;
//Number
var idade = 14;
var avaliacao = 4.5;
//String
var nome = "Marcos";
// Array
var idades = [23, 28, 45];
var idades2 = [10.4, 4, 9];
//Tuple
var jogadores;
jogadores = ["Marcos", "Ronaldo", "Tafaréu", 7, 8];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
;
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, "Marcos", false];
var retornoDaAPI2 = {
//..............
};
//Void
function printaNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(objecto) {
    //...........
}
;
criar({
    propriedade: 1
});
//Never
function loopInfinito() {
    while (true) { }
}
;
function erro(msg) {
    throw new Error(msg);
}
;
function falha() {
    return erro("Algo Falhou!");
}
;
//Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota é" + nota);
}
exibirNota("10");
exibirNota(10);
var funcionarios = [{
        nome: "Marcos",
        sobrenome: "Teixeira",
        dataNascimento: new Date(),
    }, {
        nome: "Lupita",
        sobrenome: "Teixeira",
        dataNascimento: new Date(),
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do Funcionário: " + funcionario.nome);
    }
    ;
}
;
var altura = 1.6;
altura = null;
var contato = {
    nome: "Marcos",
    telefone1: "123216",
};
//Type Assertion
var minhaIdade = 23;
// (minhaIdade as number).toString();
minhaIdade.toString();
// const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
