var value = "altaf";
value = 100;
value = {};
value = ['altu'];
value = true;
console.log(value);
//for not sure what data it is only use any coz it having problem oN typechecking
var value1 = "altaf";
value1 = "altu";
if (typeof value1 == 'string') {
    console.log(value1.toUpperCase());
}
value1 = 100;
console.log(value1);
let counts = "10M";
let apirequest = "pending";
let sitting = 'middle';
sitting = 'window';
const orders = ["12", "13", "14", "15"];
let currentorder;
for (let order of orders) {
    if (order === "14") {
        currentorder = order;
        break;
    }
    currentorder = "11";
}
console.log(currentorder);
function fruitdata() {
    var item = 2;
    if (item > 1) {
        return ["apple", "banana"];
    }
    else {
        return "apricot";
    }
}
console.log(fruitdata());
function stdinfo(name) {
    if (typeof name === "string") {
        return "std name is " + name;
    }
    else if (typeof name === "number") {
        return "std age is " + name;
    }
    else {
        return "std value is " + name;
    }
}
console.log(stdinfo("altaf"));
console.log(stdinfo(30));
export {};
//# sourceMappingURL=unionandany.js.map