// // any
// // We can set any datatype (not a good prectice)
// let anyData: any = "hello";
// console.log(anyData);  // hello  (string)

// anyData = 33;
// console.log(anyData);  // 33 (number)

// anyData = {
//     firstName: "Arbaz",
//     lastName: "Khan"    
// }
// console.log(anyData);  // (Object)


// let obj: {name: string, age: number, phone: any} = {
//     name: "Arbaz",
//     age: 22,
//     phone: undefined
// }

// obj = {...obj, phone: 1000};

// console.log(obj)



let myArr: (number | string)[] = [22, 3,33,421,"Arbaz"] 
let myArr2: [number, string] = [22, "Arbaz"]
console.log(myArr);
console.log(myArr2);