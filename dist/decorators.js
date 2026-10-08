var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classlogger(constructor) {
    console.log(constructor.name);
}
function getdetails(target, key) {
    console.log(key.name);
}
let maths = class maths {
    constructor(x, y) {
        this.value1 = x;
        this.value2 = y;
    }
};
__decorate([
    getdetails
], maths.prototype, "value1", void 0);
maths = __decorate([
    classlogger // decorator function
], maths);
var cm1 = new maths(10, 20);
//overriding class constructor using decorator
function updatedsum(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (x, y) {
        const result = originalMethod.call(this, x, y);
        console.log(`the output of ${x} and ${y} is : ${result}`); // Logs internally
        return result; // Still returns number 30
    };
}
class CustomMaths3 {
    sum(x, y) {
        return x + y;
    }
}
__decorate([
    updatedsum
], CustomMaths3.prototype, "sum", null);
const cm2 = new CustomMaths3();
const total = cm2.sum(10, 20);
console.log(`the total is : ${total}`);
export {};
//# sourceMappingURL=decorators.js.map