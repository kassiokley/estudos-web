//coleção dinâmica de pares de chave/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 200
    },
  },
  condutores: [{
    nome: 'Júnior',
    idade: 19,
  }, {
    nome: 'Ana',
    idade: 49
  }],
  calcularValorSeguro: function() {
    // ...
  }
}

carro.proprietario.endereco.numero = 250
carro['proprietario']['endereco']['logradouro'] = 'Rua 4 de Outubro'

console.log(carro)
delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)