var data = {
    name: 'altu',
    age: 30,
    status: true
};
console.log(data);
data.name = "altaf";
console.log(data);
//if want to ADD new key value then
var data2 = {
    name: 'altu',
    age: 30,
    status: true,
    company: undefined
};
data2.company = "hcl";
data2.city = "mumbai";
console.log(data2);
//for nested object then same as above 
var data3 = {
    name: 'altu',
    age: 30,
    status: true,
    address: {
        house: "room 20",
        sector: 30,
        town: "wad"
    }
};
console.log(data3.address.house);
let seat2 = {
    side: "middle",
};
let seat3 = { side: "window", row: "20", };
seat2 = seat3; //duck typing concept in typescript means if object have same key value then it will assign to another object
console.log(seat2.side);
const updateseat = (update) => {
    console.log("update seat :with partial type", update);
};
updateseat({ price: 2000 });
updateseat({}); // can be pass as empty object because of partial type
export {};
//# sourceMappingURL=object.js.map