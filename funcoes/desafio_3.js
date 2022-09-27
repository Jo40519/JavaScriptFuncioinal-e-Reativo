const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo (caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudoArquivo) => {
            resolve(conteudoArquivo.toString())
        })
    })
}

lerArquivo(caminho).then(result => console.log(result))