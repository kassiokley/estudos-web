function Pessoa(nome){
    this.nome = nome;

  this.fala = function () {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('Marcelo');
p1.fala();