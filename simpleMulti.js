// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// FUNDAMENTALS
// Suggest kata description 

//My solution

function simpleMultiplication(number) {
    // your code........
 return number % 2 === 0 ? number * 8 : number * 9;
   // ternary operator condition if true multiply by if else multiply by 9
}

//Other solutions

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8); // Even more Dry code
// } 