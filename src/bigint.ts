var bignumber1=9001234566778756
var a=1
var b=2
console.log(bignumber1+a) //9001234566778757
console.log(bignumber1+b) //9001234566778757

//so we can use bigint to store large numbers and perform arithmetic operations on them without losing precision.

var bignumber:bigint=9001234566778756n
var x:bigint=1n
var y:bigint=2n
console.log(bignumber+x)
console.log(bignumber+y)