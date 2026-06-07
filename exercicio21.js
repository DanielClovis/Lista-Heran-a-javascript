class Produto {
  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }
}

class Carrinho {
  constructor() {
    this.produtos = []
  }

  adicionarProduto(produto) {
    this.produtos.push(produto)
  }

  calcularTotal() {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0)
  }
}

const carrinho = new Carrinho()
carrinho.adicionarProduto(new Produto('Mouse', 50))
carrinho.adicionarProduto(new Produto('Teclado', 100))
console.log(carrinho.calcularTotal())
