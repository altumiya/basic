type personA={name:string}
type personB={age:number}
type personC = personA & personB

var dopA:personA={name:"altaf"}
var dopB:personB={age:32}

var dopC:personC={name:'altaf', age:32}
console.log(dopA)
console.log(dopB)
console.log(dopC)
