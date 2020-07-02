//let -> usar no lugar de var
{
  var a = 2 //Não tem escopo de bloco
  let b = 4 //Tem escopo de boloco
  console.log(b)
}

console.log(a)
//console.log(b) -> da erro por não existe o b no escopo global

//const -> quando o valor é constante/imutavel

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Operador Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const { idade, nome} = { nome: 'Karlos', idade: 45}
console.log(nome, idade)