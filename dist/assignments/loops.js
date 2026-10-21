for (let i = 1; i <= 10; i++) {
    console.log(`outer value of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} =${i * j}`);
    }
}
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("detected 5");
        continue; // skips the rest of the loop body for i = 5
    }
    console.log(`value of i is ${i}`);
}
// while loop example
let index = 0;
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index += 2;
}
//do while loop example
let score = 1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);
export {};
//# sourceMappingURL=loops.js.map