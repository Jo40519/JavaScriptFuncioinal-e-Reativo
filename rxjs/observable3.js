const {Observable} = require('rxjs')

function entre(min, max) {
    return new Observable(subscriber => {
        for(i = min; i <= max; i++) {
            subscriber.next(i)
        }
        subscriber.complete()
    })
}

entre(4, 10).subscribe(
    num => console.log(`Números: ${num}`),
    () => console.log('FIM!')
)