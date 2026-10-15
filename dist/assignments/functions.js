function add2num(num1, num2) {
    return num1 + num2;
}
const result = add2num(5, 4);
console.log(result); // Output: 9
// Standard named or anonymous IIFE
(function (name) {
    console.log(`Hello, ${name}`);
})("Altaf");
const user = {
    username: "altaf",
    price: 999,
    welcomemsg: function () {
        // 'this' is explicitly typed as User to prevent accidental binding errors
        console.log(`${this.username}, welcome to world`);
    }
};
user.welcomemsg(); // "altaf, welcome to world"
console.log(this); // In Node/TS module scope: {}
// 2. Arrow function capturing lexical 'this'
const one = () => {
    console.log(this); // Lexical 'this' inherited from the outer module scope: {}
};
one();
// 3. Explicit return block body
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(2, 4)); // 6
// 4. Concise body with implicit return
const add1 = (num1, num2) => num1 + num2;
console.log(add1(3, 4)); // 7
// Prefixed with '_' if params are unused to satisfy 'noUnusedParameters'
const add3 = (_num1, _num2) => ({
    username: "altaf"
});
console.log(add3(3, 4)); // { username: 'altaf' }
export {};
//# sourceMappingURL=functions.js.map