var student = {
    name: "altaf",
    age: 30,
    status: true,
};
var staff = {
    name: "altu",
    age: 35,
    status: true,
    domain: "support",
};
console.log(student);
console.log(staff);
class collegedata {
    constructor(cname) {
        this.name = cname;
    }
    displayteacher() {
        console.log("altu");
    }
    getstudent() {
        return ["altu", "altaf"];
    }
}
var colg1 = new collegedata("gn khalsa college");
colg1.displayteacher(); //altu
console.log(colg1.displayteacher()); //return altu with undefine because displayteacher() is void type
console.log(colg1.getstudent()); //['altu','altaf']
let apply = (p) => p * 0.5;
console.log(apply(2000));
let u = {
    name: "altu",
    age: 31,
};
console.log("Name:", u.name);
console.log("Age:", u.age);
let numberbox = { content: 10 };
let stringbox = { content: "need string" };
console.log("Content:", numberbox.content);
console.log("Type:", typeof numberbox.content);
console.log("Content:", stringbox.content);
console.log("Type:", typeof stringbox.content);
export {};
//# sourceMappingURL=interface.js.map