//Funções que operam em outras funções,
//tomando-as como argumentos ou retornando-as,
//são chamdas de High-order functions.

function executar(fn, ...params) {
    return function(textInicial){
        return `${textInicial} ${fn(...params)}`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

const r1 = executar(somar, 10, 10, 10) ('O resultado é:')
const r2 = executar(multi, 3, 2) ('O resultado é:')

console.log(r1, r2)


