// #Adding values of arrays in a shifted way

// You have to write a method, that gets two parameter:

// 1. An array of arrays with int-numbers
// 2. The shifting value
// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.

// #1. Example:

// [[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

// 1,2,3,4,5,6
// 7,7,7,7,7,-7

// --> [8,9,10,11,12,-1]
// #2. Example

// [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

// 1,2,3,4,5,6
//       7,7,7,7,7,7

// --> [1,2,3,11,12,13,7,7,7]

//My Solution

function addingShifted (arrayOfArrays, shift) {
    let array = arrayOfArrays.reduce((pre, val, idx) => (val.forEach((v, i) => (pre[idx * shift + i] = (pre[idx * shift + i] || 0) + v )), pre))
    return array //declare a variable, use the reduce function that takes three params
    //loop through the values of the array of arrays with the params v and i 
  }
  console.log(addingShifted([[1,2,3,4], [1,2,3,4]], 2))
    
// //Other solutions

// unction addingShifted (arrays, shift) {
//     let result = [];
//     let start = 0;
//     for (let array of arrays) {
//       for (let i = 0; i < array.length; i += 1) {
//         result[start + i] = (result[start + i] || 0) + array[i];
//       }
//       start += shift;
//     }
//     return result;
//   }