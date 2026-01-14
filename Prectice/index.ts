// // Creating variables
// let a: number = 22;
// let b: string = "Arbaz";
// let c: boolean = true;
// let d: undefined = undefined;
// let e: null = null;
// let f: object = {
//     firstName: "Arbaz",
//     lastName: "Khan"
// }


// //object
// let myObj: {} = {
//     name: "Arbaz Khan",
//     city: "New Delhi"
// }
// console.log(myObj);

// let definedObj: {name: string, phone: number} = {
//     name: "Arbaz Khan",
//     phone: 999
// }
// console.log(definedObj);


// //Array
// const myArr: number[] = [22,3,4,53];  //only numbers array
// console.log(myArr);

// const myArr2: (number | string)[] = [22, 32, 4, 2, "Arbaz"];  //string and number (Union operator)
// console.log(myArr2);

// const myArr3: [number, string, boolean] = [22, "Car", false];  //predefined index's datatype


// "any" datatype
let anyValue: any = "Delhi";
console.log(anyValue);

anyValue = 100;
console.log(anyValue);

anyValue = {
    name: "City",
    city: "Delhi"
}
console.log(anyValue);