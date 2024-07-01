// src/index.ts

class Saudacao2 {
    private mensagem: string;

    constructor(mensagem: string) {
        this.mensagem = mensagem;
    }

    public dizerOla(): void {
        console.log(this.mensagem);
    }
}

const saudacao2 = new Saudacao2("Olá, TypeScript!");
saudacao.dizerOla();
