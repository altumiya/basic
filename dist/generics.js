function fruits(name) {
    return name;
}
let onlyfruit = fruits("apple");
let onlyweight = fruits(100);
console.log(onlyfruit);
console.log(onlyweight);
//not to use any as it datatype is shows as any
function user24(data) {
    return data;
}
let usercoll = user24(["altaf", "altu"]);
function user25(data1) {
    const first = data1[0];
    if (first === undefined) {
        throw new Error("Array is empty");
    }
    return first;
}
let usercolln = user25(["altaf", "altu"]);
console.log(usercoll); // whole array
console.log(usercolln); // altaf
// generic other than <T>
function pairs(a, b) {
    return [a, b];
}
const pair1 = pairs("string", true);
console.log("First element:", pair1[0]); // Type: string
console.log("Second element:", pair1[1]); // Type: boolean
console.table(pair1);
const pair2 = pairs(25, { seat: "upper" });
console.log("Seat number:", pair2[0]); // Type: number
console.log("Seat details:", pair2[1].seat); // Autocompletes .seat safely
console.table(pair2);
const pair3 = pairs("side lower", 1500);
console.log("\n--- Pair 3: Explicit Generics ---");
console.log(`Seat: ${pair3[0]}, Price: ₹${pair3[1]}`);
const seatBox = {
    content: {
        berth: "upper",
        price: 1500,
    },
};
console.log("Berth:", seatBox.content.berth);
console.log("Price: ₹" + seatBox.content.price);
export {};
//# sourceMappingURL=generics.js.map