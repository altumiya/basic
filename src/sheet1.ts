// // 1. Sum and Average
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77];
//     let sum: number = 0;
    
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     console.log("Sum (Loop):", sum); // 96

//     const b: number = a.reduce((sum, value) => sum + value, 0);
//     console.log("Sum (Reduce):", b); // 96
    
//     let avg: number = sum / a.length;
//     console.log("Average:", avg); // 16
// }

// // 2. Largest and Smallest
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77];
    
//     let largest: number = a[0];
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] > largest) {
//             largest = a[i];
//         }
//     }
//     console.log("Largest:", largest); // 77

//     let smallest: number = a[0];
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] < smallest) {
//             smallest = a[i];
//          }
//     }
//     console.log("Smallest:", smallest); // 1
// }

// // 3. Mapping values and indices
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77];
//     // Define the type for the array of objects returned by map
//     let b: { v: number, i: number }[] = a.map((v, i) => ({ v, i }));
//     console.log("Mapped Array:", b);
// }

// // 4. Moving / Separating an element by Index
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77];
//     let remaining: number[] = [];
//     let b: number[] = [];

//     for (let i = 0; i < a.length; i++) {
//         if (i === 2) {
//             b.push(a[i]);
//         } else {
//             remaining.push(a[i]);
//         }
//     }
//     a = remaining;
//     console.log("Remaining:", a); // [ 1, 3, 5, 6, 77 ]
//     console.log("Moved:", b); // [ 4 ]
// }

// // 5. Inserting an element at a specific index
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77];
//     let newa: number[] = [];

//     for (let i = 0; i < a.length; i++) {
//         if (i === 3) {
//             newa.push(2);
//         }
//         newa.push(a[i]);
//     }
//     console.log("After insertion:", newa);
// }

// // 6. Separating values by Even and Odd Index
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77];
//     let even: number[] = [];
//     let odd: number[] = [];
    
//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 === 0) {
//             even.push(a[i]);
//         } else {
//             odd.push(a[i]);
//         }
//     }
//     console.log("Even indices:", even); // [ 1, 4, 6 ]
//     console.log("Odd indices:", odd); // [ 3, 5, 77 ]
// }

// // 7. Reverse Array Manually
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77];
//     let rev: number[] = [];
//     for (let i = a.length - 1; i >= 0; i--) {
//         rev.push(a[i]);
//     }
//     console.log("Reversed:", rev); // [ 77, 6, 5, 4, 3, 1 ]
// }

// // 8. Extracting Positive and Negative Numbers
// {
//     let a: number[] = [1, 3, 4, 5, 6, 77, -22, -34];
//     let posiv: number[] = [];
//     let negv: number[] = [];
    
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > 0) {
//             posiv.push(a[i]);
//         } else {
//             negv.push(a[i]);
//         }
//     }
//     console.log("Positives:", posiv);
//     console.log("Negatives:", negv);
// }

// // 9. Removing elements safely with splice (iterating backwards)
// {
//     let a: number[] = [-3, 5, -7, -3, 2, -1, 8, 10];
//     for (let i = a.length - 1; i >= 0; i--) {
//         if (a[i] < 0) {
//             a.splice(i, 1);
//         }
//     }
//     console.log("Negatives removed:", a); // [ 5, 2, 8, 10 ]
// }

// // 10. Array Slicing
// {
//     let a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//     let a1: number[] = a.slice(0, 3);
//     let a2: number[] = a.slice(3, 6);
//     let a3: number[] = a.slice(6, 9);

//     console.log("Slice 1:", a1); // [ 1, 2, 3 ]
//     console.log("Slice 2:", a2); // [ 4, 5, 6 ]
//     console.log("Slice 3:", a3); // [ 7, 8, 9 ]
// }

// // 11. Merging / Pushing one array into another
// {
//     let a: number[] = [1, 2, 3];
//     let b: number[] = [4, 5, 6];

//     for (let i = 0; i < b.length; i++) {
//         a.push(b[i]);
//     }
//     console.log("Merged Arrays:", a); // [1, 2, 3, 4, 5, 6]
// }

// // 12. Compare values at the same index
// {
//     let a: number[] = [1, 2, 3];
//     let b: number[] = [4, 2, 3];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === b[i]) {
//             console.log(`Index ${i}: equal`);
//         } else {
//             console.log(`Index ${i}: not equal`);
//         }
//     }
// }

// // 13. Array Union (No duplicates)
// {
//     let a: number[] = [1, 2, 3];
//     let b: number[] = [4, 2, 3];
//     let union: number[] = [];

//     for (let i = 0; i < a.length; i++) {
//         if (!union.includes(a[i])) {
//              union.push(a[i]);
//         }
//     } 
//     for (let i = 0; i < b.length; i++) {
//         if (!union.includes(b[i])) {
//              union.push(b[i]);
//         }
//     }
//     console.log("Union:", union); // [1, 2, 3, 4]
// }

// // 14. Array Difference (Items unique to either array)
// {
//     let a: number[] = [1, 2, 3];
//     let b: number[] = [4, 2, 3];
//     let diff: number[] = [];

//     for (let i = 0; i < a.length; i++) {
//         if (!b.includes(a[i])) {
//             diff.push(a[i]);
//         }
//     }
//     for (let i = 0; i < b.length; i++) {
//         if (!a.includes(b[i])) {
//             diff.push(b[i]);
//         }
//     }
//     console.log("Difference:", diff); // [1, 4]
// }

// // 15. Flattening a 2D Array
// {
//     // Defining this explicitly as a 2D array of numbers
//     let a: number[][] = [[1, 2], [3, 4], [5, 6]];
//     let b: number[] = [];
    
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             b.push(a[i][j]);
//         }
//     }
//     console.log("Flattened:", b); // [1, 2, 3, 4, 5, 6]
// }

// // 16. String Array Operations
// {
//     let a: string[] = ["apple", "banana", "cherry", "blueberry"];

//     // Find the longest string
//     function longstr(arr: string[]): string {
//         let longest: string = '';
//         for (let element of arr) {
//             if (element.length > longest.length) {
//                 longest = element;
//             }
//         }
//         return longest;
//     }
//     console.log("Longest string:", longstr(a)); // blueberry

//     // Concatenate all strings character by character
//     let result: string = '';
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             result += a[i][j];
//         }
//     }
//     console.log("Concatenated characters:", result); // applebananacherryblueberry

//     // Removing elements based on length safely
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].length <= 5) {
//             a.splice(i, 1); 
//             i--; 
//         }
//     }
//     console.log("Strings longer than 5 chars:", a);
// }