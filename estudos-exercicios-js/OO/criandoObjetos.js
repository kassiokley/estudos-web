//Usando a notação literal
const objt1 = {}
console.log(objt1)

//Object em JS
console.log(typeof Object, typeof new Object)
const objt2 = new Object
console.log(objt2)

//Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome // publico

  this.getPrecoComDesconto = () => {
    return preco * (1 - desc) // não publico
  }
}

const p1 = new Produto('Caneta', 7, 0.1)
const p2 = new Produto('Notebook', 7000, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory - padrão de projeto
//Usando notação literal
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7800, 6)
const f2 = criarFuncionario('João', 7800, 2)
console.log(f1.getSalario( ), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)

//Uma função famosa que retorna um Objeto
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)