var data : {
    name:string,
    age:number,
    status:boolean
}={
    name:'altu',
    age:30,
    status:true
}
console.log(data)
data.name="altaf"
console.log(data)

//if want to ADD new key value then

var data2 : {
    [key:string]:string|number|boolean|undefined
}={
    name:'altu',
    age:30,
    status:true,
    company:undefined
}
data2.company="hcl"
data2.city="mumbai"
console.log(data2)

//for nested object then same as above 

var data3 : {
    name:string,
    age:number,
    status:boolean
    address: {
        house: string,
        sector: number,
        town: string
    }
}={
    name:'altu',
    age:30,
    status:true,
    address:{
        house:"room 20",
        sector:30,
        town:"wad"

    }
}

console.log(data3.address.house)

//duck typing concept in typescript
type seat ={
    side: string;
}
let seat2 : seat ={
    side:"middle",
}
let seat3 ={side:"window" , row:"20",}

seat2 = seat3 //duck typing concept in typescript means if object have same key value then it will assign to another object
console.log(seat2.side)

type seat5={
    name:string;
    price:number;
    isavailable:boolean;

}
const updateseat= (update: Partial<seat5>)=>{
    console.log("update seat :with partial type",update)
}
updateseat({price:2000})
updateseat({})  // can be pass as empty object because of partial type

type Department = "FE" | "BE";

interface Developer {
  first: string;
  last: string;
  dept: Department;
  commits: number;
}

const developers_array: Developer[] = [
  {
    first: "John",
    last: "Doe",
    dept: "FE",
    commits: 10,
  },
  {
    first: "Jane",
    last: "Doe",
    dept: "BE",
    commits: 15,
  },
  {
    first: "James",
    last: "bond",
    dept: "BE",
    commits: 8,
  },
];

// Record<Department, string[]> ensures the keys are strictly "FE" | "BE" and values are string arrays
const result = developers_array.reduce<Record<Department, string[]>>(
  (prev, curr) => {
    prev[curr.dept].push(curr.first);
    return prev;
  },
  { BE: [], FE: [] }
);

console.log(result); //{ BE: [ 'Jane', 'James' ], FE: [ 'John' ] }

interface User {
  id: string;
  name: string;
  age: number;
}

const users: User[] = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// Record<string, User> types the accumulator as an object with string keys and User values
const result = users.reduce<Record<string, User>>((prev, curr) => {
  prev[curr.id] = curr;
  return prev;
}, {});

console.log(result); 
// {
//   john: { id: 'john', name: 'John Smith', age: 20 },
//   ann: { id: 'ann', name: 'Ann Smith', age: 24 },
//   pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
// }

interface Person {
  name: string;
  age: number;
}

const john: Person = { name: "John", age: 25 };
const pete: Person = { name: "Pete", age: 30 };
const mary: Person = { name: "Mary", age: 29 };

const arr: Person[] = [john, pete, mary];

// TypeScript automatically infers 'sum' as number from the initial value 0
const averageAge: number =
  arr.length > 0
    ? arr.reduce((sum, person) => sum + person.age, 0) / arr.length
    : 0;

console.log(averageAge); // 28
