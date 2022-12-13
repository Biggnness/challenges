//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//My solution: filter
function countSheeps(arrayOfSheep) { //create a function that takes a list(array)
    // TODO May the force be with you
     const present = arrayOfSheep.filter(item => item === true, 0); //test case wants the total count of truthy values. Filter the true values
    return present.length //new array created with present filtering the falsy items
  }

  //Other Solutions

  //For Each Method

//   function countSheeps(arrayOfSheep) {
//     let count = 0;
//     arrayOfSheep.forEach(sheep => sheep ? count++ : count)
//     return count
//   }