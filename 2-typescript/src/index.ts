// src/index.ts

class Saudacao {
    private mensagem: string;

    constructor(mensagem: string) {
        this.mensagem = mensagem;
    }

    public dizerOla(): void {
        console.log(this.mensagem);
    }
}

const saudacao = new Saudacao("Olá, TypeScript!");
saudacao.dizerOla();
