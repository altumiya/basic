
function fruits<T>(name:T):T{
    return name
}
let onlyfruit=fruits("apple")
let onlyweight=fruits(100)
console.log(onlyfruit)
console.log(onlyweight)
//not to use any as it datatype is shows as any

function user24<T>(data:T):T{
    return data
}
let usercoll = user24(["altaf","altu"])

function user25<T>(data1: T[]): T {
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

function pairs<A,B>(a:A,b:B):[A ,B]{
    return[a,b]
}
const pair1 = pairs("string", true);

console.log("First element:", pair1[0]); // Type: string
console.log("Second element:", pair1[1]); // Type: boolean
console.table(pair1);

const pair2 =pairs(25, {seat:"upper"})

console.log("Seat number:", pair2[0]); // Type: number
console.log("Seat details:", pair2[1].seat); // Autocompletes .seat safely
console.table(pair2);

const pair3 = pairs<string, number>("side lower", 1500);
console.log("\n--- Pair 3: Explicit Generics ---");
console.log(`Seat: ${pair3[0]}, Price: ₹${pair3[1]}`);

// 3. Box with a complex object
type box<T> = {
  content: T;
};

type Seat = { berth: string; price: number };
const seatBox: box<Seat> = {
  content: {
    berth: "upper",
    price: 1500,
  },
};

console.log("Berth:", seatBox.content.berth);
console.log("Price: ₹" + seatBox.content.price);