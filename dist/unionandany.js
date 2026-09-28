"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=unionandany.js.map