console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
let notas = [9, 8, 7] //forma literal, mas indicada
console.log(aprovados, notas)

//Adicionar elementos
aprovados.push('Paulo')
notas.push(10)
console.log(aprovados, notas)

//Da para adiconar elemento em qualquer posição, não dara erro
aprovados[9] = 'Francisco'
notas[9] = 6
console.log(aprovados, notas)

//Usando o sort -> ordena
aprovados.sort()
notas.sort()
console.log(aprovados, notas)

//Usando o splice -> pode excluir e adicionar elementos
let splic = [1, 2, 3, 4, 5]
splic.splice(4, 1, 'Elemento') //excluiu a 4 posição e adicionou elemento no lugar
console.log(splic)

//Deletando
delete splic[4]
console.log(splic)