class ShoppingCartFacade {
    constructor() {
        this._shoppingCart = new ShoppingCart();
    }

    addProduct(name, baseValue, quantity) {
        const product = new Product(name, baseValue, quantity);
        product.validate();

        this._shoppingCart.add(product);
    }

    removeProduct(id) {
        this._shoppingCart.products.splice(
            this._shoppingCart.products.findIndex(product => {
                return product.id === id;
            }), 1);
    }

    filterProducts(name) {
        const filteredCart = new ShoppingCart();

        filteredCart.products = this._shoppingCart.products
            .filter(product => product.name.toLowerCase().includes(name.toLowerCase()));

        return filteredCart;
    }

    getTotalValue() {
        return this._shoppingCart.getTotalValue();
    }

    getShoppingCart() {
        return this._shoppingCart;
    }
}