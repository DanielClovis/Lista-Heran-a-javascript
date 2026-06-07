class Carro {
  constructor() {
    this.velocidade = 0
  }
}

class CarroEletrico extends Carro {
  constructor(bateria) {
    super()
    this.bateria = bateria
  }
}

const carro = new CarroEletrico(100)
console.log(carro)
