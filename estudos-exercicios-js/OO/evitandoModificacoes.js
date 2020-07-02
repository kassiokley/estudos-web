//Objetc.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Francisco', preco: 1.88, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Chiquin'
produto.discricao = 'Compiladores'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Henrique', idade: 50 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Holanda'
delete pessoa.nome
pessoa.idade = 35
console.log(pessoa)

//Objetc.freeze = selado + valores constantes