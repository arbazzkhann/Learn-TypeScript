# TypeScript
TypeScript is a **programming language** that **builds on JavaScript** by adding something called **types**.

* JavaScript is like a flexible language where you can write anything, but it doesn’t check for mistakes until the code runs.

* TypeScript **helps you catch errors before running your code** by **checking the types** (like checking if a variable should be a number or a string).

* It’s **made by Microsoft** and is especially **helpful in large projects** where **keeping track of data types can prevent bugs**.

* TypeScript = JavaScript + Type Checking

### Example:
JavaScript:
```js
let age = 25;
age = "twenty-five";  // No error, but this may cause bugs later
```

TypeScript:
```ts
let age: number = 25;
age = "twenty-five";  // ❌ Error: Type 'string' is not assignable to type 'number'
```


## VS Code Extentions for TypeScript
* ESLint
* JavaScript and TypeScript Nightly
* Live Server
* Pretty TypeScript Errors