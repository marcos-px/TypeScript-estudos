"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mensagem_1 = require("./mensagem");
function imprimeMensagem(texto) {
    console.log("Mensagem: ".concat(texto));
}
imprimeMensagem((0, mensagem_1.mensagem)());
/**
 * Tipos basicos
 */
//string
var nome = "erik";
var sobrenome = "borges";
function nomeCompleto(nome, sobrenome) {
    return "".concat(nome, " ").concat(sobrenome);
}
var nomeComp = nomeCompleto(nome, sobrenome);
console.log("Tipo string: ".concat(typeof nomeComp, " ").concat(nomeComp));
// number
var idade = 31;
var altura = 1.67;
function somaIdadeAltura(idade, altura) {
    return idade + altura;
}
var idadeAltura = somaIdadeAltura(idade, altura);
console.log("Tipo number: ".concat(typeof idadeAltura, " ").concat(idadeAltura));
// boolean
var aprovado = true;
var reprovado = false;
var testaValores = function (aprovado, reprovado) {
    return aprovado && reprovado;
};
var testeValores = testaValores(aprovado, reprovado);
console.log("Tipo boolean: ".concat(typeof testeValores, " ").concat(testeValores));
// any e void
var valor = 'teste';
//valor = 100;
var concatenaAny = function (valor) {
    console.log("Tipo any: ".concat(typeof valor, " ").concat(valor));
};
//const concatAny = concatenaAny(valor);
//console.log(`Tipo any: ${concatAny}`);
concatenaAny(valor);
/**
 * Array
 */
var frutas = ['abacate', 'abacaxi', 'pitaia'];
var verduras = ['couve', 'alface', 'almerao'];
function modificaLista(lista) {
    var novaLista = [];
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        novaLista.push("".concat(item, " verde"));
    }
    return novaLista;
}
var listaModificada = modificaLista(frutas);
console.log("Tipo array: ".concat(typeof listaModificada, " ").concat(listaModificada));
