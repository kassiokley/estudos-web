class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  fala() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('Marcelo');
p1.fala();

const criarPessoa = nome => {
  return {
    fala: () => console.log(`Meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('João');
p2.fala();