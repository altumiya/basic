// // 1. Manual Sorting (Bubble Sort)
// {
//     let a: number[] = [1, 4, 3, 2, 6, 5];
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] > a[j]) {
//                 let sort: number = a[i];
//                 a[i] = a[j];
//                 a[j] = sort;
//             }
//         }
//     }
//     console.log("Sorted array:", a);
// }

// // 2. Finding Duplicates
// {
//     let a: number[] = [1, 2, 3, 4, 4, 5, 5, 6];
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 console.log("Duplicate found:", a[i]);
//             }
//         }
//     }
// }

// // 3. Simple Interest & Discount
// {
//     let amount: number = 2000;
//     let time: number = 2;
//     let roi: number = 10;
//     let si: number = (amount * time * roi) / 100;
//     let discount: number = 10;

//     if (discount >= 0 && discount <= 100) {
//         console.log("Discount value:", (si * discount) / 100);
//     } else {
//         console.log("no discount");
//     }
// }

// // 4. Palindrome Check
// {
//     let a: string = "Madam";
//     let rev: string = a.split('').reverse().join("").toLowerCase();
    
//     if (rev === a.toLowerCase()) {
//         console.log("palindrome");
//     } else {
//         console.log("not pal");
//     }
// }

// // 5. Factorial
// {
//     let a: number = 5;
//     let fact: number = 1;
//     for (let i = 1; i <= a; i++) {
//         fact = fact * i;
//     }
//     console.log("Factorial:", fact);
// }

// // 6. Fibonacci Sequence
// {
//     let a: number = 10;
//     let b: number = 0;
//     let c: number = 1;
//     for (let i = 0; i < a; i++) {
//         console.log("Fibonacci:", b);
//         let d: number = b + c;
//         b = c;
//         c = d;
//     }
// }

// // 7. Multiplication Table for a specific number
// {
//     let n: number = 5;
//     for (let i = 1; i <= 10; i++) {
//         console.log(n, "x", i, "=", n * i);
//     }
// }

// // 8. Sum of 1 to 100
// {
//     let sum: number = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     console.log("Sum to 100:", sum);
// }

// // 9. Every 3rd Element (Multiples of 3)
// {
//     let ev3rd: number[] = [];
//     for (let i = 0; i <= 30; i++) {
//         if (i % 3 === 0) {
//             ev3rd.push(i);
//         }
//     }
//     console.log("Multiples of 3:", ev3rd);
// }

// // 10. Squares from 1 to 10
// {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i, "*", i, "=", i * i);
//     }
// }

// // 11. Powers of 2
// {
//     let power: number = 1;
//     for (let i = 1; i <= 10; i++) {
//         power = power * 2;
//         console.log("Power of 2:", power);
//     }
// }

// // 12. FizzBuzz
// {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// // 13. Nested Loops (Multiplication Tables 1 to 5)
// {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= 10; j++) {
//             console.log(i, '*', j, "=", i * j);
//         }
//     }
// }

// // 14. Sum of Odd Numbers up to 50
// {
//     let sum: number = 0;
//     for (let i = 0; i <= 50; i++) {
//         if (i % 2 === 1) {
//             sum += i;
//         }
//     }
//     console.log("Sum of odd numbers up to 50:", sum);
// }

// // 15. Count Vowels in a String
// {
//     let str: string = "AEIOUSTICAEIOUS";
//     let count: number = 0;
    
//     for (let char of str) {
//         if ("aeiou".includes(char.toLowerCase())) {
//             console.log("Found vowel:", char);
//             count++;
//         }
//     }
//     console.log("Total vowels:", count);
// }

// // 16. Second to Last Element in an Array
// {
//     let a: number[] = [10, 20, 30, 40, 50];
//     // Gets the element at the second to last index
//     console.log("Second to last element:", a[a.length - 2]);
// }

// // 17. Count Occurrences of Target Characters
// {
//     let a: string[] = ["apple", "banana", "cherry", "blueberry"];
//     let count: number = 0;
//     let target: string[] = ["a ", "b"]; 
    
//     for (let char of a) {
//         for (let word of char) {
//             if (target.includes(word)) {
//                 count++;
//             }
//         }
//     }
//     console.log("Target matches found:", count);
// }