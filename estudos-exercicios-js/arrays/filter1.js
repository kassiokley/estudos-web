const produtos = [
  { nome: 'Notebook', preco: 2999, fragil: true},
  { nome: 'Celular', preco: 999, fragil: true},
  { nome: 'Borracha', preco: 0.90, fragil: false},
]

console.log(produtos.filter(function(p) {
  return p.preco > 250
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))
console.log(produtos.filter(caro).filter(fragil))