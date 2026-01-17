/*
    1. Write a TypeScript function to calculate the factorial of a number with proper type annotations.
*/
function factorial(num: number): number {
    if(num === 0 || num === 1) return 1;
    return num * factorial(num - 1)  //recursion
}
console.log(factorial(5));  //120


/*
    2. Define a function that accepts a user object (with - name, age, and email) and returns a formatted string.
*/
interface User {
    name: string,
    age: number,
    email: string
}

function formattedObj(user: User): string {
    return `Hello ${user.name}, your are ${user.age} years old and you are logged-in using ${user.email} address`;
}
console.log(formattedObj({
    name: "Arbaz",
    age: 22,
    email: "arbaz@arbaz.com"
}));


/*
    3. Calculate total price: Write a TS function that calculates the total price of an array of product objects.
       Each product has a price and quantity.
*/
interface Product {
    price: number;
    quantity: number;
}

function totalPrice (products: Product[]): number {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}


//usage
const myPricesArray: Product[] = [
    {
        price: 299,
        quantity: 45
    },
    {
        price: 499,
        quantity: 50
    },
    {
        price: 210,
        quantity: 100
    }
]

console.log(totalPrice(myPricesArray));