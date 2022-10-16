//Diz-se que uma linguagem de programação possui funções
//de primeira classe, quando funções nessa linguagem são
//tratadas como qualquer outra variável

const y = function (txt) {
    return `Esse é o texto: ${txt}`
}

console.log(y('Olá mundo'))