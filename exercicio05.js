class Produto {
  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }

  aplicarDesconto(porcentagem) {
    this.preco -= this.preco * (porcentagem / 100)
  }
}

const produto = new Produto('Teclado', 100)
produto.aplicarDesconto(10)
console.log(produto)
