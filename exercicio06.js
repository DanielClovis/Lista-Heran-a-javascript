class Contador {
  constructor(valor = 0) {
    this.valor = valor
  }

  incrementar() {
    this.valor++
  }

  decrementar() {
    this.valor--
  }
}

const contador = new Contador()
contador.incrementar()
contador.incrementar()
contador.decrementar()
console.log(contador.valor)
