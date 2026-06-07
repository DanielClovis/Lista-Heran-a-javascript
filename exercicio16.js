class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }

  sacar(valor) {
    if (valor > this.saldo) {
      return 'Saldo insuficiente'
    }

    this.saldo -= valor
    return 'Saque realizado'
  }
}

const conta = new Conta(100)
console.log(conta.sacar(150))
console.log(conta.saldo)
