class Animal {
  constructor(nome, tipo) {
    this.nome = nome
    this.tipo = tipo
  }
}

const cachorro = new Animal('Rex', 'cachorro')
const gato = new Animal('Mimi', 'gato')
const passaro = new Animal('Piu', 'passaro')

console.log(cachorro)
console.log(gato)
console.log(passaro)
