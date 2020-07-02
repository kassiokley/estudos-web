//Isso só funciona se a função for declarada como function declaration
//Se fizer o mesmo para as outras duas, irá ocorre um erro
console.log(soma(2, 2));

//function declaration
function soma(x, y) {
  return x + y;
}

//function expression
const subtracao = function (x, y) {
  return x - y;
}

//named function expression
const multiplicacao = function multiplicacao(y, y) {
  return x * y;
}

