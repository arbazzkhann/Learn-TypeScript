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
// let data: unknown = 100;
// data = 10; // OK
// data = "hello"; // OK

// // data.length; // Error: Object is of type 'unknown'

// if (typeof data === 'string') {
//   console.log(data.length); // OK: type is narrowed to string
// }


// // void
// // nothing returns
// function hello(): void {
//   console.log("Hello world!");

//   // return "Hello world!"  // gives error
// }
// hello();


// // type inference
// let userName = "arbaz"   // typescript infers (assign) the type as string automatically

// // type assertion
// let someValue: any = "Hello world";
// let strLength: number = (someValue as string).length;   // assigning type with "as" keyword
// console.log(typeof strLength);   // number



// // Union ( | )
// // allows a value to be "several different types"

// let unionType: (string | number | boolean);
// unionType = 22;
// unionType = true;


// // type narrowing
// // The process f "refining a variable's type" from a "general", "broader type" (like Union type) 
// // to a "more specific type" with a certain block or context, using runtime checks.
// let id: number | string | boolean;

// function achieveNarrowing(id: number | string) {
//     if((typeof id) === 'number') {
//         console.log("Id is a number: ", id);
//     }
//     else {
//         console.log("Id is string: ", id.toUpperCase());
//     }
// }
// achieveNarrowing("xyz");
// achieveNarrowing(24);
// // achieveNarrowing(true); //gives error



// Interfaces
// Used to "define shapes or structure of an object".
interface Person {
    name: string,
    age: number,
    greet(): void
}

const newPerson: Person = {
    name: "Arbaz Khan",
    age: 22,
    greet: function() {
        console.log("Hello");
    }
}

newPerson.greet();


// Interface with function
interface MathFn {
    (a: number, b: number): number;
}

const addition: MathFn = function (a, b) {
    return a + b;
}
console.log(addition(21, 22));