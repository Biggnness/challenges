// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//My Solutiom

function reverseWords(str){
    str = str.split(' ').reverse(' ').join(' ')//split, rever and join with a space
    return str; // reverse those words
  }
  console.log(reverseWords('hello world!'))

  //Other Solutions

//   const reverseWords = s => s
//   .split` `
//   .reverse()
//   .join` `;