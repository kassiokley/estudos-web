const escola = [
  {
    nome: 'Turma 1',
    alunos: [{
      nome: 'Flávia',
      nota: 7
    }, {
      nome: 'Marcela',
      nota: 9
    }]
  }, {
    nome: 'Turma 2',
    alunos: [{
      nome: 'Júnior',
      nota: 8
    }, {
      nome: 'Geraldo',
      nota: 6
    }]
  }, {
    nome: 'Turma 3',
    alunos: [{
      nome: 'Alex',
      nota: 4
    }, {
      nome: 'Paula',
      nota: 3
    }]
  },
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

//Não existe esse metodo na API padrão
Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)