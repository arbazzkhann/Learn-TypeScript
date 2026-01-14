// any
// We can set any datatype (not a good prectice)
let anyData: any = "hello";
console.log(anyData);  // hello  (string)

anyData = 33;
console.log(anyData);  // 33 (number)

anyData = {
    firstName: "Arbaz",
    lastName: "Khan"    
}
console.log(anyData);  // (Object)