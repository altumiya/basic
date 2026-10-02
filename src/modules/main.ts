import type userinput from "./type";
import { Auth } from "../inheritence";



const userInput: userinput = {
    name: "John Doe",
    password: "secure123",
    email: "john.doe@example.com",
    age: 30
};
console.log(userInput.name); // Output: John Doe

class User extends Auth {}

var user1 = new User();
user1.login(userInput.name, userInput.password);

console.log(user1.login(userInput.name, userInput.password)); // Output: John Doe logged in successfully