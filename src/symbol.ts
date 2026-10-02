var sym = Symbol()
var sym1 = Symbol()
console.log(sym==sym1)//false

var a = Symbol("abc")
var b = Symbol("abc")
console.log(a==b)//false

const dId = Symbol('id')
const obj: { [dId]: number; name: string; id: number | undefined } = {
    [dId]: 100,
    name: "altumiya",
    id: undefined
}
console.log(obj) // { name: 'altumiya', [Symbol()]: 100 }
console.log(obj[dId]) // 100
console.log(obj.id) // undefined