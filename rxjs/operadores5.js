const {of, Observable} = require('rxjs')


function terminadoCom(parteFinal) {
    return function(fonte) {
        return new Observable(subs => {
            fonte.subscribe({
                next(valor) {
                    if(Array.isArray(valor)){
                        subs.next(valor.filter(elements => 
                            elements.endsWith(parteFinal)
                        ))
                    }else if(valor.endsWith(parteFinal)){
                        subs.next(valor)
                    }
                },
                error(erro) {
                    subs.error(erro)
                },
                complete() {
                    subs.complete()
                }
            })
        })
    }
}

of(['João Vitor Henrique', 'Milenna', 'Williams Henrique'])
.pipe(terminadoCom('Henrique'))
.subscribe(console.log)