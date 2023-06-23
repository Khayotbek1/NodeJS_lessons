// const bill = (products, tax) => {
//     let total = 0

//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax
//     }

//     return total
// }

// const result = bill([10, 15, 45], 0.2)
// console.log(result);

// function calcAge(birthTear, firstName) {
//     const age = 2022 - birthTear
//     console.log(`${firstName} siz ${age} yoshdasiz`);
//     return age
// }

// const age = calcAge(1988, 'Hayot')

const names = ['hayot', 'yunus', 'yusuf', 'abror']
const newNames = []

names.forEach((name) => {
    const newName = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + 'bek'
    newNames.push(newName)
})

console.log(newNames);

function yih(n) {
    return n * (n + 1) / 2
}
console.log(yih(10));