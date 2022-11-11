const { Observable, Subject } = require("rxjs");

function getObservable() {
    return new Observable(subs => {
        console.log('Obs...1')
        setTimeout(() => subs.next(Math.random()))
    }, 1000)
}

const obs$ = getObservable()
obs$.subscribe(console.log)
obs$.subscribe(console.log)

function getSubject() {
    const sub = new Subject()
    setTimeout(() => {
        console.log('Subject...boss')
        sub.next(Math.random())
        sub.complete
    }, 1000)
    return sub
}

const sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)