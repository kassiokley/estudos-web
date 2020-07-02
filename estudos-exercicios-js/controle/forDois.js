const notas = [4, 5, 6, 7, 8, 9, 10];

for (let i in notas) {
  console.log(i, notas[i]);
}

const Pessoa = {
  nome: 'Ana',
  idade: 45,
  peso: 70,
  sexo: 'F',
}

for (let i in Pessoa) {
  console.log(`${i} = ${Pessoa[i]}`);
}