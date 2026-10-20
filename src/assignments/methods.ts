const mynums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums = mynums.filter((num) => num > 4);
console.log(nums); // Output: [5, 6, 7, 8, 9]

const mynum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnums: number[] = mynum.filter((num: number) => {
  return num > 4;
});

console.log(newnums);

const mynums1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newnums1: number[] = mynums1
  .map((num) => ((num + 9) * 1.25) ** 2)
  .filter((num) => num >= 200);

console.log(newnums1);
// Output: [ 225, 264.0625, 306.25, 351.5625, 400, 451.5625, 506.25 ]


const mynums2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initial: number = 0;

const newnums2: number = mynums2.reduce(
  (accumulator: number, currentValue: number): number => {
    console.log(`a : ${accumulator} and c : ${currentValue}`);
    return accumulator + currentValue;
  },
  initial
);

console.log(newnums2);


interface CartItem {
  itemname: string;
  price: number;
}

const cart: CartItem[] = [
  { itemname: "soap", price: 400 },
  { itemname: "oil", price: 700 },
  { itemname: "sapionin", price: 300 },
  { itemname: "ghee", price: 1400 }
];

const finalt: number = cart.reduce(
  (acc: number, item: CartItem): number => acc + item.price,
  0
);

console.log(finalt); // 2800


const mydata: (string | number)[] = ["a", 1, "b", 2, 3, "c", "altaf"];

function mytype(data: (string | number)[]) {
  const string: string[] = [];
  const number: number[] = [];

  for (const d of data) {
    if (typeof d === "string") {
      string.push(d);
    } else {
      number.push(d);
    }
  }

  return { string, number };
}

const { string, number } = mytype(mydata);
console.log(string); // ["a", "b", "c", "altaf"]
console.log(number); // [1, 2, 3]