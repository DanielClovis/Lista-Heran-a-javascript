class Temperatura {
  constructor(celsius) {
    this.celsius = celsius
  }

  paraFahrenheit() {
    return this.celsius * 1.8 + 32
  }
}

const temperatura = new Temperatura(30)
console.log(temperatura.paraFahrenheit())
