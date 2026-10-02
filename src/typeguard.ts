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
checkdatatype(32)
checkdatatype('altaf')


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
checkdetails(p1)
checkdetails(o1)