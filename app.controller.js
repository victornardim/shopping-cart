class AppController {
    constructor() {
        this._shoppingCartController = new ShoppingCartController(
            document.getElementById('products'),
            document.getElementById('total'));
    }

    init() {
        document.getElementById('name').focus();

        document.getElementById('filter').addEventListener('keydown', debounce(function() {
            appController.filter();
        }, 500));
    }

    add() {
        try {
            const name = document.getElementById('name').value;
            const baseValue = parseFloat(document.getElementById('baseValue').value);
            const quantity = parseInt(document.getElementById('quantity').value);

            this._shoppingCartController.addProduct(name, baseValue, quantity);
            this.clearForm();
        } catch (ex) {
            alert(ex.message);
        }
    }

    remove(id) {
        try {
            this._shoppingCartController.removeProduct(id);
        } catch (ex) {
            alert(ex.message);
        }
    }

    resetForm() {
        const form = document.getElementById('productForm');
        form.reset();
    }

    clearForm() {
        this.resetForm();
        document.getElementById('name').focus();
    }

    filter() {
        this._shoppingCartController.filterProducts(document.getElementById('filter').value);
    }

    printShoppingCart() {
        this._shoppingCartController.printShoppingCart();
    }
}