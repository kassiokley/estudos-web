//pessoa -> para um endereço de memória
const pessoa = {nome: 'Maria'}
console.log(pessoa)

//Quando faço isso to mexendo no atributo de pessoa
pessoa.nome = 'Henrique'
console.log(pessoa)

//Dará erro se tentar fazer atribuição a pessoa, exemplo
//pessoa = {nome: 'Ana'} -> terá um erro

Object.freeze(pessoa) //Paralizo o objeto e nada será atribuido a ele
pessoa.nome = 'Segundo'
pessoa.endereco = 'Rua das Lamurias'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa.endereco)
console.log(pessoa)