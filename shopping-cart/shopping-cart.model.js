class ShoppingCart {
    constructor() {
        this.products = [];
    }

    add(product) {
        this.products.push(product);
    }

    getTotalValue() {
        return this.products
            .map(product => product.getTotalValue())
            .reduce((total, value) => total + value, 0);
    }
}