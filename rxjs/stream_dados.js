const  {interval} = require('rxjs')

const gerarNumeros = interval(500)

const subs = gerarNumeros.subscribe((num) => {
    console.log(Math.pow(2, num))
})

const subs2 = gerarNumeros.subscribe(console.log)

setTimeout(() => {
    subs.unsubscribe()
}, 8000)

setTimeout(() => subs2.unsubscribe(), 6000)