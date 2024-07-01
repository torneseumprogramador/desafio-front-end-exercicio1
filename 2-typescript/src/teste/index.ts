// src/index.ts

class Saudacao3 {
    private mensagem: string;

    constructor(mensagem: string) {
        this.mensagem = mensagem;
    }

    public dizerOla(): void {
        console.log(this.mensagem);
    }
}

const saudacao3 = new Saudacao3("Olá, TypeScript!");
saudacao.dizerOla();
