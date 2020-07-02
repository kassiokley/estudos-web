Array.prototype.map2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 13.45}',
  '{ "nome": "caneta", "preco": 0.45}'
]

//Retornar um Array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreo = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreo)
console.log(resultado)