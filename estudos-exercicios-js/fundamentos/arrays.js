const valores = [7, 8, 9, 10, 11, 12];
console.log(valores[0], valores[3], valores[valores.length - 1] ,valores.length)

valores[10] = 10;
console.log(valores);
valores[8] = 10;
console.log(valores);

valores.push(9);
valores.push('teste');
console.log(valores.pop());
delete valores[0];
console.log('');
console.log(valores);
console.log(typeof valores);