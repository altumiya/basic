function totalprice(item, price, text) {
    var price = 100;
    if (text) {
        console.log(text + price * item);
    }
    else {
        console.log(price * item);
    }
}
totalprice(20, 100, "total price is");
function simple(data) {
    console.log(data);
}
simple(100);
simple("altaf");
simple(true);
export {};
//# sourceMappingURL=fnparams.js.map