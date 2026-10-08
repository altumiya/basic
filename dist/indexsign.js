var userdata4 = {
    mobile: 987766543210,
    id: 102,
    marks: 57,
    age: 32,
    sem: 3,
    name: "altaf"
};
userdata4.city = "Mumbai";
userdata4.marks = 65;
console.log("Added City:", userdata4.city);
console.log("Updated Marks:", userdata4.marks);
console.table(userdata4);
var userdata5 = {
    mobile: 987766543210,
    id: 102,
    marks: 57,
    age: 32,
    sem: 3,
    name: "altaf"
};
userdata5.city = "noida"; // error due to readonly
console.log("User name:", userdata5.name);
console.log("User ID:", userdata5.id);
console.table(userdata5);
export {};
//# sourceMappingURL=indexsign.js.map