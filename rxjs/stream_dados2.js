
function gerarElemento(array) {
    return {
        iniciar(fn) {
            let indice = 0
            const interval = setInterval(() => {
                if (indice >= array.length) {
                    clearInterval(interval)
                } else {
                    fn(array[indice])
                    indice++
                }
            }, 1000)
            return {
                parar() {
                    clearInterval(interval)
                }
            }
        }
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const temp = gerarElemento(numeros)
const exec = temp.iniciar(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() => {
    exec.parar()
}, 4000)