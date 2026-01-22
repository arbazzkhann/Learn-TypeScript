// It Allows to specify that a "variable" or "parameter" must hold an "exact", "specific value", 
// "rather then string or number".

// They are a way of creating a more concrete, "unchangeable sub-type of a primitive type",
// which enhances type safety and make our "code more predictable"


//String literal
type orderStatus = "pending" | "processing" | "delivered" | "cancelled";

let myOrder: orderStatus = "processing";

let answer: "yes" | "no";
answer = "no";


//Number literal
let count: 0 | 1| 2;
count = 1;


//Boolean literal
type isVisible = true | false;
const isVisileOrNot: isVisible = true;


//Mixed literal
type mixedLiteral = (0 | "Hello" | {name: string, age: number});

const myValue1: mixedLiteral = 0;
const myValue2: mixedLiteral = "Hello";
const myValue3: mixedLiteral = {name: "Arbaz", age: 22};