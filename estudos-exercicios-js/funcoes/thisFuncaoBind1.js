const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar();
const fala = pessoa.falar;
fala(); //Conflito entre paradigmas: funcinal e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa() //Usando o bind esse conflito não acontece.