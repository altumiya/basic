// // 1. Age calculation
// {
//     let age: number = 37;
//     let days: number = 365;
//     let week: number = 52;
//     let year: number = 1;
    
//     // The original JS had `if(year = days)` which assigns the value instead of comparing.
//     // To make this TypeScript compliant, we assign it first, then check truthiness.
//     year = days; 
//     if (year) {
//         console.log("Age in days:", age * days);
//     } 
// }

// // 2. Finding the largest number in an array
// {
//     let a: number[] = [10, 25, 67, 45];
//     let largest: number = a[0];
    
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] > largest) {
//             largest = a[i];
//         }
//     }
//     console.log("Largest number:", largest);
// }

// // 3. Manual Sorting (Bubble Sort)
// {
//     let a: number[] = [3, 6, 2, 5, 1, 4];

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

// // 4. Sum with a break condition
// {
//     let sum: number = 0;
    
//     for (let i = 0; i <= 100; i++) {
//         if (sum + i > 2500) {
//             break;
//         } else {
//             sum += i;
//         }
//     }
//     console.log("Sum before exceeding 2500:", sum); // 2485
// }

// // 5. Sum of powers of 2
// {
//     let power: number = 1;
//     let sum: number = 0;
    
//     for (let i = 1; i <= 10; i++) {
//         console.log("Power:", power);
//         sum += power;
//         power *= 2;
//     }
//     console.log("Total sum:", sum);
// }