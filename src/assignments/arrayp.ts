const array: number[] = [1, 2, 3, 4, 5];
const newarr: string = array.join();

console.log(array);               // [1, 2, 3, 4, 5]
console.log(newarr);              // "1,2,3,4,5"

array.push(6, 7);                 // Adds 6 and 7 to the end
console.log(array);               // [1, 2, 3, 4, 5, 6, 7]

array.pop();                      // Removes the last element (7)
console.log(array);               // [1, 2, 3, 4, 5, 6]

array.unshift(9);                 // Adds 9 to the beginning
console.log(array);               // [9, 1, 2, 3, 4, 5, 6]

array.shift();                    // Removes the first element (9)
console.log(array);               // [1, 2, 3, 4, 5, 6]

console.log(array.slice(1, 4)); //slice(start, end)

console.log(array.includes(5));    // true

const array2: number[] = [1,2,3,4,5]
array2.splice(2, 2, 99, 100);
console.log(array2) //splice(start, deleteCount, item1, item2, ...)

const marvel: string[] = ["spider", "iron", "hulk"];
const dc: string[] = ["bat", "supe", "joke"];

// marvel.push(dc)           // Note: In TS, this throws an error if marvel is string[]
// const all: string[] = marvel.concat(dc);
const all: string[] = [...marvel, ...dc];

console.log(marvel);         // ["spider", "iron", "hulk"]
console.log(all);            // ["spider", "iron", "hulk", "bat", "supe", "joke"]

// Nested array type union: (number | number[])[]
const array1: (number | number[])[] = [1, 2, 3, [4, 5], 6, 7, [8, 9]];
const array3: number[] = array1.flat(Infinity) as number[];
console.log(array3);         // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.from("Altaf"));               // ["A", "l", "t", "a", "f"]
console.log(Array.isArray("Altaf"));            // false
console.log(Array.from({ name: "Altaf" }));     // []   const entries = Object.entries({ name: "Altaf" });
//console.log(entries); // [["name", "Altaf"]]

const score1: number = 100;
const score2: number = 200;
const score3: number = 300;
console.log(Array.of(score1, score2, score3));  // [100, 200, 300]

//  Array Destructuring

const colors: string[] = ["Red", "Green", "Blue", "Yellow"];

// Inferred as: firstColor: string, secondColor: string
const [firstColor, secondColor] = colors;

console.log(firstColor);  // Output: "Red"
console.log(secondColor); // Output: "Green"


// --- Skipping Elements in Arrays ---

const scores: number[] = [100, 85, 92, 78];

// Skipping index 1 (85)
const [firstScore, , thirdScore] = scores;

console.log(firstScore); // Output: 100
console.log(thirdScore); // Output: 92

const data: number[] = [2, 4, 7, 90, 32, 54];

// Pass arr as a typed parameter instead of relying on external scope
function reverseData(arr: number[]): number[] {
  const revFinal: number[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revFinal.push(arr[i]);
  }

  return revFinal;
}

const newData: number[] = reverseData(data);

console.log(newData); // [54, 32, 90, 7, 4, 2]
console.log(data);    // [2, 4, 7, 90, 32, 54] (original array untouched)

let data2: number[] = [2, 4, 7, 90, 32, 54];

let newdata: number[] = data2.reverse(); //also sur .toReverse() method reverses the original array in place and returns a reference to the same array.

console.log(newdata); // [54, 32, 90, 7, 4, 2]