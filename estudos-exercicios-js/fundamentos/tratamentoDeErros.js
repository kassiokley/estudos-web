function tratarErroLancado(erro) {
  throw new Error('...');
  //throw 10;
  //throw true;
  //throw 'mensagem';
  /*throw {
    nome: erro.name,
    msg: erro.mensagem,
    data: new Date
  }*/
}

function imprimiNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!');
  } catch(e) {
    tratarErroLancado(e);
  } finally {
    console.log('final');
  }
}

const obj = {nome: 'Carla'}

imprimiNomeGritado(obj);
