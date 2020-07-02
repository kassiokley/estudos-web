const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Lendo de forma sincrona - essa forma não é indicada
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Lendo de forma assincrona - essa forma é a mais indicada
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.bd.host}: ${config.bd.port}`)
})

const config = require('./arquivo.json')
console.log(config)

//Lendo arquivos
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta')
  console.log(arquivos)
})