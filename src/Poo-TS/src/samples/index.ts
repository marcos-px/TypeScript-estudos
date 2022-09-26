// Type Assertion

const valor: any = 123;
// valor.
console.log(`typeof ${typeof valor} (${valor})`)

const valorStr = (valor as string);

console.log(`typeof ${typeof valorStr} (${valorStr})`)

let valores = ["texto1", 123, true, []];
valores[0] = 123;
let valoresTuple = (valores as [string, number, boolean, never[]])
valoresTuple [0] = "123"; // valida a posição.

//Interfaces

interface Localizacao {
    latitude: number,
    longitude: number
}

interface SerVivo {
    nome: string
}

interface SerVivo {
    idade: number
}

interface Vegetal extends SerVivo {
    localizacao: Localizacao
}

interface Animal extends SerVivo {
    peso: number
}

const criaSerVivo = (nome: string, idade: number): SerVivo => {
    return {
        nome: nome,
        idade: idade
    };
}

const criaVegetal = (serVivo: SerVivo, localizacao: Localizacao): Vegetal => {
    let vegetal = (serVivo as Vegetal);
    vegetal.localizacao = localizacao;

    return vegetal;
}

const criaAnimal = (serVivo: SerVivo, peso: number): Animal => {
    let animal = (serVivo as Animal);
    animal.peso = peso;

    return animal;
}

let cachorro = criaSerVivo('cachorro', 1);
cachorro = criaAnimal(cachorro, 5) as Animal;
console.log(typeof cachorro);

let margarida = criaSerVivo('margarida', 1);
margarida = criaVegetal(margarida, { latitude: 19.000, longitude: 43.000 }) as Vegetal;
console.log(typeof margarida);

/**
 * Classes
 */
interface SerVivo{
    dtObito?: Date;
    morre(data: Date): void;
}

class Ser implements SerVivo {
    nome: string;
    idade: number;
    dtObito?: Date;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    morre(data: Date): void {
        this.dtObito = data;
    }
}