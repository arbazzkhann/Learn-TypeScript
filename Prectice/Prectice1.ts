/*
    1. Write a TypeScript function to calculate the factorial of a number with proper type annotations.
*/
function factorial(num: number): number {
    if(num === 0 || num === 1) return 1;
    return num * factorial(num - 1)  //recursion
}
console.log(factorial(5));  //120