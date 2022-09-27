function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('executando a promise')
            resolve('Resolveu!')
        }, tempo)
    })
}

function retornarValor() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 5000)
    })
}

async function executar() {
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`esperando...${valor}`)

    let somado = await esperarPor(1500)
    console.log(`esperando...${valor + 1}`)

    await esperarPor(1500)
    console.log(`esperando...${valor + 2}`)
}

executar()