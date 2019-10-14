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
        const removeIndex = this._shoppingCart.products.findIndex(product => product.id === id);

        if (removeIndex > -1) {
            this._shoppingCart.products.splice(removeIndex, 1);
        }
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
        return Object.assign(new ShoppingCart(), this._shoppingCart);
    }
}