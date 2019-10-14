QUnit.module('Product model');
QUnit.test('Should throw error for product name not filled', function(assert) {
    const product = new Product(undefined, 1, 1);
    assert.throws(function() {
        product.validate();
    },
        /^Error: Name is required$/g,
        'Product name has not been filled');
});

QUnit.test('Should throw error for product base value not filled', function(assert) {
    const product = new Product('Pencil', undefined, 1);
    assert.throws(function() {
        product.validate();
    },
        /^Error: Base value is required$/g,
        'Product base value has not been filled');
});

QUnit.test('Should throw error for base value equals 0', function(assert) {
    const product = new Product('Pencil', 0, 1);
    assert.throws(function() {
        product.validate();
    },
        /^Error: Base value must be greater than 0$/g,
        'Product base value is 0');
});

QUnit.test('Should throw error for product quantity not filled', function(assert) {
    const product = new Product('Pencil', 0.75, undefined);
    assert.throws(function() {
        product.validate();
    },
        /^Error: Quantity is required$/g,
        'Product quantity has not been filled');
});

QUnit.test('Should validate product', function(assert) {
    const product = new Product('Pencil', 0.75, 10);
    assert.equal(product.validate(), undefined, 'Product is ok');
});


QUnit.module('Shopping cart model');
QUnit.test('Should add product on shopping cart', function(assert) {
    const shoppingCart = new ShoppingCart();
    assert.equal(shoppingCart.products.length, 0, 'Shopping must be empty');
    shoppingCart.add(new Product('Pencil', 0.75, 1));
    assert.equal(shoppingCart.products.length, 1, 'Shopping cart must have 1 item');
});

QUnit.test('Should have value for total value on shopping cart', function(assert) {
    const shoppingCart = new ShoppingCart();
    shoppingCart.add(new Product('Pen', 1, 1));
    shoppingCart.add(new Product('Pencil', 2, 0.75));
    shoppingCart.add(new Product('Notebook', 10, 5));
    assert.equal(shoppingCart.getTotalValue(), 52.5, 'Total value is ok');
});

QUnit.test('Should have zero for total value on shopping cart', function(assert) {
    const shoppingCart = new ShoppingCart();
    assert.equal(shoppingCart.getTotalValue(), 0, 'Total value is zero');
});


QUnit.module('Shopping cart facade');
QUnit.test('Should add product on shopping cart', function(assert) {
    const shoppingCartFacade = new ShoppingCartFacade();
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 0, 'Shopping cart must be empty');
    shoppingCartFacade.addProduct('Pencil', 0.75, 10);
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 1, 'Shopping cart must have 1 item');
});

QUnit.test('Should not add product on shopping cart when product don\'t pass on validate', function(assert) {
    const shoppingCartFacade = new ShoppingCartFacade();
    try {
        shoppingCartFacade.addProduct('Pencil', 0.75, undefined);
    } catch (ex) { }

    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 0, 'Shopping cart must be empty');
});

QUnit.test('Should remove product of shopping cart', function(assert) {
    const shoppingCartFacade = new ShoppingCartFacade();
    shoppingCartFacade.addProduct('Pencil', 0.75, 10);
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 1, 'Shopping cart must have 1 item');
    shoppingCartFacade.removeProduct(shoppingCartFacade.getShoppingCart().products[0].id);
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 0, 'Shopping cart must be empty');
});

QUnit.test('Should not remove product of shopping cart when id doesn\'t match', function(assert) {
    const shoppingCartFacade = new ShoppingCartFacade();
    shoppingCartFacade.addProduct('Pencil', 0.75, 10);
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 1, 'Shopping cart must have 1 item');
    shoppingCartFacade.removeProduct(1);
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 1, 'Shopping cart must have 1 item');
});

QUnit.test('Should filter products of shopping cart', function(assert) {
    const shoppingCartFacade = new ShoppingCartFacade();
    shoppingCartFacade.addProduct('Pencil', 0.75, 10);
    shoppingCartFacade.addProduct('Pen', 1, 10);
    shoppingCartFacade.addProduct('Notebook', 10, 10);
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 3, 'Shopping cart must have 3 items');
    const filteredShoppingCart = shoppingCartFacade.filterProducts('Pen');
    assert.equal(filteredShoppingCart.products.length, 2, 'Filtered shopping cart must have 2 items');
});

QUnit.test('Should not filter products of shopping cart when name doesn\'t match with any item', function(assert) {
    const shoppingCartFacade = new ShoppingCartFacade();
    shoppingCartFacade.addProduct('Pencil', 0.75, 10);
    shoppingCartFacade.addProduct('Pen', 1, 10);
    shoppingCartFacade.addProduct('Notebook', 10, 10);
    assert.equal(shoppingCartFacade.getShoppingCart().products.length, 3, 'Shopping cart must have 3 items');
    const filteredShoppingCart = shoppingCartFacade.filterProducts('Eraser');
    assert.equal(filteredShoppingCart.products.length, 0, 'Filtered shopping cart must be empty');
});

QUnit.test('Should return the total value of the shopping cart', function(assert) {
    const shoppingCartFacade = new ShoppingCartFacade();
    shoppingCartFacade.addProduct('Pencil', 0.75, 10);
    shoppingCartFacade.addProduct('Pen', 1, 10);
    shoppingCartFacade.addProduct('Notebook', 10, 10);
    assert.equal(shoppingCartFacade.getTotalValue(), 117.5, 'Total value is ok');
});