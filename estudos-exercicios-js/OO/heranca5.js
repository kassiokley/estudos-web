//Nunca substitua funções existentes na linguagem

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

console.log('Escola das Loucuras'.reverse())

Array.prototype.first = function() {
  return this[0]
}

console.log([1, 2, 3, 4, 5, 6].first())
console.log(['a', 'b', 'c'].first())