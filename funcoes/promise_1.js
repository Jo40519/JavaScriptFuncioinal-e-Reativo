let a = 1
console.log(a)

let p = new Promise( (resolve, reject) => {
    if(a === 1) {
        return resolve('É igual a um')
    } else {
        return reject('Não é!')
    }
})

p.then(result => console.log(result))