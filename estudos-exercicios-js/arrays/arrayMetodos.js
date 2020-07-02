const pilotos = ['A', 'B', 'C', 'D']

//Metodo que remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

//Metodo que adiciona o ultimo elemento do array
pilotos.push('Z')
console.log(pilotos)

//Metodo que remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//Metodo que adiciona o primeiro elemento do array
pilotos.unshift('Y')
console.log(pilotos)

//Metodo que adiciona e remove elemento do array
pilotos.splice(2, 0, 'F', 'K') // adicionando a parti do indice 2 do array
console.log(pilotos)

pilotos.splice(2, 2) // removendo a parti do indice 2, dois elementos do array
console.log(pilotos)

//Metodo cria novo array a parti do indice passado por paramentro
const algunsPilotos = pilotos.slice(1)
console.log(algunsPilotos)

//pega do indice 0 até 0 2. O indice 3 não entra no novo array
const algunsPilotos2 = pilotos.slice(0, 3)
console.log(algunsPilotos2)