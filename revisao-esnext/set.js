//Estrutura de conjunto - SET (não aceita repetição e não é indexada)
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('São Paulo').add('Palmerias')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

const nomes = ['Lucas', 'Lucas', 'Segundo', 'Filipe']
const nomeSet = new Set(nomes)
console.log(nomeSet)
console.log(nomeSet.size)