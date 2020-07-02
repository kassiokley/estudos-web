const aprovados = ['Kássio', 'Filipe', 'Pedro']

//Forma callback
aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}: ${nome}`)
})

//Forma com arrow function
aprovados.forEach(e => console.log(e))

//Criando uma função
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)