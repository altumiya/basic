class company {
    static getname() {
        return "altaf";
    }
}
company.name1 = "ibm";
var comp1 = new company();
//console.log(comp1.name) with no static and this.name also not works as it is part of class and not object
console.log(company.name1); // with static as it is part of class
console.log(company.getname());
// abstract example
class drink {
}
class mydrink extends drink {
    make() {
        console.log("drinks");
    }
}
const coffee = new mydrink();
coffee.make();
export {};
//# sourceMappingURL=static.js.map