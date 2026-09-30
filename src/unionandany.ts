var value:any ="altaf";

value=100;

value={}

value=['altu']

value=true
console.log(value)
//for not sure what data it is only use any coz it having problem oN typechecking

var value1:unknown="altaf"
value1="altu"

if (typeof value1 == 'string'){
    console.log(value1.toUpperCase());
}
value1=100
console.log(value1)

let counts: number | string = "10M"

let apirequest : 'pending' | 'completed' | 'failed' = "pending"

let sitting: 'window' | 'middle' | 'corner' = 'middle'
sitting = 'window'

const orders = ["12" , "13", "14" , "15"];
let currentorder: string | undefined ;

for (let order of orders) {
    if (order === "14") {
        currentorder = order;
        break;
    }
    currentorder = "11";
}
console.log(currentorder)

function fruitdata(): string|number|string[]{
    var item =2
    if(item>1){
       return["apple" , "banana"]
    }
    else{
        return "apricot"
    }
}
console.log(fruitdata())

function stdinfo(name: string | number | boolean): string {
    if (typeof name === "string") {
        return "std name is " + name;
    } else if (typeof name === "number") {
        return "std age is " + name;
    } else {
        return "std value is " + name;
    }
}

console.log(stdinfo("altaf"));
console.log(stdinfo(30));