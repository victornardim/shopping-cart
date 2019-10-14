class Product {
    constructor(name, baseValue, quantity) {
        this.id = new Date().getTime();
        this.name = name;
        this.baseValue = baseValue;
        this.quantity = quantity;
    }

    getTotalValue() {
        return (this.quantity * this.baseValue);
    }

    validate() {
        if (!this.name) {
            throw new Error('Name is required');
        }

        if (isNaN(this.baseValue)) {
            throw new Error('Base value is required');
        }

        if (this.baseValue === 0) {
            throw new Error('Base value must be greater than 0');
        }

        if (!this.quantity) {
            throw new Error('Quantity is required');
        }
    }
}