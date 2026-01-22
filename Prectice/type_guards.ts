// ────────────────────────────────────────── Type guards
/*
Type guards: 
    Expressions or functions that performs runtime checks to guarantee the type of a variable
    within a specific scope.

Without Type Guards:
    TypeScript often cannot determine the specific type of a variable,
    Leading to errors when accessing type-specific properties.

Type Guards Provides:
    - Enforcing Type Safety.
    - Preventing Runtime Errors.
    - Improving Code Intelligence.

//Three ways to use Type Guards:
    1. typeof
    2. instaceof 
    3. custom type guard fn.
*/



//1. typeof
function printId(id: string | number) {
    if(typeof id === 'string') {
        console.log("Id is a string: ", id);
    }
    else if(typeof id === 'number') {
        console.log("Id is a number: ", id);
    }
}



//2. instanceof
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function handlePet(pet: Dog | Cat) {
    if(pet instanceof Dog) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}

const myPet = new Cat();
handlePet(myPet);

const myPet2 = new Dog();
handlePet(myPet2);



//3. Custom type guards
interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}



// another example of "custom type guards"
function isString(value: any): value is string {
    return typeof value === 'string';
}

const myValue = isString('Madhav');
console.log(myValue);

const myValue2 = isString(22);
console.log(myValue2);