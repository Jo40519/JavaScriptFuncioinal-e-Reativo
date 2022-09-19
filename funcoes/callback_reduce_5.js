const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
    
]

const getTotal = total => total.qtde * total.preco
const somaTotal = (acc, el) => acc + el
console.log(carrinho.map(getTotal)
.reduce(somaTotal, 0))