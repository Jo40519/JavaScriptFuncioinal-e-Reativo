const {from, Observable} = require('rxjs')

function primeiroElemento() {
    return function(source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
}


function ultimoElemento() {
    return function(lastSource) {
        return new Observable(subs => {
            let ultimo
            lastSource.subscribe({
                next(v) {
                    ultimo = v
                },
                complete() {
                    subs.next(ultimo)
                    subs.complete()
                }
            })
        })
    }
}
function nenhum() {
    return function(lastSource) {
        return new Observable(subs => {
            let ultimo
            lastSource.subscribe({
                next(v) {
                    subs.complete()
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
.pipe(primeiroElemento())
.pipe(ultimoElemento())
.subscribe(console.log)