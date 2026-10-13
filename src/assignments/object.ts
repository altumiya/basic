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