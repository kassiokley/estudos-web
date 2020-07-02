function maxMin(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = maxMin(-1, 10);
  //console.log(opcao);
}

//console.log('Saiu do laço!');

let raio = 10;

function perimetro(raio) {
  let resultado = 3.14 * raio * 2;
  return resultado.toFixed(2);
}

//console.log(perimetro(raio));

function area(raio) {
  let result = 3.14 * raio * raio;
  return result.toFixed(2);
}

//console.log(area(raio));

function contem(array, numero) {
  let tem = array.indexOf(numero);
  return tem;
}

//console.log(contem([], 7));

function medalhaDeAcordoComPosto(numero) {
  let medalhas = ["nada", "ouro", "prata", "bronze"];

  if (numero < 0 || numero > medalhas.length - 1) {
    return "nada";
  }

  return medalhas[numero];
}

//console.log(medalhaDeAcordoComPosto(1));

function somaLucroSemestre(umSemestre) {
  return umSemestre[0] + umSemestre[1] +
    umSemestre[2] + umSemestre[3] +
    umSemestre[4] + umSemestre[5];
}

//console.log(somaLucroSemestre([13, 12, 16, 17, 13, 13]));

function quantidadeDeMesesComLucro(umPeriodo) {
  let quantidade = 0;
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] < 0) {
      quantidade++;
    }
  }
  return quantidade;
}

//console.log(quantidadeDeMesesComLucro([1]));
//console.log(quantidadeDeMesesComLucro([]));
//console.log(quantidadeDeMesesComLucro([10, -10, 2, 100]));

let n = 3;

function imprimirAzul(numero) {
  let nome = "Azul";
  let i;
  for (i = 1; i <= numero; i++) {
    var cont = i;
  }
  console.log(nome.repeat(numero), cont);
}

console.log(imprimirAzul(n));

function somar5MoedasDe25Centavos() {
  let moedas = 0.25;
  let soma = 0;
  for (let i = 0; i < 5; i++) {
    soma += moedas;
  }
  return soma;
}

//console.log(somar5MoedasDe25Centavos());

function somar5MoedasDe25Centavos(numero) {
  let moedas = 0.25;
  let soma = 0;
  for (let i = 0; i < numero; i++) {
    soma += moedas;
  }
  return soma;
}

//console.log(somar5MoedasDe25Centavos(1));
//console.log(somar5MoedasDe25Centavos(10));

function somaDosPares(numero) {
  let soma = 0;
  for (let i = 0; i <= numero; i += 2) {
    soma += i;
  }
  return soma;
}

//console.log(somaDosPares(6));
//console.log(somaDosPares(10));

function somaDosPares(numero) {
  let soma = 0;
  for (let i = 0; i < numero; i++) {
    soma += i;
  }
  return soma;
}

//console.log(somaDosPares(4));

function caloriasDeTrote(numero) {
  let result = 5;
  let soma = 5;
  for (let i = 1; i <= numero; i++) {
    soma = soma * i;
  }
  return result + soma;
}

//console.log(caloriasDeTrote(2));

function caloriasDeTrote(numeroDeVoltas) {
  var quantidadeDeCalorias = 0;

  for (var i = 0; i <= numeroDeVoltas; i++) {
    quantidadeDeCalorias += 5 * i;
  }

  return quantidadeDeCalorias;
}

//console.log(caloriasDeTrote(2));