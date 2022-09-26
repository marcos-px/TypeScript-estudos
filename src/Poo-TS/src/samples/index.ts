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
        idade: idade,
        // morre:Date
        
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

// const ser = new Ser("Lupita",5);
// ser.morre(new Date());

class SerAnimal implements Animal {
    nome: string;
    idade: number;
    dtObito?: Date;
    peso: number;

    constructor(serVivo: SerVivo, peso:number){
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.peso = peso;
}
morre(data: Date): void {
    this.dtObito = data;
}
};

class SerVegetal implements Vegetal {
    nome: string;
    idade: number;
    dtObito?: Date;
    localizacao: Localizacao;

    constructor(serVivo: SerVegetal, idade:number, localizacao:Localizacao){
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.localizacao = localizacao;
}
morre(data: Date): void {
    this.dtObito = data;
}
};

const serGato = new Ser("Belchior", 1);
const gato = new SerAnimal(serGato,8);

const serRosa = new Ser("rosa", 1);
const rosa = new SerVegetal(serRosa,15,{latitude:0,longitude:0});

gato.morre(new Date());
rosa.morre(new Date());

console.log(gato);
console.log(rosa);

//Herança

class SerAnimal1  extends Ser implements Animal{
    peso: number;

    constructor(nome: string, idade: number, peso: number) {
        super(nome, idade);
        this.peso = peso;
        
    }
}

class SerVegetal1  extends Ser implements Vegetal{
    localizacao: Localizacao;

    constructor(nome: string, idade: number, localizacao: Localizacao) {
        super(nome, idade);
        this.localizacao = localizacao;
        
    }
}

const galinha = new SerAnimal1("galinha", 1, 2);
const camara = new SerVegetal1("camara", 2, { latitude: 1000, longitude: 1000});

galinha.morre(new Date());
camara.morre(new Date());
console.log(galinha);
console.log(camara);

//Modificadores de Acesso:

interface SerVivo2{
    
}