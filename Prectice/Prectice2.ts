// /*
// 1. Create a Bank Account Class: Write a BankAccount class with the following properties:

//     accountNumber: string
//     balance: number (private)
//     The class should have methods: 
//         * deposit(amount: number): void (to add to balance)
//         * withdraw(amount: number): void (to subtract from balance)
//         * getBalance(): number (to return current balance)
// */

// class BankAccount {
//     accountNumber: number;
//     private balance: number;

//     constructor(amount: number = 0) {
//         this.accountNumber = Math.floor(Math.random()*10000000 + 1);
//         this.balance = amount;

//     }

//     deposit(amount: number) {
//         this.balance += amount;
//     }

//     withdraw(amount: number) {
//         this.balance -= amount;
//     }

//     get getBalance(): number {
//         return this.balance;
//     }
// }

// const amanAccount = new BankAccount(5000);
// console.log(amanAccount.getBalance);   // 5000

// amanAccount.deposit(2000);
// console.log(amanAccount.getBalance);   // 7000

// amanAccount.withdraw(1000);
// console.log(amanAccount.getBalance);   // 6000





/*
2. Create an Employee Class with Interitance:
    Define an Employee class with properties name and salary.
    Create a subclass Manager that adds a department property.
    Both classes should have a getDetails method that return
    a string with the employee's details.
*/

class Employee {
    constructor(public name: string, public salary: number) {}

    getDetails(): string {
      return `Employee: ${this.name} and Salary: ${this.salary}`  
    }
}

class Manager extends Employee {

    constructor(name: string, salary: number, public department: string = "Manager") {
        super(name, salary);
    }

    getDetails(): string {
        return `Manager ${this.name}, Salary: ${this.salary} and Department: ${this.department}`;
    }
}

const newEmployee = new Employee("Raghav", 20000);
const newManager = new Manager("Uzair", 40000);
console.log(newEmployee.getDetails());
console.log(newManager.getDetails());