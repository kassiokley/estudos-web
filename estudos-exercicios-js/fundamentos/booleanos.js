let isAtivo = false;
let isTrue = true;

console.log(isAtivo, isTrue);
console.log(!isAtivo, !isTrue);

//pode se representar true através do número 1

let um = 1;
console.log(!um); //negação
console.log(!!um); // negação da negação

//tipos verdadeiros/true
console.log("");
console.log('Tipos verdadeiros');
console.log(!!3);
console.log(!!-3);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isTrue = true));

//tipos falos/false
console.log("");
console.log('Tipos verdadeiros');
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

//Operações logicas com "string"
console.log("");
console.log('Operações logicas com "string');
let name = "";
console.log(name || 'Desconhecido');
let nome = "Lucas";
console.log(nome || 'Desconhecido');