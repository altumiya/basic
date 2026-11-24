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

// 4. Small decimal numbers: ignores leading zeros when counting significant digits
const small: number = 0.004567;
console.log(small.toPrecision(2)); // "0.0046" (4 and 6 are the 2 significant digits)

// 5. No argument: returns the number as a string unchanged
console.log(num.toPrecision()); // "123.456"

// 6. Return type is ALWAYS a string
const formatted: string = num.toPrecision(4);
console.log(typeof formatted); // "string"

// toLocaleString() formats a number (or Date) into a region-specific string—
// most commonly used for adding commas, currency symbols, or formatting dates.
const num2: number = 1000000;
console.log(num2.toLocaleString("en-IN")); // "10,00,000"
console.log(num2.toLocaleString("en-US")); // "1,000,000"

// TypeScript catches invalid types at compile time:
// Math.max(10, "abc"); // ❌ TS Error: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(Math.max(10, Number("abc"))); // NaN (explicit conversion compiles, returns NaN)
// 
// TypeScript catches invalid types at compile time:
// Math.max(10, "abc"); // ❌ TS Error: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(Math.max(10, Number("abc"))); // NaN (explicit conversion compiles, returns NaN)
// Changed "abc" to "20". Since Number("abc") evaluates to NaN, it caused the unexpected output; Math.max(10, Number("20")) returns 20.

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
