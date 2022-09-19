const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
    
]

const getNome = nome => nome.nome
// const qtdeMaiorQueZero = item => item.qtde > 0
// console.log(carrinho.filter(qtdeMaiorQueZero))
console.log(carrinho.map(getNome))

// Entendendo o filter por de baixo dos panos
Array.prototype.meuFilter = function (fn) {
    const filtered = []

    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)){
            filtered.push('===>>',this[i])
        }
    }

    return filtered
}

const qtdeMaiorQueZero = item => item.qtde > 0
console.log(carrinho.meuFilter(qtdeMaiorQueZero))