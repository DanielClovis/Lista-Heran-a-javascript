class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }

  transferir(valor, contaDestino) {
    if (valor > this.saldo) {
      return 'Saldo insuficiente'
    }

    this.saldo -= valor
    contaDestino.saldo += valor
    return 'Transferencia realizada'
  }
}

const conta1 = new Conta(500)
const conta2 = new Conta(100)

console.log(conta1.transferir(200, conta2))
console.log(conta1.saldo)
console.log(conta2.saldo)
