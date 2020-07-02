//Armazenando uma função sem retorno em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
}

imprimirSoma(2, 7);

//Armazenando uma função com retorno em uma variavel
const soma = function (a, b = 0) {
  return a + b;
}

console.log(soma(2, 5));

//Feito com arrowFunction
const imprimiSoma = (a, b) => console.log(a + b);
imprimiSoma(6, 7);

const somar = (a, b = 0) => a + b;
console.log(somar(9, 8));