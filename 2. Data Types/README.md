# Datatypes in TypeScript

## 🔹 Primitive Data Types:
These hold single values and are built-in to the language.

1. Number:
    * Used to store numbers like 10, 3.14, etc.
```ts
let age: number = 25;
```

2. String:
    * Used to store text or characters.
```ts
let name: string = "Arbaz";
```

3. Boolean:
    * Stores true or false.
```ts
let isOnline: boolean = true;
```

4. Null:
    * Represents an empty or no value.
```ts
let value: null = null;
```

5. Undefined:
    * A variable that is declared but not given a value.
```ts
let data: undefined;
```

6. Void:
    * Used for functions that do not return anything.
```ts
function greet(): void { console.log("Hello"); }
```

7. Symbol (not listed, but also primitive):
For functions that never return (like infinite loops or errors).
```ts
function error(): never {
  throw new Error("Fail!");
}
```

8. BigInt :
    * optional for large numbers.
```ts
let bigNumber: bigint = 123456789n;
```

9. Never:
    * For **functions** that **never return** (like **infinite loops** or **errors**).
```ts
function error(): never {
  throw new Error("Fail!");
}
```

10. Void:
    * Used for **functions** that **do not return** anything.
```ts
function greet(): void { console.log("Hello"); }
```


## 🔹 Non-Primitive Data Types (Complex)
These are complex types and can hold multiple values or structures.

1. Array:
    * A list of values of the same type.
```ts
let fruits: string[] = ["apple", "banana"];
```

2. Object:
    * key-value pairs.
```ts
let user: object = { name: "Arbaz", age: 25 };
```

3. Tuple:
    * An array with fixed length and types.
```ts
let person: [string, number] = ["Arbaz", 25];
```

4. Enum:
    * A group of named constants (like options).
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

5. Any:
    * Accepts any type of value.
    * Should be used carefully, as it turns off type checking.
```ts
let value: any = 5;
value = "hello";  // valid
```

6. Unknown:
    * Similar to **any**, but **safer**.
    * You must check the type before using it.
```ts
let input: unknown = "data";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

7. Function:
    * A block of code that does a task and can return a value.
```ts
function add(a: number, b: number): number {
  return a + b;
}
```