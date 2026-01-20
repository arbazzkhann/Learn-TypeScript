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


// ────────────────────────────────────────── Access Modifiers
// 1. public: Accessible from anywhere, This is the default if no modifier 
// 2. private: Accessible within the class
// 3. protected: Accessible within the class and its subclasses. 

class Car1 {
    public brand: string;
    private model: string;
    protected year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    //getter
    getModel(): string {
        return this.model
    }
}

class Car2 extends Car1 {
    year = 1990;
}

const myCar = new Car1("Mahindra", "XUV 700", 2026);

console.log(myCar.brand);
// console.log(myCar.model);   //gives error because private
console.log("Model by getter: ", myCar.getModel());   //getting model indirectly

// console.log(myCar.year);    //gives error because only can use with instance  //only use with inheritance
