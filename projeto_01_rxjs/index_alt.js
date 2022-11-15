// eslint-disable-next-line no-undef
const path = require('path')
const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs')
// eslint-disable-next-line no-undef
const fn = require('./funcoes')
const _ = require('lodash')
// eslint-disable-next-line no-undef
const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '-', '?', ',', '"', '♪', '_', '<i>', '</i>',
    '\r', '[', ']', '(', ')'
]
    fn.lerDireitorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementoSeVazio(),
        fn.removerSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementoSeVazio(),
        fn.removerSeApenasNumero(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({elemento: palavras[0], qtde: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)
