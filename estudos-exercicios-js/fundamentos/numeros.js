const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const nota1 = 10;
const nota2 = 5;
const nota3 = 7;

const total = 10 * peso1 + nota2 * peso2 + nota3;

const media = total / 3;

console.log(media);
console.log(typeof media);
console.log(typeof Number);
console.log(media.toFixed(2));
console.log(typeof media.toString());
console.log(media.toString(2)); //gerando o valor binario
console.log(typeof media.toString(2));