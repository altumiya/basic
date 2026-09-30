var value:any ="altaf";

value=100;

value={}

value=['altu']

value=true
console.log(value)
//for not sure what data it is only use any coz it having problem oN typechecking

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