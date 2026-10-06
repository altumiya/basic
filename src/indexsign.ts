type userdatatype={
    name:string,
    id:number // impt keys which will be mandatory
   [key:string]:number|string //flexible keys
}

var userdata4={
    mobile:987766543210,
    id:102,
    marks:57,
    age:32,
    sem:3,
    name:"altaf"
}

type userdatatype2={
    name:string,
    id:number // impt keys which will be mandatory
   readonly [key:string]:number|string //flexible keys
}

var userdata5={
    mobile:987766543210,
    id:102,
    marks:57,
    age:32,
    sem:3,
    name:"altaf"
}
userdata5.city="noida"  // error due to readonly