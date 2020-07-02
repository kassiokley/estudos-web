const soma = function (x, y) {
  return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
}

imprimirResultado(4, 6);
imprimirResultado(4, 7, soma);
imprimirResultado(4, 6, function (x, y) {
  return x - y;
});

imprimirResultado(6, 7, (x, y) => x * y);

const Pessoa = {
  falar: function () {
    console.log('Opa');
  }
}

Pessoa.falar();