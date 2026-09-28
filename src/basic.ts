function greet(name: string): string {
    return `Hello, ${name}!`;
}
const greeting: string = greet("Alice");
console.log(greeting);
console.log(greet("World"));