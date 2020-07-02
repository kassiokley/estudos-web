const imprimirResultado = function(nota) {
  if(nota > 7)
    console.log('Aprovado: ' + nota);
  else
    console.log('Reporvado: ' + nota);
}

imprimirResultado(4);
imprimirResultado(8);