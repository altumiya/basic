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