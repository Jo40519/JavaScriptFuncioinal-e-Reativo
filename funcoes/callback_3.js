const nums = [1, 2, 3 ,4 ,5]
const dobro = n => n * 2

console.log(nums.map(dobro))

const nomes = ['João', 'Williams', 'Milenna'];
const primeiraLetra = texto => texto[0];

console.log(nomes.map(primeiraLetra))

const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
    
]

// const soNomes = nomes => nomes.nome
// console.log(carrinho.map(soNomes))

// const quantidadeVsPreco = carrinho.map((element) => {
//     return element.preco * element.qtde
// })
// console.log(quantidadeVsPreco)

// Entendendo map por trás dos panos

Array.prototype.meuMap = function (fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        mapped.push(result)
        
    }
    return mapped
}

const soNomes = nomes => nomes.nome
console.log(carrinho.meuMap(soNomes))

