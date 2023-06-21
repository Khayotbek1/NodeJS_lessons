const bill = (products, tax) => {
    let total = 0

    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }

    return total
}

const result = bill([10, 15, 45], 0.2)
console.log(result);
