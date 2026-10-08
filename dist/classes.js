class Product {
    constructor(name, price, pId) {
        this.isCart = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.isCart = true;
    }
    buyProduct() {
        if (this.isCart) {
            return `product ${this.name} is ordered at ${this.price} price`;
        }
        else {
            return "no product is in cart";
        }
    }
}
var product = new Product("soap", 100, 101);
product.addToCart();
console.log(product.buyProduct());
var product = new Product("soil", 120, 102);
product.addToCart();
console.log(product.buyProduct());
export {};
//# sourceMappingURL=classes.js.map