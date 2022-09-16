

function exec(fn, a, b){
    fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w-z)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)