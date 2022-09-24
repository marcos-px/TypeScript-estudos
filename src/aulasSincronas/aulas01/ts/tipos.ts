import { mensagem } from './mensagem';

function imprimeMensagem(texto: string): void {
    console.log(`Mensagem: ${texto}`);
}

imprimeMensagem(mensagem());

/**
 * Tipos basicos
 */

//string
const nome: string = "erik";
const sobrenome = "borges";

function nomeCompleto(nome: string, sobrenome: string) {
    return `${nome} ${sobrenome}`;
}

const nomeComp = nomeCompleto(nome, sobrenome);
console.log(`Tipo string: ${typeof nomeComp} ${nomeComp}`);

// number
const idade: number = 31;
const altura = 1.67;

function somaIdadeAltura(idade: number, altura: number): number {
    return idade + altura;
}

const idadeAltura = somaIdadeAltura(idade, altura);
console.log(`Tipo number: ${typeof idadeAltura} ${idadeAltura}`);

// boolean
const aprovado: boolean = true;
const reprovado = false;

const testaValores = (aprovado: boolean, reprovado: boolean): boolean => {
    return aprovado && reprovado;
}

const testeValores = testaValores(aprovado, reprovado);
console.log(`Tipo boolean: ${typeof testeValores} ${testeValores}`);

// any e void
let valor: any = 'teste';
//valor = 100;

const concatenaAny = (valor: any): void => {
    console.log(`Tipo any: ${typeof valor} ${valor}`);
}

//const concatAny = concatenaAny(valor);
//console.log(`Tipo any: ${concatAny}`);
concatenaAny(valor);

/**
 * Array
 */
const frutas: string[] = ['abacate', 'abacaxi', 'pitaia'];
const verduras = ['couve', 'alface', 'almerao'];

function modificaLista(lista: string[]): string[] {
    let novaLista: string[] = [];
    for(let item of lista){
        novaLista.push(`${item} verde`);
    }
    return novaLista;
}

const listaModificada = modificaLista(frutas);
console.log(`Tipo array: ${typeof listaModificada} ${listaModificada}`);