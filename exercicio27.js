class Contato {
  constructor(nome, telefone) {
    this.nome = nome
    this.telefone = telefone
  }
}

class Agenda {
  constructor() {
    this.contatos = []
  }

  adicionarContato(contato) {
    this.contatos.push(contato)
  }

  excluirContato(nome) {
    this.contatos = this.contatos.filter((contato) => contato.nome !== nome)
  }
}

const agenda = new Agenda()
agenda.adicionarContato(new Contato('Daniel', '9999-9999'))
agenda.adicionarContato(new Contato('Ana', '8888-8888'))
agenda.excluirContato('Ana')
console.log(agenda.contatos)
