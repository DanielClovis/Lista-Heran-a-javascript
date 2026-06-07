class Funcionario {
  constructor(nome, salario) {
    this.nome = nome
    this.salario = salario
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario)
    this.departamento = departamento
  }
}

const gerente = new Gerente('Ana', 6000, 'Financeiro')
console.log(gerente)
