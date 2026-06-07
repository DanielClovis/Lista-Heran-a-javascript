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

const gerente = new Gerente('Daniel', 5000, 'Tecnologia')
console.log(gerente)
