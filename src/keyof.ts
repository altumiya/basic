type persona={
    name:string,
    age:number,
    status:boolean
}
let personinfo:persona={
    name:"altaf",
    age:32,
    status:true
}
type personx= keyof persona;
let persondatax : personx;

persondatax = "name"
console.log(persondatax + " is:", personinfo[persondatax]);
persondatax = "age"
console.log(persondatax + " is:", personinfo[persondatax]);

// use object keys with keyof

let userx : keyof persona="name"

console.log(`${userx} is:`, personinfo[userx]); 

userx = "status";

console.log(`${userx} is:`, personinfo[userx]);