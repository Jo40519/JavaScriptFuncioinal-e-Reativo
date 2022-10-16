const nums = [4, 8, 3, 2, 9, 1, 9, 3];

//#Recursividade
    function somarArray(array, total = 0) {
        if(array.length === 0) {
            return total
        }

        return somarArray(array.slice(1), total + array[0])
    }

    const total = somarArray(nums)

//# Reduce
// let total = nums.reduce((acc, element) => {
//     return acc + element
// })

console.log(total)

// # Dados mutaveis
// let total = 0

// for (let i = 0; i < nums.length; i++) {
//     total += nums[i]
// }

// console.log(total)