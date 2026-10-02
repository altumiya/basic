class empinfo{
    _name:string ="altaf"
    _email:string ="altaf@eg.com"
    get name():string{
        return "mr." +this._name
    }
    set email(val:string){
         this._email= "emp" + val;
    }
}
var emp1 =new empinfo()
emp1.email ="altumiya@g.com"
console.log(emp1.name)
console.log(emp1._email)