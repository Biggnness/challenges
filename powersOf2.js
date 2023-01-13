// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// My Solution
function powersOfTwo(n){
    let arr = [] //Declare the array
    for(let i = 0; i <= n; i++){//loop through the array
      arr.push(Math.pow(2, i))//use push method to place  result of the n variable in a list multplies py the power of 2 using the math.pow function inside the push function
    } 
      
    return arr //return the arr 
    console.log(arr)//console.log to see reults
}
    //Other Solutions
    // function powersOfTwo(n) {
    //     return Array.from({length: n + 1}, (v, k) => 2 ** k);
    //   }