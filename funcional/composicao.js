function composicao(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar (text) {
    return text.toUpperCase()
}
function enfatizar (text) {
    return `${text}!!!`
}
function tornarLento (text) {
    return text.split('').join(' ')
}

const resultado = composicao(gritar, enfatizar, tornarLento) ('Para')

console.log(resultado)