const notas = [7, 6, 5, 3, 2, 8, 9, 10];

//sem usar callback
const notasBaixas1 = []
for (let i in notas) {
  if(notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

//com callback
const notasBaixas2 = notas.filter(nota => nota > 7);
console.log(notasBaixas2);