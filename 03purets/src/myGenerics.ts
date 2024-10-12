const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}
interface Bootle{
    brand: string,
    type: number
}

// here we used our own type of the class
// identityFour<Bootle>({})


// here i real time uses 

function getSearchProducts<T>(products: T[]): T {
    // here we are doing operations on the array and returning the one element in the output
    const myIndex = 3
    return products[myIndex]
}


const getMoreSearchProducts = <T,>(products: T[]): T => {
    // here we are using the arrow functions 
    // here we are doing operations on the array and returning the one element in the output
    const myIndex = 4
    return products[myIndex]
}

// my functions 
function myFunction<T, U >(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

console.log(myFunction(1,"1"))

// 
function myFunction1<T extends boolean, U extends number >(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

console.log(myFunction1(true,1))

// this is an real world example 
interface Database {
    connection: string,
    username: string,
    password: string
}

// free fill to make this type of functions 

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})


// another best example 
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}