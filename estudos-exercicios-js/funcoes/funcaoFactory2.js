function criarProduto(nome, preco, desconto = 0.1) {
  return {
    nome,
    preco,
    desconto
  }
}

console.log(criarProduto('Notebook', 2199.99));
console.log(criarProduto('iPad', 1199.99));
console.log(criarProduto('Carro', 89999.99, 0.20));