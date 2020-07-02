const alunos = [
  {nome: 'João', nota: 2},
  {nome: 'vagner', nota: 4},
  {nome: 'Fabrício', nota: 6},
  {nome: 'Lara', nota: 7},
  {nome: 'Ximena', nota: 9},
]

//Abordagem IMPERATIVA
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Abordagem DECLARATIVA
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)