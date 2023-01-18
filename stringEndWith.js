// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//My solution
function solution(str, ending){
    // TODO: complete Use indexOf Method to iterate through the array
    return str.indexOf( ending, str.length - ending.length) !== -1; //
  
  }
  console.log(solution("string", "ing"))

  //Other Solutioj - single line

//   function solution(str, ending){
//     return str.endsWith(ending);
//   }// solution 2

// function solution(str, ending){
//     return str.substr(-ending.length) === ending;
//   }