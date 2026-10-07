var user:string[] = ['altu', 'sam' ,"adda"]
var marks:number[] = [23, 67 ,54 , 76 ]
var marks2:Array<number> = [23,45,6,7,89]
marks2.push(100)

var names: string[] = ['altaf', 'altu']
names.push('sam')
console.log(user)
console.log(marks)
console.log(marks2)
console.log(names)

// 1. Array of Objects Example
type seatselection={
    name:string;
    price:number;
    seating:number;
    isavailable:boolean
}

let ssobj:seatselection[]= [
    {name:"upper",
    price:2000,
    seating:23,
    isavailable:false},

    {
    name: "lower",
    price: 1500,
    seating: 15,
    isavailable: true,
  }
]
console.log("First category name:", ssobj[0].name);
console.log("First category available?", ssobj[0].isavailable);
console.table(ssobj);

//2d arrays example 
const seatnumber: number[] [] =[
    [1,2,3],
    [4,5,6]
]
console.log("Element at [0][1]:", seatnumber[0][1]);
seatnumber.forEach((row, rowIndex) => {
  row.forEach((seat, colIndex) => {
    console.log(`Row ${rowIndex}, Col ${colIndex} -> Seat #${seat}`);
  });
});
console.table(seatnumber);