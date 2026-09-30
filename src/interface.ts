interface info{
    name:string,
    age:number;
    status:boolean
}

interface stafftype extends info{
    domain:string // for multiple interface import can also be done
}

var student:info={
     name:"altaf",
     age:30,
     status:true
}

var staff:stafftype={
     name:"altu",
     age:35,
     status:true,
     domain:"support"
}

console.log(student)
console.log(staff)