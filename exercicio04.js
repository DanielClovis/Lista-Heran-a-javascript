class Carro {
  constructor() {
    this.velocidade = 0
  }

  acelerar() {
    this.velocidade += 10
  }
}

const carro = new Carro()
carro.acelerar()
console.log(carro.velocidade)
