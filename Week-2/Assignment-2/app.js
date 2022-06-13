function avg(data) {
    let sum = 0;
    for (const product of data.products) {
        sum += product.price;
    }
    return sum / data.products.length;
}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
);