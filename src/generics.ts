
function fruits<T>(name:T):T{
    return name
}
let onlyfruit=fruits("apple")
let onlyweight=fruits(100)
console.log(onlyfruit)
console.log(onlyweight)
//not to use any as it datatype is shows as any

function user24<T>(data:T):T{
    return data
}
let usercoll = user24(["altaf","altu"])

function user25<T>(data1: T[]): T {
    const first = data1[0];

    if (first === undefined) {
        throw new Error("Array is empty");
    }

    return first;
}

let usercolln = user25(["altaf", "altu"]);
console.log(usercoll); // whole array
console.log(usercolln); // altaf