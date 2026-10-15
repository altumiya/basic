function add2num(num1: number, num2: number): number {
  return num1 + num2;
}

const result: number = add2num(5, 4);
console.log(result); // Output: 9

// Standard named or anonymous IIFE
(function (name: string): void {
  console.log(`Hello, ${name}`);
})("Altaf");

// 1. Object Interface
interface User {
  username: string;
  price: number;
  welcomemsg: () => void;
}

const user: User = {
  username: "altaf",
  price: 999,
  welcomemsg: function (this: User): void {
    // 'this' is explicitly typed as User to prevent accidental binding errors
    console.log(`${this.username}, welcome to world`);
  }
};

user.welcomemsg(); // "altaf, welcome to world"
console.log(this); // In Node/TS module scope: {}

// 2. Arrow function capturing lexical 'this'
const one = (): void => {
  console.log(this); // Lexical 'this' inherited from the outer module scope: {}
};
one();

// 3. Explicit return block body
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(add(2, 4)); // 6

// 4. Concise body with implicit return
const add1 = (num1: number, num2: number): number => num1 + num2;
console.log(add1(3, 4)); // 7

// 5. Implicitly returning an object literal wrapped in parentheses ({ ... })
interface SimpleUser {
  username: string;
}

// Prefixed with '_' if params are unused to satisfy 'noUnusedParameters'
const add3 = (_num1: number, _num2: number): SimpleUser => ({
  username: "altaf"
});

console.log(add3(3, 4)); // { username: 'altaf' }