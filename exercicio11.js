class Animal {
  emitirSom() {
    return 'Som do animal'
  }
}

class Cachorro extends Animal {
  emitirSom() {
    return 'Latido'
  }
}

const cachorro = new Cachorro()
console.log(cachorro.emitirSom())
