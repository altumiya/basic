for (let i: number = 1; i <= 10; i++) {
  console.log(`outer value of : ${i}`);
  for (let j: number = 1; j <= 10; j++) {
    console.log(`${i} * ${j} =${i * j}`);
  }
}