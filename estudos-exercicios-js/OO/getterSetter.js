const sequencia = {
  // O underline antes do nome da variável é uma convenção e não o torna privado
  _valor: 1,
  get valor() { return this._valor++}, // get é uma função do JS
  set valor(valor) { // set é uma função do JS
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor) //chamando o get e set
sequencia.valor = 5
console.log(sequencia.valor, sequencia.valor) //chamando o get e set
sequencia.valor = 3
console.log(sequencia.valor, sequencia.valor) //chamando o get e set