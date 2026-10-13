// Define the shape with an interface or type alias
interface User {
  name: string;
  age: number;
  city: string;
}

const user: User = {
  name: "Altaf",
  age: 30,
  city: "Mumbai"
};

console.log(user);

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

const user13: Record<string, string | number> ={};

user13.name = "Altaf";
user13.age = 30;
user13.city = "Mumbai";

console.log(user13);