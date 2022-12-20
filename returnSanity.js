//This function should return an object, but it's not doing what's intended. What's wrong?

//My Solution
function mystery() { //create a function with an object that has a key-value pair
    var results =
      {sanity: 'Hello'};
    return results; //retuen needs to be on the same line to run properly
  }

// Other Solution
//function mystery() {
//     var result = {'sanity': 'Hello'};
//     return result;
//   }