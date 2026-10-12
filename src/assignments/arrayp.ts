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

console.log(array.includes(5));    // true