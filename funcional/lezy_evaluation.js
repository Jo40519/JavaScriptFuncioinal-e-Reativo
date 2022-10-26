function eagger(a, b) {
    const fim = Date.now() + 2500
    // eslint-disable-next-line no-empty
    while (Date.now() < fim) {}

    const valor = Math.pow(a, 3)
    return valor + b
}

function lazy(a) {
    const fim = Date.now() + 2500
    // eslint-disable-next-line no-empty
    while (Date.now() < fim) {}
    const valor = Math.pow(a, 3)

    return function (b) {
        return valor + b

    }
}

console.time('#1')
console.log(eagger(3, 100))
console.log(eagger(3, 200))
console.log(eagger(3, 300))
console.timeEnd('#1')


console.time('#2')
const lazy3 = lazy(3)
console.log(lazy3 (100))
console.log(lazy3 (200))
console.log(lazy3 (300))
console.timeEnd('#2')