// setTimeout(() => {
//     console.log('Executando callback...')
    
//     setTimeout(() => {
//         console.log('Executando callback2...')
        
//     }, 1000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('executando a promise')
            resolve('Resolveu!')
        }, tempo)
    })
}

esperarPor()
.then(() => esperarPor ())
.then(esperarPor)

