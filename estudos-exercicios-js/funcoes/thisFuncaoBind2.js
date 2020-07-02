function Pessoa() {
  this.idade = 0;

  setInterval(function () { //setInterval uma função que despara outra
    this.idade++;
    console.log(this.idade);
  }/*.bind(this)*/, 1000) // 1000 milisegundos
  //Usando o bind(this) ele incrementa; se não tiver o bind(this) mostra NaN
}

new Pessoa()

function Pessoa2() {
  this.idade = 0;

  const self = this //Armazenando o this em uma constante

  setInterval(function () { //setInterval uma função que despara outra
    self.idade++;
    console.log(self.idade);
  }, 1000) // 1000 milisegundos
}

new Pessoa2()