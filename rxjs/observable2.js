const {Observable} = require('rxjs')

const obs$ = Observable.create(subscriber => {
        subscriber.next('rxjs')
        subscriber.next('é')
        subscriber.next('bem poderoso!')

        if(Math.random() > 0.5) {
            subscriber.complete()
        } else {
            subscriber.error('Que problema?!')
        }
})

obs$.subscribe({
    next(valor){
        console.log(`Valor: ${valor}`)

    },
    error(erro) {
        console.log(`Erro: ${erro}`)

    },
    complete() {
        console.log('FIM!')
    }
}
)