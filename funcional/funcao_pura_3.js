let qtdeExec = 0
//Função Pura!!
function soma(a, b) {
    qtdeExec++//Efeito colateral observável
    return a + b
}

console.log(qtdeExec)
console.log(soma(100, 1212))
console.log(soma(100, 1212))
console.log(soma(100, 1212))
console.log(soma(100, 1212))
console.log(soma(100, 1212))
console.log(soma(100, 1212))
console.log(soma(100, 1212))
console.log(qtdeExec)

