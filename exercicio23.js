class Personagem {
  constructor(nome, vida, ataque) {
    this.nome = nome
    this.vida = vida
    this.ataque = ataque
  }

  atacar(inimigo) {
    inimigo.vida -= this.ataque
  }
}

const heroi = new Personagem('Heroi', 100, 20)
const inimigo = new Personagem('Inimigo', 80, 10)

heroi.atacar(inimigo)
console.log(inimigo.vida)
