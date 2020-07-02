//ES8: Object.value -> pega os valores de um objeto
const objValues = { a: 1, b: 2, c:3 }
console.log(Object.values(objValues))

//Object.entries -> retorna chave e valor
const objEntreis = { a: 1, b: 2, c:3 }
console.log(Object.entries(objEntreis))

//Melhorias na Notação Literal
//Forma antiga
const nomeAntigo = 'Carla'
const pessoaAntiga = {
  nome: nomeAntigo,
  olAntigo: function() {
    return 'Olá Antigo!'
  }
}

//Nova forma
const nome = 'Karla'
const pessoa = {
  nome,
  ola() {
    return 'olá'
  }
}

console.log(pessoaAntiga.nome, pessoaAntiga.olAntigo())
console.log(pessoa.nome, pessoa.ola())

//Class e Herança
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au au'
  }
}

console.log(new Cachorro().falar())