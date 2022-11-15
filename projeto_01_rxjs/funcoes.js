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

function lerArquivo() {
    return createPipeableOperator(subs => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
                subs.next(conteudo.toString())
            } catch (e) {
                subs.error(e)
            }


        }
    }))
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

function removerElementoSeVazio() {
    return createPipeableOperator(subs => ({
        next(texto) {
            if(texto.trim()){
                subs.next(texto)
            }
        }
    }))
}

function removerSeApenasNumero() {
    return createPipeableOperator(subs => ({
        next(texto) {
            const num = parseInt(texto.trim())

            if(num !== num) {
                subs.next(texto)
            }
        }
    }))
}

function removerSeInlcuir(padraoTextual) {
    return function(array){
        return array.filter(element => !element.includes(padraoTextual))

    }
}

function removerSimbolos(simbolos) {
    return createPipeableOperator(subs => ({
        next(texto) {
            const textoSemSimbolos =  simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, texto)
            subs.next(textoSemSimbolos)
        }
    }))
}

function separarTextoPor(simbolo) {
    return createPipeableOperator(subs => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subs.next(parte)
            })
        }
    }))
}
function agruparElementos() {
    return createPipeableOperator(subs => ({
        next(palavras) {
            const agrupado = Object.values(palavras.reduce((acc, palavra) => {
                const el = palavra.toLowerCase()
                const qtde = acc[el] ? acc[el].qtde + 1 : 1
                Object.values(acc[el] = {
                    elemento: el,
                    qtde
                })
                return acc
            }, {}))
            subs.next(agrupado)
        }
    }))
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
    removerElementoSeVazio,
    removerSeInlcuir,
    removerSeApenasNumero,
    removerSimbolos,
    separarTextoPor,
    agruparElementos,
    composicao
};