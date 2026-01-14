//variables
let name: string = "Arbaz Khan";
let age: number = 22;


//function
function addition(a: number, b: number): number {
    return a+b;
}
console.log(addition(15, 534));


//object
const myObj: object = {
    name,
    age
}
console.log(myObj)

const myObj2: {name: string, age: number} = {
    name: "Arbaz Khan",
    age: 22
}
console.log(myObj2);


//array
const myArr = [] = [22, 44, 53, 23]
console.log(myArr);