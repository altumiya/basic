class Product{
    private name:string; // to own class
    protected price:number; // can be access to child classes and" #" can aslo be used for private and protected 
    pId:number;
    isCart:boolean = false;
    isOrdered:boolean = false;
    constructor( name:string,price:number,pId:number){
        this.name=name
        this.price=price
        this.pId=pId
    }
    addToCart():void{
        this.isCart=true
    }
    buyProduct():string{
        if(this.isCart){
        return `product ${this.name} is ordered at ${this.price} price`
        }
        else{
            return "no product is in cart"
        }
    }
     getprice(){
       return this.price
     }
}

class Order extends Product{
    constructor(){
        super("laptop",10000 , 104)
    }
}
//var product=new Product("soap", 100, 101)
//product.addToCart()
//console.log(product.buyProduct())

//var product=new Product("soil", 120, 102)
//product.addToCart()

var order = new Order();
console.log(order.getprice())
//console.log(product.buyProduct())
//console.log(product.name) //Property 'name' is private and only accessible within class 'Product'.

// reveal example in modifiers tuples

class seat{
    public name :string = "side upper"
    private secreatseat = "side middle"
    reveal(){
        return this.secreatseat
    }
}
let s = new seat()
console.log("Revealed seat:", s.reveal()); 