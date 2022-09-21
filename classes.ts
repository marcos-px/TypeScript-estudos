class Data{
    // public dia: number;
    // mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number,public ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano =ano;
    }
}

const data = new Data(1,1,2020);
console.log(data.dia);
console.log(data.mes);

const data2 = new Data(1,1);

class Carro {

    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {  }

    private alterarVelocidade(delta:number){
    //VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
    // this.velocidadeAtual = XX

    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima){
        this.velocidadeAtual = novaVelocidade;
    } else {
        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima:0
    }
    }

acelerar() {
    const aceleracao = 5;
    this.alterarVelocidade(5);
    

}

frear() {
    const frenagem = 5;
    this.alterarVelocidade(-5);
}
}

const carro = new Carro("VW", "carroça", 250);
carro.acelerar();

//
class Camaro extends Carro {
    private turbo = false;
    constructor() {
        super(" Chevrolet", "Camaro", 500)
    }
    ligarTurbo(){
        this.turbo = false
    }
}

const camaro = new Camaro();

camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();

