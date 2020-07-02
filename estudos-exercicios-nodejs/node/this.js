console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

console.log('')

function logThis() {
  console.log('Dentro de uma função')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
}

logThis()

//Se this for usando dentro de uma função apontará para GLOBAL
//Se this for usando fora de uma função apontará para MODULE.EXPORTS