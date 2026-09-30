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
    address:{}  //can declare datatype in{}
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