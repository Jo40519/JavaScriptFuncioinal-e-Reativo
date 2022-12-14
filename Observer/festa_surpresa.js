const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resposta => {
            resolve(resposta)
            rl.close()
        })
    })
}

//Observer
function namorada() {
    setTimeout(() => {
        console.log('N: Apagar as luzes')
        console.log('N: Pedir silêncio')
        console.log('N: Surpresa!!!!')
    }, 5000)
}


//Observer
function sindico() {
    setTimeout(() => {
        console.log('S: Monitorando barulho!!')
    }, 2000)
}


//Subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q) ')
        if(resp.toLowerCase() === 's') {
            //Os observadores são notificados aqui
            (interessados || []).forEach((obs) => {
                obs()
            })
        } else if(resp.toLowerCase() === 'q') {
            break;
        }

    }
}

/*
Chamada da função registra dois observadores! que são as [namorada, sindico]
O subject é o porteiro!
*/

porteiro([namorada, sindico])