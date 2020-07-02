const quaseArray = { 0: 'Rafa', 1: 'Lucas', 2: 'Ana' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
  value: function() { return Object.values(this) },
  enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafa', 'Lucas', 'Ana']
console.log(meuArray, quaseArray.toString())