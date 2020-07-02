//Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(9, 3, 5, 3, 6, 7, 8);
imprimirSoma();

//Função com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());