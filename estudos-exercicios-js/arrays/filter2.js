Array.prototype.filter2 = function(callback) {
  const novoArray = []
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}

const produtos = [
  { nome: 'Notebook', preco: 2999, fragil: true},
  { nome: 'Celular', preco: 999, fragil: true},
  { nome: 'Borracha', preco: 0.90, fragil: false},
]

const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro))
console.log(produtos.filter2(fragil))
console.log(produtos.filter2(caro).filter2(fragil))