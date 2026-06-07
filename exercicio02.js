class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`)
  }
}

const pessoa = new Pessoa('Daniel')
pessoa.falar()
