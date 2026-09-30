type personA={name:string}
type personB={age:number}
type personC = personA & personB

var dopA:personA={name:"altaf"}
var dopB:personB={age:32}

var dopC:personC={name:'altaf', age:32}
console.log(dopA)
console.log(dopB)
console.log(dopC)


type datatype={name:string, age:number}
type a ={name:string}
type b = {age:number}
type c = a | b; 

var empdata1:datatype={
    name:"altu",
    age:30
}
var empdata2:datatype={
    name:"altu",
    age:33
}
console.log(empdata1)
console.log(empdata2)