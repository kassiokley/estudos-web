/*
  Crie uma função que dado dois valores (passados como parâmetros) mostre no console
a soma, subtração, multiplicação e divisão desses valores.
*/

function operacoes1(x = 0, y = 0) {
  console.log(`Soma de ${x} + ${y} = ${x + y}`);
  console.log(`Subtração de ${x} - ${y} = ${x - y}`);
  console.log(`Multiplicação de ${x} * ${y} = ${x * y}`);
  console.log(`Divisão de ${x} / ${y} = ${x / y}`);
}

operacoes1(4, 2);

/*
  Crie uma função que dado três valores (passados como parâmetros) mostre no console
a soma, subtração, multiplicação e divisão desses valores.
*/

function operacoes2(x = 0, y = 0, operacao = '?') {
  if(operacao === '+') {
    return console.log(`${x} + ${y} = ${x + y}`);
  } else if(operacao === '-') {
    return console.log(`${x} - ${y} = ${x - y}`);
  } else if(operacao === '*') {
    return console.log(`${x} * ${y} = ${x * y}`);
  } else {
    return console.log(`${x} / ${y} = ${x / y}`);
  }
}
console.log('');
operacoes2(4, 2, '+');
operacoes2(4, 2, '-');
operacoes2(4, 2, '*');
operacoes2(4, 2, '/');