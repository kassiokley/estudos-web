//O formato JSON não imprime funções existentes

const pessoa = {
  nome: 'Henrique',
  idade: 36,
  falar() {
    return console.log('Super')
  }
}

console.log(JSON.stringify(pessoa))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))