class ShoppingCartController {
    constructor(shoppingCartComponent, totalLabel) {
        this._shoppingCartView = new ShoppingCartView();
        this._shoppingCartFacade = new ShoppingCartFacade();
        this._shoppingCartComponent = shoppingCartComponent;
        this._totalLabel = totalLabel;
    }

    addProduct(name, baseValue, quantity) {
        this._shoppingCartFacade.addProduct(name, baseValue, quantity);
        const shoppingCart = this._shoppingCartFacade.getShoppingCart();
        this._shoppingCartComponent.innerHTML = this._shoppingCartView.getTemplate(shoppingCart);
        this._totalLabel.innerHTML = this._shoppingCartView.getTotalValueDisplay(shoppingCart);
    }

    removeProduct(id) {
        this._shoppingCartFacade.removeProduct(id);
        const shoppingCart = this._shoppingCartFacade.getShoppingCart();
        this._shoppingCartComponent.innerHTML = this._shoppingCartView.getTemplate(shoppingCart);
        this._totalLabel.innerHTML = this._shoppingCartView.getTotalValueDisplay(shoppingCart);
    }

    filterProducts(name) {
        const products = this._shoppingCartFacade.filterProducts(name);
        this._shoppingCartComponent.innerHTML = this._shoppingCartView.getTemplate(products);
        const shoppingCart = this._shoppingCartFacade.getShoppingCart();
        this._totalLabel.innerHTML = this._shoppingCartView.getTotalValueDisplay(shoppingCart);
    }

    printShoppingCart() {
        const content = this._shoppingCartView.getPrintableTemplate(this._shoppingCartFacade.getShoppingCart());
        const printScreen = window.open('about:blank');
        printScreen.document.write(content);
        printScreen.window.print();
        printScreen.window.close();
    }
}