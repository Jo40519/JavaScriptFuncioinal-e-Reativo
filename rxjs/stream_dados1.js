function gerarNumeros() {
    return {
        iniciar(fn, intervalo = 1000) {
            let num = 0
            const interval = setInterval(() => {
                fn(num++)
            }, intervalo)
            return {
                parar() {
                     clearInterval(interval)
                }
            }
        }
    }
}

const temp = gerarNumeros()
const exec1 = temp.iniciar(num => {
    console.log(`#2 ${num + 100}`)
}, 1000)



const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(num => {
    console.log(`#2 ${num + 100}`)
}, 2000)

setTimeout(() => {
    exec1.parar()
    exec2.parar()

    temp.iniciar(num => {
        console.log(`Iniciando novamente: ${num + 2000}`)
    })
}, 10000)