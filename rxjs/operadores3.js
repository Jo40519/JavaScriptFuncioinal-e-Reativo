const {Observable} = require('rxjs')

function ofComDelay(tempo, ...elementos) {
    return Observable.create(subscriber => {
        (elementos || []).forEach((el, i) => {
            setTimeout(() => {
                subscriber.next(el)
                if(elementos.length === i + 1){
                    subscriber.complete()
                }
            }, tempo * (i + 1))
        })
    })
}

ofComDelay(1000, 1, 2, 3, 4, 5, 6).subscribe(console.log)
