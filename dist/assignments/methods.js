const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums = mynums.filter((num) => num > 4);
console.log(nums); // Output: [5, 6, 7, 8, 9]
const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnums = mynum.filter((num) => {
    return num > 4;
});
console.log(newnums);
const mynums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnums1 = mynums1
    .map((num) => ((num + 9) * 1.25) ** 2)
    .filter((num) => num >= 200);
console.log(newnums1);
// Output: [ 225, 264.0625, 306.25, 351.5625, 400, 451.5625, 506.25 ]
const mynums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initial = 0;
const newnums2 = mynums2.reduce((accumulator, currentValue) => {
    console.log(`a : ${accumulator} and c : ${currentValue}`);
    return accumulator + currentValue;
}, initial);
console.log(newnums2);
const cart = [
    { itemname: "soap", price: 400 },
    { itemname: "oil", price: 700 },
    { itemname: "sapionin", price: 300 },
    { itemname: "ghee", price: 1400 }
];
const finalt = cart.reduce((acc, item) => acc + item.price, 0);
console.log(finalt); // 2800
const mydata = ["a", 1, "b", 2, 3, "c", "altaf"];
function mytype(data) {
    const string = [];
    const number = [];
    for (const d of data) {
        if (typeof d === "string") {
            string.push(d);
        }
        else {
            number.push(d);
        }
    }
    return { string, number };
}
const { string, number } = mytype(mydata);
console.log(string); // ["a", "b", "c", "altaf"]
console.log(number); // [1, 2, 3]
// same above by inbuilt method
const mydata1 = ["a", 1, "b", 2, 3, "c", "altaf"];
const string1 = mydata1.filter((d) => typeof d === "string");
const number1 = mydata1.filter((d) => typeof d === "number");
console.log(string1); // ["a", "b", "c", "altaf"]
console.log(number1); // [1, 2, 3]
function sum(a) {
    let total = a;
    function inner(b) {
        if (b === undefined) {
            return total;
        }
        total += b;
        return inner;
    }
    return inner;
}
console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum(5)(10)()); // 15
let array = [1, 2, 3, 4, 5];
let result = array.map(n => n > 3);
for (let i = 0; i < array.length; i++) {
    result.push(array[i] > 3);
}
result.length = array.length; // without this the result will be [false,false,false,true,true,  false,false,false,true,true]
console.log(result);
export {};
//# sourceMappingURL=methods.js.map