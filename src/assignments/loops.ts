for (let i: number = 1; i <= 10; i++) {
  console.log(`outer value of : ${i}`);
  for (let j: number = 1; j <= 10; j++) {
    console.log(`${i} * ${j} =${i * j}`);
  }
}

for (let i: number = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("detected 5");
    continue; // skips the rest of the loop body for i = 5
  }
  console.log(`value of i is ${i}`);
}