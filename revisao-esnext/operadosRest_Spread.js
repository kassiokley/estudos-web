//Operador Rest(juntar)/Spread(espalhar) -> ...

//exemplo de rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}

console.log(total(2, 3, 4, 5))

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 7000.00}
const clone = { ativo: true, ...funcionario }
console.log(funcionario)
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Josefa']
const grupoFinal = ['Glória', ...grupoA, 'Segundo']

console.log(grupoA)
console.log(grupoFinal)