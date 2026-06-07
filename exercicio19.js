class ItemPedido {
  constructor(quantidade, preco) {
    this.quantidade = quantidade
    this.preco = preco
  }

  calcularTotal() {
    return this.quantidade * this.preco
  }
}

const item = new ItemPedido(3, 50)
console.log(item.calcularTotal())
