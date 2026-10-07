type userdatatype={
    name:string,
    id:number // impt keys which will be mandatory
   [key:string]:number|string //flexible keys
}

var userdata4: userdatatype={
    mobile:987766543210,
    id:102,
    marks:57,
    age:32,
    sem:3,
    name:"altaf"
}
userdata4.city = "Mumbai";
userdata4.marks = 65;

console.log("Added City:", userdata4.city);
console.log("Updated Marks:", userdata4.marks);
console.table(userdata4);

type userdatatype2={
    name:string,
    id:number // impt keys which will be mandatory
   readonly [key:string]:number|string //flexible keys
}

var userdata5: userdatatype2={
    mobile:987766543210,
    id:102,
    marks:57,
    age:32,
    sem:3,
    name:"altaf"
}
userdata5.city="noida"  // error due to readonly

console.log("User name:", userdata5.name);
console.log("User ID:", userdata5.id);
console.table(userdata5);