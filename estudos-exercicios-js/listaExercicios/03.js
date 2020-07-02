/*
  Crie uma função que recebe dois parâmetros, base e expoente, 
e retorne a base elevada ao expoente.
*/

//Primeira forma

function baseElevadaExpoente1(base, expoente) {
  if (expoente > 0) {
    base *= base
  }
  return base
}

console.log(baseElevadaExpoente1(7, 2))

//Segunda forma

function baseElevadaExpoente2(base, expoente) {
  let resultado = Math.pow(base, expoente)
  return resultado
}

console.log(baseElevadaExpoente2(7, 2))

//Terceira forma

function baseElevadaExpoente3(base, expoente) {
  let resultado = base ** expoente
  return resultado
}

console.log(baseElevadaExpoente3(7, 2))