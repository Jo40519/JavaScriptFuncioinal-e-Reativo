function bomDia() {
    console.log('Bom dia')
}

function boaTarde() {
    console.log('Boa tarde')
}

// Passar uma função como parâmetro
function executarQualquerCoisa(fn){
    console.log(typeof fn)
    fn()
} 

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornando uma função a partir de outra função
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciade2 = potencia(2)
console.log(potenciade2(8))