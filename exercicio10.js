class Lampada {
  constructor() {
    this.ligada = false
  }

  ligar() {
    this.ligada = true
  }

  desligar() {
    this.ligada = false
  }
}

const lampada = new Lampada()
lampada.ligar()
console.log(lampada.ligada)
lampada.desligar()
console.log(lampada.ligada)
