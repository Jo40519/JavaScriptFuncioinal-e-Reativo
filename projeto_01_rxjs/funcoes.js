const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

function lerDireitorio(caminho) {
    return new Observable(subs => {
        try {
            fs.readdirSync(caminho).forEach((arquivo) => {
                subs.next(path.join(caminho, arquivo))
            });
            subs.complete()
        } catch (e) {
            subs.error(e)
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

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subs => ({
        next(v) {
            if(v.endsWith(padraoTextual)){
                subs.next(v)
            }
        }
    }))
}

// function elementosTerminadosCom(array, padrao){
//     return array.filter(el => el.endsWith(padrao))
// }

function removerSeVazio(array){
    return array.filter(element => element.trim())
}

function removerSeInlcuir(padraoTextual) {
    return function(array){
        return array.filter(element => !element.includes(padraoTextual))

    }
}

function removerSeApenasNumero(array) {
    return array.filter(element => {
        const num = parseInt(element.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos) {
    return function (array) {
        return array.map(element => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, element)
        })
    }
}

const mesclarConteudos = conteudos => conteudos.join(' ')

function separarTextoPor(simbolo){
    return function(texto) {
        return texto.split(simbolo)
    }
}

function agruparPalavras(palavras){
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        Object.values(acc[el] = {
            elemento: el,
            qtde
        })
        return acc
    }, {}))
}

function ordernarPorAtributoNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

function composicao(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, valor)
    }
}

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable(subs => {
            const sub = operatorFn(subs)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subs.error(e)),
                complete: sub.complete || (e => subs.complete(e))
            })
        })
    }
}

// eslint-disable-next-line no-undef
module.exports = {
    lerDireitorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSeInlcuir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarConteudos,
    separarTextoPor,
    agruparPalavras,
    ordernarPorAtributoNumerico,
    composicao
};