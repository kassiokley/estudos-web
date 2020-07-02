//Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//armazenar em uma variavel
const fun2 = function() {}

//armazenar em um array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3));

//armazenar em um atributo objeto
const obj = {}
obj.falar = function() { return 'Olá'}
console.log(obj.falar());

//como paramentro para outra função
function run(func) {
  func()
}

run(function() { console.log('Executando...')})

//retornando uma função como parametro
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}

soma(3, 2)(4);

const cincoMais = soma(2, 3);
cincoMais(4);