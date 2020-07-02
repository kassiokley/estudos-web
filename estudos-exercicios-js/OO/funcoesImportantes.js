const pessoa = {
  nome: 'Francisca',
  idade: 59,
  peso: 89
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach((keys, values) => {
  console.log(`${keys}: ${values}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017'
console.log(pessoa.dataDeNascimento)

//Objetc.assign (ECMAScript 2015)
const dest = { a: 1}
const oo1 = { b: 2}
const oo2 = { c: 3, a: 4 }
const obj = Object.assign(dest, oo1, oo2)
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)