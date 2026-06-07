class Veiculo {
  constructor(nome, precisaManutencao) {
    this.nome = nome
    this.precisaManutencao = precisaManutencao
  }
}

class Empresa {
  constructor() {
    this.veiculos = []
  }

  adicionarVeiculo(veiculo) {
    this.veiculos.push(veiculo)
  }

  listarManutencao() {
    return this.veiculos.filter((veiculo) => veiculo.precisaManutencao)
  }
}

const empresa = new Empresa()
empresa.adicionarVeiculo(new Veiculo('Carro 1', true))
empresa.adicionarVeiculo(new Veiculo('Carro 2', false))
console.log(empresa.listarManutencao())
