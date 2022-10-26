


function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if(this.invalido()) {
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)

            }
        }
    }
}

const resultado = TipoSeguro('Esse é um texto')
.map(t => t.toUpperCase())
.map(t => `${t}!!!!`)
.map(t => t.split('').join(' '))

console.log(resultado.valor)