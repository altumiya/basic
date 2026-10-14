// Define the shape with an interface or type alias
interface User {
  name: string;
  age: number;
  city: string;
}

const user1: User = {
  name: "Altaf",
  age: 30,
  city: "Mumbai"
};

console.log(user1);

//2. Singleton Object

//A singleton object is created using the Object constructor.

interface User2 {
  name?: string;
  age?: number;
  city?: string;
}

const user2: User2 = new Object();

user2.name = "Altaf";
user2.age = 30;
user2.city = "Mumbai";

console.log(user2);

// another way 

const userRecord: Record<string, string | number> = {};

userRecord.name = "Altaf";
userRecord.age = 30;
userRecord.city = "Mumbai";

console.log(userRecord);

//3. Object.freeze() method is used to freeze an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.

// --- 1. Frozen Object Example ---
interface FreezableUser {
  name: string;
  age?: number;
  city?: string;
}

const user4: FreezableUser = {
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
// Output: { name: 'Altaf', age: 30 }


// --- 2. Without Object.freeze() ---
interface MutableUser {
  name: string;
  city?: string;
}

const user5: MutableUser = {
  name: "Altaf"
};

user5.name = "Ahmed";
user5.city = "Mumbai";

console.log(user5);
// Output: { name: 'Ahmed', city: 'Mumbai' }


// --- 3. Check if an Object is Frozen ---
const user3: { name: string } = {
  name: "Altaf"
};

Object.freeze(user3);

const isFrozen: boolean = Object.isFrozen(user3);
console.log(isFrozen);
// Output: true

interface UserProfile {
  name: string;
  details: {
    city: string;
    skills: string[];
  };
}

const original: UserProfile = {
  name: "Altaf",
  details: {
    city: "Mumbai",
    skills: ["JS", "TS"]
  }
};


// 1. SHALLOW COPY

// Shallow copy shares the nested 'details' reference
const shallowCopy: UserProfile = { ...original };

shallowCopy.name = "Ahmed";
shallowCopy.details.city = "Delhi";

console.log(original.details.city);   // "Delhi"
console.log(shallowCopy.details.city); // "Delhi"

// Reset
original.details.city = "Mumbai";

// 2. DEEP COPY

// structuredClone preserves types and creates fully independent references
const deepCopy: UserProfile = structuredClone(original);

deepCopy.name = "Zaid";
deepCopy.details.city = "Pune";
deepCopy.details.skills.push("Python");

console.log(original.details);
// Output: { city: 'Mumbai', skills: ['JS', 'TS'] }

console.log(deepCopy.details);
// Output: { city: 'Pune', skills: ['JS', 'TS', 'Python'] }

/*
Before structuredClone(), developers relied on two imperfect approaches for deep copying:
1. Spread Operator ({ ...obj }) / Object.assign(): Only creates a shallow copy. Nested objects and arrays still point to the same references in memory.
2. JSON.parse(JSON.stringify(obj)): A hacky deep copy that has major limitations:
  - Turns Date instances into plain ISO strings.
  - Completely deletes undefined, Symbol, and Infinity/NaN (which turn into null).
  - Silently drops Map, Set, RegExp, ArrayBuffer, and Blob.
  - Crashes with a fatal error if the object contains circular references (TypeError: Converting circular structure to JSON).
structuredClone() eliminates all of those issues natively.
*/

// Define explicit types using numeric keys
interface Obj1 {
  1: string;
  2: string;
}

interface Obj2 {
  3: string;
  4: string;
}

// Or use generic Record types:
// const obj1: Record<number, string> = { 1: "a", 2: "b" };
// const obj2: Record<number, string> = { 3: "c", 4: "d" };

const obj1: Obj1 = { 1: "a", 2: "b" };
const obj2: Obj2 = { 3: "c", 4: "d" };

const objAssign: Obj1 & Obj2 = Object.assign({}, obj1, obj2);
console.log(objAssign);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const objSpread: Obj1 & Obj2 = { ...obj1, ...obj2 };
console.log(objSpread);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }