var emp:[string, number,boolean] = ["altaf" , 30 , true]
console.log(emp)

//if want to add another datatype first define it else it shows error

var emp3:[string, number,boolean,number] = ["altaf" , 30 , true,1000]//if want to add another datatype first define it else it shows error

emp3.push('mumbai')//error show karegah but push ho jayegha console me so use readonly
console.log(emp3)

//named tuples example 

let seatitems: [name:string, price:number] = [
    "side upper",
    2500
]

console.log("Seat Name (index 0):", seatitems[0]);
console.log("Price (index 1):", seatitems[1]);

const [seatName, seatPrice] = seatitems;
console.log(`The seat "${seatName}" costs ₹${seatPrice}.`);

console.table(seatitems);