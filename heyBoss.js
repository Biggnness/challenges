// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

//My solution

function greet (name, owner) {//create a function that takes two paramaters
    // Add code here
    if (name === owner){//create the conditional to return a situational greeting 
      return 'Hello boss'
    }else{  //create an else statment for anything other than owner
      return 'Hello guest'
    }
  }

  //Other Solutions
  //Ternary Operator
//   function greet (name, owner) {
//     return name === owner ? 'Hello boss' : 	'Hello guest';
//   }