const alunos = [
  {nome: 'Kássio', nota: 10, bolsista: false},
  {nome: 'Segundo', nota: 5.5, bolsista: true},
  {nome: 'Filipe', nota: 7, bolsista: true},
  {nome: 'Raimundo', nota: 8.3, bolsista: false},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0) //passando valor inicial

console.log(resultado)

