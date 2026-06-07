class Usuario {
  constructor(nome) {
    this.nome = nome
  }
}

class Professor extends Usuario {
  lancarNota() {
    return `${this.nome} lancou uma nota`
  }
}

class Aluno extends Usuario {
  entregarTrabalho() {
    return `${this.nome} entregou o trabalho`
  }
}

console.log(new Professor('Carlos').lancarNota())
console.log(new Aluno('Daniel').entregarTrabalho())
