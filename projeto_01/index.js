const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDireitorio(caminho)
.then(arquivo => fn.elementosTerminadosCom(arquivo, '.srt'))
.then(arquivosSRT => fn.lerArquivos(arquivosSRT))
.then(console.log)
