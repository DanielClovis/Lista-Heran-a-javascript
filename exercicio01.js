class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
  }
}

const livro1 = new Livro('Dom Casmurro', 'Machado de Assis')
const livro2 = new Livro('O Hobbit', 'J. R. R. Tolkien')

console.log(livro1)
console.log(livro2)
