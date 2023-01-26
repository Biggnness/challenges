// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 

function modifyMultiply (str,loc,num) {
  // Code here
  // task: split up a string to find a word at a given index and multiply it by a number
  // inputs: 1: string: words separated by spaces 2: loc: int, the index to find the word 3: num, int:  the multiplier 
  // return: newString: str multiplied by num joined by a hyphen

  //pseudo:
  // save string string to a variable
  // split the string by spaces to make a new array?
  // get the index of the array
  // save to new string and multiply
    let result = str.split(' ')
    let loc = result.length 
     loc * num
    let combine = result.join('-')
  }
 
console.log(modifyMultiply('This is a String', 3 ,5))

// describe("Tests", () => {
//   it("test", () => {
//   Test.assertEquals(modifyMultiply("This is a string",3 ,5), "string-string-string-string-string", "The string is incorrect");
//   Test.assertEquals(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10), "that-that-that-that-that-that-that-that-that-that");
//   Test.assertEquals(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1), "means");
//   Test.assertEquals(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");
//   Test.assertEquals(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5), "around-around-around-around-around");

//   });
// });