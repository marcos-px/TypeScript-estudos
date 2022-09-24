"use strict";
class Data {
    // public dia: number;
    // mes: number;
    // ano: number;
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(data.mes);
const data2 = new Data(1, 1);
