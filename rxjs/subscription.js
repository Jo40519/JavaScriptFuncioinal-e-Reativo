const { timer } = require("rxjs");

const obs$ = timer(3000, 500)

const sub1 = obs$.subscribe(num => {
    console.log(`Execução 1 gerou o valor ${num}`)
})

setTimeout(() => {
    sub1.unsubscribe()
}, 10000)