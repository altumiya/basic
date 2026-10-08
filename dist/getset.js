class empinfo {
    constructor() {
        this._name = "altaf";
        this._email = "altaf@eg.com";
    }
    get name() {
        return "mr." + this._name;
    }
    set email(val) {
        this._email = "emp" + val;
    }
}
var emp1 = new empinfo();
emp1.email = "altumiya@g.com";
console.log(emp1.name);
console.log(emp1._email);
export {};
//# sourceMappingURL=getset.js.map