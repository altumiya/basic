function totalprice(item:number, price:number, text?:string){
    var price= 100;
    if(text){
        console.log(text + price * item)
    }
    else{
        console.log(price*item)
    }
}
totalprice(20, 100, "total price is")

function simple(data:any){
    console.log(data)
}
simple(100)
simple("altaf")
simple(true)