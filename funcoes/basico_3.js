// ArrowFunction

const felizNatal = () => {console.log('Feliz Natal!!!')}
felizNatal()

// this

Array.prototype.log = function () {
    console.log(this)
}

const numeros = [1, 2, 3]
numeros.log()