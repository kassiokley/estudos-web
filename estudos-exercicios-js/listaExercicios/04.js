/*
  Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores
*/

function retornaRestoResultadoDivisao(dividendo, divisor) {
  let resultado = dividendo / divisor
  let resto = dividendo % divisor

  console.log(`${dividendo} \\ ${divisor} = ${resultado} \n${dividendo} % ${divisor} = ${resto}`)
}

retornaRestoResultadoDivisao(6, 2)