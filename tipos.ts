//Boolean

const contaPaga: boolean = false;

//Number

const idade: number = 14;
const avaliacao: number = 4.5;

//String

const nome: string = "Marcos";

// Array

const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [10.4, 4, 9];

//Tuple
let jogadores : [string, string, string, number, number];
jogadores = [ "Marcos", "Ronaldo", "Tafaréu", 7,8];

//Enum

enum StatusAprovacao {
    Aprovado = "001", 
    Pendente = "002", 
    Rejeitado = "003",
};

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any

const retornoDaAPI: any [] = [123, "Marcos", false];

const retornoDaAPI2: any = {
    //..............
};

//Void

function printaNaTela(msg: string): void {
    console.log(msg);
}

//Null e Undefined

const u: undefined = undefined;
const n: null = null;

//Object

function criar(objecto: object){
    //...........
};

criar({
    propriedade:1
});

//Never

function loopInfinito(): never {
    while(true){}
};

function erro(msg: string): never { //Exceção do código??
    throw new Error(msg);
};

function falha() {
    return erro("Algo Falhou!")
};

//Union Types

const nota: string | number = 5
function exibirNota (nota: number | string) {
    console.log ("A nota é" + nota);
}

exibirNota("10");
exibirNota(10);

//Alias - Atalhos

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;

}

type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[]  = [{
    nome: "Marcos",
    sobrenome: "Teixeira",
    dataNascimento: new Date (),
},{
    nome: "Lupita",
    sobrenome: "Teixeira",
    dataNascimento: new Date (),
}];
function tratarFuncionarios(funcionarios: Funcionario[]){
    for( let funcionario of funcionarios ){
        console.log("Nome do Funcionário: " + funcionario.nome)
    };
};

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string,
    telefone1: string,
    telefone2?:string,
};

const contato: Contato = {
    nome: "Marcos",
    telefone1:"123216",
};

//Type Assertion

const minhaIdade: any = 23;
(minhaIdade as number).toString()

