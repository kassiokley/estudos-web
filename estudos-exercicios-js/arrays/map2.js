const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 13.45}',
  '{ "nome": "caneta", "preco": 0.45}'
]

//Retornar um Array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreo = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreo)
console.log(resultado)