function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const objt1 = new MeuObjeto
const objt2 = new MeuObjeto
console.log(objt1.__proto__ === objt2.__proto__)
console.log(MeuObjeto.prototype === objt1.__proto__)
console.log(MeuObjeto.prototype === objt2.__proto__)

MeuObjeto.prototype.nome = 'Anônimos'
MeuObjeto.prototype.falar = function() {
  console.log(`Bom dia, meu nome é ${this.nome}.`)
}

objt1.falar()
objt2.nome = 'Segundo'
objt2.falar()

const objt3 = {}
objt3.__proto__ = MeuObjeto.prototype
objt3.nome = 'objt3'
objt3.falar()

//Resumindo a loucura ...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype )
console.log(Object.prototype.__proto__ === null)
console.log(Object.prototype.__proto__ === undefined)