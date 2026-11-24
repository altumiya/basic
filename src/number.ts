// Note: 'Number' (capital N) is the wrapper object type; in TypeScript,
// primitive 'number' is preferred for regular numeric values.
const balance: Number = new Number(100);
console.log(balance);                    // [Number: 100]
console.log(balance.toString());         // "100"
console.log(balance.toString().length);  // 3
console.log(balance.toFixed(2));         // "100.00"

const num: number = 123.456;

// 1. Standard usage: total significant digits (before + after decimal)
console.log(num.toPrecision(5)); // "123.46" (5 digits total, rounded)
console.log(num.toPrecision(4)); // "123.5"  (4 digits total, rounded)
console.log(num.toPrecision(3)); // "123"    (3 digits total)

// 2. Precision larger than existing digits: pads with trailing zeros
console.log(num.toPrecision(8)); // "123.45600"

// 3. Precision smaller than the integer part: switches to scientific notation
console.log(num.toPrecision(2)); // "1.2e+2" (1.2 × 10² = 120)
console.log(num.toPrecision(1)); // "1e+2"   (1 × 10² = 100)

var octa:number =0o1111;
var hexa:number =0x1111;
var binary:number =0b1111;
console.log(octa+10) 
console.log(hexa+10)
console.log(binary+10)

var item:number = 100;
var item2="23"
var converteditem2 = Number(item2)
console.log(item+converteditem2)

var item:number = 100;
var item2="23"
var converteditem2 =+item2
console.log(item+converteditem2)


var item:number = 100;
var item2="23"
var converteditem2 =+item2
console.log(item+ +item2)
