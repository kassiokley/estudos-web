//Tagged Template -> processa um template dentro de uma função
function tag(partes, ...valores) { //operador rest (...)
  console.log(partes)
  console.log(valores)

  return 'Outra String'
}

const aluno = 'Filipe'
const situacao = 'Aprovado'
console.log(`${aluno} está ${situacao}`)
console.log(tag `${aluno} está ${situacao}`)