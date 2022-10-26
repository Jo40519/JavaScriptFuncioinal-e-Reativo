function composicao(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, valor)
    }
}

function gritar(text) {
    return text.toUpperCase()
}

function enfatizar(text) {
    return `${text}!!!`
}

function tornarLento(text) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(text.split('').join(' '))
        }, 3000)
    })
}

const exagerado = composicao(gritar, enfatizar, tornarLento)

exagerado('PARA').then(console.log)
