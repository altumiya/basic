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
function multipleby5(num) {
    return num * 5;
}
// Namespace merges with the function to add static properties
(function (multipleby5) {
    multipleby5.power = 2;
})(multipleby5 || (multipleby5 = {}));
console.log(multipleby5(5)); // 25
console.log(multipleby5.power); // 2
console.log(multipleby5.prototype); // {}
class CreateUser {
    constructor(username, score, year = "not provided") {
        this.username = username;
        this.score = score;
        this.year = year;
    }
    increment() {
        this.score++;
    }
    printme() {
        console.log(`score is ${this.score}`);
        console.log(`year is ${this.year}`);
    }
}
const altaf = new CreateUser("altaf", 25, 1994);
const altu = new CreateUser("altumiya", 25, 1994);
altaf.printme();
// score is 25
// year is 1994
altu.printme();
// score is 25
// year is 1994
class SetUsername {
    constructor(username) {
        this.username = username;
    }
}
class CreateUser1 extends SetUsername {
    constructor(username, email, password) {
        super(username); // Equivalent to SetUsername.call(this, username) i.e. substituting another object for the current object.
        this.email = email;
        this.password = password;
    }
}
const altaf1 = new CreateUser1("altaf", "altaf1@g.com", "1234");
const altu1 = new CreateUser1("altu", "altz1@g.com", "2345");
console.log(altaf1);
console.log(altu1);
export {};
//# sourceMappingURL=functions.js.map