//Padrão Middleware ou Chain of responsibility
const passo1 = (ctx, next) => {
  ctx.valor1 = 'midl-1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'midl-2'
  next()
}

const passo3 = ctx=> ctx.valor = 'midl-3'

const funcExec = (ctx, ...middlewares) => {
  const execPassos = indice => {
    middlewares && indice < middlewares.length && middlewares[indice](
      ctx, () => execPassos(indice + 1)
    )
  }
  execPassos(0)
}

//Pode ser colocado em qualquer ordem
const ctx = {}
funcExec(ctx, passo1, passo2, passo3)
console.log(ctx)