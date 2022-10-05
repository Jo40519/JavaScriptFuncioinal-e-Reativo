const fs = require("fs");
const path = require("path");

function lerDireitorio(caminho) {
    return new Promise((resolve, reject) => {
        try {

            let lerArquivo = fs.readdirSync(caminho);
            lerArquivo = lerArquivo.map((arquivo) => path.join(caminho, arquivo));
            resolve(lerArquivo)
        } catch (e) {
            reject(e)
        }
    });
}

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch(e) {
            reject(e)
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(array, padrao){
    return array.filter(el => el.endsWith(padrao))
}

module.exports = {
    lerDireitorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos
};