// 1. Extend TypeScript's global interface definitions
declare global {
  interface Object {
    altaf(): void;
  }
  interface Array<T> {
    heyaltaf(): void;
  }
}

const myhero: string[] = ['thor', 'spiderman'];

const heropower: { thor: string; spider: string } = {
  thor: "thunder",
  spider: "slinger"
};

Object.prototype.altaf = function (): void {
  console.log("altaf is present in all");
};

Array.prototype.heyaltaf = function (): void {
  console.log("altaf is present in array");
};

// 4. Invocations
heropower.altaf(); // Output: altaf is present in all
myhero.heyaltaf();  // Output: altaf is present in array

// Required when using 'declare global' inside a module
export {};

class User {
    username: string;

    constructor(username: string) {
        this.username = username;
    }

    logMe(): void {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(): void {
        console.log(`add new courses by ${this.username}`);
    }
}

const altaf = new Teacher("altu", "altaf@g.com", "12345");
altaf.addCourses();

const altumiya = new User("altumiya");
altumiya.logMe();

class UserWithPassword {
    username: string;
    email: string;
    password: number;

    constructor(username: string, email: string, password: number) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(): string {
        return `${this.password}abc`;
    }

    changeUsername(): string {
        return `${this.username.toUpperCase()}`;
    }
}

const altaf3 = new UserWithPassword("altu", "altaf@g.com", 1234);
console.log(altaf3.encryptPassword());
console.log(altaf3.changeUsername());

class User {
    email: string;
    private _password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password; // Calls the setter
    }

    get password(): string {
        return `${this._password}altu`;
    }

    set password(value: string) {
        this._password = value;
    }
}

const altaf = new User("altaf@g.com", "abc");
console.log(altaf.password); // Output: abcaltu