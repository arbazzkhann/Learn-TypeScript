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


/*
    4. Define a union type for a vehicle that can either be a Car or Bike with different properties.
      Write a function to log details based on the vehicle type.
*/

type CarData = {
    type: "Car",
    brand: string,
    model: string,
    year: number
}

type BikeData = {
    type: "Bike",
    brand: string,
    cc: number
}

type VehicleType = BikeData | CarData;

function getVehicleDetails(vehicle: VehicleType) {
    if(vehicle.type === "Car") {
        console.log(`Car: ${vehicle.brand}, ${vehicle.model}, Year: ${vehicle.year}`);
    }
    else if(vehicle.type === "Bike") {
        console.log(`Bike: ${vehicle.brand}, CC: ${vehicle.cc}`);
    }
}


// Prectice data:
let myCar: VehicleType = {
    type: "Car",
    brand: "Lamborghini",
    model: "SVJ",
    year: 2025
}

let myBike: VehicleType = {
    type: "Bike",
    brand: "Kawasaki",
    cc: 900
}

// Usage
getVehicleDetails(myCar);
getVehicleDetails(myBike);