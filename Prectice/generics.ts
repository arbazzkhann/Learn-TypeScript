// // ────────────────────────────────────────── Generics
// // Generics in TypeScript are a tool for creating flexible, reusable components 
// // (functions, classes, interfaces, and types) that can work with a wide variety 
// // of data types while maintaining type safety.

// // Instead of writing a function that accepts only a number or only a string, 
// // you can write a generic function that accepts a type variable (commonly T, for "Type"), 
// // which acts as a placeholder for the actual type the user will specify or the compiler will infer. 

// function genericIdentity<T> (arg: T): T {
//     return arg;
// }

// console.log(genericIdentity<number>(22));
// console.log(genericIdentity<string>("Hello"));



// ────────────────────────────────────────── Generics with Interface
interface KeyPair <K, V> {
    key: K;
    value: V;
}

const myObj: KeyPair <string, boolean> = {
    key: "isLogin",
    value: false
}

console.log(myObj);
