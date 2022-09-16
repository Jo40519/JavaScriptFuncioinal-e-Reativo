// somar(3)(4)(5)

function soma(numero1, numero2) {
    return function (numero3) {
        return numero1 + numero2 + numero3
    }
}

const result = soma(3, 4)
console.log(result(5))