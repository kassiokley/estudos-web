const sequence = {
  id: 1,
  get id() { return this.id++ }
}

const produtos = {}

function salvarProduto(produto) {
  if(!produto.id) {
    produto.id = sequence.id
  }
  produtos[produto.id] = produto
  return produto
}

function pegaPorId(id) {
  return produtos[id] || null
}

function retornaProdutos() {
  return Object.values(produtos)
}

module.exports = {
  salvarProduto,
  pegaPorId,
  retornaProdutos
}