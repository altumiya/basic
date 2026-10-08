function fruits() {
    return "apple";
}
function simple() {
    //this is called void nothing returns else when return anything it shows datatype
}
function complex() {
    let data = 10;
    let name = "altaf";
    let type = "age";
    if (type == 'age') {
        return data;
    }
    else {
        return name;
    }
}
function loop() {
    while (true) {
        console.log("loop"); // endless loop
    }
}
function simple2() {
    while (true) {
        console.log("loop forever");
    }
}
function error() {
    throw new Error("Something went wrong");
}
function makeseat(order) {
    if (!order)
        return null;
    return order;
}
function makeseat2(type) {
    if (!type)
        return null;
    return type;
}
function createseat(order) {
    return 4;
}
export {};
//# sourceMappingURL=function.js.map