//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//My solution

function removeExclamationMarks(s) {//create a function that takes a string
    return s.replaceAll('!',''); //use replaceAll function to replace the character
  }
  //Other Solutions

//   function removeExclamationMarks(s) { 
//     return s.split('!').join(''); //Use split/joing function to mainupulate the given string
//   }