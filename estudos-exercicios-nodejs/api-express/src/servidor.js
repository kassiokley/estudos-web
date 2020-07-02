const porta = 3003
const bancoDeDados = require('./bancoDeDados')
const express = require('express')
const app = express()
const routes = express.Router()

app.use(express.json())
app.use(routes)

app.get('/produtos', (request, response) => {
  response.send(bancoDeDados.retornaProdutos()) //converte para JSON
})

routes.get('/produtos/:id', (request, response) => {
  response.send(bancoDeDados.pegaPorId(request.paramns.id))
})

routes.post('/produtos', (request, response) => {
  const produto = bancoDeDados.salvarProduto({
    nome: request.body.nome,
    preco: request.body.preco
  })
  response.send(produto) //Gera um JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`)
})