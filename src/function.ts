function fruits():string{
    return "apple"
}
function simple()// if datatype is written here then refer above eg.
{
    //this is called void nothing returns else when return anything it shows datatype
}

function complex():number|string{
    let data = 10
    let name="altaf"
    let type= "age"

    if(type=='age'){
    return data
    }
    else{
        return name
    }
}

function loop():never{
    while(true){
        console.log("loop") //endless loop
    }
}

function simple2():never{  //A function returning 'never' cannot have a reachable end point.
    console.log(simple2)
}
function error(): never {  //It never reaches the end, so never is correct
    throw new Error("Something went wrong");
}