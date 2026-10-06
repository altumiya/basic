let myname:string = "Altaf Husssain"
myname = "Altumiya"
console.log(myname)

let order: number = 5
console.log(order)

// always define types with lowercase letters for primitive types like string, number, boolean, etc. and uppercase letters for complex types like Array, Object, etc.
// uppercase letters are used for classes and interfaces in typescript which may causes for slower performance of the code. So, it is always recommended to use lowercase letters for primitive types and uppercase letters for complex types.
// uppercase letters are object wrappers for primitive types which are used to create objects of primitive types. For example, String is an object wrapper for string, Number is an object wrapper for number, Boolean is an object wrapper for boolean, etc.

// forcefull typer assertion is used to tell the compiler that we are sure about the type of the variable and we want to override the type inference of the compiler. It is done by using the 'as' keyword. For example, if we have a variable of type 'any' and we want to tell the compiler that it is of type 'string', we can use forcefull type assertion like this:

let response: any = "42"
let response2: number = (response as string).length // forcefull type assertion so suggestions can come for string methods and properties. It is used to tell the compiler that we are sure about the type of the variable and we want to override the type inference of the compiler. It is done by using the 'as' keyword. For example, if we have a variable of type 'any' and we want to tell the compiler that it is of type 'string', we can use forcefull type assertion like this:

type book={
    name:string,
}
let bookstring2='{"name":"book1"}'
let bookobj =JSON.parse(bookstring2) as book // forcefull type assertion so suggestions can come for book methods and properties. It is used to tell the compiler that we are sure about the type of the variable and we want to override the type inference of the compiler. It is done by using the 'as' keyword. For example, if we have a variable of type 'any' and we want to tell the compiler that it is of type 'book', we can use forcefull type assertion like this:
console.log(bookobj.name)