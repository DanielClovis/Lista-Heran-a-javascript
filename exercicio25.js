class Funcionario {
  constructor(nome, salario) {
    this.nome = nome
    this.salario = salario
  }

  calcularSalario() {
    return this.salario
  }
}

class Vendedor extends Funcionario {
  constructor(nome, salario, comissao) {
    super(nome, salario)
    this.comissao = comissao
  }

  calcularSalario() {
    return this.salario + this.comissao
  }
}

class Diretor extends Funcionario {
  constructor(nome, salario, bonus) {
    super(nome, salario)
    this.bonus = bonus
  }

  calcularSalario() {
    return this.salario + this.bonus
  }
}

console.log(new Vendedor('Ana', 2000, 500).calcularSalario())
console.log(new Diretor('Carlos', 8000, 2000).calcularSalario())
