class Product{
    name:string;
    price:number;
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

}
var product=new Product("soap", 100, 101)
product.addToCart()
console.log(product.buyProduct())

var product=new Product("soil", 120, 102)
product.addToCart()
console.log(product.buyProduct())