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

function multipleby5(num: number): number {
  return num * 5;
}

// Namespace merges with the function to add static properties
namespace multipleby5 {
  export let power: number = 2;
}

console.log(multipleby5(5));          // 25
console.log(multipleby5.power);        // 2
console.log(multipleby5.prototype);    // {}

class CreateUser {
  username: string;
  score: number;
  year: string | number;

  constructor(username: string, score: number, year: string | number = "not provided") {
    this.username = username;
    this.score = score;
    this.year = year;
  }

  increment(): void {
    this.score++;
  }

  printme(): void {
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
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}

class CreateUser1 extends SetUsername {
  email: string;
  password: string;

  constructor(username: string, email: string, password: string) {
    super(username); // Equivalent to SetUsername.call(this, username) i.e. substituting another object for the current object.
    this.email = email;
    this.password = password;
  }
}

const altaf1 = new CreateUser1("altaf", "altaf1@g.com", "1234");
const altu1 = new CreateUser1("altu", "altz1@g.com", "2345");

console.log(altaf1);
console.log(altu1);

// lexical scope eg
function outer(): void {
    let username: string = "altaf";
    
    function inner(): void {
        console.log("inner", username); // inner altaf
    }
    
    inner();
    console.log("outer", username); // outer altaf
}

outer();

//closure eg
function outer(): void {
    let username: string = "altaf";
    let secret: string = "mysec";

    function inner(): void {
        console.log("inner", username); // inner altaf
    }

    function inner2(): void {
        console.log("inner2", username); // inner2 altaf
        console.log(secret); // mysec
    }

    inner();
    inner2();
    console.log("outer", username); // outer altaf
}

outer();