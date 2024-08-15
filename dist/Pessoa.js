"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //CONSTRUCTOR
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    //MÉTODOS GET E SET
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    setIdade(_idade) {
        this.idade = _idade;
    }
    // MÉTODOS DIAGRAMA
    idadePessoa() {
        return this.idade;
    }
    aniversario() {
        this.idade++;
        return this.idade;
    }
    correr() {
        console.log(`${this.nome} está correndo... RUN ${this.nome} RUN`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map