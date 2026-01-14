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


// // "any" datatype
// let anyValue: any = "Delhi";
// console.log(anyValue);

// anyValue = 100;
// console.log(anyValue);

// anyValue = {
//     name: "City",
//     city: "Delhi"
// }
// console.log(anyValue);


// // tuple (like array but fixed index's datatype)
// // tuples are "typed array" with a fixed length and specific, ordered types for each element
// const tuple: [number, string, boolean, undefined] = [100, "Hello", true, undefined];
// const coordinates: [number, number, number] = [10, 20, 30];


// // enum 
// // set of named constants
// // if we not define key's value then it considered value as index value.
// enum colors {
//     // APP_NAME = "my_app_name",
//     red = "red",
//     green = "green",
//     yellow = "yellow",
//     orange = "orange",
// }

// const myHouseDetail = `My house color is ${colors.green}`;
// console.log(myHouseDetail);


// never
// never occur or never return
// function infiniteLoop(a: number): never {
//     while(true) {
//         console.log(a);
//         a++;
//     }    
// }
// infiniteLoop(10);


// // unknown
// // don't know the value's type
let data: unknown = 100;
data = 10; // OK
data = "hello"; // OK

// data.length; // Error: Object is of type 'unknown'

if (typeof data === 'string') {
  console.log(data.length); // OK: type is narrowed to string
}
