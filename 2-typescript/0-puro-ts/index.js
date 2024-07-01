var Saudacao = /** @class */ (function () {
    function Saudacao(mensagem, n) {
        this.mensagem = mensagem;
        this.numero = n;
    }
    Saudacao.prototype.dizerOla = function () {
        console.log(this.mensagem);
        console.log(this.numero);
    };
    return Saudacao;
}());
var saudacao = new Saudacao("Olá, TypeScript!", 1);
saudacao.dizerOla();
