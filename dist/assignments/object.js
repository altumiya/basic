const user1 = {
    name: "Altaf",
    age: 30,
    city: "Mumbai"
};
console.log(user1);
const user2 = new Object();
user2.name = "Altaf";
user2.age = 30;
user2.city = "Mumbai";
console.log(user2);
// another way 
const userRecord = {};
userRecord.name = "Altaf";
userRecord.age = 30;
userRecord.city = "Mumbai";
console.log(userRecord);
const user4 = {
    name: "Altaf",
    age: 30
};
// Object.freeze returns Readonly<FreezableUser>
const frozenUser = Object.freeze(user4);
// ❌ TypeScript Compile-Time Errors:
// frozenUser.name = "Ahmed";  // Error: Cannot assign to 'name' because it is a read-only property.
// frozenUser.city = "Mumbai";  // Error: Cannot assign to 'city' because it is a read-only property.
// delete frozenUser.age;       // Error: The operand of a 'delete' operator cannot be a read-only property.
console.log(frozenUser);
const user5 = {
    name: "Altaf"
};
user5.name = "Ahmed";
user5.city = "Mumbai";
console.log(user5);
// Output: { name: 'Ahmed', city: 'Mumbai' }
// --- 3. Check if an Object is Frozen ---
const user3 = {
    name: "Altaf"
};
Object.freeze(user3);
const isFrozen = Object.isFrozen(user3);
console.log(isFrozen);
const original = {
    name: "Altaf",
    details: {
        city: "Mumbai",
        skills: ["JS", "TS"]
    }
};
// 1. SHALLOW COPY
// Shallow copy shares the nested 'details' reference
const shallowCopy = { ...original };
shallowCopy.name = "Ahmed";
shallowCopy.details.city = "Delhi";
console.log(original.details.city); // "Delhi"
console.log(shallowCopy.details.city); // "Delhi"
// Reset
original.details.city = "Mumbai";
// 2. DEEP COPY
// structuredClone preserves types and creates fully independent references
const deepCopy = structuredClone(original);
deepCopy.name = "Zaid";
deepCopy.details.city = "Pune";
deepCopy.details.skills.push("Python");
console.log(original.details);
// Output: { city: 'Mumbai', skills: ['JS', 'TS'] }
console.log(deepCopy.details);
// Or use generic Record types:
// const obj1: Record<number, string> = { 1: "a", 2: "b" };
// const obj2: Record<number, string> = { 3: "c", 4: "d" };
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const objAssign = Object.assign({}, obj1, obj2);
console.log(objAssign);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const objSpread = { ...obj1, ...obj2 };
console.log(objSpread);
// 1. Create an object
const userProfile = {
    name: "Alice",
    age: 28,
    role: "Software Developer",
    isActive: true
};
// 2. Get keys using Object.keys()
// By default, TypeScript types keysArray as string[]
const keysArray = Object.keys(userProfile);
// 3. Console log the array of keys
console.log(keysArray);
// Output: [ 'name', 'age', 'role', 'isActive' ]
// --- Logging Keys One by One ---
const userProfile1 = {
    name: "Alice",
    age: 28,
    role: "Software Developer"
};
Object.keys(userProfile1).forEach((key) => {
    console.log("Key:", key);
});
const user = {
    name: "John",
    age: 32,
    city: "Mumbai"
};
// Inferred as: name: string, age: number, city: string
const { name, age, city } = user;
console.log(name); // Output: "John"
console.log(age); // Output: 32
console.log(city); // Output: "Mumbai"
const laptop = {
    brand: "Dell",
    model: "XPS 15"
};
// 'brand' is renamed to 'manufacturer'
// 'ram' defaults to "16GB"
const { brand: manufacturer, model, ram = "16GB" } = laptop;
console.log(manufacturer); // Output: "Dell"
console.log(ram); // Output: "16GB"
export {};
//# sourceMappingURL=object.js.map