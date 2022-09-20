"use strict";
//Boolean
const contaPaga = false;
//Number
const idade = 14;
const avaliacao = 4.5;
//String
const nome = "Marcos";
// Array
const idades = [23, 28, 45];
const idades2 = [10.4, 4, 9];
//Tuple
let jogadores;
jogadores = ["Marcos", "Ronaldo", "Tafaréu", 7, 8];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
;
const statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
const retornoDaAPI = [123, "Marcos", false];
const retornoDaAPI2 = {
//..............
};
//Void
function printaNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
const u = undefined;
const n = null;
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
const nota = 5;
function exibirNota(nota) {
    console.log("A nota é" + nota);
}
exibirNota("10");
exibirNota(10);
const funcionarios = [{
        nome: "Marcos",
        sobrenome: "Teixeira",
        dataNascimento: new Date(),
    }, {
        nome: "Lupita",
        sobrenome: "Teixeira",
        dataNascimento: new Date(),
    }];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log("Nome do Funcionário: " + funcionario.nome);
    }
    ;
};


