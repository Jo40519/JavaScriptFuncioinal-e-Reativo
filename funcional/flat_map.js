const letrasAninhadas = [
    ['O', ['l', 'a']], 
[' '], 
['M', ['u', 'n',], 'd', 'o'], 
['!', '!'],
]

const letras = letrasAninhadas.flat(Infinity)
console.log(letras)

const resultado = letrasAninhadas.map(letra => letra.toUpperCase())
.reduce((a, b) => a + b)

console.log(resultado)

const a = {x: 1}
const b = {x: 1}

console.log(a.x === a.b)
