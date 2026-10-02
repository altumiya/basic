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

//with class example

interface cdatatype{
    name:string;
    displayteacher():void;
    getstudent():string[]
}

class collegedata implements cdatatype{
    name:string;
    constructor(cname:string){
        this.name=cname
    }
    displayteacher():void{
        console.log("altu")
    }
    getstudent():string[]{
        return ['altu','altaf']
    }
}
var colg1= new collegedata('gn khalsa college')
colg1.displayteacher(); //altu
console.log(colg1.displayteacher()) //return altu with undefine
console.log(colg1.getstudent()) //['altu','altaf']