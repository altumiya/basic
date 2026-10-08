let personinfo = {
    name: "altaf",
    age: 32,
    status: true
};
let persondatax;
persondatax = "name";
console.log(persondatax + " is:", personinfo[persondatax]);
persondatax = "age";
console.log(persondatax + " is:", personinfo[persondatax]);
// use object keys with keyof
let userx = "name";
console.log(`${userx} is:`, personinfo[userx]);
userx = "status";
console.log(`${userx} is:`, personinfo[userx]);
export {};
//# sourceMappingURL=keyof.js.map