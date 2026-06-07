class Filme {
  constructor(titulo, anoLancamento) {
    this.titulo = titulo
    this.anoLancamento = anoLancamento
  }

  temMaisDe10Anos() {
    const anoAtual = new Date().getFullYear()
    return anoAtual - this.anoLancamento > 10
  }
}

const filme = new Filme('Interestelar', 2014)
console.log(filme.temMaisDe10Anos())
