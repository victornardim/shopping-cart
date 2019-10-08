class ProductView {
    getTemplate(product) {
        return `
            <div class="border row p-2 mb-2">
                <div class="col-md-11">
                    <div class="row font-weight-bold pb-2" title="${product.name}">
                        ${product.name}
                    </div>
                    <div class="row">
                        <div class="col-md-4" title="${this.getBaseValueDisplay(product)}">
                            Value: ${this.getBaseValueDisplay(product)}
                        </div>
                        <div class="col-md-4" title="${product.quantity}">
                            Quantity: ${product.quantity}
                        </div>
                        <div class="col-md-4" title="${this.getTotalValueDisplay(product)}">
                            Total: ${this.getTotalValueDisplay(product)}
                        </div>
                    </div>
                </div>
                <div class="col-md-1">
                    <button type="button" class="close" onclick="appController.remove(${product.id})">
                        <span>x</span>
                    </button>
                </div>
            </div>
        `;
    }

    getPrintableTemplate(product) {
        return `
            <div style="padding: 10px;">
                <div style="font-weight: bold">
                    ${product.name}
                </div>
                <div>
                    <div style="display: inline-block; width: 30%">
                        Value: ${this.getBaseValueDisplay(product)}
                    </div>
                    <div style="display: inline-block; width: 30%">
                        Quantity: ${product.quantity}
                    </div>
                    <div style="display: inline-block; width: 30%">
                        Total: ${this.getTotalValueDisplay(product)}
                    </div>
                </div>
            </div>
        `;
    }

    getBaseValueDisplay(product) {
        return `R$${product.baseValue.toFixed(2)}`;
    }

    getTotalValueDisplay(product) {
        return `R$${product.getTotalValue().toFixed(2)}`;
    }
}