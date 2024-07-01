class Saudacao {
    private mensagem: string;
    private numero: number;

    constructor(mensagem: string, n: number) {
        this.mensagem = mensagem;
        this.numero = n;
    }

    public dizerOla(): void {
        console.log(this.mensagem);
        console.log(this.numero);
    }
}

const saudacao = new Saudacao("Olá, TypeScript!", 1);
saudacao.dizerOla();
