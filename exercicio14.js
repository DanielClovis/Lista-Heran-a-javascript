class Conta {
  constructor(saldo) {
    this.saldo = saldo
  }
}

class ContaPoupanca extends Conta {
  aplicarJuros() {
    this.saldo += this.saldo * 0.05
  }
}

const conta = new ContaPoupanca(1000)
conta.aplicarJuros()
console.log(conta.saldo)
