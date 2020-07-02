//Intera em cima de valores
for(let letra of 'cod3r') {
  console.log(letra)
}

const assuntosEcma = [ 'Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
  console.log(i)
}

for(let assunto of assuntosEcma) {
  console.log(assunto)
}

const assuntosMap = new Map([
  ['Map', {abordados: true}],
  ['Set', {abordados: true}],
  ['Promises', {abordados: false}]
])

for(let assunto of assuntosMap) {
  console.log(assunto)
}

for(let chave of assuntosMap.keys()) {
  console.log(chave)
}

for(let value of assuntosMap.values()) {
  console.log(value)
}

for(let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])

for(let letra of s) {
  console.log(letra)
}