"use strict";
// Type Assertion
const valor = 123;
// valor.
console.log(`typeof ${typeof valor} (${valor})`);
const valorStr = valor;
console.log(`typeof ${typeof valorStr} (${valorStr})`);
let valores = ["texto1", 123, true, []];
valores[0] = 123;
let valoresTuple = valores;
valoresTuple[0] = "123"; // valida a posição.
const criaSerVivo = (nome, idade) => {
    return {
        nome: nome,
        idade: idade,
        // morre:Date
    };
};
const criaVegetal = (serVivo, localizacao) => {
    let vegetal = serVivo;
    vegetal.localizacao = localizacao;
    return vegetal;
};
const criaAnimal = (serVivo, peso) => {
    let animal = serVivo;
    animal.peso = peso;
    return animal;
};
let cachorro = criaSerVivo('cachorro', 1);
cachorro = criaAnimal(cachorro, 5);
console.log(typeof cachorro);
let margarida = criaSerVivo('margarida', 1);
margarida = criaVegetal(margarida, { latitude: 19.000, longitude: 43.000 });
console.log(typeof margarida);
class Ser {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    morre(data) {
        this.dtObito = data;
    }
}
// const ser = new Ser("Lupita",5);
// ser.morre(new Date());
class SerAnimal {
    constructor(serVivo, peso) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.peso = peso;
    }
    morre(data) {
        this.dtObito = data;
    }
}
;
class SerVegetal {
    constructor(serVivo, idade, localizacao) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.localizacao = localizacao;
    }
    morre(data) {
        this.dtObito = data;
    }
}
;
const serGato = new Ser("Belchior", 1);
const gato = new SerAnimal(serGato, 5);
const serRosa = new Ser("rosa", 1);
const rosa = new SerVegetal(serRosa, 15, { latitude: 0, longitude: 0 });
gato.morre(new Date());
rosa.morre(new Date());
console.log(gato);
console.log(rosa);
//Herança
class SerAnimal1 extends Ser {
    constructor(nome, idade, peso) {
        super(nome, idade);
        this.peso = peso;
    }
}
class SerVegetal1 extends Ser {
    constructor(nome, idade, localizacao) {
        super(nome, idade);
        this.localizacao = localizacao;
    }
}
const galinha = new SerAnimal1("galinha", 1, 2);
const camara = new SerVegetal1("camara", 2, { latitude: 1000, longitude: 1000 });
galinha.morre(new Date());
camara.morre(new Date());
console.log(galinha);
console.log(camara);
