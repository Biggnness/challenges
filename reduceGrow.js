// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//My Solution
function grow(x){//creat a function that takes an array
    return x.reduce((acc, c) => acc * c) //use the reduce method to return the sum * values
    }
//Alternative Solutions
// const grow = x => {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//       res *= x[i];
//     }
//     return res;