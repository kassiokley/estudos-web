const produto1 = {
  nome: 'Arroz',
  preco: 3.56
}

const produto2 = {
  nome: 'Feijoão',
  preco: 5.79
}

//Pra resolver o problema de repetir várias vezes a mesma coisa
//cria-se o padrão de projeto FACTORY

//Factory simples
function criarPessoa() {
  return { //notação literal de criação de Objeto
    nome: 'Ana',
    sobrenome: 'Faustino'
  }
}

console.log(criarPessoa());