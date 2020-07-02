const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//Função - Procurar país
const chineses = pessoa => pessoa.pais === 'China'

//Função - Procurar genero
const mulheres = feminino => feminino.genero === 'F'

//Função - Procurar menor salário
const menorSalario = (menor, maior) => menor.salario < maior.salario ? menor : maior

axios.get(url).then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)

  //Desafio - Retornar a mulher chinesa que tem o menor salário
  const resultado = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

  console.log(resultado)
})