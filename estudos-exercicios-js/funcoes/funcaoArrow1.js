//Função antes do ES6
let dobro = function (a) {
  return 2 * a;
}

//Funçẽs depois do ES6
dobro = (a) => { //Primeira forma
  return 2 * a;
}

dobro = a => 2 * a; //Segundo forma (o return fica implícito)
console.log(dobro(Math.PI).toFixed(2));