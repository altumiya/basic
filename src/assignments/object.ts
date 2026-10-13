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