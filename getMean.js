// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//My Solution
function getAverage(marks){//write an function that take an array
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((acc, c) => acc + c)/ marks.length);
    // math floor to retirn the rounded down number
    //use reduce funtion to calculate the total
    //divide by the array length to determin average
  }

  //Other Solution
//   function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }