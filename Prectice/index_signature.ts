// Index signature:

// It is a way to "define types for objects" with "dynamic property names" (keys) 
// when the "exact names are not known", 
// but the type of the keys and values follow a consistent pattern.


// 1:
interface StringArray {
    [index: number]: string;
}

let myArr: StringArray = ["Arbaz", "Khan"];
console.log(myArr[1]);


// 2:
interface Fruits {
    [key: string]: string;
}

let myFruits: Fruits = {
    Apple: "Red color",
    Banana: "Yellow color",
    Guava: "Green color"
}
console.log(myFruits["Banana"]);