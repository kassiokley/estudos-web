const tecnologia = new Map()
tecnologia.set('react', { framework: true})
tecnologia.set('angular', { framework: false})

console.log(tecnologia.react)
console.log(tecnologia.get('react').framework)

const chavesVariadas = new Map([
  [function() {}, 'função'],
  [{}, 'Objeto'],
  [123, 'Números']
])

chavesVariadas.forEach((valor, chave) => {
  console.log(valor, chave)
})

console.log(chavesVariadas.has(123)) //has mostra se existe o valor
console.log(chavesVariadas.has(456))
console.log(chavesVariadas.size)

//Não pode existir chaves iguais
chavesVariadas.set(456, 'a')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)