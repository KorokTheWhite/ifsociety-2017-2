
function createDonation(obj) {
    if (isValid(obj))

        return {
            name: obj.name,
            date: obj.date,
            state: obj.state,
            products: obj.products
        }

    return false;
}

function isValid(obj) { 
    return obj.name && obj.date && obj.state && isProductsValids(obj.products);
}

function isProductsValids(products) {
    return products.length > 0;
}

module.exports = createDonation;
