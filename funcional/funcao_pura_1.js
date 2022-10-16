//Uma função pura é uma função em que o valor de retorno
// é determinado APENAS por seus valores de entradas, sem efeitos
//coltaterais observáveis

const PI = 3.14

//Impura - PI é um valor externo
function areaCirc(raio) {
    return raio * raio * PI
}


//Função Pura
// eslint-disable-next-line no-unused-vars
function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCirc(10))