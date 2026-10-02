let userdata20:number|string|boolean="altaf"
userdata20=32
if(typeof userdata20 =="number"){
    console.log("its a number type")
}
else if(typeof userdata20 =="string"){
  console.log("its a string type")
}
else{
    console.log("its a boolean type")
}

function checkdatatype(data:string|number){
   if(typeof data =="number"){
    console.log("its a number")
   }
   else{
    console.log("its a string")
   }
}
checkdatatype(32) //its a number
checkdatatype('altaf') //its a string


class product20{

}
var p1 = new product20()
class order20{

}
var o1 = new order20()

function checkdetails(data : order20|product20){
    if(data instanceof order20){
    console.log("its an order")
}
else{
    console.log("its a product")
}
}
checkdetails(p1) //its a product
checkdetails(o1) //its an order

interface userdata{
    name:string;
    city:string
}
interface userinfo{
    id:number;
    email:string
}
var data22 : userdata | userinfo
data22={
    name:"altaf",
    city:"mumbai"
}
var data23  : userdata | userinfo={
    id:101,
    email:"altaf@g.com"
}
function checkuserinfo(data: userdata|userinfo){
  if((data as userdata).name!==undefined){
  console.log('its a userdata');
}
else{
    console.log("its userinfo")
}
}
checkuserinfo(data22) //userdata
checkuserinfo(data23) //userinfo