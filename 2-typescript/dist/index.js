"use strict";
// src/index.ts
var Saudacao = /** @class */ (function () {
    function Saudacao(mensagem) {
        this.mensagem = mensagem;
    }
    Saudacao.prototype.dizerOla = function () {
        console.log(this.mensagem);
    };
    return Saudacao;
}());
var saudacao = new Saudacao("Olá, TypeScript!");
saudacao.dizerOla();
