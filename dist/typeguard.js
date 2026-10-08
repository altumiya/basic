let userdata20 = "altaf";
userdata20 = 32;
if (typeof userdata20 == "number") {
    console.log("its a number type");
}
else if (typeof userdata20 == "string") {
    console.log("its a string type");
}
else {
    console.log("its a boolean type");
}
function checkdatatype(data) {
    if (typeof data == "number") {
        console.log("its a number");
    }
    else {
        console.log("its a string");
    }
}
checkdatatype(32); //its a number
checkdatatype('altaf'); //its a string
class product20 {
}
var p1 = new product20();
class order20 {
}
var o1 = new order20();
function checkdetails(data) {
    if (data instanceof order20) {
        console.log("its an order");
    }
    else {
        console.log("its a product");
    }
}
checkdetails(p1); //its a product
checkdetails(o1); //its an order
var data22;
data22 = {
    name: "altaf",
    city: "mumbai"
};
var data23 = {
    id: 101,
    email: "altaf@g.com"
};
function checkuserinfo(data) {
    if (data.name !== undefined) {
        console.log('its a userdata');
    }
    else {
        console.log("its userinfo");
    }
}
checkuserinfo(data22); //userdata
checkuserinfo(data23); //userinfo
export {};
//# sourceMappingURL=typeguard.js.map