class ShoppingCartView {
    constructor() {
        this.productComponent = new ProductView();
    }

    getTemplate(shoppingCart) {
        return `
            <div class="p-3">
                ${shoppingCart.products
                .map(product => {
                    return this.productComponent.getTemplate(product);
                }).join('')
            }
            </div>
        `;
    }

    getPrintableTemplate(shoppingCart) {
        return `
            <h3>Shopping cart</h3>
            <div style="padding-top: 5px;">
                ${shoppingCart.products
                .map(product => {
                    return this.productComponent.getPrintableTemplate(product);
                }).join('')
            }
            </div>
            <div style="padding-top: 40px; float: right;">
                Total: ${this.getTotalValueDisplay(shoppingCart)}
            </div>
        `;
    }

    getTotalValueDisplay(shoppingCart) {
        return `R$${shoppingCart.getTotalValue().toFixed(2)}`;
    }
}