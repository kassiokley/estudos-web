Array.prototype.reduce2 = function(callback) {
  let acumulador = this[0]
  for(let i = 1; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i. this)
  }
  return acumulador
}

const alunos = [
  {nome: 'Kássio', nota: 10, bolsista: false},
  {nome: 'Segundo', nota: 5.5, bolsista: true},
  {nome: 'Filipe', nota: 7, bolsista: true},
  {nome: 'Raimundo', nota: 8.3, bolsista: false},
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas))

//Desafio 2: Algum aluno é bolsista
const algumBolsista =  (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))