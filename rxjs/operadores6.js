const {from, Observable} = require('rxjs')

function createPeableOperator(operatorFn) {
    return function(source) {
        return new Observable(subscriber => {
            source.subscribe(operatorFn(subscriber))
        })
    }
}

function primeiroElemento() {
    return createPeableOperator((subscriber) => ({
        next(valor) {
            subscriber.next(valor)
            subscriber.complete()
        }
    }))
}


function ultimoElemento() {
    let ultimo
    return createPeableOperator((subscriber) => ({
        next(valor) {
            ultimo = valor

        },
        complete() {
            if(ultimo !== undefined) {
                subscriber.next(ultimo)
            }
            subscriber.complete()
        }
    }))
}
function nenhum() {
    return createPeableOperator((subscriber) => ({
        next(valor) {
            subscriber.complete()
        }
    }))
}

from([1, 2, 3, 4, 5])
//.pipe(primeiroElemento())
//.pipe(nenhum())
.pipe(ultimoElemento())
.subscribe(console.log)