class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
  }
}

class Biblioteca {
  constructor() {
    this.livros = []
  }

  adicionarLivro(livro) {
    this.livros.push(livro)
  }

  buscarPorAutor(nome) {
    return this.livros.filter((livro) => livro.autor === nome)
  }
}

const biblioteca = new Biblioteca()
biblioteca.adicionarLivro(new Livro('Dom Casmurro', 'Machado de Assis'))
biblioteca.adicionarLivro(new Livro('Memorias Postumas', 'Machado de Assis'))
console.log(biblioteca.buscarPorAutor('Machado de Assis'))
