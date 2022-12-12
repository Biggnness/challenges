// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

function gooseFilter (birds) { //creat a function that take a list of strings
    //My Solution
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; // given array
    return birds.filter(item => !geese.includes(item)) //filter method uses a function 
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

  //Other example
//   const gooseFilter = (birds) => {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     for (let i = 0; i < birds.length; i++) {
//       for (let j = 0; j < geese.length; j++) {
//         if (birds[i] == geese[j]) {
//           birds.splice(i, 1);
//           i--;
//         }
//       }
//     }
//     return birds;
//   };