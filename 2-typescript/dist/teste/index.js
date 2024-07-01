"use strict";
// src/index.ts
var Saudacao3 = /** @class */ (function () {
    function Saudacao3(mensagem) {
        this.mensagem = mensagem;
    }
    Saudacao3.prototype.dizerOla = function () {
        console.log(this.mensagem);
    };
    return Saudacao3;
}());
var saudacao3 = new Saudacao3("Olá, TypeScript!");
saudacao.dizerOla();
