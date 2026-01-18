class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    printDetails(): void {
        console.log(`Your name is ${this.name} and you are ${this.age} years old.`);  
    }
}

const myName = new Person("Arbaz", 22);

myName.printDetails();
console.log(myName.name);
console.log(myName.age);