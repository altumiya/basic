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