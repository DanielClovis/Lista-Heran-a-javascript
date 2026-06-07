class Forma {
  desenhar() {
    return 'Desenhando forma'
  }
}

class Circulo extends Forma {
  desenhar() {
    return 'Desenhando circulo'
  }
}

class Quadrado extends Forma {
  desenhar() {
    return 'Desenhando quadrado'
  }
}

console.log(new Circulo().desenhar())
console.log(new Quadrado().desenhar())
