// class Person {
//     name: string
//     age: number

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age
//     }

//     printDetails(): void {
//         console.log(`Your name is ${this.name} and you are ${this.age} years old.`);  
//     }
// }

// const myName = new Person("Arbaz", 22);

// myName.printDetails();
// console.log(myName.name);
// console.log(myName.age);


// // ────────────────────────────────────────── Access Modifiers
// // 1. public: Accessible from anywhere, This is the default if no modifier 
// // 2. private: Accessible within the class
// // 3. protected: Accessible within the class and its subclasses. 

// class Car1 {
//     public brand: string;
//     private model: string;
//     protected year: number;

//     constructor(brand: string, model: string, year: number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     //getter
//     getModel(): string {
//         return this.model
//     }
// }

// class Car2 extends Car1 {
//     year = 1990;
// }

// const myCar = new Car1("Mahindra", "XUV 700", 2026);

// console.log(myCar.brand);
// // console.log(myCar.model);   //gives error because private
// console.log("Model by getter: ", myCar.getModel());   //getting model indirectly

// // console.log(myCar.year);    //gives error because only can use with instance  //only use with inheritance



// // ────────────────────────────────────────── Inheritance
// // Access properties and methods from parent class
// // with "extends" keyword

// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }   

//     makeSound(): void {
//         console.log("A generic sound");
//     }
// }

// // Inherit class
// class Dog extends Animal {

//     //method overloading
//     makeSound(): void {
//         console.log("bark bark!");
//     } 
// }

// const myDog = new Dog("Tommy");

// console.log(myDog.name);
// myDog.makeSound();



// ────────────────────────────────────────── Abstract Class
// It serves as a blueprint for other classes to inherit from. (it is a base class)
// We cannot creates its instance directly using the "new" keyword.
// It contain methods and properties marked with the "abstract" keyword that have no implementation in the base class.

abstract class Shape {
    abstract getArea(): number;  //abstract method must be implemented by child classes

    printArea(): void {
        console.log("The area is: ", this.getArea());
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();   //constructor of parent class 
    }

    getArea(): number {
        return this.width * this.height;
    }
}

// const myRec = new Shape();  //gives error beacuse we cannot create instance of abstract class
const myNewRec = new Rectangle(5, 10);
myNewRec.printArea();
