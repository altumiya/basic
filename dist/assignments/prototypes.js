const myhero = ['thor', 'spiderman'];
const heropower = {
    thor: "thunder",
    spider: "slinger"
};
Object.prototype.altaf = function () {
    console.log("altaf is present in all");
};
Array.prototype.heyaltaf = function () {
    console.log("altaf is present in array");
};
// 4. Invocations
heropower.altaf(); // Output: altaf is present in all
myhero.heyaltaf(); // Output: altaf is present in array
// Required when using 'declare global' inside a module
export {};
class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourses() {
        console.log(`add new courses by ${this.username}`);
    }
}
const altaf = new Teacher("altu", "altaf@g.com", "12345");
altaf.addCourses();
const altumiya = new User("altumiya");
altumiya.logMe();
class UserWithPassword {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}
const altaf3 = new UserWithPassword("altu", "altaf@g.com", 1234);
console.log(altaf3.encryptPassword());
console.log(altaf3.changeUsername());
//# sourceMappingURL=prototypes.js.map