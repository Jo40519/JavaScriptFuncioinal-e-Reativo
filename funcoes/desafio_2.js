const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 0, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
    
]

// 1. Fragil true
const getFragil = isFragio => isFragio.fragil === true
const getQtdePreco = item => item.qtde * item.preco
console.log(carrinho.filter(getFragil).map(getQtdePreco).reduce((acc, el) => {
    const novaQtde = acc.qtde + 1;
    const novoTotal = acc.total + el;
    return {
        qtde: novaQtde,
        total:novoTotal,
        media: novoTotal / novaQtde
    }
}, {qtde: 0, total: 0, media: 0}))
console.log(getFragil)
