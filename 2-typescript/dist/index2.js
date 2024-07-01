"use strict";
// src/index.ts
var Saudacao2 = /** @class */ (function () {
    function Saudacao2(mensagem) {
        this.mensagem = mensagem;
    }
    Saudacao2.prototype.dizerOla = function () {
        console.log(this.mensagem);
    };
    return Saudacao2;
}());
var saudacao2 = new Saudacao2("Olá, TypeScript!");
saudacao.dizerOla();
