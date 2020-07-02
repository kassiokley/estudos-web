//Aqui mostra que o node guarda em cache valores
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

contadorA.inc()
contadorA.inc()
console.log(`contadorA: ${contadorA.valor}`)
console.log(`contadorB: ${contadorB.valor}`)

//Aqui por ser uma função, o cache não é guardado - por que está retornando um objeto
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorC.inc()
contadorC.inc()
console.log(`contadorC: ${contadorC.valor}`)
console.log(`contadorD: ${contadorD.valor}`)