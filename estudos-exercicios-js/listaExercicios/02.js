/*
  Os triângulos podem ser classificados em 3 tipos quanto 
ao tamanho de seus lados: Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo 
e retorne sua classificação quanto ao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function qualTrianguloEh(l1, l2, l3) {
  let triangulo = ['Equilátero', 'Isósceles', 'Escaleno']

  if (l1 === l2 && l2 === l3 && l3=== l1) {
    return triangulo[0];
  } else if (l1 === l2 || l2 === l3 || l3 === l2) {
    return triangulo[1]
  } else {
    return triangulo[2]
  }
}

console.log(qualTrianguloEh(1,1,1));
console.log(qualTrianguloEh(1,1,3));
console.log(qualTrianguloEh(1,2,3));