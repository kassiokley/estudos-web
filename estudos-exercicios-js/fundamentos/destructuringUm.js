//novo recurso do ES2015 (ES6)
const pessoa = {
  nome: 'Marcela',
  idade: 54,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 200
  }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome, bemHumorado);

const { endereco: { logradouro, numero, cep = 58900000}} = pessoa;
console.log(logradouro, numero, cep);