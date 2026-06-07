class Veiculo {
  mover() {
    return 'O veiculo esta se movendo'
  }
}

class Aviao extends Veiculo {
  mover() {
    return 'O aviao esta voando'
  }
}

class Carro extends Veiculo {
  mover() {
    return 'O carro esta andando'
  }
}

console.log(new Aviao().mover())
console.log(new Carro().mover())
