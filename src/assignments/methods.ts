const mynums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums = mynums.filter((num) => num > 4);
console.log(nums); // Output: [5, 6, 7, 8, 9]

const mynum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnums: number[] = mynum.filter((num: number) => {
  return num > 4;
});

console.log(newnums);