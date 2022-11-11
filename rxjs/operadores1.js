//Os dois tipos...
//1. Operadores de Criação
//2. Operadores Encadeáveis 

const {of} = require('rxjs')

const {last, map} = require('rxjs/operators')

of(1, 2, 'ana', false, 'ultimo')
.pipe(last(),
map(v => v[0]),
map(letra => `A letra encontraca foi: ${letra}`)

)
.subscribe((valor) => {
    console.log(`O valor gerado foi: ${valor}`)
})

of(1, 2, 3, 4, 5).pipe(map(mul => mul * 2), last()).subscribe({
    next(value) {
        console.log(`O resultado da multiplicação é: ${value}`)
    }
})

