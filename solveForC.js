// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

//My Solution

function otherAngle(a, b) {
    let solveForC =  180 - (a + b) //find the 3rd angle using old school geometry
   return solveForC;
 }
 console.log(otherAngle(40,90)) //log to see reuslts before submitting

 // Other Solutions

//  const otherAngle = (a, b) => 180 - a - b