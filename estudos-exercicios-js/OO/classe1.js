class Lancamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class ClicoFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamento = []
  }

  addLancamentos(...lancamento) {
    lancamento.forEach(l => this.lancamento.push(l))
  }

  sumario() {
    let valorConsoliddado = 0
    this.lancamento.forEach(l => {
      valorConsoliddado += l.valor
    })
    return valorConsoliddado
  }
}

const salario = new Lancamento('Salario', 7000)
const contaLuz = new Lancamento('Luz', -300)

const contas = new ClicoFinanceiro(6, 2020)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())
