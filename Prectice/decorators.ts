//Decorators
/*
A special kind of declaration that can be attached to classes, methods, accessors, properties, 
or parameters to add annotations and a meta-programming syntax.

They are functions prefixed with the @ symbol that run when the decorated class or member is declared, 
allowing for modification or extension of behavior without changing the core implementation. 

Key Concepts:

Meta-programming: Decorators enable meta-programming, which is the ability 
to write code that writes or modifies other code at runtime.

Syntax: They use the form @expression, where the expression evaluates to a function 
that is called at runtime with information about the decorated declaration.

Enabling: To use decorators, you must enable the experimentalDecorators compiler option 
in your tsconfig.json file or via the command line.

*/


//class decorator
function sayHello(constructor: Function) {
    console.log("Hello this is sayHello function.");
}

@sayHello
class MyClass {
    constructor(public name: string) {}
}

const myClassInstance = new MyClass("Arbaz");
console.log(myClassInstance);