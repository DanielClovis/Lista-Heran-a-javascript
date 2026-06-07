class Retangulo {
  constructor(largura, altura) {
    this.largura = largura
    this.altura = altura
  }

  calcularArea() {
    return this.largura * this.altura
  }
}

const retangulo = new Retangulo(10, 5)
console.log(retangulo.calcularArea())
