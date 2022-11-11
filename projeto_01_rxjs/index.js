// eslint-disable-next-line no-undef
const path = require('path')
// eslint-disable-next-line no-undef
const fn = require('./funcoes')

// eslint-disable-next-line no-undef
const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '-', '?', ',', '"', '♪', '_', '<i>', '</i>',
    '\r', '[', ']', '(', ')'
]
    fn.lerDireitorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt')
    )
    .subscribe(console.log)
// fn.lerDireitorio(caminho)
// .then(arquivo => fn.elementosTerminadosCom(arquivo, '.srt'))
// .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
// .then(fn.mesclarConteudos)
// .then(fn.separarTextoPor('\n'))
// .then(fn.removerSeVazio)
// .then(linhas => fn.removerSeInlcuir('-->')(linhas))
// .then(fn.removerSeApenasNumero)
// .then(fn.removerSimbolos(simbolos))
// .then(fn.mesclarConteudos)
// .then(fn.separarTextoPor(' '))
// .then(fn.removerSeVazio)
// .then(fn.removerSeApenasNumero)
// .then(fn.agruparPalavras)
// .then(fn.ordernarPorAtributoNumerico('qtde', 'desc'))
// .then(console.log)
