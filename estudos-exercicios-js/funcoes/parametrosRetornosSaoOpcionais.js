function area(largura, altura) {
  const area = largura * altura;

  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

console.log(area(2, 4));
//console.log(area( , 3)); //dessa forma apresenta erro
console.log(area(3, ));
console.log(area(8));
console.log(area());
console.log(area(2, 3, 4, 5, 6, 7, 8));
console.log(area(5, 7));