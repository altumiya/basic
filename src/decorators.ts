function classlogger(constructor:Function){
    console.log(constructor.name)
}
function getdetails(target:any, key:any){
   console.log(key.name)
}
@classlogger  // decorator function
class maths {
    @getdetails
    value1:number;
    value2:number;
    constructor(x:number,y:number){
        this.value1=x;
        this.value2=y
    }
}


var cm1= new maths(10,20)

//overriding class constructor using decorator

function updatedsum(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (x: number, y: number) {
        const result = originalMethod.call(this, x, y);
        console.log(`the output of ${x} and ${y} is : ${result}`); // Logs internally
        return result; // Still returns number 30
    };
}

class CustomMaths3 {
    @updatedsum
    sum(x: number, y: number): number {
        return x + y;
    }
}

const cm2 = new CustomMaths3();
const total = cm2.sum(10, 20);
console.log(`the total is : ${total}`);